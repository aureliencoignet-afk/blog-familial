import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-bold hover:opacity-90 transition-opacity">
            📝 Blog Familial
          </Link>
          <nav className="flex gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/nouveau" 
              className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              ✏️ Nouvel article
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
