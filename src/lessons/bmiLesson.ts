import { bmiCode, bmiSteps } from "./bmi.ts";
import type { Text } from "../i18n";
import { coursePath } from "./shared.ts";
import type { Card, CodeProject, Lesson } from "./types";

const bmiProject: CodeProject = { steps: bmiSteps, code: bmiCode };

const languagesOfPage: Card[] = [
  {
    label: "HTML",
    title: { ru: "Скелет", uz: "Skelet" },
    text: {
      ru: "Структура страницы: заголовки, поля, кнопки.",
      uz: "Sahifa tuzilmasi: sarlavhalar, maydonlar, tugmalar.",
    },
  },
  {
    label: "CSS",
    title: { ru: "Кожа и внешность", uz: "Teri va tashqi ko‘rinish" },
    text: {
      ru: "Цвета, шрифты, отступы и расположение элементов.",
      uz: "Ranglar, shriftlar, oraliqlar va elementlarning joylashuvi.",
    },
  },
  {
    label: "JavaScript",
    title: { ru: "Нервная система", uz: "Asab tizimi" },
    text: {
      ru: "Реакции на действия: клик, ввод, расчёт.",
      uz: "Harakatlarga javob: bosish, kiritish, hisoblash.",
    },
  },
];
const pageLoading: Text[] = [
  {
    ru: "Ты вводишь адрес сайта в браузере",
    uz: "Brauzerga sayt manzilini kiritasan",
  },
  {
    ru: "Браузер отправляет запрос на сервер",
    uz: "Brauzer serverga so‘rov yuboradi",
  },
  {
    ru: "Сервер возвращает HTML, CSS и JavaScript",
    uz: "Server HTML, CSS va JavaScript’ni qaytaradi",
  },
  {
    ru: "Браузер собирает из них страницу",
    uz: "Brauzer ulardan sahifani yig‘adi",
  },
];
const bmiTask: Card[] = [
  {
    label: { ru: "ФОРМУЛА", uz: "FORMULA" },
    title: {
      ru: "ИМТ = вес (кг) / рост (м)²",
      uz: "TVI = vazn (kg) / bo‘y (m)²",
    },
    text: {
      ru: "Например: 70 / 1,75² = 22,9",
      uz: "Masalan: 70 / 1,75² = 22,9",
    },
  },
  {
    label: { ru: "ВОЗ", uz: "JSST" },
    title: { ru: "Категории", uz: "Toifalar" },
    text: {
      ru: "меньше 18,5 — недостаток массы · 18,5–24,9 — норма · 25–29,9 — избыточная масса · 30 и больше — ожирение",
      uz: "18,5 dan kam — vazn yetishmasligi · 18,5–24,9 — me’yor · 25–29,9 — ortiqcha vazn · 30 va undan ko‘p — semizlik",
    },
  },
  {
    label: { ru: "ЦЕЛЬ", uz: "MAQSAD" },
    title: { ru: "Работающее приложение", uz: "Ishlaydigan ilova" },
    text: {
      ru: "Два поля, кнопка и результат с категорией.",
      uz: "Ikki maydon, tugma va toifali natija.",
    },
  },
];
const homework: Text[] = [
  {
    ru: "Поменяй цвета и шрифт калькулятора в CSS.",
    uz: "Kalkulyatorning ranglari va shriftini CSS’da o‘zgartir.",
  },
  {
    ru: "Добавь поле «Имя» и выводи его в результате.",
    uz: "«Ism» maydonini qo‘sh va uni natijada chiqar.",
  },
  {
    ru: "Установи VS Code и создай аккаунт на GitHub: они понадобятся на первом занятии курса.",
    uz: "VS Code’ni o‘rnat va GitHub’da akkaunt och: ular kursning birinchi mashg‘ulotida kerak bo‘ladi.",
  },
  {
    ru: "Придумай медицинское приложение, которое стоит создать за год обучения.",
    uz: "Bir yillik o‘qishda yaratishga arziydigan tibbiy ilovani o‘ylab top.",
  },
];

