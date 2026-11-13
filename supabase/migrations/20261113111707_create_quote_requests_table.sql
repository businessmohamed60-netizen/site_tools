/*
# Table des demandes de devis – Pack Consultant IATF 16949

1. Nouvelle table
- `quote_requests`
  - `id` (uuid, clé primaire)
  - `full_name` (text, obligatoire) – nom et prénom du demandeur
  - `company` (text, facultatif) – société ou cabinet
  - `role` (text, obligatoire) – fonction parmi la liste imposée
  - `country` (text, obligatoire) – pays
  - `email` (text, obligatoire) – adresse e-mail de réponse
  - `phone` (text, facultatif) – téléphone / WhatsApp
  - `request_type` (text, obligatoire) – type de demande parmi la liste imposée
  - `message` (text, facultatif) – message libre
  - `language` (text, valeur par défaut 'fr') – langue de la page d'origine
  - `created_at` (timestamptz, valeur par défaut now())

2. Sécurité
- RLS activée sur `quote_requests`.
- Aucune policy de lecture : la table n'est PAS lisible publiquement (données personnelles).
- GRANT INSERT sur les colonnes autorisées uniquement, aux rôles anon et authenticated.
- Policy d'INSERT avec vérifications serveur : nom et e-mail obligatoires, e-mail bien formé,
  fonction et type de demande restreints aux valeurs attendues.

3. Notes
- Table mono-tenant, sans connexion utilisateur : les policies ciblent anon + authenticated.
- La lecture se fait uniquement côté serveur (fonction edge avec service_role).
*/
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text,
  role text NOT NULL,
  country text NOT NULL,
  email text NOT NULL,
  phone text,
  request_type text NOT NULL,
  message text,
  language text NOT NULL DEFAULT 'fr',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

GRANT INSERT (full_name, company, role, country, email, phone, request_type, message, language)
  ON quote_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(full_name) BETWEEN 2 AND 120
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND role IN ('consultant_qualite','auditeur','responsable_qualite','directeur','cabinet_conseil','autre')
  AND request_type IN ('devis','achat','informations','demonstration','collaboration')
  AND char_length(coalesce(country, '')) BETWEEN 2 AND 80
);