import type { Text } from "../i18n";
import type { CodeSet } from "./bmi";
export type Focus = keyof CodeSet;
export interface CodeProject {
  steps: number;
  code: (step: number, lang: "ru" | "uz") => CodeSet;
}
export interface Card {
  label: string | Text;
  title: Text;
  text: Text;
}
interface SlideBase {
  eyebrow: Text;
  title: Text;
  notes?: Text;
}
export type Slide = SlideBase &
  (
    | { kind: "title"; subtitle: Text }
    | { kind: "points"; points: Text[]; numbered?: boolean }
    | { kind: "cards"; cards: Card[]; showNotesLink?: boolean }
    | { kind: "code"; step: number; focus: Focus; points: Text[] }
    | { kind: "end"; points: Text[] }
  );
export interface PracticeStep {
  title: Text;
  text: Text;
  focus: Focus;
}
export type Block =
  | { kind: "text"; title: Text; paragraphs: Text[] }
  | { kind: "cards"; title: Text; cards: Card[] }
  | { kind: "list"; title: Text; items: Text[]; numbered?: boolean }
  | { kind: "practice"; title: Text; intro: Text; steps: PracticeStep[] }
  | { kind: "quiz"; title: Text; items: { question: Text; answer: Text }[] };
export interface Lesson {
  id: string;
  badge: Text;
  title: Text;
  summary: Text;
  date: Text;
  time: string;
  place: Text;
  project: CodeProject;
  slides: Slide[];
  blocks: Block[];
}
