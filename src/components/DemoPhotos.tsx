"use client"

import PolaroidLineCarousel, { Slide } from "@/components/ui/polaroid-line-carousel"
import { TextAnimate } from "@/registry/magicui/text-animate"

const TEAM_SLIDES: Slide[] = [
  {
    image: "/Product & Technology.png",
    title: "Product & Technology",
  },
  {
    image: "/Marketing & Media.png",
    title: "Marketing & Media",
  },
  {
    image: "/AI & Automation.png",
    title: "AI & Automation",
  },
  {
    image: "/People & Learning.png",
    title: "People & Learning",
  },
  {
    image: "/Operations.png",
    title: "Operations",
  },
];

export default function DemoPhotos() {
  return (
    <section
      id="tim-kami"
      aria-label="Meet Our Teams"
      className="w-full pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-10 lg:pb-12 overflow-hidden bg-[#F2EEE7] scroll-mt-16"
    >
      {/* ====================================================================
          1. SECTION HEADING
          - Heading: Meet Our Teams
          - Deskripsi: Plus Jakarta Sans, abu-abu gelap, rata tengah
          ==================================================================== */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-bold md:font-extrabold text-[#0F2B5B] tracking-tight leading-snug">
          <TextAnimate animation="blurInUp" by="character" once>
            Meet Our Teams
          </TextAnimate>
        </h2>
        <p className="mt-2.5 sm:mt-3 text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-2xl mx-auto">
          Kenali berbagai divisi di Sekolah Karir, temukan ruang untuk berkolaborasi, mengembangkan kemampuan, dan tumbuh bersama tim.
        </p>
      </div>

      {/* ====================================================================
          2. POLAROID LINE CAROUSEL GALLERY
          - Menampilkan 5 kartu divisi dengan foto aset lokal di folder public
          - Typography Plus Jakarta Sans, label navy #0F2B5B
          ==================================================================== */}
      <PolaroidLineCarousel
        height="clamp(490px, 56vh, 540px)"
        cardWidth={298}
        background="#F2EEE7"
        ink="#0F2B5B"
        string="#075CF0"
        slides={TEAM_SLIDES}
      />
    </section>
  )
}
