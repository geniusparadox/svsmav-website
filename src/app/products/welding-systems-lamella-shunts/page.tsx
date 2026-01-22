import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Lamella Shunts & Flexible Conductors | SVS Maverick',
  description: 'High-current lamella shunts and flexible copper conductors for resistance welding systems. Enable current transfer to moving electrode assemblies.',
};

export default function LamellaShuntsPage() {
  const features = [
    {
      title: 'Ultra-Flexible Design',
      description: 'Multiple thin copper lamellae provide exceptional flexibility while maintaining high current-carrying capacity.',
    },
    {
      title: 'Low Electrical Resistance',
      description: 'Optimized lamella design minimizes resistance losses, ensuring efficient power transfer to the electrodes.',
    },
    {
      title: 'Long Fatigue Life',
      description: 'Engineered to withstand millions of flex cycles without conductor breakage or increased resistance.',
    },
    {
      title: 'Custom Configurations',
      description: 'Available in standard and custom configurations with various termination styles to match your equipment.',
    },
  ];

  const specifications = [
    { label: 'Current Capacity', value: 'Up to 100,000A' },
    { label: 'Cross Sections', value: '50mm2 - 2,000mm2' },
    { label: 'Lamella Thickness', value: '0.1mm - 0.5mm' },
    { label: 'Flex Cycles', value: '> 10 million' },
    { label: 'Standard Widths', value: '20mm - 300mm' },
    { label: 'Operating Temperature', value: '-40C to +150C' },
  ];

  const applications = [
    'Spot welding gun arm shunts',
    'Seam welding wheel current supply',
    'Robot welding cell connections',
    'Transformer secondary connections',
    'Moving electrode current transfer',
    'Press welder arm conductors',
    'Portable welding equipment',
    'Automated welding systems',
  ];

  const shuntTypes = [
    {
      name: 'Standard Lamella Shunts',
      description: 'Parallel copper lamellae for general resistance welding applications',
      features: ['High flexibility', 'Cost-effective', 'Standard terminations'],
    },
    {
      name: 'Braided Shunts',
      description: 'Woven copper construction for maximum flexibility in tight spaces',
      features: ['Extreme flexibility', 'Compact design', 'Multi-directional movement'],
    },
    {
      name: 'Water-Cooled Shunts',
      description: 'Integrated cooling channels for high-duty-cycle applications',
      features: ['Higher current capacity', 'Continuous operation', 'Reduced heating'],
    },
  ];

  const terminationOptions = [
    { name: 'Soldered Terminals', desc: 'Traditional joining for reliable connections' },
    { name: 'Brazed Connections', desc: 'High-strength joints for demanding applications' },
    { name: 'Bolted Lugs', desc: 'Removable connections for maintenance access' },
    { name: 'Pressed Fittings', desc: 'Factory-installed precision terminations' },
    { name: 'Custom Shapes', desc: 'Application-specific terminal geometries' },
    { name: 'Silver-Plated', desc: 'Enhanced contact resistance and corrosion protection' },
  ];

  const keyBenefits = [
    'Superior flexibility for moving electrodes',
    'Extended fatigue life under continuous flexing',
    'Low resistance for efficient current transfer',
    'Available in standard and custom configurations',
    'Water-cooled options for high-duty cycles',
    'Compatible with all welding equipment brands',
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-white">
          <div className="max-w-5xl mx-auto px-8 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#6F7B83]">WELDING SYSTEMS</span>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931]">LAMELLA SHUNTS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Lamella Shunts & Flexible Conductors
            </h1>

            {/* Intro */}
            <p className="text-xl text-[#6F7B83] mb-8 max-w-3xl">
              High-current flexible conductors engineered for resistance welding systems.
              Enable reliable current transfer to moving electrode assemblies with exceptional flexibility and fatigue life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/products/welding-systems-connection-cables"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Connection Cables
              </Link>
            </div>

            {/* Product Description */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Flexible Current Transfer Solutions</h2>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    Lamella shunts are essential components in resistance welding systems where current
                    must be transferred to moving electrode assemblies. Constructed from multiple thin
                    copper sheets (lamellae) joined at their ends, these conductors combine high
                    current-carrying capacity with the flexibility needed to accommodate electrode movement.
                  </p>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    The lamella design distributes flexing stress across multiple conductors, dramatically
                    extending service life compared to solid conductors. Our shunts are engineered to
                    withstand tens of millions of flex cycles while maintaining consistent electrical
                    performance throughout their service life.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    SVS Maverick offers lamella shunts for all major welding equipment manufacturers,
                    as well as custom-designed solutions for specialized applications. Our engineering
                    team can work with you to optimize shunt design for your specific current, flexibility,
                    and space requirements.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {keyBenefits.map((benefit, index) => (
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

            {/* Shunt Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Shunt Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {shuntTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-xl font-bold text-[#1D2931] mb-3">{type.name}</h3>
                    <p className="text-[#6F7B83] mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-[#6F7B83]">
                          <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Product Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-xl font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                    <p className="text-[#6F7B83]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How Lamella Shunts Work */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">How Lamella Shunts Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="w-16 h-16 bg-[#EF290E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Multiple Lamellae</h3>
                  <p className="text-[#6F7B83] text-sm">Thin copper sheets stacked together distribute current and flex stress across multiple conductors.</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="w-16 h-16 bg-[#EF290E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Joined Terminals</h3>
                  <p className="text-[#6F7B83] text-sm">Lamellae are brazed or soldered together at the ends to form solid terminal connections.</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="w-16 h-16 bg-[#EF290E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Free Flex Zone</h3>
                  <p className="text-[#6F7B83] text-sm">The middle section of lamellae slides freely, allowing flexibility without fatigue damage.</p>
                </div>
              </div>
            </section>

            {/* Termination Options */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Termination Options</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {terminationOptions.map((option, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-5">
                    <h3 className="font-semibold text-[#1D2931] mb-2">{option.name}</h3>
                    <p className="text-sm text-[#6F7B83]">{option.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Construction Materials */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Construction Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">ETP Copper Lamellae</h3>
                  <p className="text-[#6F7B83] mb-3">High-purity electrolytic copper for maximum conductivity and flexibility.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
                <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">OFE Copper</h3>
                  <p className="text-[#6F7B83] mb-3">Oxygen-free copper for critical applications requiring highest conductivity.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
                <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCr1Zr Terminals</h3>
                  <p className="text-[#6F7B83] mb-3">Hardened copper alloy terminals for enhanced wear resistance.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
              </div>
            </section>

            {/* Specifications & Applications */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            {/* Custom Design Service */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Custom Shunt Design Service</h2>
                    <p className="text-[#6F7B83] mb-6">
                      Our engineering team can design lamella shunts optimized for your specific application.
                      Provide us with your current requirements, space constraints, and movement parameters
                      for a custom solution.
                    </p>
                    <ul className="space-y-3">
                      {['Custom cross sections and lengths', 'Special terminal configurations', 'Water cooling integration', 'OEM replacement designs'].map((item, index) => (
                        <li key={index} className="flex items-center text-[#6F7B83]">
                          <svg className="w-5 h-5 text-[#EF290E] mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-[#EF290E] text-white px-8 py-4 rounded font-semibold hover:bg-[#d42410] transition-colors"
                    >
                      Request Custom Design
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/products/welding-systems-connection-cables" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">Connection Cables</h3>
                  <p className="text-[#6F7B83] mb-3">Flexible cables for transformer to electrode holder connections.</p>
                  <span className="text-[#EF290E] font-medium">View product &rarr;</span>
                </Link>
                <Link href="/products/mesh-welding-electrode-holders" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">Electrode Holders</h3>
                  <p className="text-[#6F7B83] mb-3">Complete holder assemblies requiring lamella shunt connections.</p>
                  <span className="text-[#EF290E] font-medium">View product &rarr;</span>
                </Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="border border-gray-200 rounded-lg bg-white p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                Need Flexible Current Transfer Solutions?
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our specialists can help you select or design the optimal lamella shunt configuration
                for your welding application. Contact us for technical consultation and quotes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Technical Support
                </Link>
                <Link
                  href="/products"
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
