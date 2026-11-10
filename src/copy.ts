import type { Text } from "./i18n";
export const contacts = {
  phone: "+998 99 022 01 14",
  phoneHref: "tel:+998990220114",
  telegram: "@lbl_it",
  telegramHref: "https://t.me/lbl_it",
  courseSite: "https://samandar90.github.io/lbl-it-department/",
};
export const ui = {
  lessons: { ru: "Уроки", uz: "Darslar" },
  courseSite: { ru: "Сайт курса", uz: "Kurs sayti" },
  notes: { ru: "Конспект", uz: "Konspekt" },
  slides: { ru: "Слайды", uz: "Slaydlar" },
  openSlides: { ru: "Открыть слайды", uz: "Slaydlarni ochish" },
  toPractice: { ru: "Перейти к практике", uz: "Amaliyotga o‘tish" },
  homeEyebrow: { ru: "LBL IT DEPARTMENT", uz: "LBL IT DEPARTMENT" },
  homeTitle: { ru: "Уроки курса", uz: "Kurs darslari" },
  homeLead: {
    ru: "Программа на год: 144 урока, по три в неделю. Начинаем с нуля — с компьютера и клавиатуры — и к концу года создаём своё приложение.",
    uz: "Bir yillik dastur: haftasiga uchtadan, 144 ta dars. Noldan — kompyuter va klaviaturadan boshlaymiz va yil oxirida o‘z ilovamizni yaratamiz.",
  },
  notFound: {
    ru: "Такой страницы нет. Вот список уроков.",
    uz: "Bunday sahifa yo‘q. Mana darslar ro‘yxati.",
  },
  date: { ru: "Дата", uz: "Sana" },
  time: { ru: "Время", uz: "Vaqt" },
  place: { ru: "Место", uz: "Joy" },
  openInEditor: { ru: "Открыть в редакторе", uz: "Muharrirda ochish" },
  copy: { ru: "Копировать", uz: "Nusxa olish" },
  copied: { ru: "Скопировано", uz: "Nusxa olindi" },
  editor: { ru: "Редактор кода", uz: "Kod muharriri" },
  editorHint: {
    ru: "Меняй код — результат обновляется сам.",
    uz: "Kodni o‘zgartir — natija o‘zi yangilanadi.",
  },
  reset: { ru: "Вернуть код шага", uz: "Qadam kodini qaytarish" },
  preview: { ru: "Результат", uz: "Natija" },
  contactsTitle: {
    ru: "Хочешь учиться дальше?",
    uz: "O‘qishni davom ettirmoqchimisan?",
  },
  contactsText: {
    ru: "Напиши или позвони — расскажу о программе на 12 месяцев и форматах занятий.",
    uz: "Yoz yoki qo‘ng‘iroq qil — 12 oylik dastur va mashg‘ulot formatlari haqida aytib beraman.",
  },
  program: { ru: "Программа курса", uz: "Kurs dasturi" },
  previous: { ru: "Назад", uz: "Orqaga" },
  next: { ru: "Далее", uz: "Keyingi" },
  speakerNotes: { ru: "Заметки", uz: "Eslatmalar" },
  fullscreen: { ru: "Во весь экран", uz: "To‘liq ekran" },
  slidesHelp: {
    ru: "← → или пульт: листать · F: весь экран · N: заметки",
    uz: "← → yoki pult: varaqlash · F: to‘liq ekran · N: eslatmalar",
  },
  notesLink: { ru: "Конспект и редактор", uz: "Konspekt va muharrir" },
  backToNotes: { ru: "К конспекту", uz: "Konspektga" },
  slideOf: { ru: "из", uz: "/" },
  answer: { ru: "Ответ", uz: "Javob" },
  methodTitle: { ru: "Как мы учимся", uz: "Qanday o‘qiymiz" },
  planTitle: { ru: "Программа уроков", uz: "Darslar dasturi" },
  planLead: {
    ru: "Уроки первого месяца готовы: открывай конспект или слайды. Остальные появятся по мере курса.",
    uz: "Birinchi oy darslari tayyor: konspekt yoki slaydlarni och. Qolganlari kurs davomida paydo bo‘ladi.",
  },
  soon: { ru: "скоро", uz: "tez orada" },
} satisfies Record<string, Text>;
export const monthLabel = (n: number): Text => ({
  ru: `Месяц ${n}`,
  uz: `${n}-oy`,
});
export const weekLabel = (n: number): Text => ({
  ru: `Неделя ${n}`,
  uz: `${n}-hafta`,
});
export const lessonLabel = (n: number): Text => ({
  ru: `Урок ${n}`,
  uz: `${n}-dars`,
});
export const stepLabel = (step: number): Text => ({
  ru: `Шаг ${step}`,
  uz: `${step}-qadam`,
});
