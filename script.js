// ============================================================
// NUTRIMATE — Asisten Gizi Pelajar
// ============================================================

// ===== DATABASE MAKANAN (per 100g / per porsi standar) =====
const foodDB = [
  // Karbohidrat
  { name: "nasi putih", aliases: ["nasi", "rice"], cal: 180, protein: 4, carbs: 40, fat: 0.4, healthy: 5, category: "karbo" },
  { name: "nasi goreng", aliases: ["nasgor"], cal: 350, protein: 8, carbs: 45, fat: 15, healthy: 2, category: "karbo" },
  { name: "mie goreng", aliases: ["mie", "indomie"], cal: 380, protein: 8, carbs: 50, fat: 16, healthy: 2, category: "karbo" },
  { name: "mie ayam", aliases: [], cal: 420, protein: 15, carbs: 55, fat: 14, healthy: 4, category: "karbo" },
  { name: "roti tawar", aliases: ["roti"], cal: 80, protein: 3, carbs: 15, fat: 1, healthy: 6, category: "karbo" },
  { name: "kentang", aliases: ["french fries"], cal: 150, protein: 3, carbs: 30, fat: 4, healthy: 4, category: "karbo" },
  { name: "ubi", aliases: ["ubi jalar"], cal: 120, protein: 2, carbs: 28, fat: 0.2, healthy: 8, category: "karbo" },
  { name: "oatmeal", aliases: ["oat"], cal: 150, protein: 5, carbs: 27, fat: 3, healthy: 9, category: "karbo" },
  { name: "bubur ayam", aliases: ["bubur"], cal: 280, protein: 12, carbs: 38, fat: 9, healthy: 6, category: "karbo" },
  { name: "bakso", aliases: [], cal: 320, protein: 14, carbs: 40, fat: 12, healthy: 3, category: "karbo" },
  { name: "soto ayam", aliases: ["soto"], cal: 300, protein: 18, carbs: 30, fat: 12, healthy: 6, category: "karbo" },
  { name: "nasi padang", aliases: ["padang"], cal: 650, protein: 25, carbs: 70, fat: 28, healthy: 3, category: "karbo" },

  // Protein
  { name: "telur", aliases: ["egg", "telur rebus", "telur goreng"], cal: 78, protein: 6, carbs: 0.6, fat: 5, healthy: 8, category: "protein" },
  { name: "ayam goreng", aliases: ["ayam"], cal: 250, protein: 25, carbs: 5, fat: 15, healthy: 4, category: "protein" },
  { name: "ayam bakar", aliases: [], cal: 200, protein: 28, carbs: 3, fat: 8, healthy: 7, category: "protein" },
  { name: "ikan", aliases: ["ikan goreng", "ikan bakar"], cal: 180, protein: 22, carbs: 0, fat: 9, healthy: 8, category: "protein" },
  { name: "tempe", aliases: [], cal: 100, protein: 10, carbs: 8, fat: 4, healthy: 8, category: "protein" },
  { name: "tahu", aliases: [], cal: 80, protein: 8, carbs: 2, fat: 5, healthy: 8, category: "protein" },
  { name: "daging sapi", aliases: ["daging", "sapi"], cal: 250, protein: 26, carbs: 0, fat: 16, healthy: 5, category: "protein" },
  { name: "susu", aliases: ["susu sapi", "milk"], cal: 120, protein: 8, carbs: 12, fat: 5, healthy: 8, category: "protein" },
  { name: "yogurt", aliases: [], cal: 100, protein: 5, carbs: 12, fat: 4, healthy: 9, category: "protein" },

  // Sayur & Buah
  { name: "bayam", aliases: ["sayur bayam"], cal: 25, protein: 3, carbs: 4, fat: 0.4, healthy: 10, category: "sayur" },
  { name: "brokoli", aliases: [], cal: 35, protein: 3, carbs: 7, fat: 0.4, healthy: 10, category: "sayur" },
  { name: "wortel", aliases: [], cal: 40, protein: 1, carbs: 10, fat: 0.2, healthy: 10, category: "sayur" },
  { name: "kangkung", aliases: [], cal: 30, protein: 2, carbs: 5, fat: 0.3, healthy: 10, category: "sayur" },
  { name: "kacang panjang", aliases: [], cal: 45, protein: 3, carbs: 8, fat: 0.2, healthy: 9, category: "sayur" },
  { name: "apel", aliases: [], cal: 95, protein: 0.5, carbs: 25, fat: 0.3, healthy: 10, category: "buah" },
  { name: "pisang", aliases: ["banana"], cal: 105, protein: 1, carbs: 27, fat: 0.4, healthy: 9, category: "buah" },
  { name: "jeruk", aliases: ["orange"], cal: 62, protein: 1, carbs: 15, fat: 0.2, healthy: 10, category: "buah" },
  { name: "mangga", aliases: [], cal: 99, protein: 1, carbs: 25, fat: 0.6, healthy: 8, category: "buah" },
  { name: "semangka", aliases: [], cal: 46, protein: 1, carbs: 12, fat: 0.2, healthy: 9, category: "buah" },
  { name: "alpukat", aliases: [], cal: 160, protein: 2, carbs: 9, fat: 15, healthy: 8, category: "buah" },

  // Minuman
  { name: "es teh manis", aliases: ["es teh", "teh manis"], cal: 110, protein: 0, carbs: 28, fat: 0, healthy: 2, category: "minuman" },
  { name: "teh tanpa gula", aliases: ["teh"], cal: 2, protein: 0, carbs: 0.5, fat: 0, healthy: 9, category: "minuman" },
  { name: "air putih", aliases: ["air"], cal: 0, protein: 0, carbs: 0, fat: 0, healthy: 10, category: "minuman" },
  { name: "kopi susu", aliases: ["kopi", "latte"], cal: 150, protein: 4, carbs: 20, fat: 6, healthy: 4, category: "minuman" },
  { name: "jus jeruk", aliases: ["jus"], cal: 110, protein: 1, carbs: 26, fat: 0.4, healthy: 7, category: "minuman" },
  { name: "soda", aliases: ["coca cola", "cola", "coke"], cal: 140, protein: 0, carbs: 39, fat: 0, healthy: 1, category: "minuman" },

  // Snack & Junk
  { name: "gorengan", aliases: ["bakwan", "tahu goreng", "pisang goreng"], cal: 200, protein: 3, carbs: 20, fat: 12, healthy: 2, category: "snack" },
  { name: "keripik", aliases: ["chips", "keripik kentang"], cal: 160, protein: 2, carbs: 15, fat: 10, healthy: 2, category: "snack" },
  { name: "cokelat", aliases: ["chocolate"], cal: 150, protein: 2, carbs: 17, fat: 9, healthy: 4, category: "snack" },
  { name: "es krim", aliases: ["ice cream"], cal: 200, protein: 3, carbs: 25, fat: 10, healthy: 3, category: "snack" },
  { name: "kue", aliases: ["cake", "bolu"], cal: 180, protein: 2, carbs: 25, fat: 8, healthy: 3, category: "snack" },
  { name: "kacang", aliases: ["kacang almond", "kacang tanah"], cal: 170, protein: 6, carbs: 6, fat: 14, healthy: 8, category: "snack" },
];

