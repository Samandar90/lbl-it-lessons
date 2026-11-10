import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Clock,
  Code2,
  MapPin,
  Presentation,
} from "lucide-react";
import {
  CodeBlock,
  Playground,
  Preview,
  focusLabels,
} from "../components/Code";
import { ContactPanel, Header } from "../components/Header";
import { stepLabel, ui } from "../copy";
import { useLanguage } from "../i18n";
import type { Block, Lesson, PracticeStep } from "../lessons/types";
import { slidesHref } from "../route";
function Practice({ block }: { block: Extract<Block, { kind: "practice" }> }) {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState(1);
  const { project } = block;
  const [code, setCode] = useState(() => project.code(1, lang));
  const editorRef = useRef<HTMLDivElement>(null);
  const open = (next: number) => {
    setStep(next);
    setCode(project.code(next, lang));
    editorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <p className="block-intro">{t(block.intro)}</p>
      <ol className="steps">
        {block.steps.map((item: PracticeStep, index) => {
          const number = index + 1;
          return (
            <li key={number}>
              <span className="step-label">{t(stepLabel(number))}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
              <CodeBlock
                label={focusLabels[item.focus]}
                code={project.code(number, lang)[item.focus]}
              />
              <button
                className="button button-ghost"
                onClick={() => open(number)}
              >
                <Code2 size={17} /> {t(ui.openInEditor)}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="editor-anchor" ref={editorRef}>
        <h3>
          {t(ui.editor)} · {t(stepLabel(step))}
        </h3>
        <Playground
          code={code}
          onChange={setCode}
          onReset={() => setCode(project.code(step, lang))}
        />
      </div>
    </>
  );
}
function BlockView({ block }: { block: Block }) {
  const { t, lang } = useLanguage();
  switch (block.kind) {
    case "text":
      return block.paragraphs.map((paragraph, i) => (
        <p className="block-text" key={i}>
          {t(paragraph)}
        </p>
      ));
    case "cards":
      return (
        <div className="cards">
          {block.cards.map((card, i) => (
            <article key={i}>
              <span>
                {typeof card.label === "string" ? card.label : t(card.label)}
              </span>
              <h3>{t(card.title)}</h3>
              <p>{t(card.text)}</p>
            </article>
          ))}
        </div>
      );
    case "list": {
      const items = block.items.map((item, i) => <li key={i}>{t(item)}</li>);
      return block.numbered ? (
        <ol className="numbered">{items}</ol>
      ) : (
        <ul className="bullets">{items}</ul>
      );
    }
    case "practice":
      return <Practice block={block} />;
    case "example": {
      const code = block.example.build(lang);
      return (
        <>
          <p className="block-intro">{t(block.text)}</p>
          <div className="example-code">
            {block.example.show.map((focus) => (
              <CodeBlock
                key={focus}
                label={focusLabels[focus]}
                code={code[focus]}
              />
            ))}
          </div>
          <div className="demo-preview">
            <Preview code={code} title={t(block.title)} />
          </div>
        </>
      );
    }
    case "quiz":
      return (
        <div className="quiz">
          {block.items.map((item, i) => (
            <details key={i}>
              <summary>
                {t(item.question)} <ChevronDown size={18} />
              </summary>
              <p>
                <strong>{t(ui.answer)}:</strong> {t(item.answer)}
              </p>
            </details>
          ))}
        </div>
      );
  }
}
export function LessonNotes({ lesson }: { lesson: Lesson }) {
  const { t } = useLanguage();
  const practiceRef = useRef<HTMLElement>(null);
  const hasPractice = lesson.blocks.some((block) => block.kind === "practice");
  const title = t(lesson.title);
  useEffect(() => {
    document.title = `${title} · LBL IT`;
  }, [title]);
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="badge">{t(lesson.badge)}</span>
            <h1>{title}</h1>
            <p>{t(lesson.summary)}</p>
            {lesson.schedule ? (
              <dl className="lesson-facts">
                <div>
                  <dt>
                    <CalendarDays size={16} /> {t(ui.date)}
                  </dt>
                  <dd>{t(lesson.schedule.date)}</dd>
                </div>
                <div>
                  <dt>
                    <Clock size={16} /> {t(ui.time)}
                  </dt>
                  <dd>{lesson.schedule.time}</dd>
                </div>
                <div>
                  <dt>
                    <MapPin size={16} /> {t(ui.place)}
                  </dt>
                  <dd>{t(lesson.schedule.place)}</dd>
                </div>
              </dl>
            ) : null}
            <div className="hero-actions">
              {hasPractice ? (
                <button
                  className="button button-primary"
                  onClick={() =>
                    practiceRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Code2 size={18} /> {t(ui.toPractice)}
                </button>
              ) : null}
              <a className="button button-ghost" href={slidesHref(lesson.id)}>
                <Presentation size={18} /> {t(ui.openSlides)}
              </a>
            </div>
          </div>
        </section>
        <div className="container notes">
          {lesson.blocks.map((block, index) => (
            <section
              className={`notes-block notes-${block.kind}`}
              key={index}
              ref={block.kind === "practice" ? practiceRef : undefined}
            >
              <h2>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {t(block.title)}
              </h2>
              <BlockView block={block} />
            </section>
          ))}
        </div>
        <ContactPanel />
      </main>
    </>
  );
}
