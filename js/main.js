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

    book5Title:  'В поисках Маленького принца',
    book5Author: 'Ольга Никишина',
    book5Desc:   'Как связан автор великой сказки «Маленький принц» лётчик и писатель Экзюпери и Черногория? В Герцег Нови выставлены личные вещи Экзюпери и его жены Консуэло, документы и редкие фотографии. История дружбы Булгакова и Экзюпери, завязавшейся в сталинской Москве.',

    promoLabel:  'Иллюстрированный альбом',
    promoTitle:  'Принцессы Черногории. Реконструкция королевской истории',
    promoDesc:   'У короля Черногории Николы Петровича было девять дочек. Как найти им принцев, если сами принцессы живут в крошечном государстве в недоступных Чёрных Горах? Реконструкция королевской жизни Черногории на основе фотоматериалов и документов из архивов Европы.',

    bulgakovLabel: 'Выставочный проект',
    bulgakovTitle: 'Михаил Булгаков. Музей Великого Мастера',
    bulgakovDesc:  'Настенные баннеры для постоянной экспозиции музея Михаила Булгакова в Херцег Нови. Визуальный нарратив о жизни и творчестве писателя, его гастрономических пристрастиях и эпохе, которую он описал в своих книгах.',

    promo2Label: 'Иллюстрированная энциклопедия',
    promo2Title: 'Энциклопедия алкогольных напитков мира',
    promo2Desc:  'Под одной обложкой — уникальный материал об истории водки, шампанского, байцзю, коньяка и виски. О легендарных брендах: Smirnoff, Столи, Абсолют, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot и других. А также об истории пробки, бутылки, этикетки и «Сухом законе» в США и СССР.',

    aboutP1:     'Издательство Monte Books создано деятелями культуры разных стран, разделяющих идеи свободы слова, право на самовыражение в своих текстах, имеющих свой взгляд на те или иные события.',
    aboutP2:     'Герои книг, которые мы запланировали к выпуску в ближайшие месяцы, подают пример выживания тогда, когда все вокруг опускают руки. Подобное чтение полезно в переломные времена истории и с точки зрения изучения опыта честной и бескомпромиссной жизни, оно идеально с точки зрения получения практических идей.',
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

    book5Title:  'U potrazi za Malim princem',
    book5Author: 'Olga Nikišina',
    book5Desc:   'Kakva je veza između autora čuvene bajke "Mali princ", pilota i pisca Egziperija, i Crne Gore? U Herceg Novom se čuvaju lične stvari Egziperija i njegove supruge Konsuela, dokumenti i rijetke fotografije. Priča o prijateljstvu Bulgakova i Egziperija, sklopljenom u Staljinovoj Moskvi.',

    promoLabel:  'Ilustrovani album',
    promoTitle:  'Princeze Crne Gore. Rekonstrukcija kraljevske istorije',
    promoDesc:   'Kralj Crne Gore Nikola Petrović imao je devet kćeri. Kako naći prinčeve za njih kad same princeze žive u maloj državi u nedostupnim Crnim Gorama? Rekonstrukcija kraljevskog života Crne Gore na osnovu fotografija i dokumenata iz evropskih arhiva.',

    bulgakovLabel: 'Izložbeni projekat',
    bulgakovTitle: 'Mihail Bulgakov. Muzej Velikog Majstora',
    bulgakovDesc:  'Zidni baneri za stalnu postavku muzeja Mihaila Bulgakova u Herceg Novom. Vizuelni narativ o životu i djelu pisca, njegovim gastronomskim sklonostima i epohi koju je opisao u svojim knjigama.',

    promo2Label: 'Ilustrovana enciklopedija',
    promo2Title: 'Enciklopedija alkoholnih pića svijeta',
    promo2Desc:  'Pod jednim koricama — jedinstven materijal o istoriji votke, šampanjca, bajdžija, konjaka i viskija. O legendarnim brendovima: Smirnoff, Stoli, Absolut, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot i drugima. Kao i o istoriji čepa, boce, etikete i prohibiciji u SAD-u i SSSR-u.',

    aboutP1:     'Izdavačka kuća Monte Books osnovana je od strane kulturnih stvaralaca iz različitih zemalja koji dijele ideje slobode govora, pravo na samoizražavanje u svojim tekstovima i imaju vlastiti pogled na razne događaje.',
    aboutP2:     'Junaci knjiga koje smo planirali za objavljivanje u narednim mjesecima daju primjer preživljavanja u trenucima kada svi oko njih gube nadu. Ovakvo štivo je korisno u prelomnim vremenima istorije — i sa stanovišta usvajanja iskustva poštenog i beskompromisnog života, savršeno je sa stanovišta sticanja praktičnih ideja.',
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

    book5Title:  'In Search of the Little Prince',
    book5Author: 'Olga Nikishina',
    book5Desc:   'What connects Antoine de Saint-Exupéry — aviator, author of The Little Prince — with Montenegro? In Herceg Novi, a unique exhibition preserves his personal belongings, his wife Consuelo\'s effects, documents and rare photographs. The story of an unlikely friendship between Bulgakov and Saint-Exupéry, forged in Stalin\'s Moscow.',

    promoLabel:  'Illustrated album',
    promoTitle:  'Princesses of Montenegro. A Royal History Reconstructed',
    promoDesc:   'King Nikola Petrović of Montenegro had nine daughters. How to find them princes when the princesses themselves live in a tiny state deep in the inaccessible Black Mountains? A reconstruction of Montenegro\'s royal life drawn from photographs and documents in European archives.',

    bulgakovLabel: 'Exhibition project',
    bulgakovTitle: 'Mikhail Bulgakov. Museum of the Great Master',
    bulgakovDesc:  'Wall banners for the permanent exhibition of the Mikhail Bulgakov Museum in Herceg Novi. A visual narrative about the writer\'s life and work, his gastronomic passions, and the era he captured in his books.',

    promo2Label: 'Illustrated encyclopedia',
    promo2Title: 'Encyclopedia of the World\'s Alcoholic Beverages',
    promo2Desc:  'One volume covering the history of vodka, champagne, baijiu, cognac and whisky. Legendary brands: Smirnoff, Stoli, Absolut, Bacardi, Hennessy, Martell, Moët & Chandon, Dom Pérignon, Veuve Clicquot and more. Plus the history of the cork, bottle, label — and Prohibition in the US and USSR.',

    aboutP1:     'Monte Books was founded by cultural figures from different countries who share a belief in freedom of expression, the right to speak one\'s mind in print, and an independent perspective on events.',
    aboutP2:     'The heroes of the books we plan to publish in the coming months set an example of resilience for times when everyone around them gives up. This kind of reading is valuable in pivotal moments of history — both as a study of honest, uncompromising lives and as a source of practical ideas.',
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
  var track      = document.getElementById('book3d');
  var cover      = document.getElementById('book3dCover');
  var flip1      = document.getElementById('flip1');
  var flip2      = document.getElementById('flip2');
  var flip3      = document.getElementById('flip3');
  var bookLeft   = document.getElementById('bookLeft');
  var leftInside = document.getElementById('leftInside');
  var left1      = document.getElementById('left1');
  var left3      = document.getElementById('left3');
  var left5      = document.getElementById('left5');
  var left7      = document.getElementById('left7');

  if (!track || !cover || !flip1 || !flip2 || !flip3 || !bookLeft) return;

  // Кэшируем trackH — пересчитываем только при resize, не на каждый скролл
  var trackH    = track.offsetHeight;
  var viewH     = window.innerHeight;
  var available = trackH - viewH;

  window.addEventListener('resize', function () {
    trackH    = track.offsetHeight;
    viewH     = window.innerHeight;
    available = trackH - viewH;
  }, { passive: true });

  var lastProgress = -1;
  var rafPending   = false;

  function render() {
    rafPending = false;
    // getBoundingClientRect — только top, не вызывает полный reflow
    var scrolled = -track.getBoundingClientRect().top;
    var progress = Math.min(1, Math.max(0, scrolled / available));

    if (Math.abs(progress - lastProgress) < 0.001) return;
    lastProgress = progress;

    // 4 фазы по 0.25 каждая:
    // p0: обложка (0 → 0.25)
    // p1: разворот 1→2 (0.25 → 0.5)
    // p2: разворот 3→4 (0.5 → 0.75)
    // p3: разворот 5→6 (0.75 → 1.0)
    var p0 = Math.min(1, progress / 0.25);
    var p1 = Math.min(1, Math.max(0, (progress - 0.25) / 0.25));
    var p2 = Math.min(1, Math.max(0, (progress - 0.50) / 0.25));
    var p3 = Math.min(1, Math.max(0, (progress - 0.75) / 0.25));

    // Все DOM-изменения в одном RAF-кадре — браузер батчит
    cover.style.transform = 'rotateY(' + (-180 * p0) + 'deg)';
    flip1.style.transform = 'rotateY(' + (-180 * p1) + 'deg)';
    flip2.style.transform = 'rotateY(' + (-180 * p2) + 'deg)';
    flip3.style.transform = 'rotateY(' + (-180 * p3) + 'deg)';

    // Левый столбец: показываем как только обложка начала открываться
    bookLeft.classList.toggle('is-visible', p0 > 0.05);

    // Переключаем активный слой левого столбца
    if (leftInside) leftInside.classList.toggle('is-active', p0 < 0.5);
    if (left1)  left1.classList.toggle('is-active',  p0 >= 0.5 && p1 < 0.5);
    if (left3)  left3.classList.toggle('is-active',  p1 >= 0.5 && p2 < 0.5);
    if (left5)  left5.classList.toggle('is-active',  p2 >= 0.5 && p3 < 0.5);
    if (left7)  left7.classList.toggle('is-active',  p3 >= 0.5);
  }

  function onScroll() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(render);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  render(); // начальный рендер
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
