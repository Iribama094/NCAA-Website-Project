"use client";

import {
  Users,
  Award,
  Calendar,
  Heart,
  Newspaper,
  MapPin,
} from "lucide-react";

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Networking Opportunities",
    description:
      "Connect with fellow graduates and expand professional contacts.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Diverse & Influential Network",
    description:
      "Access to a diverse and influential alumni network.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Support for Alumni in Canada",
    description:
      "Support other alumni in Canada who would like to do business in Nigeria.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Pride & Loyalty",
    description:
      "Foster a sense of pride and loyalty among members.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Social Engagement",
    description:
      "Participate in social events and activities to stay connected.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--secondary-black)] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Benefits of Joining Our Alumni Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock exclusive opportunities and resources designed to accelerate
            your personal and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            index < 3 ? (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border-l-4 border-[var(--primary-red)]"
              >
                <div className="text-[var(--primary-red)] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ) : null
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          {benefits.slice(3).map((benefit, index) => (
            <div
              key={index + 3}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all border-l-4 border-[var(--primary-red)] w-full md:w-1/2 lg:w-1/3"
            >
              <div className="text-[var(--primary-red)] mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}