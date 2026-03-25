"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <a
        href="https://wa.link/457hal"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center"
      >
        <div className="absolute right-full mr-4 bg-black/80 backdrop-blur-md border border-primary/20 text-white px-4 py-2 rounded-xl text-sm font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          CHAT WITH THE KING 👑
        </div>
        
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-yellow-200 to-primary p-0.5 shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/20 animate-pulse" />
             <MessageCircle className="w-8 h-8 text-primary relative z-10" />
          </div>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full border-2 border-black flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
