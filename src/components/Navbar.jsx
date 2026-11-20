import React, { useState } from 'react';
import { 
  BookOpen, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  FileText
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenReader }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Removed "Publications" as requested by user
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'authors', label: 'Authors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      {/* Top Bar */}
      <div className="bg-[#0b331f] text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Penerbit Buku Islami & Literasi Keilmuan
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden sm:inline text-gold-300 font-serif italic text-[11px]">
              Ilmu untuk Kehidupan, Buku untuk Peradaban
            </span>
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
                Menerbitkan Buku-Buku Islami untuk Umat
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all relative ${
                    isActive 
                      ? 'text-[#0f3f22] font-semibold bg-emerald-50/80' 
                      : 'text-slate-600 hover:text-[#0f3f22] hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Clean Direct CTA to Read the Real Book */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenReader('mengapa-ragu-dengan-syariat-allah', 'kata-pengantar')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f3f22] hover:bg-[#15803d] rounded-xl shadow-sm border border-gold-500/40 transition-all active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5 text-gold-300" />
              <span>Baca Buku Digital</span>
            </button>
          </div>

          {/* Mobile menu button */}
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
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
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
                onOpenReader('mengapa-ragu-dengan-syariat-allah', 'kata-pengantar');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0f3f22] rounded-lg"
            >
              <BookOpen className="w-4 h-4 text-gold-300" />
              Baca Buku Digital
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
