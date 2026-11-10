import test from "node:test";
import assert from "node:assert/strict";
import { lessons } from "../src/lessons/index.ts";
import type { Example } from "../src/lessons/types.ts";

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
function examples(): Example[] {
  return lessons.flatMap((lesson) => [
    ...lesson.slides.flatMap((slide) =>
      slide.kind === "example" ? [slide.example] : [],
    ),
    ...lesson.blocks.flatMap((block) =>
      block.kind === "example" ? [block.example] : [],
    ),
  ]);
}

test("у каждого урока заполнены слайды и конспект", () => {
  assert.equal(
    new Set(lessons.map((lesson) => lesson.id)).size,
    lessons.length,
  );
  for (const lesson of lessons) {
    assert.ok(lesson.slides.length >= 5, lesson.id);
    assert.ok(lesson.blocks.length >= 3, lesson.id);
    assert.equal(lesson.slides[0].kind, "title");
    assert.equal(lesson.slides.at(-1)?.kind, "end");
    for (const slide of lesson.slides)
      if (slide.kind === "code")
        assert.ok(slide.step >= 1 && slide.step <= slide.project.steps);
    for (const block of lesson.blocks)
      if (block.kind === "practice")
        assert.equal(block.steps.length, block.project.steps);
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

test("примеры кода показывают непустые части и переведены", () => {
  for (const example of examples()) {
    const uz = example.build("uz");
    assert.ok(example.build("ru").html.trim());
    for (const focus of example.show) assert.ok(uz[focus].trim(), focus);
    assert.doesNotMatch(uz.html, /[А-Яа-яЁё]/, uz.html);
  }
});

test("первый урок обходится без кода", () => {
  const first = lessons[0];
  assert.equal(first.id, "trial");
  for (const slide of first.slides) {
    assert.notEqual(slide.kind, "code");
    if (slide.kind === "example") assert.deepEqual(slide.example.show, []);
  }
  for (const block of first.blocks) assert.notEqual(block.kind, "practice");
});
