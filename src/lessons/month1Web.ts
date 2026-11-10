import type { Lang } from "../i18n";
import { standardLesson, text } from "./build.ts";

// Lessons 7–12: HTML and CSS step by step up to a published business card.
const plain = "body { font-family: Arial, sans-serif; padding: 24px; }";
const person = {
  ru: {
    name: "Малика Каримова",
    about: "Студентка 2 курса медицинского университета.",
    dream: "Хочу создать тренажёр по анатомии.",
    interests: "Мои интересы",
    items: ["Анатомия", "Кардиология", "Новые технологии"],
    goals: "Мои цели на год",
    goal1: "Научиться делать сайты",
    goal2: "своё приложение",
    goal2Before: "Создать ",
    role: "Будущий кардиолог",
    link: "Сайт курса LBL IT",
    logo: "Логотип LBL IT",
  },
  uz: {
    name: "Malika Karimova",
    about: "Tibbiyot universitetining 2-kurs talabasi.",
    dream: "Anatomiya trenajyorini yaratmoqchiman.",
    interests: "Qiziqishlarim",
    items: ["Anatomiya", "Kardiologiya", "Yangi texnologiyalar"],
    goals: "Bir yillik maqsadlarim",
    goal1: "Saytlar yaratishni o‘rganish",
    goal2: "o‘z ilovamni",
    goal2Before: "Yaratish: ",
    role: "Bo‘lajak kardiolog",
    link: "LBL IT kurs sayti",
    logo: "LBL IT logotipi",
  },
};
const firstTagsHtml = (lang: Lang) => {
  const p = person[lang];
  return `<h1>${p.name}</h1>
<p>${p.about}</p>
<p>${p.dream}</p>`;
};
const structureHtml = (lang: Lang) => {
  const p = person[lang];
  return `<h1>${p.name}</h1>
<h2>${p.interests}</h2>
<ul>
  <li>${p.items[0]}</li>
  <li>${p.items[1]}</li>
  <li>${p.items[2]}</li>
</ul>
<h2>${p.goals}</h2>
<ol>
  <li>${p.goal1}</li>
  <li>${p.goal2Before}<strong>${p.goal2}</strong></li>
</ol>`;
};
const mediaHtml = (lang: Lang) => {
  const p = person[lang];
  return `<h1>${p.name}</h1>
<img src="https://samandar90.github.io/lbl-it-lessons/favicon.svg" alt="${p.logo}" width="80">
<p>
  <a href="https://samandar90.github.io/lbl-it-department/">${p.link}</a>
</p>`;
};
const colorsCss = `body {
  font-family: Arial, sans-serif;
  background: #eef6f3;
}
h1 {
  color: #0b6e62;
  font-size: 40px;
}
p {
  color: #333333;
  font-size: 18px;
}`;
const cardHtml = (lang: Lang) => {
  const p = person[lang];
  return `<main class="card">
  <h1>${p.name}</h1>
  <p>${p.role}</p>
</main>`;
};
const cardCss = `body {
  font-family: Arial, sans-serif;
  background: #eef6f3;
}
.card {
  max-width: 360px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #0b6e62;
}`;

