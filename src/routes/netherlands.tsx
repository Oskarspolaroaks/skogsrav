import { createFileRoute } from "@tanstack/react-router";
import Netherlands, { netherlandsSEO } from "@/pages/Netherlands";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/netherlands")({
  head: () => buildHead(netherlandsSEO),
  component: Netherlands,
});
