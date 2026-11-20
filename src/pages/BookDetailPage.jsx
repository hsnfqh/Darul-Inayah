import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowLeft, 
  Quote, 
  Download, 
  Share2, 
  Calendar, 
  Hash, 
  ShieldCheck, 
  FileText, 
  User, 
  Award, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  ChevronRight,
  BookMarked,
  Printer,
  Sparkles
} from 'lucide-react';
import { booksCatalog } from '../data/bookData';

export default function BookDetailPage({ bookId, onBack, onOpenReader, onOpenCite, onOpenContact }) {
  const [activeTab, setActiveTab] = useState('abstrak');
  const [toastMessage, setToastMessage] = useState('');

  const book = booksCatalog.find(b => b.id === bookId) || booksCatalog[0];
  const isFlagship = book.id === 'mengapa-ragu-dengan-syariat-allah';

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: book.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Tautan buku berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f3f22] text-white px-5 py-3 rounded-xl shadow-2xl border border-gold-400 flex items-center gap-2 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-gold-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <button onClick={onBack} className="hover:text-emerald-800 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Beranda</span>
        </button>
        <span>/</span>
        <span className="text-slate-400">{book.category}</span>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-xs">{book.title}</span>
      </nav>

      {/* Main Book Header Card */}
      <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Col 1: Realistic Academic Book Cover Visual */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-64 sm:w-72 aspect-[3/4.4] rounded-2xl bg-gradient-to-tr from-[#082213] via-[#0f3f22] to-[#16423c] p-6 text-white flex flex-col justify-between shadow-2xl relative border-r-8 border-gold-600">
              {/* Spine highlight */}
              <div className="absolute top-0 bottom-0 left-3 w-1 bg-white/10 rounded-full"></div>
              
              <div>
                <div className="flex justify-between items-center text-[10px] text-gold-300 font-semibold tracking-wider uppercase border-b border-white/10 pb-2">
                  <span>Darul Inayah Press</span>
                  <span>{book.year}</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg p-1.5 mt-4 border border-gold-400/60 shadow">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="my-auto py-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-1">
                  {book.category}
                </span>
                <h2 className="font-serif text-2xl font-bold leading-tight text-white">
                  {book.title}
                </h2>
                <p className="text-xs text-stone-300 mt-2 font-serif italic">
                  {book.author}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-stone-300">
                <span>ISBN {book.isbn}</span>
                <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[9px] font-mono">
                  TERINDEKS
                </span>
              </div>
            </div>

            {/* Quick Actions Under Cover */}
            <div className="w-full max-w-xs mt-6 space-y-2">
              <button
                onClick={() => onOpenReader(book.id, isFlagship ? 'kata-pengantar' : 'sub-1')}
                className="w-full py-3.5 bg-[#0f3f22] hover:bg-[#15803d] text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <BookOpen className="w-4 h-4 text-gold-300" />
                <span>Buka Digital Book Reader</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenCite(book)}
                  className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Quote className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sitasi (Cite)</span>
                </button>

                <button
                  onClick={handleShare}
                  className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Bagikan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Metadata Details */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-100 text-[#0f3f22] text-xs font-bold px-3 py-1 rounded-md">
                  {book.category}
                </span>
                <span className="bg-gold-100 text-gold-900 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-700" /> Peer-Reviewed Monograph
                </span>
                <span className="bg-blue-50 text-blue-800 text-xs font-mono px-2.5 py-1 rounded-md">
                  DOI: {book.doi}
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                {book.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-serif italic">
                {book.subtitle}
              </p>
            </div>

            {/* Author Box */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#0f3f22] text-white flex items-center justify-center font-serif font-bold text-base shadow">
                  {book.author.charAt(3) || 'U'}
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block uppercase font-bold tracking-wider">Penulis Monograf:</span>
                  <h4 className="font-bold text-slate-900 text-sm">{book.author}</h4>
                  <p className="text-xs text-slate-500">{book.authorAffiliation}</p>
                </div>
              </div>
              <button 
                onClick={onOpenContact}
                className="hidden sm:flex text-xs text-emerald-800 font-semibold items-center gap-1 hover:underline"
              >
                <span>Kontak Penulis</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Academic Bibliographic Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">ISBN Cetak:</span>
                <span className="font-mono font-semibold text-slate-800">{book.isbn}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">e-ISBN:</span>
                <span className="font-mono font-semibold text-slate-800">{book.eisbn}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Tahun / Edisi:</span>
                <span className="font-semibold text-slate-800">{book.year} ({book.edition})</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Jumlah Halaman:</span>
                <span className="font-semibold text-slate-800">{book.pages} Halaman</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Bahasa:</span>
                <span className="font-semibold text-slate-800">{book.language}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Penerbit:</span>
                <span className="font-semibold text-slate-800">{book.publisher}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Kota Terbit:</span>
                <span className="font-semibold text-slate-800">{book.place}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Akses Digital:</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Tersedia Lengkap
                </span>
              </div>
            </div>

            {/* Quick Summary Preview */}
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              {book.shortDescription}
            </div>

            {/* Print on Demand / Acquisition CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenReader(book.id, isFlagship ? 'kata-pengantar' : 'sub-1')}
                className="px-5 py-2.5 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-gold-300" />
                <span>Baca Teks Lengkap (Online)</span>
              </button>

              <button
                onClick={() => {
                  showToast('Sampel digital (Kata Pengantar & Bab 1) siap dibaca pada reader!');
                  onOpenReader(book.id, isFlagship ? 'bab-1' : 'sub-1');
                }}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Unduh Sample PDF</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-gold-600" />
                <span>Pesan Cetak / Hardcover</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="flex border-b border-stone-200 overflow-x-auto text-xs sm:text-sm font-semibold">
          {[
            { id: 'abstrak', label: 'Abstrak & Ringkasan' },
            { id: 'daftar-isi', label: 'Daftar Isi & Pembacaan Bab' },
            { id: 'tokoh', label: 'Sambutan & Profil Penulis' },
            { id: 'bibliografi', label: 'Informasi Bibliografi & Hak Cipta' },
            { id: 'daftar-pustaka', label: 'Daftar Pustaka (Rujukan)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3.5 whitespace-nowrap transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'border-[#0f3f22] text-[#0f3f22] font-bold bg-emerald-50/40'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-stone-50'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Abstrak */}
        {activeTab === 'abstrak' && (
          <div className="p-6 sm:p-10 space-y-6">
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Abstrak Monograf</h3>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line text-justify bg-stone-50/70 p-6 rounded-2xl border border-stone-200">
                {book.abstract}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">Kata Kunci (Keywords):</h4>
              <div className="flex flex-wrap gap-2">
                {book.keywords.map((kw, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-900 border border-emerald-200/60 px-3 py-1 rounded-full font-medium">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Daftar Isi & Bab */}
        {activeTab === 'daftar-isi' && (
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Daftar Isi Lengkap</h3>
                <p className="text-xs text-slate-500">Klik bab untuk langsung membaca di digital book reader.</p>
              </div>
              <button
                onClick={() => onOpenReader(book.id, isFlagship ? 'kata-pengantar' : 'sub-1')}
                className="px-4 py-2 bg-[#0f3f22] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 hover:bg-[#15803d]"
              >
                <BookOpen className="w-3.5 h-3.5 text-gold-300" />
                <span>Baca Dari Awal</span>
              </button>
            </div>

            <div className="space-y-3">
              {book.tableOfContents.map((chapter) => (
                <div 
                  key={chapter.id} 
                  className="p-4 rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all cursor-pointer group"
                  onClick={() => onOpenReader(book.id, chapter.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-[#0f3f22] group-hover:text-gold-300 text-slate-600 flex items-center justify-center font-bold text-xs transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-slate-900 group-hover:text-emerald-900 transition-colors">
                          {chapter.title}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          Halaman {chapter.pageStart} — {chapter.pageEnd}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-800 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        <span>Baca Bab</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {chapter.sections && chapter.sections.length > 0 && (
                    <div className="mt-3 pl-11 space-y-1.5 border-t border-stone-100 pt-2.5">
                      {chapter.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-600 flex justify-between items-center hover:text-emerald-800">
                          <span>{sec.title}</span>
                          <span className="text-slate-400 font-mono text-[11px]">Hal. {sec.page}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Sambutan & Profil Penulis */}
        {activeTab === 'tokoh' && (
          <div className="p-6 sm:p-10 space-y-8">
            {/* Author Profile */}
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Profil Penulis Utama</h3>
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-[#0f3f22] text-gold-300 flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">
                  HT
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-base text-slate-900">{book.author}</h4>
                  <p className="text-xs text-gold-700 font-semibold uppercase tracking-wider">{book.authorAffiliation}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    Al Ustadz Hidayat Taufiq adalah dai dan penulis yang fokus pada bidang akidah, syariah, dan peradaban Islam. Karya beliau "Mengapa Ragu Dengan Syariat Allah?" ditulis sebagai jawaban sistematis dan santun atas tantangan pemikiran zaman yang kerap mempertanyakan posisi hukum Ilahi di era modern.
                  </p>
                </div>
              </div>
            </div>

            {/* Endorsers */}
            {book.endorsers && (
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-lg text-slate-900">Apresiasi & Sambutan Ulama</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {book.endorsers.map((endorser, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-2">
                      <Quote className="w-5 h-5 text-gold-500" />
                      <h4 className="font-serif font-bold text-sm text-slate-900">{endorser.name}</h4>
                      <p className="text-xs text-slate-500 font-medium">{endorser.role}</p>
                      <button 
                        onClick={() => onOpenReader(book.id, 'kata-pengantar')}
                        className="text-xs text-emerald-800 font-semibold hover:underline inline-block pt-1"
                      >
                        Baca naskah sambutan lengkap →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Bibliografi & Hak Cipta */}
        {activeTab === 'bibliografi' && (
          <div className="p-6 sm:p-10 space-y-6">
            <h3 className="font-serif font-bold text-lg text-slate-900">Katalog Dalam Terbitan (KDT)</h3>
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 font-mono text-xs text-slate-800 space-y-3">
              <p>Darul Inayah Publishing Cataloguing in Publication Data</p>
              <div className="pl-4 border-l-2 border-gold-500 space-y-1">
                <p><strong>{book.author}</strong></p>
                <p>{book.title}: {book.subtitle} / {book.author}; penyunting dewan redaksi Darul Inayah. -- {book.edition}. -- {book.place}: {book.publisher}, {book.year}.</p>
                <p>{book.pages} hlm. ; 15.5 x 23 cm.</p>
                <p className="pt-2">Bibliografi: hlm. 162-165</p>
                <p>ISBN {book.isbn} (cetak)</p>
                <p>e-ISBN {book.eisbn} (elektronik / PDF)</p>
                <p>1. Islam -- Syariat.  2. Akal dan Wahyu.  I. Judul.</p>
              </div>
            </div>

            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Pemberitahuan Hak Cipta & Lisensi:</h4>
              <p>
                Hak Cipta © {book.year} pada Penulis dan Darul Inayah Publishing. Dilarang mereproduksi atau memperbanyak sebagian atau seluruh isi buku ini dalam bentuk apa pun tanpa izin tertulis dari penerbit, kecuali untuk kutipan ilmiah dalam ulasan, skripsi, tesis, dan disertasi dengan mencantumkan sumber sitasi secara benar.
              </p>
            </div>
          </div>
        )}

        {/* Tab 5: Daftar Pustaka (Rujukan Lengkap) */}
        {activeTab === 'daftar-pustaka' && (
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-900">Daftar Pustaka & Rujukan</h3>
                <p className="text-xs text-slate-500">19 Kitab dan literatur mu'tabar yang dirujuk dalam penulisan buku ini.</p>
              </div>
              <button
                onClick={() => onOpenReader(book.id, 'bab-8')}
                className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
                <span>Lihat di Reader</span>
              </button>
            </div>

            {book.chapters['bab-8']?.content[1]?.items ? (
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 divide-y divide-stone-200/80">
                {book.chapters['bab-8'].content[1].items.map((ref, idx) => (
                  <div key={idx} className="py-2.5 text-xs text-slate-700 font-serif leading-relaxed">
                    {ref}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">Daftar referensi tersedia dalam teks monograf.</p>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
