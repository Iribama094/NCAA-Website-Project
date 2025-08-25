"use client";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary-black)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://ucarecdn.com/d0ba1781-5189-4e54-9f30-2bfb1509c851/-/format/auto/"
                alt="NCAA Logo"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">NCAA</span>
            </div>
            <p className="text-gray-400">
              Connecting Nigerian graduates in Canada and fostering lifelong
              relationships that bridge cultures and create opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--primary-red)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  className="hover:text-white transition-colors"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#giving"
                  className="hover:text-white transition-colors"
                >
                  Giving
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--primary-red)]">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Career Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Directory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--primary-red)]">
              Contact
            </h4>
            <div className="space-y-2 text-gray-400">
              <p>Nigeria Canadian Alumni Association</p>
              <p>Toronto, Ontario, Canada</p>
              <p>Phone: +1 (416) 555-0123</p>
              <p>Email: info@ncaaalumni.org</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Nigeria Canadian Alumni Association (NCAA). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
