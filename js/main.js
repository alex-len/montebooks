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

    book1Title:  'Я был зятем русского миллионера Шустова',
    book1Author: 'Владимир Любимов',
    book1Desc:   'Судьба оптимиста на фоне трагедий ХХ века. Первый спортсмен царской России, участник Первой мировой, узник сталинских лагерей — за женитьбу на дочери коньячного магната Шустова. В лагере составил свой словарь русского языка.',

    book2Title:  'Выжить!',
    book2Author: 'Владимир Смирнов, Александр Никишин',
    book2Desc:   'Воспоминания самого известного в мире русского эмигранта — человека, который бежал от расстрела, потерял всё и создал водочный бренд Smirnoff. О том, как выжить, когда кажется, что выхода нет.',

    book3Title:  'Закусить не желаете?',
    book3Author: 'Александр Никишин',
    book3Desc:   'Историк водки проводит дегустацию напитков и закусок из произведений Булгакова. Почему кот Бегемот предлагал спирт, а не водку? Что пил Понтий Пилат и чем угощал Воланд? Литература и застолье глазами знатока.',

    book4Title:  'Жизнь среди котов',
    book4Author: 'Автор несколько лет изучал жизнь кошачьего сообщества. И свои наблюдения систематизировал.',
    book4Desc:   'Мы думаем, что коты живут среди нас. Коты считают иначе — что люди живут среди них. Опыт совместного выживания — о том, как люди и кошки уживаются в разных странах, и о больших счётах, которые коты нам предъявляют.',

    promoLabel:  'Иллюстрированный альбом',
    promoTitle:  'Принцессы Черногории. Реконструкция королевской истории',
    promoDesc:   'У короля Черногории Николы Петровича было девять дочек. Как найти им принцев, если сами принцессы живут в крошечном государстве в недоступных Чёрных Горах? Реконструкция королевской жизни Черногории на основе фотоматериалов и документов из архивов Европы.',

    promo2Label: 'Иллюстрированная энциклопедия',
    promo2Title: 'Энциклопедия алкогольных напитков мира',
    promo2Desc:  'Под одной обложкой — уникальный материал об истории водки, шампанского, байцзю, коньяка и виски. О легендарных брендах: Smirnoff, Столи, Абсолют, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot и других. А также об истории пробки, бутылки, этикетки и «Сухом законе» в США и СССР.',

    aboutP1:     'Monte Books — независимое издательство, основанное с любовью к литературе и убеждением, что хорошая книга меняет жизнь. Мы работаем с авторами и текстами, которые важны нам самим.',
    aboutP2:     'Этот текст будет заменён основателем издательства. Здесь появится настоящая история — о том, откуда мы, зачем мы и к чему стремимся.',
  },

  me: {
    logoMonte:   'Monte',
    logoBooks:   'Books',
    navBooks:    'Knjige',
    navAbout:    'O nama',
    navContacts: 'Kontakt informacije',

    book1Title:  'Bio sam zet ruskog milionera Šustova',
    book1Author: 'Vladimir Ljubimov',
    book1Desc:   'Sudbina optimiste u sjenci tragedija XX vijeka. Prvak carske Rusije u sportu, učesnik Prvog svjetskog rata, zatočenik Staljinovih logora — zbog ženidbe kćerkom konjak-magnata Šustova. U logoru je sastavio sopstveni rječnik ruskog jezika.',

    book2Title:  'Preživjeti!',
    book2Author: 'Vladimir Smirnov, Aleksandar Nikišin',
    book2Desc:   'Sjećanja najpoznatijeg ruskog emigranta na svijetu — čovjeka koji je pobjegao od smaknuća, izgubio sve i stvorio votku Smirnoff. O tome kako preživjeti kad se čini da nema izlaza.',

    book3Title:  'Zalogajite li?',
    book3Author: 'Aleksandar Nikišin',
    book3Desc:   'Istoričar votke vodi degustaciju pića i zalogaja iz djela Bulgakova. Zašto je mačak Begemot nudio špiritus, a ne votku? Šta je pio Pontije Pilat i čime je častio Voland? Književnost i trpeza kroz oči poznavaoca.',

    book4Title:  'Život među mačkama',
    book4Author: 'Autor je nekoliko godina proučavao život mačje zajednice. I sistematizovao svoja zapažanja.',
    book4Desc:   'Mislimo da mačke žive među nama. Mačke misle drugačije — da ljudi žive među njima. Iskustvo zajedničkog preživljavanja — o tome kako se ljudi i mačke snalaze u različitim zemljama i o velikim računima koje nam mačke ispostavljaju.',

    promoLabel:  'Ilustrovani album',
    promoTitle:  'Princeze Crne Gore. Rekonstrukcija kraljevske istorije',
    promoDesc:   'Kralj Crne Gore Nikola Petrović imao je devet kćeri. Kako naći prinčeve za njih kad same princeze žive u maloj državi u nedostupnim Crnim Gorama? Rekonstrukcija kraljevskog života Crne Gore na osnovu fotografija i dokumenata iz evropskih arhiva.',

    promo2Label: 'Ilustrovana enciklopedija',
    promo2Title: 'Enciklopedija alkoholnih pića svijeta',
    promo2Desc:  'Pod jednim koricama — jedinstven materijal o istoriji votke, šampanjca, bajdžija, konjaka i viskija. O legendarnim brendovima: Smirnoff, Stoli, Absolut, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot i drugima. Kao i o istoriji čepa, boce, etikete i prohibiciji u SAD-u i SSSR-u.',

    aboutP1:     'Monte Books — nezavisna izdavačka kuća, osnovana iz ljubavi prema književnosti i uvjerenja da dobra knjiga mijenja život. Radimo s autorima i tekstovima koji su i nama važni.',
    aboutP2:     'Ovaj tekst će zamijeniti osnivač izdavačke kuće. Ovdje će se pojaviti prava priča — o tome odakle smo, zašto postojimo i čemu težimo.',
  },

  en: {
    logoMonte:   'Monte',
    logoBooks:   'Books',
    navBooks:    'Books',
    navAbout:    'About us',
    navContacts: 'Contact information',

    book1Title:  'I Was the Son-in-Law of Russian Millionaire Shustov',
    book1Author: 'Vladimir Lyubimov',
    book1Desc:   'The story of an optimist against the backdrop of 20th-century tragedy. Russia\'s first sports champion, a WWI veteran, a Stalinist camp prisoner — condemned for marrying the daughter of cognac magnate Shustov. In the camp, he compiled his own Russian dictionary.',

    book2Title:  'Survive!',
    book2Author: 'Vladimir Smirnov, Alexander Nikishin',
    book2Desc:   'The memoirs of the world\'s most famous Russian émigré — a man who fled execution, lost everything, and created the Smirnoff vodka brand. A story about surviving when there seems to be no way out.',

    book3Title:  'Care for a snack?',
    book3Author: 'Alexander Nikishin',
    book3Desc:   'A vodka historian leads a tasting of drinks and snacks from Bulgakov\'s works. Why did the cat Behemoth offer spirits instead of vodka? What did Pontius Pilate drink, and how did Woland entertain his guests? Literature and the table through a connoisseur\'s eye.',

    book4Title:  'Life Among Cats',
    book4Author: 'The author spent several years studying the life of the feline community. And put his observations in order.',
    book4Desc:   'We think cats live among us. Cats think otherwise — that people live among them. A story of coexistence against all odds — how people and cats get along across different countries, and the scores cats have yet to settle with us.',

    promoLabel:  'Illustrated album',
    promoTitle:  'Princesses of Montenegro. A Royal History Reconstructed',
    promoDesc:   'King Nikola Petrović of Montenegro had nine daughters. How to find them princes when the princesses themselves live in a tiny state deep in the inaccessible Black Mountains? A reconstruction of Montenegro\'s royal life drawn from photographs and documents in European archives.',

    promo2Label: 'Illustrated encyclopedia',
    promo2Title: 'Encyclopedia of the World\'s Alcoholic Beverages',
    promo2Desc:  'One volume covering the history of vodka, champagne, baijiu, cognac and whisky. Legendary brands: Smirnoff, Stoli, Absolut, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot and more. Plus the history of the cork, bottle, label — and Prohibition in the US and USSR.',

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

  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  if (browser === 'ru') return 'ru';
  if (browser === 'en') return 'en';
  return 'me'; // все остальные языки → черногорский
}

