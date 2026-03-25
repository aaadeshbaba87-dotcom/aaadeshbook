import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 text-gray-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-8 italic uppercase text-primary">Privacy <span className="text-white">Policy</span></h1>
          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">1. Data Collection</h2>
              <p>We collect minimal data necessary to provide our services, including your WhatsApp contact information and name. This data is used solely for account management and support.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">2. Security</h2>
              <p>Your privacy is our priority. We employ advanced security measures to protect your personal information from unauthorized access. We do not sell or share your data with third parties.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">3. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. Cookies help us understand how you interact with our site and allow us to make improvements.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">4. Third-Party Links</h2>
              <p>Our platform may contain links to third-party betting exchanges. Once you navigate to these platforms, their respective privacy policies apply.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
