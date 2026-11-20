import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  const whatsappUrl = "https://wa.me/6281298765432?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20memesan%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah%20(Harga%20Selera%20Pembaca).";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-[#0b331f] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-gold-400/40">
              Edisi Resmi
            </span>
            <span className="text-[11px] font-medium hidden sm:inline">
              Darul Inayah Publishing — "Ilmu untuk Kehidupan, Buku untuk Peradaban"
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-gold-300 font-serif italic text-[11px]">
              "Harga Selera Pembaca"
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 text-left">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gold-300/60 shadow-sm bg-white p-0.5 flex-shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Darul Inayah Publishing" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#0f3f22]">
                  Darul Inayah
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-600 font-sans">
                  Publishing
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium hidden sm:block">
                Penerbit Buku-Buku Islami untuk Umat
              </p>
            </div>
          </div>

          {/* Right Action: Direct WhatsApp CTA Button */}
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-950 bg-gold-400 hover:bg-gold-500 rounded-xl shadow-md border border-gold-500 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
              <span>Pesan via WA</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