export const htmlLesson = standardLesson({
  id: "html",
  number: 7,
  title: text(
    "HTML: теги и первая страница",
    "HTML: teglar va birinchi sahifa",
  ),
  summary: text(
    "Знакомимся с HTML — «скелетом» любой страницы — и пишем заголовок и абзацы.",
    "Har qanday sahifaning «skeleti» — HTML bilan tanishamiz va sarlavha hamda xatboshilar yozamiz.",
  ),
  goals: [
    text("Понимать, что такое тег", "Teg nima ekanini tushunish"),
    text(
      "Писать заголовок h1 и абзацы p",
      "h1 sarlavha va p xatboshilarni yozish",
    ),
    text("Проверять результат в браузере", "Natijani brauzerda tekshirish"),
  ],
  conceptsTitle: text("Из чего состоит HTML", "HTML nimalardan iborat"),
  concepts: [
    {
      label: text("ТЕГ", "TEG"),
      title: text("Подпись для браузера", "Brauzer uchun belgi"),
      text: text(
        "<p>текст</p> — открывающий и закрывающий тег вокруг текста.",
        "<p>matn</p> — matn atrofidagi ochuvchi va yopuvchi teg.",
      ),
    },
    {
      label: "H1",
      title: text("Главный заголовок", "Asosiy sarlavha"),
      text: text(
        "Самый крупный текст страницы. Обычно он один.",
        "Sahifadagi eng katta matn. Odatda u bitta bo‘ladi.",
      ),
    },
    {
      label: "P",
      title: text("Абзац", "Xatboshi"),
      text: text(
        "Обычный текст. Каждый абзац — в своём теге p.",
        "Oddiy matn. Har bir xatboshi o‘z p tegida.",
      ),
    },
  ],
  example: {
    title: text("Страница «Обо мне»", "«Men haqimda» sahifasi"),
    text: text(
      "Три строки HTML: заголовок с именем и два абзаца.",
      "Uch qator HTML: ismli sarlavha va ikkita xatboshi.",
    ),
    points: [
      text("h1 — имя, самый крупный текст", "h1 — ism, eng katta matn"),
      text("p — обычные абзацы", "p — oddiy xatboshilar"),
    ],
    example: {
      show: ["html"],
      build: (lang) => ({ html: firstTagsHtml(lang), css: plain, js: "" }),
    },
  },
  practice: [
    text(
      "Открой index.html в VS Code и удали старый текст",
      "index.html’ni VS Code’da ochib, eski matnni o‘chir",
    ),
    text(
      "Напиши заголовок <h1> со своим именем",
      "Isming bilan <h1> sarlavhasini yoz",
    ),
    text(
      "Ниже напиши два абзаца <p>: кто ты и что хочешь создать",
      "Pastda ikkita <p> xatboshi yoz: kimsan va nima yaratmoqchisan",
    ),
    text(
      "Сохрани (Ctrl + S) и обнови страницу в браузере (F5)",
      "Saqla (Ctrl + S) va brauzerda sahifani yangila (F5)",
    ),
    text(
      "Убери закрывающий тег </h1> и посмотри, что изменится, — потом верни его",
      "Yopuvchi </h1> tegini olib tashlab, nima o‘zgarishini ko‘r — keyin qaytar",
    ),
  ],
  mistakes: [
    text(
      "Забыт закрывающий тег — крупный шрифт «растекается» дальше. Проверь пару <h1>…</h1>",
      "Yopuvchi teg unutilgan — katta shrift davom etib ketadi. <h1>…</h1> juftligini tekshir",
    ),
    text(
      "Тег напечатан русскими буквами — теги пишутся только латиницей",
      "Teg kirill harflarida yozilgan — teglar faqat lotin harflarida yoziladi",
    ),
    text(
      "Пропущена угловая скобка — каждый тег начинается с < и заканчивается >",
      "Burchakli qavs tushib qolgan — har bir teg < bilan boshlanib, > bilan tugaydi",
    ),
  ],
  quiz: [
    {
      question: text(
        "Как выглядит закрывающий тег абзаца?",
        "Xatboshining yopuvchi tegi qanday ko‘rinadi?",
      ),
      answer: text("</p>", "</p>"),
    },
    {
      question: text(
        "Сколько заголовков h1 обычно бывает на странице?",
        "Sahifada odatda nechta h1 sarlavha bo‘ladi?",
      ),
      answer: text("Один.", "Bitta."),
    },
    {
      question: text(
        "Какими буквами пишутся теги?",
        "Teglar qaysi harflarda yoziladi?",
      ),
      answer: text("Латиницей: h1, p.", "Lotin harflarida: h1, p."),
    },
  ],
  homework: [
    text(
      "Добавь третий абзац: почему медицина — твой выбор",
      "Uchinchi xatboshini qo‘sh: nega tibbiyotni tanlaganing haqida",
    ),
  ],
  teacher: {
    start: text(
      "Попросить двух-трёх студентов открыть about.html на проекторе — первые страницы стоит похвалить.",
      "Ikki-uch talabadan about.html’ni proyektorda ochishni so‘rang — birinchi sahifalarni maqtash kerak.",
    ),
    practice: text(
      "Печатать код вместе с группой медленно, вслух проговаривая каждый символ. Не копировать — руки должны запомнить.",
      "Kodni guruh bilan birga sekin, har bir belgini ovoz chiqarib aytib yozing. Nusxa olmang — qo‘llar eslab qolishi kerak.",
    ),
  },
});

