// Step 1: Create the form component in `app/contact/page.tsx` (App Router)
'use client';

import { useState } from 'react';
import type React from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    Name: '',
    CompanyName: '',
    Email: '',
    Role: '',
    CountryCode: '+91',
    Phone: '',
    AnnualRevenue: '',
    HeardAboutUs: '',
    HowCanWeHelp: '',
    website: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple honeypot check
    if (formData.website) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.message || 'Form submitted');
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-2/3 bg-gradient-to-br from-gray-100 to-gray-100 border p-6 shadow-lg rounded-xl max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Get a Free Consultation Now!</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Inputs */}
        {(["Name", "CompanyName", "Email", "Role"] as (keyof typeof formData)[]).map((field) => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`${field.replace(/([A-Z])/g, ' $1')} *`}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white col-span-1"
          />
        ))}

        {/* Phone + Revenue */}
        <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
          <div className="flex w-full">
            <select name="CountryCode" value={formData.CountryCode} onChange={handleChange} className="rounded-l-lg border border-gray-300 w-20">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              {/* Add more */}
            </select>
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              placeholder="Mobile *"
              className="flex-1 border border-gray-300 rounded-r-lg px-2"
              required
            />
          </div>

          <select name="AnnualRevenue" value={formData.AnnualRevenue} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-2 w-full">
            <option value="">Annual Revenue *</option>
            <option>$5M - $10M</option>
            <option>$10M - $50M</option>
            <option>$50M - $100M</option>
            {/* Add more */}
          </select>
        </div>

        <select name="HeardAboutUs" value={formData.HeardAboutUs} onChange={handleChange} className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-2">
          <option value="">How did you hear about us?</option>
          <option>Google</option>
          <option>LinkedIn</option>
          <option>Referral</option>
        </select>

        <input name="website" value={formData.website} onChange={handleChange} className="hidden" autoComplete="off" />

        <textarea
          name="HowCanWeHelp"
          value={formData.HowCanWeHelp}
          onChange={handleChange}
          placeholder="How Can We Help! *"
          className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-2"
          rows={4}
          required
        />

        <button
          type="submit"
          className="col-span-2 bg-red-500 text-white font-bold py-3 px-6 rounded-3xl hover:bg-white hover:text-black hover:border"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
        </button>
      </form>
    </div>
  );
}
