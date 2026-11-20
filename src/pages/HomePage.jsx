import React, { useState, useMemo } from 'react';
import { 
  MessageCircle, 
  Maximize2, 
  X, 
  BookOpen,
  PenTool,
  BookMarked,
  Check,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Quote,
  Search,
  Sparkles,
  ArrowRight,
  Building2,
  Clock,
  Send
} from 'lucide-react';
import { booksCatalog, catalogBooks, publisherInfo } from '../data/bookData';

export default function HomePage({ onScrollTo }) {
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const defaultWaNumber = publisherInfo.contactSection.whatsappNumber;
  const whatsappUrl = `https://wa.me/${defaultWaNumber}?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20memesan%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah.`;
  const whatsappConsultUrl = `https://wa.me/${defaultWaNumber}?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20mengetahui%20informasi%20buku%20dan%20layanan%20penerbitan.`;

  // Categories list for filtering
  const categories = useMemo(() => {
    return ['Semua', ...Array.from(new Set(catalogBooks.map(b => b.category)))];
  }, []);

  // Filtered books based on search query and category
  const filteredCatalog = useMemo(() => {
    return catalogBooks.filter(item => {
      const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* Lightbox Modal for Promo Poster */}
      {promoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setPromoModalOpen(false)}
        >
          <div className="relative max-w-2xl max-h-[92vh] overflow-hidden rounded-2xl shadow-2xl border border-gold-500/50 bg-stone-950" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setPromoModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors border border-white/20"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/buku-promo.jpg" 
              alt="Poster Mengapa Ragu Dengan Syariat Allah - Darul Inayah Publishing" 
              className="w-full h-auto max-h-[88vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* SECTION 1: HERO BERANDA */}
      <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-[#061d11] via-[#0d341e] to-[#082214] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-gold-500/30">
        
        {/* Subtle decorative background ambient glow */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Prestigious Editorial Headline & Actions (Clean Sans-Serif) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Darul Inayah Publishing</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Penerbitan Buku &amp; <br />
                  <span className="text-gold-300 font-bold">Khazanah Keilmuan Islam</span>
                </h1>
                
                {/* Book Highlight Callout */}
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-gold-400 font-bold">Karya Pilihan Terbitan Terbaru:</p>
                  <p className="font-sans text-xl sm:text-2xl text-stone-100 font-bold pt-1">
                    "Mengapa Ragu Dengan Syariat Allah SWT?"
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm font-medium pt-0.5">
                    Karya Al Ustadz Hidayat Taufiq
                  </p>
                </div>
              </div>

              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                Sebuah kajian komprehensif yang menguraikan urgensi syariat Allah, kedudukan fitrah akal budi, serta relevansi nilai-nilai Islam dalam menjawab keraguan pemikiran kontemporer.
              </p>

              {/* Mobile View: Poster Gambar Ditampilkan Dulu Sebelum Tombol Aksi */}
              <div className="block lg:hidden my-6">
                <div 
                  className="relative group cursor-pointer max-w-xs mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/60 bg-stone-900 transition-all active:scale-95"
                  onClick={() => setPromoModalOpen(true)}
                >
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#092618]/90 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-gold-400/50 backdrop-blur">
                    Buku Pilihan Utama
                  </div>
                  <img 
                    src="/buku-promo.jpg" 
                    alt="Poster Buku Mengapa Ragu Dengan Syariat Allah SWT - Darul Inayah Publishing" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center p-3">
                    <span className="text-[11px] font-semibold text-white bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur border border-gold-400/40 flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-gold-300" /> Perbesar Poster
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-95 border border-gold-300"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                  <span>Pesan Buku via WhatsApp</span>
                </a>
                
                <button
                  onClick={() => onScrollTo && onScrollTo('katalog')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-stone-100 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Jelajahi Katalog Buku</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                </button>
              </div>

            </div>

            {/* Right Col: Poster Showcase Frame (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center">
              <div 
                className="relative group cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-gold-500/60 bg-stone-900 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setPromoModalOpen(true)}
              >
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10 bg-[#092618]/90 text-gold-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-gold-400/50 backdrop-blur">
                  Buku Pilihan Utama
                </div>

                <img 
                  src="/buku-promo.jpg" 
                  alt="Poster Buku Mengapa Ragu Dengan Syariat Allah SWT - Darul Inayah Publishing" 
                  className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-95"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-xs font-semibold text-white bg-black/75 px-4 py-2 rounded-xl backdrop-blur border border-gold-400/40 flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-300" /> Perbesar Poster
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: KATALOG PILIHAN */}
      <section id="katalog" className="max-w-6xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
              <span>{publisherInfo.catalogSection.badge}</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {publisherInfo.catalogSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              {publisherInfo.catalogSection.subtitle}
            </p>
          </div>

          {/* Search Box & Category Filters */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Search Input Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-emerald-800" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={publisherInfo.catalogSection.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3 bg-[#FAF8F5] border border-stone-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 shadow-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#0f3f22] text-gold-300 shadow-sm border border-emerald-900'
                        : 'bg-white border border-stone-200 text-slate-700 hover:bg-emerald-50/60 hover:text-emerald-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredCatalog.length > 0 ? (
              filteredCatalog.map((item) => {
                const itemWaUrl = `https://wa.me/${defaultWaNumber}?text=Assalamu'alaikum%20Darul%20Inayah,%20saya%20ingin%20memesan%20buku%20${encodeURIComponent(item.title)}.`;

                return (
                  <div 
                    key={item.id}
                    className="bg-[#FAF8F5] rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-700/60 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top Spine / Tag Strip */}
                    <div className="p-6 space-y-3.5 flex-1 flex flex-col">
                      
                      {/* Book Tag Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-900 bg-emerald-100/70 px-2.5 py-1 rounded-md border border-emerald-200 inline-block">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-semibold text-gold-800 bg-gold-100/70 border border-gold-200 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Title (Clean Sans-Serif) */}
                      <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-emerald-900 transition-colors pt-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify flex-1">
                        {item.description}
                      </p>

                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 pb-6 pt-3 border-t border-stone-200/80 bg-white">
                      <a
                        href={itemWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gold-400 hover:bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] border border-gold-500"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-emerald-950/20" />
                        <span>Pesan via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center space-y-3 bg-[#FAF8F5] rounded-2xl border border-stone-200">
                <p className="text-slate-500 text-sm">Tidak ada buku yang sesuai dengan pencarian "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
                  className="text-xs text-emerald-800 font-semibold hover:underline"
                >
                  Reset Pencarian &amp; Filter
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION 3: BUKU PILIHAN */}
      <section id="buku" className="max-w-6xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="border-b border-stone-100 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-l-2 border-emerald-800 pl-2.5">
              Karya Pilihan
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Mengapa Ragu Dengan Syariat Allah SWT?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
              Karya Al Ustadz Hidayat Taufiq
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sinopsis Text */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                Buku ini secara komprehensif mengkaji esensi dan hikmah di balik syariat Islam serta menjawab berbagai keraguan dan kegamangan yang kerap dilontarkan oleh pemikiran kontemporer, sekuler, dan liberal. Melalui sintesis dalil-dalil naqli (Al-Qur'an dan Sunnah) serta argumen aqli (rasionalitas dan peran akal budi), buku ini membuktikan bahwa akal manusia memerlukan lentera wahyu ilahi agar tidak tersesat dalam kegelapan duniawi.
              </p>
              <p>
                Karya ini juga dilengkapi kesaksian objektif para cendekiawan dan ilmuwan Barat terkemuka mengenai keagungan, orisinalitas, dan mukjizat abadi Al-Qur'anul Karim. Ditutup dengan kompilasi daftar pustaka mu'tabar dari khazanah klasik dan kontemporer, buku ini menjadi rujukan berharga bagi santri, penuntut ilmu, akademisi, dan masyarakat umum.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f3f22] hover:bg-[#15803d] text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300" />
                  <span>Tanyakan Buku di WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Endorsement Quotes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-xs space-y-2">
                <Quote className="w-5 h-5 text-emerald-800/40" />
                <p className="text-slate-700 leading-relaxed">
                  "Menjawab keragu-raguan orang tentang betapa pentingnya syariat agama Islam dalam kehidupan sehari-hari."
                </p>
                <div className="pt-1 border-t border-stone-200/80">
                  <span className="font-bold text-slate-900 block">DR. Said Masykur Al-Musyayakh, M.Ag, Ph.D</span>
                  <span className="text-[11px] text-slate-500">Rektor IAI AR-RISALAH Inhil-Riau</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-xs space-y-2">
                <Quote className="w-5 h-5 text-emerald-800/40" />
                <p className="text-slate-700 leading-relaxed">
                  "Kondisi ummat saat ini sangat memerlukan buku seperti ini di tengah maraknya pemikiran sekuler dan liberal."
                </p>
                <div className="pt-1 border-t border-stone-200/80">
                  <span className="font-bold text-slate-900 block">Al-Habib Muhammad Ahmad Vad’aq</span>
                  <span className="text-[11px] text-slate-500">Pengasuh Ponpes Al-Khairat Bekasi</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: TENTANG PENERBIT */}
      <section id="tentang" className="max-w-6xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-l-2 border-emerald-800 pl-2.5">
              {publisherInfo.aboutSection.badge}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              {publisherInfo.aboutSection.title}
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify max-w-4xl">
            <p>
              {publisherInfo.aboutSection.description1}
            </p>
            <p>
              {publisherInfo.aboutSection.description2}
            </p>
          </div>

          {/* 4 Poin Nilai Sesuai Arahan User */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {publisherInfo.aboutSection.values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-3 hover:border-emerald-700 transition-colors shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {val}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: APA YANG KAMI HADIRKAN / LAYANAN PENERBITAN */}
      <section id="layanan" className="max-w-6xl mx-auto px-4 sm:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-b-2 border-gold-500 pb-0.5">
              {publisherInfo.servicesSection.badge}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 pt-1">
              {publisherInfo.servicesSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {publisherInfo.servicesSection.subtitle}
            </p>
          </div>

          {/* 3 Kartu Layanan Resmi dengan Icon Elegan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Layanan 1: Penerbitan Buku */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200 hover:border-emerald-700 hover:bg-white transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0f3f22] text-gold-400 flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  {publisherInfo.servicesSection.services[0].title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {publisherInfo.servicesSection.services[0].description}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-900 font-bold hover:underline"
                >
                  <span>Konsultasi Penerbitan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Layanan 2: Kolaborasi Penulis */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200 hover:border-emerald-700 hover:bg-white transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0f3f22] text-gold-400 flex items-center justify-center shadow-sm">
                  <PenTool className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  {publisherInfo.servicesSection.services[1].title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {publisherInfo.servicesSection.services[1].description}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-900 font-bold hover:underline"
                >
                  <span>Hubungi Tim Redaksi</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Layanan 3: Literatur Keislaman */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200 hover:border-emerald-700 hover:bg-white transition-all space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0f3f22] text-gold-400 flex items-center justify-center shadow-sm">
                  <BookMarked className="w-6 h-6 text-gold-300" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-900">
                  {publisherInfo.servicesSection.services[2].title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed text-justify">
                  {publisherInfo.servicesSection.services[2].description}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-900 font-bold hover:underline"
                >
                  <span>Informasi Literatur</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: HUBUNGI KAMI / MARI TERHUBUNG (Desain Rapi, Modern & Terstruktur 2-Kolom) */}
      <section id="kontak" className="max-w-6xl mx-auto px-4 sm:px-8 pb-16 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Narasi & Detail Kontak Terstruktur */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
                  {publisherInfo.contactSection.badge}
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {publisherInfo.contactSection.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {publisherInfo.contactSection.description}
                </p>
              </div>

              {/* Data List Kontak Berstruktur Bersih */}
              <div className="space-y-3 pt-2">
                
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Nama Penerbit</span>
                    <strong className="text-sm font-bold text-slate-900 block pt-0.5">
                      {publisherInfo.contactSection.publisherName}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Layanan Resmi</span>
                    <strong className="text-sm font-bold text-slate-900 block pt-0.5">
                      {publisherInfo.contactSection.serviceType}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">E-mail Resmi</span>
                    <a 
                      href={`mailto:${publisherInfo.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-emerald-800 transition-colors block pt-0.5 font-mono"
                    >
                      {publisherInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">Waktu Respon</span>
                    <strong className="text-sm font-bold text-slate-900 block pt-0.5">
                      Komunikasi Terbuka &amp; Respon Cepat Setiap Hari
                    </strong>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Col: Kartu Aksi WhatsApp Modern & Ramah */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF8F5] rounded-2xl border-2 border-emerald-800/20 p-6 sm:p-8 text-center space-y-5 shadow-sm">
                
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0f3f22] text-gold-400 flex items-center justify-center shadow-md">
                  <MessageCircle className="w-7 h-7 text-gold-300" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-lg text-slate-900">
                    Layanan WhatsApp Resmi
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Terhubung langsung dengan tim redaksi dan admin katalog Darul Inayah.
                  </p>
                </div>

                {/* Nomor WhatsApp Terpampang Jelas */}
                <div className="py-2.5 px-4 bg-white rounded-xl border border-stone-200 shadow-inner inline-block w-full">
                  <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-semibold">Nomor WhatsApp</span>
                  <span className="font-mono font-bold text-xl sm:text-2xl text-emerald-950 block pt-0.5">
                    {publisherInfo.contactSection.whatsappDisplay}
                  </span>
                </div>

                {/* Tombol Aksi WhatsApp yang Jelas dan Mudah Ditekan */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-gold-300" />
                  <span>Chat WhatsApp Sekarang</span>
                </a>

                <p className="text-[11px] text-slate-500">
                  Klik tombol untuk memulai percakapan instan.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
