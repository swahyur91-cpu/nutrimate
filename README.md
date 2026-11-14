# 🍎 NutriMate — Asisten Gizi & Pola Makan Pelajar

> Solusi digital berbantuan AI untuk membantu pelajar mencatat makanan, menganalisis gizi, dan memperbaiki pola makan sehari-hari.

## 📌 Judul & Deskripsi

**Nama Produk:** NutriMate

**Latar Belakang Masalah:**
Banyak pelajar Indonesia mengalami masalah gizi ganda — di satu sisi kekurangan zat gizi (anemia, kurang protein), di sisi lain kelebihan kalori dari junk food. Penyebabnya: **tidak tahu kandungan gizi makanan** yang mereka konsumsi sehari-hari.

**Solusi:**
NutriMate adalah **asisten gizi digital** berbasis web yang membantu pelajar:
1. **Mencatat makanan** harian dengan mudah (ketik nama makanan)
2. **Melihat analisis gizi** — kalori, protein, karbo, lemak
3. **Mendapat skor kesehatan** 0-100 dari pola makan
4. **Menerima saran perbaikan** otomatis (misal: "kurang sayur")
5. **Menghitung target kalori personal** berdasarkan BB, TB, umur

**Target Pengguna:**
Pelajar SMA (13–18 tahun) yang ingin sadar gizi tanpa ribet.

**Link Website:** 🔗 https://[username].github.io/[nama-repo]/

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| Bahasa | HTML5, CSS3, JavaScript (ES6) |
| Framework | ❌ Tidak ada (vanilla) |
| Library | ❌ Tidak ada |
| Penyimpanan | `localStorage` |
| Metode AI | Rule-based scoring & keyword matching |
| Platform | GitHub Pages |

---

## 🤖 Pemanfaatan AI (AI Usage Disclosure)

### Alat AI:
- **Claude (Anthropic)** — scaffolding & debugging
- **ChatGPT / Gemini** — riset database gizi

### Contoh Prompt Utama:

1. **Riset ide:**
   > "Berikan 5 ide solusi digital berbantuan AI untuk membantu pelajar sadar gizi, berbasis HTML/CSS/JS murni."

2. **Scaffolding:**
   > "Buatkan kerangka web pencatat makanan dengan autocomplete, analisis gizi, dan skor kesehatan. Tanpa framework."

3. **Debugging:**
   > "localStorage saya hilang saat refresh. Bagaimana cara simpan yang benar?"

### Penyesuaian Mandiri:

| Bagian | Saran AI | Modifikasi Tim |
|--------|----------|----------------|
| Database makanan | 10 item | **45+ makanan Indonesia** (riset sendiri) |
| Skor kesehatan | Tidak ada | **Algoritma skor 0-100** (desain tim) |
| Target kalori | Tidak disarankan | **Rumus Mifflin-St Jeor** (ide tim) |
| Analisis otomatis | Tidak ada | **Rule-based** dengan 7 kategori masalah |
| Tips sehat | Tidak ada | **6 kartu tips** (riset tim) |
| Autocomplete | Keyword exact | **Fuzzy matching** + alias |

> 📄 Detail lengkap di [`AI_LOGBOOK.md`](./AI_LOGBOOK.md)

---

## 📖 Panduan Penggunaan

### Untuk Pengguna:
1. Buka **https://[username].github.io/[nama-repo]/**
2. **Tab 🍽️ Catat Makan:**
   - Ketik nama makanan (contoh: "nasi goreng")
   - Klik dari saran yang muncul
   - Pilih waktu makan (pagi/siang/malam/snack)
   - Klik 💾 Simpan Makan
3. **Tab 📊 Hari Ini:** lihat skor, total gizi, dan analisis
4. **Tab 🎯 Targetku:** isi BB, TB, umur → hitung target kalori
5. **Tab 💡 Tips:** baca tips sehat

### Menjalankan Lokal:
```bash
git clone https://github.com/[username]/[nama-repo].git
cd [nama-repo]
# Buka index.html di browser
