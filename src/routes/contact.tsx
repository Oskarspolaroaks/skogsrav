import { createFileRoute } from "@tanstack/react-router";
import Contact, { contactSEO } from "@/pages/Contact";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => buildHead(contactSEO),
  component: Contact,
});
