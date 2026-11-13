export type Role =
  | "consultant_qualite"
  | "auditeur"
  | "responsable_qualite"
  | "directeur"
  | "cabinet_conseil"
  | "autre";

export type RequestType = "devis" | "achat" | "informations" | "demonstration" | "collaboration";

export const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: "consultant_qualite", label: "Consultant qualité" },
  { value: "auditeur", label: "Auditeur" },
  { value: "responsable_qualite", label: "Responsable qualité" },
  { value: "directeur", label: "Directeur ou dirigeant" },
  { value: "cabinet_conseil", label: "Cabinet de conseil" },
  { value: "autre", label: "Autre" },
];

export const REQUEST_TYPE_OPTIONS: { value: RequestType; label: string }[] = [
  { value: "devis", label: "Je souhaite recevoir un devis" },
  { value: "achat", label: "Je souhaite acheter le pack" },
  { value: "informations", label: "Je souhaite recevoir davantage d'informations" },
  { value: "demonstration", label: "Je souhaite une démonstration" },
  { value: "collaboration", label: "Je souhaite discuter d'une collaboration" },
];

export const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function scrollToQuote(requestType?: RequestType) {
  window.dispatchEvent(new CustomEvent("open-quote", { detail: requestType }));
}
