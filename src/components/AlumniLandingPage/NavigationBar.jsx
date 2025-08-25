"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="NCAA Logo"
                  className="h-14 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                className="border-2 border-[var(--primary-red)] text-[var(--primary-red)] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-red)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
                aria-label="Support the association through giving"
              >
                Giving
              </button>
              <button
                className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
                aria-label="Join the alumni association"
                onClick={() => window.open("https://docs.google.com/forms/d/12Qm9BW5CEjQzCErTvwfqfpiMIJA-CcbvLBvWeLsK7X8/viewform?edit_requested=true&fbclid=PAQ0xDSwMX3yVleHRuA2FlbQIxMQABp9R3i6j62MDZZafX4WL6wXXg2hcGfL_Ul0sdXYmtkzSI-xGtFQOl7T_dtr9f_aem_hcae3x1M2BVyZ7vLqDNpsQ","_blank")}
              >
                Join Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[var(--secondary-black)] hover:text-[var(--primary-red)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
                aria-label="Open mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-3">
                <button
                  className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors w-full"
                  aria-label="Join the alumni association"
                  onClick={() => window.open("https://docs.google.com/forms/d/12Qm9BW5CEjQzCErTvwfqfpiMIJA-CcbvLBvWeLsK7X8/viewform?edit_requested=true&fbclid=PAQ0xDSwMX3yVleHRuA2FlbQIxMQABp9R3i6j62MDZZafX4WL6wXXg2hcGfL_Ul0sdXYmtkzSI-xGtFQOl7T_dtr9f_aem_hcae3x1M2BVyZ7vLqDNpsQ","_blank")}
                >
                  Join Now
                </button>
                <button
                  className="border-2 border-[var(--primary-red)] text-[var(--primary-red)] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-red)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2"
                  onClick={() => window.open("https://www.canadahelps.org/en/charities/nigeria-canadian-alumni-association-ncaa/", "_blank")}
                >
                  Giving
                </button>
                <button
                  className="bg-[var(--primary-red)] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[var(--primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2 ml-2"
                  onClick={() => window.open("https://forms.gle/7Qv7Qv7Qv7Qv7Qv7", "_blank")}
                >
                  Join Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}