import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Send, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { sendContactMessage } from "@/lib/contact.functions";
import { ADDONS, CUSTOM_PACKAGE_KEY, PRICING } from "@/lib/site-data";

interface InquiryDialogProps {
  /** i18n key of the package the visitor clicked, or `CUSTOM_PACKAGE_KEY`. */
  packageKey: string;
  /** Add-on ids ticked on open. */
  addons?: readonly string[];
  onClose: () => void;
}

const field =
  "w-full rounded-2xl border border-border bg-card/60 px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

export function InquiryDialog({ packageKey, addons = [], onClose }: InquiryDialogProps) {
  const { t, lang } = useLanguage();
  const send = useServerFn(sendContactMessage);

  const [selectedPackage, setSelectedPackage] = useState(packageKey);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([...addons]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const tier = PRICING.find((p) => p.key === selectedPackage);

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await send({
        data: {
          name,
          email,
          message,
          business: businessName,
          packageKey: selectedPackage,
          addons: selectedAddons,
          locale: lang,
          source: typeof window !== "undefined" ? window.location.pathname : undefined,
        },
      });
      toast.success(t("formSent"));
      onClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("formError"));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/85 p-4 backdrop-blur-md">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        className="relative mt-10 mb-10 w-full max-w-3xl rounded-3xl border border-border bg-card p-5 md:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute -top-3 -right-3 rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <form onSubmit={onSubmit}>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("briefLabel")}</p>
          <h2 id="inquiry-title" className="mt-3 text-2xl font-semibold">
            {t(selectedPackage)}
            {tier && <span className="text-muted-foreground"> — {tier.price}</span>}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{t("briefIntro")}</p>

          <div className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="inquiry-package"
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                {t("inquiryPackage")}
              </label>
              <select
                id="inquiry-package"
                className={`${field} mt-2`}
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
              >
                {PRICING.map((p) => (
                  <option key={p.key} value={p.key} className="bg-card">
                    {t(p.key)} — {p.price}
                  </option>
                ))}
                <option value={CUSTOM_PACKAGE_KEY} className="bg-card">
                  {t(CUSTOM_PACKAGE_KEY)}
                </option>
              </select>
            </div>

            <fieldset>
              <legend className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t("inquiryAddons")}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {ADDONS.map((addon) => (
                  <label
                    key={addon.id}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm transition-colors hover:border-primary/40"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-primary"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddon(addon.id)}
                    />
                    {t(addon.key)}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-3 md:grid-cols-2">
              <input
                className={field}
                placeholder={t("formName")}
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={field}
                type="email"
                placeholder={t("formEmail")}
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              className={field}
              placeholder={t("briefBusinessPh")}
              autoComplete="organization"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <textarea
              className={`${field} min-h-28 resize-y`}
              placeholder={t("briefNotesPh")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-neon)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {sending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {sending ? t("formSending") : t("inquirySend")}
          </button>
        </form>
      </div>
    </div>
  );
}