export const structureLesson = standardLesson({
  id: "structure",
  number: 8,
  title: text(
    "Структура страницы: заголовки и списки",
    "Sahifa tuzilmasi: sarlavhalar va ro‘yxatlar",
  ),
  summary: text(
    "Делаем страницу понятной: подзаголовки, списки и выделение важного текста.",
    "Sahifani tushunarli qilamiz: kichik sarlavhalar, ro‘yxatlar va muhim matnni ajratish.",
  ),
  goals: [
    text(
      "Использовать подзаголовки h2 и h3",
      "h2 va h3 kichik sarlavhalaridan foydalanish",
    ),
    text("Создавать списки ul и ol", "ul va ol ro‘yxatlarini yaratish"),
    text(
      "Выделять важное тегом strong",
      "Muhim narsani strong tegi bilan ajratish",
    ),
  ],
  conceptsTitle: text("Порядок на странице", "Sahifadagi tartib"),
  concepts: [
    {
      label: "H2, H3",
      title: text("Подзаголовки", "Kichik sarlavhalar"),
      text: text(
        "Делят страницу на разделы, как главы в учебнике.",
        "Sahifani bo‘limlarga ajratadi, xuddi darslikdagi boblar kabi.",
      ),
    },
    {
      label: "UL / OL",
      title: text("Списки", "Ro‘yxatlar"),
      text: text(
        "ul — список с точками, ol — нумерованный. Каждый пункт — в теге li.",
        "ul — nuqtali ro‘yxat, ol — raqamli. Har bir band li tegida.",
      ),
    },
    {
      label: "STRONG",
      title: text("Важный текст", "Muhim matn"),
      text: text(
        "Выделяет слова жирным: <strong>важно</strong>.",
        "So‘zlarni qalin qiladi: <strong>muhim</strong>.",
      ),
    },
  ],
  example: {
    title: text("Разделы и списки", "Bo‘limlar va ro‘yxatlar"),
    text: text(
      "Два раздела: интересы списком с точками и цели нумерованным списком.",
      "Ikki bo‘lim: qiziqishlar nuqtali ro‘yxatda, maqsadlar raqamli ro‘yxatda.",
    ),
    points: [
      text("h2 делит страницу на разделы", "h2 sahifani bo‘limlarga ajratadi"),
      text("li — каждый пункт списка", "li — ro‘yxatning har bir bandi"),
    ],
    example: {
      show: ["html"],
      build: (lang) => ({ html: structureHtml(lang), css: plain, js: "" }),
    },
  },
  practice: [
    text(
      "Под абзацами добавь подзаголовок <h2> «Мои интересы»",
      "Xatboshilar ostiga «Qiziqishlarim» degan <h2> kichik sarlavhasini qo‘sh",
    ),
    text(
      "Под ним сделай список <ul> из трёх пунктов <li>",
      "Uning ostida uchta <li> bandli <ul> ro‘yxatini yarat",
    ),
    text(
      "Добавь раздел «Мои цели на год» с нумерованным списком <ol>",
      "Raqamli <ol> ro‘yxatli «Bir yillik maqsadlarim» bo‘limini qo‘sh",
    ),
    text(
      "Выдели самое важное слово тегом <strong>",
      "Eng muhim so‘zni <strong> tegi bilan ajrat",
    ),
    text("Сохрани и проверь в браузере", "Saqlab, brauzerda tekshir"),
  ],
  mistakes: [
    text(
      "Пункты без <li> — браузер не покажет точки и номера",
      "<li>siz bandlar — brauzer nuqta va raqamlarni ko‘rsatmaydi",
    ),
    text(
      "Список не закрыт — проверь </ul> или </ol> в конце",
      "Ro‘yxat yopilmagan — oxirida </ul> yoki </ol> borligini tekshir",
    ),
    text(
      "Отступы в коде не меняют страницу, но помогают читать код — делай их клавишей Tab",
      "Koddagi chekinishlar sahifani o‘zgartirmaydi, lekin kodni o‘qishga yordam beradi — ularni Tab tugmasi bilan qil",
    ),
  ],
  quiz: [
    {
      question: text(
        "Чем ul отличается от ol?",
        "ul ol’dan nimasi bilan farq qiladi?",
      ),
      answer: text(
        "ul — список с точками, ol — нумерованный.",
        "ul — nuqtali ro‘yxat, ol — raqamli.",
      ),
    },
    {
      question: text(
        "В какой тег оборачивается каждый пункт списка?",
        "Ro‘yxatning har bir bandi qaysi tegga o‘raladi?",
      ),
      answer: text("В li.", "li tegiga."),
    },
    {
      question: text("Зачем нужны h2?", "h2 nima uchun kerak?"),
      answer: text(
        "Чтобы разделить страницу на разделы.",
        "Sahifani bo‘limlarga ajratish uchun.",
      ),
    },
  ],
  homework: [
    text(
      "Добавь раздел «Мои сильные стороны» со списком из трёх пунктов",
      "Uchta bandli ro‘yxat bilan «Kuchli tomonlarim» bo‘limini qo‘sh",
    ),
    text(
      "Спроси AI: «Объясни простыми словами, что делает тег li» — и сравни ответ с конспектом",
      "AI’dan so‘ra: «li tegi nima qilishini oddiy so‘zlar bilan tushuntir» — va javobni konspekt bilan solishtir",
    ),
  ],
  teacher: {
    start: text(
      "Попросить одного студента прочитать свой третий абзац вслух — про выбор медицины. Это хорошо сближает группу.",
      "Bir talabadan tibbiyotni tanlagani haqidagi uchinchi xatboshini ovoz chiqarib o‘qishni so‘rang. Bu guruhni yaxshi yaqinlashtiradi.",
    ),
    practice: text(
      "Показать, как найти ошибку: сравнить свой код с примером построчно. Это первый навык отладки.",
      "Xatoni qanday topishni ko‘rsating: o‘z kodini namuna bilan qatorma-qator solishtirish. Bu xatolarni topishning ilk ko‘nikmasi.",
    ),
  },
});

