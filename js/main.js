/* =============================================
   MONTE BOOKS — main.js
   - Language switcher (RU / ME / EN)
   - Footer year
   ============================================= */

// ---------- Translations ----------

const i18n = {
  ru: {
    logoMonte:   'Monte',
    logoBooks:   'Books',
    navBooks:    'Книги',
    navAbout:    'О нас',
    navContacts: 'Контактная информация',

    book1Title:  'Название книги',
    book1Author: 'Имя Автора',
    book1Desc:   'Короткое описание книги. Несколько предложений о чём она и почему стоит её прочитать.',

    book2Title:  'Название книги',
    book2Author: 'Имя Автора',
    book2Desc:   'Короткое описание книги. Несколько предложений о чём она и почему стоит её прочитать.',

    book3Title:  'Название книги',
    book3Author: 'Имя Автора',
    book3Desc:   'Короткое описание книги. Несколько предложений о чём она и почему стоит её прочитать.',

    book4Title:  'Название книги',
    book4Author: 'Имя Автора',
    book4Desc:   'Короткое описание книги. Несколько предложений о чём она и почему стоит её прочитать.',

    aboutP1:     'Monte Books — независимое издательство, основанное с любовью к литературе и убеждением, что хорошая книга меняет жизнь. Мы работаем с авторами и текстами, которые важны нам самим.',
    aboutP2:     'Этот текст будет заменён основателем издательства. Здесь появится настоящая история — о том, откуда мы, зачем мы и к чему стремимся.',
  },

  me: {
    logoMonte:   'Monte',
    logoBooks:   'Books',
    navBooks:    'Knjige',
    navAbout:    'O nama',
    navContacts: 'Kontakt informacije',

    book1Title:  'Naziv knjige',
    book1Author: 'Ime autora',
    book1Desc:   'Kratki opis knjige. Nekoliko rečenica o čemu se radi i zašto vrijedi pročitati.',

    book2Title:  'Naziv knjige',
    book2Author: 'Ime autora',
    book2Desc:   'Kratki opis knjige. Nekoliko rečenica o čemu se radi i zašto vrijedi pročitati.',

    book3Title:  'Naziv knjige',
    book3Author: 'Ime autora',
    book3Desc:   'Kratki opis knjige. Nekoliko rečenica o čemu se radi i zašto vrijedi pročitati.',

    book4Title:  'Naziv knjige',
    book4Author: 'Ime autora',
    book4Desc:   'Kratki opis knjige. Nekoliko rečenica o čemu se radi i zašto vrijedi pročitati.',

    aboutP1:     'Monte Books — nezavisna izdavačka kuća, osnovana iz ljubavi prema književnosti i uvjerenja da dobra knjiga mijenja život. Radimo s autorima i tekstovima koji su i nama važni.',
    aboutP2:     'Ovaj tekst će zamijeniti osnivač izdavačke kuće. Ovdje će se pojaviti prava priča — o tome odakle smo, zašto postojimo i čemu težimo.',
  },

  en: {
    logoMonte:   'Monte',
    logoBooks:   'Books',
    navBooks:    'Books',
    navAbout:    'About us',
    navContacts: 'Contact information',

    book1Title:  'Book title',
    book1Author: 'Author Name',
    book1Desc:   'A short description of the book. A few sentences about what it is and why it is worth reading.',

    book2Title:  'Book title',
    book2Author: 'Author Name',
    book2Desc:   'A short description of the book. A few sentences about what it is and why it is worth reading.',

    book3Title:  'Book title',
    book3Author: 'Author Name',
    book3Desc:   'A short description of the book. A few sentences about what it is and why it is worth reading.',

    book4Title:  'Book title',
    book4Author: 'Author Name',
    book4Desc:   'A short description of the book. A few sentences about what it is and why it is worth reading.',

    aboutP1:     'Monte Books is an independent publishing house founded out of love for literature and the belief that a good book changes lives. We work with authors and texts that matter to us personally.',
    aboutP2:     'This text will be replaced by the founder of the publishing house. The real story will appear here — where we came from, why we exist, and what we strive for.',
  },
};

// ---------- Language switching ----------

const htmlEl    = document.documentElement;
const langBtns  = document.querySelectorAll('.lang-btn');
const i18nNodes = document.querySelectorAll('[data-i18n]');

const STORAGE_KEY = 'mb-lang';

function applyLang(lang) {
  if (!i18n[lang]) return;

  // Update text nodes
  i18nNodes.forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update <html lang="...">
  const langMap = { ru: 'ru', me: 'cnr', en: 'en' };
  htmlEl.lang = langMap[lang] || lang;

  // Update active button state
  langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

  // Persist choice
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Restore saved language (auto-detect hook готов — можно расширить позже)
function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && i18n[saved]) return saved;
  } catch (_) {}

  // TODO: auto-detect from browser — раскомментировать при необходимости
  // const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  // if (browser === 'ru') return 'ru';
  // if (browser === 'en') return 'en';

  return 'ru'; // default
}

applyLang(detectLang());

// ---------- Footer year ----------

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
