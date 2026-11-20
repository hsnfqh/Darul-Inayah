import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Phone, 
  BookOpen,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { publisherInfo, booksCatalog } from '../data/bookData';

export default function Footer({ onScrollTo }) {
  const mainBook = booksCatalog[0];
  const whatsappUrl = "https://wa.me/6281298765432?text=Assalamu'alaikum%20Darul%20Inayah,%20saya%20ingin%20memesan%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah.";

  return (
    <footer className="bg-[#082213] text-stone-300 border-t-4 border-gold-500 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1 border border-gold-400/50 flex-shrink-0">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Darul Inayah</h3>
                <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold">Publishing</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Penerbit buku-buku Islami bermutu untuk umat dan generasi Muslim. Bersama membangun peradaban dengan ilmu.
            </p>
            <div className="text-[11px] text-gold-300 font-serif italic pt-1">
              "Ilmu untuk Kehidupan, Buku untuk Peradaban"
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('hero')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Beranda Iklan Buku
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('sinopsis')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Sinopsis & Manfaat
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('daftar-isi')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Daftar Isi (8 Bab)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('tokoh')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Sambutan Ulama
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo && onScrollTo('pemesanan')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Formulir Pemesanan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Rilisan Buku */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-400" /> Buku Pilihan
            </h4>
            {mainBook && (
              <div className="space-y-2 text-xs">
                <p className="font-serif font-bold text-white text-sm">
                  {mainBook.title}
                </p>
                <p className="text-stone-300 text-[11px]">
                  Karya: {mainBook.author}
                </p>
                <p className="text-gold-400/90 font-mono text-[11px]">
                  ISBN: {mainBook.isbn}
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-400 text-emerald-950 rounded-lg font-bold text-[11px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Miliki Sekarang (WA)</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Col 4: Layanan Pemesanan & Alamat */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-gold-400" /> Layanan Penerbit
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{publisherInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{publisherInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${publisherInfo.email}`} className="hover:text-gold-300 transition-colors">
                  {publisherInfo.email}
                </a>
              </li>
              <li className="text-[11px] text-stone-400 pt-1">
                Layanan: Senin - Sabtu (08.00 - 17.00 WIB)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} Darul Inayah Publishing. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="text-[11px] text-gold-400/90 font-serif italic">
            "Milikilah Sekarang — Harga Selera Pembaca"
          </div>
        </div>
      </div>
    </footer>
  );
}
