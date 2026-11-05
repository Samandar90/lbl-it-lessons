import { useEffect, useState } from "react";
import { Check, Copy, RotateCcw } from "lucide-react";
import { ui } from "../copy";
import { useLanguage } from "../i18n";
import { buildDocument } from "../lessons/bmi";
import type { CodeSet } from "../lessons/bmi";
import type { Focus } from "../lessons/types";
const focusLabels: Record<Focus, string> = {
  html: "HTML",
  css: "CSS",
  js: "JavaScript",
};
export function CodeBlock({ code, label }: { code: string; label: string }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  return (
    <div className="code-block">
      <div className="code-bar">
        <span>{label}</span>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            } catch {
              setCopied(false);
            }
          }}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? t(ui.copied) : t(ui.copy)}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
export function Preview({ code, title }: { code: CodeSet; title: string }) {
  const [document, setDocument] = useState(() => buildDocument(code));
  useEffect(() => {
    // Debounce so the preview does not reload on every keystroke.
    const timer = window.setTimeout(
      () => setDocument(buildDocument(code)),
      350,
    );
    return () => window.clearTimeout(timer);
  }, [code]);
  return (
    <iframe
      className="preview"
      title={title}
      sandbox="allow-scripts"
      srcDoc={document}
    />
  );
}
export function Playground({
  code,
  onChange,
  onReset,
}: {
  code: CodeSet;
  onChange: (code: CodeSet) => void;
  onReset: () => void;
}) {
  const { t } = useLanguage();
  const tabs = (Object.keys(focusLabels) as Focus[]).filter(
    (focus) => focus === "html" || code[focus] !== "",
  );
  const [active, setActive] = useState<Focus>("html");
  const current = tabs.includes(active) ? active : "html";
  return (
    <div className="playground">
      <div className="playground-editor">
        <div className="playground-bar">
          <div role="tablist" aria-label={t(ui.editor)}>
            {tabs.map((focus) => (
              <button
                key={focus}
                role="tab"
                aria-selected={current === focus}
                onClick={() => setActive(focus)}
              >
                {focusLabels[focus]}
              </button>
            ))}
          </div>
          <button className="reset" onClick={onReset}>
            <RotateCcw size={15} />
            {t(ui.reset)}
          </button>
        </div>
        <textarea
          aria-label={`${t(ui.editor)}: ${focusLabels[current]}`}
          spellCheck={false}
          value={code[current]}
          onChange={(event) =>
            onChange({ ...code, [current]: event.target.value })
          }
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            event.preventDefault();
            const field = event.currentTarget;
            const { selectionStart, selectionEnd, value } = field;
            onChange({
              ...code,
              [current]:
                value.slice(0, selectionStart) +
                "  " +
                value.slice(selectionEnd),
            });
            requestAnimationFrame(() =>
              field.setSelectionRange(selectionStart + 2, selectionStart + 2),
            );
          }}
        />
        <p className="playground-hint">{t(ui.editorHint)}</p>
      </div>
      <div className="playground-preview">
        <span>{t(ui.preview)}</span>
        <Preview code={code} title={t(ui.preview)} />
      </div>
    </div>
  );
}
export { focusLabels };
