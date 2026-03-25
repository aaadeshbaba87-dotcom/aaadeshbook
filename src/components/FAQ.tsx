"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Aaadesh Book?",
    a: "Aaadesh Book is an online site which provides a betting service in different sports such as cricket, football, kabaddi and casino games. It enables the user to open betting account (or ID) and engage in live online betting."
  },
  {
    q: "What is the Aaadesh book profile?",
    a: "Your profile is your gateway to manage bets, withdrawals, and platform access across all our partner sites like Lotus365 and Laser247."
  },
  {
    q: "How to create a betting ID in Aaadesh Book?",
    a: "Creating an ID is simple. Message us on WhatsApp, choose your platform, make a deposit, and your ID is generated instantly."
  },
  {
    q: "Is Aaadesh Book safe and legal?",
    a: "Yes, we are the most preferred platform for users looking for a dependable and secure interface. We have properly established security measures and local licenses to ensure safety."
  },
  {
    q: "How can I contact Aaadesh Book support?",
    a: "You can contact our professional support team 24/7 via the WhatsApp links provided throughout the website."
  },
  {
    q: "What's the minimum amount for betting?",
    a: "You can start your journey with a minimum deposit of ₹100 or as specified by the individual betting platform you choose."
  },
  {
    q: "How does the withdrawal process work?",
    a: "Withdrawals are handled manually for security. Just message us on WhatsApp with your withdrawal request and payment details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">Support Center</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic text-center mb-16">
              Royal <span className="royal-gold-text">Support FAQ</span>
            </h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${openIndex === i ? "bg-primary text-black" : "bg-white/5 text-gray-500 group-hover:text-primary"}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className={`font-bold transition-colors ${openIndex === i ? "text-primary" : "text-white"}`}>{faq.q}</span>
                </div>
                {openIndex === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-gray-500" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-12 pb-8 pt-2">
                       <p className="text-gray-400 text-sm leading-relaxed border-l border-primary/20 pl-6">
                         {faq.a}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-primary/[0.03] border border-primary/10 text-center">
           <h4 className="text-white font-bold mb-2">Still have questions?</h4>
           <p className="text-gray-500 text-sm mb-6">Our 24/7 expert team is ready to help you on WhatsApp.</p>
           <a href="https://wa.link/457hal" className="text-primary font-black uppercase tracking-widest text-xs hover:underline inline-flex items-center gap-2">
             <MessageCircle className="w-4 h-4" />
             Chat with Support
           </a>
        </div>
      </div>
    </section>
  );
}
