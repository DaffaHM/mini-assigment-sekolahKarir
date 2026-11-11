"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "Open Positions", href: "#posisi-terbuka" },
  { label: "Why Join Us", href: "#why-join" },
  { label: "Our Teams", href: "#tim-kami" },
] as const;

export default function Footer() {

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="w-full bg-[#0F2B5B]">
      {/* ====================================================================
          1. MAIN FOOTER (INFORMASI FOOTER)
          - Background Dark Navy #0F2B5B
          - 3 Kolom: Brand, Quick Links, Kontak & Media Sosial
          - Tipografi Plus Jakarta Sans, link hover #8ABEFF
          ==================================================================== */}
      <footer className="w-full bg-[#0F2B5B] text-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-16 sm:pt-20 lg:pt-24 pb-1 sm:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Kolom A: Brand (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Link
                href="/"
                onClick={(e) => handleLinkClick(e, "#")}
                className="inline-block transition-opacity hover:opacity-90"
              >
                <Image
                  src="/logo.png"
                  alt="Sekolah Karir"
                  width={170}
                  height={55}
                  className="w-[155px] sm:w-[170px] h-auto object-contain"
                />
              </Link>
              <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed font-normal max-w-sm">
                Membangun pengalaman, mengembangkan potensi, dan mempersiapkan
                generasi siap karier.
              </p>
            </div>

            {/* Kolom B: Quick Links (3 cols) */}
            <div className="lg:col-span-3 flex flex-col">
              <h3 className="text-white font-bold text-base sm:text-lg tracking-tight mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2.5">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="inline-flex items-center gap-1 text-white/75 hover:text-[#8ABEFF] text-sm sm:text-[15px] font-medium transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom C: Contact & Social Media (4 cols) */}
            <div className="lg:col-span-4 flex flex-col">
              <h3 className="text-white font-bold text-base sm:text-lg tracking-tight mb-4">
                Kontak & Media Sosial
              </h3>
              <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed mb-4">
                Terhubung dengan kami untuk mendapatkan informasi program, insight
                karier, dan peluang kolaborasi terbaru.
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Sekolah Karir"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#8ABEFF] bg-white/5 hover:bg-[#8ABEFF]/15 text-white/80 hover:text-[#8ABEFF] flex items-center justify-center transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Sekolah Karir"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#8ABEFF] bg-white/5 hover:bg-[#8ABEFF]/15 text-white/80 hover:text-[#8ABEFF] flex items-center justify-center transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* Website */}
                <a
                  href="#"
                  onClick={(e) => handleLinkClick(e, "#")}
                  aria-label="Website Sekolah Karir"
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-[#8ABEFF] bg-white/5 hover:bg-[#8ABEFF]/15 text-white/80 hover:text-[#8ABEFF] flex items-center justify-center transition-all duration-200"
                >
                  <Globe className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Garis Pemisah Tipis Sebelum Halftone Wordmark */}
          <div className="w-full border-t border-white/10 mt-8 sm:mt-16" />
        </div>
      </footer>

      {/* ====================================================================
          2. HALFTONE WORDMARK (DI BAWAH FOOTER)
          - Background Dark Navy #0F2B5B
          - Titik Halftone Putih #FFFFFF
          - Wordmark "SekolahKarir" di tengah horizontal & vertikal secara utuh
          ==================================================================== */}
      <div className="w-full bg-[#0F2B5B]">
        <HalftoneWordmarkFooter
          wordmark="SekolahKarir"
          label=""
          meta=""
          columns={[]}
          backToTop={false}
          height="var(--hwf-height, clamp(240px, 34vh, 380px))"
          dotGap={6}
          radius={85}
          grain={0}
          interactive={true}
          fontFamily='"Plus Jakarta Sans", "Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
          fontWeight={800}
          palette={{
            background: "#0F2B5B",
            ink: "#FFFFFF",
            warm: "#8ABEFF",
          }}
          className="w-full bg-[#0F2B5B] [--hwf-height:120px] sm:[--hwf-height:clamp(240px,34vh,380px)]"
        />
      </div>

      {/* ====================================================================
          3. COPYRIGHT & BACK TO TOP
          - Posisi paling bawah di latar belakang navy #0F2B5B
          ==================================================================== */}
      <div className="w-full bg-[#0F2B5B] px-4 sm:px-6 lg:px-8 xl:px-10 pb-6 sm:pb-8 pt-0 sm:pt-2">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-[13px] text-white/50 border-t border-white/[0.08] pt-4">
          <p>© 2026 Sekolah Karir. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 uppercase tracking-wider text-[11px] font-medium"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </div>
  );
}
