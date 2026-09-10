// ============================================================
// بوصلة الهاكثونات والمعسكرات — بيانات وهمية قابلة للاستبدال
// عدّل المصفوفة OPPORTUNITIES لإضافة أو تحديث الفرص الفعلية.
// ============================================================

const CATEGORIES = [
  "ذكاء اصطناعي",
  "علم البيانات",
  "أمن سيبراني",
  "تطوير ويب",
  "تصميم UI/UX",
];

const STATUSES = ["متاح للتسجيل", "قادم", "انتهى"];

const STATUS_STYLES = {
  "متاح للتسجيل": "bg-teal-500/15 text-teal-400",
  "قادم": "bg-gold-500/15 text-gold-400",
  "انتهى": "bg-white/5 text-sand/40",
};

const CATEGORY_STYLES = {
  "ذكاء اصطناعي": "border-teal-500/40 text-teal-400",
  "علم البيانات": "border-gold-500/40 text-gold-400",
  "أمن سيبراني": "border-red-400/30 text-red-300",
  "تطوير ويب": "border-blue-400/30 text-blue-300",
  "تصميم UI/UX": "border-pink-400/30 text-pink-300",
};

const OPPORTUNITIES = [
  {
    id: 1,
    title: "هاكاثون البيانات الوطني",
    organizer: "الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)",
    city: "الرياض",
    category: "علم البيانات",
    status: "متاح للتسجيل",
    date: "5–7 نوفمبر 2026",
    description: "48 ساعة لبناء حلول تعتمد على البيانات المفتوحة لحل تحديات حكومية حقيقية.",
    link: "#",
  },
  {
    id: 2,
    title: "معسكر تأسيس الذكاء الاصطناعي",
    organizer: "جامعة الأمير سطام بن عبدالعزيز",
    city: "الخرج",
    category: "ذكاء اصطناعي",
    status: "قادم",
    date: "يبدأ 1 ديسمبر 2026",
    description: "معسكر مكثف لمدة أسبوعين يغطي أساسيات التعلم الآلي وبناء أول نموذج تنبؤي.",
    link: "#",
  },
  {
    id: 3,
    title: "هاكاثون الأمن السيبراني للطلاب",
    organizer: "هيئة الأمن السيبراني",
    city: "عن بُعد",
    category: "أمن سيبراني",
    status: "متاح للتسجيل",
    date: "20–21 أكتوبر 2026",
    description: "تحديات CTF جماعية لاختبار مهارات كشف الثغرات والاستجابة للحوادث.",
    link: "#",
  },
  {
    id: 4,
    title: "معسكر تطوير الويب الشامل",
    organizer: "مبادرة كودرز",
    city: "جدة",
    category: "تطوير ويب",
    status: "متاح للتسجيل",
    date: "10–24 أكتوبر 2026",
    description: "من الصفر إلى نشر مشروع كامل باستخدام JavaScript الحديثة وواجهات برمجية.",
    link: "#",
  },
  {
    id: 5,
    title: "هاكاثون تصميم التجربة الرقمية",
    organizer: "مركز التصميم السعودي",
    city: "الرياض",
    category: "تصميم UI/UX",
    status: "قادم",
    date: "15 نوفمبر 2026",
    description: "فرق مشتركة من مصممين ومطورين لإعادة تصور خدمة رقمية حكومية خلال يومين.",
    link: "#",
  },
  {
    id: 6,
    title: "تحدي نماذج اللغة الكبيرة",
    organizer: "نادي الذكاء الاصطناعي بجامعة الملك سعود",
    city: "الرياض",
    category: "ذكاء اصطناعي",
    status: "انتهى",
    date: "3–4 سبتمبر 2026",
    description: "بناء تطبيقات مبنية على نماذج اللغة الكبيرة مع تركيز على الأمان والموثوقية.",
    link: "#",
  },
  {
    id: 7,
    title: "معسكر تحليل البيانات للمبتدئين",
    organizer: "منصة تعلّم",
    city: "عن بُعد",
    category: "علم البيانات",
    status: "متاح للتسجيل",
    date: "يبدأ 12 أكتوبر 2026",
    description: "مسار عملي لتعلم بايثون وتحليل البيانات وبناء لوحات معلومات تفاعلية.",
    link: "#",
  },
  {
    id: 8,
    title: "هاكاثون الخرج التقني السنوي",
    organizer: "غرفة الخرج التجارية",
    city: "الخرج",
    category: "تطوير ويب",
    status: "قادم",
    date: "8–9 يناير 2027",
    description: "حلول رقمية للمشاريع الصغيرة والمتوسطة في المحافظة بالتعاون مع رواد أعمال محليين.",
    link: "#",
  },
];

