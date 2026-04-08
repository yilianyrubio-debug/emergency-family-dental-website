import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Emergency and Family Dental in Union City, NJ. Over 30 years of compassionate dental care. Meet our mission, values, and modern office.",
};

const values = [
  {
    icon: "💜",
    title: "Compassionate Care",
    description:
      "Every patient is treated like family. We listen, we explain, and we make sure you feel comfortable and cared for at every visit.",
  },
  {
    icon: "🏆",
    title: "Clinical Excellence",
    description:
      "With over 30 years of combined experience and state-of-the-art technology, we deliver precise, high-quality dental treatments you can trust.",
  },
  {
    icon: "🤝",
    title: "Community First",
    description:
      "As a bilingual practice in the heart of Union City, we are proud to serve our diverse community in both English and Spanish.",
  },
];

const galleryImages = [
  { src: "/images/waiting-room.jpg", alt: "Welcoming waiting room" },
  { src: "/images/treatment-room-1.jpg", alt: "Modern treatment room" },
  { src: "/images/treatment-room-2.jpg", alt: "Advanced dental equipment" },
  {
    src: "/images/receptionist-front-desk.jpg",
    alt: "Friendly front desk staff",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-lilac rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            About Our Practice
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6">
            Where <span className="text-brand-lilac">Relief</span> Meets Family
            Care
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            For over three decades, Emergency and Family Dental has been a
            trusted name in Union City, NJ — providing compassionate,
            high-quality dental care for patients of all ages.
          </p>
        </div>
      </section>

      {/* ===== PRACTICE STORY ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-6">
                Built on Trust, Driven by{" "}
                <span className="gradient-text">Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by Dr. Yillian Leal, Emergency and Family Dental was
                  born from a simple belief: everyone deserves access to
                  exceptional dental care in a warm, welcoming environment.
                </p>
                <p>
                  Located at 4806 Bergenline Ave in the heart of Union City, our
                  practice has grown from a small office into a full-service
                  dental center serving thousands of patients across Hudson
                  County. With the addition of Dr. Luis Santana, our team brings
                  together deep expertise and a shared passion for patient care.
                </p>
                <p>
                  We are proud to be a bilingual practice, serving our community
                  in both English and Spanish. From emergency relief to cosmetic
                  transformations, we are here for every stage of your dental
                  journey.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/dr-leal-and-staff.jpg"
                alt="Dr. Leal with the Emergency and Family Dental team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="py-20 lg:py-28 bg-purple-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-6">
            A Healthier Smile for{" "}
            <span className="gradient-text">Every Patient</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Our mission is to provide outstanding dental care that is
            accessible, compassionate, and personalized. We strive to create
            lasting relationships with our patients by delivering treatments
            that improve oral health, restore confidence, and enhance quality
            of life — all in a comfortable, state-of-the-art environment.
          </p>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 border border-purple-100/50 card-hover"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFICE GALLERY ===== */}
      <section className="py-20 lg:py-28 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Our Space
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              A Modern, <span className="gradient-text">Welcoming</span> Office
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Step inside our state-of-the-art facility designed for your
              comfort and care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-purple-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Ready to Experience the{" "}
            <span className="gradient-text">Difference</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join over 100 happy patients who trust Emergency and Family Dental
            with their care. We would love to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Your Appointment
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
