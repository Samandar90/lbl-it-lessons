import type { Lang } from "../i18n";
import type { CodeSet } from "./bmi.ts";
const words = {
  ru: {
    badge: "Будущий врач",
    name: "Твоё имя",
    dream: "Хочу создать: тренажёр к экзаменам",
    button: "♥ Пульс",
    message: "Сердце бьётся — это работает код!",
  },
  uz: {
    badge: "Bo‘lajak shifokor",
    name: "Sening isming",
    dream: "Yaratmoqchiman: imtihon trenajyori",
    button: "♥ Puls",
    message: "Yurak urmoqda — bu kod ishlayapti!",
  },
};
// A finished page shown on the first lesson: students only press the button.
export const doctorCardSteps = 1;
export function doctorCardCode(_step: number, lang: Lang): CodeSet {
  const w = words[lang];
  return {
    html: `<main class="card">
  <span class="badge">${w.badge}</span>
  <h1>${w.name}</h1>
  <p>${w.dream}</p>
  <button id="pulse">${w.button}</button>
  <p id="message"></p>
</main>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef6f3;
}
.card {
  width: 280px;
  padding: 28px;
  border-radius: 20px;
  background: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.badge {
  padding: 4px 10px;
  border-radius: 8px;
  background: #0b6e62;
  color: white;
  font-size: 13px;
}
h1 {
  color: #0b6e62;
}
button {
  padding: 12px 22px;
  border: 0;
  border-radius: 999px;
  background: #e5484d;
  color: white;
  font-size: 18px;
}
.beat {
  animation: beat 0.9s infinite;
}
@keyframes beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.18); }
  30% { transform: scale(1); }
  45% { transform: scale(1.1); }
}`,
    js: `const button = document.querySelector("#pulse");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  button.classList.toggle("beat");
  const beating = button.classList.contains("beat");
  message.textContent = beating ? "${w.message}" : "";
});`,
  };
}
