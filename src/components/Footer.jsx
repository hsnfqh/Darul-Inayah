import React from 'react';
import { 
  ShieldCheck, 
  BookMarked, 
  Mail, 
  MapPin, 
  Phone, 
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { publisherInfo, booksCatalog } from '../data/bookData';

export default function Footer({ setCurrentPage, onOpenReader }) {
  const mainBook = booksCatalog[0];

  return (
    <footer className="bg-[#082213] text-stone-300 border-t-4 border-gold-500 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Identity */}
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
              Menerbitkan buku-buku Islami berkualitas untuk umat dan generasi Muslim. Bersama membangun peradaban dengan ilmu.
            </p>
            <div className="text-[11px] text-gold-300 font-serif italic pt-1">
              "Ilmu untuk Kehidupan, Buku untuk Peradaban"
            </div>
          </div>

          {/* Col 2: Navigasi Halaman */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <BookMarked className="w-4 h-4 text-gold-400" /> Navigasi Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('authors')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Authors (Profil Penulis)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Terbitan Buku Resmi */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-400" /> Terbitan Buku
            </h4>
            {mainBook && (
              <div className="space-y-2.5 text-xs">
                <p className="font-serif font-bold text-white text-sm">
                  {mainBook.title}
                </p>
                <p className="text-stone-300 text-[11px]">
                  Penulis: {mainBook.author}
                </p>
                <p className="text-gold-400/90 font-mono text-[11px]">
                  ISBN: {mainBook.isbn}
                </p>
                <button
                  onClick={() => onOpenReader(mainBook.id, 'kata-pengantar')}
                  className="inline-flex items-center gap-1 text-gold-300 hover:text-white underline text-[11px] pt-1"
                >
                  <span>Baca buku online sekarang →</span>
                </button>
              </div>
            )}
          </div>

          {/* Col 4: Kontak Redaksi */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-gold-400" /> Kontak Kami
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{publisherInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${publisherInfo.email}`} className="hover:text-gold-300 transition-colors">
                  {publisherInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{publisherInfo.phone}</span>
              </li>
              <li className="text-[11px] text-stone-400 pt-1">
                Jam Layanan: {publisherInfo.operatingHours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 gap-3">
          <p>© {new Date().getFullYear()} Darul Inayah Publishing. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="text-[11px] text-gold-400/80 font-serif italic">
            "Bersama Membangun Peradaban dengan Ilmu"
          </div>
        </div>
      </div>
    </footer>
  );
}
