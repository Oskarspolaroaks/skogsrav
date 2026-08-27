import { createFileRoute } from "@tanstack/react-router";
import FAQ, { faqSEO } from "@/pages/FAQ";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => buildHead(faqSEO),
  component: FAQ,
});
