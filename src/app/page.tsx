import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1D2931] text-white overflow-hidden">
        <div className="shape-1 top-20 right-20"></div>
        <div className="shape-2 bottom-10 left-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <p className="text-[#EF290E] font-medium mb-4">Part of SVS Schweisstechnik GmbH, Germany</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Partner for<br />Welding,<br />Flexible Busbars and<br /><span className="whitespace-nowrap">CNC Manufacturing</span><br />Solutions
              </h1>
              <p className="text-xl text-[#B8BFC4] mb-8 max-w-lg">
                Over 100 years of expertise in electrical resistance welding consumables, copper alloys, and diffusion-welded flexible busbars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
                >
                  Discover Products
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1D2931] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-[#2A3B46] to-[#1D2931] rounded-full opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold text-[#EF290E] opacity-30">100+</div>
                  <div className="text-xl text-[#B8BFC4]">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card-hover text-center p-8 rounded-2xl bg-[#F4F3EE]">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">100+</div>
              <div className="text-[#6F7B83]">Years of Expertise</div>
            </div>
            <div className="card-hover text-center p-8 rounded-2xl bg-[#F4F3EE]">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">Germany</div>
              <div className="text-[#6F7B83]">Headquarters</div>
            </div>
            <div className="card-hover text-center p-8 rounded-2xl bg-[#F4F3EE]">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">Global</div>
              <div className="text-[#6F7B83]">Distribution Network</div>
            </div>
            <div className="card-hover text-center p-8 rounded-2xl bg-[#F4F3EE]">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">ISO</div>
              <div className="text-[#6F7B83]">Quality Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Solutions Section */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2931] mb-4">
              Our Product Solutions
            </h2>
            <p className="text-lg text-[#6F7B83] max-w-2xl mx-auto">
              Comprehensive range of welding technology and manufacturing solutions for automotive, EV, electrical, and industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <Link href="/materials/copper-materials" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="inline-block px-2 py-1 bg-[#EF290E] text-white text-xs font-medium rounded mb-3">WIRBALIT®</div>
              <h3 className="text-xl font-semibold mb-3">Copper Alloys & Materials</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                WIRBALIT® product line, CuCrZr, CuZr, and custom copper alloys for resistance welding
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Product Card 2 */}
            <Link href="/products/welding-products" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spot Welding Components</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                Cap tips, electrodes, holders, shanks, arms, and precision-machined parts
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Product Card 3 */}
            <Link href="/products/flexible-busbars" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="inline-block px-2 py-1 bg-[#1D2931] text-white text-xs font-medium rounded mb-3">EV & Power</div>
              <h3 className="text-xl font-semibold mb-3">Flexible Busbars</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                Diffusion-welded busbars for switchgear, EV battery packs, and power distribution
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Product Card 4 */}
            <Link href="/products/welding-products" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gas Shielded & SAW Welding</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                Contact tips, gas nozzles, distributors, and SAW components
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Product Card 5 */}
            <Link href="/tip-dressing-units" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tip Dressing Units</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                Stationary, mobile handgun, swing arm, and manual tip dressers
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Product Card 6 */}
            <Link href="/materials/refractory-alloys" className="product-card group bg-white p-8 rounded-2xl">
              <div className="product-icon w-16 h-16 mb-6 text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Refractory Alloys</h3>
              <p className="text-[#6F7B83] mb-4 group-hover:text-[#B8BFC4]">
                Tungsten, Molybdenum, and Tantalum for high-temperature applications
              </p>
              <span className="inline-flex items-center text-[#EF290E] font-medium">
                Learn more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Background Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D2931] mb-6">
                German Engineering Excellence
              </h2>
              <p className="text-lg text-[#6F7B83] mb-6">
                SVS Maverick Private Limited is part of SVS Schweisstechnik GmbH, a German welding
                technology leader with over 100 years of expertise. We bring world-class solutions
                to the automotive, EV, electrical, and industrial sectors.
              </p>
              <p className="text-lg text-[#6F7B83] mb-8">
                Based in Bangalore, India, we serve customers across the region with German quality
                products and local support. Our commitment to excellence ensures connections that last.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
              >
                Learn more about us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F4F3EE] to-[#E5E4DF] rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-4xl font-bold text-[#1D2931] mb-2">SVS Schweisstechnik</div>
                  <div className="text-xl text-[#6F7B83] mb-4">GmbH, Germany</div>
                  <div className="text-[#EF290E] font-medium">Parent Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#B8BFC4] max-w-2xl mx-auto">
              Trusted partner across diverse industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Automotive', 'EV & Battery', 'Electrical', 'Mechanical', 'Shipbuilding', 'Home Appliance'].map((industry) => (
              <div key={industry} className="bg-[#2A3B46] p-6 rounded-xl text-center hover:bg-[#3A4B56] transition-colors">
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2931] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#6F7B83] mb-8 max-w-2xl mx-auto">
            Discover our comprehensive product portfolio or contact our expert team for personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1D2931] text-white font-semibold rounded-lg hover:bg-[#2A3B46] transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-[#E5E4DF]">
            <p className="text-[#6F7B83]">
              <strong>Email:</strong> <a href="mailto:sales@svsmav.com" className="text-[#EF290E]">sales@svsmav.com</a>
              <span className="mx-4">|</span>
              <strong>Phone:</strong> <a href="tel:+917204057172" className="text-[#EF290E]">+91 72040 57172</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
