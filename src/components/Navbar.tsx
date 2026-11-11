"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onNavClick?: (href: string) => void;
}

const NAV_LINKS = [
  { label: "Beranda", href: "#" },
  { label: "Karier", href: "#posisi-terbuka" },
  { label: "Why Join Us", href: "#why-join" },
  { label: "Our Teams", href: "#tim-kami" },
] as const;

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("Beranda");

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // 1. Top of page -> Beranda
      if (scrollY < 220) {
        setActiveLink("Beranda");
        ticking = false;
        return;
      }

      // 2. Check if at the bottom of the page -> Our Teams
      const isBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 70;
      if (isBottom) {
        setActiveLink("Our Teams");
        ticking = false;
        return;
      }

      // 3. ScrollSpy: Check section offsets relative to viewport
      const teamEl = document.getElementById("tim-kami");
      const whyJoinEl = document.getElementById("why-join");
      const jobsEl = document.getElementById("posisi-terbuka");

      const threshold = window.innerHeight * 0.42;

      if (teamEl) {
        const rect = teamEl.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > 80) {
          setActiveLink("Our Teams");
          ticking = false;
          return;
        }
      }

      if (whyJoinEl) {
        const rect = whyJoinEl.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > 80) {
          setActiveLink("Why Join Us");
          ticking = false;
          return;
        }
      }

      if (jobsEl) {
        const rect = jobsEl.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > 80) {
          setActiveLink("Karier");
          ticking = false;
          return;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling and enable Escape key to close mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label?: string
  ) => {
    if (label) setActiveLink(label);
    setMobileMenuOpen(false);
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
    if (onNavClick) {
      onNavClick(href);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] select-none w-full bg-[#F5F1E9] pt-2 sm:pt-2.5 lg:pt-3 ${
          isScrolled ? "shadow-xs" : ""
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-6">
          <div className="flex items-center justify-between h-[68px] sm:h-[72px] w-full">
          {/* Logo Container / Tab */}
          <div
            className={`h-full flex items-center pl-5 sm:pl-8 pr-5 sm:pr-8 relative ${
              isScrolled
                ? "bg-transparent rounded-none"
                : "bg-[#075CF0] rounded-tl-[32px] sm:rounded-tl-[40px] rounded-tr-[22px] sm:rounded-tr-[28px]"
            }`}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Sekolah Karir"
                width={170}
                height={55}
                priority
                className={`w-[145px] sm:w-[160px] lg:w-[168px] h-auto object-contain -translate-x-[6px] sm:translate-x-0 ${
                  isScrolled ? "hidden" : "block"
                }`}
              />
              <Image
                src="/logo1.png"
                alt="Sekolah Karir"
                width={170}
                height={55}
                priority
                className={`w-[145px] sm:w-[160px] lg:w-[168px] h-auto object-contain -translate-x-[6px] sm:translate-x-0 ${
                  isScrolled ? "block" : "hidden"
                }`}
              />
            </Link>

            {/* Asymmetric Concave Fillet Curve (Geometric tab connector for both mobile and desktop) */}
            {!isScrolled && (
              <div
                className="absolute -right-6 sm:-right-7 bottom-0 w-6 h-6 sm:w-7 sm:h-7 pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 28 28"
                  className="w-full h-full fill-[#075CF0]"
                  preserveAspectRatio="none"
                >
                  <path d="M 0 0 A 28 28 0 0 0 28 28 L 0 28 Z" />
                </svg>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
                className={`text-[14px] xl:text-[15px] transition-colors ${
                  activeLink === link.label
                    ? "bg-[#E9EFF8] text-[#075CF0] font-semibold px-3.5 xl:px-4 py-1.5 rounded-full"
                    : "text-[#001133] hover:text-[#075CF0] font-medium px-3 xl:px-3.5 py-1.5 rounded-full"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button with Lucide ArrowUpRight */}
          <div className="hidden lg:flex items-center">
            <a
              href="#daftar"
              onClick={(e) => handleLinkClick(e, "#daftar")}
              className="group inline-flex items-center gap-1.5 bg-[#075CF0] hover:bg-blue-600 text-white font-semibold text-[15px] px-5.5 py-2.5 rounded-full shadow-xs active:scale-[0.98]"
            >
              <span>Daftar Sekarang</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle with Lucide Menu & X */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#001133] hover:text-[#075CF0] focus:outline-hidden transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>

      {/* ====================================================================
          FULL-SCREEN MOBILE NAVIGATION OVERLAY
          - Background cream #F5F1E9
          - Smooth entrance & staggered items animation
          - Logo SekolahKarir & Close (X) button at the top
          - Large typography vertical navigation list (#0F2B5B, hover #0B5ED7)
          - Bottom CTA: "Lihat Posisi Terbuka" (#0B5ED7 with white text)
          - Closes on menu click, close button, or Escape key
          - Scroll-locked background
          ==================================================================== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[200] lg:hidden bg-[#F5F1E9] flex flex-col justify-between overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 animate-menu-enter"
          style={{
            paddingTop: "max(1.25rem, env(safe-area-inset-top))",
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
        >
          <style>{`
            @keyframes mobileMenuEnter {
              0% { opacity: 0; transform: translateY(-12px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes mobileItemReveal {
              0% { opacity: 0; transform: translateY(22px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-menu-enter {
              animation: mobileMenuEnter 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .animate-item-reveal {
              animation: mobileItemReveal 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;
            }
          `}</style>

          {/* Top Bar: Logo & Close Button */}
          <div className="flex items-center justify-between w-full pb-4 border-b border-[#0F2B5B]/10 shrink-0">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "#", "Beranda")}
              className="inline-flex items-center"
            >
              <Image
                src="/logo1.png"
                alt="Sekolah Karir"
                width={160}
                height={52}
                priority
                className="w-[145px] sm:w-[155px] h-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#0F2B5B] hover:text-[#0B5ED7] hover:bg-[#0B5ED7]/10 active:scale-95 transition-all focus:outline-hidden"
              aria-label="Tutup menu navigasi"
            >
              <X className="w-6 h-6 stroke-[2.2]" />
            </button>
          </div>

          {/* Navigation Links: Vertical list with staggered reveal animation */}
          <nav className="my-auto py-8 sm:py-10 flex flex-col gap-6 sm:gap-7">
            {NAV_LINKS.map((link, idx) => {
              const isSelected = activeLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.label)}
                  style={{ animationDelay: `${idx * 55 + 70}ms` }}
                  className={`animate-item-reveal group flex items-center justify-between py-1 transition-colors ${
                    isSelected
                      ? "text-[#0B5ED7]"
                      : "text-[#0F2B5B] hover:text-[#0B5ED7] focus:text-[#0B5ED7] active:text-[#0B5ED7]"
                  }`}
                >
                  <span className="text-[26px] xs:text-[30px] font-bold tracking-tight group-hover:translate-x-1.5 transition-transform duration-150 flex items-center gap-3">
                    <span>{link.label}</span>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0B5ED7] inline-block shrink-0" />
                    )}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isSelected
                        ? "text-[#0B5ED7]"
                        : "text-[#0F2B5B]/30 group-hover:text-[#0B5ED7]"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Bottom CTA: "Lihat Posisi Terbuka" */}
          <div
            style={{ animationDelay: `${NAV_LINKS.length * 55 + 90}ms` }}
            className="animate-item-reveal pt-4 border-t border-[#0F2B5B]/10 shrink-0"
          >
            <a
              href="#posisi-terbuka"
              onClick={(e) => handleLinkClick(e, "#posisi-terbuka", "Karier")}
              className="w-full flex items-center justify-center gap-2 bg-[#0B5ED7] hover:bg-blue-600 active:scale-[0.98] text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 px-6 rounded-full shadow-md transition-all text-center"
            >
              <span>Lihat Posisi Terbuka</span>
              <ArrowUpRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
