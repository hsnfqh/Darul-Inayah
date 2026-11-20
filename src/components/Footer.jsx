import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function Footer() {
  const whatsappUrl = "https://wa.me/6281298765432?text=Assalamu'alaikum%20Darul%20Inayah%20Publishing,%20saya%20ingin%20memesan%20buku%20Mengapa%20Ragu%20Dengan%20Syariat%20Allah%20(Harga%20Selera%20Pembaca).";

  return (
    <footer className="bg-[#082213] text-stone-300 border-t-4 border-gold-500 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-emerald-900/60">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white p-1 border border-gold-400/50 flex-shrink-0">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-xl text-white">Darul Inayah</span>
                <span className="text-xs uppercase text-gold-400 font-bold tracking-widest">Publishing</span>
              </div>
              <p className="text-xs text-stone-300">
                "Ilmu untuk Kehidupan, Buku untuk Peradaban"
              </p>
            </div>
          </div>

          {/* Quick WA Button */}
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-emerald-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950/20" />
              <span>Hubungi WhatsApp Admin</span>
            </a>
          </div>

        </div>

        {/* Contact info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
            <span>{publisherInfo.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>{publisherInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <a href={`mailto:${publisherInfo.email}`} className="hover:text-gold-300 transition-colors">
              {publisherInfo.email}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-emerald-900/40 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-400 gap-2">
          <p>© {new Date().getFullYear()} Darul Inayah Publishing. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="text-gold-400/90 font-serif italic">
            "Bersama Membangun Peradaban dengan Ilmu"
          </p>
        </div>

      </div>
    </footer>
  );
}
