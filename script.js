/* --- Content Translation Dictionary --- */
const translations = {
  en: {
    title: "Naor Barazani",
    subtitle:
      "Full-Stack Developer (Technion Student) | Logic & Automation Specialist",
    cv: "View CV",
    cover: "Cover Letter",
    pdf: "Download PDF",
    dir: "ltr",
  },
  he: {
    title: "נאור ברזני",
    subtitle: "מועמד לתוכנית KickstartX | xEngineer",
    cv: "קורות חיים",
    cover: "מכתב מקדים",
    pdf: "הורד PDF",
    dir: "rtl",
  },
};

/**
 * Handles language switching and UI direction updates
 * @param {string} lang - Selected language ('en' or 'he')
 */
function setLanguage(lang) {
  const t = translations[lang];

  // Update text content across the UI
  document.getElementById("text-title").textContent = t.title;
  document.getElementById("text-subtitle").textContent = t.subtitle;
  document.getElementById("text-cv").textContent = t.cv;
  document.getElementById("text-cover").textContent = t.cover;
  document.getElementById("text-pdf").textContent = t.pdf;

  // Toggle document direction
  document.documentElement.dir = t.dir;

  // Manage active state of language buttons
  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");
}