export const mediaLesson = standardLesson({
  id: "media",
  number: 9,
  title: text("Ссылки и картинки", "Havolalar va rasmlar"),
  summary: text(
    "Добавляем на страницу ссылки на другие сайты и свою фотографию.",
    "Sahifaga boshqa saytlarga havolalar va o‘z rasmimizni qo‘shamiz.",
  ),
  goals: [
    text("Делать ссылки тегом a", "a tegi bilan havolalar yaratish"),
    text("Вставлять картинки тегом img", "img tegi bilan rasmlar qo‘yish"),
    text(
      "Понимать путь к файлу: где лежит картинка",
      "Faylga yo‘lni tushunish: rasm qayerda joylashgan",
    ),
  ],
  conceptsTitle: text("Ссылки и картинки", "Havolalar va rasmlar"),
  concepts: [
    {
      label: "A",
      title: text("Ссылка", "Havola"),
      text: text(
        '<a href="адрес">текст</a> — по клику открывается адрес из href.',
        '<a href="manzil">matn</a> — bosilganda href’dagi manzil ochiladi.',
      ),
    },
    {
      label: "IMG",
      title: text("Картинка", "Rasm"),
      text: text(
        '<img src="images/photo.jpg"> — src говорит, где лежит файл.',
        '<img src="images/photo.jpg"> — src fayl qayerdaligini ko‘rsatadi.',
      ),
    },
    {
      label: "ALT",
      title: text("Описание картинки", "Rasm tavsifi"),
      text: text(
        "Текст для незрячих пользователей и на случай, если картинка не загрузилась.",
        "Ko‘zi ojiz foydalanuvchilar uchun va rasm yuklanmagan holat uchun matn.",
      ),
    },
  ],
  example: {
    title: text("Картинка и ссылка", "Rasm va havola"),
    text: text(
      "Картинка из интернета и ссылка на сайт курса.",
      "Internetdagi rasm va kurs saytiga havola.",
    ),
    points: [
      text("img показывает картинку из src", "img src’dagi rasmni ko‘rsatadi"),
      text("a открывает адрес из href", "a href’dagi manzilni ochadi"),
    ],
    example: {
      show: ["html"],
      build: (lang) => ({ html: mediaHtml(lang), css: plain, js: "" }),
    },
  },
  practice: [
    text(
      "Положи своё фото или любую картинку в папку LBL/images и назови её photo.jpg",
      "O‘z rasmingni yoki istalgan rasmni LBL/images papkasiga qo‘yib, photo.jpg deb nomla",
    ),
    text(
      'Добавь в index.html: <img src="images/photo.jpg" alt="Моё фото" width="200">',
      'index.html’ga qo‘sh: <img src="images/photo.jpg" alt="Mening rasmim" width="200">',
    ),
    text(
      'Добавь ссылку на полезный медицинский сайт: <a href="адрес">название</a>',
      'Foydali tibbiy saytga havola qo‘sh: <a href="manzil">nomi</a>',
    ),
    text(
      "Сохрани и проверь: картинка видна, ссылка открывается",
      "Saqlab tekshir: rasm ko‘rinadi, havola ochiladi",
    ),
  ],
  mistakes: [
    text(
      "Картинка не видна — проверь имя файла: photo.jpg и Photo.JPG для сайта разные",
      "Rasm ko‘rinmayapti — fayl nomini tekshir: sayt uchun photo.jpg va Photo.JPG har xil",
    ),
    text(
      'Картинка огромная — добавь width="200"',
      'Rasm juda katta — width="200" qo‘sh',
    ),
    text(
      "Ссылка не работает — адрес в href должен начинаться с https://",
      "Havola ishlamayapti — href’dagi manzil https:// bilan boshlanishi kerak",
    ),
  ],
  quiz: [
    {
      question: text(
        "Какой атрибут говорит, куда ведёт ссылка?",
        "Havola qayerga olib borishini qaysi atribut bildiradi?",
      ),
      answer: text("href.", "href."),
    },
    {
      question: text(
        "Где указывается путь к картинке?",
        "Rasmga yo‘l qayerda ko‘rsatiladi?",
      ),
      answer: text("В атрибуте src.", "src atributida."),
    },
    {
      question: text("Зачем нужен alt?", "alt nima uchun kerak?"),
      answer: text(
        "Это описание картинки для незрячих пользователей и на случай, если она не загрузилась.",
        "Bu ko‘zi ojiz foydalanuvchilar uchun va rasm yuklanmagan holat uchun rasm tavsifi.",
      ),
    },
  ],
  homework: [
    text(
      "Добавь на визитку ещё две ссылки на полезные для учёбы сайты",
      "Vizitkaga o‘qish uchun foydali yana ikkita sayt havolasini qo‘sh",
    ),
  ],
  teacher: {
    start: text(
      "Проверить разделы и списки у каждого. Студентам, которые уже уверенно справляются, дать задание со звёздочкой: подзаголовок h3 внутри раздела.",
      "Har kimda bo‘lim va ro‘yxatlarni tekshiring. Ishonch bilan uddalayotganlarga yulduzchali vazifa bering: bo‘lim ichida h3 kichik sarlavhasi.",
    ),
    practice: text(
      "Самая частая проблема — путь к картинке. Показать на проекторе папку images рядом с index.html.",
      "Eng ko‘p uchraydigan muammo — rasmga yo‘l. Proyektorda index.html yonidagi images papkasini ko‘rsating.",
    ),
  },
});

