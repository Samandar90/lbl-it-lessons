import test from "node:test";
import assert from "node:assert/strict";
import { lessons } from "../src/lessons/index.ts";

// Collects every bilingual { ru, uz } value inside a lesson.
function texts(value: unknown, found: { ru: string; uz: string }[] = []) {
  if (Array.isArray(value)) for (const item of value) texts(item, found);
  else if (value && typeof value === "object") {
    if ("ru" in value && "uz" in value)
      found.push(value as { ru: string; uz: string });
    else for (const item of Object.values(value)) texts(item, found);
  }
  return found;
}

test("у каждого урока заполнены слайды и конспект", () => {
  assert.equal(
    new Set(lessons.map((lesson) => lesson.id)).size,
    lessons.length,
  );
  for (const lesson of lessons) {
    assert.ok(lesson.slides.length >= 5);
    assert.ok(lesson.blocks.length >= 3);
    assert.equal(lesson.slides[0].kind, "title");
    assert.equal(lesson.slides.at(-1)?.kind, "end");
    for (const slide of lesson.slides)
      if (slide.kind === "code")
        assert.ok(slide.step >= 1 && slide.step <= lesson.project.steps);
    for (const block of lesson.blocks)
      if (block.kind === "practice")
        assert.equal(block.steps.length, lesson.project.steps);
  }
});

test("все тексты есть на русском и узбекском", () => {
  for (const lesson of lessons)
    for (const text of texts(lesson)) {
      assert.ok(text.ru.trim(), "пустой русский текст");
      assert.ok(text.uz.trim(), `нет перевода: ${text.ru}`);
      assert.doesNotMatch(text.uz, /[А-Яа-яЁё]/, `кириллица в: ${text.uz}`);
    }
});
