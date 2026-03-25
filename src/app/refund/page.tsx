import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 pb-24 text-gray-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-8 italic uppercase text-primary">Refund <span className="text-white">Policy</span></h1>
          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">1. General Policy</h2>
              <p>Due to the nature of online betting, deposits are generally non-refundable once they have been credited to your betting ID. All withdrawals must be made from your winnings according to the platform rules.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">2. Error in Deposit</h2>
              <p>If you have made a deposit and it has not been credited to your account within 30 minutes, please contact support immediately with your transaction receipt. We will rectify the issue or refund the amount if the credit is not possible.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4 italic uppercase">3. Account Closure</h2>
              <p>If you wish to close your account, you can withdraw your remaining balance (minimum withdrawal limits apply) before closure. Once an account is closed, no further claims can be made.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
