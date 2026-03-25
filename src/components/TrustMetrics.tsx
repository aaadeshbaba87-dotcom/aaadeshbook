"use client";

import { CheckCircle2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "100% Secure",
    description: "Your data and funds are protected with industry-leading encryption and security protocols."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Instant Withdrawal",
    description: "Get your winnings in your account within 5-10 minutes. No delays, no excuses."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock via WhatsApp to assist you."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "Verified IDs",
    description: "Official IDs for all major platforms like Lotus365, Diamond, and Sky Exchange."
  }
];

export default function TrustMetrics() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:border-primary/30 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
