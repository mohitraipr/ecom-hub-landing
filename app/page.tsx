"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "917979026089";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20start%20selling%20on%20marketplaces`;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const elements = observerRef.current?.querySelectorAll(".animate-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={observerRef}>
      {/* Navigation */}
      <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="nav-logo">
            ecom-hub
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#process" className="nav-link">Process</a>
          </div>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className={`btn-primary text-sm py-2.5 px-5 ${scrolled ? "" : ""}`}
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="hero-grid" />
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              {/* Live Badge */}
              <div className="hero-animate">
                <div className="stat-pill mb-8">
                  <span className="stat-pill-dot" />
                  <span>Currently managing 2L+ orders/month</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Get your brand live on
                <span className="block mt-1 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  10+ marketplaces
                </span>
              </h1>

              {/* Subheadline */}
              <p className="hero-animate text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
                Complete onboarding to your first 21 sales for just
                <span className="text-white font-semibold"> ₹51</span>.
                Amazon, Flipkart, Myntra, and more — in 7 days.
              </p>

              {/* CTAs */}
              <div className="hero-animate flex flex-wrap gap-4 mb-16">
                <Link href="/register" className="btn-primary">
                  Register Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href={WHATSAPP_LINK} target="_blank" className="btn-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk to Us
                </Link>
              </div>

              {/* Stats Row */}
              <div className="hero-animate flex flex-wrap items-center gap-x-10 gap-y-4 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white">14,000+</div>
                  <div className="text-sm text-zinc-500">SKUs Managed</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white">2L+</div>
                  <div className="text-sm text-zinc-500">Orders/Month</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-zinc-500">Marketplaces</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplaces Strip */}
        <section className="py-8 bg-white border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Nykaa", "Shopsy"].map((name) => (
                <span key={name} className="marketplace-tag">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                Everything you need to sell online
              </h2>
              <p className="text-zinc-500 text-lg">
                We handle the entire marketplace journey — from setup to scaling.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Marketplace Onboarding",
                  desc: "Complete account setup, documentation, verification, and brand registry across all major platforms.",
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                  ),
                },
                {
                  title: "Catalog Management",
                  desc: "Professional product listings with optimized titles, descriptions, images, and pricing strategy.",
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  ),
                },
                {
                  title: "Operations & Automation",
                  desc: "Inventory sync, order management, and returns processing across all your sales channels.",
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                  ),
                },
                {
                  title: "Ads & Growth",
                  desc: "Marketplace advertising, SEO optimization, and listing improvements to increase visibility.",
                  icon: (
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div key={service.title} className="service-card animate-in">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{service.title}</h3>
                  <p className="text-zinc-500 text-[15px] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Offer Section */}
        <section id="about" className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left - Who We Are */}
              <div className="animate-in">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
                  About Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                  We&apos;re operators, not an agency
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  We currently run e-commerce operations for one of India&apos;s largest fashion brands — managing
                  <span className="font-semibold text-zinc-900"> 14,000+ SKUs </span>
                  across all major marketplaces, processing
                  <span className="font-semibold text-zinc-900"> 2 lakh+ orders </span>
                  every month.
                </p>
                <p className="text-zinc-600 text-lg leading-relaxed mb-10">
                  We&apos;ve built the systems, faced the challenges, and know what actually works.
                  Now we&apos;re helping other brands do the same.
                </p>

                {/* Team */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="team-avatar">PS</div>
                    <div>
                      <div className="font-semibold text-zinc-900">Preeti Singh</div>
                      <div className="text-sm text-zinc-500">Operations Lead</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="team-avatar">AT</div>
                    <div>
                      <div className="font-semibold text-zinc-900">Anvit Tiwari</div>
                      <div className="text-sm text-zinc-500">Tech & Automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - The Offer */}
              <div className="animate-in">
                <div className="offer-card p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-white/10 text-zinc-300 text-sm font-medium rounded-full mb-6">
                    Our Offer
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Onboarding to First 21 Sales
                  </h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    We&apos;ll get you live on your chosen marketplaces and support you until you hit your first 21 sales. That&apos;s our commitment.
                  </p>

                  <div className="space-y-4 mb-10">
                    {[
                      "Complete marketplace onboarding",
                      "Professional catalog setup",
                      "WhatsApp support throughout",
                      "Guidance until 21 sales",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-zinc-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-8 border-t border-white/10">
                    <div>
                      <div className="text-sm text-zinc-500 mb-1">Registration fee</div>
                      <div className="text-5xl font-bold text-white">₹51</div>
                    </div>
                    <Link href="/register" className="btn-primary bg-white text-zinc-900 hover:bg-zinc-100">
                      Register Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-4 text-center">
                  Why ₹51? It shows you&apos;re serious. Think of it as a token of intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 lg:py-28 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                How it works
              </h2>
              <p className="text-zinc-500 text-lg">
                Simple process. No complicated contracts. Get started in minutes.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Talk to us",
                    desc: "Message us on WhatsApp. Tell us about your brand, your products, and which marketplaces you want to sell on.",
                  },
                  {
                    step: "2",
                    title: "Register & share documents",
                    desc: "Fill out a quick form and pay ₹51 registration fee. Share your business documents and we'll start the onboarding process.",
                  },
                  {
                    step: "3",
                    title: "Go live & start selling",
                    desc: "We handle the complete setup. Your products go live. We support you until your first 21 sales.",
                  },
                ].map((item, index) => (
                  <div key={item.step} className="relative flex gap-6 animate-in">
                    <div className="relative">
                      <div className="step-number">{item.step}</div>
                      {index < 2 && <div className="step-line" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-zinc-900 mb-2">{item.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-28 bg-zinc-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-in">
              Ready to start selling?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 animate-in">
              No pressure, no lengthy contracts. Just tell us about your brand and we&apos;ll show you how we can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in">
              <Link href="/register" className="btn-primary">
                Register for ₹51
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href={WHATSAPP_LINK} target="_blank" className="btn-outline bg-transparent border-zinc-700 text-white hover:border-zinc-500 hover:bg-white/5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-section py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white font-bold text-xl">
                ecom-hub
              </div>
              <div className="flex items-center gap-8 text-sm">
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
                <a
                  href="mailto:mohitraipr@gmail.com"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
              <p className="text-sm text-zinc-600">
                © {new Date().getFullYear()} ecom-hub.in
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <Link
        href={WHATSAPP_LINK}
        target="_blank"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </Link>
    </div>
  );
}
