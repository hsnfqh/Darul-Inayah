import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800">
      <Navbar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
