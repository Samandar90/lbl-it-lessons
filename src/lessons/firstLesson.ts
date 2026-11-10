import type { Text } from "../i18n";
import { doctorCardCode } from "./doctorCard.ts";
import { coursePath } from "./shared.ts";
import type { Card, Example, Lesson } from "./types";

const doctorCard: Example = { build: doctorCardCode, show: [] };
const technologyAround: Card[] = [
  {
    label: { ru: "АППАРАТЫ", uz: "APPARATLAR" },
    title: { ru: "Мониторы, ЭКГ, УЗИ", uz: "Monitorlar, EKG, UTT" },
    text: {
      ru: "Внутри каждого аппарата работает программа, которая собирает и показывает данные.",
      uz: "Har bir apparat ichida ma’lumotlarni yig‘ib ko‘rsatadigan dastur ishlaydi.",
    },
  },
  {
    label: { ru: "КЛИНИКИ", uz: "KLINIKALAR" },
    title: { ru: "Электронные системы", uz: "Elektron tizimlar" },
    text: {
      ru: "Запись, медкарта, анализы и отчёты — это приложения с базой данных.",
      uz: "Yozilish, tibbiy karta, tahlillar va hisobotlar — bular ma’lumotlar bazasiga ega ilovalar.",
    },
  },
  {
    label: "AI",
    title: { ru: "Помощник врача", uz: "Shifokor yordamchisi" },
    text: {
      ru: "Алгоритмы помогают разбирать снимки и тексты, а решение остаётся за врачом.",
      uz: "Algoritmlar tasvir va matnlarni tahlil qilishga yordam beradi, qaror esa shifokorda qoladi.",
    },
  },
];
const ideas: Card[] = [
  {
    label: { ru: "ДЛЯ УЧЁБЫ", uz: "O‘QISH UCHUN" },
    title: { ru: "Тренажёр к экзаменам", uz: "Imtihon trenajyori" },
    text: {
      ru: "Карточки по анатомии и фармакологии с личным прогрессом.",
      uz: "Anatomiya va farmakologiya bo‘yicha shaxsiy progressli kartochkalar.",
    },
  },
  {
    label: { ru: "ДЛЯ ПАЦИЕНТОВ", uz: "BEMORLAR UCHUN" },
    title: { ru: "Запись и дневник", uz: "Yozilish va kundalik" },
    text: {
      ru: "Свободное время у врача, напоминания о лекарствах, история измерений.",
      uz: "Shifokorning bo‘sh vaqti, dorilar haqida eslatmalar, o‘lchovlar tarixi.",
    },
  },
  {
    label: { ru: "ДЛЯ КЛИНИК", uz: "KLINIKALAR UCHUN" },
    title: { ru: "Мини-CRM", uz: "Mini-CRM" },
    text: {
      ru: "Карточки пациентов, приёмы и роли сотрудников в одном месте.",
      uz: "Bemor kartochkalari, qabullar va xodimlar rollari bir joyda.",
    },
  },
];
const myths: Text[] = [
  {
    ru: "«Нужно быть математиком» — для сайтов и приложений хватает логики и регулярной практики.",
    uz: "«Matematik bo‘lish kerak» — sayt va ilovalar uchun mantiq va muntazam amaliyot yetarli.",
  },
  {
    ru: "«Уже поздно начинать» — курс рассчитан на старт с нуля, без опыта в программировании.",
    uz: "«Boshlashga kech» — kurs noldan, dasturlash tajribasisiz boshlashga mo‘ljallangan.",
  },
  {
    ru: "«AI всё напишет за меня» — AI помогает, но задачу ставишь и результат проверяешь ты.",
    uz: "«AI hammasini o‘zi yozadi» — AI yordam beradi, lekin vazifani sen qo‘yasan va natijani sen tekshirasan.",
  },
  {
    ru: "«Придётся бросить медицину» — нет: 6–8 часов в неделю рядом с учёбой.",
    uz: "«Tibbiyotni tashlashga to‘g‘ri keladi» — yo‘q: o‘qish bilan birga haftasiga 6–8 soat.",
  },
];
const homework: Text[] = [
  {
    ru: "Запиши 3 проблемы из учёбы или практики, которые хочется решить.",
    uz: "O‘qish yoki amaliyotdagi hal qilishni istagan 3 ta muammoni yozib qo‘y.",
  },
  {
    ru: "Подумай, какое приложение ты хотел бы создать для учёбы, пациентов или клиники.",
    uz: "O‘qish, bemorlar yoki klinika uchun qanday ilova yaratishni xohlashingni o‘ylab ko‘r.",
  },
];

