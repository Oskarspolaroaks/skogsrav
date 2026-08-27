import { createFileRoute } from "@tanstack/react-router";
import Baltics, { balticsSEO } from "@/pages/Baltics";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/baltics")({
  head: () => buildHead(balticsSEO),
  component: Baltics,
});
