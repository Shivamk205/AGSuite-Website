import Image from "next/image"
import Link from "next/link"
 
const Content = () => {
return (
    <section >
        <div className="w-full h-full flex flex-col md:flex-row gap-16 py-10 px-7 bg-white">
            <div className="flex md:flex-1 ml-10 h-auto">
                <video 
                    src="/contentvid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full md:h-full object-cover "
                    controls
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="md:w-1/2 space-y-12 text-gray-700 px-8 md:px-12">
                <h1 className="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl">
                    We help drive your business forward faster
                </h1>
                <p>
                AGSuite – Your Cloud Solution Partner.
                We&apos;re trusted NetSuite Solution Providers and Advanced Zoho Partners delivering end-to-end cloud solutions to streamline your business.                </p>
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
    </section>
)
}
export default Content