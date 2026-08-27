import { createFileRoute } from "@tanstack/react-router";
import Germany, { germanySEO } from "@/pages/Germany";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/germany")({
  head: () => buildHead(germanySEO),
  component: Germany,
});
