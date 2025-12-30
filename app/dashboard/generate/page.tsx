import { NewsletterGenerationPage } from "@/components/dashboard/newsletter-generation-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Newsletter",
  description: "Generate AI-powered newsletters from your RSS feeds",
};

export default function GeneratePage() {
  return <NewsletterGenerationPage />;
}
