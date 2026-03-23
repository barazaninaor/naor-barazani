/* --- Content Translation Dictionary --- */
const translations = {
  en: {
    title: "Naor Barazani",
    subtitle:
      "Full-Stack Developer Student @ Technion Continuing Education | Logic & Automation Specialist", // עדכון קטן לניסוח שדיברנו עליו
    cv: "Resume",
    cover: "Cover Letter",
    pdf: "Download PDF",
    dir: "ltr",
  },
  he: {
    title: "נאור ברזני",
    subtitle:
      "מפתח Full-Stack (סטודנט בטכניון - לימודי המשך) | מתמחה באוטומציה ופתרון בעיות לוגיות",
    cv: "קורות חיים",
    cover: "מכתב מקדים",
    pdf: "הורד PDF",
    dir: "rtl",
  },
};

function setLanguage(lang) {
  const t = translations[lang];

  // Update text content
  document.getElementById("text-title").textContent = t.title;
  document.getElementById("text-subtitle").textContent = t.subtitle;
  document.getElementById("text-cv").textContent = t.cv;
  document.getElementById("text-cover").textContent = t.cover;
  // document.getElementById("text-pdf").textContent = t.pdf; // בטל הערה אם החזרת את כפתור ה-PDF

  // ⬇️ הנה השדרוג הקריטי: מעדכן את הקישורים להוסיף את השפה לכתובת ⬇️
  document.getElementById("text-cv").href = `cv.html?lang=${lang}`;
  document.getElementById("text-cover").href = `coverletter.html?lang=${lang}`;

  // Toggle document direction
  document.documentElement.dir = t.dir;
  document.body.className = `index-page lang-${lang}`; // מוסיף קלאס לגוף הדף לעיצובים ספציפיים

  // Manage active state of language buttons
  document
    .querySelectorAll(".lang-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`btn-${lang}`).classList.add("active");
}

// קוד שירוץ אוטומטית כשהדף נטען
document.addEventListener("DOMContentLoaded", () => {
  // בדיקה אם יש פרמטר lang בכתובת ה-URL
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get("lang");

  // אם נמצאה שפה בכתובת והיא קיימת במילון שלנו, נפעיל אותה
  if (langFromUrl && translations[langFromUrl]) {
    setLanguage(langFromUrl);
  } else {
    // אם אין פרמטר, נשאר על עברית כברירת מחדל
    setLanguage("he");
  }
});
