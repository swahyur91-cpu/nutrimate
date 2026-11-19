# 🍎 NutriMate — Asisten Gizi & Pola Makan Pelajar

> Solusi digital berbantuan AI untuk membantu pelajar mencatat makanan, menganalisis gizi, memperbaiki pola makan, dan belajar gizi lewat bacaan bersuara — semuanya dalam satu website ringan.

---

## 📌 Judul & Deskripsi

**Nama Produk:** NutriMate

### Latar Belakang Masalah

Banyak pelajar Indonesia mengalami **masalah gizi ganda**:
- Di satu sisi **kekurangan zat gizi** (anemia, kurang protein, kurang sayur)
- Di sisi lain **kelebihan kalori** dari junk food, gorengan, dan minuman manis

Penyebab utamanya: **pelajar tidak tahu kandungan gizi** dari makanan yang mereka konsumsi sehari-hari. Label gizi di kemasan sulit dibaca, dan informasi gizi di internet tersebar tidak terstruktur.

### Solusi

**NutriMate** adalah asisten gizi digital berbasis web yang membantu pelajar:

1. 🍽️ **Mencatat makanan** harian dengan mudah (ketik nama makanan → autocomplete)
2. 📊 **Melihat analisis gizi** otomatis — kalori, protein, karbohidrat, lemak
3. ⭐ **Mendapat skor kesehatan** 0–100 dari pola makan hari itu
4. 💡 **Menerima saran perbaikan** otomatis (misal: "kurang sayur", "kalori terlalu banyak")
5. 🎯 **Menghitung target kalori personal** berdasarkan BB, TB, umur, dan aktivitas (rumus Mifflin-St Jeor)
6. 🔊 **Mendengar analisis & tips** lewat fitur Text-to-Speech (aksesibilitas)
7. 📖 **Membaca 8 artikel gizi** yang juga bisa dibacakan dengan suara

### Target Pengguna

Pelajar SMA (13–18 tahun) yang ingin **sadar gizi tanpa ribet** — cukup ketik makanan, langsung tahu gizinya.

### Link Website (Live)

🔗 **https://swahyur91-cpu.github.io/nutrimate/**

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| Bahasa | HTML5, CSS3, JavaScript (ES6) |
| Framework | ❌ Tidak ada (vanilla) |
| Library eksternal | ❌ Tidak ada |
| Web API | **Web Speech API** (`speechSynthesis`) untuk Text-to-Speech |
| Penyimpanan data | `localStorage` (privat, di browser user) |
| Metode AI | Rule-based scoring & keyword matching |
| Platform publikasi | **GitHub Pages** |
| Responsif | ✅ Mobile-friendly (media query) |

### Fitur Suara (Text-to-Speech)

NutriMate membacakan:
- 🔊 **Analisis gizi** di tab Hari Ini
- 🔊 **Tips sehat** per kartu di tab Tips
- 🔊 **Artikel gizi** penuh di tab Bacaan
- 🔊 **Konfirmasi** saat simpan makanan & hitung target

**Browser support TTS:**
| Browser | TTS |
|---------|-----|
| Chrome / Edge | ✅ |
| Safari | ✅ |
| Firefox | ✅ |
| Opera | ✅ |

> 💡 Untuk pengalaman terbaik, gunakan **Chrome** dengan voice Bahasa Indonesia terinstall (Settings → Languages → Add Indonesian).

---

## 🤖 Pemanfaatan AI (AI Usage Disclosure)

### Alat AI yang Digunakan
- **Claude (Anthropic)** — scaffolding kode, debugging, riset struktur
- **ChatGPT / Gemini** — riset ide & validasi konten gizi

### Contoh Prompt Utama

1. **Riset ide:**
   > "Berikan 5 ide solusi digital berbantuan AI untuk membantu pelajar SMA sadar gizi, berbasis HTML/CSS/JS murni, cocok untuk lomba 8 hari."

2. **Scaffolding:**
   > "Buatkan kerangka web pencatat makanan dengan autocomplete, analisis gizi, skor kesehatan, dan localStorage. Tanpa framework."

3. **Debugging:**
   > "localStorage saya hilang saat refresh. Bagaimana cara simpan yang benar?"

4. **Fitur suara:**
   > "Bagaimana cara pakai Web Speech API untuk membacakan teks dalam Bahasa Indonesia?"

### Penyesuaian / Perbaikan Mandiri

| Bagian | Saran AI | Modifikasi Tim |
|--------|----------|----------------|
| Database makanan | 10 item | **45+ makanan Indonesia** (riset dari label gizi Kemkes) |
| Skor kesehatan | Tidak ada | **Algoritma skor 0–100** (desain tim sendiri) |
| Target kalori | Tidak disarankan | **Rumus Mifflin-St Jeor** (ide tim) |
| Analisis otomatis | Tidak ada | **Rule-based** dengan 7 kategori masalah gizi |
| Tips sehat | Tidak ada | **6 kartu tips** (riset tim) |
| Autocomplete | Exact match | **Fuzzy matching + alias** (misal "nasgor" → nasi goreng) |
| **Fitur suara (TTS)** | Tidak disarankan | **Ide orisinal tim** untuk aksesibilitas |
| **Artikel bacaan** | Tidak ada | **8 artikel gizi** (riset & tulis sendiri) |

> 📄 Detail lengkap interaksi dengan AI ada di file [`AI_LOGBOOK.md`](./AI_LOGBOOK.md).

---

## 📖 Panduan Penggunaan

### Untuk Pengguna Website

1. Buka link: **https://[username-github].github.io/[nama-repo]/**

2. **Tab 🍽️ Catat Makan:**
   - Ketik nama makanan (contoh: `nasi goreng`)
   - Klik saran yang muncul
   - Pilih waktu makan (pagi/siang/malam/snack)
   - Klik **💾 Simpan Makan**

3. **Tab 📊 Hari Ini:**
   - Lihat **skor kesehatan** (0–100)
   - Lihat **rincian gizi** (kalori, protein, karbo, lemak)
   - Baca **analisis otomatis**
   - Klik **🔊 Bacakan Analisis** untuk mendengar

4. **Tab 🎯 Targetku:**
   - Isi berat badan, tinggi, umur, jenis kelamin, aktivitas
   - Klik **🎯 Hitung Target Kalori**
   - Dapatkan target kalori harian personal

5. **Tab 💡 Tips Sehat:**
   - Baca 6 kartu tips
   - Klik **🔊** di tiap kartu untuk mendengar

6. **Tab 📖 Bacaan:**
   - Pilih dari 8 artikel gizi
   - Klik artikel → baca isinya
   - Klik **🔊 Bacakan Artikel** untuk mendengar

7. **Toggle Suara:**
   - Klik **🔊 Suara: ON** di navbar untuk on/off semua suara

### Menjalankan Secara Lokal

```bash
# 1. Clone repository
git clone https://github.com/[username]/[nama-repo].git

# 2. Masuk folder
cd [nama-repo]

# 3. Buka index.html di browser
# (double-click file, tidak butuh server)
