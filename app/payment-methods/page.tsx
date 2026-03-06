import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Methods | Fast Job Career",
  description: "Complete list of payment methods accepted by Fast Job Career for job applications and services.",
  keywords: "payment methods, visa payment, job application payment, secure payment",
};

export default function PaymentMethodsPage() {
  const paymentMethods = [
    {
      name: "Visa",
      icon: "💳",
      description: "Secure online payments using your Visa debit or credit card",
      features: ["Instant processing", "Global acceptance", "Secure encryption"],
      fees: "2.5% processing fee",
      howToUse: "Enter your Visa card details during checkout"
    },
    {
      name: "Mastercard",
      icon: "💳",
      description: "Pay using Mastercard debit or credit cards worldwide",
      features: ["Fast processing", "Wide acceptance", "Fraud protection"],
      fees: "2.5% processing fee",
      howToUse: "Select Mastercard at payment and enter card details"
    },
    {
      name: "PayPal",
      icon: "💳",
      description: "Pay securely using your PayPal account or linked cards",
      features: ["Buyer protection", "Easy refunds", "Multi-currency"],
      fees: "3.0% processing fee",
      howToUse: "Login to PayPal and confirm payment"
    },
    {
      name: "Bank Transfer",
      icon: "🏦",
      description: "Direct bank transfer to our company account",
      features: ["Secure", "Large amount support", "Trackable"],
      fees: "Bank charges may apply",
      howToUse: "Transfer to our bank account with reference number"
    },
    {
      name: "EasyPaisa",
      icon: "💰",
      description: "Local Pakistani mobile wallet payment",
      features: ["Instant", "No bank account needed", "Widely available"],
      fees: "1.5% processing fee",
      howToUse: "Send payment to our EasyPaisa account"
    },
    {
      name: "JazzCash",
      icon: "💰",
      description: "Jazz mobile wallet payment solution",
      features: ["Quick", "Mobile app", "Agent network"],
      fees: "2.0% processing fee",
      howToUse: "Pay through JazzCash app or agent"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our secure payment methods for job applications, visa services, and other career services.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{method.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{method.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{method.description}</p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fees */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fees:</h4>
                <p className="text-sm text-gray-600">{method.fees}</p>
              </div>

              {/* How to Use */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">How to Use:</h4>
                <p className="text-sm text-gray-600">{method.howToUse}</p>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Use {method.name}
              </button>
            </div>
          ))}
        </div>

        {/* Security Information */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            🔒 Secure Payment Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">SSL Encryption</h3>
              <p className="text-blue-800 text-sm">
                All transactions are protected with 256-bit SSL encryption
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Data Protection</h3>
              <p className="text-blue-800 text-sm">
                Your payment information is never stored on our servers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Refund Policy</h3>
              <p className="text-blue-800 text-sm">
                30-day money-back guarantee on all services
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Which payment method is best for large amounts?
              </h3>
              <p className="text-gray-600">
                Bank Transfer is recommended for large amounts as it typically has lower fees and can handle higher transaction limits.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Are international payments supported?
              </h3>
              <p className="text-gray-600">
                Yes, we accept international payments through Visa, Mastercard, and PayPal. Bank transfers are also available for international transactions.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                How long does payment processing take?
              </h3>
              <p className="text-gray-600">
                Digital payments (cards, PayPal) are instant. Bank transfers typically take 1-3 business days to reflect in your account.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is my payment information secure?
              </h3>
              <p className="text-gray-600">
                Absolutely! We use industry-standard SSL encryption and never store your payment details. All transactions are PCI-DSS compliant.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12">
          <div className="bg-gray-900 text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Need Help with Payment?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is available 24/7 to assist you with any payment-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📞 Call Support
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                💬 Live Chat
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                📧 Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
