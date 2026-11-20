import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle,
  PhoneCall
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top Utility Bar */}
      <div className="bg-[#0b291b] text-emerald-100/90 text-xs py-2 px-4 sm:px-8 border-b border-emerald-950/40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-gold-400/30">
              Official Publisher
            </span>
            <span className="text-[11px] font-medium text-stone-200 hidden sm:inline">
              {publisherInfo.name} — {publisherInfo.tagline}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-300 hover:text-white font-medium flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <strong className="font-mono text-white">{publisherInfo.contactSection.whatsappDisplay}</strong></span>
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
            className="flex items-center gap-3.5 text-left group transition-all"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-gold-400/40 shadow-sm bg-white p-1 flex-shrink-0 group-hover:border-gold-500 transition-colors">
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
                <span className="text-[11px] uppercase font-bold tracking-widest text-gold-600 font-sans">
                  Publishing
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-stone-500 font-medium hidden sm:block">
                Penerbitan Buku &amp; Khazanah Keislaman
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3.5 py-2 text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#0f3f22] hover:bg-emerald-50/80 rounded-xl transition-all"
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
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3f22] hover:bg-[#15803d] rounded-xl shadow-sm border border-emerald-800 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-2 shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-200">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f3f22] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>Hubungi WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
