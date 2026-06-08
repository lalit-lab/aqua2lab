"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Expertise from "@/components/sections/Expertise";
import Stats from "@/components/sections/Stats";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import QuizModal from "@/components/ui/QuizModal";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  const openQuiz = (pkg?: string) => {
    setSelectedPackage(pkg);
    setIsQuizOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Expertise />
      <Stats />
      <Packages openQuiz={openQuiz} />
      <Gallery />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
      
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        initialPackage={selectedPackage}
      />
    </main>
  );
}
