# Sekolah Karir — Recruitment Landing Page

Landing page rekrutmen interaktif dan responsif untuk **Sekolah Karir**, platform pengembangan karier yang membantu talenta muda mengasah keterampilan, membangun pengalaman nyata, dan terhubung dengan berbagai peluang di dunia kerja.

Website ini dirancang khusus untuk memperkenalkan berbagai divisi kerja, serta memberikan pengalaman eksplorasi lowongan kerja yang intuitif bagi calon pelamar di perangkat desktop maupun mobile.

---

## Daftar Isi

1. [Gambaran Umum](#gambaran-umum)
2. [Fitur Utama](#fitur-utama)
3. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
4. [Struktur Project](#struktur-project)
5. [Panduan Instalasi & Menjalankan Project](#panduan-instalasi--menjalankan-project)
6. [Daftar Perintah (Scripts)](#daftar-perintah-scripts)
7. [Keputusan Desain & Pengembangan](#keputusan-desain--pengembangan)
8. [Penggunaan AI dan Tools](#penggunaan-ai-dan-tools)
9. [Author](#author)

---

## Gambaran Umum

Project ini merupakan landing page rekrutmen modern yang dibangun untuk memenuhi kebutuhan seleksi talenta baru di Sekolah Karir. Halaman ini memadukan estetika visual profesional dengan interaktivitas yang mulus, mengusung identitas warna biru khas Sekolah Karir (`#075CF0`), aksen navy (`#0F2B5B`), dan latar bernuansa warm cream (`#F2EEE7`).

Pengunjung dapat mempelajari nilai-nilai organisasi, melihat suasana kolaborasi tim lintas divisi, mencari posisi magang/pekerjaan yang sesuai minat dan departemen, hingga mengirimkan aplikasi melalui formulir lamaran cepat.

---

## Fitur Utama

Website ini memuat fitur-fitur yang telah diimplementasikan secara fungsional:

### 1. Sticky Navigation & Responsive Header
- **Adaptive Scroll Logo:** Menampilkan logo putih di atas tab biru geometris saat posisi scroll di paling atas, dan beralih instan ke logo navy berlatar transparan saat halaman digulirkan.
- **ScrollSpy Navigation:** Indikator tautan menu aktif secara otomatis menyesuaikan posisi section viewport (*Beranda*, *Karier*, *Why Join Us*, *Our Teams*).
- **Mobile Full-Screen Navigation:** Menu overlay layar penuh pada perangkat mobile dengan animasi *staggered item reveal*, tombol penutup (X), pintasan tombol `Escape`, dan penguncian scroll latar belakang (*scroll lock*).

### 2. Hero Section
- **Tipografi Teranimasi:** Headline utama *"Bangun masa depan karier bersama kami."* dilengkapi efek animasi karakter *blur-in-up* yang halus.
- **Dual Call-to-Action (CTA):** Tombol aksi langsung menuju daftar lowongan kerja (*Lihat Posisi Terbuka*) dan navigasi ke pengenalan tim (*Kenali Tim Kami*).
- **Visual Responsif:** Tata letak ilustrasi maskot dan tim Sekolah Karir yang proporsional di seluruh ukuran layar.

### 3. Open Positions (Eksplorasi Lowongan)
- **Live Search Filter:** Pencarian lowongan kerja instan berdasarkan kata kunci judul posisi, departemen, atau lokasi kerja.
- **Filter Departemen:** Dropdown kategori untuk menyaring lowongan berdasarkan 5 divisi (*Product & Technology*, *Marketing & Media*, *AI & Automation*, *People & Learning*, *Operations*) serta opsi *All Departments*.
- **Paginasi Dinamis:** Menampilkan 5 posisi per halaman dengan kontrol navigasi halaman numerik dan tombol sebelumnya/berikutnya.
- **Quick Application Modal:** Mengklik kartu lowongan akan membuka modal dialog informasi posisi yang dilengkapi formulir lamaran cepat (*Nama*, *Email*, *WhatsApp*, *Tautan LinkedIn/Portofolio*), umpan balik pengiriman sukses, serta penutupan via tombol `Escape` atau klik luar.

### 4. Why Join Us (Nilai & Keunggulan)
- **Tiga Pilar Budaya:** Memperkenalkan keunggulan bergabung di Sekolah Karir melalui kartu visual *Learn & Grow*, *Real Experience*, dan *Collaborative Environment*.
- **Tata Letak Adaptif:** Format horizontal slider dengan *CSS snap scrolling* di layar mobile dan tata letak 3-kolom *CSS Grid* di layar desktop.

### 5. Meet Our Teams (Polaroid Line Carousel)
- **Interactive Polaroid Gallery:** Galeri tim berbentuk cetakan polaroid yang digantung pada tali fleksibel untuk merepresentasikan 5 divisi kerja.
- **Fisika Tali & Ayunan:** Interaksi geser (*drag & swipe*) dengan efek ayunan inersia, kalkulasi kelengkungan tali, serta gerakan santai saat diam.

### 6. Animasi Teks Magic UI (TextAnimate)
- Menggunakan komponen `TextAnimate` berbasis `motion` dengan preset `blurInUp` per karakter (`by="character"`) pada tiga heading utama (Hero, Open Positions, dan Meet Our Teams) dengan konfigurasi `once` saat masuk viewport.
- Mendukung preferensi aksesibilitas `prefers-reduced-motion` untuk kenyamanan visual seluruh pengguna.

### 7. Footer Interaktif & Halftone Wordmark
- **Informasi & Tautan Cepat:** Rangkuman identitas organisasi, daftar tautan navigasi, dan ikon media sosial (Instagram, LinkedIn, Website).
- **Interactive Halftone Wordmark:** Tipografi kanvas matriks titik *"SekolahKarir"* yang merespons pergerakan kursor mouse secara dinamis.
- **Aksi Cepat:** Tombol *Back to top* dengan transisi *smooth scroll* ke bagian atas halaman.

---

## Teknologi yang Digunakan

| Kategori | Teknologi / Library | Keterangan |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (v16.4.6) | React Framework berbasis App Router dan Turbopack bundler. |
| **UI Library** | [React](https://react.dev/) (v19.3.0) | Library frontend deklaratif generasi terbaru. |
| **Bahasa** | [TypeScript](https://www.typescriptlang.org/) (v5.x) | Static type safety untuk menjamin keandalan dan maintainability kode. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (v4.3.3) | Engine utility CSS modern dengan performa kompilasi tinggi. |
| **Animasi** | [Motion](https://motion.dev/) (v14.12.0) | Library animasi deklaratif untuk transisi elemen dan teks. |
| **Komponen Teks** | Magic UI `TextAnimate` | Preset animasi tipografi per karakter (`blurInUp`). |
| **Ikon** | [Lucide React](https://lucide.dev/) (v1.71.0) | Set ikon vektor modern, konsisten, dan ringan. |
| **Utilitas Kelas** | `clsx` & `tailwind-merge` | Helper utilitas `cn()` untuk penggabungan class name Tailwind yang aman. |
| **Tipografi** | `next/font/google` | Font *Plus Jakarta Sans* dioptimasi langsung dari engine font Next.js. |
| **Grafis Interaktif** | HTML5 Canvas API | Rendering halftone dot-matrix kustom pada footer. |
| **Package Manager** | [pnpm](https://pnpm.io/) (v10.26.2) | Manajemen paket cepat, efisien, dan hemat ruang disk. |

---

## Struktur Project

Berikut adalah struktur direktori utama yang relevan dalam project ini:

```text
sekolahkarir/
├── public/                       # Aset statis publik (logo, gambar hero, foto divisi)
│   ├── hero.png                  # Ilustrasi hero section
│   ├── logo.png                  # Logo Sekolah Karir versi putih
│   ├── logo1.png                 # Logo Sekolah Karir versi warna
│   ├── card11.png..card33.png    # Gambar kartu Why Join Us
│   └── *.png                     # Foto divisi tim (Product, Media, AI, People, Ops)
├── src/
│   ├── app/
│   │   ├── globals.css           # Styling global & konfigurasi Tailwind CSS v4
│   │   ├── layout.tsx            # Root layout, metadata SEO, & konfigurasi font
│   │   └── page.tsx              # Halaman utama landing page rekrutmen
│   ├── components/               # Komponen presentasional dan interaktif
│   │   ├── DemoPhotos.tsx        # Section Meet Our Teams
│   │   ├── Footer.tsx            # Section footer lengkap & copyright
│   │   ├── HeroBanner.tsx        # Section hero banner & CTA utama
│   │   ├── Navbar.tsx            # Sticky navigation bar & mobile menu overlay
│   │   ├── OpenPositions.tsx     # Section lowongan, search, filter, pagination, & modal
│   │   ├── WhyJoin.tsx           # Section keunggulan & nilai Sekolah Karir
│   │   └── ui/                   # Komponen UI spesifik & rekayasa visual
│   │       ├── halftone-wordmark-footer.tsx # Kanvas interaktif matriks titik footer
│   │       ├── polaroid-line-carousel.tsx   # Galeri polaroid dengan simulasi fisika tali
│   │       └── text-animate.tsx             # Komponen Magic UI TextAnimate
│   ├── data/
│   │   └── jobs.ts               # Data dummy lowongan posisi & daftar departemen
│   ├── lib/
│   │   └── utils.ts              # Fungsi helper utilitas cn (clsx + tailwind-merge)
│   └── registry/
│       └── magicui/              # Registry alias untuk komponen Magic UI
│           └── text-animate.tsx  # Ekspor ulang komponen TextAnimate
├── components.json               # Konfigurasi shadcn / registry komponen UI
├── package.json                  # Konfigurasi dependensi dan scripts project
├── pnpm-lock.yaml                # Lockfile dependensi pnpm
├── tsconfig.json                 # Konfigurasi compiler TypeScript
└── README.md                     # Dokumentasi project
```

---

## Panduan Instalasi & Menjalankan Project

Ikuti langkah-langkah di bawah ini untuk menjalankan project pada environment lokal:

### 1. Prasyarat
Pastikan sistem Anda telah terpasang:
- **Node.js**: Versi `20.x` atau lebih baru
- **pnpm**: Versi `9.x` atau `10.x` *(disarankan)*
  ```bash
  corepack enable
  corepack prepare pnpm@latest --activate
  ```

### 2. Clone Repository
```bash
git clone https://github.com/DaffaHM/mini-assigment-sekolahKarir.git
cd mini-assigment-sekolahKarir
```

### 3. Install Dependensi
Jalankan perintah instalasi menggunakan `pnpm`:
```bash
pnpm install
```

### 4. Menjalankan Development Server
Mulai server pengembangan lokal dengan fitur Turbopack:
```bash
pnpm dev
```

### 5. Membuka di Browser
Buka browser Anda dan akses tautan berikut:
```text
http://localhost:3000
```

---

## Daftar Perintah (Scripts)

Perintah yang tersedia pada file `package.json`:

| Perintah | Deskripsi |
| :--- | :--- |
| `pnpm dev` | Menjalankan server pengembangan lokal Next.js dengan Turbopack. |
| `pnpm build` | Membangun project untuk lingkungan production dan menghasilkan static pages yang teroptimasi. |
| `pnpm start` | Menjalankan server aplikasi Next.js dalam mode production (setelah menjalankan `build`). |
| `pnpm run lint` | Menjalankan analisis kode statis menggunakan ESLint untuk memastikan standar kualitas kode. |

---

## Keputusan Desain & Pengembangan

1. **Konsistensi Identitas Visual:**
   - Palet warna dirancang selaras dengan brand Sekolah Karir: Biru elektrik (`#075CF0`) sebagai warna aksi utama, Dark Navy (`#0F2B5B`) untuk kontras dan kedalaman informasi, serta Warm Cream (`#F2EEE7`) sebagai latar belakang hangat yang ramah bagi mata.
2. **Mobile-First & Responsiveness:**
   - Navigasi mobile dirancang khusus dalam format *full-screen overlay* yang memperhatikan *safe area inset* perangkat modern, dengan elemen sentuh yang proporsional dan bebas hambatan horizontal (*zero unwanted overflow*).
3. **Optimasi Performa Render:**
   - Penanganan event scroll dioptimasi menggunakan `window.requestAnimationFrame` dan opsi `{ passive: true }` agar pembacaan posisi DOM untuk ScrollSpy tidak memicu *layout thrashing*.
   - Data statis dideklarasikan di tingkat modul untuk menghindari pembuatan ulang array/objek baru pada setiap siklus re-render React.
4. **Aksesibilitas & Standar Semantik:**
   - Menggunakan elemen HTML5 semantik (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<dialog>`).
   - Modal lowongan dan menu navigasi mobile dapat ditutup dengan tombol `Escape` dan memiliki asosiasi form label yang ramah *screen-reader*.
   - Menerapkan pengecekan `useReducedMotion()` agar pengguna dengan sensitivitas vestibular tidak terganggu oleh efek animasi.
5. **Arsitektur Komponen Terisolasi:**
   - Logika bisnis (seperti pencarian, penyaringan departemen, dan kalkulasi halaman pada lowongan kerja) diletakkan dekat dengan komponen yang bersangkutan tanpa polusi state global yang tidak diperlukan.

---

## Penggunaan AI dan Tools

Dalam proses pengerjaan assignment ini, beberapa tools dan asistensi AI digunakan secara terarah:

1. **Antigravity (Google DeepMind):**
   - Bertindak sebagai lingkungan *AI coding agent* utama untuk mempercepat penulisan kode, penyesuaian CSS responsif di berbagai breakpoint, implementasi komponen animasi, pembersihan ESLint/TypeScript, audit kualitas kode, dan penyusunan dokumentasi teknis.
2. **Figma / Panduan Desain Visual:**
   - Digunakan sebagai acuan proporsi layout, hierarki tipografi, padding/margin antarelemen, dan pemilihan palet warna antarmuka.
3. **Magic UI Registry:**
   - Digunakan sebagai referensi arsitektur komponen animasi tipografi (`TextAnimate`) berbasis `motion`.

---

## Author

- **Nama:** Daffa Haris Mufid
- **Email:** [daffaharismufid@gmail.com](mailto:daffaharismufid@gmail.com)
- **GitHub:** [@DaffaHM](https://github.com/DaffaHM)
