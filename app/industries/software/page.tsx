export default function SoftwareIndustryPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Software & Technology</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Empowering software and technology companies with scalable solutions that drive innovation, streamline operations, and accelerate growth in the digital age.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">SaaS Solutions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Subscription management</li>
                  <li>• Customer lifecycle automation</li>
                  <li>• Usage analytics and billing</li>
                  <li>• API integration services</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Development Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Agile project management</li>
                  <li>• DevOps automation</li>
                  <li>• Quality assurance processes</li>
                  <li>• Release management</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Industry Challenges We Solve</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Scalability</h4>
                  <p className="text-gray-700">Build systems that grow with your business and handle increasing user demands</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Integration Complexity</h4>
                  <p className="text-gray-700">Seamlessly connect multiple tools and platforms for unified operations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Customer Experience</h4>
                  <p className="text-gray-700">Deliver exceptional user experiences through optimized workflows</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Solutions for Tech Companies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Product development lifecycle management</li>
                  <li>• Customer success and support automation</li>
                  <li>• Sales and marketing alignment</li>
                  <li>• Financial management and reporting</li>
                  <li>• Team collaboration and communication</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Technology Stack</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cloud-native applications</li>
                  <li>• Microservices architecture</li>
                  <li>• API-first development</li>
                  <li>• DevOps and CI/CD pipelines</li>
                  <li>• Data analytics and AI integration</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">SaaS Startup Growth</h4>
                  <p className="text-gray-700">Helped a SaaS startup scale from 100 to 10,000 users by implementing automated customer onboarding and support systems.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Development Team Efficiency</h4>
                  <p className="text-gray-700">Streamlined development workflows for a tech company, reducing time-to-market by 40% and improving team productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 