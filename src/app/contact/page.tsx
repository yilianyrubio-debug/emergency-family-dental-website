"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Book Your <span className="text-brand-lilac">Appointment</span>
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Ready to take the next step? Reach out to schedule your visit or ask
            us any questions.
          </p>
        </div>
      </section>

      {/* Zocdoc Banner */}
      <section className="bg-purple-50 border-b border-purple-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 font-medium mb-3">
            Book instantly online through Zocdoc
          </p>
          <a
            href="https://www.zocdoc.com/practice/emergency-and-family-dental-131723"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book on Zocdoc
          </a>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <span className="text-4xl block mb-4">✅</span>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly. For immediate assistance, call us at{" "}
                    <a href="tel:2016203920" className="font-bold underline">
                      (201) 620-3920
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                      placeholder="(201) 555-0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-700 to-purple-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-6">
                Office Information
              </h2>

              <div className="space-y-6 mb-10">
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
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🕐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <div className="text-gray-600 space-y-1 text-sm">
                      <p>Monday — Thursday: 8:00 AM — 6:00 PM</p>
                      <p>Friday — Saturday: 8:00 AM — 2:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🌐</span>
                  <div>
                    <p className="font-semibold text-gray-900">Languages</p>
                    <p className="text-gray-600">English, Espa&ntilde;ol</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
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
        </div>
      </section>
    </>
  );
}
