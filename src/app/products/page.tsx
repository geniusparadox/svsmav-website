import Link from 'next/link';

export const metadata = {
  title: 'Products | SVS Maverick',
  description: 'Explore our comprehensive range of copper alloys, WIRBALIT products, spot welding components, flexible busbars, and tip dressing equipment.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-[#B8BFC4]">
              Electrical resistance welding consumables, copper alloys, and diffusion-welded flexible busbars
              for automotive, EV, electrical, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Copper Materials & WIRBALIT */}
            <div className="bg-[#F4F3EE] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                  <div className="inline-block px-3 py-1 bg-[#EF290E] text-white text-sm font-medium rounded-full mb-4">
                    Premium Range
                  </div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                    Copper Materials & WIRBALIT®
                  </h2>
                  <p className="text-[#6F7B83] mb-6">
                    Our flagship WIRBALIT® product line offers premium copper alloys engineered for
                    resistance welding and high-performance electrical applications.
                  </p>
                  <ul className="space-y-3 mb-8 text-[#6F7B83]">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      WIRBALIT® B, D, HF/N/G, L, CA11 variants
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      CuCrZr (Copper-Chromium-Zirconium)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      CuZr (Copper-Zirconium)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom copper alloy formulations
                    </li>
                  </ul>
                  <Link
                    href="/products/copper-alloys"
                    className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                  >
                    View All Copper Products
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#E5E4DF] to-[#D5D4CF] flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-[#1D2931] opacity-30 mb-2">WIRBALIT®</div>
                    <p className="text-[#6F7B83]">Premium Copper Alloys</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Spot Welding Components */}
            <div className="bg-[#1D2931] text-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-[#2A3B46] to-[#1D2931] flex items-center justify-center p-10 order-2 lg:order-1">
                  <svg className="w-48 h-48 text-[#EF290E] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-10 lg:p-16 order-1 lg:order-2">
                  <h2 className="text-3xl font-bold mb-4">
                    Spot Welding Components
                  </h2>
                  <p className="text-[#B8BFC4] mb-6">
                    Complete range of precision-engineered spot welding electrodes, caps, holders, and accessories
                    for automotive and industrial applications.
                  </p>
                  <ul className="space-y-3 mb-8 text-[#B8BFC4]">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Cap tips and electrodes (all standard sizes)
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Electrode holders, shanks, and arms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Connection cables and shunts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom designs and precision-machined parts
                    </li>
                  </ul>
                  <Link
                    href="/products/welding-products"
                    className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                  >
                    View All Welding Products
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Flexible Busbars */}
            <div className="bg-[#F4F3EE] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                  <div className="inline-block px-3 py-1 bg-[#1D2931] text-white text-sm font-medium rounded-full mb-4">
                    EV & Power Distribution
                  </div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                    Flexible Busbars
                  </h2>
                  <p className="text-[#6F7B83] mb-6">
                    Diffusion-welded and laminated busbars engineered for switchgear, EV battery packs,
                    and power distribution systems with superior conductivity and flexibility.
                  </p>
                  <ul className="space-y-3 mb-8 text-[#6F7B83]">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Diffusion-welded technology
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      EV battery pack connections
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Switchgear applications
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Power distribution systems
                    </li>
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                  >
                    Request Quote
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#E5E4DF] to-[#D5D4CF] flex items-center justify-center p-10">
                  <svg className="w-48 h-48 text-[#1D2931] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Gas Shielded/SAW Welding */}
            <div className="bg-white border-2 border-[#F4F3EE] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-[#F4F3EE] flex items-center justify-center p-10 order-2 lg:order-1">
                  <svg className="w-48 h-48 text-[#1D2931] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-10 lg:p-16 order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                    Gas Shielded & SAW Welding
                  </h2>
                  <p className="text-[#6F7B83] mb-6">
                    Complete range of consumables and components for MIG/MAG and submerged arc welding processes.
                  </p>
                  <ul className="space-y-3 mb-8 text-[#6F7B83]">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Contact tips
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Gas nozzles and distributors
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      SAW jaws and nozzles
                    </li>
                  </ul>
                  <Link
                    href="/products/welding-products"
                    className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tip Dressing & Milling */}
            <div className="bg-[#F4F3EE] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-16">
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                    Tip Dressing Units
                  </h2>
                  <p className="text-[#6F7B83] mb-6">
                    Precision electrode tip dressers for maintaining optimal welding quality
                    in high-volume production environments.
                  </p>
                  <ul className="space-y-3 mb-8 text-[#6F7B83]">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Stationary tip dressers
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Mobile handgun dressers
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Swing arm units
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Manual dressers
                    </li>
                  </ul>
                  <Link
                    href="/products/milling-equipment"
                    className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                  >
                    View All Tip Dressing Equipment
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-[#E5E4DF] to-[#D5D4CF] flex items-center justify-center p-10">
                  <svg className="w-48 h-48 text-[#1D2931] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Refractory Alloys & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Refractory Alloys */}
              <div className="bg-white border-2 border-[#F4F3EE] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Refractory Alloys</h3>
                <p className="text-[#6F7B83] mb-6">
                  High-melting metals for extreme temperature applications.
                </p>
                <ul className="space-y-2 mb-6 text-[#6F7B83]">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tungsten
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Molybdenum
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tantalum
                  </li>
                </ul>
                <Link href="/products/copper-alloys" className="text-[#EF290E] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>

              {/* Tools & Accessories */}
              <div className="bg-white border-2 border-[#F4F3EE] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Tools & Accessories</h3>
                <p className="text-[#6F7B83] mb-6">
                  Essential tools and consumables for welding operations.
                </p>
                <ul className="space-y-2 mb-6 text-[#6F7B83]">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Electrode wrenches
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Location pins & insulation bushes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    MIG-MAG fluid, contact paste, anti-spatter
                  </li>
                </ul>
                <Link href="/contact" className="text-[#EF290E] font-medium hover:underline">
                  Request Catalog →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#F4F3EE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1D2931] mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Automotive', 'EV & Battery', 'Electrical Industry', 'Mechanical Engineering', 'Shipbuilding', 'Home Appliance'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-xl text-center card-hover">
                <p className="font-medium text-[#1D2931]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-[#B8BFC4] mb-8">
            Our expert team is ready to help you find the perfect solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
            >
              Contact Our Experts
            </Link>
            <a
              href="mailto:sales@svsmav.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1D2931] transition-colors"
            >
              Email: sales@svsmav.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
