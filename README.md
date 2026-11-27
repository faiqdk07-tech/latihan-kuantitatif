# Latihan Kuantitatif

Latihan harian PU kuantitatif, Pengetahuan Kuantitatif, dan Penalaran Matematika untuk UTBK-SNBT 2027.

Aplikasi ini pemutar dan pencatat. Soalnya dibuat Claude dari prompt yang disusun aplikasi:

- **Materi tetap, bentuk berganti.** Setiap hari aplikasi menyusun "resep bentuk" untuk 16 soal. Materinya mengikuti jadwal Progres Harian (unit BIL, ALJ, GEO, DAT, dan PU kuantitatif; hanya yang sudah dipelajari, ditambah materi jadwal lama sebagai ulasan), sedangkan stimulus, arah tanya, dan format jawaban diputar supaya tidak sama dengan hari-hari sebelumnya.
- **Tiga jenis soal per set.** Bentuk lama (meniru arsip 2019–2026), digeser (satu unsur diubah), dan bentuk baru (dua unsur diubah), mengikuti brief "Kunci Pola Soal UTBK-SNBT".
- **Naik bertahap.** Tahap Fondasi (sebagian besar bentuk lama), Peralihan, lalu Bentuk baru. Tahap naik sendiri setelah bentuk sebelumnya dikuasai.
- **Label di tiap soal.** Kemampuan, bentuk lama terdekat, dan yang diubah. Halaman Progres merekap per kemampuan dan per jenis bentuk.
- **Jenis dan format (kesiapan-2027).** Jenis soal boleh ditulis lama/geser/baru/migrasi atau kode L/G/B/M; jenis yang tidak dikenal diberi peringatan saat ditempel, tidak lagi diam-diam dianggap "geser". Setiap soal juga mencatat format jawaban J1–J7 (J1 PG, J2 benar/salah, J3 isian, J4 satu stimulus untuk beberapa soal, J5 pilih semua yang benar, J6 menjodohkan, J7 mengurutkan); bila kolom `format` tidak diisi, format diambil dari tipe soal.
- **Cek mutu saat menempel.** Set tetap tersimpan, tetapi aplikasi memberi catatan bila: panjang opsi berbentuk kalimat tidak setara (selisih lebih dari 30%), kunci terlalu sering menjadi opsi terpanjang, hanya sebagian opsi memuat "karena", pernyataan benar/salah timpang, alasan pengecoh kosong atau "…", opsi angka tidak urut, ada nomor kalimat (1)(2)(3) di teks kuantitatif, tiga kunci sama berturut-turut atau kunci menumpuk di satu huruf, jumlah atau jenis soal tidak sesuai resep, unit belum dijadwalkan, atau J5/J6 melebihi batas.
- **Konteks dan nama tokoh diputar.** Setiap soal PU dan setiap stimulus PM mendapat konteks dari 18 pilihan (sekolah, UMKM, pasar tradisional, perikanan, layanan digital, dan lainnya) yang digilir; soal PK tetap tanpa cerita. Prompt memuat DAFTAR NAMA HARI INI dari nama mingguan aplikasi, melarang nama yang dipakai 3 hari terakhir, dan meringkas konteks yang sering dipakai 30 hari terakhir. Setiap soal menyimpan kolom `konteks`, dan cek mutu memberi catatan bila nama terlarang atau nama di luar daftar dipakai.
- **P–Q empat opsi** sesuai Brief PK-F1 (P lebih besar, Q lebih besar, sama, tidak dapat ditentukan), di soal dan di mini game Timbangan P–Q. Set lama yang sudah tersimpan dengan lima opsi tetap tampil seperti semula.
- **Error Book** (menu `#salah`). Soal yang salah di Set soal dan Simulasi masuk otomatis, lalu melewati tiga langkah supaya tidak sekadar jadi daftar:
  1. *Diagnosis*: pilih penyebab utama (konsep belum kuasai, salah tangkap soal, langkah buntu, salah hitung, terkecoh opsi, terburu-buru, menebak), lalu tulis satu aturan "Kalau …, aku …" dengan kata sendiri. Aturan yang terlalu umum ("lebih teliti") diberi peringatan. Aplikasi menyarankan penyebab dari catatan (waktu lewat target, jawaban kosong, opsi pengecoh).
  2. *Ulang berjarak tanpa kunci*: mulai besok, lalu 3, 7, dan 14 hari kemudian (paling banyak 10 soal per putaran, diselang-seling antarsubtes). Aturanmu baru ditampilkan setelah menjawab.
  3. *Lulus* setelah benar 4 kali berjarak. Salah lagi berarti mulai dari awal dan diagnosisnya diperbarui.
  - Bagian *Pola 30 hari* merekap penyebab dan kemampuan yang paling sering salah, memberi fokus minggu ini, dan menyediakan prompt analisis pola untuk Claude. Prompt tiga varian tetap ada untuk menguji kemampuan yang sama di bentuk lain.
- **Simulasi waktu resmi.** PU 10 soal 10 menit, PK 20 soal 20 menit, PM 20 soal 42,5 menit.

- **Jadwal ikut Progres Harian.** Jadwal materi baru mulai 23 November 2026 (BIL-01). Sebelum itu soal hanya memakai unit jadwal lama sebagai ulasan. Penundaan di Progres Harian ikut menggeser jadwal; salinan jadwal lama yang tanggalnya lebih awal diabaikan.
- **Batas waktu baca.** Prompt memuat batas panjang bacaan, banyak langkah per level, dan angka ramah hitung; tempelan yang terlalu panjang diberi peringatan.
- **Stok dan riwayat bentuk.** Set bisa disiapkan sampai enam hari ke depan, satu tempelan boleh berisi beberapa blok json, ada prompt stok dua hari, dan riwayat bentuk 30 hari bisa diunduh sebagai JSON untuk pengetahuan proyek Claude.

- **Paket mini game mingguan.** Bank kata Timbangan P–Q (cerita harga), Cukup Nggak?, dan Mesin Fungsi (cerita) diganti tiap minggu (Senin–Minggu). Halaman Game → "kelola" (`#mingguan`): salin prompt, jalankan di Claude, tempel JSON. Angka tetap dibuat aplikasi. Mulai Jumat muncul pengingat bila paket minggu depan belum ada; tanpa paket minggu ini game memakai bank bawaan. Status ditulis ke kunci `paketMingguan:latihan-kuantitatif` untuk Progres Harian.

Cara pakai harian: buka Set soal, salin prompt, jalankan di Claude, tempel hasilnya, lalu kerjakan.

Semua data tersimpan di peramban (localStorage). Satu file `index.html`, tanpa proses build.

- **Penyimpanan aman.** Setiap kali menyimpan, aplikasi membaca dulu isi penyimpanan lalu menggabungkannya, jadi tab atau jendela lama tidak bisa menimpa jawaban yang lebih baru. Penghapusan yang disengaja dicatat supaya tidak muncul lagi. Kegagalan menyimpan (misalnya penyimpanan penuh) selalu diberi tahu, dan layar skor menampilkan "Tersimpan ✓" setelah memastikan semua jawaban tercatat. Sesi yang belum selesai tidak hangus lewat tengah malam.
- **Pengaturan → Data.** Menunjukkan tempat data tersimpan (Layar Utama atau browser, yang tidak saling terlihat), *Diagnosis data* (hanya membaca: isi tiap key dan tombol Salin), dan *Pulihkan dari cadangan* (menempel "Cadangan data" untuk digabung, tanpa menghapus apa pun).
