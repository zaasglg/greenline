import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-sky-300 via-sky-400 to-blue-600">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">GreenLine Privacy Policy</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Collection and Use of Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect various types of information to provide quality service to our customers and to improve our services. This may include personal data such as name, email address, phone number, as well as information about preferences and interests.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use the information provided to us to process orders, communicate with customers, provide services, improve our website, and personalize the customer experience. We may also use this information for marketing research and to notify customers of special offers and promotions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Protection of Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We take security measures to protect your personal information from unauthorized access, use, or disclosure. We limit access to your information only to employees who need it to perform their duties.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclosure to Third Parties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or transfer your personal information to third parties without your consent, except as necessary to provide you with services or to comply with the law.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you consent to our privacy policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates and Changes</h3>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to update and change this privacy policy at our discretion. We recommend periodically checking this page for changes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or suggestions regarding our privacy policy, please contact us at privacy@greenline.com.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
