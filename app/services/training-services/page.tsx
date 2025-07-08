export default function TrainingServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Training Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Empower your team with comprehensive training programs designed to maximize the value of your technology investments and drive user adoption.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Custom Training Programs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Role-based training modules</li>
                  <li>• Hands-on workshops</li>
                  <li>• Interactive learning sessions</li>
                  <li>• Certification programs</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Training Delivery</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• In-person training sessions</li>
                  <li>• Virtual classroom training</li>
                  <li>• Self-paced online courses</li>
                  <li>• On-demand video tutorials</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Training Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Zoho Training</h4>
                  <p className="text-gray-700">Comprehensive training on Zoho CRM, Creator, and One Suite</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">NetSuite Training</h4>
                  <p className="text-gray-700">Expert training on NetSuite ERP and CRM functionality</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Process Training</h4>
                  <p className="text-gray-700">Workflow and business process optimization training</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Training Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased user adoption</li>
                  <li>• Reduced support tickets</li>
                  <li>• Improved productivity</li>
                  <li>• Better ROI on technology</li>
                  <li>• Enhanced user confidence</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Methodology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assessment of current skills</li>
                  <li>• Customized curriculum design</li>
                  <li>• Interactive learning approach</li>
                  <li>• Progress tracking and evaluation</li>
                  <li>• Ongoing support and refresher courses</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Training Formats</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">In-Person</h4>
                  <p className="text-sm text-gray-600">Face-to-face training sessions</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Virtual</h4>
                  <p className="text-sm text-gray-600">Live online training classes</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Self-Paced</h4>
                  <p className="text-sm text-gray-600">Online courses at your own pace</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Hybrid</h4>
                  <p className="text-sm text-gray-600">Combination of formats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 