/*
# Durcissement des privilèges sur quote_requests

1. Modifications
- Révocation de tous les privilèges par défaut accordés à anon et authenticated sur `quote_requests`.
- Nouveau GRANT limité à INSERT sur les colonnes autorisées uniquement (pas de lecture,
  pas de modification, pas de suppression possibles via l'API publique).

2. Sécurité
- La table ne reste accessible qu'en insertion, avec la policy existante qui valide
  nom, e-mail, fonction, type de demande et pays.
- La lecture des demandes reste réservée au service_role (fonction edge).
*/
REVOKE ALL ON quote_requests FROM anon, authenticated;

GRANT INSERT (full_name, company, role, country, email, phone, request_type, message, language)
  ON quote_requests TO anon, authenticated;