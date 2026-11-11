"use client";

import Image from "next/image";

interface BenefitCard {
  title: string;
  description: string;
  image: string;
}

const BENEFIT_CARDS: BenefitCard[] = [
  {
    title: "Learn & Grow",
    description: "Kembangkan skill melalui pembelajaran dan praktik langsung.",
    image: "/card11.png",
  },
  {
    title: "Real Experience",
    description: "Terlibat dalam proyek nyata sesuai bidang minatmu.",
    image: "/card22.png",
  },
  {
    title: "Collaborative Environment",
    description: "Berkolaborasi, berbagi ide, dan berkembang bersama tim.",
    image: "/card33.png",
  },
];

export default function WhyJoin() {

  return (
    <section
      id="why-join"
      aria-label="Why Join Sekolah Karir"
      className="w-full bg-[#0F2B5B] pt-11 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 mt-10 sm:mt-14 lg:mt-20 scroll-mt-20 overflow-hidden"
    >
      {/* Container Section - Diselaraskan dengan Max Width 1440px */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ====================================================================
            1. HEADING & DESKRIPSI SECTION
            ==================================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6 md:mb-10 lg:mb-12">
          {/* Heading */}
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[46px] 2xl:text-[48px] font-bold text-white tracking-tight leading-[1.25] text-center max-w-[320px] xs:max-w-[340px] sm:max-w-md md:max-w-none mx-auto whitespace-normal lg:whitespace-nowrap">
            Tumbuh Bersama Sekolah Karir.
          </h2>

          {/* Deskripsi */}
          <p className="mt-3 md:mt-2.5 lg:mt-3 text-[13.5px] xs:text-[14px] md:text-base lg:text-[17px] xl:text-[18px] leading-[1.6] text-white/90 text-center max-w-[310px] xs:max-w-[350px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-normal">
            Asah keterampilan, dapatkan pengalaman, dan berkembang bersama.
          </p>
        </div>

        {/* ====================================================================
            2. BENEFIT CARDS (CSS GRID 3 KOLOM, GAP TEPAT 24PX, LEBAR PENUH)
            - Desktop: CSS Grid repeat(3, minmax(0, 1fr)) dengan gap: 24px
            - Ketiga kartu memiliki lebar dan tinggi yang seragam & mengisi ruang
            - Mobile: Tetap horizontal slider snap-start
            ==================================================================== */}
        <div className="flex lg:grid gap-3.5 sm:gap-4 lg:gap-[24px] lg:[grid-template-columns:repeat(3,minmax(0,1fr))] overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          {BENEFIT_CARDS.map((card, index) => (
            <div
              key={index}
              className="relative w-[84vw] max-w-[335px] sm:w-[380px] lg:w-full lg:max-w-none shrink-0 lg:shrink snap-start rounded-[20px] sm:rounded-[26px] lg:rounded-[28px] overflow-hidden shadow-xl h-[230px] xs:h-[245px] sm:h-[280px] md:h-[380px] lg:h-[405px] xl:h-[430px] group select-none bg-[#0B2550]"
            >
              {/* Full Background Image - Landscape */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                sizes="(max-width: 1023px) 84vw, 33vw"
                priority
              />

              {/* Gradient Navy Transparan di Bagian Bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081730]/95 via-[#0F2B5B]/50 via-40% to-transparent pointer-events-none" />

              {/* Teks Overlay (Judul & Deskripsi di Bagian Bawah Kiri) */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 xs:p-5 sm:p-6 lg:p-6 xl:p-8">
                <h3 className="text-[18px] xs:text-[19px] sm:text-[21px] md:text-[22px] lg:text-[22px] xl:text-[25px] font-bold text-white tracking-tight leading-snug truncate sm:truncate-none xl:whitespace-nowrap">
                  {card.title}
                </h3>
                <p className="mt-1 sm:mt-1.5 md:mt-2 text-[12px] xs:text-[12.5px] sm:text-[13.5px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-white/95 leading-relaxed font-normal max-w-sm sm:max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
