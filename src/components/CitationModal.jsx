import React, { useState } from 'react';
import { X, Copy, Check, Quote, FileCode, Download } from 'lucide-react';

export default function CitationModal({ book, isOpen, onClose }) {
  if (!isOpen || !book) return null;

  const [activeTab, setActiveTab] = useState('apa');
  const [copied, setCopied] = useState(false);

  const apaCitation = `${book.author}. (${book.year}). ${book.title}. ${book.place}: ${book.publisher}. DOI: https://doi.org/${book.doi}`;
  
  const mlaCitation = `${book.author}. *${book.title}*. ${book.publisher}, ${book.year}. DOI: ${book.doi}.`;
  
  const chicagoCitation = `${book.author}. ${book.year}. *${book.title}*. ${book.place}: ${book.publisher}.`;

  const bibtex = `@book{${book.id}_${book.year},
  author    = {${book.author}},
  title     = {${book.title}},
  publisher = {${book.publisher}},
  year      = {${book.year}},
  address   = {${book.place}},
  isbn      = {${book.isbn}},
  doi       = {${book.doi}}
}`;

  const ris = `TY  - BOOK
AU  - ${book.author}
TI  - ${book.title}
PB  - ${book.publisher}
PY  - ${book.year}
SN  - ${book.isbn}
DO  - ${book.doi}
CY  - ${book.place}
ER  - `;

  const getCitationText = () => {
    switch (activeTab) {
      case 'apa': return apaCitation;
      case 'mla': return mlaCitation;
      case 'chicago': return chicagoCitation;
      case 'bibtex': return bibtex;
      case 'ris': return ris;
      default: return apaCitation;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = getCitationText();
    const extension = activeTab === 'bibtex' ? 'bib' : activeTab === 'ris' ? 'ris' : 'txt';
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${book.id}-citation.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#0f3f22] text-white flex justify-between items-center border-b border-emerald-900">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif font-bold text-lg">Kutipan Sitasi Ilmiah</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs text-slate-500 mb-3">
            Gunakan format sitasi standar berikut untuk karya ilmiah, tesis, disertasi, atau artikel jurnal:
          </p>

          {/* Tab Selector */}
          <div className="flex border-b border-stone-200 mb-4 overflow-x-auto text-xs font-semibold">
            {[
              { id: 'apa', label: 'APA 7th' },
              { id: 'mla', label: 'MLA 9th' },
              { id: 'chicago', label: 'Chicago 17th' },
              { id: 'bibtex', label: 'BibTeX' },
              { id: 'ris', label: 'RIS (Mendeley/Zotero)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-[#0f3f22] text-[#0f3f22] font-bold' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Citation Preview Box */}
          <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-200 font-mono text-xs text-slate-800 leading-relaxed relative min-h-[90px] whitespace-pre-wrap select-all">
            {getCitationText()}
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              Format: {activeTab.toUpperCase()} Reference
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File</span>
              </button>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white rounded-lg transition-all ${
                  copied ? 'bg-emerald-600' : 'bg-[#0f3f22] hover:bg-[#15803d]'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Sitasi'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
