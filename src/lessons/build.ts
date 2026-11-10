import type { Text } from "../i18n";
import type { Card, Example, Lesson, Slide } from "./types";

// Everything a regular lesson needs; standardLesson turns it into the same
// rhythm of slides and notes for every lesson of the course.
export interface LessonSpec {
  id: string;
  number: number;
  title: Text;
  summary: Text;
  goals: Text[];
  conceptsTitle: Text;
  concepts: Card[];
  example?: { title: Text; text: Text; points: Text[]; example: Example };
  practice: Text[];
  mistakes: Text[];
  quiz: { question: Text; answer: Text }[];
  homework: Text[];
  teacher: { start: Text; practice: Text };
}

export const text = (ru: string, uz: string): Text => ({ ru, uz });
// The ward round opens every lesson: see the mentoring method in MENTORING.md.
const wardRound = text(
  "Обход, 10 минут: каждый коротко показывает домашнее задание. Отметь в карте прогресса, кто справился, а кому нужна помощь.",
  "Obxod, 10 daqiqa: har kim uy vazifasini qisqa ko‘rsatadi. Progress xaritasida kim uddalaganini va kimga yordam kerakligini belgilang.",
);
function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );
}

export function standardLesson(spec: LessonSpec): Lesson {
  const n = spec.number;
  const conceptSlides: Slide[] = chunk(spec.concepts, 3).map((cards) => ({
    kind: "cards",
    eyebrow: text("ГЛАВНОЕ", "ASOSIY"),
    title: spec.conceptsTitle,
    cards,
  }));
  const exampleSlides: Slide[] = spec.example
    ? [
        {
          kind: "example",
          eyebrow: text("ПРИМЕР", "NAMUNA"),
          title: spec.example.title,
          points: spec.example.points,
          example: spec.example.example,
        },
      ]
    : [];
  return {
    id: spec.id,
    badge: text(`Урок ${n}`, `${n}-dars`),
    title: spec.title,
    summary: spec.summary,
    slides: [
      {
        kind: "title",
        eyebrow: text(`УРОК ${n} · МЕСЯЦ 1`, `${n}-DARS · 1-OY`),
        title: spec.title,
        subtitle: spec.summary,
        notes: text(
          `${wardRound.ru} ${spec.teacher.start.ru}`,
          `${wardRound.uz} ${spec.teacher.start.uz}`,
        ),
      },
      {
        kind: "points",
        numbered: true,
        eyebrow: text("СЕГОДНЯ", "BUGUN"),
        title: text("Что ты научишься делать", "Nimani qilishni o‘rganasan"),
        points: spec.goals,
      },
      ...conceptSlides,
      ...exampleSlides,
      {
        kind: "points",
        numbered: true,
        showNotesLink: true,
        eyebrow: text("ПРАКТИКА", "AMALIYOT"),
        title: text("Делаем вместе", "Birga bajaramiz"),
        points: spec.practice,
        notes: spec.teacher.practice,
      },
      {
        kind: "points",
        eyebrow: text("ЕСЛИ НЕ ПОЛУЧАЕТСЯ", "AGAR CHIQMASA"),
        title: text("Частые ошибки", "Ko‘p uchraydigan xatolar"),
        points: spec.mistakes,
      },
      {
        kind: "end",
        eyebrow: text("ДОМАШНЕЕ ЗАДАНИЕ", "UY VAZIFASI"),
        title: text("Отличная работа!", "Ajoyib ish!"),
        points: spec.homework,
      },
    ],
    blocks: [
      {
        kind: "text",
        title: text("О чём урок", "Dars nima haqida"),
        paragraphs: [spec.summary],
      },
      {
        kind: "list",
        numbered: true,
        title: text("Сегодня ты научишься", "Bugun o‘rganasan"),
        items: spec.goals,
      },
      { kind: "cards", title: spec.conceptsTitle, cards: spec.concepts },
      ...(spec.example
        ? [
            {
              kind: "example" as const,
              title: spec.example.title,
              text: spec.example.text,
              example: spec.example.example,
            },
          ]
        : []),
      {
        kind: "list",
        numbered: true,
        title: text("Практика по шагам", "Qadamma-qadam amaliyot"),
        items: spec.practice,
      },
      {
        kind: "list",
        title: text("Если что-то не получается", "Agar nimadir chiqmasa"),
        items: spec.mistakes,
      },
      {
        kind: "quiz",
        title: text("Проверь себя", "O‘zingni tekshir"),
        items: spec.quiz,
      },
      {
        kind: "list",
        numbered: true,
        title: text("Домашнее задание", "Uy vazifasi"),
        items: spec.homework,
      },
    ],
  };
}