export const cssLesson = standardLesson({
  id: "css",
  number: 10,
  title: text("CSS: цвета и шрифты", "CSS: ranglar va shriftlar"),
  summary: text(
    "Подключаем CSS — «кожу» страницы — и меняем цвета, фон и шрифты.",
    "Sahifaning «terisi» — CSS’ni ulaymiz va ranglar, fon hamda shriftlarni o‘zgartiramiz.",
  ),
  goals: [
    text(
      "Подключать файл style.css к странице",
      "style.css faylini sahifaga ulash",
    ),
    text("Менять цвет текста и фон", "Matn rangi va fonni o‘zgartirish"),
    text(
      "Настраивать шрифт и размер текста",
      "Shrift va matn o‘lchamini sozlash",
    ),
  ],
  conceptsTitle: text("Как работает CSS", "CSS qanday ishlaydi"),
  concepts: [
    {
      label: "LINK",
      title: text("Подключение стилей", "Uslublarni ulash"),
      text: text(
        '<link rel="stylesheet" href="style.css"> в начале HTML связывает страницу и стили.',
        'HTML boshidagi <link rel="stylesheet" href="style.css"> sahifa va uslublarni bog‘laydi.',
      ),
    },
    {
      label: text("ПРАВИЛО", "QOIDA"),
      title: text("Селектор и свойства", "Selektor va xossalar"),
      text: text(
        "h1 { color: teal; } — сделать все заголовки h1 цвета teal.",
        "h1 { color: teal; } — barcha h1 sarlavhalarini teal rangiga bo‘yash.",
      ),
    },
    {
      label: text("ЦВЕТ", "RANG"),
      title: text("Название или код", "Nomi yoki kodi"),
      text: text(
        "color: teal или color: #0b6e62 — код цвета можно подобрать в любой онлайн-палитре.",
        "color: teal yoki color: #0b6e62 — rang kodini istalgan onlayn palitrada tanlash mumkin.",
      ),
    },
  ],
  example: {
    title: text("Цвета и шрифты", "Ranglar va shriftlar"),
    text: text(
      "Тот же HTML, что и раньше, но со стилями: фон, цвет заголовка и размер текста.",
      "Avvalgi HTML, lekin uslublar bilan: fon, sarlavha rangi va matn o‘lchami.",
    ),
    points: [
      text("body — вся страница", "body — butun sahifa"),
      text(
        "color — цвет текста, background — фон",
        "color — matn rangi, background — fon",
      ),
    ],
    example: {
      show: ["css"],
      build: (lang) => ({ html: firstTagsHtml(lang), css: colorsCss, js: "" }),
    },
  },
  practice: [
    text(
      "В папке LBL создай файл style.css",
      "LBL papkasida style.css faylini yarat",
    ),
    text(
      'В самом начале index.html добавь строку <link rel="stylesheet" href="style.css">',
      'index.html’ning eng boshiga <link rel="stylesheet" href="style.css"> qatorini qo‘sh',
    ),
    text(
      "В style.css задай фон для body и шрифт Arial",
      "style.css’da body uchun fon va Arial shriftini belgila",
    ),
    text(
      "Сделай заголовок h1 своего цвета и крупнее",
      "h1 sarlavhasini o‘z rangingda va kattaroq qil",
    ),
    text(
      "Сохрани оба файла и обнови браузер",
      "Ikkala faylni saqlab, brauzerni yangila",
    ),
  ],
  mistakes: [
    text(
      "Стили не работают — проверь имя файла в href и что style.css лежит рядом с index.html",
      "Uslublar ishlamayapti — href’dagi fayl nomini va style.css index.html yonida ekanini tekshir",
    ),
    text(
      "Забыта точка с запятой после свойства — следующее свойство может не сработать",
      "Xossadan keyin nuqtali vergul unutilgan — keyingi xossa ishlamasligi mumkin",
    ),
    text(
      "Фигурные скобки { } всегда идут парой",
      "Jingalak qavslar { } doim juft bo‘ladi",
    ),
  ],
  quiz: [
    {
      question: text(
        "Как подключить style.css к странице?",
        "style.css’ni sahifaga qanday ulash mumkin?",
      ),
      answer: text(
        'Тегом <link rel="stylesheet" href="style.css">.',
        '<link rel="stylesheet" href="style.css"> tegi bilan.',
      ),
    },
    {
      question: text(
        "Что меняет свойство color?",
        "color xossasi nimani o‘zgartiradi?",
      ),
      answer: text("Цвет текста.", "Matn rangini."),
    },
    {
      question: text(
        "Что меняет свойство background?",
        "background xossasi nimani o‘zgartiradi?",
      ),
      answer: text("Фон.", "Fonni."),
    },
  ],
  homework: [
    text(
      "Подбери 2–3 цвета для своей визитки и примени их",
      "Vizitkang uchun 2–3 ta rang tanlab, ularni qo‘lla",
    ),
    text(
      "Попроси AI предложить спокойную «медицинскую» палитру из трёх цветов и попробуй её",
      "AI’dan uchta rangli tinch «tibbiy» palitra taklif qilishni so‘rab, uni sinab ko‘r",
    ),
  ],
  teacher: {
    start: text(
      "Открыть 2–3 визитки с картинками на проекторе. Отметить, кто помог соседу на прошлом уроке.",
      "Rasmli 2–3 ta vizitkani proyektorda oching. O‘tgan darsda kim yonidagiga yordam berganini ta’kidlang.",
    ),
    practice: text(
      "Дать 5 минут на свободные эксперименты с цветами — это самый весёлый момент месяца, не торопить.",
      "Ranglar bilan erkin tajriba uchun 5 daqiqa bering — bu oyning eng quvnoq lahzasi, shoshiltirmang.",
    ),
  },
});

