import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";

// Lazy load heavy components
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEOHead />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <Reveal variant="up">
            <Services />
          </Reveal>
          <Reveal variant="up">
            <About />
          </Reveal>
          <Reveal variant="up">
            <Skills />
          </Reveal>
          <Reveal variant="up">
            <Portfolio />
          </Reveal>
          <Reveal variant="scale">
            <Contact />
          </Reveal>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Reveal variant="fade">
          <Footer />
        </Reveal>
      </Suspense>
    </div>
  );
};

export default Index;
