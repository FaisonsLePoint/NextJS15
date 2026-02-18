### Tableau Comparatif des Types de Composants Next.js

| Caractéristique | Server Components (RSC) | Client Components | Server Actions | Route Handlers
|-----|-----|-----|-----|-----
| **Déclaration** | Par défaut (aucune directive) | `'use client'` en haut du fichier | `'use server'` en haut de la fonction | Fichier `route.ts` dans `/app`
| **Exécution** | Serveur uniquement | Serveur (SSR) + Client | Serveur uniquement | Serveur uniquement
| **Accès aux APIs serveur** | ✅ Direct (DB, fs, env variables) | ❌ Non | ✅ Direct | ✅ Direct
| **Hooks React** | ❌ Non (useState, useEffect, etc.) | ✅ Oui | ❌ Non | ❌ Non
| **Interactivité** | ❌ Non (pas d'événements onClick, etc.) | ✅ Oui | ❌ Non (mais appelable depuis client) | ❌ Non
| **Bundle JavaScript** | ❌ Pas envoyé au client | ✅ Envoyé au client | ❌ Pas envoyé au client | ❌ Pas envoyé au client
| **Taille du bundle** | 0 KB côté client | Augmente le bundle | 0 KB côté client | 0 KB côté client
| **Accès au DOM** | ❌ Non | ✅ Oui (window, document) | ❌ Non | ❌ Non
| **Streaming** | ✅ Oui (avec Suspense) | ⚠️ Limité | ❌ Non | ⚠️ Possible (streaming responses)
| **SEO** | ✅ Excellent (rendu serveur) | ✅ Bon (SSR initial) | N/A | N/A
| **Cas d'usage** | Fetch data, layouts, contenu statique | Formulaires, interactivité, hooks | Mutations, formulaires, actions | API endpoints, webhooks
| **Peut importer** | Server + Client Components | Client Components uniquement | Tout | Tout
| **Performance** | ⚡ Excellente (pas de JS client) | ⚠️ Dépend du bundle | ⚡ Excellente | ⚡ Excellente
| **Revalidation** | ✅ ISR, cache tags | ⚠️ Via fetch ou router | ✅ Peut revalider le cache | ✅ Peut revalider le cache


## Notes Importantes

**Server Components (par défaut)**

- Idéal pour le contenu qui ne nécessite pas d'interactivité
- Peut faire des requêtes DB directement
- Réduit drastiquement la taille du bundle JavaScript


**Client Components**

- Nécessaire pour l'interactivité (onClick, onChange, etc.)
- Requis pour les hooks React (useState, useEffect, useContext, etc.)
- Peut utiliser les APIs du navigateur


**Server Actions**

- Permet d'appeler des fonctions serveur depuis le client
- Parfait pour les mutations de données (POST, PUT, DELETE)
- Peut être utilisé dans les formulaires avec `action={serverAction}`


**Route Handlers**

- Remplace les API routes de Pages Router
- Permet de créer des endpoints REST
- Supporte GET, POST, PUT, DELETE, PATCH, etc.