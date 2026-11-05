import { Activity, ArrowUpRight } from "lucide-react";
import { contacts, ui } from "../copy";
import { useLanguage } from "../i18n";
export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className="language-switch"
      role="group"
      aria-label={lang === "uz" ? "Sayt tili" : "Язык сайта"}
    >
      <button
        lang="ru"
        aria-label="Русский"
        aria-pressed={lang === "ru"}
        onClick={() => setLang("ru")}
      >
        RU
      </button>
      <button
        lang="uz"
        aria-label="O‘zbekcha"
        aria-pressed={lang === "uz"}
        onClick={() => setLang("uz")}
      >
        UZ
      </button>
    </div>
  );
}
export function Logo() {
  return (
    <a className="brand" href="#/">
      <span className="brand-mark">
        <Activity size={20} />
      </span>
      <span className="brand-name">
        lbl<b> it</b>
        <small>LESSONS</small>
      </span>
    </a>
  );
}
export function Header() {
  const { t } = useLanguage();
  return (
    <header className="header">
      <div className="container nav">
        <Logo />
        <nav aria-label={t(ui.lessons)}>
          <a href="#/">{t(ui.lessons)}</a>
          <a href={contacts.courseSite} target="_blank" rel="noreferrer">
            {t(ui.courseSite)} <ArrowUpRight size={15} />
          </a>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
export function ContactPanel() {
  const { t } = useLanguage();
  return (
    <section className="contact-panel">
      <div className="container contact-grid">
        <div>
          <h2>{t(ui.contactsTitle)}</h2>
          <p>{t(ui.contactsText)}</p>
        </div>
        <div className="contact-links">
          <a className="button button-primary" href={contacts.phoneHref}>
            {contacts.phone}
          </a>
          <a
            className="button button-ghost"
            href={contacts.telegramHref}
            target="_blank"
            rel="noreferrer"
          >
            Telegram {contacts.telegram}
          </a>
          <a
            className="text-link"
            href={contacts.courseSite}
            target="_blank"
            rel="noreferrer"
          >
            {t(ui.program)} <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
