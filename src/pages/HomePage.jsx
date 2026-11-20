import React, { useState } from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  CheckCircle, 
  Maximize2, 
  X, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { booksCatalog, publisherInfo } from '../data/bookData';

export default function HomePage() {
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const book = booksCatalog[0];

  const whatsappUrl = "https://wa.me/6281298765432?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20memesan%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah%20(Harga%20Selera%20Pembaca).";

  return (
    <div className="space-y-16 sm:space-y-20">
      
      {/* Lightbox Modal for Promo Poster */}
      {promoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPromoModalOpen(false)}
        >
          <div className="relative max-w-3xl max-h-[92vh] overflow-hidden rounded-3xl shadow-2xl border-2 border-gold-400 bg-stone-900" onClick={e => e.stopPropagation()}>
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

      {/* HERO SECTION: Promo Iklan Utama */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#082213] via-[#0f3f22] to-[#0b331f] text-white pt-12 pb-20 sm:pt-20 sm:pb-24 border-b-4 border-gold-500 shadow-xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c59b43_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Col: Headline & Order CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-400/60 text-gold-300 text-xs font-bold tracking-wider uppercase shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Terbitan Resmi Darul Inayah Publishing</span>
              </div>

              {/* Gold Big Titles */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  MILIKILAH <br />
                  <span className="text-gold-400 italic">SEKARANG</span>
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-stone-200 font-bold pt-1">
                  "Mengapa Ragu Dengan Syariat Allah SWT?"
                </p>
                <p className="text-gold-300 text-sm sm:text-base font-serif italic">
                  Karya: Al Ustadz Hidayat Taufiq
                </p>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Kajian komprehensif yang membedah hikmah diutusnya para Rasul, kedudukan fitrah akal budi, serta relevansi syariat Islam di tengah tantangan zaman dan pemikiran modern.
              </p>

              {/* Point highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-stone-200">
                <span className="bg-[#12452b] px-3 py-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <strong>ISBN: 978-623-91820-4-5</strong>
                </span>
                <span className="bg-[#12452b] px-3 py-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <strong>165 Halaman</strong>
                </span>
                <span className="bg-[#12452b] px-3 py-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <strong>Edisi Revisi Resmi</strong>
                </span>
              </div>

              {/* Big WhatsApp CTA Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-black text-sm uppercase tracking-wider rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-950/20" />
                  <span>Pesan Buku via WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-stone-400 italic">
                * Klik tombol di atas untuk langsung terhubung dengan admin WhatsApp penerbit.
              </p>

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
                    <Maximize2 className="w-4 h-4 text-gold-300" /> Perbesar Poster
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: Ringkasan Buku & Cara Pemesanan */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-8 sm:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/80 px-3 py-1 rounded-full">
              Tentang Buku
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Menjawab Keraguan, Meneguhkan Keyakinan
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify max-w-3xl mx-auto">
            <p>
              Buku <strong>"Mengapa Ragu Dengan Syariat Allah?"</strong> ditulis oleh <strong>Al Ustadz Hidayat Taufiq</strong> sebagai jawaban tuntas dan mencerahkan bagi setiap Muslim yang mendambakan kepastian nalar dan ketenangan iman di tengah maraknya pemikiran sekuler dan liberal.
            </p>
            <p>
              Melalui paduan dalil naqli (Al-Qur'an dan Sunnah) serta argumen rasional (aqli), buku ini membuktikan bahwa akal budi manusia memerlukan bimbingan syariat ilahi agar kehidupan mencapai kebahagiaan sejati di dunia dan akhirat. Dilengkapi pula dengan pandangan objektif ilmuwan dan cendekiawan Barat mengenai kemukjizatan Al-Qur'an.
            </p>
          </div>

          {/* Testimonial Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-xs space-y-1.5">
              <span className="font-bold text-emerald-900 block font-serif">
                DR. Said Masykur Al-Musyayakh, M.Ag, Ph.D
              </span>
              <span className="text-[11px] text-slate-500 block">Rektor IAI AR-RISALAH Inhil-Riau</span>
              <p className="text-slate-600 italic pt-1">
                "Menjawab keragu-raguan orang tentang betapa pentingnya syariat agama Islam dalam kehidupan sehari-hari."
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-xs space-y-1.5">
              <span className="font-bold text-emerald-900 block font-serif">
                Al-Habib Muhammad Ahmad Vad’aq
              </span>
              <span className="text-[11px] text-slate-500 block">Pengasuh Ponpes Al-Khairat Bekasi</span>
              <p className="text-slate-600 italic pt-1">
                "Kondisi ummat saat ini sangat memerlukan buku seperti ini di tengah maraknya pemikiran sekuler dan liberal."
              </p>
            </div>
          </div>

          {/* Big Order Banner Direct WhatsApp */}
          <div className="rounded-2xl bg-gradient-to-r from-[#082213] via-[#0f3f22] to-[#12452b] text-white p-6 sm:p-8 text-center space-y-4 border border-gold-400/60 shadow-lg mt-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Milikilah Buku Fisik Ini Sekarang
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 max-w-xl mx-auto leading-relaxed font-light">
              Penerbit membuka kesempatan bagi kaum Muslimin, santri, dan penuntut ilmu untuk memiliki buku ini dengan mahar/infaq terbaik. Pengiriman buku ke seluruh wilayah Indonesia.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                <span>Pesan Sekarang via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
