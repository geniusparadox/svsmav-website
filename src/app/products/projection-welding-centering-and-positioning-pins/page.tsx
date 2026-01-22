import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Centering & Positioning Pins for Projection Welding | SVS Maverick',
  description: 'High-precision centering and positioning pins for projection welding applications. Ensure accurate component alignment and consistent weld quality.',
};

export default function CenteringPositioningPinsPage() {
  const features = [
    {
      title: 'Precision Alignment',
      description: 'Ensure exact component positioning with tolerances as tight as +/- 0.02mm for consistent weld placement.',
    },
    {
      title: 'High Wear Resistance',
      description: 'Manufactured from hardened copper alloys and refractory materials for extended service life in high-volume production.',
    },
    {
      title: 'Custom Geometries',
      description: 'Available in various head styles, lengths, and diameters to match your specific tooling requirements.',
    },
    {
      title: 'Easy Integration',
      description: 'Designed for seamless integration with existing projection welding fixtures and electrode holders.',
    },
  ];

  const specifications = [
    { label: 'Pin Diameters', value: '2mm - 25mm' },
    { label: 'Length Range', value: '10mm - 150mm' },
    { label: 'Positional Accuracy', value: '+/- 0.02mm' },
    { label: 'Head Styles', value: 'Flat, Domed, Conical, Custom' },
    { label: 'Surface Finish', value: 'Ra 0.8 or better' },
    { label: 'Operating Temperature', value: 'Up to 500C' },
  ];

  const applications = [
    'Automotive body panel assembly',
    'Nut and bolt projection welding',
    'Fastener attachment applications',
    'Multi-point projection welding',
    'Bracket and reinforcement welding',
    'High-volume automated production lines',
  ];

  const benefits = [
    'Consistent part positioning for quality welds',
    'Extended service life reduces downtime',
    'Quick-change designs for fast tooling changeovers',
    'Compatible with all major welding equipment',
    'Custom solutions for unique applications',
    'Technical support from welding experts',
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Header Section */}
          <section className="px-8 lg:px-16 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8">
              <Link href="/" className="text-gray-500 hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/products" className="text-gray-500 hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/products/welding-technique/projection-welding" className="text-gray-500 hover:text-[#1D2931]">PROJECTION WELDING</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">CENTERING & POSITIONING PINS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] max-w-3xl leading-tight mb-6">
              Centering & Positioning Pins
            </h1>
            <p className="text-lg text-[#6F7B83] max-w-3xl">
              High-precision centering and positioning pins engineered for projection welding applications.
              Achieve perfect component alignment and consistent weld quality in automated production environments.
            </p>
          </section>

          {/* Action Buttons */}
          <section className="px-8 lg:px-16 pb-12">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/materials/copper-materials"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Materials
              </Link>
            </div>
          </section>

          {/* Product Description */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Precision Engineering for Projection Welding</h2>
                <p className="text-[#6F7B83] text-lg mb-6">
                  Our centering and positioning pins are critical components in projection welding fixtures,
                  ensuring that workpieces are accurately located before the welding current is applied.
                  Proper alignment is essential for achieving consistent weld nugget formation and meeting
                  quality specifications in high-volume manufacturing.
                </p>
                <p className="text-[#6F7B83] text-lg mb-6">
                  Manufactured to exacting tolerances from premium copper alloys and refractory materials,
                  these pins provide reliable positioning throughout millions of welding cycles. The selection
                  of material depends on your specific application requirements, including electrical
                  conductivity needs, wear resistance, and operating temperatures.
                </p>
                <p className="text-[#6F7B83] text-lg">
                  SVS Maverick offers both standard designs and fully customized solutions to match your
                  exact tooling requirements. Our engineering team works closely with customers to optimize
                  pin geometry, material selection, and surface treatments for maximum performance.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#EF290E] mb-3">{feature.title}</h3>
                  <p className="text-[#6F7B83]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Available Materials */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors mb-2">CuCr1Zr</h3>
                <p className="text-[#6F7B83] mb-3">Standard copper alloy offering excellent balance of conductivity and hardness.</p>
                <span className="text-[#EF290E] font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
              <Link href="/materials/copper-materials/cuco2be" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors mb-2">CuCoBe</h3>
                <p className="text-[#6F7B83] mb-3">High-strength alloy for demanding applications requiring superior wear resistance.</p>
                <span className="text-[#EF290E] font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
              <Link href="/materials/refractory-alloys" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors mb-2">Tungsten Alloys</h3>
                <p className="text-[#6F7B83] mb-3">Refractory materials for high-temperature and high-wear applications.</p>
                <span className="text-[#EF290E] font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </Link>
            </div>
          </section>

          {/* Specifications and Applications */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Technical Specifications</h2>
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                  {specifications.map((spec, index) => (
                    <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <span className="text-[#6F7B83]">{spec.label}</span>
                      <span className="font-semibold text-[#1D2931]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Applications</h2>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start border border-gray-200 rounded-lg bg-white p-4">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-200 rounded-lg bg-white">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-2">Need Custom Centering & Positioning Pins?</h2>
                <p className="text-[#6F7B83]">
                  Our engineering team can design and manufacture centering pins to your exact specifications.
                  Contact us with your drawings or requirements for a detailed quote.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Custom Quote
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center border border-[#1D2931] text-[#1D2931] px-6 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
