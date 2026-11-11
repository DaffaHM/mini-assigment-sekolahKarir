"use client";

import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import OpenPositions from "@/components/OpenPositions";
import WhyJoin from "@/components/WhyJoin";
import DemoPhotos from "@/components/DemoPhotos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2EEE7] selection:bg-[#075CF0] selection:text-white">
      {/* 
        ========================================================================
        1. NAVBAR COMPONENT
        Placed at the root page level so its sticky context spans the entire
        page from Hero, past OpenPositions (Section 3), WhyJoin, to DemoPhotos.
        ========================================================================
      */}
      <Navbar />

      {/* 
        ========================================================================
        UPPER CONTAINER:
        2. HERO BANNER
        3. OPEN POSITIONS SECTION (EXPLORE OPEN POSITIONS)
        ========================================================================
      */}
      <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-6">
        {/* 2. HERO BANNER COMPONENT */}
        <HeroBanner />

        {/* 3. OPEN POSITIONS (JOBS) SECTION */}
        <OpenPositions />
      </div>

      {/* 
        ========================================================================
        4. WHY JOIN SEKOLAH KARIR SECTION (FULL WIDTH NAVY)
        ========================================================================
      */}
      <WhyJoin />

      {/* 
        ========================================================================
        5. POLAROID LINE CAROUSEL PHOTO SECTION
        ========================================================================
      */}
      <DemoPhotos />

      {/* 
        ========================================================================
        6. HALFTONE WORDMARK FOOTER (DARK NAVY #0F2B5B)
        ========================================================================
      */}
      <Footer />
    </div>
  );
}
