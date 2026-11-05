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
    ru: "Слайды и конспекты занятий Fullstack + AI для будущих врачей и биомедицинских инженеров. Код пишем прямо в браузере.",
    uz: "Bo‘lajak shifokorlar va biotibbiyot muhandislari uchun Fullstack + AI mashg‘ulotlarining slaydlari va konspektlari. Kodni to‘g‘ridan-to‘g‘ri brauzerda yozamiz.",
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
} satisfies Record<string, Text>;
export const stepLabel = (step: number): Text => ({
  ru: `Шаг ${step}`,
  uz: `${step}-qadam`,
});