// The id stays "trial": this link has already been shared with students.
export const firstLesson: Lesson = {
  id: "trial",
  badge: { ru: "Урок 1 · Вводный", uz: "1-dars · Kirish" },
  title: {
    ru: "Врач, который создаёт технологии",
    uz: "Texnologiyalar yaratadigan shifokor",
  },
  summary: {
    ru: "Зачем будущему врачу и биомедицинскому инженеру программирование, что уже можно создать для медицины и как пройти путь от нуля до своего приложения за год.",
    uz: "Bo‘lajak shifokor va biotibbiyot muhandisiga dasturlash nima uchun kerak, tibbiyot uchun nimalar yaratish mumkin va bir yilda noldan o‘z ilovangacha qanday yo‘l bosiladi.",
  },
  slides: [
    {
      kind: "title",
      eyebrow: { ru: "УРОК 1 · ВВОДНЫЙ", uz: "1-DARS · KIRISH" },
      title: {
        ru: "Врач, который создаёт технологии",
        uz: "Texnologiyalar yaratadigan shifokor",
      },
      subtitle: {
        ru: "Почему медику стоит научиться программировать — и с чего начать",
        uz: "Nega tibbiyotchiga dasturlashni o‘rganish kerak — va nimadan boshlash",
      },
      notes: {
        ru: "Познакомиться: кто ты, чем занимаешься, какие системы уже сделаны (например, Sazion CRM для клиники). 3–5 минут.",
        uz: "Tanishuv: kimsiz, nima bilan shug‘ullanasiz, qanday tizimlar yaratilgan (masalan, klinika uchun Sazion CRM). 3–5 daqiqa.",
      },
    },
    {
      kind: "points",
      eyebrow: { ru: "ВОПРОС К ЗАЛУ", uz: "ZALGA SAVOL" },
      title: {
        ru: "Какими программами вы пользовались сегодня?",
        uz: "Bugun qaysi dasturlardan foydalandingiz?",
      },
      points: [
        {
          ru: "Мессенджеры, карты, такси",
          uz: "Messenjerlar, xaritalar, taksi",
        },
        {
          ru: "Платформа университета и электронный журнал",
          uz: "Universitet platformasi va elektron jurnal",
        },
        {
          ru: "Приложения для подготовки к экзаменам",
          uz: "Imtihonlarga tayyorlanish ilovalari",
        },
      ],
      notes: {
        ru: "Дать залу 1–2 минуты ответить. Главная мысль: программы уже везде, и каждую из них кто-то создал.",
        uz: "Zalga javob berish uchun 1–2 daqiqa bering. Asosiy fikr: dasturlar allaqachon hamma joyda va har birini kimdir yaratgan.",
      },
    },
    {
      kind: "cards",
      eyebrow: {
        ru: "МЕДИЦИНА УЖЕ ЦИФРОВАЯ",
        uz: "TIBBIYOT ALLAQACHON RAQAMLI",
      },
      title: {
        ru: "Технологии рядом с врачом",
        uz: "Shifokor yonidagi texnologiyalar",
      },
      cards: technologyAround,
    },
    {
      kind: "points",
      eyebrow: { ru: "ВОПРОС", uz: "SAVOL" },
      title: {
        ru: "Кто создаёт эти программы?",
        uz: "Bu dasturlarni kim yaratadi?",
      },
      points: [
        {
          ru: "Часто — программисты, которые ни разу не работали в клинике",
          uz: "Ko‘pincha — klinikada bir marta ham ishlamagan dasturchilar",
        },
        {
          ru: "Поэтому программы бывают неудобными, а важные мелочи теряются",
          uz: "Shuning uchun dasturlar noqulay bo‘lishi, muhim mayda narsalar esa e’tibordan chetda qolishi mumkin",
        },
        {
          ru: "Тот, кто знает медицину изнутри, видит, что нужно на самом деле",
          uz: "Tibbiyotni ichkaridan biladigan odam aslida nima kerakligini ko‘radi",
        },
      ],
    },
    {
      kind: "points",
      eyebrow: { ru: "ТВОЁ ПРЕИМУЩЕСТВО", uz: "SENING USTUNLIGING" },
      title: {
        ru: "Медик + код — редкое сочетание",
        uz: "Tibbiyotchi + kod — kamdan-kam uchraydigan uyg‘unlik",
      },
      points: [
        {
          ru: "Ты понимаешь проблему лучше программиста",
          uz: "Muammoni dasturchidan yaxshiroq tushunasan",
        },
        {
          ru: "Можешь сам собрать прототип и показать идею работающей",
          uz: "Prototipni o‘zing yig‘ib, g‘oyani ishlaydigan holda ko‘rsata olasan",
        },
        {
          ru: "Медицина остаётся с тобой — код становится ещё одним инструментом",
          uz: "Tibbiyot sen bilan qoladi — kod yana bir vositaga aylanadi",
        },
      ],
    },
    {
      kind: "cards",
      eyebrow: { ru: "ЧТО МОЖНО СОЗДАТЬ", uz: "NIMA YARATISH MUMKIN" },
      title: { ru: "Идеи, которые рядом", uz: "Yoningdagi g‘oyalar" },
      cards: ideas,
    },
    {
      kind: "example",
      example: doctorCard,
      eyebrow: { ru: "ЭТО СДЕЛАНО КОДОМ", uz: "BU KOD BILAN YARATILGAN" },
      title: { ru: "Маленькая живая страница", uz: "Kichik jonli sahifa" },
      points: [
        {
          ru: "Эту страницу написали программой — как и любой сайт",
          uz: "Bu sahifa dastur bilan yozilgan — har qanday sayt kabi",
        },
        {
          ru: "Нажми «Пульс» справа: сердце забьётся",
          uz: "O‘ngdagi «Puls»ni bos: yurak ura boshlaydi",
        },
        {
          ru: "На курсе ты шаг за шагом научишься делать такие страницы сам",
          uz: "Kursda bunday sahifalarni qadamma-qadam o‘zing yaratishni o‘rganasan",
        },
      ],
      notes: {
        ru: "Только показ: нажать «Пульс» самому, можно дать нажать желающим. Код сегодня не показывать.",
        uz: "Faqat ko‘rsatish: «Puls»ni o‘zingiz bosing, xohlovchilarga ham bosishga bering. Bugun kodni ko‘rsatmang.",
      },
    },
    {
      kind: "points",
      eyebrow: { ru: "МИФЫ", uz: "AFSONALAR" },
      title: { ru: "Что мешает начать", uz: "Boshlashga nima xalaqit beradi" },
      points: myths,
    },
    {
      kind: "points",
      numbered: true,
      eyebrow: { ru: "ЗА 12 МЕСЯЦЕВ", uz: "12 OYDA" },
      title: {
        ru: "Путь от нуля до своего продукта",
        uz: "Noldan o‘z mahsulotingacha bo‘lgan yo‘l",
      },
      points: coursePath,
    },
    {
      kind: "points",
      eyebrow: {
        ru: "КАК УСТРОЕНО ОБУЧЕНИЕ",
        uz: "O‘QISH QANDAY TASHKIL ETILGAN",
      },
      title: { ru: "Формат", uz: "Format" },
      points: [
        {
          ru: "Очно и онлайн, на русском и узбекском",
          uz: "Oflayn va onlayn, o‘zbek va rus tillarida",
        },
        {
          ru: "6–8 часов в неделю вместе с самостоятельной практикой",
          uz: "Mustaqil amaliyot bilan birga haftasiga 6–8 soat",
        },
        {
          ru: "Каждый месяц — готовый результат, который можно показать",
          uz: "Har oy — ko‘rsatish mumkin bo‘lgan tayyor natija",
        },
      ],
    },
    {
      kind: "points",
      eyebrow: { ru: "ВАШ ХОД", uz: "SIZNING NAVBATINGIZ" },
      title: {
        ru: "Какую проблему решило бы твоё приложение?",
        uz: "Sening ilovang qaysi muammoni hal qilardi?",
      },
      points: [
        {
          ru: "Вспомни неудобства в учёбе, на практике или в клинике",
          uz: "O‘qish, amaliyot yoki klinikadagi noqulayliklarni esla",
        },
        {
          ru: "Назови одно — вместе придумаем, каким может быть приложение",
          uz: "Bittasini ayt — ilova qanday bo‘lishi mumkinligini birga o‘ylab topamiz",
        },
        {
          ru: "Такие идеи могут стать твоим итоговым проектом курса",
          uz: "Bunday g‘oyalar kursdagi yakuniy loyihang bo‘lishi mumkin",
        },
      ],
      notes: {
        ru: "Собрать 3–5 идей и записать на доску. Это мостик к итоговому проекту и к записи на курс.",
        uz: "3–5 ta g‘oyani yig‘ib, doskaga yozing. Bu yakuniy loyiha va kursga yozilishga ko‘prik.",
      },
    },
    {
      kind: "end",
      eyebrow: { ru: "ДОМАШНЕЕ ЗАДАНИЕ", uz: "UY VAZIFASI" },
      title: { ru: "Спасибо! Вопросы?", uz: "Rahmat! Savollar bormi?" },
      points: homework,
    },
  ],
  blocks: [
    {
      kind: "text",
      title: { ru: "О чём урок", uz: "Dars nima haqida" },
      paragraphs: [
        {
          ru: "Это вводный урок: почему будущему врачу или биомедицинскому инженеру стоит научиться создавать технологии и как устроен путь от нуля до своего приложения.",
          uz: "Bu kirish darsi: nega bo‘lajak shifokor yoki biotibbiyot muhandisi texnologiyalar yaratishni o‘rganishi kerak va noldan o‘z ilovangacha bo‘lgan yo‘l qanday tuzilgan.",
        },
        {
          ru: "Сегодня ничего не нужно устанавливать и писать: просто слушай, задавай вопросы и думай, какое приложение хотелось бы создать.",
          uz: "Bugun hech narsa o‘rnatish va yozish shart emas: shunchaki tingla, savol ber va qanday ilova yaratishni xohlashingni o‘yla.",
        },
      ],
    },
    {
      kind: "cards",
      title: {
        ru: "Технологии рядом с врачом",
        uz: "Shifokor yonidagi texnologiyalar",
      },
      cards: technologyAround,
    },
    {
      kind: "cards",
      title: {
        ru: "Что можно создать для медицины",
        uz: "Tibbiyot uchun nima yaratish mumkin",
      },
      cards: ideas,
    },
    {
      kind: "example",
      example: doctorCard,
      title: { ru: "Нажми на кнопку", uz: "Tugmani bos" },
      text: {
        ru: "Эта маленькая страница сделана кодом. Нажми «Пульс» — сердце забьётся. На курсе ты научишься делать такие страницы сам.",
        uz: "Bu kichik sahifa kod bilan yaratilgan. «Puls»ni bos — yurak ura boshlaydi. Kursda bunday sahifalarni o‘zing yaratishni o‘rganasan.",
      },
    },
    {
      kind: "list",
      title: {
        ru: "Мифы, которые мешают начать",
        uz: "Boshlashga xalaqit beradigan afsonalar",
      },
      items: myths,
    },
    {
      kind: "list",
      numbered: true,
      title: { ru: "Путь за 12 месяцев", uz: "12 oylik yo‘l" },
      items: coursePath,
    },
    {
      kind: "list",
      numbered: true,
      title: { ru: "Домашнее задание", uz: "Uy vazifasi" },
      items: homework,
    },
  ],
};
