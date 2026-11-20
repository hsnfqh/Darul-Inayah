import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Users, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Calendar, 
  Hash, 
  Download, 
  Share2, 
  ExternalLink, 
  BookCheck,
  CheckCircle,
  Eye,
  Maximize2,
  X
} from 'lucide-react';
import { booksCatalog, publisherInfo } from '../data/bookData';

export default function HomePage({ onSelectBook, onOpenReader, onOpenContact, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [posterModalOpen, setPosterModalOpen] = useState(false);

  const flagshipBook = booksCatalog.find(b => b.id === 'mengapa-ragu-dengan-syariat-allah');
  const catalogBooks = booksCatalog.filter(b => b.id !== 'mengapa-ragu-dengan-syariat-allah');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    onNavigate('publications', searchQuery);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* Poster Lightbox Modal */}
      {posterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPosterModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl shadow-2xl border-2 border-gold-400 bg-stone-900" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setPosterModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/darul-inayah-poster.jpg" 
              alt="Darul Inayah Publishing Poster Resmi" 
              className="w-full h-auto max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a2e19] via-[#0f3f22] to-[#0b331f] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 border-b-4 border-gold-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c59b43_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Main Banner Typography & Slogan */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/50 text-gold-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{publisherInfo.slogan}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ilmu untuk Kehidupan, <br />
                <span className="text-gold-400 italic">Buku untuk Peradaban</span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Darul Inayah Publishing berkomitmen menerbitkan buku-buku Islami berkualitas untuk umat dan generasi Muslim: mulai dari buku pendidikan Islam, kitab-kitab pesantren, dakwah & syiar, hingga referensi ilmiah akademik.
              </p>

              {/* 3 Core Pillars Pill from Poster */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                {publisherInfo.pillars.map((pil, idx) => (
                  <span key={idx} className="bg-[#12452b] text-emerald-100 text-xs px-3 py-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                    <strong className="font-semibold">{pil.title}</strong>
                  </span>
                ))}
              </div>

              {/* Search Bar */}
              <form onSubmit={handleHeroSearch} className="max-w-xl pt-2">
                <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row items-center gap-2 border-2 border-gold-400/40">
                  <div className="flex items-center gap-3 px-3 w-full text-slate-700">
                    <Search className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari buku, judul, nama penulis, atau ISBN..."
                      className="w-full text-xs sm:text-sm outline-none bg-transparent placeholder-slate-400 text-slate-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0f3f22] hover:bg-[#15803d] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <span>Cari Buku</span>
                    <ArrowRight className="w-4 h-4 text-gold-300" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Col: Official Poster Feature Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-400/60 bg-stone-900 transform group-hover:scale-102 transition-all duration-300"
                onClick={() => setPosterModalOpen(true)}
              >
                <img 
                  src="/darul-inayah-poster.jpg" 
                  alt="Poster Resmi Darul Inayah Publishing"
                  className="w-full h-auto object-cover group-hover:brightness-105 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-xs font-semibold text-white bg-black/60 px-4 py-2 rounded-xl backdrop-blur border border-gold-400 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-gold-300" /> Klik untuk Perbesar Poster
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Academic Stats Strip */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-emerald-950/70 backdrop-blur border border-emerald-800/60 rounded-2xl p-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">100+</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Judul Buku & Kitab</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">100%</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">ISBN & Terverifikasi</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">50+</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Penulis & Cendekiawan</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">10.000+</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Umat & Pembaca</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Publication Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Karya Unggulan Pilihan Redaksi</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
            Publikasi Khusus & Pembacaan Digital
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Akses langsung buku berbobot ilmiah karya Al Ustadz Hidayat Taufiq lengkap dengan digital book reader per bab.
          </p>
        </div>

        {flagshipBook && (
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden hover:border-gold-400/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
              
              {/* Book Cover Visual with 3D Effect */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group cursor-pointer" onClick={() => onSelectBook(flagshipBook.id)}>
                  <div className="w-64 sm:w-72 aspect-[3/4.4] rounded-2xl bg-gradient-to-tr from-[#082213] via-[#0f3f22] to-[#16423c] p-6 text-white flex flex-col justify-between shadow-2xl relative border-r-8 border-gold-600 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute top-0 bottom-0 left-3 w-1 bg-white/10 rounded-full"></div>
                    
                    <div>
                      <div className="flex justify-between items-center text-[10px] text-gold-300 font-semibold tracking-wider uppercase border-b border-white/10 pb-2">
                        <span>Darul Inayah Press</span>
                        <span>{flagshipBook.year}</span>
                      </div>
                      <div className="w-12 h-12 bg-white rounded-lg p-1.5 mt-4 border border-gold-400/60 shadow">
                        <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                      </div>
                    </div>

                    <div className="my-auto py-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-1">
                        Kajian Ilmiah Syariat
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                        {flagshipBook.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-2 font-serif italic">
                        Al Ustadz Hidayat Taufiq
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-stone-300">
                      <span>ISBN {flagshipBook.isbn}</span>
                      <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[9px] font-mono">
                        OPEN ACCESS
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-6 right-6 h-4 bg-slate-900/20 blur-md rounded-full -z-10"></div>
                </div>
              </div>

              {/* Book Information & Metadata */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-100 text-[#0f3f22] text-xs font-bold px-3 py-1 rounded-md">
                    {flagshipBook.category}
                  </span>
                  <span className="bg-gold-100 text-gold-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                    ISBN: {flagshipBook.isbn}
                  </span>
                  <span className="bg-stone-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md">
                    Tahun Terbit: {flagshipBook.year}
                  </span>
                  <span className="bg-blue-50 text-blue-800 text-xs font-mono px-2.5 py-1 rounded-md">
                    DOI: {flagshipBook.doi}
                  </span>
                </div>

                <div>
                  <h3 
                    onClick={() => onSelectBook(flagshipBook.id)}
                    className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 hover:text-emerald-800 cursor-pointer transition-colors"
                  >
                    {flagshipBook.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 italic font-serif">
                    {flagshipBook.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-700 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold font-serif text-sm">
                    HT
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Penulis Utama:</span>
                    <span className="font-bold text-slate-800">{flagshipBook.author}</span>
                    <span className="text-slate-500 block text-[11px]">{flagshipBook.authorAffiliation}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                  {flagshipBook.shortDescription}
                </p>

                {/* Sambutan Tokoh */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs">
                    <Quote className="w-3.5 h-3.5 text-emerald-700 mb-1" />
                    <p className="text-slate-700 line-clamp-2 italic">
                      "Menjawab keragu-raguan orang tentang betapa pentingnya syariat agama Islam dalam kehidupan sehari-hari..."
                    </p>
                    <span className="font-semibold text-emerald-900 block mt-1.5 text-[11px]">
                      — DR. Said Masykur (Rektor IAI AR-RISALAH)
                    </span>
                  </div>
                  <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100 text-xs">
                    <Quote className="w-3.5 h-3.5 text-gold-700 mb-1" />
                    <p className="text-slate-700 line-clamp-2 italic">
                      "Kondisi ummat sangat memerlukan buku seperti ini di tengah maraknya pemikiran sekuler dan liberal..."
                    </p>
                    <span className="font-semibold text-amber-900 block mt-1.5 text-[11px]">
                      — Habib Muhammad Ahmad Vad'aq (Ponpes Al-Khairat)
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenReader(flagshipBook.id, 'kata-pengantar')}
                    className="px-5 py-3 bg-[#0f3f22] hover:bg-[#15803d] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                  >
                    <BookOpen className="w-4 h-4 text-gold-300" />
                    <span>Baca Buku Digital (Reader)</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(flagshipBook.id)}
                    className="px-5 py-3 bg-white hover:bg-stone-100 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-xl border border-stone-300 transition-all flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-emerald-800" />
                    <span>Detail & Daftar Isi Lengkap</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </section>

      {/* Official Catalog Grid (Matching Poster Publications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded-full mb-2">
              <BookCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>Koleksi Buku & Kitab Resmi</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Katalog Terbitan Darul Inayah
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Buku-buku resmi sebagaimana ditampilkan dalam rilis publikasi nasional Darul Inayah Publishing.
            </p>
          </div>
          <button
            onClick={() => onNavigate('publications')}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f3f22] hover:text-[#15803d] border-b-2 border-gold-400 pb-0.5"
          >
            <span>Buka Semua Katalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogBooks.map((book) => (
            <div 
              key={book.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-400 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img 
                    src={book.coverImage} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-[#0f3f22]/90 backdrop-blur text-gold-300 text-[10px] font-bold px-2.5 py-0.5 rounded">
                    {book.category}
                  </div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] text-gold-300 font-mono block">ISBN {book.isbn}</span>
                    <h4 
                      onClick={() => onSelectBook(book.id)}
                      className="font-serif font-bold text-base leading-snug group-hover:text-gold-300 cursor-pointer transition-colors"
                    >
                      {book.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <p className="text-xs text-slate-500 font-medium">
                    Penulis: <strong className="text-slate-800">{book.author}</strong>
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed text-justify">
                    {book.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="border-t border-stone-100 pt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">{book.year} • {book.pages} hlm</span>
                  <button
                    onClick={() => onSelectBook(book.id)}
                    className="text-emerald-800 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Detail & Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 Segments Showcase from Poster */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Lini Penerbitan Buku Islami
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Beragam rumpun keilmuan yang secara konsisten kami terbitkan untuk kemajuan literasi umat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {publisherInfo.categoriesList.map((cat, idx) => (
              <div 
                key={idx}
                onClick={() => onNavigate('publications')}
                className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0f3f22] flex items-center justify-center mx-auto">
                  <BookOpen className="w-5 h-5 text-emerald-800" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900">
                  {cat}
                </h4>
                <span className="text-[10px] text-emerald-800 font-semibold block">
                  Lihat Judul →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0a2e19] via-[#0f3f22] to-[#14532d] p-8 sm:p-12 text-white border-2 border-gold-400/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Gerakan Literasi Islam
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Mari Dukung Penerbitan Buku Islami untuk Kebaikan Bersama
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Bersama membangun peradaban dengan ilmu. Ajukan naskah Anda atau berkolaborasi dalam penerbitan khazanah Islam berkualitas.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex-shrink-0"
          >
            Hubungi Redaksi
          </button>
        </div>
      </section>

    </div>
  );
}
