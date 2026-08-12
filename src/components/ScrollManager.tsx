import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    try {
      // 'instant' is not a standard value and can throw in some browsers.
      // Use 'auto' as the safe fallback.
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch (e) {
      // Fallback to simple assignment if scrollTo fails.
      window.scrollTo(0, 0);
      // Log for diagnostics but don't let this break navigation.
      // eslint-disable-next-line no-console
      console.warn("ScrollManager: scrollTo failed", e);
    }
  }, [pathname, hash]);

  return null;
}
