import { createFileRoute } from "@tanstack/react-router";
import About, { aboutSEO } from "@/pages/About";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => buildHead(aboutSEO),
  component: About,
});
