import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      <Navbar onScrollTo={scrollToSection} />
      <main className="flex-1">
        <HomePage onScrollTo={scrollToSection} />
      </main>
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
}
