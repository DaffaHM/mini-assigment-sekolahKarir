"use client";

import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { TextAnimate } from "@/registry/magicui/text-animate";

interface HeroBannerProps {
  onPositionsClick?: () => void;
  onTeamClick?: () => void;
}

export default function HeroBanner({
  onPositionsClick,
  onTeamClick,
}: HeroBannerProps) {
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string,
    callback?: () => void
  ) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (callback) {
      callback();
    }
  };

  return (
    <section
      aria-label="Hero Banner Rekrutmen Sekolah Karir"
      className="relative w-full bg-[#075CF0] rounded-b-[36px] sm:rounded-b-[40px] rounded-tr-[36px] sm:rounded-tr-[40px] rounded-tl-none -mt-px overflow-hidden h-auto lg:h-[440px] xl:h-[450px]"
    >
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between">
        {/* ====================================================================
            LEFT SIDE (Content group)
            - Mobile: Compact vertical spacing (reduced bottom gap to image)
            - Desktop: Vertically centered (approx 42–44% width)
            ==================================================================== */}
        <div className="w-full lg:w-[44%] xl:w-[42%] flex flex-col justify-center h-auto lg:h-full px-5 sm:px-8 lg:pl-12 xl:pl-16 lg:pr-4 pt-6 sm:pt-8 lg:pt-0 pb-1 sm:pb-2 lg:pb-0 shrink-0 z-10">
          {/* Main Headline */}
          <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.14] sm:leading-[1.1]">
            <TextAnimate animation="blurInUp" by="character" once>
              Bangun masa depan karier bersama kami.
            </TextAnimate>
          </h1>

          {/* Supporting Description */}
          <p className="mt-3 sm:mt-4 text-blue-100/90 text-sm sm:text-base lg:text-[18px] xl:text-[19px] font-normal leading-relaxed max-w-md xl:max-w-lg">
            Bantu lebih banyak talenta menghubungkan potensi, keterampilan, dan
            peluang di dunia kerja.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 sm:mt-5 lg:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {/* Primary CTA: Lihat Posisi Terbuka */}
            <a
              href="#posisi-terbuka"
              onClick={(e) =>
                handleScrollTo(e, "#posisi-terbuka", onPositionsClick)
              }
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#075CF0] hover:bg-blue-50 font-bold text-xs sm:text-sm lg:text-base px-5 sm:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <span>Lihat Posisi Terbuka</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Secondary CTA: Kenali Tim Kami */}
            <a
              href="#tim-kami"
              onClick={(e) => handleScrollTo(e, "#tim-kami", onTeamClick)}
              className="group inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm lg:text-base px-4.5 sm:px-5.5 py-2.5 sm:py-3 lg:py-3.5 rounded-full border border-white/85 hover:border-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <span className="flex items-center justify-center w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border border-white/90 group-hover:border-white">
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 ml-0.5 fill-white text-white" />
              </span>
              <span>Kenali Tim Kami</span>
            </a>
          </div>
        </div>

        {/* ====================================================================
            RIGHT SIDE (Hero image)
            - Mobile: Increased by ~5-10%, centered, aligned close to bottom,
              with reduced gap between CTA and image
            - Desktop: Occupies ~56–58% of banner width, bottom-aligned
            ==================================================================== */}
        <div className="w-full lg:w-[56%] xl:w-[58%] flex justify-center lg:justify-end items-end h-auto lg:h-full self-end px-3 sm:px-4 lg:px-0 lg:pr-2 xl:pr-4 pt-2 sm:pt-3 lg:pt-0 pb-0">
          <div className="relative w-full flex justify-center lg:justify-end items-end h-auto lg:h-full">
            <Image
              src="/hero.png"
              alt="Tim Sekolah Karir dan Maskot"
              width={1659}
              height={948}
              priority
              className="w-auto max-w-[96%] sm:max-w-[92%] lg:max-w-full h-auto max-h-[290px] sm:max-h-[350px] lg:max-h-[425px] xl:max-h-[440px] object-contain object-bottom pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
