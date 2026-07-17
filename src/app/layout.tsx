import type { Metadata } from "next";
import { Instrument_Serif, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "InkHold — Deposit holds the chair",
  description:
    "Instagram bio → intake → Stripe deposit → digital waiver. Built for solo tattoo artists in Seattle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <header className="site-header">
          <Link href="/" className="brand">
            Ink<em>Hold</em>
          </Link>
          <nav className="nav-links">
            <Link href="/#demo">Demo artists</Link>
            <Link href="/seattle">Seattle plan</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="site-footer">
          InkHold · Seattle MVP · A{" "}
          <a href="https://glittercloud.solutions">Glittercloud Solutions</a>{" "}
          demo
        </footer>
      </body>
    </html>
  );
}
