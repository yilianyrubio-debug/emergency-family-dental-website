import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "🚑",
    name: "Emergency Care",
    desc: "Immediate relief for dental emergencies including severe pain, broken teeth, and infections.",
  },
  {
    icon: "🪥",
    name: "Cleanings & Exams",
    desc: "Comprehensive preventive care to keep your smile healthy and bright.",
  },
  {
    icon: "✨",
    name: "Teeth Whitening",
    desc: "Professional whitening treatments for a noticeably brighter, more confident smile.",
  },
  {
    icon: "🦷",
    name: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacement with state-of-the-art implant technology.",
  },
  {
    icon: "😁",
    name: "Veneers",
    desc: "Custom porcelain veneers to transform your smile with a natural, flawless appearance.",
  },
  {
    icon: "🔧",
    name: "Orthodontics",
    desc: "Modern orthodontic solutions to straighten teeth and improve your bite.",
  },
];

const stats = [
  { number: "5.0", label: "Google Rating", suffix: "★" },
  { number: "106", label: "Patient Reviews", suffix: "+" },
  { number: "30", label: "Years Experience", suffix: "+" },
  { number: "150", label: "Insurance Plans", suffix: "+" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple min-h-[85vh] flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-lilac rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
                Where Relief Meets Family Care
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6">
                Your Smile Deserves{" "}
                <span className="text-brand-lilac">Exceptional</span> Care
              </h1>
              <p className="text-lg text-purple-200/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Top-rated emergency and family dentistry in Union City, NJ.
                Experience compassionate, state-of-the-art dental care with Dr.
                Yillian Leal and Dr. Luis Santana.
              </p>
              <p className="text-purple-300 text-sm mb-8">
                Se habla Espa&ntilde;ol
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 text-center"
                >
                  Book on Zocdoc
                </Link>
                <a
                  href="tel:2016203920"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Call (201) 620-3920
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-brand-lilac/20 rounded-3xl -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/50">
                  <Image
                    src="/images/dr-leal-headshot.jpg"
                    alt="Dr. Yillian Leal - Emergency and Family Dental"
                    width={500}
                    height={625}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </div>
                {/* Floating review card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-purple-900/10">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <p className="font-bold text-gray-900">5.0 Rating</p>
                      <p className="text-xs text-gray-500">
                        106+ Google Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-purple-800">
                  {stat.number}
                  <span className="text-brand-lilac">{stat.suffix}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-28 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              Dental Care You Can <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With over 30 years of combined experience, modern technology, and a
              commitment to your comfort, we make every visit exceptional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Ready",
                desc: "Experiencing dental pain? We offer prompt emergency care to relieve your discomfort quickly and effectively.",
                icon: "⚡",
              },
              {
                title: "State-of-the-Art Technology",
                desc: "From 3D X-rays to advanced treatment techniques, we use the latest technology for precise, comfortable care.",
                icon: "🔬",
              },
              {
                title: "Bilingual & Family-Friendly",
                desc: "Our English and Spanish speaking team welcomes patients of all ages in a warm, comfortable environment.",
                icon: "👨‍👩‍👧‍👦",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 border border-purple-100/50 card-hover"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              Comprehensive Dental{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From routine check-ups to advanced procedures, we offer a full
              range of dental services to meet your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href="/services"
                className="group bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 card-hover"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition group"
            >
              View All Services
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MEET THE DOCTORS ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Meet Your Dentists
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              In Expert <span className="gradient-text">Hands</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our doctors combine decades of experience with a gentle,
              patient-first approach to ensure your comfort and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Dr. Leal */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4]">
                <Image
                  src="/images/dr-leal-headshot.jpg"
                  alt="Dr. Yillian Leal, DMD"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">
                    Dr. Yillian Leal, DMD
                  </p>
                  <p className="text-purple-200 text-sm">
                    Lead Dentist &bull; 30+ Years Experience
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Rutgers School of Dental Medicine graduate with over 30 years of
                expertise in pain management, emergency dental care, and advanced
                cosmetic treatments.
              </p>
              <Link
                href="/team"
                className="inline-block mt-3 text-sm text-purple-700 font-semibold hover:text-purple-900 transition"
              >
                Full Bio →
              </Link>
            </div>

            {/* Dr. Santana */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4]">
                <Image
                  src="/images/dr-santana-headshot.jpg"
                  alt="Dr. Luis Santana, DMD"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">
                    Dr. Luis Santana, DMD
                  </p>
                  <p className="text-purple-200 text-sm">Partner Dentist</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A compassionate and detail-oriented dentist and Rutgers School of
                Dental Medicine graduate. Dr. Santana brings a warm,
                patient-focused approach to every visit.
              </p>
              <Link
                href="/team"
                className="inline-block mt-3 text-sm text-purple-700 font-semibold hover:text-purple-900 transition"
              >
                Full Bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OFFICE GALLERY ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Our Office
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
              A Modern, <span className="gradient-text">Comfortable</span>{" "}
              Space
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our state-of-the-art facility is designed with your comfort in
              mind.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/waiting-room.jpg", alt: "Welcoming waiting room" },
              { src: "/images/treatment-room-1.jpg", alt: "Modern treatment room" },
              { src: "/images/treatment-room-2.jpg", alt: "State-of-the-art equipment" },
              { src: "/images/3d-xray-machine.jpg", alt: "3D X-ray technology" },
            ].map((img) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEW PATIENT SPECIAL ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-purple-900 via-purple-800 to-brand-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lilac rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-3">
            Special Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            New Patient Special —{" "}
            <span className="text-brand-lilac">$150</span>
          </h2>
          <p className="text-xl text-purple-200/80 mb-4">
            X-Rays + Exam + Cleaning
          </p>
          <p className="text-purple-300 mb-10 max-w-lg mx-auto">
            Start your journey to a healthier smile. Our comprehensive new
            patient package includes everything you need for a fresh start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Claim This Offer
            </Link>
            <a
              href="tel:2016203920"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Call to Book
            </a>
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ===== */}
      <section className="py-16 bg-purple-50/50 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            We Accept 150+ Insurance Plans
          </h3>
          <p className="text-gray-500 mb-8 text-sm">
            Including Aetna, BlueCross BlueShield, Cigna, Delta Dental,
            Guardian, and many more. We also welcome out-of-pocket patients.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Aetna",
              "BCBS",
              "Cigna",
              "Delta Dental",
              "Guardian",
              "MetLife",
              "United Healthcare",
              "Humana",
            ].map((ins) => (
              <span
                key={ins}
                className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 border border-purple-100 shadow-sm"
              >
                {ins}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Don&apos;t see your plan?{" "}
            <a href="tel:2016203920" className="text-purple-600 hover:underline">
              Call us
            </a>{" "}
            to verify your coverage.
          </p>
        </div>
      </section>

      {/* ===== LOCATION & HOURS ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
                Visit Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-8">
                Conveniently Located on{" "}
                <span className="gradient-text">Bergenline Ave</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      4806 Bergenline Ave Suite #2
                      <br />
                      Union City, NJ 07087
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🕐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <div className="text-gray-600 space-y-1 text-sm">
                      <div className="flex justify-between gap-8">
                        <span>Monday — Thursday</span>
                        <span className="font-medium">8:00 AM — 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Friday — Saturday</span>
                        <span className="font-medium">8:00 AM — 2:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="font-medium text-gray-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📞</span>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:2016203920"
                      className="text-purple-700 font-medium hover:text-purple-900 transition"
                    >
                      (201) 620-3920
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Directions & Book
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-74.0288!3d40.7677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7b5f8b8b8b7%3A0x1234567890abcdef!2s4806+Bergenline+Ave%2C+Union+City%2C+NJ+07087!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emergency and Family Dental location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Ready for a{" "}
            <span className="gradient-text">Healthier Smile</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join over 100 happy patients who trust Emergency and Family Dental
            with their care. Book your appointment today.
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
