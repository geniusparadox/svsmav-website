import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Laser Welding | Welding Techniques | SVS Maverick',
  description: 'Laser welding technique overview - precision high-energy beam welding for automotive, aerospace, electronics, and medical device manufacturing.',
};

export default function LaserWeldingPage() {
  const applications = [
    'Automotive body panels',
    'EV battery pack assembly',
    'Medical device manufacturing',
    'Aerospace components',
    'Electronics enclosures',
    'Precision instruments',
    'Jewelry and watchmaking',
    'Tool and die repair',
  ];

  const industries = [
    'Automotive',
    'EV & Battery',
    'Medical Devices',
    'Aerospace',
    'Electronics',
    'Precision Mfg',
  ];

  const advantages = [
    {
      title: 'High Precision',
      description: 'Focused laser beam enables extremely narrow, precisely positioned welds.',
    },
    {
      title: 'Minimal Heat Input',
      description: 'Concentrated energy minimizes the heat-affected zone and distortion.',
    },
    {
      title: 'High Speed',
      description: 'Welding speeds up to several meters per minute for high productivity.',
    },
    {
      title: 'Deep Penetration',
      description: 'Keyhole welding achieves high depth-to-width ratios in a single pass.',
    },
    {
      title: 'Non-Contact Process',
      description: 'No physical contact with workpiece reduces contamination and wear.',
    },
    {
      title: 'Automation Friendly',
      description: 'Easily integrated with robotic systems and CNC positioning.',
    },
  ];

  const relatedProducts = [
    {
      name: 'Laser Welding Fixtures',
      description: 'Precision copper fixturing for laser welding heat management.',
      href: '/products/welding-products',
    },
    {
      name: 'WIRBALIT Copper Alloys',
      description: 'High-conductivity materials for laser welding backing and fixtures.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Shielding Gas Nozzles',
      description: 'Copper nozzles for optimal shielding gas delivery.',
      href: '/products/welding-products',
    },
    {
      name: 'Heat Sinks',
      description: 'Copper heat sinks for thermal management in laser welding.',
      href: '/products/copper-alloys',
    },
  ];

  const laserTypes = [
    {
      type: 'Fiber Lasers',
      power: '100W - 20kW',
      advantages: 'High efficiency, excellent beam quality, low maintenance, long service life'
    },
    {
      type: 'Disk Lasers',
      power: '1kW - 16kW',
      advantages: 'High beam quality, good for thick materials, reliable operation'
    },
    {
      type: 'CO2 Lasers',
      power: '1kW - 20kW',
      advantages: 'Proven technology, good for organic materials and some metals'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#F4F3EE]">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products/welding-products" className="text-[#6F7B83] hover:text-[#1D2931]">WELDING PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">LASER WELDING</span>
            </nav>

            {/* Title */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-[#EF290E] text-white text-sm font-medium rounded-full">
                High-Energy Beam Welding
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Laser Welding
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-4xl">
              Laser welding uses a highly focused beam of coherent light to create precise, high-quality
              welds with minimal heat input. This advanced joining technology delivers exceptional speed,
              accuracy, and repeatability for demanding applications in automotive, aerospace, medical
              devices, and electronics manufacturing.
            </p>

            {/* Process Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">How Laser Welding Works</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    Laser welding focuses a high-intensity laser beam onto the workpiece surface.
                    The concentrated energy rapidly heats the material, creating a molten weld pool.
                    In keyhole mode, the intense beam vaporizes material to create a deep, narrow
                    cavity that allows for exceptional penetration.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    Modern laser welding systems use fiber lasers or disk lasers that offer excellent
                    beam quality, high efficiency, and reliable operation. The process can be precisely
                    controlled through power, pulse duration, and beam positioning.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="font-semibold text-[#1D2931] mb-4">Laser Welding Modes:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Conduction Welding</span>
                        <p className="text-sm text-[#6F7B83]">Lower power density for shallow, wide welds with smooth surfaces</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Keyhole Welding</span>
                        <p className="text-sm text-[#6F7B83]">High power density for deep, narrow welds with high aspect ratios</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Pulsed Laser Welding</span>
                        <p className="text-sm text-[#6F7B83]">Controlled heat input for sensitive materials and spot welding</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Parameters */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <p className="text-sm text-[#6F7B83] mb-1">Laser Power</p>
                  <p className="font-semibold text-[#1D2931] text-lg">100W - 20kW</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <p className="text-sm text-[#6F7B83] mb-1">Welding Speed</p>
                  <p className="font-semibold text-[#1D2931] text-lg">1 - 30 m/min</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <p className="text-sm text-[#6F7B83] mb-1">Spot Size</p>
                  <p className="font-semibold text-[#1D2931] text-lg">0.1 - 1 mm</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <p className="text-sm text-[#6F7B83] mb-1">Penetration</p>
                  <p className="font-semibold text-[#1D2931] text-lg">0.5 - 25 mm</p>
                </div>
              </div>
            </div>

            {/* Laser Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Laser Welding Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {laserTypes.map((laser) => (
                  <div key={laser.type} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{laser.type}</h3>
                    <p className="text-[#EF290E] font-medium mb-3">{laser.power}</p>
                    <p className="text-[#6F7B83] text-sm">{laser.advantages}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages of Laser Welding</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83]">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EV Battery Focus */}
            <div className="mb-16">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Laser Welding in EV Battery Manufacturing</h2>
                    <p className="text-[#6F7B83] mb-6">
                      Laser welding has become essential for electric vehicle battery pack assembly,
                      offering the precision and speed needed for high-volume production of battery
                      modules and packs.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Cell-to-busbar connections',
                        'Module interconnections',
                        'Copper and aluminum joining',
                        'Hermetic sealing applications',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#6F7B83]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-8 border border-gray-200 rounded-lg">
                      <p className="text-[#EF290E] text-5xl font-bold mb-2">EV</p>
                      <p className="text-[#1D2931] font-medium">Battery Assembly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                Laser welding serves applications requiring high precision, speed, and minimal heat input.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    {applications.slice(0, 4).map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    {applications.slice(4).map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Industries</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                Advanced manufacturing industries leverage laser welding for critical precision joining applications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <span className="text-[#1D2931] font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                SVS Maverick supplies copper alloys and components for laser welding applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#6F7B83] mb-4">{product.description}</p>
                    <span className="inline-flex items-center text-[#EF290E] font-medium text-sm">
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need Laser Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-6">
                Our experts can help you select the right copper alloys and components
                for your laser welding fixturing and thermal management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#d42410] transition-colors"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/products/copper-alloys"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  View Copper Alloys
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
