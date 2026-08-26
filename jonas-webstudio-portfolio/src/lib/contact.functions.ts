import { createServerFn } from "@tanstack/react-start";
import { describeAddons, describePackage } from "@/lib/site-data";

type ContactInput = {
  name: string;
  email: string;
  message: string;
  business?: string | undefined;
  /** i18n key of the picked package, e.g. "tierGrowth" or "pkgCustom". */
  packageKey?: string | undefined;
  /** Add-on ids from `ADDONS`, e.g. ["care", "seo"]. */
  addons?: readonly string[] | undefined;
  locale?: string | undefined;
  source?: string | undefined;
};

type Inquiry = {
  name: string;
  email: string;
  message: string;
  business: string | null;
  packageLabel: string | null;
  addonLabels: string[];
  locale: string | null;
  source: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Plain-text body the studio receives, and the record kept in Supabase. */
function composeInquiry(data: Inquiry): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.business ? [`Business: ${data.business}`] : []),
    ...(data.packageLabel ? [`Package: ${data.packageLabel}`] : []),
    ...(data.addonLabels.length ? [`Add-ons: ${data.addonLabels.join(", ")}`] : []),
    ...(data.locale ? [`Language: ${data.locale}`] : []),
    ...(data.source ? [`Page: ${data.source}`] : []),
    "",
    data.message,
  ].join("\n");
}

async function storeInquiry(data: Inquiry, body: string): Promise<boolean> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("contact_messages").insert({
    name: data.name,
    email: data.email,
    message: body,
    locale: data.locale,
    source: data.source,
  });
  if (error) throw new Error(error.message);
  return true;
}

async function emailInquiry(subject: string, body: string, replyTo: string): Promise<boolean> {
  const { sendStudioEmail } = await import("@/lib/email.server");
  const result = await sendStudioEmail({ subject, text: body, replyTo });
  if (!result.sent) console.warn(`[inquiry] email not sent: ${result.reason}`);
  return result.sent;
}

/** True when at least one of the two delivery routes has credentials. */
async function isDeliveryConfigured(): Promise<boolean> {
  const { isEmailConfigured } = await import("@/lib/email.server");
  const supabaseReady = Boolean(
    process.env["SUPABASE_URL"] && process.env["SUPABASE_SERVICE_ROLE_KEY"],
  );
  return isEmailConfigured() || supabaseReady;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: ContactInput): Inquiry => {
    const name = String(data?.name ?? "").trim();
    const email = String(data?.email ?? "").trim();
    const message = String(data?.message ?? "").trim();

    if (name.length < 2 || name.length > 120) throw new Error("Please enter your name.");
    if (!EMAIL_RE.test(email) || email.length > 200) throw new Error("Please enter a valid email.");
    if (message.length < 5 || message.length > 5000) throw new Error("Please write a message.");

    const addons = Array.isArray(data?.addons) ? data.addons.map(String).slice(0, 20) : [];
    const business = String(data?.business ?? "").trim();

    return {
      name,
      email,
      message,
      business: business.slice(0, 200) || null,
      packageLabel: describePackage(String(data?.packageKey ?? "")),
      addonLabels: describeAddons(addons),
      locale: String(data?.locale ?? "").slice(0, 8) || null,
      source: String(data?.source ?? "").slice(0, 200) || null,
    };
  })
  .handler(async ({ data }): Promise<{ ok: true; emailed: boolean }> => {
    const body = composeInquiry(data);
    const subject = data.packageLabel
      ? `Website inquiry — ${data.packageLabel} — ${data.name}`
      : `Website inquiry — ${data.name}`;

    // Store and email independently: an email outage must not lose the lead,
    // and a database hiccup must not stop the studio from hearing about it.
    const [stored, emailed] = await Promise.all([
      storeInquiry(data, body).catch((error: unknown) => {
        console.error("[inquiry] could not store message", error);
        return false;
      }),
      emailInquiry(subject, body, data.email).catch((error: unknown) => {
        console.error("[inquiry] could not send email", error);
        return false;
      }),
    ]);

    if (!stored && !emailed) {
      // Nothing configured (a fresh checkout, or a deploy without env vars) is
      // a setup gap, not a delivery failure: log the inquiry so it is at least
      // recoverable from the server logs rather than showing a broken form.
      // A configured transport that actually failed does surface an error.
      if (!(await isDeliveryConfigured())) {
        console.warn(`[inquiry] no delivery configured, logging instead:\n${subject}\n${body}`);
        return { ok: true, emailed: false };
      }
      throw new Error("Couldn't send your message. Please email us directly.");
    }

    return { ok: true, emailed };
  });
