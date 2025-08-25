"use client";

const articles = [
  {
    image:
      "/images/zayaimage1.jpg",
    category: "Achievement",
    title: "Senior Trade Commissioner Completes Exceptional Tenure",
    excerpt:
      "Congratulations to Zaya Kuyena who successfully completed his tenure as the Senior Trade Commisioner of the Canadian Embassy of Nigeria. Zaya always provided a lot of support to the organization and held our hands in many ways guiding us to strateic next steps of the organization.",
    date: "August 4, 2025",
    readTime: "3 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Community",
    title: "Annual Cultural Celebration Success",
    excerpt:
      "Our biggest cultural event yet brought together over 200 Nigerian-Canadian professionals for networking and celebration.",
    date: "August 18, 2025",
    readTime: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Programs",
    title: "New Mentorship Program Launch",
    excerpt:
      "We're expanding our mentorship program to include more industries and connect newcomers with established professionals.",
    date: "August 15, 2025",
    readTime: "4 min read",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--secondary-black)] mb-4">
            News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in our alumni community
            and upcoming opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-[var(--primary-red)]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[var(--primary-red)] text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--secondary-black)] mb-3 hover:text-[var(--primary-red)] cursor-pointer transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.date}</span>
                  <button className="text-[var(--primary-red)] font-semibold hover:text-[var(--primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[var(--primary-red)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)] focus:ring-offset-2">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}