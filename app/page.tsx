"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918299256586?text=Hi%2C%20I%20want%20to%20scale%20my%20brand%20on%20marketplaces";

const marketplaces = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Meesho",
  "Ajio",
  "Nykaa",
  "Shopify",
  "Snapdeal",
  "Wishlink",
  "Snapmint",
];

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, hasStarted]);

  return { count, start: () => setHasStarted(true) };
}

// Stats component with animation
function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, start } = useCounter(value, 1500);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      start();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, start]);

  return (
    <div
      className={`stat-card rounded-2xl p-6 md:p-8 text-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="font-display text-4xl md:text-6xl font-extrabold text-[#c3f53c] mb-2">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm md:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center hero-gradient grid-pattern">
          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-center justify-between z-10">
            <div className="font-display text-2xl font-bold">
              ecom<span className="text-[#c3f53c]">-</span>hub
            </div>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#c3f53c] text-black font-semibold rounded-full hover:bg-[#a8d935] transition-colors"
            >
              <span>Talk to Us</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </nav>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
            {/* Live badge */}
            <div className="inline-flex items-center gap-3 badge-live px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c3f53c] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c3f53c]" />
              </span>
              <span className="text-sm font-medium">
                Managing 2L+ orders this month
              </span>
            </div>

            {/* Main headline - BIG and BOLD */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 max-w-5xl">
              We run{" "}
              <span className="text-[#c3f53c]">2 Lakh orders</span> a month.
              <br />
              <span className="text-gray-500">Let us run yours.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              End-to-end e-commerce operations for brands ready to scale.
              Amazon, Flipkart, Myntra, Meesho — we handle all of it.{" "}
              <span className="text-white font-medium">
                Go live in 1 week.
              </span>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c3f53c] text-black font-bold text-lg rounded-full hover:bg-[#a8d935] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start a conversation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-semibold rounded-full hover:border-gray-500 transition-colors"
              >
                See what we do
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>

            {/* Marketplace marquee */}
            <div className="overflow-hidden py-4 border-y border-gray-800/50">
              <div className="flex animate-marquee">
                {[...marketplaces, ...marketplaces].map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-8 px-8 text-gray-500 hover:text-white transition-colors whitespace-nowrap"
                  >
                    <span className="text-lg font-medium">{name}</span>
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <AnimatedStat value={200000} suffix="+" label="Orders / Month" delay={0} />
              <AnimatedStat value={14000} suffix="+" label="SKUs Managed" delay={150} />
              <AnimatedStat value={10} suffix="+" label="Marketplaces" delay={300} />
              <AnimatedStat value={7} suffix=" Days" label="To Go Live" delay={450} />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-4">
                Everything you need
                <br />
                <span className="text-[#c3f53c]">to scale.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                We handle the chaos. You focus on your product.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Service 1 */}
              <div className="card-brutal rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-[#c3f53c]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#c3f53c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Marketplace Onboarding
                </h3>
                <p className="text-gray-400 mb-6">
                  Go live on 10+ marketplaces in just 1 week. Account setup,
                  listings, brand registry — we handle it all.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Account Setup", "Listings", "Brand Registry", "GTIN"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Service 2 */}
              <div className="card-brutal rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-[#c3f53c]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#c3f53c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Operations & Automation
                </h3>
                <p className="text-gray-400 mb-6">
                  Stop drowning in spreadsheets. Our software syncs inventory,
                  manages orders, and handles returns automatically.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Inventory Sync",
                    "Order Management",
                    "Returns",
                    "Alerts",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service 3 */}
              <div className="card-brutal rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-[#c3f53c]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#c3f53c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Sourcing & Supply Chain
                </h3>
                <p className="text-gray-400 mb-6">
                  From China to your warehouse. We connect you with
                  manufacturers, handle QC, and set up logistics.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Alibaba/1688", "Manufacturing", "QC", "Logistics"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Service 4 */}
              <div className="card-brutal rounded-2xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-[#c3f53c]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#c3f53c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Marketing & Growth
                </h3>
                <p className="text-gray-400 mb-6">
                  Get found, get clicks, get sales. We run PPC, optimize
                  listings, and grow your marketplace presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Amazon PPC",
                    "Flipkart Ads",
                    "SEO",
                    "Listing Optimization",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-12 text-center">
              Built for <span className="text-[#c3f53c]">brands like yours</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  emoji: "🚀",
                  title: "New Brands",
                  desc: "Want to start selling online but don't know where to begin",
                },
                {
                  emoji: "📦",
                  title: "Existing Sellers",
                  desc: "Drowning in operations across multiple marketplaces",
                },
                {
                  emoji: "🎯",
                  title: "D2C Brands",
                  desc: "Looking to expand from Shopify to marketplaces",
                },
                {
                  emoji: "🏭",
                  title: "Manufacturers",
                  desc: "Want to sell direct instead of through distributors",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#111] border border-gray-800 hover:border-[#c3f53c]/30 transition-colors text-center"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
                We&apos;re not an agency.
                <br />
                <span className="text-[#c3f53c]">We&apos;re operators.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Currently running operations for one of India&apos;s biggest
                fashion e-commerce brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-[#111] border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c3f53c] to-[#a8d935] flex items-center justify-center text-black font-display font-bold text-xl shrink-0">
                  MR
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Mohit Rai</h3>
                  <p className="text-[#c3f53c] text-sm font-medium mb-1">
                    Tech Head
                  </p>
                  <p className="text-gray-500 text-sm">
                    Built automation tools handling lakhs of orders
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 rounded-2xl bg-[#111] border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c3f53c] to-[#a8d935] flex items-center justify-center text-black font-display font-bold text-xl shrink-0">
                  BT
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Bhupesh Tiwari
                  </h3>
                  <p className="text-[#c3f53c] text-sm font-medium mb-1">
                    Operations
                  </p>
                  <p className="text-gray-500 text-sm">
                    End-to-end from onboarding to dispatch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 px-6 md:px-8 bg-gradient-to-t from-[#0a0a0a] to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6">
              Ready to scale?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              We&apos;ll get you live on 10+ marketplaces in 1 week. No
              contracts. No BS. Just results.
            </p>

            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#c3f53c] text-black font-bold text-xl rounded-full hover:bg-[#a8d935] transition-all hover:scale-[1.02] active:scale-[0.98] mb-6"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let&apos;s talk on WhatsApp
            </Link>

            <p className="text-gray-600 text-sm">
              or email{" "}
              <a
                href="mailto:mohitraipr@gmail.com"
                className="text-gray-400 hover:text-white transition-colors link-underline"
              >
                mohitraipr@gmail.com
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 md:px-8 border-t border-gray-900">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-lg font-bold">
              ecom<span className="text-[#c3f53c]">-</span>hub
            </div>
            <p className="text-gray-600 text-sm">
              Built with real e-commerce experience
            </p>
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} ecom-hub
            </p>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25d366] rounded-full whatsapp-pulse hover:scale-110 transition-transform shadow-2xl"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </Link>
      </div>
    </>
  );
}
