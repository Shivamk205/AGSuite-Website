export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-blue-950">Blogs & Insights</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Stay ahead of industry trends with our expert insights, best practices, and thought leadership content on digital transformation, technology, and business optimization.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Latest Articles</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Digital Transformation Trends 2024</h4>
                    <p className="text-sm text-gray-600">Explore the latest trends shaping digital transformation strategies...</p>
                    <span className="text-xs text-gray-500">January 15, 2024</span>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-blue-800">Zoho CRM Best Practices</h4>
                    <p className="text-sm text-gray-600">Learn how to maximize the value of your Zoho CRM implementation...</p>
                    <span className="text-xs text-gray-500">January 10, 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CRM</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">ERP</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Integration</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Automation</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Digital Transformation</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Cloud Solutions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Featured Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">NetSuite Implementation Guide</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">A comprehensive guide to successful NetSuite implementation, from planning to go-live and beyond.</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Low-Code Development Benefits</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Discover how low-code platforms are revolutionizing application development and business process automation.</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Industry Insights</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Technology trends and predictions</li>
                  <li>• Industry-specific solutions</li>
                  <li>• Best practices and tips</li>
                  <li>• Expert interviews and Q&A</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">How-To Guides</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Step-by-step tutorials</li>
                  <li>• Configuration guides</li>
                  <li>• Troubleshooting tips</li>
                  <li>• Optimization strategies</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Thought Leadership</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Strategic insights</li>
                  <li>• Innovation perspectives</li>
                  <li>• Future of technology</li>
                  <li>• Business transformation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Subscribe to Our Newsletter</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Get the latest insights delivered to your inbox. Stay updated with industry trends, best practices, and expert advice.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 