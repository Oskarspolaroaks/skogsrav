import { createFileRoute } from "@tanstack/react-router";
import France, { franceSEO } from "@/pages/France";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/france")({
  head: () => buildHead(franceSEO),
  component: France,
});