// ------------------------------------------------------------
// الحالة الحالية للفلاتر
// ------------------------------------------------------------
const state = {
  search: "",
  city: "all",
  category: "all",
  status: "all",
};

// ------------------------------------------------------------
// عناصر DOM
// ------------------------------------------------------------
const cardsGrid = document.getElementById("cards-grid");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const cityFiltersEl = document.getElementById("city-filters");
const categoryFilterEl = document.getElementById("category-filter");
const statusFilterEl = document.getElementById("status-filter");
const resetBtn = document.getElementById("reset-filters");
const heroStats = document.getElementById("hero-stats");

// ------------------------------------------------------------
// بناء عناصر الفلاتر ديناميكيًا من البيانات
// ------------------------------------------------------------
function buildCityFilters() {
  const cities = ["all", ...new Set(OPPORTUNITIES.map((o) => o.city))];
  cityFiltersEl.innerHTML = cities
    .map((city) => {
      const label = city === "all" ? "كل المدن" : city;
      return `<button data-city="${city}"
        class="city-btn shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-sm text-sand/70 hover:border-teal-500/40 transition-colors"
        aria-pressed="${city === "all"}">${label}</button>`;
    })
    .join("");
}

function buildSelectOptions() {
  CATEGORIES.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilterEl.appendChild(opt);
  });
  STATUSES.forEach((st) => {
    const opt = document.createElement("option");
    opt.value = st;
    opt.textContent = st;
    statusFilterEl.appendChild(opt);
  });
}

function buildHeroStats() {
  const cities = new Set(OPPORTUNITIES.map((o) => o.city)).size;
  const open = OPPORTUNITIES.filter((o) => o.status === "متاح للتسجيل").length;
  heroStats.innerHTML = `
    <span>${OPPORTUNITIES.length} فرصة</span>
    <span class="text-sand/20">•</span>
    <span>${cities} مدن</span>
    <span class="text-sand/20">•</span>
    <span>${open} متاح الآن</span>
  `;
}

// ------------------------------------------------------------
// منطق الفلترة
// ------------------------------------------------------------
function getFilteredOpportunities() {
  const q = state.search.trim().toLowerCase();
  return OPPORTUNITIES.filter((o) => {
    const matchesSearch =
      !q ||
      o.title.toLowerCase().includes(q) ||
      o.organizer.toLowerCase().includes(q);
    const matchesCity = state.city === "all" || o.city === state.city;
    const matchesCategory =
      state.category === "all" || o.category === state.category;
    const matchesStatus = state.status === "all" || o.status === state.status;
    return matchesSearch && matchesCity && matchesCategory && matchesStatus;
  });
}

// ------------------------------------------------------------
// الرسم (Render)
// ------------------------------------------------------------
function renderCard(o) {
  const statusClass = STATUS_STYLES[o.status] || "bg-white/5 text-sand/50";
  const categoryClass = CATEGORY_STYLES[o.category] || "border-white/20 text-sand/60";
  const isEnded = o.status === "انتهى";

  return `
    <article class="opp-card p-5 flex flex-col">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryClass}">${o.category}</span>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusClass}">${o.status}</span>
      </div>
      <h3 class="font-display font-bold text-lg text-sand mb-1 leading-snug">${o.title}</h3>
      <p class="text-sand/50 text-sm mb-3">${o.organizer}</p>
      <p class="text-sand/70 text-sm leading-relaxed mb-4 flex-1">${o.description}</p>
      <div class="flex items-center gap-4 text-xs text-sand/45 font-mono mb-4">
        <span>📍 ${o.city}</span>
        <span>🗓 ${o.date}</span>
      </div>
      <a href="${o.link}"
        class="text-center rounded-lg py-2.5 font-semibold text-sm transition-colors
        ${isEnded
          ? "bg-white/5 text-sand/30 pointer-events-none"
          : "bg-teal-500 text-navy-950 hover:bg-teal-400"}">
        ${isEnded ? "انتهى التسجيل" : "سجّل الآن"}
      </a>
    </article>
  `;
}

