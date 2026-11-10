import { useEffect } from "react";
import { ArrowRight, MapPin, Presentation } from "lucide-react";
import { ContactPanel, Header } from "../components/Header";
import { ui } from "../copy";
import { useLanguage } from "../i18n";
import { lessons } from "../lessons";
import { lessonHref, slidesHref } from "../route";
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
          <div className="container lesson-list">
            {lessons.map((lesson, index) => (
              <article className="lesson-card" key={lesson.id}>
                <span className="lesson-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="badge">{t(lesson.badge)}</span>
                  <h2>{t(lesson.title)}</h2>
                  <p>{t(lesson.summary)}</p>
                  {lesson.schedule ? (
                    <p className="lesson-meta">
                      <MapPin size={16} />
                      {t(lesson.schedule.date)} · {lesson.schedule.time} ·{" "}
                      {t(lesson.schedule.place)}
                    </p>
                  ) : null}
                </div>
                <div className="lesson-actions">
                  <a
                    className="button button-primary"
                    href={lessonHref(lesson.id)}
                  >
                    {t(ui.notes)} <ArrowRight size={17} />
                  </a>
                  <a
                    className="button button-ghost"
                    href={slidesHref(lesson.id)}
                  >
                    <Presentation size={17} /> {t(ui.slides)}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <ContactPanel />
      </main>
    </>
  );
}
