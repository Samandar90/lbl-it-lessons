import { useEffect } from "react";
import { LanguageProvider } from "./i18n";
import { lessons } from "./lessons";
import { Home } from "./pages/Home";
import { LessonNotes } from "./pages/LessonNotes";
import { Slides } from "./pages/Slides";
import { useHashRoute } from "./route";
export default function App() {
  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}
function Router() {
  const [lessonId, view, slide] = useHashRoute();
  const lesson = lessons.find((item) => item.id === lessonId);
  const page = lesson
    ? `${lesson.id}/${view === "slides" ? "slides" : ""}`
    : "";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);
  if (lesson && view === "slides")
    return (
      <Slides key={lesson.id} lesson={lesson} slide={Number(slide ?? 1)} />
    );
  if (lesson) return <LessonNotes lesson={lesson} />;
  return <Home notFound={Boolean(lessonId)} />;
}
