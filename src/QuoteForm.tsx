import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  EMAIL_RE,
  REQUEST_TYPE_OPTIONS,
  ROLE_OPTIONS,
  type RequestType,
  type Role,
} from "./quote";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 " +
  "focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 transition-colors";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-800">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [requestType, setRequestType] = useState<RequestType>("devis");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const type = (e as CustomEvent).detail as RequestType | undefined;
      if (type) setRequestType(type);
    };
    window.addEventListener("open-quote", handler);
    return () => window.removeEventListener("open-quote", handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => (data.get(name) as string | null)?.trim() ?? "";

    const newErrors: Record<string, string> = {};
    if (value("full_name").length < 2) newErrors.full_name = "Veuillez indiquer votre nom et prénom.";
    if (!value("country")) newErrors.country = "Veuillez indiquer votre pays.";
    if (!EMAIL_RE.test(value("email"))) newErrors.email = "Veuillez saisir une adresse e-mail valide.";
    if (!data.get("consent")) newErrors.consent = "Votre consentement est requis pour envoyer la demande.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    try {
      const endpoint = fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-request`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            full_name: value("full_name"),
            company: value("company"),
            role: (data.get("role") as Role) || "",
            country: value("country"),
            email: value("email"),
            phone: value("phone"),
            request_type: (data.get("request_type") as RequestType) || "",
            message: value("message"),
            website: value("website"),
            consent: data.get("consent") === "on",
            language: "fr",
          }),
        });

      const response = await endpoint;
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerError(
        "L'envoi de votre demande a échoué. Merci de réessayer dans quelques instants.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-white/95 p-10 text-center shadow-xl"
        role="status"
      >
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-9 w-9 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Votre demande a bien été envoyée</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600">
          Merci pour votre intérêt. Nous revenons vers vous dans les meilleurs délais pour répondre
          à votre demande.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-lg bg-sky-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-sky-700"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/95 p-6 shadow-xl sm:p-9"
      aria-busy={status === "loading"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom et prénom" required error={errors.full_name}>
          <input name="full_name" type="text" autoComplete="name" className={inputClass} placeholder="Jean Dupont" />
        </Field>
        <Field label="Société ou cabinet">
          <input name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Cabinet Dupont Conseil" />
        </Field>
        <Field label="Fonction">
          <select name="role" className={inputClass} defaultValue="consultant_qualite">
            {ROLE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </Field>
        <Field label="Pays" required error={errors.country}>
          <input name="country" type="text" autoComplete="country-name" className={inputClass} placeholder="Algérie" />
        </Field>
        <Field label="Adresse e-mail" required error={errors.email}>
          <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="vous@exemple.com" />
        </Field>
        <Field label="Téléphone / WhatsApp">
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="+213 ..." />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Type de demande" required>
            <select name="request_type" className={inputClass} value={requestType} onChange={(e) => setRequestType(e.target.value as RequestType)}>
              {REQUEST_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea name="message" rows={4} className={inputClass} placeholder="Précisez votre besoin, votre contexte ou vos questions..." />
          </Field>
        </div>
      </div>

      {/* Champ piège à robots : invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
          <input
            name="consent"
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />
          <span>
            J'accepte que mes informations soient utilisées pour traiter ma demande et être
            recontacté à ce sujet.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.consent}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
          <p className="flex items-start gap-2 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {serverError}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-700 hover:shadow-sky-700/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer ma demande
          </>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-600">
        <ShieldCheck className="h-3.5 w-3.5 text-slate-600" />
        Vos informations sont transmises de manière sécurisée et ne sont jamais partagées.
      </p>
    </form>
  );
}
