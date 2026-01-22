import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Welding Connection Cables | SVS Maverick',
  description: 'High-current flexible connection cables for resistance welding systems. Engineered for reliable power transfer and long service life.',
};

export default function ConnectionCablesPage() {
  const features = [
    {
      title: 'High Current Capacity',
      description: 'Designed to carry extreme welding currents up to 50,000A with minimal resistive losses and heat generation.',
    },
    {
      title: 'Superior Flexibility',
      description: 'Fine-stranded copper construction allows cables to flex continuously without conductor fatigue or breakage.',
    },
    {
      title: 'Water-Cooled Options',
      description: 'Integrated water cooling maintains optimal operating temperature during continuous high-current operation.',
    },
    {
      title: 'Custom Terminations',
      description: 'Factory-fitted terminals and connectors matched to your specific welding equipment for optimal contact.',
    },
  ];

  const specifications = [
    { label: 'Current Capacity', value: 'Up to 50,000A' },
    { label: 'Cross Sections', value: '50mm2 - 500mm2' },
    { label: 'Standard Lengths', value: '0.5m - 10m' },
    { label: 'Conductor Type', value: 'Fine-stranded copper' },
    { label: 'Insulation', value: 'Silicone or EPDM rubber' },
    { label: 'Temperature Rating', value: '-40C to +200C' },
  ];

  const applications = [
    'Spot welding machine connections',
    'Seam welding transformer leads',
    'Projection welding equipment',
    'Robotic welding cell wiring',
    'Welding gun connections',
    'Secondary circuit cabling',
    'Transformer to electrode connections',
    'Mobile welding equipment',
  ];

  const cableTypes = [
    {
      name: 'Standard Flexible Cables',
      description: 'Air-cooled cables for intermittent duty welding applications',
      features: ['Cost-effective', 'Easy installation', 'Wide range of sizes'],
    },
    {
      name: 'Water-Cooled Cables',
      description: 'Internal cooling for continuous high-current operation',
      features: ['Higher current capacity', 'Smaller diameter', 'Extended service life'],
    },
    {
      name: 'Double-Insulated Cables',
      description: 'Enhanced safety insulation for demanding environments',
      features: ['Increased safety', 'Abrasion resistant', 'Chemical resistant'],
    },
  ];

  const terminalTypes = [
    'Compression lugs',
    'Soldered terminals',
    'Bolted connections',
    'Quick-connect fittings',
    'Custom machined terminals',
    'Water-cooled connectors',
  ];

  const crossSectionData = [
    { size: '50mm2', air: 'Up to 5,000A', water: 'Up to 8,000A' },
    { size: '95mm2', air: 'Up to 8,000A', water: 'Up to 12,000A' },
    { size: '150mm2', air: 'Up to 12,000A', water: 'Up to 18,000A' },
    { size: '240mm2', air: 'Up to 18,000A', water: 'Up to 28,000A' },
    { size: '300mm2', air: 'Up to 22,000A', water: 'Up to 35,000A' },
    { size: '500mm2', air: 'Up to 32,000A', water: 'Up to 50,000A' },
  ];

  const keyBenefits = [
    'Low electrical resistance for efficient power transfer',
    'Exceptional flexibility for moving applications',
    'Long service life under continuous flexing',
    'Water-cooled options for high-duty cycles',
    'Custom lengths and terminations available',
    'Compatible with all welding equipment brands',
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
              <span className="text-[#6F7B83]">WELDING SYSTEMS</span>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">CONNECTION CABLES</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Welding Connection Cables
            </h1>
            <p className="text-xl text-[#1D2931] mb-12">
              High-current flexible cables engineered for resistance welding systems.
              Deliver reliable power transfer with exceptional flexibility and durability for demanding industrial applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/products/welding-systems-lamella-shunts"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Lamella Shunts
              </Link>
            </div>

            {/* Product Description */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Reliable Power Delivery</h2>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    Connection cables are the vital link between welding transformers and electrode
                    assemblies, carrying the high currents needed to create quality welds. Our welding
                    cables are specifically engineered for resistance welding applications, where
                    reliability and performance are essential for production efficiency.
                  </p>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    Constructed with fine-stranded copper conductors, these cables provide the
                    flexibility needed for moving electrode assemblies while maintaining low
                    electrical resistance for efficient power transfer. The premium insulation
                    withstands the heat, abrasion, and chemical exposure common in welding environments.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    Available in standard configurations and custom-built assemblies, our cables
                    can be supplied with factory-fitted terminals matched to your specific welding
                    equipment, ensuring optimal electrical contact and long service life.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cable Types */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Cable Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cableTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-3">{type.name}</h3>
                    <p className="text-[#6F7B83] mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-[#6F7B83]">
                          <span className="text-[#EF290E] mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Product Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                    <p className="text-[#6F7B83]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross Section Guide */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Cross Section Selection Guide</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Cross Section</th>
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Current Capacity (Air)</th>
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Current Capacity (Water)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crossSectionData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-4 px-4 text-[#1D2931] font-medium">{row.size}</td>
                        <td className="py-4 px-4 text-[#6F7B83]">{row.air}</td>
                        <td className="py-4 px-4 text-[#6F7B83]">{row.water}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-[#6F7B83] mt-4">
                Values are approximate and depend on duty cycle, ambient temperature, and cable length.
              </p>
            </div>

            {/* Termination Options */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Termination Options</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {terminalTypes.map((terminal, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-4 flex items-center">
                    <span className="text-[#EF290E] mr-3">•</span>
                    <span className="text-[#6F7B83]">{terminal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction Materials */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Construction Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">ETP Copper Conductors</h3>
                  <p className="text-[#6F7B83] mb-3">High-purity copper with &gt;99.9% Cu for maximum electrical conductivity.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Silicone Insulation</h3>
                  <p className="text-[#6F7B83] mb-3">Heat-resistant silicone rubber for high-temperature applications up to 200C.</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">EPDM Rubber</h3>
                  <p className="text-[#6F7B83] mb-3">Excellent flexibility and chemical resistance for general welding environments.</p>
                </div>
              </div>
            </div>

            {/* Specifications and Applications */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Technical Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Property</th>
                          <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specifications.map((spec, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="py-4 px-4 text-[#6F7B83]">{spec.label}</td>
                            <td className="py-4 px-4 text-[#1D2931] font-medium">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Applications</h2>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start border border-gray-200 rounded-lg bg-white p-4">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/products/welding-systems-lamella-shunts" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Lamella Shunts</h3>
                  <p className="text-[#6F7B83] mb-3">Flexible copper conductors for current transfer in moving electrode assemblies.</p>
                  <span className="text-[#EF290E] font-medium">View product &rarr;</span>
                </Link>
                <Link href="/products/welding-wheels" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">Seam Welding Wheels</h3>
                  <p className="text-[#6F7B83] mb-3">Complete seam welding wheel assemblies requiring cable connections.</p>
                  <span className="text-[#EF290E] font-medium">View product &rarr;</span>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">
                Need Custom Cable Assemblies?
              </h2>
              <p className="text-[#6F7B83] mb-6 max-w-2xl">
                Our engineers can design and manufacture cable assemblies to your exact specifications.
                Contact us with your requirements for custom lengths, terminations, and configurations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Request Custom Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
