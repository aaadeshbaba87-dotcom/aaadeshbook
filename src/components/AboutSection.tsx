"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Globe, Headphones } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 italic">Simply Trusted & <span className="royal-gold-text">Royal</span></h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Aaadesh Book is a reputable and reliable online betting site that assists users to obtain a secure betting ID to offer sports betting and online casino games. We work as a master agent, connecting users to well-known betting platforms through verified IDs.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Instead of complicated online systems, Aaadesh Book follows a simple agent-based process. Users can easily get their betting ID, add funds, and withdraw winnings with direct support through WhatsApp or Telegram, making the experience fast and personal.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                <Shield className="w-10 h-10 text-primary" />
                <div>
                  <div className="text-white font-bold">Secure ID</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Verified Agent</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/30 transition-all">
                <Smartphone className="w-10 h-10 text-primary" />
                <div>
                  <div className="text-white font-bold">Fast Payout</div>
                  <div className="text-gray-500 text-xs uppercase tracking-tighter">Instant Service</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            <div className="glass-card overflow-hidden border-primary/20 shadow-[0_0_50px_rgba(255,215,0,0.05)]">
              <div className="bg-gradient-to-r from-primary/20 via-primary/5 to-transparent p-6 border-b border-primary/20">
                <h4 className="text-primary font-black uppercase tracking-[0.3em] text-sm">Aaadesh Book Official Details</h4>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { label: "Company Name", value: "Aaadesh Book" },
                  { label: "License", value: "Curacao" },
                  { label: "Languages", value: "English, Hindi" },
                  { label: "Services", value: "Betting ID Provider" },
                  { label: "Started In", value: "2018" },
                  { label: "Players", value: "1M+ Active" },
                  { label: "Payout Time", value: "5-10 Minutes" }
                ].map((item, i) => (
                  <div key={i} className={`grid grid-cols-2 p-4 sm:p-5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-bold text-sm tracking-wide">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