// ===== STATE =====
let selectedFoods = [];
let currentMealType = "pagi";

// ===== NAVIGASI TAB =====
const navButtons = document.querySelectorAll(".nav-btn");
const tabContents = document.querySelectorAll(".tab-content");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((t) => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    if (btn.dataset.tab === "today") renderToday();
  });
});

// ===== HELPER: CARI MAKANAN =====
function findFood(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return foodDB.filter((f) => {
    if (f.name.includes(q)) return true;
    if (f.aliases.some((a) => a.includes(q) || q.includes(a))) return true;
    return false;
  });
}

// ===== SEARCH =====
const foodInput = document.getElementById("foodInput");
const searchBtn = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");
const selectedFoodsEl = document.getElementById("selectedFoods");
const totalPreview = document.getElementById("totalPreview");

function showSuggestions(query) {
  suggestions.innerHTML = "";
  if (!query.trim()) return;

  const results = findFood(query).slice(0, 6);

  if (results.length === 0) {
    // Fuzzy: cari yang mengandung huruf pertama
    const fuzzy = foodDB.filter((f) => f.name.includes(query.toLowerCase().slice(0, 2))).slice(0, 4);
    if (fuzzy.length > 0) {
      fuzzy.forEach((food) => createSuggestionChip(food));
    } else {
      suggestions.innerHTML = '<p style="font-size:0.82rem;color:#999;">Makanan tidak ditemukan. Coba kata lain ya!</p>';
    }
    return;
  }

  results.forEach((food) => createSuggestionChip(food));
}

function createSuggestionChip(food) {
  const chip = document.createElement("button");
  chip.className = "suggestion-chip";
  chip.textContent = `${food.name} (${food.cal} kal)`;
  chip.addEventListener("click", () => addFood(food));
  suggestions.appendChild(chip);
}

foodInput.addEventListener("input", () => showSuggestions(foodInput.value));
searchBtn.addEventListener("click", () => showSuggestions(foodInput.value));
foodInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") showSuggestions(foodInput.value);
});

// ===== TAMBAH MAKANAN =====
function addFood(food) {
  selectedFoods.push({ ...food });
  foodInput.value = "";
  suggestions.innerHTML = "";
  renderSelectedFoods();
}

