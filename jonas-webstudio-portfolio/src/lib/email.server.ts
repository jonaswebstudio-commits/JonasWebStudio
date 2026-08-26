// Outbound email for site inquiries. Kept provider-agnostic behind one function
// so the transport can be swapped without touching the server function.
//
// Configure on the server (never in a VITE_* variable — these are secrets):
//   RESEND_API_KEY     — API key from https://resend.com (required to send)
//   INQUIRY_TO_EMAIL   — studio inbox, defaults to STUDIO_EMAIL
//   INQUIRY_FROM_EMAIL — verified sender, e.g. "Jonas Webstudio <hello@yourdomain.com>"
//
// Without RESEND_API_KEY nothing is sent: the inquiry is still stored in
// Supabase and the caller is told delivery was skipped.
import { STUDIO_EMAIL } from "@/lib/site-data";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type EmailResult = { sent: true } | { sent: false; reason: string };

/** Whether an email transport is set up at all, as opposed to failing. */
export function isEmailConfigured(): boolean {
  return Boolean(process.env["RESEND_API_KEY"]);
}

export async function sendStudioEmail(input: {
  subject: string;
  text: string;
  replyTo?: string | undefined;
}): Promise<EmailResult> {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    return { sent: false, reason: "RESEND_API_KEY is not configured" };
  }

  const to = process.env["INQUIRY_TO_EMAIL"] || STUDIO_EMAIL;
  // Resend's shared onboarding sender only delivers to the account owner, so a
  // verified domain sender should be configured before going live.
  const from = process.env["INQUIRY_FROM_EMAIL"] || "Jonas Webstudio <onboarding@resend.dev>";

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: input.subject,
      text: input.text,
      ...(input.replyTo && { reply_to: input.replyTo }),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return { sent: false, reason: `Email provider returned ${response.status} ${detail}`.trim() };
  }

  return { sent: true };
}