function render() {
  const filtered = getFilteredOpportunities();

  cardsGrid.innerHTML = filtered.map(renderCard).join("");
  resultsCount.textContent = `${filtered.length} من ${OPPORTUNITIES.length} فرصة`;

  const showEmpty = filtered.length === 0;
  emptyState.classList.toggle("hidden", !showEmpty);
  cardsGrid.classList.toggle("hidden", showEmpty);
}

// ------------------------------------------------------------
// ربط الأحداث
// ------------------------------------------------------------
function bindEvents() {
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });

  cityFiltersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".city-btn");
    if (!btn) return;
    state.city = btn.dataset.city;

    cityFiltersEl.querySelectorAll(".city-btn").forEach((b) => {
      const active = b === btn;
      b.setAttribute("aria-pressed", active);
      b.classList.toggle("bg-teal-500", active);
      b.classList.toggle("text-navy-950", active);
      b.classList.toggle("border-teal-500", active);
      b.classList.toggle("text-sand/70", !active);
    });

    render();
  });

  categoryFilterEl.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  statusFilterEl.addEventListener("change", (e) => {
    state.status = e.target.value;
    render();
  });

  resetBtn.addEventListener("click", () => {
    state.search = "";
    state.city = "all";
    state.category = "all";
    state.status = "all";

    searchInput.value = "";
    categoryFilterEl.value = "all";
    statusFilterEl.value = "all";
    cityFiltersEl
      .querySelectorAll(".city-btn")
      .forEach((b) => b.dispatchEvent(new Event("noop")));
    cityFiltersEl.querySelectorAll(".city-btn").forEach((b, i) => {
      const active = b.dataset.city === "all";
      b.setAttribute("aria-pressed", active);
      b.classList.toggle("bg-teal-500", active);
      b.classList.toggle("text-navy-950", active);
      b.classList.toggle("border-teal-500", active);
      b.classList.toggle("text-sand/70", !active);
    });

    render();
  });
}

// ------------------------------------------------------------
// لوحة تحليل البيانات (Chart.js) — تُبنى من نفس OPPORTUNITIES
// ------------------------------------------------------------
const CHART_PALETTE = ["#2BB3A3", "#C89B3C", "#4FCABB", "#E7CE93", "#5B7FA6", "#8FA3BE"];

function countBy(key) {
  const counts = {};
  OPPORTUNITIES.forEach((o) => {
    counts[o[key]] = (counts[o[key]] || 0) + 1;
  });
  return counts;
}

function renderAnalytics() {
  if (typeof Chart === "undefined") return; // لو ما اتحمّلت مكتبة Chart.js

  Chart.defaults.color = "#A9B7CB";
  Chart.defaults.font.family = "IBM Plex Sans Arabic, sans-serif";

  // رسم: عدد الفرص حسب المدينة
  const cityCounts = countBy("city");
  new Chart(document.getElementById("chart-by-city"), {
    type: "bar",
    data: {
      labels: Object.keys(cityCounts),
      datasets: [
        {
          data: Object.values(cityCounts),
          backgroundColor: "#2BB3A3",
          borderRadius: 6,
          maxBarThickness: 40,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: "rgba(255,255,255,0.06)" } },
      },
    },
  });

  // رسم: توزيع الفرص حسب المجال
  const categoryCounts = countBy("category");
  new Chart(document.getElementById("chart-by-category"), {
    type: "doughnut",
    data: {
      labels: Object.keys(categoryCounts),
      datasets: [
        {
          data: Object.values(categoryCounts),
          backgroundColor: CHART_PALETTE,
          borderColor: "#0F1E33",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: { boxWidth: 12, padding: 14, font: { size: 11 } },
        },
      },
    },
  });
}

// ------------------------------------------------------------
// التهيئة
// ------------------------------------------------------------
function init() {
  buildCityFilters();
  buildSelectOptions();
  buildHeroStats();
  bindEvents();
  render();
  renderAnalytics();

  // تفعيل حالة الزر النشط الافتراضي (كل المدن)
  const allBtn = cityFiltersEl.querySelector('[data-city="all"]');
  if (allBtn) {
    allBtn.classList.add("bg-teal-500", "text-navy-950", "border-teal-500");
    allBtn.classList.remove("text-sand/70");
  }
}

document.addEventListener("DOMContentLoaded", init);
