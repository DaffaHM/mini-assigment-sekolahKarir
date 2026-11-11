"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ChevronDown } from "lucide-react";

export default function FaqAndFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Berapa lama rata-rata proses rekrutmen di Sekolah Karir?",
      a: "Rata-rata proses seleksi memakan waktu antara 10 hingga 14 hari kerja sejak berkas lamaran diterima hingga tahap offering. Kami selalu berupaya memberikan update status di setiap tahapan.",
    },
    {
      q: "Apakah Sekolah Karir membuka lowongan untuk Fresh Graduate atau Magang?",
      a: "Ya! Kami secara berkala membuka program internship dan posisi entry-level untuk berbagai divisi seperti Education, Marketing, dan Product. Cek filter departemen di section Posisi Terbuka untuk melihat peran yang tersedia.",
    },
    {
      q: "Bagaimana sistem kerja di Sekolah Karir (Remote / Hybrid / WFO)?",
      a: "Kami menerapkan sistem kerja hybrid yang fleksibel untuk posisi operasional di Jakarta (2-3 hari di kantor per minggu), serta sistem full-remote untuk beberapa posisi spesifik seperti Product Designer dan Software Engineer.",
    },
    {
      q: "Bagaimana jika posisi yang saya minati saat ini belum tersedia?",
      a: "Anda dapat mengirimkan resume dan portofolio Anda ke talent@sekolahkarir.com dengan subjek [Talent Pool - Bidang Minat Anda]. Tim People kami akan menghubungi Anda saat posisi yang relevan dibuka.",
    },
    {
      q: "Apa yang paling dinilai dalam proses seleksi di Sekolah Karir?",
      a: "Selain keahlian teknis (hard skills), kami sangat mengutamakan kemampuan komunikasi, inisiatif problem-solving, empati terhadap pengguna, dan keselarasan visi dengan misi edukasi Sekolah Karir.",
    },
  ];

  return (
    <>
      {/* ====================================================================
          FAQ SECTION
          ==================================================================== */}
      <section id="kontak" className="mt-20 sm:mt-28 pt-6 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Contact info */}
          <div className="lg:col-span-5">
            <span className="text-[#075CF0] font-semibold text-sm uppercase tracking-wider bg-[#E9EFF8] px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ & Bantuan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001133] tracking-tight leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
              Masih memiliki pertanyaan seputar alur rekrutmen atau kultur kerja di
              Sekolah Karir? Hubungi tim People kami langsung.
            </p>

            <div className="mt-8 p-6 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9EFF8] text-[#075CF0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Email Tim People</p>
                  <p className="text-sm font-bold text-[#001133]">careers@sekolahkarir.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9EFF8] text-[#075CF0] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Kantor Pusat</p>
                  <p className="text-sm font-bold text-[#001133]">Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#001133] hover:text-[#075CF0] transition-colors"
                  >
                    <span className="text-base sm:text-lg leading-snug">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-[#075CF0]">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOOTER SECTION
          ==================================================================== */}
      <footer className="mt-24 sm:mt-32 pt-12 border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo1.png"
                alt="Sekolah Karir"
                width={160}
                height={50}
                className="w-[150px] h-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm mt-3 max-w-sm leading-relaxed">
              Platform akselerasi karier terdepan yang menghubungkan potensi,
              keterampilan, dan peluang di dunia kerja.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#001133]">
            <a href="#tentang-kami" className="hover:text-[#075CF0] transition-colors">
              Tentang Kami
            </a>
            <a href="#tim-kami" className="hover:text-[#075CF0] transition-colors">
              Tim & Kultur
            </a>
            <a href="#posisi-terbuka" className="hover:text-[#075CF0] transition-colors">
              Karier
            </a>
            <a href="#program" className="hover:text-[#075CF0] transition-colors">
              Alur Rekrutmen
            </a>
            <a href="#kontak" className="hover:text-[#075CF0] transition-colors">
              Kontak
            </a>
          </div>
        </div>

        <div className="py-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Sekolah Karir. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Syarat & Ketentuan</span>
          </div>
        </div>
      </footer>
    </>
  );
}
