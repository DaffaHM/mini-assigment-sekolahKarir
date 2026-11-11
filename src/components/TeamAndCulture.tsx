"use client";

import { Zap, ShieldCheck, GraduationCap, Users, Quote } from "lucide-react";

export default function TeamAndCulture() {
  const values = [
    {
      title: "Dampak Nyata",
      description:
        "Setiap program dan teknologi yang kita bangun berorientasi langsung pada percepatan penyerapan kerja talenta Indonesia.",
      icon: <Zap className="w-6 h-6 text-[#075CF0]" />,
    },
    {
      title: "Otonomi & Kepemilikan",
      description:
        "Kami percaya pada inisiatif mandiri. Anda memiliki kebebasan penuh untuk mengeksekusi ide terbaik demi kemajuan bersama.",
      icon: <ShieldCheck className="w-6 h-6 text-[#075CF0]" />,
    },
    {
      title: "Budaya Belajar Berkelanjutan",
      description:
        "Sebagai institusi edukasi, kami mendukung penuh pengembangan skill tim melalui budget pelatihan dan sesi mentoring rutin.",
      icon: <GraduationCap className="w-6 h-6 text-[#075CF0]" />,
    },
    {
      title: "Inklusivitas & Empati",
      description:
        "Lingkungan kerja yang ramah, saling mendukung, dan menghargai keragaman latar belakang setiap individu.",
      icon: <Users className="w-6 h-6 text-[#075CF0]" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Bekerja di Sekolah Karir memberikan ruang eksplorasi tanpa batas. Melihat siswa yang awalnya bingung arah karier akhirnya diterima di top tech companies adalah kepuasan terbesar saya.",
      name: "Rizky Firmansyah",
      role: "Lead Instructional Designer",
      tenure: "2 tahun di Sekolah Karir",
    },
    {
      quote:
        "Budaya kerjanya sangat kolaboratif dan transparan. Tidak ada hierarki kaku; semua orang mendengarkan ide segar dan berfokus pada solusi terbaik bagi pengguna.",
      name: "Sabrina Putri",
      role: "Senior Product Manager",
      tenure: "1.5 tahun di Sekolah Karir",
    },
    {
      quote:
        "Fleksibilitas kerja dan dukungan tunjangan belajar membuat saya bisa terus berkembang secara profesional sambil tetap menjaga work-life harmony yang sehat.",
      name: "Dimas Anggara",
      role: "Career Coach Lead",
      tenure: "3 tahun di Sekolah Karir",
    },
  ];

  return (
    <section id="tim-kami" className="mt-20 sm:mt-28 pt-6 scroll-mt-20">
      {/* Main Culture Banner (Deep Navy #001133) */}
      <div className="bg-[#001133] text-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Ambient Glow Effects */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl">
          <span className="text-[#075CF0] bg-blue-950/90 border border-blue-800/40 font-semibold text-xs uppercase px-3.5 py-1.5 rounded-full tracking-wider inline-block">
            Kultur & Nilai Tim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold mt-4 tracking-tight leading-tight">
            Tumbuh Bersama Tim yang Berdedikasi dan Berdampak.
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg lg:text-[19px] leading-relaxed">
            Kami membangun tempat kerja di mana inovasi, keterbukaan ide, dan empati
            bertemu untuk menghadirkan lompatan karier bagi talenta Indonesia.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-10 border-t border-slate-800">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-blue-600/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stories / Testimonials from the Team */}
      <div className="mt-14 sm:mt-18">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[#075CF0] font-semibold text-sm uppercase tracking-wider bg-[#E9EFF8] px-3.5 py-1.5 rounded-full inline-block mb-2">
            Cerita Tim Kami
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001133] tracking-tight">
            Bagaimana Rasanya Bekerja di Sekolah Karir?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
                <p className="text-slate-700 text-[15px] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E9EFF8] text-[#075CF0] font-bold text-sm flex items-center justify-center">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#001133]">{item.name}</h4>
                  <p className="text-xs text-slate-500">
                    {item.role} • {item.tenure}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
