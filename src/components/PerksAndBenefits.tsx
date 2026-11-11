"use client";

export default function PerksAndBenefits() {
  const perks = [
    {
      title: "Tunjangan Belajar & Sertifikasi",
      desc: "Alokasi budget tahunan untuk buku, kursus online, sertifikasi industri, atau konferensi teknologi.",
      tag: "Pengembangan Diri",
    },
    {
      title: "Fleksibilitas Kerja & WFH",
      desc: "Pengaturan kerja hybrid dan remote-friendly dengan jam kerja berorientasi pada hasil dan dampak nyata.",
      tag: "Work-Life Harmony",
    },
    {
      title: "Asuransi Kesehatan Lengkap",
      desc: "Proteksi rawat jalan, rawat inap, dan kacamata untuk karyawan serta tanggungan keluarga.",
      tag: "Kesehatan",
    },
    {
      title: "Perangkat Kerja Terbaru",
      desc: "Laptop performa tinggi dan tunjangan workstation untuk menunjang produktivitas harian Anda.",
      tag: "Perangkat",
    },
    {
      title: "Cuti Fleksibel & Mental Wellness",
      desc: "Hak cuti tahunan, cuti melahirkan/paternitas, serta sesi konseling gratis untuk kesehatan mental tim.",
      tag: "Kesejahteraan",
    },
    {
      title: "Jenjang Karier & Review Berkala",
      desc: "Jalur karier transparan dengan evaluasi performa per semester untuk promosi dan penyesuaian kompensasi.",
      tag: "Pertumbuhan",
    },
  ];

  return (
    <section className="mt-20 sm:mt-28 pt-6">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[#075CF0] font-semibold text-sm uppercase tracking-wider bg-[#E9EFF8] px-3.5 py-1.5 rounded-full inline-block mb-3">
          Benefit & Fasilitas
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#001133] tracking-tight leading-tight">
          Kami Peduli pada Pertumbuhan dan Kesejahteraan Anda
        </h2>
        <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
          Kompensasi kompetitif dan paket benefit komprehensif yang dirancang untuk
          mendukung kehidupan profesional dan personal Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {perks.map((perk, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#075CF0]/40 transition-all hover:shadow-md"
          >
            <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full inline-block mb-4">
              {perk.tag}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#001133] mb-2 leading-snug">
              {perk.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {perk.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

