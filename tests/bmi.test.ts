import test from "node:test";
import assert from "node:assert/strict";
import { bmiCode, bmiSteps, buildDocument } from "../src/lessons/bmi.ts";

interface Element {
  value?: string;
  textContent?: string;
  style?: { color?: string };
  click?: () => void;
  addEventListener?: (type: string, handler: () => void) => void;
}
// Runs the lesson's JavaScript against a minimal stand-in for the page.
function runCalculator(js: string, weight: string, height: string) {
  const elements: Record<string, Element> = {
    weight: { value: weight },
    height: { value: height },
    result: { textContent: "", style: {} },
    calc: {
      addEventListener(type, handler) {
        if (type === "click") this.click = handler;
      },
    },
  };
  const document = {
    querySelector: (selector: string) => elements[selector.slice(1)],
  };
  new Function("document", js)(document);
  elements.calc.click!();
  return elements.result;
}

test("каждый шаг добавляет следующую часть приложения", () => {
  const steps = Array.from({ length: bmiSteps }, (_, i) =>
    bmiCode(i + 1, "ru"),
  );
  assert.equal(steps[0].css, "");
  assert.equal(steps[0].js, "");
  assert.notEqual(steps[1].css, "");
  assert.notEqual(steps[2].js, "");
  assert.match(steps[3].js, /function category/);
  for (const id of ["weight", "height", "calc", "result"])
    assert.match(steps[0].html, new RegExp(`id="${id}"`));
});

test("калькулятор считает ИМТ и категории ВОЗ на обоих языках", () => {
  const ru = bmiCode(4, "ru").js;
  assert.equal(
    runCalculator(ru, "70", "175").textContent,
    "Ваш ИМТ: 22.9 — Норма",
  );
  assert.equal(
    runCalculator(ru, "50", "175").textContent,
    "Ваш ИМТ: 16.3 — Недостаток массы тела",
  );
  assert.equal(
    runCalculator(ru, "85", "175").textContent,
    "Ваш ИМТ: 27.8 — Избыточная масса тела",
  );
  assert.equal(
    runCalculator(ru, "100", "175").textContent,
    "Ваш ИМТ: 32.7 — Ожирение",
  );
  assert.equal(
    runCalculator(bmiCode(4, "uz").js, "70", "175").textContent,
    "Sizning TVI: 22.9 — Me’yor",
  );
});

test("пустые поля дают подсказку вместо расчёта", () => {
  assert.equal(
    runCalculator(bmiCode(3, "ru").js, "", "175").textContent,
    "Введите вес и рост",
  );
  assert.equal(
    runCalculator(bmiCode(3, "uz").js, "70", "").textContent,
    "Vazn va bo‘yni kiriting",
  );
});

test("закрывающий тег script в коде студента не ломает предпросмотр", () => {
  const page = buildDocument({ html: "", css: "", js: 'alert("</script>")' });
  assert.equal(page.match(/<\/script>/g)?.length, 1);
});
