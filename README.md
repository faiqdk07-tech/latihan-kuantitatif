# Latihan Kuantitatif

Latihan harian PU kuantitatif, Pengetahuan Kuantitatif, dan Penalaran Matematika untuk UTBK-SNBT 2027.

Aplikasi ini pemutar dan pencatat. Soalnya dibuat Claude dari prompt yang disusun aplikasi:

- **Materi tetap, bentuk berganti.** Setiap hari aplikasi menyusun "resep bentuk" untuk 16 soal. Materinya mengikuti jadwal Progres Harian (unit BIL, ALJ, GEO, DAT, dan PU kuantitatif; hanya yang sudah dipelajari, ditambah materi jadwal lama sebagai ulasan), sedangkan stimulus, arah tanya, dan format jawaban diputar supaya tidak sama dengan hari-hari sebelumnya.
- **Tiga jenis soal per set.** Bentuk lama (meniru arsip 2019–2026), digeser (satu unsur diubah), dan bentuk baru (dua unsur diubah), mengikuti brief "Kunci Pola Soal UTBK-SNBT".
- **Naik bertahap.** Tahap Fondasi (sebagian besar bentuk lama), Peralihan, lalu Bentuk baru. Tahap naik sendiri setelah bentuk sebelumnya dikuasai.
- **Label di tiap soal.** Kemampuan, bentuk lama terdekat, dan yang diubah. Halaman Progres merekap per kemampuan dan per jenis bentuk.
- **Soal salah.** Bisa diulang, dan ada prompt tiga varian (konteks diganti, arah tanya dibalik, satu syarat ditambah).
- **Simulasi waktu resmi.** PU 10 soal 10 menit, PK 20 soal 20 menit, PM 20 soal 42,5 menit.

- **Jadwal ikut Progres Harian.** Jadwal materi baru mulai 23 November 2026 (BIL-01). Sebelum itu soal hanya memakai unit jadwal lama sebagai ulasan. Penundaan di Progres Harian ikut menggeser jadwal; salinan jadwal lama yang tanggalnya lebih awal diabaikan.
- **Batas waktu baca.** Prompt memuat batas panjang bacaan, banyak langkah per level, dan angka ramah hitung; tempelan yang terlalu panjang diberi peringatan.
- **Stok dan riwayat bentuk.** Set bisa disiapkan sampai enam hari ke depan, satu tempelan boleh berisi beberapa blok json, ada prompt stok dua hari, dan riwayat bentuk 30 hari bisa diunduh sebagai JSON untuk pengetahuan proyek Claude.

- **Paket mini game mingguan.** Bank kata Timbangan P–Q (cerita harga), Cukup Nggak?, dan Mesin Fungsi (cerita) diganti tiap minggu (Senin–Minggu). Halaman Game → "kelola" (`#mingguan`): salin prompt, jalankan di Claude, tempel JSON. Angka tetap dibuat aplikasi. Mulai Jumat muncul pengingat bila paket minggu depan belum ada; tanpa paket minggu ini game memakai bank bawaan. Status ditulis ke kunci `paketMingguan:latihan-kuantitatif` untuk Progres Harian.

Cara pakai harian: buka Set soal, salin prompt, jalankan di Claude, tempel hasilnya, lalu kerjakan.

Semua data tersimpan di peramban (localStorage). Satu file `index.html`, tanpa proses build.
