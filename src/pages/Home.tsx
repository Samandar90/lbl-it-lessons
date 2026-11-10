import { useEffect } from "react";
import { ArrowRight, ChevronDown, MapPin, Presentation } from "lucide-react";
import { ContactPanel, Header } from "../components/Header";
import { lessonLabel, monthLabel, ui, weekLabel } from "../copy";
import { useLanguage } from "../i18n";
import { lessons } from "../lessons";
import { studyMethod } from "../plan/method";
import { coursePlan } from "../plan/plan";
import type { PlannedLesson } from "../plan/types";
import { lessonHref, slidesHref } from "../route";
// Lessons are numbered through the whole year, not within a week.
let counter = 0;
const numberedPlan = coursePlan.map((month) => ({
  ...month,
  weeks: month.weeks.map((week) => ({
    ...week,
    lessons: week.lessons.map((planned) => ({ planned, number: ++counter })),
  })),
}));
function PlanLesson({
  planned,
  number,
}: {
  planned: PlannedLesson;
  number: number;
}) {
  const { t } = useLanguage();
  const lesson =
    "id" in planned ? lessons.find((item) => item.id === planned.id) : null;
  return (
    <li className={lesson ? "plan-lesson is-ready" : "plan-lesson"}>
      <span className="plan-number">{t(lessonLabel(number))}</span>
      <div className="plan-title">
        <strong>
          {lesson
            ? t(lesson.title)
            : "title" in planned
              ? t(planned.title)
              : null}
        </strong>
        {lesson?.schedule ? (
          <small>
            <MapPin size={14} />
            {t(lesson.schedule.date)} · {lesson.schedule.time} ·{" "}
            {t(lesson.schedule.place)}
          </small>
        ) : null}
      </div>
      {lesson ? (
        <div className="plan-actions">
          <a className="button button-primary" href={lessonHref(lesson.id)}>
            {t(ui.notes)} <ArrowRight size={16} />
          </a>
          <a className="button button-ghost" href={slidesHref(lesson.id)}>
            <Presentation size={16} /> {t(ui.slides)}
          </a>
        </div>
      ) : (
        <span className="plan-soon">{t(ui.soon)}</span>
      )}
    </li>
  );
}
export function Home({ notFound }: { notFound: boolean }) {
  const { t, lang } = useLanguage();
  useEffect(() => {
    document.title =
      lang === "uz" ? "LBL IT Department darslari" : "Уроки LBL IT Department";
  }, [lang]);
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">{t(ui.homeEyebrow)}</span>
            <h1>{t(ui.homeTitle)}</h1>
            <p>{t(ui.homeLead)}</p>
            {notFound ? (
              <p className="notice" role="status">
                {t(ui.notFound)}
              </p>
            ) : null}
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t(ui.methodTitle)}</h2>
            <div className="cards method-cards">
              {studyMethod.map((card, i) => (
                <article key={i}>
                  <span>
                    {typeof card.label === "string"
                      ? card.label
                      : t(card.label)}
                  </span>
                  <h3>{t(card.title)}</h3>
                  <p>{t(card.text)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section plan-section">
          <div className="container">
            <h2 className="section-title">{t(ui.planTitle)}</h2>
            <p className="section-lead">{t(ui.planLead)}</p>
            <div className="plan">
              {numberedPlan.map((month, m) => (
                <details className="plan-month" key={m} open={m === 0}>
                  <summary>
                    <span>{t(monthLabel(m + 1))}</span>
                    <strong>{t(month.title)}</strong>
                    <ChevronDown size={20} />
                  </summary>
                  {month.weeks.map((week, w) => (
                    <div className="plan-week" key={w}>
                      <h3>
                        <span>{t(weekLabel(m * 4 + w + 1))}</span>
                        {t(week.title)}
                      </h3>
                      <ol>
                        {week.lessons.map(({ planned, number }) => (
                          <PlanLesson
                            key={number}
                            planned={planned}
                            number={number}
                          />
                        ))}
                      </ol>
                    </div>
                  ))}
                </details>
              ))}
            </div>
          </div>
        </section>
        <ContactPanel />
      </main>
    </>
  );
}
