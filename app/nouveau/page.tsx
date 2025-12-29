'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function NewArticlePage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pour l'instant, on affiche juste une alerte
    // Plus tard, on pourra sauvegarder dans une vraie base de données
    alert('Article créé avec succès ! Pour l\'instant, les articles ne sont pas sauvegardés. Nous ajouterons cette fonctionnalité bientôt.');
    
    // Réinitialiser le formulaire
    setTitle('');
    setAuthor('');
    setExcerpt('');
    setContent('');
    setImageUrl('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            ✏️ Créer un nouvel article
          </h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de l'article *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Un titre accrocheur..."
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Auteur *
                </label>
                <input
                  type="text"
                  id="author"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Votre nom..."
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Résumé *
                </label>
                <textarea
                  id="excerpt"
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Un court résumé de votre article..."
                />
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  URL de l'image (optionnel)
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://exemple.com/image.jpg"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Vous pouvez utiliser une URL d'image depuis Unsplash, Pexels, ou votre propre hébergement
                </p>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu de l'article * (Markdown supporté)
                </label>
                <textarea
                  id="content"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                  placeholder="Écrivez votre article ici... Vous pouvez utiliser Markdown :&#10;&#10;# Titre principal&#10;## Sous-titre&#10;&#10;Paragraphe de texte...&#10;&#10;- Liste à puces&#10;- Deuxième élément"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Vous pouvez utiliser le Markdown : # pour les titres, ## pour les sous-titres, - pour les listes, etc.
                </p>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  📝 Publier l'article
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
