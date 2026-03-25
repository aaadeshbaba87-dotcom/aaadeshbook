import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaadesh Book | King of Online World",
  description: "Get your official Aaadesh Book betting ID instantly. India's #1 Most Trusted Platform for Cricket, Football, and Casino. Join the action with 60,000+ live events every month.",
  keywords: "Aaadesh Book, online betting ID, cricket betting, casino ID, WhatsApp betting ID, sports betting India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
