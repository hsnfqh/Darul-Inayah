import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CitationModal from './components/CitationModal';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PublicationsPage from './pages/PublicationsPage';
import BookDetailPage from './pages/BookDetailPage';
import ReaderPage from './pages/ReaderPage';
import AuthorsPage from './pages/AuthorsPage';
import ContactPage from './pages/ContactPage';
import { booksCatalog } from './data/bookData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBookId, setSelectedBookId] = useState('mengapa-ragu-dengan-syariat-allah');
  const [selectedChapterId, setSelectedChapterId] = useState('kata-pengantar');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [citeBook, setCiteBook] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Navigation handlers
  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId);
    setCurrentPage('book-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReader = (bookId, chapterId = 'kata-pengantar') => {
    setSelectedBookId(bookId);
    setSelectedChapterId(chapterId);
    setCurrentPage('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page, query = '') => {
    setCurrentPage(page);
    if (query) setSearchQuery(query);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If in reader mode, we show full-screen reader experience without standard navbar/footer
  if (currentPage === 'reader') {
    return (
      <ReaderPage 
        bookId={selectedBookId}
        initialChapter={selectedChapterId}
        onBackToBook={() => handleSelectBook(selectedBookId)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      {/* Global Navigation */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={(page) => handleNavigate(page)}
        onSearchClick={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onSelectBook={handleSelectBook}
            onOpenReader={handleOpenReader}
            onOpenContact={() => handleNavigate('contact')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onOpenContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'publications' && (
          <PublicationsPage 
            initialSearch={searchQuery}
            onSelectBook={handleSelectBook}
            onOpenReader={handleOpenReader}
            onOpenCite={(book) => setCiteBook(book)}
          />
        )}

        {currentPage === 'authors' && (
          <AuthorsPage 
            onSelectBook={handleSelectBook}
            onOpenContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'book-detail' && (
          <BookDetailPage 
            bookId={selectedBookId}
            onBack={() => handleNavigate('publications')}
            onOpenReader={handleOpenReader}
            onOpenCite={(book) => setCiteBook(book)}
            onOpenContact={() => handleNavigate('contact')}
          />
        )}
      </main>

      {/* Global Academic Footer */}
      <Footer setCurrentPage={(page) => handleNavigate(page)} />

      {/* Citation Modal */}
      <CitationModal 
        book={citeBook}
        isOpen={!!citeBook}
        onClose={() => setCiteBook(null)}
      />

      {/* Quick Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectBook={handleSelectBook}
        onSelectAuthor={(authorId) => handleNavigate('authors')}
      />
    </div>
  );
}
