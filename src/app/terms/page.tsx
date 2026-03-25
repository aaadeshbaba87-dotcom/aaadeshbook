import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 text-gray-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-8 italic uppercase text-primary">Terms & <span className="text-white">Conditions</span></h1>
          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">1. Introduction</h2>
              <p>Welcome to **Aaadesh Book**. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. Use of the website constitutes acceptance of these terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">2. Eligibility</h2>
              <p>You must be at least 18 years of age to use our platform. Our services are intended solely for residents of regions where online betting is legal. It is your responsibility to ensure compliance with local laws.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">3. Account Responsibility</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials. Any activity performed under your ID will be considered your responsibility. Notify us immediately of any unauthorized use.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">4. Fair Play</h2>
              <p>Aaadesh Book reserves the right to terminate accounts involved in fraudulent activities, arbitrage, or any form of cheating. We promote a fair and transparent betting environment for all.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">5. Payments & Withdrawals</h2>
              <p>Withdrawals are subject to verification. We aim to process all requests within 5-10 minutes, but certain banking delays may apply. Ensure your payment details are correct to avoid delays.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
