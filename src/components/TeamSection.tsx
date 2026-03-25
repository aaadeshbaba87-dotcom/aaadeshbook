"use client";

import { motion } from "framer-motion";
import { Medal, ShieldCheck, Users, Briefcase } from "lucide-react";

const teamMembers = [
  {
    name: "Aniket Gupta",
    role: "Senior Sports Analyst",
    desc: "Aniket has over 12 years of experience in cricket analytics and has worked as a statistical advisor to leading IPL clubs.",
    certs: ["M.Sc. in Statistics", "Certified Sports Analyst"],
    icon: "🏏"
  },
  {
    name: "Seema Kapoor",
    role: "Head of Cybersecurity",
    desc: "Seema is a specialist in secure financial systems and leads the transaction and data security architecture for the platform.",
    certs: ["CISSP Certified", "PCI-DSS Security Expert"],
    icon: "🔐"
  },
  {
    name: "Abhijeet Das",
    role: "Director of Operations",
    desc: "With 15+ years in gaming operations and customer experience, Vikram oversees platform performance and service quality.",
    certs: ["MBA (Operations)", "iGaming Certified"],
    icon: "🎮"
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">The Masters</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic">Meet Our <span className="royal-gold-text">Expert Team</span></h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our seasoned team of analysts, technologists and operations specialists take care of excellence in all functions behind Aaadesh Book.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card hover:border-primary/40 transition-all p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                {member.icon}
              </div>
              
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                  <span className="text-3xl font-bold">{member.name[0]}</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-1">{member.name}</h4>
                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-6">{member.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{member.desc}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/5">
                {member.certs.map((cert, j) => (
                  <div key={j} className="flex items-center gap-3 text-xs text-gray-400">
                    <Medal className="w-3.5 h-3.5 text-primary" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
