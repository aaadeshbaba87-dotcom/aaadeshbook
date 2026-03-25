import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">
              Contact <span className="text-primary italic">Support</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Need help? Our team is available 24/7 to assist you with new IDs, deposits, withdrawals, or any other queries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-8 border-green-500/20 bg-green-500/5">
                <MessageCircle className="w-10 h-10 text-green-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2 italic uppercase">WhatsApp Chat</h3>
                <p className="text-gray-400 text-sm mb-6">The fastest way to get support. Our team responds in seconds.</p>
                <a 
                  href="https://wa.me/911234567890" 
                  className="whatsapp-button flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
                >
                  CHAT NOW
                </a>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">Call Us</div>
                    <div className="text-white font-bold text-lg">+91 12345 67890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">Email Us</div>
                    <div className="text-white font-bold text-lg">support@aaadeshbook.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">Location</div>
                    <div className="text-white font-bold text-lg">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="glass-card p-10 h-full">
                <h2 className="text-2xl font-bold text-white mb-8 italic uppercase text-primary">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-400 text-sm font-bold uppercase">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400 text-sm font-bold uppercase">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="Enter your WhatsApp number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-bold uppercase">Subject</label>
                    <input 
                      type="text" 
                      placeholder="What can we help you with?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-400 text-sm font-bold uppercase">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Your detailed message..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="premium-gradient text-black font-black w-full py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all">
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
