"use client";
import React from "react";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import ContactFAQ from "./components/ContactFAQ";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <ContactHero />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContactInfo />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <ContactForm />

          {/* Map and FAQ */}
          <div className="flex flex-col gap-8">
            <ContactMap />
            <ContactFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
