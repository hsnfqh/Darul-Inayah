import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, ArrowRight } from 'lucide-react';
import { booksCatalog } from '../data/bookData';
import { authorsData } from '../data/authorsData';

export default function SearchModal({ isOpen, onClose, onSelectBook, onSelectAuthor }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle handled outside
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBooks = booksCatalog.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase()) ||
    b.isbn.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredAuthors = authorsData.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Search Input Box */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-800" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari judul buku, pengarang, ISBN, atau topik penelitian..."
            className="flex-1 text-sm bg-transparent outline-none text-slate-800 placeholder-slate-400"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs bg-stone-100 hover:bg-stone-200 text-slate-600 px-2.5 py-1 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          {/* Books */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" /> Publikasi Buku ({filteredBooks.length})
            </h4>
            {filteredBooks.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-2">Tidak ditemukan publikasi dengan kata kunci tersebut.</p>
            ) : (
              <div className="space-y-2">
                {filteredBooks.map(book => (
                  <div
                    key={book.id}
                    onClick={() => {
                      onSelectBook(book.id);
                      onClose();
                    }}
                    className="p-3 rounded-xl border border-stone-100 hover:border-emerald-300 hover:bg-emerald-50/50 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h5 className="font-serif font-semibold text-sm text-slate-800 group-hover:text-emerald-900 transition-colors">
                        {book.title}
                      </h5>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                        <span>{book.author}</span>
                        <span>•</span>
                        <span className="text-emerald-800 font-medium">{book.category}</span>
                        <span>•</span>
                        <span>{book.year}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 transform group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Authors */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-600" /> Penulis & Cendekiawan ({filteredAuthors.length})
            </h4>
            {filteredAuthors.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-2">Tidak ditemukan penulis terkait.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredAuthors.map(author => (
                  <div
                    key={author.id}
                    onClick={() => {
                      onSelectAuthor(author.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-stone-100 hover:border-gold-300 hover:bg-amber-50/40 cursor-pointer transition-all flex items-center gap-3"
                  >
                    <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                    <div className="truncate">
                      <p className="text-xs font-semibold text-slate-800 truncate">{author.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{author.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-100 flex justify-between items-center text-[11px] text-slate-400">
          <span>Gunakan panah untuk navigasi atau tekan ESC untuk keluar</span>
          <span className="font-serif italic text-emerald-800">Darul Inayah Academic Index</span>
        </div>
      </div>
    </div>
  );
}
