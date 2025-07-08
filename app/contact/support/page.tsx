export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Support Center</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Get the help you need with our comprehensive support services. Our expert team is here to ensure your systems run smoothly and efficiently.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Support Channels</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 24/7 phone support</li>
                  <li>• Email support tickets</li>
                  <li>• Live chat assistance</li>
                  <li>• Remote desktop support</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Support Services</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Technical troubleshooting</li>
                  <li>• System optimization</li>
                  <li>• User training assistance</li>
                  <li>• Emergency support</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Support Tiers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Basic Support</h4>
                  <p className="text-gray-700 dark:text-gray-300">Email support with 24-hour response time for general inquiries and basic troubleshooting</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Premium Support</h4>
                  <p className="text-gray-700 dark:text-gray-300">Phone and email support with 4-hour response time and priority ticket handling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Enterprise Support</h4>
                  <p className="text-gray-700 dark:text-gray-300">24/7 dedicated support with 1-hour response time and assigned support engineer</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Self-Service Resources</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Knowledge base articles</li>
                  <li>• Video tutorials</li>
                  <li>• FAQ section</li>
                  <li>• User guides and documentation</li>
                  <li>• Community forums</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Proactive Support</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• System health monitoring</li>
                  <li>• Performance optimization</li>
                  <li>• Security updates</li>
                  <li>• Regular maintenance</li>
                  <li>• Predictive issue resolution</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Contact Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Emergency Support</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">For critical issues affecting your business operations</p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Emergency Hotline
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">General Support</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">For general questions and non-urgent issues</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 