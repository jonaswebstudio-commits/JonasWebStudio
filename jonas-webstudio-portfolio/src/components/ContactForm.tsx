import { useState, type FormEvent } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { sendContactMessage } from "@/lib/contact.functions";
import { STUDIO_EMAIL } from "@/lib/site-data";

export function ContactForm() {
  const { t, lang } = useLanguage();
  const send = useServerFn(sendContactMessage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await send({
        data: {
          name,
          email,
          message,
          locale: lang,
          source: typeof window !== "undefined" ? window.location.pathname : undefined,
        },
      });
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      toast.success(t("formSent"));
    } catch (err) {
      setStatus("idle");
      toast.error(err instanceof Error ? err.message : t("formError"));
    }
  };

  const field =
    "w-full rounded-2xl border border-border bg-card/60 px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <form
      onSubmit={onSubmit}
      className="glass-panel mt-12 rounded-3xl p-6 text-left md:p-8"
      aria-label={t("contactHeading")}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="sr-only" htmlFor="contact-name">
          {t("formName")}
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          className={field}
          placeholder={t("formName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="sr-only" htmlFor="contact-email">
          {t("formEmail")}
        </label>
        <input
          id="contact-email"
          name="email"
          autoComplete="email"
          className={field}
          type="email"
          placeholder={t("formEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <label className="sr-only" htmlFor="contact-message">
        {t("formMessage")}
      </label>
      <textarea
        id="contact-message"
        name="message"
        className={`${field} mt-4 min-h-32 resize-y`}
        placeholder={t("formMessage")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-neon)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] disabled:opacity-60"
        >
          {status === "sending" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {status === "sending" ? t("formSending") : t("formSendMsg")}
        </button>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-4 w-4 text-primary" />
          {t("emailNote")}{" "}
          <a
            className="text-foreground underline-offset-4 hover:underline"
            href={`mailto:${STUDIO_EMAIL}`}
          >
            {STUDIO_EMAIL}
          </a>
        </span>
      </div>
      <p aria-live="polite" className="sr-only">
        {status === "sent" ? t("formSent") : ""}
      </p>
      {status === "sent" && (
        <p className="mt-4 rounded-2xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm text-foreground">
          {t("formSent")}
        </p>
      )}
    </form>
  );
}
