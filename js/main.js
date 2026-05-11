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

    book2Title:  'Выжить!',
    book2Author: 'Владимир Смирнов, Александр Никишин',
    book2Desc:   'Воспоминания самого известного в мире русского эмигранта — человека, который бежал от расстрела, потерял всё и создал водочный бренд Smirnoff. О том, как выжить, когда кажется, что выхода нет.',

    book3Title:  'Закусить не желаете?',
    book3Author: 'Александр Никишин',
    book3Desc:   'Историк водки проводит дегустацию напитков и закусок из произведений Булгакова. Почему кот Бегемот предлагал спирт, а не водку? Что пил Понтий Пилат и чем угощал Воланд? Литература и застолье глазами знатока.',

    book4Title:  'Жизнь среди котов',
    book4Author: 'Александр Никишин',
    book4Desc:   'Мы думаем, что коты живут среди нас. Коты считают иначе. Опыт совместного выживания — о том, как люди и кошки уживаются в разных странах, и о больших счётах, которые коты нам предъявляют.',

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

    book2Title:  'Preživjeti!',
    book2Author: 'Vladimir Smirnov, Aleksandar Nikišin',
    book2Desc:   'Sjećanja najpoznatijeg ruskog emigranta na svijetu — čovjeka koji je pobjegao od smaknuća, izgubio sve i stvorio votku Smirnoff. O tome kako preživjeti kad se čini da nema izlaza.',

    book3Title:  'Zalogajite li?',
    book3Author: 'Aleksandar Nikišin',
    book3Desc:   'Istoričar votke vodi degustaciju pića i zalogaja iz djela Bulgakova. Zašto je mačak Begemot nudio špiritus, a ne votku? Šta je pio Pontije Pilat i čime je častio Voland? Književnost i trpeza kroz oči poznavaoca.',

    book4Title:  'Život među mačkama',
    book4Author: 'Aleksandar Nikišin',
    book4Desc:   'Mislimo da mačke žive među nama. Mačke misle drugačije. Iskustvo zajedničkog preživljavanja — o tome kako se ljudi i mačke snalaze u različitim zemljama i o velikim računima koje nam mačke ispostavljaju.',

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

    book2Title:  'Survive!',
    book2Author: 'Vladimir Smirnov, Alexander Nikishin',
    book2Desc:   'The memoirs of the world\'s most famous Russian émigré — a man who fled execution, lost everything, and created the Smirnoff vodka brand. A story about surviving when there seems to be no way out.',

    book3Title:  'Care for a snack?',
    book3Author: 'Alexander Nikishin',
    book3Desc:   'A vodka historian leads a tasting of drinks and snacks from Bulgakov\'s works. Why did the cat Behemoth offer spirits instead of vodka? What did Pontius Pilate drink, and how did Woland entertain his guests? Literature and the table through a connoisseur\'s eye.',

    book4Title:  'Life Among Cats',
    book4Author: 'Alexander Nikishin',
    book4Desc:   'We think cats live among us. Cats think otherwise. A story of coexistence against all odds — how people and cats get along across different countries, and the scores cats have yet to settle with us.',

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
