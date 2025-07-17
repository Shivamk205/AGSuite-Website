// Step 1: Create the form component in `app/contact/page.tsx` (App Router)
'use client';

import { useEffect } from 'react';

export default function FreeConsultationZohoForm() {
  return (
    <div className="w-full lg:w-2/3 bg-gradient-to-br from-gray-100 to-gray-100 border p-6 shadow-lg rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Free Consultation</h2>
      <p className="text-center text-gray-600">The consultation form is currently unavailable. Please contact us directly for assistance.</p>
    </div>
  );
}
