# Blog Familial 📝

Un blog familial moderne et élégant créé avec Next.js, React, TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

### Prérequis
- Node.js v18+ installé
- Git installé

### Installation

1. Cloner ou télécharger ce projet
2. Ouvrir un terminal dans le dossier du projet
3. Installer les dépendances :
```bash
npm install
```

4. Lancer le serveur de développement :
```bash
npm run dev
```

5. Ouvrir votre navigateur sur http://localhost:3000

## 📁 Structure du projet

```
blog-familial/
├── app/                    # Pages de l'application
│   ├── page.tsx           # Page d'accueil (liste des articles)
│   ├── article/[id]/      # Page d'un article individuel
│   └── nouveau/           # Page pour créer un article
├── components/            # Composants réutilisables
│   ├── Header.tsx        # En-tête du blog
│   └── ArticleCard.tsx   # Carte d'article
├── data/                  # Données
│   └── articles.ts       # Articles du blog (temporaire)
├── types/                 # Types TypeScript
│   └── article.ts        # Type Article
└── public/               # Fichiers statiques
```

## ✨ Fonctionnalités actuelles

- ✅ Affichage de la liste des articles
- ✅ Affichage d'un article complet
- ✅ Formulaire de création d'article
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Support du Markdown pour le contenu
- ✅ Support des images

## 🔄 Prochaines évolutions possibles

### À court terme
1. **Sauvegarder les articles** dans une vraie base de données (Supabase, Firebase)
2. **Ajouter l'authentification** pour protéger la création d'articles
3. **Upload d'images** directement depuis l'ordinateur
4. **Système de catégories** ou de tags
5. **Recherche** dans les articles

### À moyen terme
1. **Système de commentaires**
2. **Modifier/Supprimer** des articles existants
3. **Mode brouillon** pour les articles en cours
4. **Partage sur réseaux sociaux**
5. **Flux RSS**

### À long terme
1. **Galerie photos**
2. **Calendrier familial**
3. **Espace privé** pour certains articles
4. **Notifications** par email

## 🛠️ Comment ajouter un article maintenant

Pour le moment, les articles sont stockés dans le fichier `data/articles.ts`.

Pour ajouter un nouvel article :
1. Ouvre le fichier `data/articles.ts`
2. Ajoute un nouvel objet dans le tableau `articles` :

```typescript
{
  id: '4',  // Numéro unique
  title: 'Titre de l\'article',
  author: 'Nom de l\'auteur',
  date: '2024-12-29',  // Format YYYY-MM-DD
  excerpt: 'Court résumé de l\'article',
  content: `# Contenu en Markdown
  
  Votre texte ici...`,
  imageUrl: 'https://images.unsplash.com/...'  // Optionnel
}
```

## 📝 Utiliser le Markdown

Dans le contenu de vos articles, vous pouvez utiliser :

- `# Titre principal` pour les grands titres
- `## Sous-titre` pour les sous-titres
- `**texte en gras**` pour le texte en gras
- `- élément` pour les listes à puces
- `1. élément` pour les listes numérotées

## 🎨 Personnalisation

### Changer les couleurs
Les couleurs sont définies dans les fichiers avec Tailwind CSS :
- Couleur principale : `purple-600` (violet)
- Vous pouvez les remplacer par : `blue-600`, `green-600`, `red-600`, etc.

### Modifier le design
- `components/Header.tsx` : En-tête du blog
- `app/globals.css` : Styles globaux et Markdown
- Tous les composants utilisent Tailwind CSS

## 🚀 Déploiement

Une fois prêt, vous pourrez déployer gratuitement sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Railway**

Instructions de déploiement à venir !

## 🆘 Besoin d'aide ?

Pour toute modification ou nouvelle fonctionnalité, revenez vers Claude avec :
- Une description de ce que vous voulez ajouter
- Les problèmes que vous rencontrez
- Les idées que vous avez

---

Créé avec ❤️ pour votre famille
