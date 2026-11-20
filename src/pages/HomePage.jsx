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
  X,
  ChevronRight,
  BookmarkCheck
} from 'lucide-react';
import { booksCatalog, publisherInfo } from '../data/bookData';

export default function HomePage({ onSelectBook, onOpenReader, onOpenContact, onNavigate }) {
  const [chapterSearch, setChapterSearch] = useState('');
  const [posterModalOpen, setPosterModalOpen] = useState(false);

  const flagshipBook = booksCatalog[0]; // "Mengapa Ragu Dengan Syariat Allah ?"

  // Filter chapters from tableOfContents
  const chaptersList = flagshipBook?.tableOfContents || [];
  const filteredChapters = chaptersList.filter(chap => {
    if (!chapterSearch.trim()) return true;
    const q = chapterSearch.toLowerCase();
    const titleMatch = chap.title?.toLowerCase().includes(q);
    const subtitleMatch = chap.subtitle?.toLowerCase().includes(q);
    const sectionMatch = chap.sections?.some(s => {
      const sTitle = typeof s === 'string' ? s : s.title;
      return sTitle?.toLowerCase().includes(q);
    });
    return titleMatch || subtitleMatch || sectionMatch;
  });

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
                Darul Inayah Publishing berkomitmen menerbitkan buku-buku Islami berkualitas untuk umat dan generasi Muslim: mulai dari buku pendidikan Islam, kitab-kitab pesantren, dakwah & syiar, hingga referensi ilmiah keislaman.
              </p>

              {/* 3 Core Pillars Pill from Poster */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                {(publisherInfo.pillars || []).map((pil, idx) => (
                  <span key={idx} className="bg-[#12452b] text-emerald-100 text-xs px-3 py-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                    <strong className="font-semibold">{pil.title}</strong>
                  </span>
                ))}
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onOpenReader(flagshipBook.id, 'kata-pengantar')}
                  className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-emerald-950" />
                  <span>Baca Buku Digital Sekarang</span>
                </button>
                <button
                  onClick={() => onSelectBook(flagshipBook.id)}
                  className="px-5 py-3.5 bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-700 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-gold-300" />
                  <span>Detail Buku & Abstrak</span>
                </button>
                <button
                  onClick={() => setPosterModalOpen(true)}
                  className="px-4 py-3.5 bg-black/40 hover:bg-black/60 text-stone-300 hover:text-white font-medium text-xs rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Lihat Poster Resmi</span>
                </button>
              </div>
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
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">100%</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Kajian Syariat Orisinil</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">ISBN</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Terbitan Standar Resmi</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">8 Bab</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Daftar Isi & Teks Digital</div>
            </div>
            <div className="space-y-1 border-l border-emerald-800/40">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">Open Access</div>
              <div className="text-xs text-stone-300 font-medium uppercase tracking-wider">Dapat Dibaca Bebas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publication Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Terbitan Buku Resmi</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
            Publikasi Khusus & Pembacaan Digital
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Akses langsung buku ilmiah karya Al Ustadz Hidayat Taufiq lengkap dengan digital book reader per bab.
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
                    <span>Buka Digital Reader (Baca Full)</span>
                  </button>

                  <button
                    onClick={() => onSelectBook(flagshipBook.id)}
                    className="px-5 py-3 bg-white hover:bg-stone-100 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-xl border border-stone-300 transition-all flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-emerald-800" />
                    <span>Detail & Daftar Isi</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}
      </section>

      {/* Chapter Index Section - Clean & Functional */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded-full mb-2">
                <BookmarkCheck className="w-3.5 h-3.5 text-gold-600" />
                <span>Daftar Isi Lengkap</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Akses Langsung Pembacaan Bab
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pilih bab di bawah ini untuk langsung membaca isi naskah secara digital pada web reader interaktif.
              </p>
            </div>

            {/* Quick search inside chapters */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={chapterSearch}
                onChange={(e) => setChapterSearch(e.target.value)}
                placeholder="Cari topik atau bab..."
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-600 bg-stone-50"
              />
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map((chap, idx) => (
              <div 
                key={chap.id}
                onClick={() => onOpenReader(flagshipBook.id, chap.id)}
                className="p-5 rounded-2xl border border-stone-200/80 hover:border-gold-500 hover:shadow-md bg-stone-50/50 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="bg-emerald-100/80 text-emerald-900 font-bold px-2 py-0.5 rounded text-[10px]">
                      {chap.id === 'kata-pengantar' ? 'Pembuka' : chap.id === 'bab-8' ? 'Referensi' : `Bagian ${idx}`}
                    </span>
                    <span>hlm {chap.pageStart || '-'}</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {chap.title}
                  </h4>
                  {chap.subtitle && (
                    <p className="text-xs text-slate-500 italic">
                      {chap.subtitle}
                    </p>
                  )}
                  {chap.sections && chap.sections.length > 0 && (
                    <ul className="text-[11px] text-slate-500 space-y-1 pt-1 list-disc list-inside">
                      {chap.sections.slice(0, 3).map((sec, sIdx) => (
                        <li key={sIdx} className="truncate">
                          {typeof sec === 'string' ? sec : sec.title}
                        </li>
                      ))}
                      {chap.sections.length > 3 && (
                        <li className="text-emerald-800 font-semibold list-none">
                          +{chap.sections.length - 3} sub-bahasan lainnya
                        </li>
                      )}
                    </ul>
                  )}
                </div>

                <div className="pt-4 mt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-emerald-800 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Baca Bab Sekarang</span>
                  <ChevronRight className="w-4 h-4 text-gold-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5 Segments Showcase from Official Poster */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded-full">
              Fokus Publikasi
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Lini Penerbitan Darul Inayah
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Rumpun keilmuan yang secara konsisten diterbitkan untuk kemajuan literasi dan khazanah Islam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(publisherInfo.categoriesList || []).map((cat, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0f3f22] flex items-center justify-center mx-auto">
                  <BookOpen className="w-5 h-5 text-emerald-800" />
                </div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900">
                  {cat}
                </h4>
                <p className="text-[11px] text-slate-400">
                  Standar Mutu Terjaga
                </p>
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
              Bersama membangun peradaban dengan ilmu. Hubungi redaksi Darul Inayah Publishing untuk informasi pemesanan buku, kemitraan dakwah, atau distribusi pesantren.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex-shrink-0"
          >
            Hubungi Kami
          </button>
        </div>
      </section>

    </div>
  );
}
