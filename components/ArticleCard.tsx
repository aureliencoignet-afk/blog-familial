import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/article/${article.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {article.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition-colors">
            {article.title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>👤 {article.author}</span>
            <span>•</span>
            <span>📅 {formattedDate}</span>
          </div>
          <p className="text-gray-600 mb-4 flex-1">
            {article.excerpt}
          </p>
          <div className="text-purple-600 font-medium hover:text-purple-700">
            Lire la suite →
          </div>
        </div>
      </div>
    </Link>
  );
}
