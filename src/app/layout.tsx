import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.site.url),
  title: {
    default: `${CONFIG.site.name} — Portfolio`,
    template: `%s — ${CONFIG.site.name}`,
  },
  description: CONFIG.site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "android-chrome", url: "/images/android-chrome-192x192.png", sizes: "192x192" }],
  },
};

// viewport correcto para iOS/webviews
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONFIG.site.lang}>
      <body className="antialiased selection:bg-[#4DA3FF33] overflow-x-hidden">
        {/* Fallback universal: fija --vh con la altura visible real */}
        <Script id="vh-fix" strategy="afterInteractive">{`
          (function(){
            var setVH=function(){
              var vh=window.innerHeight*0.01;
              document.documentElement.style.setProperty('--vh', vh+'px');
            };
            setVH();
            window.addEventListener('resize', setVH);
            window.addEventListener('orientationchange', setVH);
          })();
        `}</Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
