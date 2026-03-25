"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Trophy, TrendingUp, Gift } from "lucide-react";

const platforms = [
  {
    name: "World777",
    tagline: "Premier Betting Hub",
    desc: "The global gold standard for multi-sport betting with massive liquidity and premium odds.",
    features: ["Massive Liquidity", "Instant Resulting", "All Major Sports", "High Betting Limits"],
    isHot: true
  },
  {
    name: "AllPanel777",
    tagline: "Advanced Analytics",
    desc: "Access the most advanced betting panel with real-time stats and smooth execution.",
    features: ["Professional Interface", "24/7 Live Data", "One-Tap Bets", "Advanced Security"]
  },
  {
    name: "SilverBet777",
    tagline: "Ultra-Fast Execution",
    desc: "A high-performance platform prioritized for speed, reliability, and exclusive bonuses.",
    features: ["Zero-Lag System", "Exclusive VIP Odds", "Instant Payouts", "Silver Loyalty Rewards"],
    isSpl: true
  }
];

export default function PremiumPlatforms() {
  return (
    <section id="platforms" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Network</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic">Elite <span className="royal-gold-text">Partner Platforms</span></h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Access the best betting platforms with instant ID activation and premium features through Aaadesh Book.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/40 transition-all relative overflow-hidden"
            >
              {p.isHot && <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest -rotate-45 translate-x-3 translate-y-2">Hot</div>}
              {p.isSpl && <div className="absolute top-0 right-10 bg-primary text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-b-lg">Special</div>}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black italic text-xl group-hover:scale-110 transition-transform">
                  {p.name[0]}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{p.name}</h4>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-primary fill-primary" />)}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                "{p.desc}"
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {p.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
                    <ShieldCheck className="w-3 h-3 text-primary" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="https://wa.link/457hal" className="flex-1 bg-primary text-black py-3 rounded-xl font-black text-xs text-center uppercase tracking-widest hover:scale-105 transition-transform">
                  GET ID
                </a>
                <a href="https://wa.link/457hal" className="flex-1 border border-white/10 text-white py-3 rounded-xl font-black text-xs text-center uppercase tracking-widest hover:bg-white/5 transition-colors">
                  DEMO
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
