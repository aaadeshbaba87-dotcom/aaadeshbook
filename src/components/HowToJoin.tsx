"use client";

import { motion } from "framer-motion";
import { UserPlus, FormInput, Key, CheckCircle2, Settings, FileText, Smartphone, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Visit Website",
    desc: "Open your web browser and navigate to our official website to begin."
  },
  {
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Click Sign Up",
    desc: "Find and click on the 'Sign Up' or 'Create Account' button on the homepage."
  },
  {
    icon: <FormInput className="w-8 h-8 text-primary" />,
    title: "Provide Info",
    desc: "Fill in basic details like name, email, phone number, and date of birth."
  },
  {
    icon: <Key className="w-8 h-8 text-primary" />,
    title: "Account Login",
    desc: "Use your newly created login ID and password to access your account."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "Verification",
    desc: "Click the verification link sent to your email to confirm your identity."
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Set Preferences",
    desc: "Customize your account: payment methods, language, and currency."
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Accept Terms",
    desc: "Read and accept our terms to complete the registration process."
  }
];

import { Globe } from "lucide-react";

export default function HowToJoin() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-10 italic">
              Simple 7-Step <span className="royal-gold-text">Registration</span>
            </h3>
            
            <div className="space-y-8 relative">
              <div className="absolute left-6 top-10 bottom-10 w-px bg-white/10" />
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 relative z-10 group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:scale-110 transition-all">
                    <span className="text-white font-bold text-xs">{i+1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Login Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-10 border-primary/30 relative">
               <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary px-4 py-2 rounded-xl text-black font-black text-xs uppercase tracking-widest">
                 Live Support Available
               </div>
               
               <h3 className="text-3xl font-black text-white mb-4">Aaadesh Book Login</h3>
               <p className="text-gray-400 mb-8">Secure & Easy Access to Your Betting Account</p>
               
               <div className="space-y-4 mb-10">
                 {["Click on 'Login' button", "Enter User ID & Password", "Complete OTP verification", "Click Submit to login"].map((loginStep, i) => (
                   <div key={i} className="flex items-center gap-4 text-white text-sm">
                     <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                       {i+1}
                     </div>
                     <span>{loginStep}</span>
                   </div>
                 ))}
               </div>

               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
                 <h4 className="text-white font-bold mb-2">Forgot Password?</h4>
                 <p className="text-gray-500 text-sm mb-4 italic">Contact support on WhatsApp to reset your password quickly and securely.</p>
                 <a href="https://wa.link/457hal" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                   <MessageCircle className="w-4 h-4" />
                   Contact Admin
                 </a>
               </div>

               <a href="https://wa.link/457hal" className="whatsapp-button w-full py-4 rounded-xl flex items-center justify-center font-black gap-3 shadow-xl">
                 <Smartphone className="w-5 h-5" />
                 LOGIN NOW
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
