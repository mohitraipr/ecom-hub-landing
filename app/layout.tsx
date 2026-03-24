import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Start Selling on Amazon, Flipkart & More | ₹51 Onboarding | ecom-hub",
  description:
    "Get your brand live on Amazon, Flipkart, Myntra & 10+ marketplaces in 7 days. Complete onboarding + support until your first 21 sales — just ₹51. Money-back guarantee.",
  keywords: [
    "sell on amazon india",
    "flipkart seller registration",
    "myntra seller onboarding",
    "marketplace seller services india",
    "e-commerce onboarding",
    "meesho seller registration",
    "ajio seller account",
    "start selling online india",
  ],
  openGraph: {
    title: "Start Selling on 10+ Marketplaces in 7 Days | ecom-hub",
    description: "Complete onboarding + support until your first 21 sales — just ₹51. Money-back guarantee.",
    url: "https://ecom-hub.in",
    siteName: "ecom-hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Selling on 10+ Marketplaces | ecom-hub",
    description: "Go live on Amazon, Flipkart, Myntra in 7 days. Just ₹51.",
  },
  alternates: {
    canonical: "https://ecom-hub.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

// Structured Data for SEO - static content, no user input
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ecom-hub.in/#business",
      name: "ecom-hub",
      description: "E-commerce marketplace onboarding and operations services for Indian sellers",
      url: "https://ecom-hub.in",
      telephone: "+917979026089",
      email: "mohitraipr@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      priceRange: "₹51",
      areaServed: "IN",
    },
    {
      "@type": "Service",
      "@id": "https://ecom-hub.in/#service",
      name: "Marketplace Onboarding",
      description: "Complete account setup, documentation, verification, and catalog management for Amazon, Flipkart, Myntra and 10+ marketplaces",
      provider: { "@id": "https://ecom-hub.in/#business" },
      areaServed: "IN",
      offers: {
        "@type": "Offer",
        price: "51",
        priceCurrency: "INR",
        description: "Onboarding + support until first 21 sales",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://ecom-hub.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this legit? How do I know you're real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We're Preeti Singh and Anvit Tiwari, currently running e-commerce operations for one of India's largest fashion brands. Message us on WhatsApp — we'll video call you if you want.",
          },
        },
        {
          "@type": "Question",
          name: "Why only ₹51? What's the catch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No catch. ₹51 filters out casual inquiries and shows you're serious. We make money when you scale — through catalog management, ads, and operations services.",
          },
        },
        {
          "@type": "Question",
          name: "What exactly do I get for ₹51?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Complete marketplace onboarding (account setup, documentation, verification) + catalog setup + dedicated WhatsApp support until your first 21 sales.",
          },
        },
        {
          "@type": "Question",
          name: "What if it doesn't work out?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full refund. If we can't get you onboarded within 15 days, or you're not happy for any reason, we return your ₹51. No questions asked.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <head>
        {/* Structured data for SEO - static JSON, safe to render */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {META_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
      <body className="antialiased font-sans bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

