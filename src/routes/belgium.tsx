import { createFileRoute } from "@tanstack/react-router";
import Belgium, { belgiumSEO } from "@/pages/Belgium";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/belgium")({
  head: () => buildHead(belgiumSEO),
  component: Belgium,
});
