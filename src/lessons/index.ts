import type { Lesson } from "./types";
import { bmiLesson } from "./bmiLesson.ts";
import { firstLesson } from "./firstLesson.ts";
// Add new lessons here in the order they are taught.
export const lessons: Lesson[] = [firstLesson, bmiLesson];
