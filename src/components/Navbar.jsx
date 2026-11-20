import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  FileText,
  UserCheck,
  PhoneCall
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'publications', label: 'Publications' },
    { id: 'authors', label: 'Authors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      {/* Top Academic Bar */}
      <div className="bg-[#0b331f] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Portal Penerbitan Ilmiah & Akademik Resmi
            </span>
            <span className="hidden md:inline-block text-emerald-300/40">•</span>
            <span className="hidden md:inline-block text-emerald-200/80">
              Anggota IKAPI & Terdaftar Perpusnas RI
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden sm:inline text-gold-300 font-serif italic">
              ISSN & ISBN Registered
            </span>
            <div className="flex items-center gap-1 bg-[#12452b] px-2 py-0.5 rounded text-[11px] text-gold-300 border border-emerald-700/50">
              <Globe className="w-3 h-3 text-gold-400" />
              <span>ID</span>
              <span className="text-emerald-500">|</span>
              <span className="text-emerald-300/60 cursor-pointer hover:text-white">EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand Identity */}
          <button 
            onClick={() => setCurrentPage('home')}
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
                Academic & Islamic Book Press
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all relative ${
                    isActive 
                      ? 'text-[#0f3f22] font-semibold bg-emerald-50/80' 
                      : 'text-slate-600 hover:text-[#0f3f22] hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onSearchClick}
              className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 bg-stone-100 hover:bg-stone-200/80 rounded-lg border border-stone-200 transition-colors"
              title="Cari katalog buku, penulis, atau ISBN"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Cari Katalog...</span>
              <kbd className="hidden md:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-stone-300 text-slate-400">Ctrl K</kbd>
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f3f22] hover:bg-[#15803d] rounded-lg shadow-sm border border-gold-600/30 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-gold-300" />
              <span>Kirim Naskah</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onSearchClick}
              className="p-2 text-slate-600 hover:text-emerald-800 rounded-lg"
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>
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
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentPage === item.id
                  ? 'bg-emerald-50 text-[#0f3f22] font-semibold border-l-4 border-gold-500'
                  : 'text-slate-600 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setCurrentPage('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f3f22] rounded-lg"
            >
              <FileText className="w-4 h-4 text-gold-300" />
              Kirim Naskah Buku
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
