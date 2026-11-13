import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Adresse de réception, définie UNIQUEMENT côté serveur.
const RECIPIENT = "isotools2022@gmail.com";

const ROLES: Record<string, string> = {
  consultant_qualite: "Consultant qualité",
  auditeur: "Auditeur",
  responsable_qualite: "Responsable qualité",
  directeur: "Directeur ou dirigeant",
  cabinet_conseil: "Cabinet de conseil",
  autre: "Autre",
};

const REQUEST_TYPES: Record<string, string> = {
  devis: "Je souhaite recevoir un devis",
  achat: "Je souhaite acheter le pack",
  informations: "Je souhaite recevoir davantage d'informations",
  demonstration: "Je souhaite une démonstration",
  collaboration: "Je souhaite discuter d'une collaboration",
};

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // Piège anti-spam : un bot remplit tous les champs, un humain non.
  if (clean(payload.website, 0) !== "") {
    return json({ ok: true }, 200);
  }

  const fullName = clean(payload.full_name, 120);
  const company = clean(payload.company, 120);
  const role = clean(payload.role, 40);
  const country = clean(payload.country, 80);
  const email = clean(payload.email, 160).toLowerCase();
  const phone = clean(payload.phone, 40);
  const requestType = clean(payload.request_type, 30);
  const message = clean(payload.message, 2000);
  const language = clean(payload.language, 5) || "fr";
  const consent = payload.consent === true;

  // Validation stricte, miroir des contraintes de la base de données.
  if (!consent) return json({ error: "Consentement requis" }, 400);
  if (fullName.length < 2) return json({ error: "Nom invalide" }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: "E-mail invalide" }, 400);
  if (country.length < 2) return json({ error: "Pays invalide" }, 400);
  if (!ROLES[role]) return json({ error: "Fonction invalide" }, 400);
  if (!REQUEST_TYPES[requestType]) return json({ error: "Type de demande invalide" }, 400);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error: insertError } = await supabase.from("quote_requests").insert({
    full_name: fullName,
    company: company || null,
    role,
    country,
    email,
    phone: phone || null,
    request_type: requestType,
    message: message || null,
    language,
  });

  if (insertError) {
    console.error("Insert error:", insertError.message);
    return json({ error: "Enregistrement impossible" }, 400);
  }

  // Notification e-mail : optionnelle, l'envoi ne doit pas bloquer la demande.
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (apiKey) {
    const escape = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
    const row = (label: string, value: string) =>
      value
        ? `<tr><td style="padding:6px 14px;color:#64748b;font-size:13px">${label}</td><td style="padding:6px 14px;color:#0f172a;font-size:14px;font-weight:500">${escape(value)}</td></tr>`
        : "";

    const html = `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
<table style="width:100%;background:#0b1f3a;padding:18px 24px"><tr><td style="color:#ffffff;font-size:16px;font-weight:bold">Nouvelle demande – Pack Consultant IATF 16949</td></tr></table>
<table style="width:100%;padding:12px 0">
${row("Type de demande", REQUEST_TYPES[requestType])}
${row("Nom et prénom", fullName)}
${row("Société", company)}
${row("Fonction", ROLES[role])}
${row("Pays", country)}
${row("E-mail", email)}
${row("Téléphone", phone)}
${row("Message", message.replace(/\n/g, "<br>"))}
${row("Date de réception", date)}
</table>
<p style="padding:0 24px 16px;color:#94a3b8;font-size:12px">La demande est également enregistrée dans la base de données. Répondre à : ${escape(email)}</p>
</div>`;

    try {
      const res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Pack Consultant IATF <onboarding@resend.dev>",
          to: RECIPIENT,
          reply_to: email,
          subject: "Nouvelle demande – Pack Consultant IATF 16949",
          html,
        }),
      });
      if (!res.ok) {
        console.error("Resend error:", await res.text());
      }
    } catch (e) {
      console.error("Resend failure:", e);
    }
  }

  return json({ ok: true }, 200);
});
