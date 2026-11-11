"use client";

import { ArrowRight } from "lucide-react";

export default function HiringRoadmap() {
  const steps = [
    {
      step: "01",
      title: "Kirim Berkas Lamaran",
      desc: "Pilih posisi yang sesuai dan submit resume, portofolio, serta informasi kontak Anda secara online.",
      badge: "Tahap Awal",
    },
    {
      step: "02",
      title: "Initial Screening & Chat",
      desc: "Sesi perkenalan santai selama 20–30 menit bersama tim People untuk saling mengenal aspirasi dan kultur kerja.",
      badge: "1-2 Hari",
    },
    {
      step: "03",
      title: "Studi Kasus / Skill Test",
      desc: "Tugas praktis berbasis skenario nyata di Sekolah Karir untuk melihat cara berpikir dan problem-solving Anda.",
      badge: "3-5 Hari",
    },
    {
      step: "04",
      title: "User & Leader Interview",
      desc: "Diskusi mendalam dengan calon rekan setim dan team lead untuk membahas hasil studi kasus dan ekspektasi peran.",
      badge: "45-60 Menit",
    },
    {
      step: "05",
      title: "Offering & Onboarding",
      desc: "Pemberian penawaran resmi, negosiasi kompensasi, dan sambutan hangat untuk memulai petualangan baru bersama kami.",
      badge: "Final Step",
    },
  ];

  return (
    <section id="program" className="mt-20 sm:mt-28 pt-6 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-[#075CF0] font-semibold text-sm uppercase tracking-wider bg-[#E9EFF8] px-3.5 py-1.5 rounded-full inline-block mb-3">
          Alur Rekrutmen
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#001133] tracking-tight leading-tight">
          Proses Seleksi yang Transparan dan Cepat
        </h2>
        <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
          Kami menghargai waktu dan energi Anda. Setiap tahapan dirancang untuk
          memberikan pengalaman rekrutmen yang jelas, kolaboratif, dan saling membangun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-[#075CF0]/30 group-hover:text-[#075CF0] transition-colors">
                  {item.step}
                </span>
                <span className="text-[11px] font-semibold bg-[#E9EFF8] text-[#075CF0] px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#001133] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Langkah {idx + 1} dari 5</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#075CF0] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
