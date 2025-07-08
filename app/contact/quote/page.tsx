export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Request a Quote</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Get a customized quote for your project. Our team will analyze your requirements and provide a detailed proposal tailored to your business needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">What We&apos;ll Include</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Detailed project scope</li>
                  <li>• Timeline and milestones</li>
                  <li>• Resource requirements</li>
                  <li>• Cost breakdown</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Response Time</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Initial response: 24 hours</li>
                  <li>• Detailed quote: 3-5 business days</li>
                  <li>• Follow-up consultation: Available</li>
                  <li>• Proposal presentation: Scheduled</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Quote Request Form</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Required *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="zoho">Zoho Implementation</option>
                    <option value="netsuite">NetSuite Implementation</option>
                    <option value="integration">Integration Services</option>
                    <option value="training">Training Services</option>
                    <option value="low-code">Low-Code Development</option>
                    <option value="managed">Managed Services</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (1-2 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-500k">$100,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                    <option value="to-be-determined">To be determined</option>
                  </select>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to receive communications from AGSuite regarding my quote request and related services.
                  </label>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">What Happens Next?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Submit Request</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Fill out the form with your project details</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Initial Review</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Our team reviews your requirements</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Detailed Quote</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Receive comprehensive proposal</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                  <h4 className="font-semibold text-blue-800 mb-2">Consultation</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Schedule follow-up discussion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 