export const cardLesson = standardLesson({
  id: "card",
  number: 11,
  title: text("CSS: отступы и карточка", "CSS: oraliqlar va kartochka"),
  summary: text(
    "Собираем красивую визитку: отступы, скругления, тень и карточка по центру экрана.",
    "Chiroyli vizitka yig‘amiz: oraliqlar, yumaloq burchaklar, soya va ekran markazidagi kartochka.",
  ),
  goals: [
    text("Понимать margin и padding", "margin va padding’ni tushunish"),
    text(
      "Давать блоку класс и стилизовать его",
      "Blokka klass berish va unga uslub berish",
    ),
    text(
      "Собрать визитку-карточку по центру экрана",
      "Ekran markazida vizitka-kartochka yig‘ish",
    ),
  ],
  conceptsTitle: text("Блоки и отступы", "Bloklar va oraliqlar"),
  concepts: [
    {
      label: "PADDING",
      title: text("Отступ внутри", "Ichki oraliq"),
      text: text(
        "Расстояние от края блока до текста внутри него.",
        "Blok chetidan uning ichidagi matngacha bo‘lgan masofa.",
      ),
    },
    {
      label: "MARGIN",
      title: text("Отступ снаружи", "Tashqi oraliq"),
      text: text(
        "Расстояние между блоком и его соседями.",
        "Blok va uning qo‘shnilari orasidagi masofa.",
      ),
    },
    {
      label: "CLASS",
      title: text("Имя для блока", "Blok uchun nom"),
      text: text(
        'class="card" в HTML и .card в CSS — стиль только для этого блока.',
        'HTML’dagi class="card" va CSS’dagi .card — faqat shu blok uchun uslub.',
      ),
    },
  ],
  example: {
    title: text("Визитка-карточка", "Vizitka-kartochka"),
    text: text(
      "Всё содержимое внутри блока с классом card: белый фон, отступы, скругление и тень.",
      "Barcha kontent card klassli blok ichida: oq fon, oraliqlar, yumaloq burchaklar va soya.",
    ),
    points: [
      text(
        'main class="card" — блок карточки',
        'main class="card" — kartochka bloki',
      ),
      text(
        "margin: 40px auto ставит карточку по центру",
        "margin: 40px auto kartochkani markazga qo‘yadi",
      ),
    ],
    example: {
      show: ["html", "css"],
      build: (lang) => ({ html: cardHtml(lang), css: cardCss, js: "" }),
    },
  },
  practice: [
    text(
      'Оберни всё содержимое страницы в <main class="card"> … </main>',
      'Sahifaning butun kontentini <main class="card"> … </main> ichiga o‘ra',
    ),
    text(
      "В style.css добавь правило .card с белым фоном и padding: 24px",
      "style.css’ga oq fon va padding: 24px bilan .card qoidasini qo‘sh",
    ),
    text(
      "Добавь border-radius: 16px и тень box-shadow",
      "border-radius: 16px va box-shadow soyasini qo‘sh",
    ),
    text(
      "Поставь карточку по центру: max-width: 360px и margin: 40px auto",
      "Kartochkani markazga qo‘y: max-width: 360px va margin: 40px auto",
    ),
    text(
      "Сравни с примером и доведи свою визитку до красоты",
      "Namuna bilan solishtirib, vizitkangni chiroyli holga keltir",
    ),
  ],
  mistakes: [
    text(
      'Стиль .card не работает — проверь точку перед card в CSS и class="card" в HTML',
      'Uslub .card ishlamayapti — CSS’da card oldidagi nuqtani va HTML’dagi class="card"ni tekshir',
    ),
    text(
      "Карточка не по центру — нужны и max-width, и margin: 40px auto",
      "Kartochka markazda emas — max-width ham, margin: 40px auto ham kerak",
    ),
    text(
      "Перепутаны margin и padding — padding внутри блока, margin снаружи",
      "margin va padding adashtirilgan — padding blok ichida, margin tashqarida",
    ),
  ],
  quiz: [
    {
      question: text(
        "Чем padding отличается от margin?",
        "padding margin’dan nimasi bilan farq qiladi?",
      ),
      answer: text(
        "padding — отступ внутри блока, margin — снаружи.",
        "padding — blok ichidagi oraliq, margin — tashqaridagi.",
      ),
    },
    {
      question: text(
        'Как в CSS обратиться к class="card"?',
        'CSS’da class="card"ga qanday murojaat qilinadi?',
      ),
      answer: text("Через .card.", ".card orqali."),
    },
    {
      question: text("Что делает border-radius?", "border-radius nima qiladi?"),
      answer: text("Скругляет углы.", "Burchaklarni yumaloqlaydi."),
    },
  ],
  homework: [
    text(
      "Закончи визитку: фото, имя, интересы, цели и ссылки в одной карточке",
      "Vizitkani tugat: rasm, ism, qiziqishlar, maqsadlar va havolalar bitta kartochkada",
    ),
    text(
      "Покажи визитку близкому человеку и спроси, что ему непонятно",
      "Vizitkani yaqiningga ko‘rsatib, unga nima tushunarsizligini so‘ra",
    ),
  ],
  teacher: {
    start: text(
      "Показать палитры, которые студенты выбрали дома. Похвалить смелые решения.",
      "Talabalar uyda tanlagan palitralarni ko‘rsating. Jasur yechimlarni maqtang.",
    ),
    practice: text(
      "Напомнить, что на следующем уроке визитка уйдёт в интернет, — пусть доведут её до состояния, которое не стыдно показать.",
      "Keyingi darsda vizitka internetga chiqishini eslating — uni ko‘rsatishga uyalmaydigan holga keltirishsin.",
    ),
  },
});

