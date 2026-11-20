import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building,
  HelpCircle,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { publisherInfo } from '../data/bookData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    category: 'pemesanan-buku',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="border-b border-stone-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
          Layanan Komunikasi & Pemesanan
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
          Hubungi Darul Inayah Publishing
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Silakan hubungi kami untuk informasi pemesanan buku, distribusi pondok pesantren, wakaf buku ke perpustakaan, atau konsultasi seputar penerbitan buku Islami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact Cards & Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-stone-100 pb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-emerald-800" />
              <span>Kantor Penerbitan & Layanan</span>
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block mb-0.5">Alamat Kantor:</strong>
                  <span>{publisherInfo.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block mb-0.5">Surat Elektronik (Email):</strong>
                  <a href={`mailto:${publisherInfo.email}`} className="text-emerald-800 hover:underline">
                    {publisherInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block mb-0.5">Telepon & WhatsApp:</strong>
                  <span>{publisherInfo.phone} / {publisherInfo.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block mb-0.5">Jam Operasional Layanan:</strong>
                  <span>{publisherInfo.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200 text-[11px] text-slate-600 space-y-1">
              <span className="font-bold text-emerald-900 block flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                Komitmen Pelayanan Umat
              </span>
              <p>Setiap pertanyaan, konsultasi, dan pemesanan buku akan ditindaklanjuti dengan ramah dan cepat oleh staf kami.</p>
            </div>
          </div>

          {/* Quick FAQ Card */}
          <div className="bg-emerald-50/60 p-6 rounded-3xl border border-emerald-100 space-y-3">
            <h4 className="font-serif font-bold text-sm text-emerald-950 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-emerald-800" />
              <span>Informasi Pemesanan & Kerjasama</span>
            </h4>
            <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
              <p><strong>Bagaimana cara membeli buku fisik?</strong> Anda dapat mengisi formulir di samping atau langsung menghubungi WhatsApp resmi penerbit untuk pengiriman buku ke seluruh Indonesia.</p>
              <p><strong>Apakah melayani pengadaan buku pesantren & masjid?</strong> Ya, kami menyediakan paket khusus untuk perpustakaan pesantren, madrasah, dan majelis taklim dengan harga khusus dakwah.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl space-y-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-slate-900">
                Formulir Hubungi Kami
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kirimkan pesan, pertanyaan, atau permohonan pemesanan buku melalui formulir di bawah ini.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-xl text-emerald-950">
                  Pesan Berhasil Dikirim!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih, <strong>{formData.name}</strong>. Pesan Anda telah diterima oleh tim Darul Inayah Publishing. Kami akan segera menghubungi Anda melalui email <strong>{formData.email}</strong> atau WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      institution: '',
                      email: '',
                      phone: '',
                      category: 'pemesanan-buku',
                      subject: '',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-[#0f3f22] text-white text-xs font-semibold rounded-xl hover:bg-[#15803d] transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Institusi / Pesantren / Lembaga (Opsional)
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Pesantren / Majelis / Instansi..."
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0812-XXXX-XXXX"
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kategori Keperluan
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none text-slate-700 bg-white"
                  >
                    <option value="pemesanan-buku">Pemesanan Buku "Mengapa Ragu Dengan Syariat Allah ?"</option>
                    <option value="wakaf-pesantren">Pengadaan Buku Pesantren & Perpustakaan</option>
                    <option value="konsultasi-penerbitan">Konsultasi Penerbitan Naskah Buku Islami</option>
                    <option value="pertanyaan-umum">Pertanyaan Umum & Kerjasama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subjek / Judul Pesan *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Pemesanan Buku Cetak untuk Perpustakaan"
                    className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Isi Pesan / Pertanyaan
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan rincian pesan, pertanyaan, atau alamat pengiriman Anda di sini..."
                    className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:border-emerald-700 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0f3f22] hover:bg-[#15803d] text-white text-xs font-semibold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4 text-gold-300" />
                    <span>Kirim Pesan ke Darul Inayah</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
