import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowToJoin from "@/components/HowToJoin";
import SportsMarkets from "@/components/SportsMarkets";
import CasinoGames from "@/components/CasinoGames";
import PremiumPlatforms from "@/components/PremiumPlatforms";
import PaymentMethods from "@/components/PaymentMethods";
import UserReviews from "@/components/UserReviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { MessageCircle, Download, ShieldCheck, Info } from "lucide-react";

const demoAccounts = [
  { platform: "World777", url: "world777.com", id: "demo1234", pass: "pass777" },
  { platform: "AllPanel777", url: "allpanel777.com", id: "user999", pass: "panel777" },
  { platform: "SilverBet777", url: "silverbet777.com", id: "test4321", pass: "bet777" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      
      {/* Quick Access Grid / Trust Metrics integrated into sections below */}
      
      <AboutSection />
      
      {/* Demo Accounts Table Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Risk Free Trial</h2>
            <h3 className="text-4xl font-black text-white mb-6">Demo <span className="text-primary italic">Accounts</span></h3>
            <p className="text-gray-500">Try our platforms with these demo credentials before you commit.</p>
          </div>
          
          <div className="glass-card overflow-hidden border-primary/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/10 border-b border-primary/20">
                    <th className="px-6 py-4 text-primary font-black uppercase text-xs tracking-widest">Platform</th>
                    <th className="px-6 py-4 text-primary font-black uppercase text-xs tracking-widest shrink-0">Website URL</th>
                    <th className="px-6 py-4 text-primary font-black uppercase text-xs tracking-widest">User ID</th>
                    <th className="px-6 py-4 text-primary font-black uppercase text-xs tracking-widest">Password</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {demoAccounts.map((acc, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-white font-bold">{acc.platform}</td>
                      <td className="px-6 py-4 text-primary/80 text-sm italic">{acc.url}</td>
                      <td className="px-6 py-4 text-gray-300 font-mono text-sm">{acc.id}</td>
                      <td className="px-6 py-4 text-gray-300 font-mono text-sm">{acc.pass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-primary/5 text-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                <Info className="w-3 h-3 text-primary" />
                Note: These IDs are for demonstration purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <WhyChooseUs />
      <HowToJoin />
      
      {/* App Download Section */}
      <section id="app" className="py-24 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-20 overflow-hidden relative border-primary/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Mobile Experience</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
                  Download <span className="text-primary italic">Aaadesh Book</span> <br />
                  Official App
                </h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Take the thrill wherever you go. Our mobile application offers the fastest betting experience with biometric login, live notifications, and one-tap withdrawals.
                </p>
                
                <div className="space-y-4 mb-10">
                  {["Lightning Fast Interface", "Secure Biometric Login", "Real-time Match Alerts", "Instant Cashouts"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-white font-bold">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a href="https://wa.link/457hal" className="inline-flex items-center gap-4 bg-primary text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                  <Download className="w-6 h-6" />
                  DOWNLOAD APK NOW
                </a>
              </div>
              
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-64 h-[500px] overflow-hidden rounded-[3rem] border-8 border-gray-800 shadow-2xl bg-black">
                   <img src="/images/app-mockup.png" alt="Aaadesh App" className="w-full h-full object-cover" />
                </div>
                {/* Visual accents */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SportsMarkets />
      <CasinoGames />
      <PremiumPlatforms />
      <PaymentMethods />
      <UserReviews />
      <FAQ />

      {/* Responsible Gaming Section at the end before Footer */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <ShieldCheck className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Responsible Gaming</h3>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed italic">
            "Aaadesh Book supports responsible gaming. Setting limits and playing with a strategy is the key to a long-lasting and enjoyable experience."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-2">Age Limit</div>
              <div className="text-primary text-2xl font-black italic">18+ ONLY</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-2">Self Exclusion</div>
              <div className="text-primary text-sm font-bold uppercase">Tools Available</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-white font-bold mb-2">Support</div>
              <div className="text-primary text-sm font-bold uppercase">GamCare Partner</div>
            </div>
          </div>
        </div>
      </section>

      <StickyWhatsApp />

      <Footer />
    </main>
  );
}
