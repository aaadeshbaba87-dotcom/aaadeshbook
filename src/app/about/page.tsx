import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Users, Trophy, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">
              About <span className="text-primary italic">Aaadesh Book</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              The ultimate destination for sports enthusiasts. We provide the most secure and reliable online betting IDs in India since 2010.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 italic uppercase">Our Mission</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At **Aaadesh Book**, our mission is to provide a transparent, secure, and exciting betting environment for our users. We believe in "Play Fair, Win Big." Our platform is designed to cater to both beginners and professional bettors, offering a wide range of sports including Cricket, Football, Tennis, and a variety of Casino games.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over a decade of experience, we have built a reputation for being the fastest in terms of payouts and the most reliable in terms of account security. Each ID we provide is vetted and official, ensuring you never face any issues with your funds.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-primary font-black text-3xl mb-1">10+</div>
                  <div className="text-gray-500 text-xs uppercase font-bold">Years Experience</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-primary font-black text-3xl mb-1">1M+</div>
                  <div className="text-gray-500 text-xs uppercase font-bold">Happy Users</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-3xl border border-primary/20 flex items-center justify-center p-12">
                <ShieldCheck className="w-64 h-64 text-primary animate-pulse" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">#1</div>
                <div>
                  <div className="text-white font-bold">Most Trusted</div>
                  <div className="text-gray-500 text-xs italic">Rated 4.9/5 by Users</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 text-center">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 italic uppercase">World Class Odds</h3>
              <p className="text-gray-400 text-sm">We provide the best betting odds in the industry, giving you a better chance to maximize your winnings on every bet.</p>
            </div>
            <div className="glass-card p-10 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 italic uppercase">VIP Experience</h3>
              <p className="text-gray-400 text-sm">Every user is a VIP at Aaadesh Book. Get personalized support and exclusive bonuses tailored to your betting style.</p>
            </div>
            <div className="glass-card p-10 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 italic uppercase">Community Focused</h3>
              <p className="text-gray-400 text-sm">Join a massive community of like-minded sports fans. Share tips, discuss matches, and celebrate wins together.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