function renderSelectedFoods() {
  if (selectedFoods.length === 0) {
    selectedFoodsEl.innerHTML = '<p class="placeholder">Belum ada makanan dipilih. Ketik & klik dari saran di atas 👆</p>';
    totalPreview.textContent = "Total: 0 kalori";
    return;
  }

  selectedFoodsEl.innerHTML = "";
  let totalCal = 0;

  selectedFoods.forEach((food, index) => {
    totalCal += food.cal;
    const item = document.createElement("div");
    item.className = "food-item";
    item.innerHTML = `
      <div>
        <div class="food-name">${food.name}</div>
        <div class="food-detail">${food.cal} kal • Protein ${food.protein}g • Karbo ${food.carbs}g • Lemak ${food.fat}g</div>
      </div>
      <button class="remove-btn" data-index="${index}">✕</button>
    `;
    selectedFoodsEl.appendChild(item);
  });

  totalPreview.textContent = `Total: ${totalCal} kalori`;

  selectedFoodsEl.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedFoods.splice(parseInt(btn.dataset.index), 1);
      renderSelectedFoods();
    });
  });
}

// ===== PILIH WAKTU MAKAN =====
document.querySelectorAll(".meal-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".meal-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentMealType = chip.dataset.meal;
  });
});

// ===== SIMPAN MAKAN =====
document.getElementById("saveMeal").addEventListener("click", () => {
  if (selectedFoods.length === 0) {
    showModal("Belum Ada Makanan", "Pilih makanan dulu ya! Ketik nama makanan di kotak pencarian, lalu klik dari saran. 😊");
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const log = JSON.parse(localStorage.getItem("nutrimate_log") || "{}");

  if (!log[today]) log[today] = [];
  log[today].push({
    mealType: currentMealType,
    foods: selectedFoods,
    time: new Date().toISOString(),
  });

  localStorage.setItem("nutrimate_log", JSON.stringify(log));

  showModal("✅ Berhasil Dicatat!", `${selectedFoods.length} makanan sudah masuk ke catatan "${currentMealType}". Cek di tab 📊 Hari Ini ya!`);

  selectedFoods = [];
  renderSelectedFoods();
});

// ===== RENDER HARI INI =====
function renderToday() {
  const today = new Date().toISOString().slice(0, 10);
  const log = JSON.parse(localStorage.getItem("nutrimate_log") || "{}");
  const meals = log[today] || [];

  const scoreCard = document.getElementById("scoreCard");
  const nutritionGrid = document.getElementById("nutritionGrid");
  const mealList = document.getElementById("mealList");
  const analysisBox = document.getElementById("analysisBox");

  if (meals.length === 0) {
    scoreCard.innerHTML = '<p class="placeholder">Belum ada makanan dicatat hari ini. Yuk catat dulu di tab 🍽️!</p>';
    nutritionGrid.innerHTML = "";
    mealList.innerHTML = "";
    analysisBox.classList.remove("show");
    return;
  }

  // Hitung total gizi
  let totalCal = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0, totalHealthy = 0, foodCount = 0;

  meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalCal += food.cal;
      totalProtein += food.protein;
      totalCarbs += food.carbs;
      totalFat += food.fat;
      totalHealthy += food.healthy;
      foodCount++;
    });
  });

  const avgHealthy = totalHealthy / foodCount;

  // Skor kesehatan (0-100)
  let score = Math.min(100, Math.round(avgHealthy * 10));
  if (totalCal > 2500) score -= 15;
  if (totalCal < 800) score -= 10;
  if (totalProtein < 30) score -= 10;
  score = Math.max(0, Math.min(100, score));

  // Tampilkan skor
  let scoreColor, scoreEmoji, scoreText;
  if (score >= 75) {
    scoreColor = "linear-gradient(135deg, #4caf50, #8bc34a)";
    scoreEmoji = "🌟";
    scoreText = "Keren! Pola makanmu sehat banget hari ini!";
  } else if (score >= 50) {
    scoreColor = "linear-gradient(135deg, #ff9800, #ffc107)";
    scoreEmoji = "😐";
    scoreText = "Lumayan, tapi masih bisa lebih baik. Coba tambah sayur & buah!";
  } else {
    scoreColor = "linear-gradient(135deg, #f44336, #ff5722)";
    scoreEmoji = "😟";
    scoreText = "Hmm, pola makanmu kurang sehat. Yuk perbaiki besok!";
  }

  scoreCard.innerHTML = `
    <div class="score-circle" style="background: ${scoreColor};">
      <div class="score-num">${score}</div>
      <div class="score-label">/ 100</div>
    </div>
    <div class="score-emoji">${scoreEmoji}</div>
    <div class="score-text">${scoreText}</div>
  `;

  // Grid gizi
  nutritionGrid.innerHTML = `
    <div class="nutrition-card">
      <div class="label">Kalori</div>
      <div class="value">${Math.round(totalCal)}</div>
      <div class="unit">kkal</div>
    </div>
    <div class="nutrition-card">
      <div class="label">Protein</div>
      <div class="value">${Math.round(totalProtein)}</div>
      <div class="unit">gram</div>
    </div>
    <div class="nutrition-card">
      <div class="label">Karbo</div>
      <div class="value">${Math.round(totalCarbs)}</div>
      <div class="unit">gram</div>
    </div>
    <div class="nutrition-card">
      <div class="label">Lemak</div>
      <div class="value">${Math.round(totalFat)}</div>
      <div class="unit">gram</div>
    </div>
  `;

  // Daftar makan per waktu
  const mealNames = { pagi: "🌅 Sarapan", siang: "☀️ Makan Siang", malam: "🌙 Makan Malam", snack: "🍿 Snack" };
  mealList.innerHTML = "";

  Object.keys(mealNames).forEach((type) => {
    const typeMeals = meals.filter((m) => m.mealType === type);
    if (typeMeals.length === 0) return;

    const totalTypeCal = typeMeals.reduce((sum, m) => sum + m.foods.reduce((s, f) => s + f.cal, 0), 0);

    let rows = "";
    typeMeals.forEach((m) => {
      m.foods.forEach((f) => {
        rows += `<div class="food-row"><span>${f.name}</span><span>${f.cal} kal</span></div>`;
      });
    });

    const section = document.createElement("div");
    section.className = "meal-section";
    section.innerHTML = `
      <h4>${mealNames[type]} <span class="cal-badge">${totalTypeCal} kal</span></h4>
      ${rows}
    `;
    mealList.appendChild(section);
  });

  // Analisis
  let analysisHTML = "";
  let analysisClass = "";

  const issues = [];
  if (totalCal > 2500) issues.push("kalori terlalu banyak");
  if (totalCal < 1200) issues.push("kalori terlalu sedikit");
  if (totalProtein < 40) issues.push("kurang protein");
  if (totalCarbs < 100) issues.push("kurang karbohidrat");
  if (totalFat > 80) issues.push("lemak terlalu banyak");

  const hasSayur = meals.some((m) => m.foods.some((f) => f.category === "sayur"));
  const hasBuah = meals.some((m) => m.foods.some((f) => f.category === "buah"));
  if (!hasSayur) issues.push("belum ada sayur");
  if (!hasBuah) issues.push("belum ada buah");

  if (issues.length === 0) {
    analysisHTML = `<strong>🌟 Analisis NutriMate:</strong> Pola makanmu hari ini <b>sudah bagus</b>! Kalori, protein, karbo, dan lemak seimbang. Terus pertahankan ya! 💪`;
    analysisClass = "good";
  } else if (issues.length <= 2) {
    analysisHTML = `<strong>💡 Analisis NutriMate:</strong> Pola makanmu <b>cukup baik</b>, tapi ada yang bisa diperbaiki: ${issues.join(", ")}. Coba tambah variasi makanan besok ya!`;
    analysisClass = "warn";
  } else {
    analysisHTML = `<strong>😟 Analisis NutriMate:</strong> Ada beberapa hal yang perlu diperbaiki: ${issues.join(", ")}. Jangan khawatir, besok bisa lebih baik! Coba ikuti tips di tab 💡.`;
    analysisClass = "bad";
  }

  analysisBox.className = `analysis-box show ${analysisClass}`;
  analysisBox.innerHTML = analysisHTML;
}

