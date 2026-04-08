"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What should I expect at my first visit?",
    answer:
      "Your first visit includes a comprehensive dental exam, X-rays, and a professional cleaning. We'll review your dental history, discuss any concerns, and create a personalized treatment plan. The visit typically takes about 60-90 minutes. We also offer a New Patient Special — X-Rays, Exam, and Cleaning for just $150.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept over 150 insurance plans including Aetna, BlueCross BlueShield, Cigna, Delta Dental, Guardian, MetLife, United Healthcare, Humana, and many more. We also welcome out-of-pocket patients. Call us at (201) 620-3920 to verify your specific plan.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "Call us immediately at (201) 620-3920. We offer prompt emergency dental care for severe toothaches, broken or knocked-out teeth, infections, and other urgent issues. If you're experiencing a dental emergency outside of office hours, call our number for guidance on immediate steps you can take.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept most major dental insurance plans, cash, credit cards, and debit cards. We also work with CareCredit for flexible payment plans. Our goal is to make quality dental care accessible and affordable for everyone.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment several ways: through our Zocdoc page for online scheduling, by calling us at (201) 620-3920, or by filling out the contact form on our website. We'll work with you to find a convenient time.",
  },
  {
    question: "What languages do you speak?",
    answer:
      "Our team is fully bilingual in English and Spanish. We want every patient to feel comfortable communicating their needs and understanding their treatment options.",
  },
  {
    question: "What is included in the $150 New Patient Special?",
    answer:
      "Our New Patient Special includes a full set of dental X-rays, a comprehensive dental examination, and a professional cleaning — all for just $150. It's the perfect way to get started on your journey to a healthier smile.",
  },
  {
    question: "What are your office hours?",
    answer:
      "We're open Monday through Thursday from 8:00 AM to 6:00 PM, and Friday through Saturday from 8:00 AM to 2:00 PM. We are closed on Sundays.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes! We are a family dental practice and welcome patients of all ages, including children. We strive to make dental visits fun and comfortable for our youngest patients, building positive associations with dental care from an early age.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-purple-100 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50/50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className={`text-purple-500 text-2xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-brand-purple py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300 font-medium text-sm tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6">
            Frequently Asked <span className="text-brand-lilac">Questions</span>
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Find answers to common questions about our practice, services, and
            what to expect during your visit.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-50 border-t border-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-bold text-gray-900 mb-4">
            Still Have <span className="gradient-text">Questions</span>?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We&apos;re happy to help. Reach out and our friendly team will get
            back to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
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
