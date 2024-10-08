"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialty from "@/components/sections/Specialty";
import Services from "@/components/sections/Services";
import Schedule from "@/components/sections/Schedule";
import Team from "@/components/sections/Team";
import Journal from "@/components/sections/Journal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isNewClient, setIsNewClient] = useState<boolean | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />
      <main>
        <Hero />
        <About />
        <Specialty />
        <Services />
        <Schedule
          date={date}
          setDate={setDate}
          isNewClient={isNewClient}
          setIsNewClient={setIsNewClient}
        />
        <Team />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
