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
  Bookmark
} from 'lucide-react';
import { booksCatalog, catalogBooks, publisherInfo } from '../data/bookData';

export default function HomePage({ onScrollTo }) {
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const book = booksCatalog[0];

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setPromoModalOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[92vh] overflow-hidden rounded-2xl shadow-2xl border border-gold-500/40 bg-stone-900" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setPromoModalOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/buku-promo.jpg" 
              alt="Poster Mengapa Ragu Dengan Syariat Allah - Darul Inayah Publishing" 
              className="w-full h-auto max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* SECTION 1: HERO BERANDA */}
      <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-[#061e11] via-[#0d3820] to-[#082615] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 border-b-2 border-gold-500/30">
        
        {/* Subtle decorative background ambient glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Col: Editorial Headline & WhatsApp CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Darul Inayah Publishing</span>
              </div>

              {/* Title & Author */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Milikilah <br />
                  <span className="text-gold-400 italic font-medium">Sekarang</span>
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-stone-100 font-semibold pt-1">
                  "Mengapa Ragu Dengan Syariat Allah SWT?"
                </p>
                <p className="text-gold-300 text-sm sm:text-base font-serif italic">
                  Karya: Al Ustadz Hidayat Taufiq
                </p>
              </div>

              <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Kajian komprehensif yang membedah hikmah diutusnya para Rasul, kedudukan fitrah akal budi, serta relevansi syariat Islam di tengah tantangan zaman dan pemikiran modern.
              </p>

              {/* Primary Call-to-Action (WhatsApp Direct) */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-emerald-950 font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-95 border border-gold-300"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                  <span>Pesan Buku via WhatsApp</span>
                </a>
                
                <button
                  onClick={() => onScrollTo && onScrollTo('katalog')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-stone-100 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lihat Semua Katalog</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                </button>
              </div>

              <p className="text-xs text-stone-300 font-light">
                * Hubungi langsung admin resmi untuk informasi pemesanan dan pengiriman.
              </p>

            </div>

            {/* Right Col: Poster Cover Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-gold-500/60 bg-stone-900 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => setPromoModalOpen(true)}
              >
                <img 
                  src="/buku-promo.jpg" 
                  alt="Buku Mengapa Ragu Dengan Syariat Allah SWT"
                  className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <span className="text-xs font-medium text-white bg-black/70 px-4 py-2 rounded-lg backdrop-blur border border-gold-400/40 flex items-center gap-2">
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
        <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-emerald-800" />
              <span>{publisherInfo.catalogSection.badge}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
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
                className="w-full pl-11 pr-10 py-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 shadow-sm transition-all"
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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
                    className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-gold-500/70 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Top Spine / Tag Strip */}
                    <div className="p-6 space-y-3.5 flex-1 flex flex-col">
                      
                      {/* Book Tag Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/70 inline-block">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-semibold text-gold-700 bg-gold-50 border border-gold-200/60 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug group-hover:text-emerald-900 transition-colors pt-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify flex-1">
                        {item.description}
                      </p>

                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 pb-6 pt-2 border-t border-stone-100 bg-stone-50/50">
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
              <div className="col-span-full py-12 text-center space-y-3 bg-white rounded-2xl border border-stone-200">
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
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="border-b border-stone-100 pb-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-l-2 border-emerald-800 pl-2.5">
              Karya Pilihan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Mengapa Ragu Dengan Syariat Allah SWT?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-serif italic">
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
                <p className="text-slate-700 italic leading-relaxed">
                  "Menjawab keragu-raguan orang tentang betapa pentingnya syariat agama Islam dalam kehidupan sehari-hari."
                </p>
                <div className="pt-1 border-t border-stone-200/80">
                  <span className="font-bold text-slate-900 block">DR. Said Masykur Al-Musyayakh, M.Ag, Ph.D</span>
                  <span className="text-[11px] text-slate-500">Rektor IAI AR-RISALAH Inhil-Riau</span>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-xs space-y-2">
                <Quote className="w-5 h-5 text-emerald-800/40" />
                <p className="text-slate-700 italic leading-relaxed">
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
        <div className="bg-[#FAF8F5] rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-l-2 border-emerald-800 pl-2.5">
              {publisherInfo.aboutSection.badge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
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
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-b-2 border-gold-500 pb-0.5">
              {publisherInfo.servicesSection.badge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 pt-1">
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
                <h3 className="font-serif font-bold text-lg text-slate-900">
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
                <h3 className="font-serif font-bold text-lg text-slate-900">
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
                <h3 className="font-serif font-bold text-lg text-slate-900">
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

      {/* SECTION 6: HUBUNGI KAMI / MARI TERHUBUNG */}
      <section id="kontak" className="max-w-6xl mx-auto px-4 sm:px-8 pb-12 scroll-mt-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#061e11] via-[#0f3f22] to-[#092917] text-white p-8 sm:p-12 border-2 border-gold-500/40 shadow-xl space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              {publisherInfo.contactSection.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              {publisherInfo.contactSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
              {publisherInfo.contactSection.description}
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-emerald-950/70 rounded-2xl border border-emerald-800/80 p-6 sm:p-8 max-w-2xl mx-auto space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
              
              <div className="space-y-1">
                <span className="text-[11px] text-stone-400 block uppercase tracking-wider">Nama Penerbit</span>
                <strong className="text-sm font-serif text-white block">
                  {publisherInfo.contactSection.publisherName}
                </strong>
              </div>

              <div className="space-y-1 sm:border-l sm:border-emerald-800/80 sm:pl-4">
                <span className="text-[11px] text-stone-400 block uppercase tracking-wider">WhatsApp</span>
                <strong className="text-sm font-mono text-gold-400 block">
                  {publisherInfo.contactSection.whatsappDisplay}
                </strong>
              </div>

              <div className="space-y-1 sm:border-l sm:border-emerald-800/80 sm:pl-4">
                <span className="text-[11px] text-stone-400 block uppercase tracking-wider">Layanan</span>
                <strong className="text-sm text-stone-200 block">
                  {publisherInfo.contactSection.serviceType}
                </strong>
              </div>

            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="pt-4 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-emerald-950 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-95 border border-gold-300"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-950/20" />
                <span>Hubungi via WhatsApp ({publisherInfo.contactSection.whatsappDisplay})</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
