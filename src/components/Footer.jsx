import React from 'react';
import { 
  ShieldCheck, 
  BookMarked, 
  Mail, 
  MapPin, 
  Phone, 
  FileCheck2, 
  Award,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function Footer({ setCurrentPage }) {
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
                <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold">Publishing House</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Portal resmi penerbitan buku akademik, khazanah ilmiah Islam, dan monograf terindeks dengan standar telaah mutu dan etika publikasi ilmiah nasional & internasional.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] bg-emerald-950 text-gold-300 px-2.5 py-1 rounded border border-gold-600/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-gold-400" /> Anggota IKAPI
              </span>
              <span className="text-[11px] bg-emerald-950 text-emerald-200 px-2.5 py-1 rounded border border-emerald-800/40">
                ISBN Perpusnas
              </span>
              <span className="text-[11px] bg-emerald-950 text-emerald-200 px-2.5 py-1 rounded border border-emerald-800/40">
                Crossref DOI
              </span>
            </div>
          </div>

          {/* Col 2: Navigasi Utama */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <BookMarked className="w-4 h-4 text-gold-400" /> Navigasi Portal
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Beranda Utama
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Tentang Penerbit & Dewan Redaksi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('publications')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Katalog Publikasi & Buku
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('authors')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Direktori Penulis & Kontributor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="hover:text-gold-300 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500" /> Hubungi Kami & Pengajuan Naskah
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Standar & Etika Publikasi */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold-400" /> Kebijakan Ilmiah
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="bg-emerald-950/60 p-2.5 rounded border border-emerald-900/60">
                <span className="font-semibold text-emerald-200 block mb-0.5">Peer Review Policy:</span>
                <span className="text-stone-300 text-[11px]">{publisherInfo.editorialPolicy.peerReview}</span>
              </div>
              <div className="bg-emerald-950/60 p-2.5 rounded border border-emerald-900/60">
                <span className="font-semibold text-emerald-200 block mb-0.5">Uji Orisinalitas:</span>
                <span className="text-stone-300 text-[11px]">{publisherInfo.editorialPolicy.plagiarismCheck}</span>
              </div>
              <div className="bg-emerald-950/60 p-2.5 rounded border border-emerald-900/60">
                <span className="font-semibold text-emerald-200 block mb-0.5">Akses Terbuka:</span>
                <span className="text-stone-300 text-[11px]">{publisherInfo.editorialPolicy.openAccess}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Kontak Redaksi */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-gold-300 tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-gold-400" /> Kantor Redaksi
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
                <span>{publisherInfo.phone} / {publisherInfo.whatsapp}</span>
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
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-gold-300 cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-gold-300 cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-gold-300 cursor-pointer">Sitemap Akademik</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
