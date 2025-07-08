export default function NetSuitePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">NetSuite Solutions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Transform your business operations with our comprehensive NetSuite implementation and optimization services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Implementation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Custom NetSuite setup and configuration</li>
                  <li>• Data migration and integration</li>
                  <li>• Workflow automation</li>
                  <li>• User training and onboarding</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Optimization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Performance tuning and optimization</li>
                  <li>• Advanced reporting and analytics</li>
                  <li>• Custom development and scripting</li>
                  <li>• Ongoing support and maintenance</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Why Choose Our NetSuite Services?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Expert Team</h4>
                  <p className="text-gray-700">Certified NetSuite consultants with years of experience</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Custom Solutions</h4>
                  <p className="text-gray-700">Tailored implementations for your specific business needs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Ongoing Support</h4>
                  <p className="text-gray-700">Continuous support and optimization services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
