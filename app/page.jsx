"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesScroller from "../components/ServicesScroller";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import SocialSection from "../components/SocialSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

/* 🔥 USE WORKFLOW SECTION (THE FILE YOU ARE EDITING) */
import WorkflowSection from "../components/WorkflowSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesScroller />

        {/* ABOUT section with id for navbar scroll */}
        <section id="about">
          <AboutSection />
        </section>

        {/* 🔥 ACTUAL WORKFLOW SECTION (NOW UPDATES WILL SHOW) */}
        <WorkflowSection />

        <ExperienceSection />

        {/* CONTACT section with id for navbar scroll */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* SOCIAL section with id for navbar scroll */}
        <section id="social">
          <SocialSection />
        </section>

        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
