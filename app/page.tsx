"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/918299256586?text=Hi%2C%20I%20want%20to%20scale%20my%20brand%20on%20marketplaces";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-30px" }
    );

    const elements = observerRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={observerRef} className="bg-white">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className={`text-xl font-bold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>
            ecom-hub
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#what-we-do" className="nav-link">What We Do</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
          </div>

          <Link href={WHATSAPP_LINK} target="_blank" className="btn-primary text-sm py-2.5 px-5">
            Talk to Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero - Clean and Direct */}
        <section className="hero pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6 fade-up">
                We&apos;ll get your brand selling on marketplaces.
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed fade-up">
                From onboarding to your first 21 sales — we handle everything.
                Amazon, Flipkart, Myntra, and 10+ marketplaces. Go live in 7 days.
              </p>

              <div className="flex flex-wrap gap-4 mb-12 fade-up">
                <Link href={WHATSAPP_LINK} target="_blank" className="btn-primary">
                  Start a Conversation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/register" className="btn-secondary">
                  Register for ₹51
                </Link>
              </div>

              {/* Real credentials - no fluff */}
              <div className="border-t border-white/10 pt-8 fade-up">
                <p className="text-sm text-gray-400 mb-4">Currently managing operations for</p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white">14,000+</div>
                    <div className="text-sm text-gray-400">SKUs</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-bold text-white">2L+</div>
                    <div className="text-sm text-gray-400">Orders/Month</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <div className="text-2xl font-bold text-white">2+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Simple and Clear */}
        <section id="what-we-do" className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-xl mb-14 fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-gray-500">
                End-to-end marketplace operations so you can focus on your product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Marketplace Onboarding",
                  desc: "Complete account setup on Amazon, Flipkart, Myntra, Meesho, Ajio, Nykaa, and more. Documentation, verification, everything.",
                },
                {
                  title: "Catalog Management",
                  desc: "Product listings, images, descriptions, pricing. We make sure your products look good and are discoverable.",
                },
                {
                  title: "Order & Inventory",
                  desc: "Sync inventory across channels. Process orders. Handle returns. No manual work for you.",
                },
                {
                  title: "Growth & Ads",
                  desc: "Marketplace ads, SEO optimization, and listing improvements to drive visibility and sales.",
                },
              ].map((item, i) => (
                <div key={item.title} className={`p-6 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-sm transition-all fade-up`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us - Real Credentials */}
        <section id="why-us" className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-xl mb-14 fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <p className="text-gray-500">
                We&apos;re not an agency selling promises. We&apos;re operators running real operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left - Our Story */}
              <div className="fade-up">
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Background</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We currently run e-commerce operations for one of India&apos;s largest fashion brands —
                    managing 14,000+ SKUs across all major marketplaces, processing 2 lakh+ orders every month.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We&apos;ve built the systems, made the mistakes, and learned what actually works.
                    Now we&apos;re helping other brands do the same.
                  </p>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                        PS
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Preeti Singh</div>
                        <div className="text-sm text-gray-500">Operations</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold">
                        AT
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Anvit Tiwari</div>
                        <div className="text-sm text-gray-500">Tech & Automation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - The Offer */}
              <div className="fade-up">
                <div className="bg-gray-900 text-white p-8 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-2">Our Offer</div>
                  <h3 className="text-2xl font-bold mb-4">Onboarding to First 21 Sales</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We&apos;ll set you up on your chosen marketplaces and support you until you hit your
                    first 21 sales. That&apos;s our commitment.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Complete marketplace onboarding",
                      "Catalog & listing setup",
                      "WhatsApp support throughout",
                      "Guidance until 21 sales",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between border-t border-white/10 pt-6">
                    <div>
                      <div className="text-sm text-gray-400">Registration fee</div>
                      <div className="text-4xl font-bold">₹51</div>
                    </div>
                    <Link href="/register" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                      Get Started
                    </Link>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Why ₹51? It helps us filter serious inquiries. Think of it as a token of intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Clean Steps */}
        <section id="how-it-works" className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-xl mb-14 fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-500">
                Simple process. No complicated contracts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Talk to Us",
                  desc: "Message us on WhatsApp. Tell us about your brand, products, and which marketplaces you're interested in.",
                },
                {
                  step: "2",
                  title: "Register",
                  desc: "Fill out a quick form and pay ₹51 registration fee. Share your documents and we'll start the process.",
                },
                {
                  step: "3",
                  title: "Go Live",
                  desc: "We handle the setup. You go live. We support you until your first 21 sales.",
                },
              ].map((item) => (
                <div key={item.step} className="fade-up">
                  <div className="text-5xl font-bold text-gray-100 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplaces */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm text-gray-400 text-center mb-6 fade-up">Marketplaces we work with</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 fade-up">
              {["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Nykaa", "Shopsy"].map((name) => (
                <span key={name} className="text-lg font-semibold text-gray-300 hover:text-gray-500 transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-28 bg-gray-900">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 fade-up">
              Ready to start?
            </h2>
            <p className="text-gray-400 mb-8 fade-up">
              Let&apos;s have a conversation. No pressure, no sales pitch.
              Just tell us about your brand and we&apos;ll tell you how we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center fade-up">
              <Link href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Register for ₹51
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white font-bold">
                ecom-hub
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href={WHATSAPP_LINK} target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
                <a href="mailto:mohitraipr@gmail.com" className="hover:text-white transition-colors">Email</a>
              </div>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} ecom-hub.in
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp */}
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-105 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </div>
  );
}
