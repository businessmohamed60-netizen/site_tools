import {
  LayoutDashboard,
  BookOpenCheck,
  Network,
  ClipboardCheck,
  FileCheck2,
  ShieldAlert,
  Factory,
  Truck,
  Users,
  Wrench,
  Bug,
  Building2,
  Gauge,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const FAMILIES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LayoutDashboard,
    title: "Pilotage et offre consultant",
    description: "Structuration de vos prestations, cadrage de mission et pilotage de vos interventions.",
  },
  {
    icon: BookOpenCheck,
    title: "Référentiels et exigences",
    description: "Traduction des exigences IATF 16949 en documents concrets, prêts à adapter.",
  },
  {
    icon: Network,
    title: "Système de management et processus",
    description: "Cartographie des processus, politiques, objectifs et interactions du système.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit et évaluation",
    description: "Plans d'audit, check-lists et rapports pour vos audits internes et diagnostics.",
  },
  {
    icon: FileCheck2,
    title: "APQP, développement et PPAP",
    description: "Dossiers de développement produit, plans de validation et soumissions PPAP.",
  },
  {
    icon: ShieldAlert,
    title: "AMDEC, risques et contingence",
    description: "Analyses des modes de défaillance, plans de maîtrise des risques et plans de continuité.",
  },
  {
    icon: Factory,
    title: "Production et maîtrise opérationnelle",
    description: "Instructions de travail, gammes et documents de suivi de production.",
  },
  {
    icon: Truck,
    title: "Achats et fournisseurs",
    description: "Évaluation, sélection et suivi de la performance de vos fournisseurs.",
  },
  {
    icon: Users,
    title: "Ressources humaines, compétences et formation",
    description: "Matrices de compétences, plans de formation et évaluation du personnel.",
  },
  {
    icon: Wrench,
    title: "Maintenance et moyens",
    description: "Plans de maintenance préventive, gestion des équipements et de leur efficacité.",
  },
  {
    icon: Bug,
    title: "Non-conformités, 8D et amélioration",
    description: "Traitement des non-conformités, résolution de problèmes 8D et actions correctives.",
  },
  {
    icon: Building2,
    title: "CSR constructeurs et clients",
    description: "Exigences spécifiques clients, dont celles liées aux constructeurs automobiles.",
  },
  {
    icon: Gauge,
    title: "Tableaux de bord et indicateurs",
    description: "Indicateurs de performance et tableaux de bord pour piloter le système qualité.",
  },
];

export const VIDEO_1 = {
  src: "assets/videos/demo-1.mp4",
  title: "Démonstration 1 – Découverte du pack consultant",
  description: "Un aperçu général de la bibliothèque : volume, organisation et types de documents inclus.",
};

export const VIDEO_2 = {
  src: "assets/videos/demo-2.mp4",
  title: "Démonstration 2 – Organisation et utilisation des outils",
  description: "Comment naviguer dans les familles de documents et les utiliser au quotidien dans vos missions.",
};

export const PROFILES: { title: string; description: string }[] = [
  {
    title: "Consultants IATF 16949",
    description: "Gagnez des centaines d'heures de rédaction et concentrez-vous sur l'accompagnement à valeur ajoutée.",
  },
  {
    title: "Consultants ISO 9001",
    description: "Étendez votre offre vers l'automobile avec des documents alignés sur les exigences sectorielles.",
  },
  {
    title: "Auditeurs qualité",
    description: "Utilisez des check-lists et supports d'audit structurés, cohérents et immédiatement exploitables.",
  },
  {
    title: "Experts en systèmes de management",
    description: "Appuyez vos diagnostics sur des matrices et tableaux de bord éprouvés.",
  },
  {
    title: "Accompagnateurs de fournisseurs automobiles",
    description: "Déployez rapidement des outils de progression chez vos clients fournisseurs.",
  },
  {
    title: "Cabinets de conseil et formateurs",
    description: "Équipez toute votre équipe d'une bibliothèque commune, personnalisée à votre marque.",
  },
];

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "À qui s'adresse le pack ?",
    answer:
      "Aux consultants IATF 16949 et ISO 9001, auditeurs qualité, experts en systèmes de management, accompagnateurs de fournisseurs automobiles, cabinets de conseil et formateurs du secteur.",
  },
  {
    question: "Quels types de documents sont inclus ?",
    answer:
      "Plus de 330 fichiers organisés en 13 familles : modèles Word et Excel, méthodes, procédures, formulaires, matrices, check-lists, supports d'audit, tableaux de bord et fichiers d'accompagnement.",
  },
  {
    question: "Les documents sont-ils modifiables ?",
    answer:
      "Oui. Il s'agit de documents professionnels personnalisables que vous adaptez librement à vos méthodes de travail et à celles de vos clients.",
  },
  {
    question: "Puis-je intégrer mon logo et mon identité visuelle ?",
    answer:
      "Oui. C'est tout l'intérêt de la marque blanche : vous personnalisez les documents avec votre logo, vos couleurs et votre identité de cabinet pour valoriser vos prestations.",
  },
  {
    question: "Comment fonctionnent les barres d'aide ?",
    answer:
      "Certains documents intègrent des barres d'aide et des informations guidant leur renseignement et leur utilisation, directement dans les fichiers Word et Excel.",
  },
  {
    question: "Comment recevoir le pack après achat ?",
    answer:
      "Les modalités de livraison sont définies directement avec le vendeur. Indiquez votre intention d'achat via le formulaire pour être contacté et convenir ensemble des conditions.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Utilisez le formulaire de contact en sélectionnant « Je souhaite recevoir un devis ». Vous recevrez une proposition adaptée à votre situation.",
  },
  {
    question: "Puis-je demander une démonstration ?",
    answer:
      "Oui. Sélectionnez « Je souhaite une démonstration » dans le formulaire, ou consultez les deux vidéos de démonstration disponibles sur cette page.",
  },
];
