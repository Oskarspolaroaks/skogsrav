import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

export const GA_MEASUREMENT_ID = "G-CZQJ8PQX98";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      // The inline gtag config already sends the initial page_view.
      isFirst.current = false;
      return;
    }
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    const page_path = `${pathname}${search ?? ""}`;
    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