applyLang(detectLang());

// ---------- Book 3D scroll animation ----------

(function () {
  var track    = document.getElementById('book3d');
  var cover    = document.getElementById('book3dCover');
  var page     = document.getElementById('spread1wrap');
  var bookLeft = document.getElementById('bookLeft');
  var leftInside = document.getElementById('leftInside');
  var left1    = document.getElementById('left1');
  var left2    = document.getElementById('left2');

  if (!track || !cover || !page || !bookLeft) return;

  var lastProgress = -1;

  function onScroll() {
    var rect      = track.getBoundingClientRect();
    var trackH    = track.offsetHeight;
    var viewH     = window.innerHeight;
    var scrolled  = -rect.top;
    var available = trackH - viewH;
    var progress  = Math.min(1, Math.max(0, scrolled / available));

    if (Math.abs(progress - lastProgress) < 0.001) return;
    lastProgress = progress;

    // Фаза 1 (0–0.5): обложка открывается, левый столбец появляется
    var phase1 = Math.min(1, progress / 0.5);
    cover.style.transform = 'rotateY(' + (-180 * phase1) + 'deg)';

    // Левый столбец: показываем когда обложка начала открываться
    if (phase1 > 0.05) {
      bookLeft.classList.add('is-visible');
    } else {
      bookLeft.classList.remove('is-visible');
    }

    // Левый столбец: фаза 1 → inside cover, потом → страница 1
    if (phase1 < 0.5) {
      leftInside && leftInside.classList.add('is-active');
      left1 && left1.classList.remove('is-active');
    } else {
      leftInside && leftInside.classList.remove('is-active');
      left1 && left1.classList.add('is-active');
    }

    // Фаза 2 (0.5–1): правая страница переворачивается → разворот 2
    var phase2 = Math.max(0, (progress - 0.5) / 0.5);
    page.style.transform = 'rotateY(' + (-180 * phase2) + 'deg)';

    // Левый столбец: фаза 2 → страница 2
    if (phase2 > 0.5) {
      left1 && left1.classList.remove('is-active');
      left2 && left2.classList.add('is-active');
    } else {
      left2 && left2.classList.remove('is-active');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---------- Lightbox ----------

const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

lightboxClose.addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ---------- Footer year ----------

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
