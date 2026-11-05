import { useEffect, useState } from "react";
// Hash routes keep the static GitHub Pages build working without a server.
function readRoute() {
  return window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
}
export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
export const lessonHref = (lessonId: string) => `#/${lessonId}`;
export const slidesHref = (lessonId: string, slide = 1) =>
  `#/${lessonId}/slides/${slide}`;
