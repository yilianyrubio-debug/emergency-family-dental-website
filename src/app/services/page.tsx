import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive dental services at Emergency and Family Dental in Union City, NJ. Emergency care, cleanings, implants, veneers, orthodontics, and more.",
};

const serviceCategories = [
  {
    category: "Emergency",
    color: "from-red-500 to-red-600",
    services: [
      {
        icon: "🚑",
        name: "Emergency Dental Care",
        desc: "Immediate treatment for severe toothaches, broken teeth, knocked-out teeth, infections, and other urgent dental issues. We prioritize getting you out of pain fast.",
      },
    ],
  },
  {
    category: "General Dentistry",
    color: "from-purple-600 to-purple-700",
    services: [
      {
        icon: "🪥",
        name: "Dental Cleanings",
        desc: "Professional cleanings to remove plaque and tartar buildup, keeping your teeth and gums healthy.",
      },
      {
        icon: "🔍",
        name: "Exams & X-Rays",
        desc: "Comprehensive examinations with state-of-the-art 3D imaging for accurate diagnosis and treatment planning.",
      },
      {
        icon: "🦷",
        name: "Composite Fillings",
        desc: "Tooth-colored fillings that restore decayed teeth while blending seamlessly with your natural smile.",
      },
      {
        icon: "💉",
        name: "Root Canal Therapy",
        desc: "Gentle root canal treatment to save infected teeth and relieve pain, preserving your natural tooth structure.",
      },
      {
        icon: "🔧",
        name: "Tooth Extractions",
        desc: "Safe, comfortable tooth removal when necessary, including wisdom teeth extractions.",
      },
      {
        icon: "👑",
        name: "Crowns & Bridges",
        desc: "Custom-crafted dental crowns and bridges to restore damaged or missing teeth with natural-looking results.",
      },
      {
        icon: "🛡️",
        name: "Preventive Care",
        desc: "Fluoride treatments, sealants, and personalized oral hygiene guidance to prevent dental problems before they start.",
      },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    color: "from-purple-500 to-brand-lilac",
    services: [
      {
        icon: "😁",
        name: "Porcelain Veneers",
        desc: "Ultra-thin porcelain shells custom-designed to transform the appearance of your teeth for a flawless, natural-looking smile.",
      },
      {
        icon: "✨",
        name: "Teeth Whitening",
        desc: "Professional-grade whitening treatments that deliver dramatic results, brightening your smile by several shades.",
      },
      {
        icon: "💎",
        name: "Dental Bonding",
        desc: "Quick, affordable cosmetic repairs for chipped, cracked, or discolored teeth using tooth-colored composite resin.",
      },
    ],
  },
  {
    category: "Advanced Dentistry",
    color: "from-brand-purple to-purple-800",
    services: [
      {
        icon: "🏗️",
        name: "Dental Implants",
        desc: "Permanent, state-of-the-art tooth replacement that looks, feels, and functions like natural teeth. The gold standard for missing teeth.",
      },
      {
        icon: "📐",
        name: "Orthodontics",
        desc: "Modern orthodontic solutions to straighten teeth, correct bite issues, and achieve the perfectly aligned smile you deserve.",
      },
      {
        icon: "🦷",
        name: "Full & Partial Dentures",
        desc: "Custom-fitted dentures designed for comfort and a natural appearance, restoring your ability to eat, speak, and smile with confidence.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Comprehensive Dental <span className="text-brand-lilac">Solutions</span>
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            From emergency relief to smile makeovers, we offer a full range of
            dental services using the latest technology and techniques.
          </p>
        </div>
      </section>

      {/* Services */}
      {serviceCategories.map((cat) => (
        <section
          key={cat.category}
          className="py-20 lg:py-24 border-b border-purple-100 last:border-b-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div
                className={`h-1 w-12 rounded-full bg-gradient-to-r ${cat.color}`}
              />
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-playfair)] font-bold text-gray-900">
                {cat.category}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service) => (
                <div
                  key={service.name}
                  className="bg-white rounded-2xl p-8 border border-purple-100 card-hover"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* New Patient Special */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-purple-900 via-purple-800 to-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lilac rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-3">
            Special Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            New Patient Special — <span className="text-brand-lilac">$150</span>
          </h2>
          <p className="text-xl text-purple-200/80 mb-4">
            X-Rays + Exam + Cleaning
          </p>
          <p className="text-purple-300 mb-10 max-w-lg mx-auto">
            Start your journey to a healthier smile with our comprehensive new
            patient package.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Claim This Offer
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Not Sure What You <span className="gradient-text">Need</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Call us or book a consultation and we&apos;ll create a personalized
            treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:2016203920"
              className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
            >
              (201) 620-3920
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
