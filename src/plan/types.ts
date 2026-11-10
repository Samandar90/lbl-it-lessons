import type { Text } from "../i18n";
// A prepared lesson is referenced by id; the rest are planned by title only.
export type PlannedLesson = { id: string } | { title: Text };
export interface PlannedWeek {
  title: Text;
  lessons: PlannedLesson[];
}
export interface PlannedMonth {
  title: Text;
  weeks: PlannedWeek[];
}
