import type { Lesson } from "./types";
import { bmiLesson } from "./bmiLesson.ts";
import { firstLesson } from "./firstLesson.ts";
import {
  browserLesson,
  filesLesson,
  installLesson,
  keyboardLesson,
  vscodeLesson,
} from "./month1Computer.ts";
import {
  cardLesson,
  cssLesson,
  htmlLesson,
  mediaLesson,
  publishLesson,
  structureLesson,
} from "./month1Web.ts";
// Every prepared lesson; the order of the course lives in src/plan/plan.ts.
export const lessons: Lesson[] = [
  firstLesson,
  keyboardLesson,
  filesLesson,
  browserLesson,
  installLesson,
  vscodeLesson,
  htmlLesson,
  structureLesson,
  mediaLesson,
  cssLesson,
  cardLesson,
  publishLesson,
  bmiLesson,
];
