import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy, { privacyPolicySEO } from "@/pages/PrivacyPolicy";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => buildHead(privacyPolicySEO),
  component: PrivacyPolicy,
});
