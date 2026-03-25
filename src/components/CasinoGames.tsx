"use client";

import { motion } from "framer-motion";
import { Zap, PlayCircle, Star, ShieldCheck } from "lucide-react";

const casinoCategories = [
  {
    title: "Live Casino Games",
    subtitle: "With Real Dealers",
    items: ["Roulette", "Blackjack", "Baccarat", "Teen Patti", "Andar Bahar"]
  },
  {
    title: "Slots & Instant Win",
    subtitle: "Speedy Outcomes",
    items: ["Video Slots", "Classic Slots", "Jackpot Slots", "Lucky Spin", "Dice Games"]
  },
  {
    title: "Virtual Games",
    subtitle: "24/7 Action",
    items: ["Virtual Cricket", "Virtual Football", "Virtual Horse Racing", "Virtual Car Racing"]
  }
];

export default function CasinoGames() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Grand Casino</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic mb-6">
              Royal <span className="royal-gold-text">Casino Experience</span> <br />
              <span className="text-white/60 text-2xl md:text-3xl">Real Dealers, Real Fun</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Enjoy an exciting live casino and online casino experience with real dealers, quick gameplay, and a premium feel.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {casinoCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                {i === 0 ? <Users className="w-10 h-10" /> : i === 1 ? <Zap className="w-10 h-10" /> : <PlayCircle className="w-10 h-10" />}
              </div>
              <h4 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">{cat.title}</h4>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-8">{cat.subtitle}</p>
              
              <div className="space-y-4 w-full mb-10">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-center gap-2 text-gray-400 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:text-white transition-all">
                    <Star className="w-3 h-3 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-tighter">{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.link/457hal" className="bg-primary text-black px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                START PLAYING
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h5 className="text-white font-black text-xl mb-1 uppercase tracking-tight">Fully Encrypted Transactions</h5>
                <p className="text-gray-500 text-sm">Your privacy is protected because we value it.</p>
              </div>
           </div>
           <a href="https://wa.link/457hal" className="whatsapp-button px-10 py-4 rounded-xl flex items-center justify-center gap-3 font-extrabold shadow-xl whitespace-nowrap">
             <MessageCircle className="w-6 h-6" />
             GET CASINO ID NOW
           </a>
        </div>
      </div>
    </section>
  );
}

import { Users, MessageCircle } from "lucide-react";
