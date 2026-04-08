import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Dr. Yillian Leal, Dr. Luis Santana, and the dedicated team at Emergency and Family Dental in Union City, NJ.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Meet the <span className="text-brand-lilac">Experts</span> Behind Your Smile
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Our experienced, compassionate team is dedicated to providing you with
            the highest quality dental care in a comfortable environment.
          </p>
        </div>
      </section>

      {/* Dr. Leal */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <Image
                src="/images/dr-leal-headshot.jpg"
                alt="Dr. Yillian Leal, DMD"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
                Lead Dentist
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-2">
                Dr. Yillian Leal, <span className="gradient-text">DMD</span>
              </h2>
              <p className="text-purple-600 font-medium mb-6">
                30+ Years of Experience
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Yillian Leal is a highly experienced, bilingual dentist with
                  over 30 years of expertise in pain management, emergency dental
                  care, and advanced treatments. She earned her Doctor of Dental
                  Medicine degree from Rutgers School of Dental Medicine.
                </p>
                <p>
                  Dr. Leal is highly proficient in endodontics, cosmetic dentistry,
                  emergency care, and pain management. Her passion for dentistry
                  and commitment to patient comfort have made her a trusted name in
                  the Union City community.
                </p>
                <p>
                  When you visit Dr. Leal, you can expect thorough, gentle care
                  delivered with warmth and professionalism. She takes the time to
                  explain every procedure and ensure you feel confident in your
                  treatment plan.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Emergency Care",
                  "Pain Management",
                  "Cosmetic Dentistry",
                  "Endodontics",
                  "Implants",
                  "Veneers",
                ].map((spec) => (
                  <span
                    key={spec}
                    className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>🎓 Rutgers School of Dental Medicine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Santana */}
      <section className="py-20 lg:py-28 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
                Partner Dentist
              </p>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-2">
                Dr. Luis Santana, <span className="gradient-text">DMD</span>
              </h2>
              <p className="text-purple-600 font-medium mb-6">
                Rutgers School of Dental Medicine
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dr. Luis Ernesto Santana Espeso is a compassionate and
                  detail-oriented dentist who brings a warm, patient-focused
                  approach to dental care. Originally from Cuba, Dr. Santana earned
                  his Doctor of Dental Medicine degree from Rutgers School of
                  Dental Medicine.
                </p>
                <p>
                  Coming from a family deeply rooted in dentistry, Dr. Santana
                  developed his passion for the field at an early age. He is
                  dedicated to helping individuals feel at ease during every visit,
                  combining modern techniques with genuine compassion.
                </p>
                <p>
                  Dr. Santana finds particular satisfaction in restorative
                  procedures that give patients back their confidence to smile and
                  enjoy life to the fullest.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "General Dentistry",
                  "Restorative Care",
                  "Preventive Dentistry",
                  "Patient Comfort",
                ].map((spec) => (
                  <span
                    key={spec}
                    className="bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>🎓 Rutgers School of Dental Medicine</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl order-1 lg:order-2">
              <Image
                src="/images/dr-santana-headshot.jpg"
                alt="Dr. Luis Santana, DMD"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Gallery */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-purple-600 font-medium text-sm tracking-widest uppercase mb-3">
              Our Staff
            </p>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900">
              A Team You Can <span className="gradient-text">Count On</span>
            </h2>
            <p className="text-gray-600 mt-4">
              From our front desk to the treatment room, every member of our team
              is committed to making your experience exceptional.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/dr-leal-and-staff.jpg", alt: "Dr. Leal and team member" },
              { src: "/images/team-treating-patient.jpg", alt: "Team treating patient" },
              { src: "/images/treatment-in-action.jpg", alt: "Treatment in action" },
              { src: "/images/receptionist-on-phone.jpg", alt: "Receptionist helping patients" },
              { src: "/images/office-staff-laughing.jpg", alt: "Our friendly staff" },
              { src: "/images/receptionist-and-staff.jpg", alt: "Team collaboration" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Ready to Meet <span className="gradient-text">Our Team</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Schedule your appointment and experience the difference our team
            makes.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
