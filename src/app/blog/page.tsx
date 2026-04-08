import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dental health tips, guides, and news from Emergency and Family Dental in Union City, NJ.",
};

const posts = [
  {
    title: "What to Do in a Dental Emergency",
    excerpt:
      "A knocked-out tooth, severe toothache, or broken crown can be stressful. Learn the immediate steps to take before reaching our office, and when to seek emergency care.",
    gradient: "from-red-400 to-purple-600",
    tag: "Emergency Care",
  },
  {
    title: "Your First Visit: What to Expect",
    excerpt:
      "Nervous about your first dental appointment? Here's a step-by-step walkthrough of what happens during your initial visit, from check-in to your personalized treatment plan.",
    gradient: "from-purple-500 to-brand-lilac",
    tag: "New Patients",
  },
  {
    title: "Veneers vs. Bonding: Which Is Right for You?",
    excerpt:
      "Both veneers and bonding can transform your smile, but they serve different purposes. We break down the pros, cons, cost, and longevity of each option to help you decide.",
    gradient: "from-brand-lilac to-purple-400",
    tag: "Cosmetic Dentistry",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Dental Health <span className="text-brand-lilac">Insights</span>
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Tips, guides, and news to help you maintain a healthy, beautiful
            smile between visits.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl overflow-hidden border border-purple-100 card-hover group"
              >
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} flex items-center justify-center p-6`}
                >
                  <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-purple-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Coming Soon
                    <span>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              More articles coming soon
            </h3>
            <p className="text-gray-600">
              We&apos;re working on helpful content to keep you informed about
              your dental health. Check back soon!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Have a <span className="gradient-text">Question</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Can&apos;t find the answer you&apos;re looking for? Reach out and
            we&apos;ll be happy to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
