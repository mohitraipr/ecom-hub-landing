import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ecom-hub | We Run 2 Lakh Orders/Month",
  description:
    "End-to-end e-commerce operations at scale. Go live on Amazon, Flipkart, Myntra & 10+ marketplaces in 1 week. From the team managing 14,000+ SKUs.",
  keywords: [
    "e-commerce operations",
    "amazon seller services",
    "flipkart seller",
    "marketplace management india",
    "inventory automation",
    "e-commerce agency india",
    "D2C brand scaling",
    "marketplace onboarding",
  ],
  openGraph: {
    title: "ecom-hub | We Run 2 Lakh Orders/Month",
    description:
      "End-to-end e-commerce operations. Go live on 10+ marketplaces in 1 week.",
    url: "https://ecom-hub.in",
    siteName: "ecom-hub",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ecom-hub | We Run 2 Lakh Orders/Month",
    description:
      "End-to-end e-commerce operations. Go live on 10+ marketplaces in 1 week.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
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
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
