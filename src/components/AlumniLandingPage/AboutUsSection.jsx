"use client";

import { Users, Award } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--secondary-black)] mb-4">
            About Our Alumni Association
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Nigerian Canadian Alumni Association was established to serve as a vibrant community for Nigerian graduates living in Canada. Our association provides a welcoming space where members can connect, share experiences, and build meaningful relationships that extend beyond academics. We believe in the power of unity and collaboration, and through our network, we aim to support one another in both personal and professional journeys.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[var(--secondary-black)]">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to bring together Canadian Nigerian graduates into a supportive network that enhances career opportunities, promotes social engagement, and fosters a strong sense of belonging. By creating platforms for mentorship, collaboration, and cultural exchange, we are committed to strengthening the ties that connect us while empowering our members to thrive in their chosen paths.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our programs and activities are designed to strengthen our
              community bonds. These include professional development workshops,
              cultural events, mentorship programs, and networking opportunities
              that help members advance their careers while staying connected to
              their roots.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-t-4 border-[var(--primary-red)]">
                <Users className="w-12 h-12 text-[var(--primary-red)] mx-auto mb-3" />
                <h4 className="font-semibold text-[var(--secondary-black)]">
                  Community
                </h4>
                <p className="text-gray-600 text-sm">
                  Strong network of Nigerian-Canadian professionals
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border-t-4 border-[var(--primary-red)]">
                <Award className="w-12 h-12 text-[var(--primary-red)] mx-auto mb-3" />
                <h4 className="font-semibold text-[var(--secondary-black)]">
                  Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  Commitment to professional growth and success
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/alumni-gathering.jpg"
              alt="Alumni gathering showing community spirit"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
