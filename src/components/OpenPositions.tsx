"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  MapPin,
  Monitor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { DUMMY_JOBS, DEPARTMENT_OPTIONS, JobPosition } from "@/data/jobs";
import { TextAnimate } from "@/registry/magicui/text-animate";

export default function OpenPositions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All Departments");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeJobModal, setActiveJobModal] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 5;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    if (!activeJobModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveJobModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeJobModal]);

  // Handle Search Input Change (Reset to page 1)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handle Department Change (Reset to page 1)
  const handleDeptSelect = (dept: string) => {
    setSelectedDept(dept);
    setDropdownOpen(false);
    setCurrentPage(1);
  };

  // Filter Jobs based on Search and Department
  const filteredJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return DUMMY_JOBS.filter((job) => {
      const matchesDept =
        selectedDept === "All Departments" || job.department === selectedDept;

      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query);

      return matchesDept && matchesSearch;
    });
  }, [searchQuery, selectedDept]);

  // Paginated Jobs (Max 5 per page)
  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / ITEMS_PER_PAGE));
  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setActiveJobModal(null);
    }, 2000);
  };

  // Generate pagination buttons for pages (pages 1 and 2 for 10 records)
  const paginationItems = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage, "...", totalPages];
  }, [totalPages, currentPage]);

  return (
    <section id="posisi-terbuka" className="mt-14 sm:mt-18 lg:mt-22 pt-4 scroll-mt-20">
      {/* Container aligned to 1280px max-width per specification */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ====================================================================
            1. SECTION HEADER
            Clean heading & description
            ==================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl xs:text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-bold text-[#001133] tracking-tight leading-snug">
            <TextAnimate animation="blurInUp" by="character" once>
              Explore Open Positions
            </TextAnimate>
          </h2>
          <p className="mt-2.5 sm:mt-3 text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed">
            Jelajahi berbagai peluang dan bergabung bersama tim Sekolah Karir.
          </p>
        </div>

        {/* ====================================================================
            2. SEARCH BAR & DEPARTMENT FILTER (5 DEPARTMENTS + ALL)
            Mobile: Stacked vertically, full width, 12px gap
            Desktop: Horizontal row, approx 72% / 28% width, 16px gap
            ==================================================================== */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-7">
          {/* Search Input */}
          <div className="relative w-full sm:w-[72%]">
            <span className="absolute inset-y-0 left-0 pl-4 xs:pl-5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 xs:w-5 xs:h-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Cari posisi..."
              className="w-full h-[48px] xs:h-[50px] sm:h-[54px] pl-11 xs:pl-12 pr-4 xs:pr-5 bg-white border border-slate-200/90 rounded-full text-sm sm:text-base text-[#001133] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#075CF0]/30 focus:border-[#075CF0] transition-all shadow-2xs"
            />
          </div>

          {/* Department Dropdown */}
          <div className="relative w-full sm:w-[28%] sm:min-w-[210px]" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full h-[48px] xs:h-[50px] sm:h-[54px] px-5 xs:px-6 bg-white border border-slate-200/90 rounded-full flex items-center justify-between gap-3 text-sm sm:text-base text-[#001133] font-medium hover:border-slate-300 transition-colors shadow-2xs text-left"
            >
              <span className="truncate">
                {selectedDept === "All Departments" ? "Departemen" : selectedDept}
              </span>
              <ChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl z-30 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                {DEPARTMENT_OPTIONS.map((dept) => (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => handleDeptSelect(dept)}
                    className={`w-full px-5 py-2.5 text-left text-sm sm:text-[15px] transition-colors flex items-center justify-between ${
                      selectedDept === dept
                        ? "bg-[#E9EFF8] text-[#075CF0] font-semibold"
                        : "text-[#001133] hover:bg-slate-50"
                    }`}
                  >
                    <span>{dept}</span>
                    {selectedDept === dept && (
                      <span className="w-2 h-2 rounded-full bg-[#075CF0]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ====================================================================
            3. JOB LISTING CARDS (THREE VERTICALLY STACKED ROWS)
            ROW 1: Job title (left) + Arrow icon (right)
            ROW 2: MapPin icon + Location
            ROW 3: Monitor icon + Department
            Mobile: 16–18px padding, 14–16px gap, full title visible (no truncate)
            Desktop: Exact dimensions preserved (px-8 py-5 lg:px-9 lg:py-5)
            ==================================================================== */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-3.5 sm:space-y-4">
            {paginatedJobs.map((job) => (
              <div
                key={job.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveJobModal(job)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveJobModal(job);
                  }
                }}
                aria-label={`Lihat detail posisi ${job.title}`}
                style={{
                  boxShadow: "0 4px 12px rgba(7, 92, 240, 0.2), 0 2px 6px rgba(0, 17, 51, 0.08)",
                }}
                className="w-full bg-[#075CF0] hover:bg-[#0652d6] active:scale-[0.995] rounded-[18px] sm:rounded-[20px] p-4 xs:p-[18px] sm:px-8 sm:py-5 lg:px-9 lg:py-5 text-white transition-all cursor-pointer group select-none flex items-center justify-between gap-3 sm:gap-4 focus:outline-hidden focus:ring-2 focus:ring-[#075CF0] focus:ring-offset-2"
              >
                {/* Left side: ROW 1 (Title) + ROW 2 (Location) + ROW 3 (Department) */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  {/* ROW 1: Job Title - No truncate on mobile, title always fully readable */}
                  <h3 className="text-[17px] xs:text-[18px] sm:text-[22px] lg:text-[24px] font-bold text-white tracking-tight leading-snug break-words sm:truncate">
                    {job.title}
                  </h3>

                  {/* Vertically Stacked Metadata Rows */}
                  <div className="mt-2 sm:mt-2.5 flex flex-col gap-1 xs:gap-1.5 sm:gap-2 text-[13px] xs:text-[14px] sm:text-[15px] lg:text-[16px] text-white/95 font-normal">
                    {/* ROW 2: Location */}
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-white" />
                      <span className="truncate">{job.location}</span>
                    </div>

                    {/* ROW 3: Department */}
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <Monitor className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px] shrink-0 text-white" />
                      <span className="truncate">{job.department}</span>
                    </div>
                  </div>
                </div>

                {/* ROW 1 (Right): Arrow icon vertically centered relative to entire card */}
                <div className="shrink-0 flex items-center justify-center pl-2 xs:pl-3 sm:pl-4">
                  <ArrowRight className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-white transition-transform duration-200 group-hover:translate-x-1.5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-2xs">
            <h3 className="text-xl font-bold text-[#001133]">
              Tidak ada posisi ditemukan
            </h3>
            <p className="text-slate-500 text-base mt-2">
              Coba sesuaikan kata kunci pencarian atau filter departemen Anda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All Departments");
                setCurrentPage(1);
              }}
              className="mt-5 px-6 py-2.5 bg-[#075CF0] text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* ====================================================================
            4. PAGINATION (5 PER PAGE, PAGES 1 & 2 FOR 10 RECORDS)
            ==================================================================== */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center gap-2 select-none">
            {/* Previous Arrow Button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors border ${
                currentPage === 1
                  ? "bg-white/60 border-slate-200/50 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50 shadow-2xs"
              }`}
              aria-label="Halaman Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Pagination Numbers */}
            {paginationItems.map((item, idx) => {
              if (item === "...") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="w-6 sm:w-8 text-center text-slate-400 font-semibold text-sm sm:text-base"
                  >
                    ...
                  </span>
                );
              }

              const pageNum = Number(item);
              const isActive = currentPage === pageNum;

              return (
                <button
                  key={`page-${pageNum}`}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#075CF0] text-white shadow-xs"
                      : "bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Arrow Button */}
            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors border ${
                currentPage === totalPages
                  ? "bg-white/60 border-slate-200/50 text-slate-300 cursor-not-allowed"
                  : "bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50 shadow-2xs"
              }`}
              aria-label="Halaman Berikutnya"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>

      {/* ====================================================================
          APPLICATION MODAL (WHEN A JOB CARD IS CLICKED)
          ==================================================================== */}
      {activeJobModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="job-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 xs:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 xs:p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold bg-[#E9EFF8] text-[#075CF0] px-3 py-1 rounded-full">
                  {activeJobModal.department}
                </span>
                <h3 id="job-modal-title" className="text-xl sm:text-2xl font-bold text-[#001133] mt-2">
                  {activeJobModal.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeJobModal.location}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveJobModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Application Form */}
            <form onSubmit={handleApplySubmit} className="pt-4 space-y-3.5">
              <h4 className="text-sm font-bold text-[#001133]">
                Formulir Lamaran Cepat
              </h4>

              <div>
                <label htmlFor="applicant-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  id="applicant-name"
                  type="text"
                  required
                  placeholder="Misal: Andi Pratama"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#075CF0] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="applicant-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Aktif *
                  </label>
                  <input
                    id="applicant-email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#075CF0] focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="applicant-whatsapp" className="block text-xs font-semibold text-slate-700 mb-1">
                    No. WhatsApp *
                  </label>
                  <input
                    id="applicant-whatsapp"
                    type="tel"
                    required
                    placeholder="081234567890"
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#075CF0] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="applicant-portfolio" className="block text-xs font-semibold text-slate-700 mb-1">
                  Tautan LinkedIn / Portofolio / CV *
                </label>
                <input
                  id="applicant-portfolio"
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#075CF0] focus:bg-white"
                />
              </div>

              {appliedSuccess ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold rounded-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lamaran berhasil dikirim! Tim kami akan segera menghubungi Anda.</span>
                </div>
              ) : (
                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveJobModal(null)}
                    className="px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-bold bg-[#075CF0] hover:bg-blue-600 text-white rounded-full shadow-sm transition-colors"
                  >
                    Kirim Lamaran Sekarang
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
