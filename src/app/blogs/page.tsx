import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "IPL 2026: Expert Betting Tips & Predictions",
    excerpt: "Get ahead of the game with our comprehensive guide to the upcoming IPL season. Learn which teams are looking strong and where to place your bets.",
    date: "March 20, 2026",
    author: "Admin",
    category: "IPL Tips"
  },
  {
    title: "How to Choose the Right Betting Exchange?",
    excerpt: "Choosing between Lotus365, Diamond, and Laser247 can be tough. We break down the pros and cons of each platform to help you decide.",
    date: "March 18, 2026",
    author: "Expert",
    category: "Guides"
  },
  {
    title: "5 Common Mistakes to Avoid in Online Betting",
    excerpt: "Even professionals make mistakes. Learn how to manage your bankroll and avoid common pitfalls to stay profitable in the long run.",
    date: "March 15, 2026",
    author: "Admin",
    category: "Strategy"
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">
              Latest <span className="text-primary italic">Updates</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest sports news, betting tips, and exclusive insights from the world of online gaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="glass-card group cursor-pointer overflow-hidden border-white/5 hover:border-primary/20 transition-all">
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase italic">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href="#" className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest italic group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
