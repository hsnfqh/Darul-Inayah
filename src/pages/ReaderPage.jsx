import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Type, 
  Sun, 
  Moon, 
  Coffee, 
  Search, 
  Bookmark, 
  Check, 
  Share2, 
  Maximize2, 
  Minimize2,
  BookOpen,
  Info
} from 'lucide-react';
import { booksCatalog } from '../data/bookData';

export default function ReaderPage({ bookId, initialChapter = 'kata-pengantar', onBackToBook }) {
  const book = booksCatalog.find(b => b.id === bookId) || booksCatalog[0];
  const [currentChapterId, setCurrentChapterId] = useState(initialChapter);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fontSize, setFontSize] = useState(16); // 14, 16, 18, 20
  const [fontFamily, setFontFamily] = useState('reader'); // 'reader' (Merriweather), 'serif' (Playfair), 'sans'
  const [theme, setTheme] = useState('sepia'); // 'light', 'sepia', 'dark'
  const [searchInChapter, setSearchInChapter] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const contentRef = useRef(null);

  // Synchronize when initialChapter changes
  useEffect(() => {
    if (initialChapter) {
      setCurrentChapterId(initialChapter);
    }
  }, [initialChapter]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) {
        setScrollProgress(Math.round((el.scrollTop / total) * 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentChapterId]);

  // Scroll to top on chapter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapterId]);

  const chapterKeys = Object.keys(book.chapters);
  const currentChapterIndex = chapterKeys.indexOf(currentChapterId);
  const currentChapter = book.chapters[currentChapterId] || book.chapters[chapterKeys[0]];

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterId(chapterKeys[currentChapterIndex - 1]);
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < chapterKeys.length - 1) {
      setCurrentChapterId(chapterKeys[currentChapterIndex + 1]);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Theme styling classes
  const themeClasses = {
    light: 'bg-white text-slate-800',
    sepia: 'bg-[#FBF8F1] text-[#2c241b]',
    dark: 'bg-[#12161a] text-slate-200'
  }[theme];

  const headerThemeClasses = {
    light: 'bg-white/95 border-stone-200 text-slate-800',
    sepia: 'bg-[#F5EFE0]/95 border-[#E6DAC3] text-[#2c241b]',
    dark: 'bg-[#181f26]/95 border-slate-800 text-slate-200'
  }[theme];

  const sidebarThemeClasses = {
    light: 'bg-[#FAF8F5] border-stone-200 text-slate-800',
    sepia: 'bg-[#F2EAD8] border-[#E2D5BE] text-[#2c241b]',
    dark: 'bg-[#151c22] border-slate-800 text-slate-200'
  }[theme];

  const cardThemeClasses = {
    light: 'bg-stone-50 border-stone-200',
    sepia: 'bg-[#EDE3CE] border-[#DCCBB0]',
    dark: 'bg-[#1c242c] border-slate-700'
  }[theme];

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-200 flex flex-col font-${fontFamily}`}>
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200/40 z-50">
        <div 
          className="h-full bg-gold-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Navbar */}
      <header className={`sticky top-0 z-40 backdrop-blur border-b ${headerThemeClasses} px-4 py-2.5 transition-colors`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Back & TOC toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBackToBook}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center gap-1 text-xs font-semibold"
              title="Kembali ke Detail Buku"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Detail Buku</span>
            </button>

            <div className="h-4 w-px bg-current opacity-20"></div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                sidebarOpen ? 'bg-gold-500/20 text-gold-700 font-bold' : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
              title="Daftar Bab & Isi"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden md:inline">Daftar Isi</span>
            </button>

            <span className="hidden lg:inline text-xs opacity-60 font-serif truncate max-w-xs">
              {book.title}
            </span>
          </div>

          {/* Center: Chapter Quick Picker */}
          <div className="hidden sm:flex items-center gap-2">
            <select
              value={currentChapterId}
              onChange={(e) => setCurrentChapterId(e.target.value)}
              className="text-xs py-1.5 px-3 rounded-lg border border-current border-opacity-20 bg-transparent outline-none font-sans font-medium"
            >
              {book.tableOfContents.map((chap) => (
                <option key={chap.id} value={chap.id} className="text-slate-800 bg-white">
                  {chap.title}
                </option>
              ))}
            </select>
          </div>

          {/* Right: Customization Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Font Size Selector */}
            <div className="flex items-center border border-current border-opacity-20 rounded-lg p-0.5 text-xs font-sans">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="px-2 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded text-[11px] font-bold"
                title="Perkecil Font"
              >
                A-
              </button>
              <span className="px-1 text-[10px] opacity-60">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(22, fontSize + 2))}
                className="px-2 py-0.5 hover:bg-black/5 dark:hover:bg-white/5 rounded text-xs font-bold"
                title="Perbesar Font"
              >
                A+
              </button>
            </div>

            {/* Font Family */}
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="hidden md:block text-xs py-1 px-2 rounded-lg border border-current border-opacity-20 bg-transparent outline-none font-sans"
              title="Pilih Jenis Huruf"
            >
              <option value="reader" className="text-slate-800 bg-white">Merriweather (Buku)</option>
              <option value="serif" className="text-slate-800 bg-white">Playfair Display (Serif)</option>
              <option value="sans" className="text-slate-800 bg-white">Plus Jakarta Sans</option>
            </select>

            {/* Theme switcher */}
            <div className="flex items-center border border-current border-opacity-20 rounded-lg p-0.5">
              <button
                onClick={() => setTheme('light')}
                className={`p-1 rounded ${theme === 'light' ? 'bg-gold-500 text-white' : 'opacity-60 hover:opacity-100'}`}
                title="Tema Terang"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`p-1 rounded ${theme === 'sepia' ? 'bg-amber-700 text-white' : 'opacity-60 hover:opacity-100'}`}
                title="Tema Sepia / Kertas Kuno"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-1 rounded ${theme === 'dark' ? 'bg-slate-700 text-white' : 'opacity-60 hover:opacity-100'}`}
                title="Tema Gelap"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg border border-current border-opacity-20 opacity-70 hover:opacity-100 hidden sm:block"
              title="Layar Penuh"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

          </div>

        </div>
      </header>

      {/* Reader Layout Container */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full relative">
        
        {/* Left TOC Sidebar (Collapsible) */}
        {sidebarOpen && (
          <aside className={`w-72 sm:w-80 border-r ${sidebarThemeClasses} p-5 flex flex-col fixed inset-y-0 left-0 pt-16 z-30 lg:static lg:pt-5 transition-transform duration-300 shadow-xl lg:shadow-none`}>
            
            <div className="flex justify-between items-center pb-4 border-b border-current border-opacity-10">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gold-600" />
                <h3 className="font-serif font-bold text-sm">Daftar Isi Monograf</h3>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-1.5 font-sans">
              {book.tableOfContents.map((chap, idx) => {
                const isActive = chap.id === currentChapterId;
                return (
                  <div key={chap.id} className="space-y-1">
                    <button
                      onClick={() => {
                        setCurrentChapterId(chap.id);
                        if (window.innerWidth < 1024) setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-start justify-between gap-2 ${
                        isActive
                          ? 'bg-[#0f3f22] text-white font-bold shadow-md'
                          : 'hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="leading-snug">
                        <span>{chap.title}</span>
                      </div>
                      <span className={`text-[10px] font-mono flex-shrink-0 ${isActive ? 'text-gold-300' : 'opacity-60'}`}>
                        {chap.pageStart}
                      </span>
                    </button>

                    {/* Subsections */}
                    {chap.sections && chap.sections.length > 0 && isActive && (
                      <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-gold-500/50 ml-2">
                        {chap.sections.map((sec, sIdx) => (
                          <div
                            key={sIdx}
                            className="text-[11px] py-1 px-2 rounded hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100 cursor-pointer flex justify-between"
                          >
                            <span className="truncate">{sec.title}</span>
                            <span className="opacity-50 text-[10px] ml-1">h.{sec.page}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-current border-opacity-10 text-[11px] opacity-60 text-center font-sans">
              {book.edition} • {book.publisher}
            </div>
          </aside>
        )}

        {/* Center Main Book Text Canvas */}
        <main 
          ref={contentRef}
          className="flex-1 max-w-3xl mx-auto px-5 sm:px-10 py-10 sm:py-16 space-y-8"
          style={{ fontSize: `${fontSize}px` }}
        >
          {/* Chapter Heading Banner */}
          <div className="border-b-2 border-gold-500/50 pb-6 text-center space-y-2">
            <span className="text-[11px] uppercase tracking-widest font-sans font-bold opacity-60">
              {book.title}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              {currentChapter?.title}
            </h1>
            {currentChapter?.subtitle && (
              <p className="text-xs sm:text-sm font-serif italic opacity-75 max-w-xl mx-auto">
                {currentChapter.subtitle}
              </p>
            )}
          </div>

          {/* Chapter Main Paragraphs & Elements */}
          <div className="space-y-6 leading-relaxed">
            {currentChapter?.content?.map((item, idx) => {
              
              if (item.type === 'subheading') {
                return (
                  <h2 
                    key={idx} 
                    className="font-serif font-bold text-lg sm:text-xl pt-6 pb-2 border-b border-current border-opacity-10 text-emerald-900 dark:text-emerald-300"
                  >
                    {item.text}
                  </h2>
                );
              }

              if (item.type === 'paragraph') {
                return (
                  <p key={idx} className="text-justify leading-relaxed indent-8">
                    {item.text}
                  </p>
                );
              }

              if (item.type === 'verse') {
                return (
                  <div 
                    key={idx} 
                    className={`my-6 p-6 rounded-2xl border ${cardThemeClasses} shadow-sm space-y-4`}
                  >
                    <div className="text-right font-arabic text-2xl sm:text-3xl leading-loose font-bold text-emerald-950 dark:text-emerald-200">
                      {item.arabic}
                    </div>
                    <div className="pt-3 border-t border-current border-opacity-10 space-y-1">
                      <p className="font-serif italic text-sm opacity-90">
                        {item.translation}
                      </p>
                      <div className="flex justify-between items-center text-[11px] font-sans opacity-70 pt-1 font-semibold">
                        <span>{item.reference}</span>
                        <span className="text-gold-600 dark:text-gold-400">Wahyu Ilahi</span>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.type === 'arabic') {
                return (
                  <div key={idx} className="my-5 text-center space-y-2 py-3 bg-black/5 dark:bg-white/5 rounded-xl">
                    <p className="font-arabic text-2xl font-bold text-emerald-900 dark:text-emerald-300">
                      {item.arabic}
                    </p>
                    {item.translation && (
                      <p className="text-xs italic opacity-80 font-serif">
                        {item.translation}
                      </p>
                    )}
                  </div>
                );
              }

              if (item.type === 'quote') {
                return (
                  <blockquote 
                    key={idx}
                    className="my-5 pl-4 sm:pl-6 border-l-4 border-gold-500 italic space-y-1 opacity-90 text-sm"
                  >
                    <p className="leading-relaxed font-serif">"{item.text}"</p>
                    {item.author && (
                      <cite className="block text-xs font-sans font-bold not-italic opacity-70">
                        — {item.author}
                      </cite>
                    )}
                  </blockquote>
                );
              }

              if (item.type === 'list') {
                return (
                  <ol key={idx} className="my-4 space-y-2.5 list-decimal pl-6 text-sm">
                    {item.items.map((li, lIdx) => (
                      <li key={lIdx} className="leading-relaxed pl-1">
                        {li}
                      </li>
                    ))}
                  </ol>
                );
              }

              if (item.type === 'signature') {
                return (
                  <div key={idx} className="my-6 pt-4 text-right space-y-1 font-serif">
                    <p className="font-bold text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs opacity-75 font-sans">{item.title}</p>
                  </div>
                );
              }

              if (item.type === 'bibliography') {
                return (
                  <div key={idx} className={`p-6 rounded-2xl border ${cardThemeClasses} space-y-3 font-serif text-xs leading-relaxed`}>
                    {item.items.map((refItem, rIdx) => (
                      <div key={rIdx} className="pb-2 border-b border-current border-opacity-10 last:border-0">
                        {refItem}
                      </div>
                    ))}
                  </div>
                );
              }

              if (item.type === 'divider') {
                return (
                  <div key={idx} className="my-8 flex items-center justify-center gap-3 opacity-30">
                    <span className="w-16 h-px bg-current"></span>
                    <span className="text-gold-500 font-serif">❦</span>
                    <span className="w-16 h-px bg-current"></span>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Chapter Footer Navigation */}
          <div className="mt-14 pt-8 border-t border-current border-opacity-20 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans">
            <button
              onClick={handlePrevChapter}
              disabled={currentChapterIndex <= 0}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border border-current border-opacity-20 flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                currentChapterIndex <= 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Bab Sebelumnya</span>
            </button>

            <span className="text-xs opacity-60 font-mono">
              Bab {currentChapterIndex + 1} dari {chapterKeys.length}
            </span>

            <button
              onClick={handleNextChapter}
              disabled={currentChapterIndex >= chapterKeys.length - 1}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#0f3f22] text-white flex items-center justify-center gap-2 text-xs font-semibold shadow-md transition-all ${
                currentChapterIndex >= chapterKeys.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-stone-400'
                  : 'hover:bg-[#15803d] active:scale-95'
              }`}
            >
              <span>Bab Berikutnya</span>
              <ChevronRight className="w-4 h-4 text-gold-300" />
            </button>
          </div>

        </main>

      </div>
    </div>
  );
}
