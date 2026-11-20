# Latihan Kuantitatif

Latihan harian PU kuantitatif, Pengetahuan Kuantitatif, dan Penalaran Matematika untuk UTBK-SNBT 2027.

Aplikasi ini pemutar dan pencatat. Soalnya dibuat Claude dari prompt yang disusun aplikasi:

- **Materi tetap, bentuk berganti.** Setiap hari aplikasi menyusun "resep bentuk" untuk 16 soal. Materinya mengikuti jadwal Progres Harian (unit BIL, ALJ, GEO, DAT, dan PU kuantitatif; hanya yang sudah dipelajari, ditambah materi jadwal lama sebagai ulasan), sedangkan stimulus, arah tanya, dan format jawaban diputar supaya tidak sama dengan hari-hari sebelumnya.
- **Tiga jenis soal per set.** Bentuk lama (meniru arsip 2019–2026), digeser (satu unsur diubah), dan bentuk baru (dua unsur diubah), mengikuti brief "Kunci Pola Soal UTBK-SNBT".
- **Naik bertahap.** Tahap Fondasi (sebagian besar bentuk lama), Peralihan, lalu Bentuk baru. Tahap naik sendiri setelah bentuk sebelumnya dikuasai.
- **Label di tiap soal.** Kemampuan, bentuk lama terdekat, dan yang diubah. Halaman Progres merekap per kemampuan dan per jenis bentuk.
- **Soal salah.** Bisa diulang, dan ada prompt tiga varian (konteks diganti, arah tanya dibalik, satu syarat ditambah).
- **Simulasi waktu resmi.** PU 10 soal 10 menit, PK 20 soal 20 menit, PM 20 soal 42,5 menit.

- **Jadwal ikut Progres Harian.** Jadwal materi diulang dari sesi 1 mulai 23 Nov 2026 (BIL-01). Data jadwal versi lama dari Progres Harian diabaikan supaya materi tidak meloncat.
- **Wadah bentuk harian (`bentuk-harian.json`).** Urutan bentuk per tanggal (stimulus, arah tanya, arsip, tuas, konteks, bentuk mini game) dan tiga tema cerita per hari. Bentuk diputar tanpa pengulangan sampai semua terpakai, dan tidak bergantung pada riwayat satu peramban. Buat ulang dengan `node alat/buat-bentuk-harian.js`.
- **Hitung tanpa kalkulator.** Angka di Hitung cepat dan mini game dibatasi supaya bisa dihitung di kepala. Prompt mewajibkan angka ramah hitung, paling banyak 3 langkah untuk PU/PK, dan pembahasan paling banyak 3 butir.

Cara pakai harian: buka Set soal, salin prompt, jalankan di Claude, tempel hasilnya, lalu kerjakan.

Semua data tersimpan di peramban (localStorage). Aplikasinya satu file `index.html` tanpa proses build, ditambah `bentuk-harian.json` sebagai wadah bentuk.
