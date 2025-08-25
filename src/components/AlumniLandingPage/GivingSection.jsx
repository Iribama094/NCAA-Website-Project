"use client";

import { Heart } from "lucide-react";

export default function GivingSection() {
  return (
    <section id="giving" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--secondary-black)] mb-4">
            Supporting Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your membership dues help us grow and support our alumni network. Here’s how your contributions make an impact:
          </p>
        </div>

        {/* Top Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--primary-red)]">
            <svg className="w-10 h-10 mb-4 text-[var(--primary-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2h5"/></svg>
            <h4 className="text-xl font-semibold mb-2 text-[var(--secondary-black)]">Grow Membership</h4>
            <p className="text-gray-600 text-center">Social media & email campaigns to create awareness and expand our alumni network.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--primary-red)]">
            <svg className="w-10 h-10 mb-4 text-[var(--primary-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
            <h4 className="text-xl font-semibold mb-2 text-[var(--secondary-black)]">Reduce Event Costs</h4>
            <p className="text-gray-600 text-center">Helps subsidize events so more members can participate and connect.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--primary-red)]">
            <svg className="w-10 h-10 mb-4 text-[var(--primary-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/></svg>
            <h4 className="text-xl font-semibold mb-2 text-[var(--secondary-black)]">Marketing Materials</h4>
            <p className="text-gray-600 text-center">Funds printing of roll-up banners and promotional materials to boost our visibility.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-t-4 border-[var(--primary-red)]">
            <svg className="w-10 h-10 mb-4 text-[var(--primary-red)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"/></svg>
            <h4 className="text-xl font-semibold mb-2 text-[var(--secondary-black)]">Community Initiatives</h4>
            <p className="text-gray-600 text-center">Supports projects and programs that benefit our alumni community.</p>
          </div>
        </div>

        {/* Donate Button (still intact) */}
        <div className="flex justify-center mb-12">
          <button className="bg-[var(--primary-red)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--primary-hover)] transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2">
            Click to pay Dues
          </button>
        </div>
      </div>
    </section>
  );
}
