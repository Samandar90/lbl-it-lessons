import type { Lang, Text } from "../i18n";
import type { CodeSet } from "./bmi";
export type Focus = keyof CodeSet;
// A step-by-step coding project with an editor, such as the BMI practicum.
export interface CodeProject {
  steps: number;
  code: (step: number, lang: Lang) => CodeSet;
}
// A finished page shown with its live result; `show` lists the code parts to
// display, and an empty list shows only the result.
export interface Example {
  build: (lang: Lang) => CodeSet;
  show: Focus[];
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
  // Shows the address of the lesson notes so students can open them.
  showNotesLink?: boolean;
}
export type Slide = SlideBase &
  (
    | { kind: "title"; subtitle: Text }
    | { kind: "points"; points: Text[]; numbered?: boolean }
    | { kind: "cards"; cards: Card[] }
    | {
        kind: "code";
        project: CodeProject;
        step: number;
        focus: Focus;
        points: Text[];
      }
    | { kind: "example"; example: Example; points: Text[] }
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
  | {
      kind: "practice";
      title: Text;
      intro: Text;
      project: CodeProject;
      steps: PracticeStep[];
    }
  | { kind: "example"; title: Text; text: Text; example: Example }
  | { kind: "quiz"; title: Text; items: { question: Text; answer: Text }[] };
export interface Lesson {
  id: string;
  badge: Text;
  title: Text;
  summary: Text;
  // Omitted until the date of the lesson is fixed.
  schedule?: { date: Text; time: string; place: Text };
  slides: Slide[];
  blocks: Block[];
}
