import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProgramsOverview } from "@/components/sections/programs-overview";
import { Curriculum } from "@/components/sections/curriculum";
import { B2BSection } from "@/components/sections/b2b-section";
import { FounderSection } from "@/components/sections/founder-section";
import { Testimonials } from "@/components/sections/testimonials";
import { GuaranteeCTA } from "@/components/sections/guarantee-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProgramsOverview />
        <Curriculum />
        <B2BSection />
        <FounderSection />
        <Testimonials />
        <GuaranteeCTA />
      </main>
      <Footer />
    </>
  );
}
