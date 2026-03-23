import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ecom-hub | E-commerce Operations at Scale",
  description:
    "End-to-end e-commerce operations for brands. From the team managing 2 Lakh orders/month. Go live on Amazon, Flipkart, Myntra & 10+ marketplaces in 1 week.",
  keywords: [
    "e-commerce",
    "amazon seller",
    "flipkart seller",
    "marketplace management",
    "inventory management",
    "e-commerce automation",
    "online selling",
    "D2C",
    "marketplace onboarding",
  ],
  openGraph: {
    title: "ecom-hub | E-commerce Operations at Scale",
    description:
      "End-to-end e-commerce operations for brands. Go live on 10+ marketplaces in 1 week.",
    url: "https://ecom-hub.in",
    siteName: "ecom-hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ecom-hub | E-commerce Operations at Scale",
    description:
      "End-to-end e-commerce operations for brands. Go live on 10+ marketplaces in 1 week.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Replace YOUR_PIXEL_ID with your actual Meta Pixel ID from Meta Events Manager
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Meta Pixel Code - Only loads if PIXEL_ID is set */}
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

        {/* Microsoft Clarity - Replace YOUR_CLARITY_ID with your actual ID */}
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
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
        {/* Vercel Analytics - Auto-enabled on Vercel deployment */}
        <Analytics />
      </body>
    </html>
  );
}
