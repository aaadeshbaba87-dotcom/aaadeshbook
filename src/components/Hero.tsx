"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield, TrendingUp, Zap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-black">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/20 mb-8 animate-shimmer">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                THE GOLD STANDARD OF ONLINE BETTING
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
              Experience the <br />
              <span className="royal-gold-text italic">Royal Way</span> <br />
              of Winning!
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl border-l-4 border-primary/30 pl-6 bg-white/5 py-4 rounded-r-2xl">
              Aaadesh Book is not just a platform—it&apos;s your premium gateway to 
              secure, legal, and massive wins in the Indian betting world.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <a
                href="https://wa.link/457hal"
                className="whatsapp-button flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-xl w-full sm:w-auto shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
                GET AAADESH ID NOW
              </a>
              <div className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all cursor-default group">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:scale-110 transition-transform">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="text-white font-black group-hover:text-primary transition-colors italic">1.2M+ LEGENDS</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Active Players</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="w-5 h-5" />, text: "Royal Security" },
                { icon: <TrendingUp className="w-5 h-5" />, text: "Fastest Payouts" },
                { icon: <Zap className="w-5 h-5" />, text: "24/7 VIP Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-300 font-black uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-2 border-primary/20 shadow-[0_0_80px_rgba(255,215,0,0.2)] group bg-black aspect-[4/5]">
              <img 
                src="/images/hero-king.png" 
                alt="Aaadesh Book King" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-card border-primary/40 backdrop-blur-2xl">
                <div className="flex items-center gap-3 text-primary text-sm font-black mb-2 uppercase tracking-[0.3em]">
                   <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                   LIVE ACTION
                </div>
                <div className="text-white text-3xl font-black italic uppercase">60,000+ MONTHLY EVENTS</div>
              </div>
            </div>
            
            {/* Crown Decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
