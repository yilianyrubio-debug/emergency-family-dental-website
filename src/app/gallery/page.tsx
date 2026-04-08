import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smile Gallery",
  description:
    "See real smile transformations at Emergency and Family Dental. Before and after photos of dental treatments in Union City, NJ.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            Smile Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Real Smiles, Real <span className="text-brand-lilac">Results</span>
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            See the transformations our patients have experienced. Every smile
            tells a story of renewed confidence.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Teeth Whitening",
              "Porcelain Veneers",
              "Dental Implant",
              "Smile Makeover",
              "Dental Crown",
              "Orthodontics",
            ].map((treatment, i) => (
              <div
                key={treatment}
                className="rounded-2xl overflow-hidden border border-purple-100 card-hover"
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, hsl(${270 + i * 15}, 60%, ${92 - i * 3}%), hsl(${280 + i * 10}, 70%, ${85 - i * 3}%))`,
                  }}
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📸</span>
                    </div>
                    <p className="text-purple-800 font-semibold">Coming Soon</p>
                    <p className="text-purple-600 text-sm mt-1">
                      Before &amp; After
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{treatment}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Results will be shared with patient consent
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-purple-50 rounded-2xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Want to share your smile transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;d love to feature your results! Ask about our smile gallery
              at your next visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Ready for Your <span className="gradient-text">Transformation</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule a consultation and let us create a treatment plan tailored to your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
