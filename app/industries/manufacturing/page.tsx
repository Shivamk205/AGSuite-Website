export default function ManufacturingIndustryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Manufacturing</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Optimize your manufacturing operations with integrated solutions that streamline production, improve quality control, and enhance supply chain visibility.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Production Management</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Production planning and scheduling</li>
                  <li>• Quality control automation</li>
                  <li>• Inventory optimization</li>
                  <li>• Equipment maintenance tracking</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Supply Chain Solutions</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Supplier relationship management</li>
                  <li>• Demand forecasting</li>
                  <li>• Logistics optimization</li>
                  <li>• Real-time tracking systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Manufacturing Challenges We Solve</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Operational Efficiency</h4>
                  <p className="text-gray-700 dark:text-gray-300">Streamline production processes and reduce waste through automation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Quality Control</h4>
                  <p className="text-gray-700 dark:text-gray-300">Implement robust quality management systems and real-time monitoring</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Supply Chain Visibility</h4>
                  <p className="text-gray-700 dark:text-gray-300">Gain complete visibility into your supply chain from raw materials to finished goods</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Manufacturing Solutions</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• ERP system implementation</li>
                  <li>• MES (Manufacturing Execution Systems)</li>
                  <li>• IoT and sensor integration</li>
                  <li>• Predictive maintenance</li>
                  <li>• Compliance and reporting</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Industry 4.0 Features</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Smart factory automation</li>
                  <li>• Digital twin technology</li>
                  <li>• Advanced analytics and AI</li>
                  <li>• Cloud-based manufacturing</li>
                  <li>• Cybersecurity for manufacturing</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Automotive Manufacturer</h4>
                  <p className="text-gray-700 dark:text-gray-300">Implemented comprehensive ERP solution reducing production downtime by 30% and improving quality metrics by 25%.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Electronics Manufacturing</h4>
                  <p className="text-gray-700 dark:text-gray-300">Streamlined supply chain operations resulting in 40% faster time-to-market and 20% cost reduction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 