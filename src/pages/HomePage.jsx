import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  Sparkles, 
  Award, 
  CheckCircle, 
  CheckCircle2, 
  Quote, 
  Maximize2, 
  X, 
  BookMarked,
  Info, 
  Send, 
  Building,
  User,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  HeartHandshake
} from 'lucide-react';
import { booksCatalog, publisherInfo } from '../data/bookData';

export default function HomePage({ onScrollTo }) {
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [posterModalOpen, setPosterModalOpen] = useState(false);
  
  // Fast Order Form State
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    city: '',
    quantity: '1',
    note: ''
  });

  const book = booksCatalog[0];

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!orderForm.name || !orderForm.phone) return;

    const messageText = `Assalamu'alaikum Darul Inayah Publishing,%0A%0ASaya ingin memesan buku *Mengapa Ragu Dengan Syariat Allah?* (Harga Selera Pembaca):%0A- Nama: ${encodeURIComponent(orderForm.name)}%0A- No. WhatsApp: ${encodeURIComponent(orderForm.phone)}%0A- Kota/Alamat: ${encodeURIComponent(orderForm.city || '-')}%0A- Jumlah: ${encodeURIComponent(orderForm.quantity)} eksemplar%0A- Catatan: ${encodeURIComponent(orderForm.note || '-')}%0A%0AMohon info cara konfirmasi dan pengirimannya. Terima kasih!`;
    
    window.open(`https://wa.me/6281298765432?text=${messageText}`, '_blank');
  };

  const directWaUrl = "https://wa.me/6281298765432?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20tertarik%20untuk%20memiliki%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah%20(Harga%20Selera%20Pembaca).";

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* Lightbox Modal for Promo Poster */}
      {promoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPromoModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl border-2 border-gold-400 bg-stone-900" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setPromoModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/buku-promo.jpg" 
              alt="Poster Iklan Mengapa Ragu Dengan Syariat Allah" 
              className="w-full h-auto max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Lightbox Modal for National Publisher Poster */}
      {posterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPosterModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl border-2 border-gold-400 bg-stone-900" onClick={e => e.stopPropagation()}>
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

      {/* HERO SECTION: Iklan Utama Promo Buku */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#082213] via-[#0f3f22] to-[#0b331f] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 border-b-4 border-gold-500 shadow-xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c59b43_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Main Promo Headline & Value Offer */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-400/60 text-gold-300 text-xs font-bold tracking-wider uppercase shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                <span>Rilisan Spesial Darul Inayah Publishing</span>
              </div>

              {/* Gold Big Titles */}
              <div className="space-y-2">
                <div className="inline-block px-4 py-1 rounded-lg bg-gold-500/20 border border-gold-400/50 text-gold-300 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-1">
                  ⭐ HARGA SELERA PEMBACA
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  MILIKILAH <br />
                  <span className="text-gold-400 italic">SEKARANG</span>
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-stone-200 font-bold pt-1">
                  "Mengapa Ragu Dengan Syariat Allah SWT?"
                </p>
                <p className="text-gold-300 text-sm font-medium font-serif italic">
                  Karya: Al Ustadz Hidayat Taufiq
                </p>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Sebuah karya ilmiah keislaman yang menguraikan argumentasi rasional dan naqli tentang urgensi syariat Allah dalam kehidupan, kedudukan akal budi, dan kemuliaan Rasulullah SAW di tengah tantangan pemikiran kontemporer.
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
                <div className="bg-[#12452b] p-3 rounded-xl border border-emerald-700/60 text-left">
                  <span className="text-gold-400 text-xs font-bold block">✓ Mahar Bersahabat</span>
                  <span className="text-[11px] text-emerald-100">Harga Selera Pembaca</span>
                </div>
                <div className="bg-[#12452b] p-3 rounded-xl border border-emerald-700/60 text-left">
                  <span className="text-gold-400 text-xs font-bold block">✓ Terbitan Resmi</span>
                  <span className="text-[11px] text-emerald-100">ISBN 978-623-91820-4-5</span>
                </div>
                <div className="bg-[#12452b] p-3 rounded-xl border border-emerald-700/60 text-left">
                  <span className="text-gold-400 text-xs font-bold block">✓ Sambutan Tokoh</span>
                  <span className="text-[11px] text-emerald-100">Rektor IAI & Ulama</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#pemesanan"
                  className="px-7 py-4 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center gap-2 transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                  <span>Miliki Bukunya Sekarang</span>
                </a>
                <a
                  href="#sinopsis"
                  className="px-6 py-4 bg-emerald-900/90 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-emerald-700 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-gold-300" />
                  <span>Lihat Sinopsis & Isi</span>
                </a>
              </div>

            </div>

            {/* Right Col: Poster Iklan Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-400/80 bg-stone-900 transform group-hover:scale-102 transition-all duration-300"
                onClick={() => setPromoModalOpen(true)}
              >
                <img 
                  src="/buku-promo.jpg" 
                  alt="Iklan Mengapa Ragu Dengan Syariat Allah - Milikilah Sekarang"
                  className="w-full h-auto object-cover group-hover:brightness-105 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-xs font-semibold text-white bg-black/70 px-4 py-2 rounded-xl backdrop-blur border border-gold-400 flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-gold-300" /> Klik untuk Perbesar Poster
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Strip */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-emerald-950/80 backdrop-blur border border-emerald-800/80 rounded-2xl p-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">165 Halaman</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Tebal & Padat Ilmu</div>
            </div>
            <div className="border-l border-emerald-800/40">
              <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">8 Bab Lengkap</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Sistematika Teratur</div>
            </div>
            <div className="border-l border-emerald-800/40">
              <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">Naqli & Aqli</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Dalil & Nalar Seimbang</div>
            </div>
            <div className="border-l border-emerald-800/40">
              <div className="text-xl sm:text-2xl font-serif font-bold text-gold-400">Kutipan Barat</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider">Kesaksian Cendekiawan</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Sinopsis & Keistimewaan Buku */}
      <section id="sinopsis" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-8 sm:p-12 space-y-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-3 py-1 rounded-full">
              Sinopsis & Ulasan Buku
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-3">
              Menjawab Keraguan, Meneguhkan Keyakinan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Mengapa manusia kerap ragu terhadap syariat Allah SWT? Bagaimana akal sehat membuktikan bahwa manusia mutlak membutuhkan bimbingan wahyu para Rasul?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-stone-100 pt-8">
            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                Buku <strong>"Mengapa Ragu Dengan Syariat Allah?"</strong> ditulis oleh <strong>Al Ustadz Hidayat Taufiq</strong> sebagai jawaban tuntas dan mencerahkan terhadap kegamangan umat di era kontemporer. Penulis mengawali pembahasan dengan menelaah potret kegelapan peradaban manusia sebelum diutusnya Nabi Muhammad SAW, seperti kehancuran moral di imperium Romawi dan Persia.
              </p>
              <p>
                Lebih jauh, buku ini menguraikan batasan dan fungsi fitrah akal manusia: kapan akal mampu menangkap hikmah, dan kapan akal harus tunduk pada bimbingan syariat ilahi. Ditutup dengan kesaksian objektif para cendekiawan dan orientalis Barat mengenai keagungan mukjizat Al-Qur'anul Karim.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-2">
                <span className="font-bold text-emerald-900 block text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  Kenapa Anda Harus Membaca Buku Ini?
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-1.5">✓ Menguatkan tauhid dan keyakinan pada syariat Islam</li>
                  <li className="flex items-center gap-1.5">✓ Menangkal paham sekuler, agnostik, dan liberal</li>
                  <li className="flex items-center gap-1.5">✓ Memahami relasi harmonis antara akal dan wahyu</li>
                  <li className="flex items-center gap-1.5">✓ Bahan rujukan kajian dakwah, santri, dan akademisi</li>
                </ul>
              </div>
            </div>

            {/* Quick Card: Selera Pembaca */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0f3f22] to-[#082213] text-white p-6 rounded-2xl shadow-lg border border-gold-400/50 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-gold-400 text-emerald-950 font-bold flex items-center justify-center mx-auto text-lg shadow">
                📖
              </div>
              <div>
                <span className="text-[10px] text-gold-300 font-bold tracking-widest uppercase block">
                  Penawaran Istimewa
                </span>
                <h3 className="font-serif font-bold text-xl text-white mt-1">
                  Harga Selera Pembaca
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Penerbit memberikan kemudahan bagi setiap penuntut ilmu untuk memiliki buku fisik ini dengan mahar/infaq selera pembaca.
                </p>
              </div>
              <a
                href="#pemesanan"
                className="inline-block w-full py-2.5 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Spesifikasi Detail Buku */}
      <section id="spesifikasi" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-stone-50 rounded-3xl border border-stone-200/90 p-8 sm:p-12 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-2.5 py-1 rounded">
              Spesifikasi Resmi
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Informasi Bibliografi Buku
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Judul Lengkap</span>
              <strong className="text-slate-800 text-sm font-serif">{book.title}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Penulis</span>
              <strong className="text-slate-800 text-sm font-serif">{book.author}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Nomor ISBN</span>
              <strong className="text-emerald-900 text-sm font-mono">{book.isbn}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Penerbit</span>
              <strong className="text-slate-800 text-sm font-serif">{book.publisher}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Tebal Halaman</span>
              <strong className="text-slate-800 text-sm font-serif">{book.pages} Halaman</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Bahasa</span>
              <strong className="text-slate-800 text-sm font-serif">{book.language}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Tahun & Tempat Terbit</span>
              <strong className="text-slate-800 text-sm font-serif">{book.year} — {book.place}</strong>
            </div>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-1">
              <span className="text-slate-400 block text-[11px]">Skema Penjualan</span>
              <strong className="text-gold-700 text-sm font-serif">Harga Selera Pembaca</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Daftar Isi & Pokok Pembahasan (8 Bab) */}
      <section id="daftar-isi" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-8 sm:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-3 py-1 rounded-full">
              Sistematika Buku
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-2">
              Daftar Isi & Pokok Bahasan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Kandungan 8 bab pembahasan yang disusun secara sistematis dan komprehensif dalam buku fisik ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(book.tableOfContents || []).map((chap, idx) => (
              <div 
                key={chap.id}
                className="bg-stone-50/70 p-5 rounded-2xl border border-stone-200 hover:border-gold-500 hover:bg-white transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="bg-emerald-100 text-emerald-950 font-bold px-2 py-0.5 rounded text-[10px]">
                    {chap.id === 'kata-pengantar' ? 'Pembuka' : chap.id === 'bab-8' ? 'Referensi' : `Bagian ${idx}`}
                  </span>
                  <span>hlm {chap.pageStart} — {chap.pageEnd}</span>
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  {chap.title}
                </h4>
                {chap.sections && chap.sections.length > 0 && (
                  <ul className="text-[11px] text-slate-600 space-y-1 pt-1 list-disc list-inside">
                    {chap.sections.map((sec, sIdx) => (
                      <li key={sIdx} className="truncate">
                        {typeof sec === 'string' ? sec : sec.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Sambutan Ulama & Rekomendasi Tokoh */}
      <section id="tokoh" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-3 py-1 rounded-full">
            Apresiasi & Rekomendasi
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-2">
            Sambutan Rektor & Pengasuh Pesantren
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tokoh 1: DR. Said Masykur */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4 relative">
            <Quote className="w-8 h-8 text-emerald-700/30 absolute top-6 right-6" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold font-serif">
                SM
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900">
                  DR. Said Masykur Al-Musyayakh, M.Ag, Ph.D
                </h4>
                <p className="text-xs text-emerald-800 font-medium">
                  Rektor Institut Agama Islam (IAI) AR-RISALAH Inhil-Riau
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic text-justify pt-2">
              "Buku ini sangat baik dan penting untuk menjawab keragu-raguan orang tentang betapa pentingnya syariat agama Islam dalam kehidupan sehari-hari. Penulis berhasil mengurai batasan akal budi manusia yang senantiasa memerlukan petunjuk wahyu ilahi."
            </p>
          </div>

          {/* Tokoh 2: Habib Muhammad Ahmad Vad'aq */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4 relative">
            <Quote className="w-8 h-8 text-gold-700/30 absolute top-6 right-6" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold font-serif">
                MV
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900">
                  Al-Ustadz Al-Habib Muhammad Ahmad Vad’aq
                </h4>
                <p className="text-xs text-amber-900 font-medium">
                  Pengasuh Pondok Pesantren Al-Khairat Bekasi
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic text-justify pt-2">
              "Kondisi ummat saat ini sangat memerlukan buku seperti ini di tengah maraknya pemikiran sekuler dan liberal yang meragukan syariat Islam. Semoga karya Al Ustadz Hidayat Taufiq ini menjadi amal jariyah yang membawa berkah besar bagi umat Islam."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Profil Penulis & Penerbit */}
      <section id="penulis" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-8 sm:p-12 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div 
                className="relative group cursor-pointer max-w-xs rounded-2xl overflow-hidden shadow-xl border-2 border-gold-400/60"
                onClick={() => setPosterModalOpen(true)}
              >
                <img 
                  src="/darul-inayah-poster.jpg" 
                  alt="Darul Inayah Publishing"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs font-bold text-white bg-[#0f3f22] px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow">
                    <Maximize2 className="w-4 h-4 text-gold-300" /> Perbesar Poster
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-2.5 py-1 rounded">
                  Profil Penulis & Penerbit
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  Al Ustadz Hidayat Taufiq & Darul Inayah Publishing
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                <strong>Al Ustadz Hidayat Taufiq</strong> adalah seorang pendidik, da'i, dan cendekiawan muslim yang aktif berkhidmah dalam dakwah keilmuan, kajian pesantren, serta bimbingan umat. Kepedulian beliau terhadap tantangan pemikiran generasi muda melahirkan karya bernas ini.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                <strong>Darul Inayah Publishing</strong> mengusung motto <em>"Ilmu untuk Kehidupan, Buku untuk Peradaban"</em> dengan komitmen menerbitkan buku-buku pendidikan Islam, kitab-kitab pesantren, dakwah & syiar, serta referensi keislaman berkualitas tinggi.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {(publisherInfo.pillars || []).map((pil, idx) => (
                  <span key={idx} className="bg-stone-100 text-slate-700 text-xs px-3 py-1.5 rounded-lg border border-stone-200 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-800" />
                    <strong>{pil.title}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Formulir & Jalur Pemesanan Cepat (Call To Action) */}
      <section id="pemesanan" className="max-w-7xl mx-auto px-4 sm:px-8 pb-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#082213] via-[#0f3f22] to-[#14532d] p-8 sm:p-14 text-white border-2 border-gold-400 shadow-2xl space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-gold-400/30">
              Pemesanan Resmi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              Milikilah Buku Ini Sekarang
            </h2>
            <div className="inline-block px-4 py-1.5 rounded-xl bg-gold-400 text-emerald-950 font-black text-sm tracking-wider uppercase">
              ⭐ HARGA SELERA PEMBACA
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
              Dukung penyebaran literasi Islam dan miliki buku fisik <em>"Mengapa Ragu Dengan Syariat Allah?"</em>. Silakan isi data pemesanan di bawah atau langsung hubungi WhatsApp admin kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Quick Contact & Info Card */}
            <div className="lg:col-span-5 bg-emerald-950/70 p-6 sm:p-8 rounded-2xl border border-emerald-700/60 space-y-5">
              <h4 className="font-serif font-bold text-lg text-gold-300 border-b border-emerald-800/80 pb-3 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-gold-400" />
                <span>Format Selera Pembaca</span>
              </h4>

              <div className="space-y-3 text-xs text-stone-300 leading-relaxed">
                <p>
                  <strong>Apa maksud Harga Selera Pembaca?</strong><br />
                  Penerbit memberikan kelapangan bagi para pembaca, santri, dan pengkaji ilmu untuk memberikan mahar/infaq terbaik yang selaras dengan kemampuannya.
                </p>
                <p>
                  <strong>Bagaimana pengirimannya?</strong><br />
                  Buku fisik akan dikirimkan langsung dari kantor redaksi di Kota Bekasi, Jawa Barat ke alamat Anda di seluruh Indonesia via ekspedisi terpercaya (JNE, J&T, SiCepat, dll).
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                  <span>Chat Langsung via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Fast Order Form */}
            <div className="lg:col-span-7 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
              <h4 className="font-serif font-bold text-lg text-slate-900 border-b border-stone-200 pb-2">
                Formulir Pemesanan Cepat
              </h4>

              <form onSubmit={handleOrderSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Nama Lengkap Pemesan *
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Contoh: Ahmad Fauzi"
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-700"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      placeholder="0812-XXXX-XXXX"
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-700"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Jumlah Eksemplar
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={orderForm.quantity}
                      onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Kota / Alamat Pengiriman
                  </label>
                  <input
                    type="text"
                    value={orderForm.city}
                    onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                    placeholder="Contoh: Jakarta Selatan / Jl. Melati No. 10..."
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    value={orderForm.note}
                    onChange={(e) => setOrderForm({ ...orderForm, note: e.target.value })}
                    placeholder="Contoh: Titip tanda tangan penulis, dll."
                    className="w-full p-3 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-700"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0f3f22] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4 text-gold-300" />
                  <span>Kirim Pemesanan ke WhatsApp Admin</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
