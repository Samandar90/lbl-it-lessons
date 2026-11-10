import type { Text } from "../i18n";
import { laterMonths } from "./laterMonths.ts";
import type { PlannedLesson, PlannedMonth } from "./types";

const text = (ru: string, uz: string): Text => ({ ru, uz });
const planned = (ru: string, uz: string): PlannedLesson => ({
  title: text(ru, uz),
});

// The year of the course: three lessons a week, twelve a month.
// Month 1 starts from zero for students who rarely use a computer.
const month1: PlannedMonth = {
  title: text(
    "Компьютер, HTML и первая страница",
    "Kompyuter, HTML va birinchi sahifa",
  ),
  weeks: [
    {
      title: text("Компьютер без страха", "Qo‘rquvsiz kompyuter"),
      lessons: [{ id: "trial" }, { id: "keyboard" }, { id: "files" }],
    },
    {
      title: text("Интернет и инструменты", "Internet va vositalar"),
      lessons: [{ id: "browser" }, { id: "install" }, { id: "vscode" }],
    },
    {
      title: text("Первая страница: HTML", "Birinchi sahifa: HTML"),
      lessons: [{ id: "html" }, { id: "structure" }, { id: "media" }],
    },
    {
      title: text("Оформление и публикация", "Bezak va e’lon qilish"),
      lessons: [{ id: "css" }, { id: "card" }, { id: "publish" }],
    },
  ],
};
// Month 2 takes what moved out of month 1: forms, Git and responsive layout.
const month2: PlannedMonth = {
  title: text(
    "Формы, Git и адаптивный сайт клиники",
    "Formalar, Git va klinikaning moslashuvchan sayti",
  ),
  weeks: [
    {
      title: text(
        "Формы и инструменты разработчика",
        "Formalar va dasturchi vositalari",
      ),
      lessons: [
        planned(
          "Формы: поля input и подписи label",
          "Formalar: input maydonlari va label yozuvlari",
        ),
        planned(
          "Списки выбора, многострочный текст и форма записи к врачу",
          "Tanlov ro‘yxatlari, ko‘p qatorli matn va shifokorga yozilish formasi",
        ),
        planned(
          "DevTools: найти элемент и исправить стиль",
          "DevTools: elementni topish va uslubni tuzatish",
        ),
      ],
    },
    {
      title: text("Git и GitHub", "Git va GitHub"),
      lessons: [
        planned(
          "Зачем нужен Git: история изменений",
          "Git nima uchun kerak: o‘zgarishlar tarixi",
        ),
        planned(
          "Терминал и команды git init, add, commit",
          "Terminal va git init, add, commit buyruqlari",
        ),
        planned(
          "GitHub: отправка проекта и README",
          "GitHub: loyihani yuborish va README",
        ),
      ],
    },
    {
      title: text("Flexbox и Grid", "Flexbox va Grid"),
      lessons: [
        planned(
          "Box model, размеры и CSS-переменные",
          "Box model, o‘lchamlar va CSS o‘zgaruvchilari",
        ),
        planned(
          "Flexbox: выравнивание элементов",
          "Flexbox: elementlarni tekislash",
        ),
        planned(
          "Grid: сетка карточек услуг клиники",
          "Grid: klinika xizmatlari kartochkalari to‘ri",
        ),
      ],
    },
    {
      title: text("Мобильная версия и качество", "Mobil versiya va sifat"),
      lessons: [
        planned(
          "Mobile-first и медиазапросы",
          "Mobile-first va media so‘rovlar",
        ),
        planned(
          "Доступность: контраст, клавиатура и подписи",
          "Qulaylik: kontrast, klaviatura va yozuvlar",
        ),
        planned(
          "Итог месяца: адаптивный сайт учебной клиники",
          "Oy yakuni: o‘quv klinikasining moslashuvchan sayti",
        ),
      ],
    },
  ],
};
export const coursePlan: PlannedMonth[] = [month1, month2, ...laterMonths];
