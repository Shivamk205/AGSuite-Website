export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Managed Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Focus on your core business while we handle the day-to-day management, monitoring, and optimization of your technology infrastructure and applications.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">System Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 system monitoring</li>
                  <li>• Performance optimization</li>
                  <li>• Security management</li>
                  <li>• Backup and disaster recovery</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Application Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• User support and training</li>
                  <li>• Bug fixes and updates</li>
                  <li>• Feature enhancements</li>
                  <li>• Integration maintenance</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Managed Services Include</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Proactive Monitoring</h4>
                  <p className="text-gray-700">Continuous monitoring to prevent issues before they impact your business</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Regular Maintenance</h4>
                  <p className="text-gray-700">Scheduled updates, patches, and system optimizations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Expert Support</h4>
                  <p className="text-gray-700">Dedicated support team with deep technical expertise</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Service Levels</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Basic: 8x5 support with email/phone</li>
                  <li>• Standard: 12x5 support with priority response</li>
                  <li>• Premium: 24x7 support with dedicated team</li>
                  <li>• Enterprise: Custom SLA with on-site support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced operational costs</li>
                  <li>• Improved system reliability</li>
                  <li>• Access to expert knowledge</li>
                  <li>• Predictable monthly costs</li>
                  <li>• Focus on core business activities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Managed Services Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Zoho Managed Services</h4>
                  <p className="text-gray-700">Complete management of your Zoho applications including CRM, Creator, and One Suite with regular updates, user support, and optimization.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">NetSuite Managed Services</h4>
                  <p className="text-gray-700">Comprehensive NetSuite management including ERP optimization, custom development, user training, and ongoing support.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Integration Management</h4>
                  <p className="text-gray-700">Ongoing management of your system integrations, ensuring data flows smoothly and connections remain secure and optimized.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Custom Application Support</h4>
                  <p className="text-gray-700">Maintenance and support for custom applications built with low-code platforms or traditional development methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 