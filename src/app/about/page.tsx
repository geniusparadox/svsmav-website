import Link from 'next/link';

export const metadata = {
  title: 'About Us | SVS Maverick',
  description: 'Learn about SVS Maverick - Part of SVS Schweisstechnik GmbH with over 100 years of expertise in welding technology.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SVS Maverick</h1>
            <p className="text-xl text-[#B8BFC4]">
              Part of SVS Schweisstechnik GmbH, Germany - a global welding technology leader with over 100 years of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Who We Are</h2>
              <p className="text-lg text-[#6F7B83] mb-6">
                <strong className="text-[#1D2931]">SVS Maverick Private Limited</strong> is part of SVS Schweisstechnik GmbH,
                a German welding technology leader with over 100 years of expertise. We specialize in electrical
                resistance welding consumables, copper alloys, and diffusion-welded flexible busbars.
              </p>
              <p className="text-lg text-[#6F7B83] mb-6">
                Based in Bangalore, India, we serve the automotive, EV, electrical, and industrial sectors
                across the region. Our strategic location near major industrial hubs enables us to provide
                quick delivery and excellent customer support.
              </p>
              <p className="text-lg text-[#6F7B83]">
                We bring German engineering excellence and quality standards to the Indian market, ensuring
                our customers receive the same world-class products and service that SVS Schweisstechnik
                is known for globally.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#F4F3EE] rounded-2xl p-10">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-[#EF290E] mb-2">100+</div>
                  <div className="text-xl text-[#6F7B83]">Years of Excellence</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1D2931]">Germany</div>
                    <div className="text-sm text-[#6F7B83]">Headquarters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1D2931]">India</div>
                    <div className="text-sm text-[#6F7B83]">Regional Office</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Part of a Global Leader</h2>
            <p className="text-lg text-[#6F7B83]">
              SVS Schweisstechnik GmbH, headquartered in Germany, has been at the forefront of
              welding technology innovation for over a century. As part of this legacy, SVS Maverick
              brings world-class solutions to the Indian subcontinent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1D2931] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1D2931] mb-2">Global Presence</h3>
              <p className="text-[#6F7B83]">Distribution partners across multiple continents serving diverse industries</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1D2931] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1D2931] mb-2">German Quality</h3>
              <p className="text-[#6F7B83]">Engineered and manufactured to the highest German quality standards</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1D2931] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1D2931] mb-2">Innovation Leader</h3>
              <p className="text-[#6F7B83]">Continuous R&D driving industry-leading welding solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2931] mb-4">Our Expertise</h2>
            <p className="text-lg text-[#6F7B83] max-w-2xl mx-auto">
              Specialized solutions across multiple product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Copper Alloys & WIRBALIT®</h3>
              <p className="text-[#6F7B83]">
                Premium copper alloys including CuCrZr, CuZr, and our flagship WIRBALIT® product line
                for resistance welding applications.
              </p>
            </div>

            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Spot Welding Components</h3>
              <p className="text-[#6F7B83]">
                Complete range of electrodes, caps, holders, shanks, and precision-machined parts
                for automotive and industrial welding.
              </p>
            </div>

            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Flexible Busbars</h3>
              <p className="text-[#6F7B83]">
                Diffusion-welded flexible busbars for switchgear, EV battery packs, and power
                distribution systems.
              </p>
            </div>

            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Gas Shielded Welding</h3>
              <p className="text-[#6F7B83]">
                Contact tips, gas nozzles, distributors, and components for MIG/MAG and submerged
                arc welding processes.
              </p>
            </div>

            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Tip Dressing Equipment</h3>
              <p className="text-[#6F7B83]">
                Stationary, mobile, swing arm, and manual tip dressers for maintaining optimal
                electrode geometry.
              </p>
            </div>

            <div className="border-2 border-[#F4F3EE] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Refractory Alloys</h3>
              <p className="text-[#6F7B83]">
                High-melting metals including tungsten, molybdenum, and tantalum for extreme
                temperature applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-[#B8BFC4] max-w-2xl mx-auto">
              Trusted partner across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Automotive', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
              { name: 'EV & Battery', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { name: 'Electrical', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { name: 'Mechanical', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
              { name: 'Shipbuilding', icon: 'M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18M7 3v16M17 3v16' },
              { name: 'Home Appliance', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
            ].map((industry) => (
              <div key={industry.name} className="bg-[#2A3B46] p-6 rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                </svg>
                <p className="font-medium text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Our Location</h2>
              <p className="text-lg text-[#6F7B83] mb-6">
                Strategically located in Peenya Industrial Area, Bangalore - one of India&apos;s largest
                industrial hubs. Our location enables us to serve customers across South India
                and beyond with quick turnaround times.
              </p>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-semibold text-[#1D2931] mb-3">SVS Maverick Private Limited</h3>
                <p className="text-[#6F7B83]">
                  No 40/A, Site No 193/3,<br />
                  Narayanapura Main Road,<br />
                  Peenya Industrial Area,<br />
                  Bangalore - 560058, Karnataka, INDIA
                </p>
                <div className="mt-4 pt-4 border-t border-[#F4F3EE]">
                  <p className="text-[#6F7B83]">
                    <strong>Phone:</strong> <a href="tel:+917204057172" className="text-[#EF290E]">+91 72040 57172</a>
                  </p>
                  <p className="text-[#6F7B83]">
                    <strong>Email:</strong> <a href="mailto:sales@svsmav.com" className="text-[#EF290E]">sales@svsmav.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-80 bg-gradient-to-br from-[#E5E4DF] to-[#D5D4CF] rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-[#6F7B83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#1D2931] font-semibold">Bangalore, India</p>
                <p className="text-[#6F7B83]">Peenya Industrial Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-[#6F7B83] mb-8">
            Get in touch with our team to discuss how SVS Maverick can support your projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1D2931] text-white font-semibold rounded-lg hover:bg-[#2A3B46] transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
