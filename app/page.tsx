import { SignedIn, UserButton } from "@clerk/nextjs";
import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Create professional newsletters from RSS feeds using Google's Gemini AI. Curate content, customize settings, and generate engaging newsletters in minutes.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Features />
      <HowItWorks />

      <SignedIn>
        <div className="fixed top-4 right-4">
          <UserButton />
        </div>
      </SignedIn>

      <Pricing />
      <CTA />
    </main>
  );
}
