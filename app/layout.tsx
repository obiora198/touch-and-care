import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Touch & Care by Uju | Mobile Massage Therapist in Abuja",
    template: "%s | Touch & Care by Uju"
  },
  description: "Certified mobile massage therapist in Abuja offering professional Swedish, deep tissue, and therapeutic massages at your home or office. Relax, rejuvenate and relieve stress with Uju's expert care.",
  keywords: [
    "massage therapist Abuja",
    "home massage service Abuja",
    "mobile massage Abuja",
    "Swedish massage Abuja",
    "deep tissue massage Abuja",
    "professional massage Abuja",
    "Uju massage therapist",
    "certified massage Abuja",
    "relaxation massage Abuja",
    "therapeutic massage Abuja"
  ],
  openGraph: {
    title: "Touch & Care by Uju | Professional Mobile Massage in Abuja",
    description: "Abuja's premier mobile massage service. Certified therapist Uju brings relaxation and pain relief to your home or office with Swedish, deep tissue and therapeutic massage techniques.",
    url: "https://touchandcarebyuju.com",
    siteName: "Touch & Care by Uju",
    images: [
      {
        url: "https://touchandcarebyuju.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional massage therapist providing treatment in Abuja home",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Massage Therapy in Abuja | Touch & Care by Uju",
    description: "Certified massage therapist serving Abuja homes and offices. Book Swedish, deep tissue or relaxation massage at your convenience.",
    images: ["https://touchandcarebyuju.com/images/twitter-card.jpg"],
    site: "@TouchAndCareUju",
    creator: "@emma_obiora"
  },
  alternates: {
    canonical: "https://touchandcarebyuju.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  themeColor: "#4F46E5", // Indigo color matching your brand
  category: "health & wellness",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
