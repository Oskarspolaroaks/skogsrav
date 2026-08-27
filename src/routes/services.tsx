import { createFileRoute } from "@tanstack/react-router";
import Services, { servicesSEO } from "@/pages/Services";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => buildHead(servicesSEO),
  component: Services,
});
