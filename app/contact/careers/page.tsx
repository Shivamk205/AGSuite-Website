export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Careers at AGSuite</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join our dynamic team of technology experts and help shape the future of digital transformation. We&apos;re looking for passionate individuals who are excited about innovation and customer success.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Open Positions</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Senior Zoho Consultant</h4>
                    <p className="text-sm text-gray-600">Lead Zoho implementations and provide expert guidance to clients</p>
                    <span className="text-xs text-gray-500">Full-time • Remote</span>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-blue-800">NetSuite Developer</h4>
                    <p className="text-sm text-gray-600">Develop custom solutions and integrations for NetSuite clients</p>
                    <span className="text-xs text-gray-500">Full-time • Hybrid</span>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Business Analyst</h4>
                    <p className="text-sm text-gray-600">Analyze business requirements and design optimal solutions</p>
                    <span className="text-xs text-gray-500">Full-time • On-site</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Benefits & Perks</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Competitive salary and benefits</li>
                  <li>• Flexible work arrangements</li>
                  <li>• Professional development opportunities</li>
                  <li>• Health and wellness programs</li>
                  <li>• Team building activities</li>
                  <li>• Modern office environment</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Join AGSuite?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Innovation</h4>
                  <p className="text-gray-700 dark:text-gray-300">Work with cutting-edge technologies and innovative solutions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Growth</h4>
                  <p className="text-gray-700 dark:text-gray-300">Continuous learning and career advancement opportunities</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Impact</h4>
                  <p className="text-gray-700 dark:text-gray-300">Make a real difference in how businesses operate and grow</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Culture</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Collaborative and supportive environment</li>
                  <li>• Emphasis on work-life balance</li>
                  <li>• Diversity and inclusion focus</li>
                  <li>• Continuous learning culture</li>
                  <li>• Customer-centric approach</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Requirements</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Relevant technical experience</li>
                  <li>• Strong problem-solving skills</li>
                  <li>• Excellent communication abilities</li>
                  <li>• Team collaboration mindset</li>
                  <li>• Passion for technology</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Apply Now</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Ready to join our team? Send us your resume and cover letter, or reach out to learn more about our opportunities.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Application
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 