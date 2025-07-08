export default function ZohoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Zoho Solutions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Streamline your business processes with our expert Zoho implementation and customization services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Zoho CRM</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Customer relationship management</li>
                  <li>• Sales pipeline optimization</li>
                  <li>• Marketing automation</li>
                  <li>• Analytics and reporting</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Zoho One Suite</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Complete business suite integration</li>
                  <li>• Custom app development</li>
                  <li>• Workflow automation</li>
                  <li>• Data migration services</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Zoho Expertise</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Certified Partners</h4>
                  <p className="text-gray-700">Official Zoho partners with deep platform expertise</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Custom Development</h4>
                  <p className="text-gray-700">Tailored solutions using Zoho Creator and APIs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Training & Support</h4>
                  <p className="text-gray-700">Comprehensive training and ongoing support services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
