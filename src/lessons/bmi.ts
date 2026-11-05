import type { Lang } from "../i18n";
export interface CodeSet {
  html: string;
  css: string;
  js: string;
}
const words = {
  ru: {
    title: "Калькулятор ИМТ",
    weight: "Вес, кг",
    height: "Рост, см",
    button: "Рассчитать",
    empty: "Введите вес и рост",
    result: "Ваш ИМТ: ",
    categories: [
      "Недостаток массы тела",
      "Норма",
      "Избыточная масса тела",
      "Ожирение",
    ],
    note: "Учебный пример. Не заменяет консультацию врача.",
  },
  uz: {
    title: "TVI kalkulyatori",
    weight: "Vazn, kg",
    height: "Bo‘y, sm",
    button: "Hisoblash",
    empty: "Vazn va bo‘yni kiriting",
    result: "Sizning TVI: ",
    categories: [
      "Tana vazni yetishmasligi",
      "Me’yor",
      "Ortiqcha vazn",
      "Semizlik",
    ],
    note: "O‘quv namunasi. Shifokor maslahatini almashtirmaydi.",
  },
};
export const bmiSteps = 4;
export function bmiCode(step: number, lang: Lang): CodeSet {
  const w = words[lang];
  const html = `<main class="card">
  <h1>${w.title}</h1>
  <label>${w.weight}
    <input id="weight" type="number" placeholder="70">
  </label>
  <label>${w.height}
    <input id="height" type="number" placeholder="175">
  </label>
  <button id="calc">${w.button}</button>
  <p id="result"></p>
  <small>${w.note}</small>
</main>`;
  const css = `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef6f3;
}
.card {
  width: 280px;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
h1 {
  font-size: 22px;
  color: #0b6e62;
}
label {
  display: block;
  margin-bottom: 12px;
}
input {
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  background: #0b6e62;
  color: white;
  font-size: 16px;
}
#result {
  font-size: 20px;
  font-weight: bold;
}`;
  const calculate = `  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value) / 100;
  if (!weight || !height) {
    result.textContent = "${w.empty}";
    return;
  }
  const bmi = weight / (height * height);`;
  const basicJs = `const button = document.querySelector("#calc");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
${calculate}
  result.textContent = "${w.result}" + bmi.toFixed(1);
});`;
  const [under, normal, over, obese] = w.categories;
  const categoryJs = `const button = document.querySelector("#calc");
const result = document.querySelector("#result");

function category(bmi) {
  if (bmi < 18.5) return "${under}";
  if (bmi < 25) return "${normal}";
  if (bmi < 30) return "${over}";
  return "${obese}";
}

button.addEventListener("click", () => {
${calculate}
  result.textContent = "${w.result}" + bmi.toFixed(1) + " — " + category(bmi);
  result.style.color = bmi >= 18.5 && bmi < 25 ? "#0b8a5c" : "#c2410c";
});`;
  return {
    html,
    css: step >= 2 ? css : "",
    js: step >= 4 ? categoryJs : step === 3 ? basicJs : "",
  };
}
export function buildDocument(code: CodeSet): string {
  // A literal closing script tag inside student code would end the script early.
  const js = code.js.replace(/<\/script/gi, "<\\/script");
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${code.css}</style></head><body>${code.html}<script>${js}</script></body></html>`;
}
