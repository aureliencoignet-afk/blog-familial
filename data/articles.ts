import { Article } from '@/types/article';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Bienvenue sur notre blog familial',
    author: 'Famille',
    date: '2024-12-29',
    excerpt: 'Découvrez notre nouvel espace pour partager nos moments et nos histoires en famille.',
    content: `# Bienvenue sur notre blog familial !

Nous sommes ravis de lancer ce nouvel espace où nous pourrons partager nos aventures, nos réflexions et nos moments en famille.

## Pourquoi ce blog ?

Ce blog est notre petit coin d'internet où nous pouvons :
- Partager nos photos et nos souvenirs
- Raconter nos voyages et nos découvertes
- Garder une trace de nos moments précieux
- Rester connectés même à distance

## À très bientôt !

Nous avons hâte de remplir ce blog de belles histoires et de jolis souvenirs.`,
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Nos recettes préférées',
    author: 'Famille',
    date: '2024-12-28',
    excerpt: 'Quelques recettes qui font l\'unanimité à la maison.',
    content: `# Nos recettes familiales préférées

Voici quelques plats que nous adorons préparer et déguster ensemble.

## Le gratin dauphinois de grand-mère

Un classique indémodable qui réunit toujours la famille autour de la table.

## La tarte aux pommes du dimanche

Simple mais tellement délicieuse, elle embaume toute la maison.

Nous partagerons bientôt les recettes complètes !`,
    imageUrl: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Week-end à la campagne',
    author: 'Famille',
    date: '2024-12-27',
    excerpt: 'Notre escapade campagnarde et nos découvertes locales.',
    content: `# Un week-end ressourçant à la campagne

Nous avons passé un magnifique week-end loin de l'agitation de la ville.

## Au programme

- Balades en forêt
- Visite du marché local
- Soirée jeux de société au coin du feu
- Petit-déjeuner tardif avec vue sur les champs

Ces moments simples sont souvent les plus mémorables.`,
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop'
  }
];

// Fonction pour récupérer tous les articles
export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Fonction pour récupérer un article par son ID
export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}
