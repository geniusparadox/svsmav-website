import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Micro Welding | Welding Techniques | SVS Maverick',
  description: 'Micro welding technique overview - precision resistance welding for miniature components, electronics, medical devices, and fine wire applications.',
};

export default function MicroWeldingPage() {
  const keyParameters = [
    { label: 'Weld Current', value: '10 - 5,000 A' },
    { label: 'Weld Time', value: '0.5 - 100 ms' },
    { label: 'Electrode Force', value: '0.1 - 50 N' },
    { label: 'Wire Diameter', value: '0.025 - 2 mm' },
  ];

  const advantages = [
    {
      title: 'Precision Control',
      description: 'Micro-second timing and milliamp current control for delicate components.',
    },
    {
      title: 'Minimal Heat',
      description: 'Precisely controlled heat input prevents damage to heat-sensitive parts.',
    },
    {
      title: 'Small Footprint',
      description: 'Miniature electrodes enable welding in confined spaces and on tiny parts.',
    },
    {
      title: 'Clean Process',
      description: 'No flux, filler, or consumables - ideal for sensitive electronic assemblies.',
    },
    {
      title: 'Repeatability',
      description: 'Highly consistent weld quality for automated high-volume production.',
    },
    {
      title: 'Material Versatility',
      description: 'Capable of joining dissimilar metals and exotic alloy combinations.',
    },
  ];

  const applications = [
    'Battery tab welding',
    'Sensor manufacturing',
    'Medical device assembly',
    'Electronic component leads',
    'Fine wire connections',
    'Thermocouple assembly',
    'Relay and switch contacts',
    'Semiconductor packaging',
  ];

  const industries = [
    'Electronics',
    'Medical Devices',
    'Automotive',
    'Aerospace',
    'Telecommunications',
    'Consumer Products',
  ];

  const weldableMaterials = [
    'Copper', 'Nickel', 'Gold', 'Silver', 'Platinum', 'Aluminum',
    'Stainless Steel', 'Kovar', 'Inconel', 'Titanium', 'Molybdenum', 'Tungsten'
  ];

  const relatedProducts = [
    {
      name: 'Micro Welding Electrodes',
      description: 'Precision miniature electrodes for fine wire and component welding.',
      href: '/products/welding-products',
    },
    {
      name: 'Electrode Materials',
      description: 'Tungsten, molybdenum, and copper alloys for micro welding applications.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Precision Holders',
      description: 'Miniature electrode holders with precise alignment features.',
      href: '/products/welding-products',
    },
    {
      name: 'Refractory Alloys',
      description: 'High-temperature materials for demanding micro welding applications.',
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
              <span className="text-[#1D2931] font-medium">MICRO WELDING</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Micro Welding
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-4xl">
              Micro welding encompasses precision resistance welding techniques for joining miniature
              components, fine wires, and delicate assemblies. With precise control over current,
              time, and force at the micro-scale, this technology enables reliable connections in
              electronics, medical devices, and advanced manufacturing applications.
            </p>

            {/* Process Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">How Micro Welding Works</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    Micro welding applies the principles of resistance welding at a miniature scale.
                    Precision power supplies deliver carefully controlled current pulses measured in
                    milliseconds or microseconds, while miniature electrodes apply precisely calibrated
                    force to create strong, reliable joints without damaging sensitive components.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    The process can be configured for spot welding, parallel gap welding, or
                    series welding depending on the application. Advanced controls monitor and
                    adjust parameters in real-time to ensure consistent weld quality.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Micro Welding Methods</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Opposed Electrode</span>
                        <p className="text-sm text-[#6F7B83]">Standard configuration with electrodes on opposite sides</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Parallel Gap</span>
                        <p className="text-sm text-[#6F7B83]">Side-by-side electrodes for surface-mount applications</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-medium text-[#1D2931]">Series Welding</span>
                        <p className="text-sm text-[#6F7B83]">Multiple welds in series for complex assemblies</p>
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
                {keyParameters.map((param) => (
                  <div key={param.label} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                    <p className="text-sm text-[#6F7B83] mb-2">{param.label}</p>
                    <p className="text-xl font-bold text-[#1D2931]">{param.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages of Micro Welding</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83]">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weldable Materials */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Weldable Materials</h2>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {weldableMaterials.map((material) => (
                  <div key={material} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <span className="font-medium text-[#1D2931]">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    Micro welding is essential for precision assembly of miniature
                    components and delicate electronics across high-tech industries.
                  </p>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Key Industries</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                        <p className="font-medium text-[#1D2931]">{industry}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Industry Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { app: 'Battery Assembly', desc: 'Tab welding for lithium-ion and other battery technologies' },
                  { app: 'Medical Devices', desc: 'Pacemakers, sensors, and surgical instruments' },
                  { app: 'Electronics', desc: 'Component leads, connectors, and circuit assemblies' },
                  { app: 'Sensors', desc: 'Thermocouples, pressure sensors, and transducers' },
                ].map((item) => (
                  <div key={item.app} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2">{item.app}</h3>
                    <p className="text-[#6F7B83]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Related Products</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                SVS Maverick supplies precision electrodes and materials for micro welding applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
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
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need Micro Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-6">
                Our experts can help you select the right precision electrodes and materials
                for your miniature welding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/products/welding-products"
                  className="inline-flex items-center justify-center border-2 border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
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
