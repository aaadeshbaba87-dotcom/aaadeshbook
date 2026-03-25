"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, ShieldCheck, Zap, ArrowRight, MessageCircle } from "lucide-react";

const depositSteps = [
  "Contact Aaadesh Book support via WhatsApp.",
  "Request deposit details for your betting ID.",
  "Select payment method (UPI, Bank, Wallet).",
  "Make payment using shared details.",
  "Confirm with UTR / Transaction ID.",
  "Balance updated in minutes."
];

const withdrawSteps = [
  "Message Aaadesh Book support on WhatsApp.",
  "Submit request with Amount, SS of balance & ID.",
  "Provide bank/UPI details carefully.",
  "Wait for verification process.",
  "Winnings credited to your account."
];

export default function PaymentMethods() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Transaction Hub</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              Safe & Trusted <br />
              <span className="text-primary italic">Payment Methods</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We value quick, safe, and efficient payments. Deposits and cash withdrawals are planned to be easy through our system.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Deposit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-green-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase italic">How to Deposit</h4>
            </div>
            <div className="space-y-6">
              {depositSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center text-green-500 text-[10px] font-black shrink-0 mt-1">
                    {i+1}
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Withdraw */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-primary/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CreditCard className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase italic">How to Withdraw</h4>
            </div>
            <div className="space-y-6">
              {withdrawSteps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-[10px] font-black shrink-0 mt-1">
                    {i+1}
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {["UPI", "Paytm", "Google Pay", "PhonePe", "Bank Transfer", "E-Wallets"].map((method, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-[10px] uppercase tracking-widest">{method}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.link/457hal" className="whatsapp-button inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-lg shadow-2xl">
            <MessageCircle className="w-6 h-6" />
            GET ONLINE ID & DEPOSIT NOW
          </a>
        </div>
      </div>
    </section>
  );
}
