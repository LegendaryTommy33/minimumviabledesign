import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata = {
  title: "Guide Cabinet Médical Maroc",
  description:
    "Ouvre ton cabinet médical rentable au Maroc en 3 mois, même si tu pars de zéro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Vercel Analytics component */}
        <Analytics />
        {/* Vercel Speed Insights component */}
        <SpeedInsights />

        {/* HubSpot tracking script */}
        <Script
          id="hs-script-loader"
          src="//js-eu1.hs-scripts.com/147781254.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

