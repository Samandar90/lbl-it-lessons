import test from "node:test";
import assert from "node:assert/strict";
import { doctorCardCode } from "../src/lessons/doctorCard.ts";

// Runs the card's JavaScript against a minimal stand-in for the page.
function clickPulse(js: string, times: number) {
  const classes = new Set<string>();
  let handler = () => {};
  const elements: Record<string, object> = {
    pulse: {
      classList: {
        toggle: (name: string) =>
          classes.has(name) ? classes.delete(name) : classes.add(name),
        contains: (name: string) => classes.has(name),
      },
      addEventListener: (_type: string, fn: () => void) => (handler = fn),
    },
    message: { textContent: "" },
  };
  const document = {
    querySelector: (selector: string) => elements[selector.slice(1)],
  };
  new Function("document", js)(document);
  for (let i = 0; i < times; i++) handler();
  return { beating: classes.has("beat"), message: elements.message };
}

test("кнопка «Пульс» запускает и останавливает сердцебиение", () => {
  const ru = doctorCardCode("ru");
  assert.match(ru.css, /@keyframes beat/);
  assert.deepEqual(clickPulse(ru.js, 1), {
    beating: true,
    message: { textContent: "Сердце бьётся — это работает код!" },
  });
  assert.deepEqual(clickPulse(ru.js, 2), {
    beating: false,
    message: { textContent: "" },
  });
  assert.equal(
    clickPulse(doctorCardCode("uz").js, 1).message.textContent,
    "Yurak urmoqda — bu kod ishlayapti!",
  );
});
