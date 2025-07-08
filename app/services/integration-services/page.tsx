export default function IntegrationServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Integration Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Connect your systems seamlessly with our expert integration services that ensure data flows smoothly across your entire business ecosystem.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">API Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• RESTful API development</li>
                  <li>• Third-party system connections</li>
                  <li>• Data synchronization</li>
                  <li>• Real-time data exchange</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Cloud Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multi-cloud connectivity</li>
                  <li>• SaaS platform integration</li>
                  <li>• Hybrid cloud solutions</li>
                  <li>• Data migration services</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Integration Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">CRM Integration</h4>
                  <p className="text-gray-700">Connect your CRM with marketing, sales, and support systems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">ERP Integration</h4>
                  <p className="text-gray-700">Integrate ERP systems with e-commerce and accounting platforms</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">E-commerce Integration</h4>
                  <p className="text-gray-700">Connect online stores with inventory and payment systems</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Eliminate data silos</li>
                  <li>• Improve operational efficiency</li>
                  <li>• Reduce manual data entry</li>
                  <li>• Enhanced data accuracy</li>
                  <li>• Real-time insights</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive system analysis</li>
                  <li>• Custom integration architecture</li>
                  <li>• Secure data transmission</li>
                  <li>• Ongoing monitoring and support</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Technologies We Work With</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800">Zapier</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800">MuleSoft</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800">Boomi</h4>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800">Custom APIs</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 