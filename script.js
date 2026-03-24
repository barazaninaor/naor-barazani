/* --- Content Translation Dictionary --- */
const translations = {
  en: {
    title: "Naor Barazani",
    subtitle:
      "Full-Stack Developer Student @ Technion Continuing Education | Logic & Automation Specialist",
    cv: "Resume",
    cover: "Cover Letter",
    dir: "ltr",
  },
  he: {
    title: "נאור ברזני",
    subtitle:
      "מפתח Full-Stack (סטודנט בטכניון - לימודי המשך) | מתמחה באוטומציה ופתרון בעיות לוגיות",
    cv: "קורות חיים",
    cover: "מכתב מקדים",
    dir: "rtl",
  },
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // 1. שמירה בזיכרון לטווח ארוך
  localStorage.setItem("preferredLang", lang);

  // 2. עדכון טקסטים בצורה בטוחה
  const updateIfFound = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  updateIfFound("text-title", t.title);
  updateIfFound("text-subtitle", t.subtitle);
  updateIfFound("text-cv", t.cv);
  updateIfFound("text-cover", t.cover);

  // 3. עדכון לינקים למעבר בין דפים
  const cvLink = document.getElementById("text-cv");
  const coverLink = document.getElementById("text-cover");
  if (cvLink) cvLink.href = `cv.html?lang=${lang}`;
  if (coverLink) coverLink.href = `coverletter.html?lang=${lang}`;

  // 4. עדכון הגדרות מסמך ועיצוב
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;
  document.body.className = `index-page lang-${lang}`;

  // 5. עדכון מצב כפתורים (Active)
  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  // 6. ניקוי ה-URL מהפרמטר המציק (?lang=...) בלי לרענן את הדף
  window.history.replaceState({}, document.title, window.location.pathname);
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get("lang");
  const savedLang = localStorage.getItem("preferredLang");

  // סדר עדיפויות: URL -> זיכרון -> עברית
  let finalLang = langFromUrl || savedLang || "he";

  setLanguage(finalLang);
});