export const publishLesson = standardLesson({
  id: "publish",
  number: 12,
  title: text("Визитка в интернете", "Vizitka internetda"),
  summary: text(
    "Выкладываем визитку в интернет через GitHub Pages — без команд, прямо в браузере — и показываем результат группе.",
    "Vizitkani GitHub Pages orqali internetga joylaymiz — buyruqlarsiz, to‘g‘ridan-to‘g‘ri brauzerda — va natijani guruhga ko‘rsatamiz.",
  ),
  goals: [
    text("Создать аккаунт на GitHub", "GitHub’da akkaunt ochish"),
    text(
      "Загрузить файлы сайта через браузер",
      "Sayt fayllarini brauzer orqali yuklash",
    ),
    text(
      "Получить ссылку на свой сайт и показать его",
      "O‘z saytingga havola olib, uni ko‘rsatish",
    ),
  ],
  conceptsTitle: text(
    "Как сайт попадает в интернет",
    "Sayt internetga qanday chiqadi",
  ),
  concepts: [
    {
      label: "GITHUB",
      title: text("Хранилище проектов", "Loyihalar ombori"),
      text: text(
        "Сайт, где разработчики хранят код. Бесплатный аккаунт есть почти у каждого программиста.",
        "Dasturchilar kod saqlaydigan sayt. Bepul akkaunt deyarli har bir dasturchida bor.",
      ),
    },
    {
      label: text("РЕПОЗИТОРИЙ", "REPOZITORIY"),
      title: text("Папка проекта на GitHub", "GitHub’dagi loyiha papkasi"),
      text: text(
        "В нём лежат файлы сайта: index.html, style.css и папка images.",
        "Unda sayt fayllari bor: index.html, style.css va images papkasi.",
      ),
    },
    {
      label: "GITHUB PAGES",
      title: text("Бесплатная публикация", "Bepul e’lon qilish"),
      text: text(
        "GitHub превращает репозиторий в сайт с адресом вида имя.github.io.",
        "GitHub repozitoriyni ism.github.io ko‘rinishidagi manzilli saytga aylantiradi.",
      ),
    },
  ],
  practice: [
    text(
      "Зарегистрируйся на github.com: почта, пароль и имя пользователя латиницей",
      "github.com’da ro‘yxatdan o‘t: pochta, parol va lotin harflaridagi foydalanuvchi nomi",
    ),
    text(
      "Нажми «+» вверху справа → «New repository», назови его my-card, выбери Public, отметь «Add a README file» и нажми «Create repository»",
      "Yuqori o‘ngdagi «+» → «New repository», uni my-card deb nomla, Public’ni tanla, «Add a README file»ni belgilab, «Create repository»ni bos",
    ),
    text(
      "Нажми «Add file» → «Upload files» и перетащи все файлы из папки LBL вместе с папкой images",
      "«Add file» → «Upload files»ni bosib, LBL papkasidagi barcha fayllarni images papkasi bilan birga sudrab tashla",
    ),
    text("Внизу нажми «Commit changes»", "Pastda «Commit changes»ni bos"),
    text(
      "Открой «Settings» → «Pages», в «Branch» выбери main и нажми «Save»",
      "«Settings» → «Pages»ni och, «Branch»da main’ni tanlab, «Save»ni bos",
    ),
    text(
      "Через 1–2 минуты обнови страницу — появится ссылка на твой сайт",
      "1–2 daqiqadan keyin sahifani yangila — saytingga havola paydo bo‘ladi",
    ),
  ],
  mistakes: [
    text(
      "Вместо визитки открывается README — главный файл должен называться index.html",
      "Vizitka o‘rniga README ochilyapti — asosiy fayl index.html deb nomlanishi kerak",
    ),
    text(
      "Картинки не видны — загрузи папку images целиком и проверь регистр букв в имени",
      "Rasmlar ko‘rinmayapti — images papkasini to‘liq yukla va nomdagi harflar registrini tekshir",
    ),
    text(
      "Ссылка не открывается сразу — подожди пару минут и обнови страницу",
      "Havola darhol ochilmayapti — bir-ikki daqiqa kutib, sahifani yangila",
    ),
    text(
      "Не пришло письмо с кодом подтверждения — проверь папку «Спам»",
      "Tasdiqlash kodi bilan xat kelmadi — «Spam» papkasini tekshir",
    ),
  ],
  quiz: [
    {
      question: text(
        "Как должен называться главный файл сайта?",
        "Saytning asosiy fayli qanday nomlanishi kerak?",
      ),
      answer: text("index.html", "index.html"),
    },
    {
      question: text(
        "Где включается публикация сайта?",
        "Saytni e’lon qilish qayerda yoqiladi?",
      ),
      answer: text("Settings → Pages.", "Settings → Pages."),
    },
    {
      question: text(
        "Как выглядит адрес опубликованного сайта?",
        "E’lon qilingan sayt manzili qanday ko‘rinadi?",
      ),
      answer: text(
        "имя-пользователя.github.io/название-репозитория",
        "foydalanuvchi-nomi.github.io/repozitoriy-nomi",
      ),
    },
  ],
  homework: [
    text(
      "Отправь ссылку на визитку в чат группы",
      "Vizitka havolasini guruh chatiga yubor",
    ),
    text(
      "Напиши, что в первом месяце было самым трудным и что понравилось больше всего",
      "Birinchi oyda nima eng qiyin bo‘lganini va nima eng ko‘p yoqqanini yoz",
    ),
  ],
  teacher: {
    start: text(
      "Заранее проверить интернет. Регистрация на GitHub требует подтверждения почты — начать с неё, пока идёт обход.",
      "Internetni oldindan tekshiring. GitHub’da ro‘yxatdan o‘tish pochtani tasdiqlashni talab qiladi — obxod paytida undan boshlang.",
    ),
    practice: text(
      "Последние 20 минут — демо-день: каждый показывает визитку за минуту, группа даёт «два плюса и один шаг». Сфотографировать группу с открытыми визитками.",
      "Oxirgi 20 daqiqa — demo-kun: har kim vizitkasini bir daqiqada ko‘rsatadi, guruh «ikki plyus va bir qadam» beradi. Guruhni ochiq vizitkalar bilan suratga oling.",
    ),
  },
});
