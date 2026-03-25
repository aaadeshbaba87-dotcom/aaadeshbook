"use client";

import { motion } from "framer-motion";
import { MessageCircle, CreditCard, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "1. Message Support",
    description: "Click on the WhatsApp button and message our support team to request a new betting ID."
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "2. Deposit Funds",
    description: "Choose your preferred payment method (UPI, Bank Transfer, GPay) and deposit your starting amount."
  },
  {
    icon: <PlayCircle className="w-10 h-10" />,
    title: "3. Start Winning",
    description: "Receive your login credentials instantly and start placing bets on your favorite sports or games."
  }
];

export default function HowToPlay() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase italic">
          How to get your <span className="text-primary italic">ID in 2 Minutes?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Follow these three simple steps to start your journey with India's most trusted book.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary mb-8 shadow-[0_0_30px_rgba(255,215,0,0.1)] group-hover:bg-primary group-hover:text-black transition-all">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic uppercase">{step.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a 
            href="https://wa.me/911234567890" 
            className="whatsapp-button inline-flex items-center gap-4 px-12 py-5 rounded-full text-xl font-black"
          >
            <MessageCircle className="w-8 h-8" />
            MESSAGE US ON WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
