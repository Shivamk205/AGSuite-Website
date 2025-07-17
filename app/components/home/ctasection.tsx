const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-10 px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-red-50 to-blue-50">
          
          {/* Top Right Blur Decoration */}
          <div className="absolute right-0 top-0 h-full w-full flex justify-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-pink-300 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-blue-300 rounded-md rotate-45" />
            </div>
          </div>

          {/* Bottom Left Blur Decoration */}
          <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-orange-200 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-pink-300 rounded-md rotate-45" />
            </div>
          </div>

          {/* Main CTA Content */}
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-950 leading-tight">
              Quick-Start Your Business Operations with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-indigo-400 to-teal-600">
                Oracle NetSuite
              </span>.
            </h1>

            <p className="text-gray-700">
              Optimize and scale your business with Oracle NetSuite — get your free consultation today!
            </p>

            <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
              <a href="#">
                <button className="h-12 px-5 rounded-xl bg-red-500 text-white font-bold text-lg flex items-center">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
