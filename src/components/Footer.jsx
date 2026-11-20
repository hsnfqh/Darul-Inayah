import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function Footer({ onScrollTo }) {
  const whatsappUrl = `https://wa.me/${publisherInfo.contactSection.whatsappNumber}?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20mengetahui%20informasi%20buku%20dan%20layanan%20penerbitan.`;

  return (
    <footer className="bg-[#082213] text-stone-300 border-t-4 border-gold-500 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-emerald-900/60">
          
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1 border border-gold-400/50 flex-shrink-0">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-bold text-xl text-white">Darul Inayah</span>
                  <span className="text-xs uppercase text-gold-400 font-bold tracking-widest">Publishing</span>
                </div>
                <p className="text-xs text-stone-300">
                  {publisherInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm pt-1">
              Wadah penerbitan dan penyebaran karya tulis berkualitas dalam bidang keislaman, pendidikan, dan khazanah keilmuan.
            </p>
          </div>

          {/* Navigasi Menu */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-3">
              Navigasi Menu
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('beranda')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('buku')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Buku Pilihan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('tentang')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Tentang Penerbit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('layanan')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Layanan Penerbitan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('kontak')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Layanan & Kontak */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-3">
              Kontak Resmi
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>WhatsApp: {publisherInfo.contactSection.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${publisherInfo.email}`} className="hover:text-gold-300 transition-colors">
                  {publisherInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{publisherInfo.address}</span>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-2 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-400 gap-2">
          <p>© {new Date().getFullYear()} Darul Inayah Publishing. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-gold-400/90 font-serif italic">
            "Bersama Membangun Peradaban dengan Ilmu"
          </p>
        </div>

      </div>
    </footer>
  );
}
