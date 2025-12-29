import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { getArticleById } from '@/data/articles';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          ← Retour aux articles
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          {article.imageUrl && (
            <div className="relative h-96 w-full">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <span className="flex items-center gap-2">
                👤 {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                📅 {formattedDate}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </article>

        <div className="max-w-4xl mx-auto mt-8">
          <Link 
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700"
          >
            ← Retour aux articles
          </Link>
        </div>
      </main>
    </div>
  );
}
