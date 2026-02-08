import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOHead from "@/components/SEOHead";

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
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <Services />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;