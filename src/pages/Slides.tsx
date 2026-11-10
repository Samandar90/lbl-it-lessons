import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Maximize,
  MessageSquareText,
  Phone,
  Send,
} from "lucide-react";
import { CodeBlock, Preview, focusLabels } from "../components/Code";
import { LanguageSwitch } from "../components/Header";
import { contacts, ui } from "../copy";
import { useLanguage } from "../i18n";
import type { Lesson, Slide } from "../lessons/types";
import { lessonHref, slidesHref } from "../route";
function toggleFullscreen() {
  const request = document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
  request.catch(() => {
    /* The browser may refuse fullscreen; the deck still works without it. */
  });
}
// replace() keeps the browser history free of every slide step.
function goToSlide(lesson: Lesson, index: number) {
  const last = lesson.slides.length - 1;
  window.location.replace(
    slidesHref(lesson.id, Math.min(Math.max(index, 0), last) + 1),
  );
}
function notesUrl(lesson: Lesson) {
  const url = new URL(window.location.href);
  url.hash = lessonHref(lesson.id);
  url.search = "";
  return url.toString().replace(/^https?:\/\//, "");
}
function SlideView({ lesson, slide }: { lesson: Lesson; slide: Slide }) {
  const { t, lang } = useLanguage();
  const head = (
    <>
      <span className="eyebrow">{t(slide.eyebrow)}</span>
      <h2>{t(slide.title)}</h2>
    </>
  );
  const notesLink = slide.showNotesLink ? (
    <p className="slide-link">
      <BookOpen size={22} /> {t(ui.notesLink)}: <b>{notesUrl(lesson)}</b>
    </p>
  ) : null;
  switch (slide.kind) {
    case "title":
      return (
        <div className="slide slide-title">
          <span className="eyebrow">{t(slide.eyebrow)}</span>
          <h1>{t(slide.title)}</h1>
          <p>{t(slide.subtitle)}</p>
          <svg className="slide-pulse" viewBox="0 0 1200 90" aria-hidden="true">
            <path d="M0 55 h240 q12 -12 24 0 h14 l6 8 l10 -52 l10 72 l8 -28 h18 q18 -18 36 0 h300 q12 -12 24 0 h14 l6 8 l10 -52 l10 72 l8 -28 h18 q18 -18 36 0 h374" />
          </svg>
        </div>
      );
    case "points": {
      const List = slide.numbered ? "ol" : "ul";
      return (
        <div className="slide">
          {head}
          <List className={slide.numbered ? "slide-numbered" : "slide-points"}>
            {slide.points.map((point, i) => (
              <li key={i}>{t(point)}</li>
            ))}
          </List>
        </div>
      );
    }
    case "cards":
      return (
        <div className="slide">
          {head}
          <div className="slide-cards">
            {slide.cards.map((card, i) => (
              <article key={i}>
                <span>
                  {typeof card.label === "string" ? card.label : t(card.label)}
                </span>
                <h3>{t(card.title)}</h3>
                <p>{t(card.text)}</p>
              </article>
            ))}
          </div>
          {notesLink}
        </div>
      );
    case "code": {
      const code = lesson.project.code(slide.step, lang);
      return (
        <div className="slide slide-code">
          <div className="slide-code-text">
            {head}
            <ul className="slide-points slide-points-small">
              {slide.points.map((point, i) => (
                <li key={i}>{t(point)}</li>
              ))}
            </ul>
            {notesLink}
            <CodeBlock
              label={focusLabels[slide.focus]}
              code={code[slide.focus]}
            />
          </div>
          <div className="slide-preview">
            <span>{t(ui.preview)}</span>
            <Preview code={code} title={t(ui.preview)} />
          </div>
        </div>
      );
    }
    case "demo": {
      const code = lesson.project.code(lesson.project.steps, lang);
      return (
        <div className="slide slide-code slide-demo">
          <div className="slide-code-text">
            {head}
            <ul className="slide-points">
              {slide.points.map((point, i) => (
                <li key={i}>{t(point)}</li>
              ))}
            </ul>
            {notesLink}
          </div>
          <div className="slide-preview">
            <Preview code={code} title={t(slide.title)} />
          </div>
        </div>
      );
    }
    case "end":
      return (
        <div className="slide slide-end">
          <h2>{t(slide.title)}</h2>
          <span className="eyebrow">{t(slide.eyebrow)}</span>
          <ol className="slide-numbered slide-points-small">
            {slide.points.map((point, i) => (
              <li key={i}>{t(point)}</li>
            ))}
          </ol>
          <div className="slide-contacts">
            <span>
              <Phone size={26} /> {contacts.phone}
            </span>
            <span>
              <Send size={26} /> {contacts.telegram}
            </span>
            <span>
              <BookOpen size={26} /> {notesUrl(lesson)}
            </span>
          </div>
        </div>
      );
  }
}
export function Slides({
  lesson,
  slide: requested,
}: {
  lesson: Lesson;
  slide: number;
}) {
  const { t } = useLanguage();
  const total = lesson.slides.length;
  // The URL is the single source of truth, so links and reloads open the same slide.
  const index =
    Math.min(Math.max(Number.isFinite(requested) ? requested : 1, 1), total) -
    1;
  const [showNotes, setShowNotes] = useState(false);
  const slide = lesson.slides[index];
  const title = t(lesson.title);
  useEffect(() => {
    document.title = `${index + 1}/${total} · ${title}`;
  }, [index, total, title]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as Element;
      if (target.closest?.("input, textarea, select")) return;
      const key = event.key;
      // Enter and Space keep activating focused links and buttons.
      if ((key === "Enter" || key === " ") && target.closest?.("a, button"))
        return;
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(key)) {
        goToSlide(lesson, index + 1);
      } else if (["ArrowLeft", "PageUp", "Backspace"].includes(key)) {
        goToSlide(lesson, index - 1);
      } else if (key === "Home") goToSlide(lesson, 0);
      else if (key === "End") goToSlide(lesson, total - 1);
      else if (key === "n" || key === "N" || key === "т" || key === "Т")
        setShowNotes((value) => !value);
      else if (key === "f" || key === "F" || key === "а" || key === "А")
        toggleFullscreen();
      else return;
      event.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, total, lesson]);
  return (
    <div className="deck">
      <div className="deck-top">
        <a className="deck-back" href={lessonHref(lesson.id)}>
          <ArrowLeft size={16} /> {t(ui.backToNotes)}
        </a>
        <span className="deck-help">{t(ui.slidesHelp)}</span>
        <LanguageSwitch />
      </div>
      <main className="deck-stage" key={index}>
        <SlideView lesson={lesson} slide={slide} />
      </main>
      {showNotes && slide.notes ? (
        <aside className="deck-notes">{t(slide.notes)}</aside>
      ) : null}
      <div className="deck-bottom">
        <button
          onClick={() => goToSlide(lesson, index - 1)}
          disabled={index === 0}
          aria-label={t(ui.previous)}
        >
          <ArrowLeft size={20} />
        </button>
        <div className="deck-progress" aria-hidden="true">
          <i style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <span className="deck-count">
          {index + 1} {t(ui.slideOf)} {total}
        </span>
        <button
          onClick={() => setShowNotes(!showNotes)}
          aria-pressed={showNotes}
          aria-label={t(ui.speakerNotes)}
        >
          <MessageSquareText size={19} />
        </button>
        <button onClick={toggleFullscreen} aria-label={t(ui.fullscreen)}>
          <Maximize size={19} />
        </button>
        <button
          onClick={() => goToSlide(lesson, index + 1)}
          disabled={index === total - 1}
          aria-label={t(ui.next)}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
