"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Headphones, Zap, Unlock, Smartphone, Gift, Laptop, Globe, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Trusted by Millions",
    desc: "With over 10+ lakh happy users, Aaadesh Book is a name synonymous with reliability. Players keep coming back for our wide range of betting options."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "100% Secure Transactions",
    desc: "You do not need to worry about your money because it is safe here. Every transaction is highly encrypted and secure."
  },
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: "24x7 Live Support",
    desc: "So you can bet without concern, support is provided round-the-clock to sort out your queries via WhatsApp."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Instant Withdrawals",
    desc: "There is no more waiting! Your withdrawals are instant and you can quickly refill your balance."
  },
  {
    icon: <Unlock className="w-8 h-8 text-primary" />,
    title: "Unlimited Withdrawals",
    desc: "Every victory is about how you play. You can remove money from your account whenever and as often as you desire."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Simple, Smart Interface",
    desc: "Regardless of your knowledge, our platform makes it easy for you. The website is easy to use and eye-catching."
  },
  {
    icon: <Gift className="w-8 h-8 text-primary" />,
    title: "Bonuses That Keep Giving",
    desc: "Take part in fun promotions, collect cashbacks and get surprises that increase your rewards."
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-primary" />,
    title: "IDs for Every Game",
    desc: "For live games, virtual sports and gambling, we offer betting IDs made just for your preferences."
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Real-Time Live Betting",
    desc: "Try out live betting and feel the excitement. Predict and win against the odds as results happen!"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Play Responsibly",
    desc: "Responsible gaming is promoted through advanced tools that guide players to play safely."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Elite Experience</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">
              Why <span className="text-primary italic">Aaadesh Book</span> <br />
              Is Every Bettor’s First Choice!
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide user-friendly features which give our users a wholesome gaming experience with secure earnings.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/5 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}

          {/* Fill the layout gap with a promo image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-primary/20"
          >
            <img src="/images/promo-2.jpg" alt="Promo" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-8">
              <div>
                <h4 className="text-2xl font-black text-white italic">AAADESH BOOK</h4>
                <p className="text-primary font-bold text-xs tracking-widest uppercase">The Gold Standard of Online Betting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
