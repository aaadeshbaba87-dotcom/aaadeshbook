"use client";

import Link from "next/link";
import { MessageCircle, Crown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Betting Platforms", href: "#platforms" },
  { name: "Games & Online Play", href: "#games" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <img src="/images/logo.png" alt="Aaadesh Book Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-20" />
            </div>
            <Link href="/" className="text-2xl font-black tracking-tighter royal-gold-text uppercase">
              AAADESH BOOK
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-widest transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.link/457hal" 
              className="whatsapp-button flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>GET ONLINE ID</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
