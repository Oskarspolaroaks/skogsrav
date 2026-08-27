import { createFileRoute } from "@tanstack/react-router";
import Index, { indexSEO } from "@/pages/Index";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildHead(indexSEO),
  component: Index,
});