// ===== TARGET KALORI =====
document.getElementById("calcTarget").addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activity = parseFloat(document.getElementById("activity").value);

  if (!weight || !height || !age) {
    showModal("Data Belum Lengkap", "Isi berat, tinggi, dan umur dulu ya! 😊");
    return;
  }

  // Rumus Mifflin-St Jeor
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = Math.round(bmr * activity);
  const target = tdee;
  const minCal = Math.round(tdee * 0.85);
  const maxCal = Math.round(tdee * 1.15);

  const result = document.getElementById("targetResult");
  result.classList.add("show");
  result.innerHTML = `
    <div class="label">Target Kalori Harianmu</div>
    <div class="big-num">${target} kkal</div>
    <div class="label">Rentang sehat: ${minCal} - ${maxCal} kkal</div>
    <div class="note">
      Dihitung pakai rumus Mifflin-St Jeor.<br>
      Ini estimasi, bukan angka mutlak. Konsultasi ahli gizi kalau perlu.
    </div>
  `;

  // Simpan ke localStorage
  localStorage.setItem("nutrimate_target", target.toString());
});

// ===== MODAL =====
const modal = document.getElementById("suggestionModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

function showModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.classList.add("show");
}

modalClose.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

// ===== INIT =====
renderSelectedFoods();
