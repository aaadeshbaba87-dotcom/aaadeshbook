import Link from "next/link";
import { MessageCircle, Shield, Phone, Mail, MapPin, Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <img src="/images/logo.png" alt="Aaadesh Book Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
              <span className="text-xl font-black tracking-tighter royal-gold-text">AAADESH BOOK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Welcome to Aaadesh Book, your premier destination for an unrivaled online betting experience in India! Elevate your excitement with our exclusive online betting IDs for Cricket, Football, Casino, and more.
            </p>
            <div className="flex items-center gap-2 text-green-500 font-semibold text-sm">
              <Shield className="w-4 h-4" />
              <span>100% Safe & Secure</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">About us</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-primary text-sm transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">Contact us</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-primary text-sm transition-colors">Refund Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">Terms and conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Betting Services</h4>
            <ul className="space-y-4">
              <li><Link href="#platforms" className="text-gray-400 hover:text-primary text-sm transition-colors">Betting Platforms</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary text-sm transition-colors">Betting ID Services</Link></li>
              <li><Link href="#games" className="text-gray-400 hover:text-primary text-sm transition-colors">Games & Online Play</Link></li>
              <li><Link href="#login" className="text-gray-400 hover:text-primary text-sm transition-colors">Aaadesh Book Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>355, Sarvoday Commercial Centre, Near G.P.o, Bhadra, Salapose Road, Gheekanta, India -380001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@aaadeshbook.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+44 7575464033</span>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.link/457hal" 
                  className="whatsapp-button inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Get Online ID Now</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-wider">
            Aaadesh Book | Aaadesh Book Id | Aaadesh Id | Aaadeshbook | Aaadesh Book Online | Aaadesh Online Betting | Aaadesh Book Betting | Aaadesh Betting | Aaadesh Betting App | Gold365 | Laser247 | IPL Betting ID | Online Cricket ID | Online Betting ID
          </p>
          <p className="text-gray-500 text-xs whitespace-nowrap">
            Copyright © 2026 Aaadesh Book | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
