"use client";

import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Rohit Sharma",
    location: "Delhi",
    handle: "@rohit.shrm18",
    comment: "I have been using Aaadesh Book ID since more than six months now and the experience has been fantastic! The betting app is very fast and user-friendly and ideal in live betting of cricket. Payments are made instantly and the customer service department is round-the-clock on WhatsApp.",
    rating: 5
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    handle: "@priya.mehta212",
    comment: "The Aaadesh Book login system is quite easy and safe. I enjoy the fact that it is so easy to alternate between various games and sports. The application design is neat and the rewards are even more enjoyable to bet with. Completely rely on Aaadesh Book!",
    rating: 5
  },
  {
    name: "Vikram Patel",
    location: "Ahmedabad",
    handle: "@vik.patel99",
    comment: "I had no experience online gambling, and Aaadesh Book made the whole easy. Betting was easy since I created my Aaadesh Book ID up to the time of making the first bet. The betting application is fully compatible with my phone no lags!",
    rating: 5
  },
  {
    name: "Simran Kaur",
    location: "Punjab",
    handle: "@kaur.s1mran",
    comment: "I follow hard-court form. The site is good for set and totals bets. The Face ID is quick on my phone. I had one issue with my login but the chat support rep sorted in max five minutes and the payouts have been straightforward.",
    rating: 5
  },
  {
    name: "Arjun Nair",
    location: "Bangalore",
    handle: "@nairarjuna2000",
    comment: "I have used several betting applications in the past, but none of them is compared to the Aaadesh betting application. It is so sleek, it has good odds and gives real time updates. I have my ID that allows me to access numerous games.",
    rating: 5
  }
];

export default function UserReviews() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic">Voices of Our <span className="royal-gold-text">Legends</span></h3>
            <div className="flex items-center justify-center gap-2 mb-8">
               <div className="flex gap-1">
                 {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-primary fill-primary" />)}
               </div>
               <span className="text-white font-black text-xl ml-2">4.8/5</span>
               <span className="text-gray-500 text-sm ml-2">Trusted by 1M+ Players</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 relative group hover:border-primary/30 transition-all border-white/5"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black italic">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{rev.name}</h4>
                  <div className="text-gray-500 text-xs">{rev.location} • <span className="text-primary/60">{rev.handle}</span></div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
                "{rev.comment}"
              </p>

              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= rev.rating ? "text-primary fill-primary" : "text-gray-600"}`} />)}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-green-500 uppercase tracking-widest">
                  <ShieldCheck className="w-3 h-3" />
                  Verified Review
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
