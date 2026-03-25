"use client";

import { motion } from "framer-motion";
import { ChevronRight, Trophy, Target, Zap } from "lucide-react";


export default function SportsMarkets() {
  return (
    <section id="games" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Arena</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic">Elite <span className="royal-gold-text">Sports Markets</span></h3>
          </div>
          <a href="https://wa.link/457hal" className="text-primary font-bold flex items-center gap-2 group border-b border-primary/20 pb-2 hover:border-primary transition-all">
            VIEW ALL MARKETS <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-1 group hover:border-primary/40 transition-all"
          >
            <div className="relative aspect-video bg-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img src="/images/cricket-action.png" alt="Cricket Betting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-black text-[10px] font-black uppercase tracking-widest">Most Popular</div>
            </div>
            <div className="px-6 pb-8">
              <h4 className="text-3xl font-black text-white mb-4">Online Cricket Betting</h4>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Experience the thrill of live cricket betting on all major formats and tournaments. From IPL to International matches, we provide the best odds and real-time updates.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Match / Series Winner", "Toss Winner", "In-Play Live Betting", "Top Batsman/Bowler", "IPL Specials", "Session Betting"].map((market, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <Trophy className="w-4 h-4 text-primary/60" />
                    <span>{market}</span>
                  </div>
                ))}
              </div>
              <a href="https://wa.link/457hal" className="w-full py-5 rounded-2xl bg-primary text-black flex items-center justify-center gap-3 text-lg font-black hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                <Zap className="w-6 h-6" />
                GET YOUR CRICKET ID NOW
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-2 border-primary/20 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/promo-1.jpg" 
                alt="Aaadesh Book Promo" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            {/* Visual highlight */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