export const bmiLesson: Lesson = {
  id: "bmi",
  badge: { ru: "Практикум", uz: "Amaliy mashg‘ulot" },
  title: {
    ru: "Твоё первое медицинское приложение",
    uz: "Sening birinchi tibbiy ilovang",
  },
  summary: {
    ru: "За один урок разберёмся, как устроен сайт, и соберём калькулятор индекса массы тела на HTML, CSS и JavaScript.",
    uz: "Bir darsda sayt qanday tuzilganini bilib olamiz va HTML, CSS hamda JavaScript’da tana vazni indeksi kalkulyatorini yaratamiz.",
  },
  slides: [
    {
      kind: "title",
      eyebrow: {
        ru: "ПРАКТИКУМ · HTML, CSS, JAVASCRIPT",
        uz: "AMALIY MASHG‘ULOT · HTML, CSS, JAVASCRIPT",
      },
      title: {
        ru: "Твоё первое медицинское приложение",
        uz: "Sening birinchi tibbiy ilovang",
      },
      subtitle: {
        ru: "Fullstack + AI для будущих врачей и биомедицинских инженеров",
        uz: "Bo‘lajak shifokorlar va biotibbiyot muhandislari uchun Fullstack + AI",
      },
      notes: {
        ru: "Познакомиться: кто ты, чем занимаешься, какие системы уже сделаны. 3–5 минут.",
        uz: "Tanishuv: kimsiz, nima bilan shug‘ullanasiz, qanday tizimlar yaratgansiz. 3–5 daqiqa.",
      },
    },
    {
      kind: "points",
      numbered: true,
      eyebrow: { ru: "ПЛАН УРОКА", uz: "DARS REJASI" },
      title: { ru: "Что будет сегодня", uz: "Bugun nima bo‘ladi" },
      points: [
        { ru: "Как устроен любой сайт", uz: "Har qanday sayt qanday tuzilgan" },
        {
          ru: "Пишем калькулятор ИМТ: HTML, CSS и JavaScript",
          uz: "TVI kalkulyatorini yozamiz: HTML, CSS va JavaScript",
        },
        {
          ru: "Что можно создать за год обучения",
          uz: "Bir yillik o‘qishda nima yaratish mumkin",
        },
        { ru: "Вопросы и следующий шаг", uz: "Savollar va keyingi qadam" },
      ],
    },
    {
      kind: "points",
      eyebrow: {
        ru: "ЗАЧЕМ ЭТО МЕДИКУ",
        uz: "TIBBIYOTCHIGA BU NIMA UCHUN KERAK",
      },
      title: {
        ru: "Ты видишь проблемы медицины изнутри",
        uz: "Sen tibbiyot muammolarini ichkaridan ko‘rasan",
      },
      points: [
        {
          ru: "Очереди, бумажные журналы, сотни терминов к сессии — ты знаешь эти задачи лучше программиста",
          uz: "Navbatlar, qog‘oz jurnallar, sessiyaga yuzlab atamalar — bu vazifalarni dasturchidan yaxshiroq bilasan",
        },
        {
          ru: "Прототип своей идеи можно собрать самому, без подрядчика",
          uz: "G‘oyangning prototipini pudratchisiz o‘zing yarata olasan",
        },
        {
          ru: "Медицина остаётся с тобой: код — ещё один инструмент",
          uz: "Tibbiyot sen bilan qoladi: kod — yana bir vosita",
        },
      ],
      notes: {
        ru: "Спросить зал: какие неудобства вы видите в учёбе или в клинике? Записать 2–3 ответа — к ним можно вернуться в конце.",
        uz: "Zaldan so‘rang: o‘qishda yoki klinikada qanday noqulayliklarni ko‘ryapsiz? 2–3 javobni yozib qo‘ying — oxirida ularga qaytish mumkin.",
      },
    },
    {
      kind: "cards",
      eyebrow: { ru: "САЙТ КАК ОРГАНИЗМ", uz: "SAYT ORGANIZM KABI" },
      title: {
        ru: "Три языка любой страницы",
        uz: "Har qanday sahifaning uchta tili",
      },
      cards: languagesOfPage,
      notes: {
        ru: "Вопрос залу: что будет с организмом, у которого есть скелет, но нет нервной системы? Так выглядит страница без JavaScript.",
        uz: "Zalga savol: skeleti bor, lekin asab tizimi yo‘q organizm qanday bo‘ladi? JavaScript’siz sahifa ham shunday.",
      },
    },
    {
      kind: "points",
      numbered: true,
      eyebrow: {
        ru: "ЧТО ПРОИСХОДИТ ЗА СЕКУНДУ",
        uz: "BIR SONIYADA NIMA SODIR BO‘LADI",
      },
      title: { ru: "Как открывается сайт", uz: "Sayt qanday ochiladi" },
      points: pageLoading,
    },
    {
      kind: "cards",
      showNotesLink: true,
      eyebrow: { ru: "ПРАКТИКА", uz: "AMALIYOT" },
      title: {
        ru: "Калькулятор индекса массы тела",
        uz: "Tana vazni indeksi kalkulyatori",
      },
      cards: bmiTask,
      notes: {
        ru: "Попросить всех открыть ссылку на конспект: там редактор кода, ничего устанавливать не нужно. Подойдёт и телефон.",
        uz: "Hammadan konspekt havolasini ochishni so‘rang: u yerda kod muharriri bor, hech narsa o‘rnatish shart emas. Telefon ham bo‘ladi.",
      },
    },
    {
      kind: "code",
      project: bmiProject,
      step: 1,
      focus: "html",
      eyebrow: { ru: "ШАГ 1 · HTML", uz: "1-QADAM · HTML" },
      title: { ru: "Скелет страницы", uz: "Sahifa skeleti" },
      points: [
        {
          ru: "Заголовок h1, два поля input и кнопка",
          uz: "h1 sarlavha, ikkita input maydon va tugma",
        },
        {
          ru: "У каждого поля есть id — по нему JavaScript найдёт элемент",
          uz: "Har bir maydonda id bor — JavaScript elementni shu orqali topadi",
        },
      ],
    },
    {
      kind: "code",
      project: bmiProject,
      step: 2,
      focus: "css",
      eyebrow: { ru: "ШАГ 2 · CSS", uz: "2-QADAM · CSS" },
      title: { ru: "Внешний вид", uz: "Tashqi ko‘rinish" },
      points: [
        {
          ru: "Селектор выбирает элемент, свойства меняют его вид",
          uz: "Selektor elementni tanlaydi, xossalar uning ko‘rinishini o‘zgartiradi",
        },
        {
          ru: "Цвет #0b6e62 — как медицинская форма",
          uz: "#0b6e62 rangi — tibbiy forma kabi",
        },
      ],
    },
    {
      kind: "code",
      project: bmiProject,
      step: 3,
      focus: "js",
      eyebrow: { ru: "ШАГ 3 · JAVASCRIPT", uz: "3-QADAM · JAVASCRIPT" },
      title: { ru: "Реакция на клик", uz: "Bosishga javob" },
      points: [
        {
          ru: "addEventListener ждёт нажатия кнопки",
          uz: "addEventListener tugma bosilishini kutadi",
        },
        {
          ru: "Рост делим на 100: формула использует метры",
          uz: "Bo‘yni 100 ga bo‘lamiz: formula metrdan foydalanadi",
        },
        {
          ru: "Пустые поля проверяем до расчёта",
          uz: "Bo‘sh maydonlarni hisoblashdan oldin tekshiramiz",
        },
      ],
      notes: {
        ru: "Попросить ввести свои данные и проверить: 70 кг и 175 см дают 22,9.",
        uz: "O‘z ma’lumotlarini kiritib tekshirishni so‘rang: 70 kg va 175 sm 22,9 ni beradi.",
      },
    },
    {
      kind: "code",
      project: bmiProject,
      step: 4,
      focus: "js",
      eyebrow: { ru: "ШАГ 4 · КАТЕГОРИИ ВОЗ", uz: "4-QADAM · JSST TOIFALARI" },
      title: { ru: "Умный результат", uz: "Aqlli natija" },
      points: [
        {
          ru: "Функция category возвращает категорию по значению ИМТ",
          uz: "category funksiyasi TVI qiymatiga qarab toifani qaytaradi",
        },
        {
          ru: "Цвет результата меняется: норма — зелёный",
          uz: "Natija rangi o‘zgaradi: me’yor — yashil",
        },
      ],
    },
    {
      kind: "points",
      numbered: true,
      eyebrow: { ru: "ЗА 12 МЕСЯЦЕВ", uz: "12 OYDA" },
      title: { ru: "Что дальше", uz: "Keyin nima" },
      points: coursePath,
    },
    {
      kind: "end",
      eyebrow: { ru: "ДОМАШНЕЕ ЗАДАНИЕ", uz: "UY VAZIFASI" },
      title: { ru: "Спасибо! Вопросы?", uz: "Rahmat! Savollar bormi?" },
      points: homework.slice(0, 3),
    },
  ],
  blocks: [
    {
      kind: "text",
      title: { ru: "О чём урок", uz: "Dars nima haqida" },
      paragraphs: [
        {
          ru: "Сегодня ты создашь первое небольшое медицинское приложение — калькулятор индекса массы тела. По пути разберёмся, из чего состоит любой сайт.",
          uz: "Bugun birinchi kichik tibbiy ilovangni — tana vazni indeksi kalkulyatorini yaratasan. Yo‘l-yo‘lakay har qanday sayt nimalardan iboratligini bilib olamiz.",
        },
        {
          ru: "Нужен только браузер: код пишем прямо на этой странице, ничего устанавливать не нужно. Опыт в программировании не требуется.",
          uz: "Faqat brauzer kerak: kodni shu sahifada yozamiz, hech narsa o‘rnatish shart emas. Dasturlash tajribasi talab qilinmaydi.",
        },
      ],
    },
    {
      kind: "cards",
      title: { ru: "Сайт как организм", uz: "Sayt organizm kabi" },
      cards: languagesOfPage,
    },
    {
      kind: "list",
      numbered: true,
      title: { ru: "Как открывается сайт", uz: "Sayt qanday ochiladi" },
      items: pageLoading,
    },
    {
      kind: "cards",
      title: {
        ru: "Задача: калькулятор индекса массы тела",
        uz: "Vazifa: tana vazni indeksi kalkulyatori",
      },
      cards: bmiTask,
    },
    {
      kind: "practice",
      project: bmiProject,
      title: { ru: "Практика по шагам", uz: "Qadamma-qadam amaliyot" },
      intro: {
        ru: "Собираем приложение за четыре шага. Нажми «Открыть в редакторе», меняй код и сразу смотри результат.",
        uz: "Ilovani to‘rt qadamda yig‘amiz. «Muharrirda ochish»ni bos, kodni o‘zgartir va natijani darhol ko‘r.",
      },
      steps: [
        {
          focus: "html",
          title: { ru: "HTML: скелет страницы", uz: "HTML: sahifa skeleti" },
          text: {
            ru: "Создаём структуру: заголовок, два поля для веса и роста, кнопку и пустой абзац для результата. Атрибут id — это «имя» элемента: по нему JavaScript найдёт поле.",
            uz: "Tuzilmani yaratamiz: sarlavha, vazn va bo‘y uchun ikkita maydon, tugma va natija uchun bo‘sh xatboshi. id atributi — elementning «nomi»: JavaScript maydonni shu orqali topadi.",
          },
        },
        {
          focus: "css",
          title: { ru: "CSS: внешний вид", uz: "CSS: tashqi ko‘rinish" },
          text: {
            ru: "Добавляем оформление. body — вся страница, .card — карточка, #result — абзац с результатом. Попробуй заменить цвет #0b6e62 на свой.",
            uz: "Bezakni qo‘shamiz. body — butun sahifa, .card — kartochka, #result — natija xatboshisi. #0b6e62 rangini o‘zingnikiga almashtirib ko‘r.",
          },
        },
        {
          focus: "js",
          title: {
            ru: "JavaScript: расчёт по клику",
            uz: "JavaScript: bosilganda hisoblash",
          },
          text: {
            ru: "Учим кнопку считать. Берём значения полей, переводим рост из сантиметров в метры и делим вес на квадрат роста. toFixed(1) оставляет один знак после запятой.",
            uz: "Tugmani hisoblashga o‘rgatamiz. Maydonlar qiymatini olamiz, bo‘yni santimetrdan metrga o‘tkazamiz va vaznni bo‘yning kvadratiga bo‘lamiz. toFixed(1) verguldan keyin bitta raqam qoldiradi.",
          },
        },
        {
          focus: "js",
          title: { ru: "Категории ВОЗ", uz: "JSST toifalari" },
          text: {
            ru: "Функция category сравнивает ИМТ с границами 18,5, 25 и 30 и возвращает название категории. Норма подсвечивается зелёным, остальные значения — оранжевым.",
            uz: "category funksiyasi TVI’ni 18,5, 25 va 30 chegaralari bilan solishtiradi va toifa nomini qaytaradi. Me’yor yashil, qolgan qiymatlar to‘q sariq rangda ko‘rsatiladi.",
          },
        },
      ],
    },
    {
      kind: "quiz",
      title: { ru: "Проверь себя", uz: "O‘zingni tekshir" },
      items: [
        {
          question: {
            ru: "Какой язык отвечает за внешний вид страницы?",
            uz: "Sahifaning tashqi ko‘rinishi uchun qaysi til javob beradi?",
          },
          answer: {
            ru: "CSS. HTML задаёт структуру, а JavaScript — поведение.",
            uz: "CSS. HTML tuzilmani, JavaScript esa xatti-harakatni belgilaydi.",
          },
        },
        {
          question: {
            ru: "Почему рост делим на 100?",
            uz: "Nega bo‘yni 100 ga bo‘lamiz?",
          },
          answer: {
            ru: "Формула ИМТ использует рост в метрах, а пользователь вводит его в сантиметрах.",
            uz: "TVI formulasi bo‘yni metrda ishlatadi, foydalanuvchi esa uni santimetrda kiritadi.",
          },
        },
        {
          question: {
            ru: "Что покажет калькулятор, если поле роста пустое?",
            uz: "Bo‘y maydoni bo‘sh bo‘lsa, kalkulyator nimani ko‘rsatadi?",
          },
          answer: {
            ru: "Сообщение «Введите вес и рост»: проверка if срабатывает до расчёта.",
            uz: "«Vazn va bo‘yni kiriting» xabarini: if tekshiruvi hisoblashdan oldin ishlaydi.",
          },
        },
      ],
    },
    {
      kind: "list",
      numbered: true,
      title: { ru: "Домашнее задание", uz: "Uy vazifasi" },
      items: homework,
    },
  ],
};
