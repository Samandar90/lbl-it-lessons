import test from "node:test";
import assert from "node:assert/strict";
import { lessons } from "../src/lessons/index.ts";
import { coursePlan } from "../src/plan/plan.ts";

const planned = coursePlan.flatMap((month) =>
  month.weeks.flatMap((week) => week.lessons),
);

test("год — 12 месяцев по 4 недели и 3 урока в неделю", () => {
  assert.equal(coursePlan.length, 12);
  for (const month of coursePlan) {
    assert.equal(month.weeks.length, 4);
    for (const week of month.weeks) assert.equal(week.lessons.length, 3);
  }
  assert.equal(planned.length, 144);
});

test("каждый подготовленный урок стоит в плане ровно один раз", () => {
  const ids = planned.flatMap((lesson) => ("id" in lesson ? [lesson.id] : []));
  assert.deepEqual([...ids].sort(), lessons.map((lesson) => lesson.id).sort());
  assert.ok(
    coursePlan[0].weeks.every((week) =>
      week.lessons.every((lesson) => "id" in lesson),
    ),
    "все уроки первого месяца подготовлены",
  );
});

test("у запланированных уроков есть узбекское название", () => {
  for (const lesson of planned)
    if ("title" in lesson) {
      assert.ok(lesson.title.uz.trim());
      assert.doesNotMatch(lesson.title.uz, /[А-Яа-яЁё]/);
    }
});
