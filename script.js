const translations = {
  en: {
    subtitle: "Full-stack Software Engineer",
    download_cv: "Download CV",
    my_projects: "My Projects",
    my_github: "My Github",
    subtracker_title: "SubTracker - subscription payment manager",
    features: "Features:",
    technologies: "Technologies:",
    subtracker_f1: "Interactive dashboard",
    subtracker_f2: "Smart subscription management",
    subtracker_f3: "Intelligent notifications",
    subtracker_f4: "Google Calendar integration",
    subtracker_f5: "Budgeting & alerts",
    subtracker_f6: "Multi-language support",
    subtracker_f7: "PWA & mobile ready",
    subtracker_f8: "Secure authentication",
    snack_title: "Snack - chat application",
    snack_f1: "Real-time messaging",
    snack_f2: "Direct messaging",
    snack_f3: "File uploads",
    snack_f4: "Audio and video calls",
    browser_extensions: "Browser Extensions",
    fb_cal_title: "Facebook to Google Calendar Exporter",
    fb_cal_desc: "One-click export of Facebook events to Google Calendar",
    chatgpt_back_title: "ChatGPT - Back to Last Position",
    chatgpt_back_desc1: "If you type a message to ChatGPT, it scrolls the page to the bottom and you lose your reading position",
    chatgpt_back_desc2: "This extension adds a button to go back to that position",
    chatgpt_bookmark_title: "ChatGPT Bookmark Manager",
    chatgpt_bookmark_desc: "Bookmark chat messages and scroll to them",
    games_title: "Some classic games I coded for fun",
    colors_title: "16,777,216 colors - Color Space Flythrough",
    colors_desc: "An interactive WebGL2 flythrough of the complete RGB color space, rendered as a 256 × 256 × 256 lattice of colored spheres - one sphere for every one of the 16,777,216 (256³) colors a true-color display can show.",
    meta_title: "Kamil Kapsiak - Software Engineer",
    meta_description: "Full-stack Software Engineer specializing in TypeScript, Node.js, and React. Portfolio featuring projects like SubTracker and Snack."
  },
  pl: {
    subtitle: "Full-stack Software Engineer",
    download_cv: "Pobierz CV",
    my_projects: "Moje Projekty",
    my_github: "Mój Github",
    subtracker_title: "SubTracker - menedżer subskrypcji",
    features: "Funkcje:",
    technologies: "Technologie:",
    subtracker_f1: "Interaktywny panel",
    subtracker_f2: "Inteligentne zarządzanie subskrypcjami",
    subtracker_f3: "Powiadomienia",
    subtracker_f4: "Integracja z Kalendarzem Google",
    subtracker_f5: "Budżetowanie i alerty",
    subtracker_f6: "Obsługa wielu języków",
    subtracker_f7: "PWA i wsparcie urządzeń mobilnych",
    subtracker_f8: "Bezpieczne uwierzytelnianie",
    snack_title: "Snack - komunikator internetowy",
    snack_f1: "Wiadomości w czasie rzeczywistym",
    snack_f2: "Wiadomości bezpośrednie",
    snack_f3: "Przesyłanie plików",
    snack_f4: "Połączenia audio i wideo",
    browser_extensions: "Rozszerzenia do przeglądarek",
    fb_cal_title: "Facebook to Google Calendar Exporter",
    fb_cal_desc: "Eksport wydarzeń z Facebooka do Kalendarza Google jednym kliknięciem",
    chatgpt_back_title: "ChatGPT - Back to Last Position",
    chatgpt_back_desc1: "Po wysłaniu wiadomości do ChatGPT, strona przewija się na dół, przez co tracisz pozycję czytania",
    chatgpt_back_desc2: "To rozszerzenie dodaje przycisk powrotu do poprzedniej pozycji",
    chatgpt_bookmark_title: "ChatGPT Bookmark Manager",
    chatgpt_bookmark_desc: "Zapisuj wiadomości i przewijaj do nich",
    games_title: "Klasyczne gry, które napisałem dla zabawy",
    colors_title: "16 777 216 kolorów - Przelot przez przestrzeń barw",
    colors_desc: "Interaktywny przelot WebGL2 przez pełną przestrzeń kolorów RGB/HSL/HSV, wyrenderowaną jako siatka 256 × 256 × 256 kolorowych kul, albo cylinder - jedna kula dla każdego z 16 777 216 (256³) kolorów, jakie może wyświetlić ekran true-color.",
    meta_title: "Kamil Kapsiak - Portfolio | Full-stack Software Engineer",
    meta_description: "Portfolio Kamila Kapsiaka, Full-stack Software Engineera specjalizującego się w TypeScript, Node.js i React. Zobacz moje projekty: SubTracker i Snack."
  }
};

const flags = {
  pl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxMCI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjUiIHk9IjUiIGZpbGw9IiNkYzE0M2MiLz48L3N2Zz4=",
  en: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PGNsaXBQYXRoIGlkPSJzIj48cGF0aCBkPSJNMCwwIHYzMCBoNjAgdi0zMCB6Ii8+PC9jbGlwUGF0aD48cGF0aCBkPSJNMCwwIHYzMCBoNjAgdi0zMCB6IiBmaWxsPSIjMDEyMTY5Ii8+PHBhdGggZD0iTTAsMCBMNjAsMzAgTTYwLDAgTDAsMzAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2Ii8+PHBhdGggZD0iTTAsMCBMNjAsMzAgTTYwLDAgTDAsMzAiIHN0cm9rZT0iI0M4MTAyRSIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTMwLDAgdjMwIE0wLDE1IGg2MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTMwLDAgdjMwIE0wLDE1IGg2MCIgc3Ryb2tlPSIjQzgxMDJFIiBzdHJva2Utd2lkdGg9IjYiLz48L3N2Zz4="
};

let currentLang = localStorage.getItem('language') || 'en';

function updateContent() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.querySelector('span').textContent = currentLang.toUpperCase();
    toggleBtn.querySelector('img').src = flags[currentLang];
    toggleBtn.querySelector('img').alt = currentLang === 'pl' ? 'Polish' : 'English';
  }

  // Update meta tags for SEO
  document.title = translations[currentLang].meta_title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', translations[currentLang].meta_description);
  }
  const ogTitleTag = document.querySelector('meta[property="og:title"]');
  if (ogTitleTag) {
    ogTitleTag.setAttribute('content', translations[currentLang].meta_title);
  }
  const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
  if (ogDescriptionTag) {
    ogDescriptionTag.setAttribute('content', translations[currentLang].meta_description);
  }
  const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitleTag) {
    twitterTitleTag.setAttribute('content', translations[currentLang].meta_title);
  }
  const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescriptionTag) {
    twitterDescriptionTag.setAttribute('content', translations[currentLang].meta_description);
  }

  // Remove the non-flash style if it exists
  const earlyStyle = document.getElementById('early-hide');
  if (earlyStyle) {
    earlyStyle.remove();
    document.body.style.visibility = 'visible';
  }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'pl' : 'en';
  localStorage.setItem('language', currentLang);
  updateContent();
  // GA event tracking
  if (typeof gtag === 'function') {
    gtag('event', 'language_toggle', {
      'language': currentLang
    });
  }
});

// Initialize content
updateContent();

// Existing video hover logic
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});
