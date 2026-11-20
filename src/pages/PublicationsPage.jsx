import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  Quote, 
  FileText, 
  ArrowRight, 
  Download, 
  Eye, 
  LayoutGrid, 
  List, 
  Calendar,
  Hash
} from 'lucide-react';
import { booksCatalog } from '../data/bookData';

export default function PublicationsPage({ initialSearch = '', onSelectBook, onOpenReader, onOpenCite }) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('year-desc');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'academic'

  const categories = [
    { id: 'all', label: 'Semua Bidang Keilmuan' },
    { id: 'aqidah-syariah', label: 'Aqidah & Syariah' },
    { id: 'fikih-muamalah', label: 'Fikih & Muamalah' },
    { id: 'tafsir-quran', label: 'Al-Qur’an & Tafsir' },
    { id: 'ushul-fiqh', label: 'Ushul Fiqh & Filsafat' },
    { id: 'sejarah-peradaban', label: 'Sejarah & Peradaban' }
  ];

  const filteredBooks = useMemo(() => {
    return booksCatalog.filter(book => {
      const matchSearch = 
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.isbn.toLowerCase().includes(search.toLowerCase()) ||
        book.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchCategory = selectedCategory === 'all' || book.categorySlug === selectedCategory;

      return matchSearch && matchCategory;
    }).sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
              Repositori Buku & Monograf Ilmiah
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Katalog Publikasi Resmi
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Daftar seluruh buku yang telah melalui proses penyuntingan substantif, bernomor ISBN resmi, dan berstatus peer-reviewed.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white text-slate-800 shadow-sm font-semibold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('academic')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === 'academic' 
                  ? 'bg-white text-slate-800 shadow-sm font-semibold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Academic Table</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-3 pt-4 border-t border-stone-100">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari berdasarkan judul, nama penulis, ISBN, atau topik..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:border-emerald-600 focus:outline-none"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 text-xs bg-white border border-stone-200 rounded-xl focus:border-emerald-600 focus:outline-none text-slate-700"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full py-2.5 px-3 text-xs bg-white border border-stone-200 rounded-xl focus:border-emerald-600 focus:outline-none text-slate-700"
            >
              <option value="year-desc">Tahun Terbit (Terbaru)</option>
              <option value="year-asc">Tahun Terbit (Terlama)</option>
              <option value="title-asc">Judul Buku (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Badges */}
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Menampilkan <strong className="text-slate-800">{filteredBooks.length}</strong> publikasi buku</span>
        {search && (
          <button 
            onClick={() => setSearch('')}
            className="text-emerald-800 hover:underline font-medium"
          >
            Hapus filter pencarian
          </button>
        )}
      </div>

      {/* Content View */}
      {filteredBooks.length === 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-slate-800">Tidak ada publikasi yang cocok</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Coba sesuaikan kata kunci pencarian atau pilih kategori lain dalam filter katalog.
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const isFlagship = book.id === 'mengapa-ragu-dengan-syariat-allah';

            return (
              <div
                key={book.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Cover Header */}
                  <div className="relative aspect-[16/10] bg-stone-900 overflow-hidden group">
                    {isFlagship ? (
                      <div className="w-full h-full bg-gradient-to-tr from-[#082213] via-[#0f3f22] to-[#125633] p-6 flex flex-col justify-between text-white border-b-4 border-gold-500">
                        <div className="flex justify-between items-center text-[10px] text-gold-300 uppercase tracking-widest font-semibold">
                          <span>Darul Inayah Press</span>
                          <span>{book.year}</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-0.5">
                            Karya Utama
                          </span>
                          <h4 className="font-serif font-bold text-lg text-white leading-tight">
                            {book.title}
                          </h4>
                          <p className="text-xs text-stone-300 font-serif italic mt-1">{book.author}</p>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-stone-300">
                          <span>ISBN: {book.isbn}</span>
                          <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[9px] font-mono">
                            DIGITAL READER
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={book.coverImage} 
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute top-2 left-2 bg-[#0f3f22]/90 backdrop-blur text-gold-300 text-[10px] font-bold px-2.5 py-0.5 rounded">
                      {book.category}
                    </div>
                  </div>

                  {/* Body Metadata */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 
                        onClick={() => onSelectBook(book.id)}
                        className="font-serif font-bold text-lg text-slate-900 hover:text-emerald-800 cursor-pointer transition-colors leading-snug"
                      >
                        {book.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Oleh: <strong className="text-slate-800">{book.author}</strong>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 bg-stone-50 p-2.5 rounded-xl border border-stone-100 font-mono">
                      <div>
                        <span className="text-slate-400 block">ISBN:</span>
                        <span className="text-slate-700 font-medium">{book.isbn}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Tahun / Halaman:</span>
                        <span className="text-slate-700 font-medium">{book.year} • {book.pages} hlm</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed text-justify">
                      {book.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <div className="pt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenCite(book)}
                      className="px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1 transition-colors"
                      title="Salin format sitasi ilmiah"
                    >
                      <Quote className="w-3.5 h-3.5 text-slate-500" />
                      <span>Sitasi</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectBook(book.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-900 hover:bg-stone-100 rounded-lg transition-colors"
                      >
                        Detail
                      </button>

                      <button
                        onClick={() => onOpenReader(book.id, isFlagship ? 'kata-pengantar' : 'sub-1')}
                        className="px-3.5 py-1.5 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm transition-all"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-gold-300" />
                        <span>Baca Buku</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ACADEMIC TABLE VIEW (Journal / OJS style) */
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="divide-y divide-stone-200">
            {filteredBooks.map((book) => {
              const isFlagship = book.id === 'mengapa-ragu-dengan-syariat-allah';
              return (
                <div key={book.id} className="p-5 hover:bg-stone-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-[11px]">
                        <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                          {book.category}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">Tahun {book.year}</span>
                        <span className="text-slate-400">•</span>
                        <span className="font-mono text-slate-600">ISBN {book.isbn}</span>
                        <span className="text-slate-400">•</span>
                        <span className="font-mono text-blue-700">DOI: {book.doi}</span>
                      </div>

                      <h3 
                        onClick={() => onSelectBook(book.id)}
                        className="font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-emerald-800 cursor-pointer transition-colors"
                      >
                        {book.title}
                      </h3>

                      <p className="text-xs text-slate-600 font-medium">
                        Penulis: <span className="text-slate-900 font-semibold">{book.author}</span> ({book.authorAffiliation})
                      </p>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {book.abstract}
                      </p>
                    </div>

                    <div className="flex sm:flex-col lg:flex-row items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => onOpenCite(book)}
                        className="px-3 py-2 text-xs text-slate-600 hover:bg-stone-200 bg-stone-100 rounded-lg flex items-center gap-1.5"
                      >
                        <Quote className="w-3.5 h-3.5" />
                        <span>Kutipan</span>
                      </button>

                      <button
                        onClick={() => onSelectBook(book.id)}
                        className="px-3 py-2 text-xs text-emerald-900 hover:bg-emerald-50 border border-emerald-800/30 rounded-lg font-semibold"
                      >
                        Detail Buku
                      </button>

                      <button
                        onClick={() => onOpenReader(book.id, isFlagship ? 'kata-pengantar' : 'sub-1')}
                        className="px-4 py-2 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-gold-300" />
                        <span>Baca Online</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
