import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'MIG/MAG Welding | Welding Techniques | SVS Maverick',
  description: 'MIG/MAG welding technique overview - Gas Metal Arc Welding (GMAW) for versatile, high-productivity metal joining in fabrication and manufacturing.',
};

export default function MigMagWeldingPage() {
  const applications = [
    'Structural steel fabrication',
    'Automotive manufacturing',
    'Shipbuilding and marine',
    'Pipeline construction',
    'Pressure vessel fabrication',
    'Agricultural equipment',
    'General metal fabrication',
    'Repair and maintenance',
  ];

  const industries = [
    'Automotive',
    'Construction',
    'Shipbuilding',
    'Oil & Gas',
    'Heavy Equipment',
    'Manufacturing',
  ];

  const advantages = [
    {
      title: 'High Productivity',
      description: 'Continuous wire feed enables fast welding speeds and high deposition rates.',
    },
    {
      title: 'Versatile',
      description: 'Suitable for a wide range of materials including steel, stainless steel, and aluminum.',
    },
    {
      title: 'Easy to Learn',
      description: 'Relatively simple technique with good control for operators of all skill levels.',
    },
    {
      title: 'All-Position Welding',
      description: 'Can weld in flat, horizontal, vertical, and overhead positions.',
    },
    {
      title: 'Minimal Cleanup',
      description: 'Gas shielding produces clean welds with minimal slag and spatter.',
    },
    {
      title: 'Automation Compatible',
      description: 'Easily automated for robotic welding applications.',
    },
  ];

  const keyParameters = [
    { parameter: 'Wire Diameter', value: '0.6 - 1.6 mm' },
    { parameter: 'Current Range', value: '50 - 500 A' },
    { parameter: 'Voltage', value: '15 - 35 V' },
    { parameter: 'Gas Flow Rate', value: '15 - 25 L/min' },
    { parameter: 'Wire Feed Speed', value: '2 - 20 m/min' },
    { parameter: 'Travel Speed', value: '0.2 - 1.5 m/min' },
  ];

  const processSteps = [
    { step: '1', title: 'Wire Feed', desc: 'Continuous wire feeds through the torch' },
    { step: '2', title: 'Arc Initiation', desc: 'Contact with workpiece creates arc' },
    { step: '3', title: 'Gas Shielding', desc: 'Shielding gas protects the weld pool' },
    { step: '4', title: 'Metal Transfer', desc: 'Wire melts and transfers to weld' },
    { step: '5', title: 'Solidification', desc: 'Weld pool cools and solidifies' },
  ];

  const relatedProducts = [
    {
      name: 'Contact Tips',
      description: 'Precision copper contact tips for reliable wire feeding and current transfer.',
      href: '/products/welding-products',
    },
    {
      name: 'Gas Nozzles',
      description: 'Durable gas nozzles for optimal shielding gas coverage.',
      href: '/products/welding-products',
    },
    {
      name: 'Wire Liners',
      description: 'High-quality liners for smooth, consistent wire feeding.',
      href: '/products/welding-products',
    },
    {
      name: 'WIRBALIT Copper Alloys',
      description: 'Premium copper materials for MIG/MAG consumable manufacturing.',
      href: '/products/copper-alloys',
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
              <span className="text-[#1D2931] font-medium">MIG/MAG WELDING</span>
            </nav>

            {/* Title */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-[#EF290E] text-white text-sm font-medium rounded-full">
                Gas Metal Arc Welding
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              MIG/MAG Welding
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Gas Metal Arc Welding (GMAW) is one of the most versatile and widely used welding processes.
              Whether using inert gas (MIG) or active gas (MAG), this technique delivers high productivity
              and excellent weld quality for diverse applications from automotive to heavy fabrication.
            </p>

            {/* Process Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">How MIG/MAG Welding Works</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    MIG (Metal Inert Gas) and MAG (Metal Active Gas) welding use a continuously fed
                    consumable wire electrode and shielding gas to create strong, clean welds.
                    The main difference is the type of shielding gas used.
                  </p>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    An electric arc forms between the wire electrode and the workpiece, melting both
                    to create the weld pool. The shielding gas protects the molten metal from atmospheric
                    contamination, resulting in high-quality welds.
                  </p>
                  <div className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="font-semibold text-[#1D2931] mb-4">MIG vs MAG:</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#EF290E]">MIG (Inert Gas)</h4>
                        <p className="text-sm text-[#6F7B83]">Uses pure argon or argon/helium mix. Ideal for aluminum, stainless steel, and non-ferrous metals.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#EF290E]">MAG (Active Gas)</h4>
                        <p className="text-sm text-[#6F7B83]">Uses CO2 or argon/CO2 mix. Preferred for carbon and low-alloy steels.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-6 text-center">The Welding Process</h3>
                  <div className="space-y-4">
                    {processSteps.map((item) => (
                      <div key={item.step} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#EF290E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mr-4">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1D2931]">{item.title}</h4>
                          <p className="text-sm text-[#6F7B83]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Parameters */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Parameter</th>
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keyParameters.map((param, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-4 px-4 text-[#6F7B83]">{param.parameter}</td>
                        <td className="py-4 px-4 text-[#1D2931] font-medium">{param.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages of MIG/MAG Welding</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                MIG/MAG welding offers exceptional versatility and productivity for modern manufacturing.
              </p>
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

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                MIG/MAG welding is suitable for a wide range of applications across multiple industries
                due to its versatility and efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Common Applications</h3>
                  <ul className="space-y-2">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">&#8226;</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Industries Served</h3>
                  <p className="text-[#6F7B83] mb-4">
                    From automotive assembly lines to offshore oil platforms, MIG/MAG welding is
                    essential across diverse industrial sectors.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((industry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                        <span className="text-[#1D2931] font-medium">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                SVS Maverick supplies high-quality consumables and components for MIG/MAG welding systems.
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
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need MIG/MAG Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-6">
                Our experts can help you select the right consumables and equipment
                for your MIG/MAG welding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#d42410] transition-colors"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/products/welding-products"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
