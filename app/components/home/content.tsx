import Image from "next/image"
import Link from "next/link"

const Content = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top-right Corner Decoration */}
      <div className="absolute top-0 right-0 z-0">
        <Image
          src="/contentdesign3.png"
          alt="Corner Decoration"
          width={550}
          height={150}
          className="opacity-40"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-16 py-10 px-7">
        <div className="flex md:flex-1 ml-10 h-auto">
          <Image
            src="/contentimg2.jpg"
            alt="Content Visual"
            width={800}
            height={450}
            className="w-full md:h-full object-cover"
            priority
          />
        </div>
        <div className="md:w-1/2 space-y-12 text-gray-700 px-8 md:px-12">
          <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl">
            We help drive your business forward faster
          </h1>
          <p>
            AGSuite – Your Cloud Solution Partner. We&apos;re trusted NetSuite Solution Providers
            and Advanced Zoho Partners delivering end-to-end cloud solutions to streamline your business.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  src="/netsuiteimg.png"
                  alt="NetSuite Partner"
                  width={190}
                  height={90}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg">
                <Image
                  src="/zohoadv.png"
                  alt="Zoho Partner"
                  width={220}
                  height={90}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <Link href="#" className="px-5 h-11 flex items-center bg-red-600 rounded-lg text-white">
              Get In touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      
    </section>
  )
}

export default Content
