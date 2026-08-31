# Project Setup Plan: Elysia + Drizzle + MySQL

Dokumen ini berisi panduan tingkat tinggi (high-level) untuk melakukan inisialisasi dan setup awal proyek backend pada folder ini. Ikuti langkah-langkah di bawah ini untuk memulai pengembangan.

## 1. Inisialisasi Proyek
- Pastikan `bun` sudah terinstal di sistem.
- Lakukan inisialisasi proyek baru menggunakan `bun init` pada folder ini.

## 2. Instalasi Dependensi
Instal dependensi utama yang dibutuhkan untuk proyek ini:
- **Elysia**: Sebagai framework backend utama.
- **Drizzle ORM**: Sebagai ORM untuk berinteraksi dengan database.
- **Drizzle Kit**: Sebagai *dev dependency* untuk keperluan migrasi skema.
- **Driver MySQL**: Instal driver MySQL yang kompatibel dengan Bun/Drizzle (misalnya `mysql2`).

## 3. Setup Konfigurasi Database
- Buat file `.env` untuk menyimpan kredensial koneksi ke database MySQL.
- Buat file konfigurasi koneksi database menggunakan Drizzle.
- Definisikan skema (*schema*) dasar database (contoh: tabel `users` sederhana).
- Siapkan konfigurasi `drizzle.config.ts` untuk keperluan migrasi menggunakan Drizzle Kit.

## 4. Setup Server Aplikasi
- Buat file utama (misalnya `src/index.ts`).
- Inisialisasi server menggunakan Elysia.
- Buat sebuah *route* atau *endpoint* sederhana (misalnya `GET /`) yang mengembalikan data dari database MySQL melalui Drizzle untuk memastikan integrasi berjalan lancar.
- Konfigurasikan skrip *start/dev* di `package.json` untuk menjalankan server dengan *hot-reload* bawaan dari Bun (`bun run --watch`).

---
**Catatan untuk Developer/Model:** 
Fokus pada fungsionalitas dasar dan memastikan setiap komponen di atas terintegrasi dengan baik sebelum menambahkan arsitektur fitur yang lebih kompleks.
