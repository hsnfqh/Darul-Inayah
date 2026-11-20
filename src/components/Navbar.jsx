import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function Navbar({ onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'katalog', label: 'Katalog Buku' },
    { id: 'buku', label: 'Buku Pilihan' },
    { id: 'tentang', label: 'Tentang Penerbit' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'kontak', label: 'Hubungi Kami' }
  ];

  const handleNavClick = (id) => {
    if (onScrollTo) {
      onScrollTo(id);
    }
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${publisherInfo.contactSection.whatsappNumber}?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20mengetahui%20informasi%20buku%20dan%20penerbitan.`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-[#0b331f] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-gold-400/40">
              Official Website
            </span>
            <span className="text-[11px] font-medium hidden sm:inline text-stone-200">
              {publisherInfo.name} — {publisherInfo.tagline}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WA: {publisherInfo.contactSection.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group transition-all"
          >
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gold-300/60 shadow-sm bg-white p-0.5 flex-shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Darul Inayah Publishing" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#0f3f22] group-hover:text-[#15803d] transition-colors">
                  Darul Inayah
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-gold-600 font-sans">
                  Publishing
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium hidden sm:block">
                Wadah Penerbitan &amp; Khazanah Keilmuan
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0f3f22] hover:bg-emerald-50/60 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action: Direct WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-gold-400 hover:bg-gold-500 rounded-xl shadow-sm border border-gold-500 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-900 rounded-lg hover:bg-stone-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0f3f22]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-gold-400 rounded-xl shadow"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
              Hubungi via WhatsApp ({publisherInfo.contactSection.whatsappDisplay})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
