import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  ExternalLink, 
  Mail, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  BookCheck, 
  Send,
  HelpCircle
} from 'lucide-react';
import { authorsData } from '../data/authorsData';

export default function AuthorsPage({ onSelectBook, onOpenContact }) {
  const [selectedAuthor, setSelectedAuthor] = useState(authorsData[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="border-b border-stone-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
          Komunitas Cendekiawan & Penulis
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
          Direktori Penulis & Kontributor Ilmiah
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Profil para akademisi, ulama, dan peneliti yang telah menerbitkan buku monograf dan karya ilmiah di Darul Inayah Publishing.
        </p>
      </div>

      {/* Author Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {authorsData.map((author) => {
          return (
            <div 
              key={author.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group hover:border-gold-400"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={author.avatar} 
                      alt={author.name} 
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-gold-400/40 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-700 text-white rounded-full p-0.5 border-2 border-white">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-emerald-900 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-xs text-gold-700 font-semibold">{author.title}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{author.institution}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-justify line-clamp-4">
                  {author.bio}
                </p>

                {/* Academic Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="bg-stone-100 text-slate-600 px-2 py-0.5 rounded border border-stone-200">
                    ORCID: {author.orcid}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    {author.stats.publications} Publikasi
                  </span>
                </div>

                {/* Published Works */}
                <div className="border-t border-stone-100 pt-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
                    Karya Diterbitkan:
                  </span>
                  <div className="space-y-1">
                    {author.publishedBooks.map((b, i) => (
                      <div 
                        key={i}
                        onClick={() => onSelectBook(b.id)}
                        className="text-xs text-slate-700 hover:text-emerald-800 font-medium cursor-pointer flex items-center justify-between group/link"
                      >
                        <span className="truncate pr-2">• {b.title}</span>
                        <span className="text-[10px] text-slate-400 font-mono">({b.year})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-xs">
                <a 
                  href={`mailto:${author.email}`}
                  className="text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Kirim Email</span>
                </a>

                <button
                  onClick={() => onSelectBook(author.publishedBooks[0].id)}
                  className="text-emerald-800 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Lihat Monograf</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Author Guidelines (Panduan Penulis) */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded">
            Informasi Bagi Penulis
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Panduan Penyerahan Naskah (Author Guidelines)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Persyaratan teknis dan etis bagi calon penulis monograf di Darul Inayah Publishing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-emerald-700" /> Format Naskah
            </h4>
            <p className="leading-relaxed">
              Naskah diketik dalam format Microsoft Word (.docx), spasi 1.5, ukuran kertas B5 (17.5 x 25 cm) atau A5, jenis huruf Times New Roman 11pt atau Minion Pro. Jumlah kata berkisar antara 40.000 hingga 100.000 kata.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-1.5">
              <BookCheck className="w-4 h-4 text-gold-600" /> Transliterasi & Ayat
            </h4>
            <p className="leading-relaxed">
              Teks Arab menggunakan font Traditional Arabic atau Amiri bersyakat lengkap. Transliterasi Arab-Latin merujuk pada Pedoman SKB Menteri Agama dan Mendikbud RI. Setiap ayat dan hadits wajib mencantumkan sumber rujukan muktabar.
            </p>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
            <h4 className="font-serif font-bold text-sm text-slate-800 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-700" /> Gaya Sitasi & Referensi
            </h4>
            <p className="leading-relaxed">
              Daftar pustaka disusun alfabetis menggunakan perangkat manajemen referensi standar (Mendeley atau Zotero) dengan format APA Style 7th Edition atau Chicago Manual of Style 17th Edition (Footnote/Full Note).
            </p>
          </div>
        </div>

        {/* CTA to Contact Form */}
        <div className="pt-4 text-center bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-base text-slate-900">Siap Mengajukan Proposal Naskah?</h4>
            <p className="text-xs text-slate-600">Unduh lembar kesediaan penulis dan kirimkan ringkasan draf buku Anda.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Send className="w-4 h-4 text-gold-300" />
            <span>Kirim Proposal Buku</span>
          </button>
        </div>
      </div>

    </div>
  );
}
