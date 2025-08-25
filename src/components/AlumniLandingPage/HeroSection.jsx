"use client";

import {
  ChevronRight,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] lg:min-h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(255, 0, 0, 0.3)), url('/hero-bg.png')`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white lg:text-left text-center lg:max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-block bg-[var(--primary-red)] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NCAA
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Nigeria Canadian Alumni Association
          </h1>

          {/* Supporting Text */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
            Nigeria Canadian Alumni Association (NCAA) is a global network
            connecting Nigerian alumni in Canada and worldwide, fostering
            professional growth and cultural connections across borders.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#connect"
              role="button"
              className="bg-[var(--primary-red)] text-white px-5 py-2 rounded-lg font-semibold text-base hover:bg-[var(--primary-hover)] transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-red)] inline-flex items-center justify-center"
              aria-label="Connect with fellow Nigerian-Canadian alumni"
            >
              Connect with Alumni
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#calendar"
              role="button"
              className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold text-base hover:bg-white hover:text-[var(--secondary-black)] transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent inline-flex items-center justify-center"
              aria-label="Subscribe to our calendar of events"
            >
              Subscribe to our calendar
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://www.instagram.com/ngcanalumni?igsh=bTc2czZscjU3bmMz"
              className="text-white hover:text-[var(--primary-red)] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--primary-red)] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--primary-red)] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Follow us on X (Twitter)"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--primary-red)] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label="Like us on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={() => window.scrollBy({top: window.innerHeight, behavior: 'smooth'})}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="text-white text-sm mt-2">Scroll Down</span>
      </div>
    </section>
  );
}