import Link from "next/link";

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
];

const stats = [
  { value: "2,00,000+", label: "Orders/Month" },
  { value: "14,000+", label: "SKUs Managed" },
  { value: "10+", label: "Marketplaces" },
  { value: "1 Week", label: "To Go Live" },
];

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Marketplace Onboarding",
    description:
      "Go live on Amazon, Flipkart, Myntra, Meesho & 10+ marketplaces in just 1 week.",
    features: [
      "Account setup & verification",
      "Product listings & catalog",
      "Brand registry & GTIN",
      "Complete documentation",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Operations & Automation",
    description:
      "Stop drowning in spreadsheets. Our software handles everything automatically.",
    features: [
      "Inventory sync across channels",
      "Automated order management",
      "Returns processing",
      "Real-time stock alerts",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Sourcing & Supply Chain",
    description:
      "From China to your warehouse. We handle the entire supply chain.",
    features: [
      "Alibaba & 1688 sourcing",
      "India manufacturing",
      "Quality inspection",
      "Logistics setup",
    ],
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
    title: "Marketing & Growth",
    description:
      "Get found. Get clicks. Get sales. We handle marketplace marketing.",
    features: [
      "Amazon & Flipkart PPC",
      "Meta & Google Ads",
      "Marketplace SEO",
      "Listing optimization",
    ],
  },
];

const whoWeHelp = [
  {
    title: "New Brands",
    description: "Want to start selling online but don't know where to begin",
    icon: "🚀",
  },
  {
    title: "Existing Sellers",
    description: "Drowning in operations across multiple marketplaces",
    icon: "📦",
  },
  {
    title: "D2C Brands",
    description: "Looking to expand from Shopify to marketplaces",
    icon: "🎯",
  },
  {
    title: "Manufacturers",
    description: "Want to sell direct instead of through distributors",
    icon: "🏭",
  },
];

const team = [
  {
    initials: "MR",
    name: "Mohit Rai",
    role: "Tech",
    description: "Built automation tools handling lakhs of orders",
  },
  {
    initials: "BT",
    name: "Bhupesh Tiwari",
    role: "Operations",
    description: "End-to-end operations from onboarding to dispatch",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Currently managing 2L+ orders/month
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Run{" "}
            <span className="gradient-text">2 Lakh Orders/Month.</span>
            <br />
            Let Us Run Yours.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            End-to-end e-commerce operations for brands who want to scale on
            Amazon, Flipkart, Myntra, Meesho & 10+ marketplaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative whatsapp-pulse inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all"
            >
              See What We Do
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

          {/* Marketplace logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {marketplaces.map((marketplace) => (
              <div
                key={marketplace}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400"
              >
                {marketplace}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From getting started to going big. We handle the chaos so you can
              focus on your product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card gradient-border p-8 glow"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-green-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who We <span className="gradient-text">Help</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re just starting or scaling to crores, we&apos;ve
              got you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeHelp.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              We&apos;re Not an Agency.
              <br />
              <span className="gradient-text">We&apos;re Operators.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built while running operations for one of India&apos;s biggest
              fashion e-commerce brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-blue-500/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s Talk About{" "}
            <span className="gradient-text">Your Brand</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Ready to scale? We&apos;ll get you live on 10+ marketplaces in 1
            week.
          </p>

          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative whatsapp-pulse inline-flex items-center gap-3 px-10 py-5 bg-[#25d366] hover:bg-[#20bd5a] text-white text-lg font-semibold rounded-full transition-all transform hover:scale-105 mb-8"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start a Conversation
          </Link>

          <p className="text-gray-500 text-sm">
            Or email us at{" "}
            <a
              href="mailto:mohitraipr@gmail.com"
              className="text-blue-400 hover:underline"
            >
              mohitraipr@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold gradient-text">ecom-hub</div>
          <p className="text-gray-500 text-sm">
            Built with real e-commerce experience
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ecom-hub. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
