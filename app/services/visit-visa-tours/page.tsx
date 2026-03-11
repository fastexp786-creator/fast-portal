import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit Visa Tours | Fast Job Career',
  description: 'Professional visit visa and tour services for international travel',
};

export default function VisitVisaToursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Visit Visa Tours</h1>
        <p className="text-gray-600">Professional visit visa and tour services coming soon.</p>
      </div>
    </div>
  );
}
