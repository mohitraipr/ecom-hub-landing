"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const WHATSAPP_NUMBER = "917979026089";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20start%20selling%20on%20marketplaces`;

// FAQ data
const faqs = [
  {
    question: "Is this legit? How do I know you're real?",
    answer: "We're Preeti Singh and Anvit Tiwari, currently running e-commerce operations for one of India's largest fashion brands. Message us on WhatsApp — we'll video call you if you want. No bots, no scams.",
  },
  {
    question: "Why only ₹51? What's the catch?",
    answer: "No catch. ₹51 filters out casual inquiries and shows you're serious. We make money when you scale — through catalog management, ads, and operations services.",
  },
  {
    question: "What exactly do I get for ₹51?",
    answer: "Complete marketplace onboarding (account setup, documentation, verification) + catalog setup + dedicated WhatsApp support until your first 21 sales.",
  },
  {
    question: "What if it doesn't work out?",
    answer: "Full refund. If we can't get you onboarded within 15 days, or you're not happy for any reason, we return your ₹51. No questions asked.",
  },
  {
    question: "Do I need all documents ready before starting?",
    answer: "No! We'll tell you exactly what you need and help you get it. Most sellers are missing something — we guide you through it.",
  },
  {
    question: "Can I talk to someone before paying?",
    answer: "Absolutely! Message us on WhatsApp anytime. We prefer to talk first anyway — it helps us understand your needs better.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Rahul M.",
    location: "Delhi",
    initials: "RM",
    text: "I was skeptical about the ₹51 thing, thought it was a scam. But within 10 days, my products were live on Amazon and Flipkart. Already got my first 5 orders!",
    marketplaces: "Amazon, Flipkart",
  },
  {
    name: "Priya S.",
    location: "Mumbai",
    initials: "PS",
    text: "The WhatsApp support is insane. They literally walked me through every document. My Myntra account got rejected twice before, they got it approved in a week.",
    marketplaces: "Myntra, Ajio",
  },
  {
    name: "Amit K.",
    location: "Bangalore",
    initials: "AK",
    text: "Managing catalog across 5 marketplaces was a nightmare. These guys synced everything. Now I focus on products, they handle the rest.",
    marketplaces: "Amazon, Flipkart, Meesho",
  },
];

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  // Counter hooks for stats
  const skuCounter = useCountUp(14000, 2000);
  const ordersCounter = useCountUp(99999, 2500);
  const marketplacesCounter = useCountUp(10, 1500);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    // Simple scroll animation - add visible class when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = observerRef.current?.querySelectorAll(".animate-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Marketplace Onboarding",
      desc: "Complete account setup, documentation, verification, and brand registry across all major platforms.",
      featured: true,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
    },
    {
      title: "Catalog Management",
      desc: "Professional product listings with optimized titles, descriptions, images, and pricing strategy.",
      featured: false,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
    {
      title: "Operations & Automation",
      desc: "Inventory sync, order management, and returns processing across all your sales channels.",
      featured: false,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>
      ),
    },
    {
      title: "Ads & Growth",
      desc: "Marketplace advertising, SEO optimization, and listing improvements to increase visibility.",
      featured: true,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
  ];

  const marketplaces = ["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Nykaa", "Shopsy", "Jiomart", "Tata CLiQ"];

  return (
    <div ref={observerRef}>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="nav-logo flex items-center gap-2">
            <Image src="/logo.svg" alt="ecom-hub" width={32} height={32} />
            <span>ecom-hub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#process" className="nav-link">Process</a>
          </div>

          {/* Desktop CTA - Simple text link */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className={`hamburger ${mobileMenuOpen ? "open" : ""} ${scrolled ? "text-stone-900" : "text-white"}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Bottom Sheet */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      />
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-menu">
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#process" onClick={closeMobileMenu}>Process</a>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            className="mobile-nav-cta"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero-section pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="hero-grid" />
          <div className="hero-accent-shape" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">

              {/* Headline - Clean and clear */}
              <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Start selling on<br />
                <span className="text-amber-400">10+ marketplaces</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-animate text-lg text-stone-400 mb-12 max-w-lg leading-relaxed">
                Amazon, Flipkart, Myntra & more. We handle onboarding, catalog setup, and support you until your first 21 sales.
              </p>

              {/* Single clear CTA */}
              <div className="hero-animate mb-16">
                <Link href="/register" className="btn-primary-clean">
                  Get started for ₹51
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <p className="text-stone-500 text-sm mt-4">
                  Money-back guarantee · No hidden fees
                </p>
              </div>

              {/* Stats Row */}
              <div className="hero-animate flex flex-wrap items-center gap-x-10 gap-y-4 pt-10 border-t border-white/10">
                <div ref={skuCounter.ref}>
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {skuCounter.count.toLocaleString()}+
                  </div>
                  <div className="text-sm text-stone-500">SKUs Managed</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div ref={ordersCounter.ref}>
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {ordersCounter.count.toLocaleString()}+
                  </div>
                  <div className="text-sm text-stone-500">Orders/Month</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/10" />
                <div ref={marketplacesCounter.ref}>
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    {marketplacesCounter.count}+
                  </div>
                  <div className="text-sm text-stone-500">Marketplaces</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplaces Strip - Infinite Marquee */}
        <section className="py-8 bg-white border-b border-stone-100 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {marketplaces.map((name) => (
                <span key={name} className="marketplace-tag">
                  {name}
                </span>
              ))}
              {marketplaces.map((name) => (
                <span key={`${name}-dup`} className="marketplace-tag">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section - Why us? */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Proof Point 1 */}
              <div className="text-center animate-in">
                <div className="trust-stat">14,000+</div>
                <div className="trust-label">SKUs managed for a leading fashion brand</div>
              </div>
              {/* Proof Point 2 */}
              <div className="text-center animate-in">
                <div className="trust-stat">2L+</div>
                <div className="trust-label">Orders processed every month</div>
              </div>
              {/* Proof Point 3 */}
              <div className="text-center animate-in">
                <div className="trust-stat">95%</div>
                <div className="trust-label">Marketplace approval rate</div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-stone-100">
              <div className="trust-badge">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Razorpay Secure</span>
              </div>
              <div className="trust-badge">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>₹51 Money-Back Guarantee</span>
              </div>
              <div className="trust-badge">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Asymmetric Grid */}
        <section id="services" className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
                Everything you need to sell online
              </h2>
              <p className="text-stone-500 text-lg">
                We handle the entire marketplace journey — from setup to scaling.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`service-card animate-in ${service.featured ? "service-card--featured" : "service-card--standard"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{service.desc}</p>
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
                <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-6">
                  About Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6 leading-tight">
                  We&apos;re operators, not an agency
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  We currently run e-commerce operations for one of India&apos;s largest fashion brands — managing
                  <span className="font-semibold text-stone-900"> 14,000+ SKUs </span>
                  across all major marketplaces, processing
                  <span className="font-semibold text-stone-900"> 2 lakh+ orders </span>
                  every month.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed mb-10">
                  We&apos;ve built the systems, faced the challenges, and know what actually works.
                  Now we&apos;re helping other brands do the same.
                </p>

                {/* Team */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="team-avatar">PS</div>
                    <div>
                      <div className="font-semibold text-stone-900">Preeti Singh</div>
                      <div className="text-sm text-stone-500">Operations Lead</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="team-avatar">AT</div>
                    <div>
                      <div className="font-semibold text-stone-900">Anvit Tiwari</div>
                      <div className="text-sm text-stone-500">Tech & Automation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - The Offer */}
              <div className="animate-in">
                <div className="offer-card">
                  <div className="inline-block px-4 py-1.5 bg-white/10 text-stone-300 text-sm font-semibold rounded-full mb-6">
                    Our Offer
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Onboarding to First 21 Sales
                  </h3>
                  <p className="text-stone-400 text-lg leading-relaxed mb-6">
                    We&apos;ll get you live on your chosen marketplaces and support you until you hit your first 21 sales.
                  </p>

                  {/* Price */}
                  <div className="offer-price">
                    <span className="offer-price-currency">₹</span>
                    <span className="offer-price-amount">51</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      "Complete marketplace onboarding",
                      "Professional catalog setup",
                      "WhatsApp support throughout",
                      "Guidance until 21 sales",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="offer-check-icon">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-stone-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/register" className="btn-primary w-full justify-center bg-white text-stone-900 hover:bg-stone-100">
                    Register Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
                <p className="text-sm text-stone-500 mt-4 text-center">
                  Why ₹51? It shows you&apos;re serious. Think of it as a token of intent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
                Real sellers, real results
              </h2>
              <p className="text-stone-500 text-lg">
                Don&apos;t take our word for it — hear from sellers who started just like you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="testimonial-card animate-in"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="testimonial-avatar">{testimonial.initials}</div>
                    <div>
                      <div className="font-semibold text-stone-900">{testimonial.name}</div>
                      <div className="text-sm text-stone-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="text-sm text-amber-600 font-medium">
                    Selling on {testimonial.marketplaces}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
                How it works
              </h2>
              <p className="text-stone-500 text-lg">
                Simple process. No complicated contracts. Get started in minutes.
              </p>
            </div>

            <div className="process-timeline">
              {[
                {
                  step: "1",
                  title: "Talk to us on WhatsApp",
                  desc: "Message us anytime. Tell us about your brand, your products, and which marketplaces interest you. We'll answer any questions.",
                },
                {
                  step: "2",
                  title: "Register for ₹51",
                  desc: "Fill out a quick form. The ₹51 shows you're serious — and it's fully refundable if things don't work out.",
                },
                {
                  step: "3",
                  title: "Go live in 7 days",
                  desc: "We handle everything — documents, approvals, catalog setup. You start selling, we support you until your first 21 sales.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="process-step grid grid-cols-[auto_1fr] gap-6 py-6 animate-in"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="step-number">{item.step}</div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-28 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 animate-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
                Questions? We&apos;ve got answers
              </h2>
              <p className="text-stone-500 text-lg">
                Everything you need to know before getting started.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="faq-item animate-in"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <summary className="faq-question">
                    {faq.question}
                    <svg className="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>

            {/* Still have questions? */}
            <div className="mt-12 text-center animate-in">
              <p className="text-stone-600 mb-4">Still have questions?</p>
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-28 bg-stone-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-in">
              Ready to start selling?
            </h2>
            <p className="text-stone-400 text-lg mb-10 animate-in">
              No pressure, no lengthy contracts. Just tell us about your brand and we&apos;ll show you how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in">
              <Link href="/register" className="btn-primary">
                Register for ₹51
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href={WHATSAPP_LINK} target="_blank" className="btn-outline bg-transparent border-stone-700 text-white hover:border-stone-500 hover:bg-white/5">
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
              <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="ecom-hub" width={28} height={28} />
                <span className="text-white font-bold text-xl">ecom-hub</span>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="text-stone-500 hover:text-white transition-colors"
                >
                  WhatsApp
                </Link>
                <a
                  href="mailto:mohitraipr@gmail.com"
                  className="text-stone-500 hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>
              <p className="text-sm text-stone-600">
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
