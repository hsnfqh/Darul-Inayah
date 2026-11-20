import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Users, 
  FileCheck2, 
  Building,
  GraduationCap,
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function AboutPage({ onOpenContact }) {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Lightbox for Poster */}
      {posterOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPosterOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl shadow-2xl border-2 border-gold-400 bg-stone-900" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setPosterOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/darul-inayah-poster.jpg" 
              alt="Darul Inayah Publishing Poster Resmi" 
              className="w-full h-auto max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}

      {/* Header Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0a2e19] via-[#0f3f22] to-[#14532d] p-8 sm:p-14 text-white border-b-4 border-gold-500 shadow-xl overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 px-3 py-1 rounded-full text-gold-300 text-xs font-semibold tracking-wider uppercase border border-gold-500/40">
            <Building className="w-3.5 h-3.5 text-gold-400" />
            <span>Profil Resmi Penerbit</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
            Tentang Darul Inayah Publishing
          </h1>
          <p className="text-gold-300 text-base sm:text-lg font-serif italic">
            "{publisherInfo.tagline}"
          </p>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
            {publisherInfo.slogan} — Menghadirkan buku-buku ilmiah, kitab kuning pesantren, bahan ajar pendidikan Islam, serta monograf akademis yang berdaya guna bagi kemaslahatan umat dan peradaban bangsa.
          </p>
        </div>
      </div>

      {/* Poster Charter & Slogan Spotlight */}
      <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div 
              className="relative group cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/60"
              onClick={() => setPosterOpen(true)}
            >
              <img 
                src="/darul-inayah-poster.jpg" 
                alt="Darul Inayah Publishing"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-bold text-white bg-[#0f3f22] px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow">
                  <Maximize2 className="w-4 h-4 text-gold-300" /> Perbesar Poster
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded">
                Manifesto Publikasi
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Bersama Membangun Peradaban dengan Ilmu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed text-justify">
                Darul Inayah Publishing didirikan sebagai wadah penerbitan terpercaya bagi para akademisi, santri, ulama, dan peneliti muslim untuk menyebarkan karya tulis yang orisinal, bernas, dan mencerahkan.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-slate-800">Tiga Nilai Fondasi Penerbitan:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {publisherInfo.pillars.map((pil, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 space-y-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                    <h5 className="font-serif font-bold text-xs text-slate-900">{pil.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-snug">{pil.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5 Publication Segments */}
            <div className="pt-2">
              <h4 className="font-serif font-bold text-sm text-slate-800 mb-2">Fokus Rumpun Buku:</h4>
              <div className="flex flex-wrap gap-2">
                {publisherInfo.categoriesList.map((cat, i) => (
                  <span key={i} className="text-xs bg-emerald-50 text-emerald-900 border border-emerald-200 px-3 py-1 rounded-full font-medium">
                    ✓ {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0f3f22] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-slate-900">Visi Utama</h2>
          <p className="text-sm text-slate-600 leading-relaxed text-justify">
            Menjadi penerbit buku akademik dan khazanah Islam terkemuka yang unggul, terpercaya, dan menjadi rujukan utama bagi pengembangan keilmuan Islam berwawasan moderat, ilmiah, dan berdaya saing internasional pada tahun 2030.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gold-100 text-gold-800 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-slate-900">Misi Penerbitan</h2>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>Menerbitkan monograf, buku ajar, dan referensi ilmiah berbasis penelitian berkualitas tinggi.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>Mendiseminasikan karya-karya orisinal ulama dan cendekiawan muslim yang memperkokoh syariat dan akhlak karimah.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>Menjamin kepatuhan standar peer-review, pengindeksan digital, dan perlindungan hak cipta penulis.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>Memperluas aksesibilitas ilmu melalui teknologi digital reading modern dan open dissemination.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Standar & Etika Publikasi (COPE) */}
      <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0f3f22] bg-emerald-100/70 px-3 py-1 rounded">
            Integritas Ilmiah
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Etika Publikasi & Kebijakan Telaah
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Darul Inayah Publishing memegang teguh pedoman Committee on Publication Ethics (COPE) dalam seluruh rantai produksi buku.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-700" />
            <h4 className="font-serif font-bold text-sm text-slate-800">Double-Blind Review</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Penilaian naskah dilakukan secara independen tanpa saling mengetahui identitas antara penulis dan reviewer.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <FileCheck2 className="w-6 h-6 text-gold-600" />
            <h4 className="font-serif font-bold text-sm text-slate-800">Uji Orisinalitas</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Skrining kesamaan naskah via software Turnitin & iThenticate berlisensi dengan batas toleransi kesamaan maksimal 15%.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <Award className="w-6 h-6 text-emerald-700" />
            <h4 className="font-serif font-bold text-sm text-slate-800">Hak Cipta & Royalti</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Transparansi royalti dan perlindungan hak cipta sesuai Undang-Undang Republik Indonesia Nomor 28 Tahun 2014.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-2">
            <BookOpen className="w-6 h-6 text-gold-600" />
            <h4 className="font-serif font-bold text-sm text-slate-800">Pengindeksan Digital</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Setiap buku diterbitkan dengan nomor ISBN Perpusnas resmi serta Digital Object Identifier (DOI) terintegrasi Crossref.
            </p>
          </div>
        </div>
      </div>

      {/* Dewan Redaksi */}
      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Dewan Redaksi & Penasihat Ahli
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Didukung oleh para akademisi, guru besar, dan tokoh ulama terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "DR. Said Masykur Al-Musyayakh, M.Ag, Ph.D",
              role: "Ketua Dewan Pakar & Penasihat Ahli",
              affil: "Rektor Institut Agama Islam AR-RISALAH Inhil-Riau"
            },
            {
              name: "Al-Ustadz Al-Habib Muhammad Ahmad Vad’aq",
              role: "Dewan Kehormatan & Pembina Syariah",
              affil: "Pengasuh Pondok Pesantren Al-Khairat Bekasi"
            },
            {
              name: "Al Ustadz Hidayat Taufiq",
              role: "Direktur Riset & Penulis Senior",
              affil: "Darul Inayah Research Institute"
            }
          ].map((board, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-900 text-gold-300 font-serif font-bold text-base flex items-center justify-center">
                {board.name.charAt(3) || 'D'}
              </div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900">{board.name}</h3>
              <p className="text-xs text-gold-700 font-semibold">{board.role}</p>
              <p className="text-xs text-slate-500">{board.affil}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#FAF8F5] p-8 sm:p-12 rounded-3xl border border-stone-200 text-center space-y-4">
        <h3 className="font-serif font-bold text-2xl text-slate-900">
          Ingin Menerbitkan Buku Ilmiah Bersama Kami?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Kami menyambut naskah disertasi, tesis, hasil riset, buku ajar, maupun karya pemikiran Islam yang memenuhi standar metodologis.
        </p>
        <button
          onClick={onOpenContact}
          className="px-6 py-3 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all inline-flex items-center gap-2"
        >
          <span>Konsultasi & Pengajuan Naskah</span>
        </button>
      </div>

    </div>
  );
}
