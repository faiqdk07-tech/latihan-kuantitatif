# Latihan Kuantitatif

Latihan harian PU kuantitatif, Pengetahuan Kuantitatif, dan Penalaran Matematika untuk UTBK-SNBT 2027.

Aplikasi ini pemutar dan pencatat. Soalnya dibuat Claude dari prompt yang disusun aplikasi:

- **Materi tetap, bentuk berganti.** Setiap hari aplikasi menyusun "resep bentuk" untuk 16 soal. Materinya mengikuti jadwal Progres Harian (unit BIL, ALJ, GEO, DAT, dan PU kuantitatif; hanya yang sudah dipelajari, ditambah materi jadwal lama sebagai ulasan), sedangkan stimulus, arah tanya, dan format jawaban diputar supaya tidak sama dengan hari-hari sebelumnya.
- **Tiga jenis soal per set.** Bentuk lama (meniru arsip 2019–2026), digeser (satu unsur diubah), dan bentuk baru (dua unsur diubah), mengikuti brief "Kunci Pola Soal UTBK-SNBT".
- **Naik bertahap.** Tahap Fondasi (sebagian besar bentuk lama), Peralihan, lalu Bentuk baru. Tahap naik sendiri setelah bentuk sebelumnya dikuasai.
- **Label di tiap soal.** Kemampuan, bentuk lama terdekat, dan yang diubah. Halaman Progres merekap per kemampuan dan per jenis bentuk.
- **Soal salah.** Bisa diulang, dan ada prompt tiga varian (konteks diganti, arah tanya dibalik, satu syarat ditambah).
- **Simulasi waktu resmi.** PU 10 soal 10 menit, PK 20 soal 20 menit, PM 20 soal 42,5 menit.

Cara pakai harian: buka Set soal, salin prompt, jalankan di Claude, tempel hasilnya, lalu kerjakan.

Semua data tersimpan di peramban (localStorage). Satu file `index.html`, tanpa proses build.
