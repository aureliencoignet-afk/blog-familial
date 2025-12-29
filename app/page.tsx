import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import { supabase } from '@/lib/supabase';
import { Article } from '@/types/article';

export const revalidate = 0; // Désactive le cache pour toujours avoir les données à jour

async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erreur lors du chargement des articles:', error);
    return [];
  }

  // Convertir les données Supabase au format Article
  return (data || []).map(article => ({
    id: article.id,
    title: article.title,
    content: article.content,
    author: article.author,
    date: new Date(article.created_at).toISOString().split('T')[0],
    excerpt: article.excerpt,
    imageUrl: article.image_url
  }));
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bienvenue sur notre blog familial
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos histoires, nos aventures et nos moments partagés
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">Aucun article pour le moment</p>
            <p className="text-gray-400">Commencez par créer votre premier article !</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2024 Blog Familial - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
