"use client";

import { useState } from "react";
import { Upload, Calendar, Clock, MapPin } from "lucide-react";
import UploadModal from "./UploadModal";

const pastEventsData = [
  {
    image: "/images/event1.jpeg",
    title: "NCAA Hangout at the Founders Lounge",
    date: "February 26, 2025",
  },
  {
    image: "/images/event2.jpg",
    title: "Professional Development Workshop",
    date: "February 20, 2024",
  },
  {
    image: "/images/event33.jpg",
    title: "Regional Networking Event",
    date: "April 20, 2025",
  },
];

const upcomingEventsData = [
  {
    title: "Strategy Meeting 2025",
    date: "September 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Campus Auditorium",
    description:
      "Join alumni from around the world for our biggest annual gathering.",
  },
  {
    title: "Career Mentorship Program Launch",
    date: "October 5, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual Event",
    description:
      "Connect with industry leaders and advance your career through mentorship.",
  },
];

export default function EventsSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setShowUploadModal(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const pastEvents = [
    { ...pastEventsData[0], image: selectedImage || pastEventsData[0].image },
    ...pastEventsData.slice(1),
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--secondary-black)] mb-4">
            Events & Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our past events and stay updated on upcoming gatherings
            that bring our community together.
          </p>
        </div>

        <div className="mb-12 text-center">
          {/* Removed upload button */}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--secondary-black)] mb-8">
            Past Events Gallery
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-[var(--primary-red)]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-[var(--secondary-black)] mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[var(--primary-red)]" />
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[var(--secondary-black)] mb-8">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[var(--primary-red)]"
              >
                <h4 className="text-xl font-bold text-[var(--secondary-black)] mb-3">
                  {event.title}
                </h4>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[var(--primary-red)]" />
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[var(--primary-red)]" />
                    {event.time}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[var(--primary-red)]" />
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-[var(--primary-red)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onImageUpload={handleImageUpload}
        />
      )}
    </section>
  );
}

{ /* Removed UploadModal logic */ }