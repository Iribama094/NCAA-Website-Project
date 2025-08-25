"use client";

import { ArrowRight } from "lucide-react";

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--secondary-black)] mb-4">
            Becoming a Member
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our global network and connect with fellow alumni making a
            difference worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl border-t-4 border-[var(--primary-red)]">
            <div className="w-16 h-16 bg-[var(--primary-red)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-black)] mb-4">Fill Out Google Form</h3>
            <p className="text-gray-600">Complete the membership application by filling out our Google Form.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl border-t-4 border-[var(--secondary-black)]">
            <div className="w-16 h-16 bg-[var(--secondary-black)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-black)] mb-4">Pay Membership Fees</h3>
            <p className="text-gray-600">Pay $100 CAD for residents or $50 CAD for non-residents to complete your registration.</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl border-t-4 border-[var(--primary-red)]">
            <div className="w-16 h-16 bg-[var(--primary-red)] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--secondary-black)] mb-4">Abide by Rules & Regulations</h3>
            <p className="text-gray-600">Agree to abide by the rules and regulations of the association to become a confirmed member.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/12Qm9BW5CEjQzCErTvwfqfpiMIJA-CcbvLBvWeLsK7X8/viewform?edit_requested=true&fbclid=PAQ0xDSwMX3yVleHRuA2FlbQIxMQABp9R3i6j62MDZZafX4WL6wXXg2hcGfL_Ul0sdXYmtkzSI-xGtFQOl7T_dtr9f_aem_hcae3x1M2BVyZ7vLqDNpsQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary-red)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--primary-hover)] transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2 inline-flex items-center justify-center"
          >
            Start Your Application
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}