import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbars for EV Battery Packs | Electric Vehicles | SVS Maverick',
  description: 'High-current flexible busbars for electric vehicle battery modules and packs. Optimized for thermal management, weight, and space efficiency.',
};

export default function EVBatteryBusbarsPage() {
  const applications = [
    'Battery module interconnections',
    'Battery pack main busbars',
    'BMS (Battery Management System) connections',
    'Inverter connections',
    'DC fast charging circuits',
    'High-voltage junction boxes',
    'Motor controller connections',
    'Onboard charger connections',
  ];

  const features = [
    {
      title: 'High Current Density',
      description: 'Optimized cross-section design delivers maximum current capacity with minimum weight and volume.',
    },
    {
      title: 'Thermal Management',
      description: 'Laminated construction provides excellent heat dissipation, preventing hotspots in battery systems.',
    },
    {
      title: 'Weight Optimization',
      description: 'Precisely engineered to minimize weight while meeting current and thermal requirements - critical for EV range.',
    },
    {
      title: 'Vibration Resistance',
      description: 'Flexible design withstands automotive vibration and shock without fatigue or loosening.',
    },
    {
      title: 'Compact Design',
      description: 'Low-profile construction fits in tight battery pack spaces where rigid busbars cannot.',
    },
    {
      title: 'Safety Features',
      description: 'Insulation options meet automotive safety standards for high-voltage isolation.',
    },
  ];

  const specifications = [
    { label: 'Current Rating', value: '100 A - 2,000 A (continuous)' },
    { label: 'Voltage Class', value: 'Up to 1,000 V DC' },
    { label: 'Conductor Material', value: 'ETP / OFC Copper' },
    { label: 'Lamination Thickness', value: '0.1 - 0.2 mm (typical)' },
    { label: 'Operating Temperature', value: '-40°C to +85°C' },
    { label: 'Insulation', value: 'Kapton, PET, or Nomex' },
    { label: 'Plating', value: 'Nickel or tin (for aluminum welding compatibility)' },
    { label: 'Standards', value: 'ISO 6469, IEC 61851, SAE J1772' },
  ];

  const evRequirements = [
    {
      title: 'Electrical Performance',
      items: [
        'Low resistance for minimal power loss',
        'Low inductance for fast switching',
        'High current capacity for rapid charging',
        'Consistent performance across temperature range',
      ],
    },
    {
      title: 'Mechanical Requirements',
      items: [
        'Vibration resistance (automotive standards)',
        'Thermal cycling durability',
        'Compact form factor',
        'Easy assembly and serviceability',
      ],
    },
    {
      title: 'Safety & Compliance',
      items: [
        'High-voltage isolation (creepage/clearance)',
        'Flame retardant materials',
        'Automotive qualification testing',
        'Traceability and documentation',
      ],
    },
  ];

  const batteryTypes = [
    {
      name: 'Prismatic Cell Packs',
      description: 'Flexible connections between prismatic cells in module configurations.',
    },
    {
      name: 'Pouch Cell Packs',
      description: 'Low-profile busbars for connecting pouch cell tabs in series and parallel.',
    },
    {
      name: 'Cylindrical Cell Packs',
      description: 'Interconnects for 18650, 2170, and 4680 cylindrical cell modules.',
    },
    {
      name: 'Module-to-Module',
      description: 'High-current connections between battery modules within the pack.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931]">FLEXIBLE BUSBARS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">EV BATTERY PACK</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Flexible Busbars for EV Battery Packs
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              High-performance laminated copper busbars engineered for electric vehicle battery
              systems. Optimized for high current, thermal management, and the demanding
              requirements of automotive applications.
            </p>

            {/* Key Stats */}
            <section className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-1">2000A</div>
                  <div className="text-sm text-[#6F7B83]">Max Continuous Current</div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-1">1000V</div>
                  <div className="text-sm text-[#6F7B83]">Voltage Rating</div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-1">-40°C</div>
                  <div className="text-sm text-[#6F7B83]">Min Operating Temp</div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-1">+85°C</div>
                  <div className="text-sm text-[#6F7B83]">Max Operating Temp</div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Battery Pack Applications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Battery Pack Applications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {batteryTypes.map((type, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg bg-white p-5">
                      <h3 className="font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                      <p className="text-[#6F7B83] text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Common Uses</h3>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* EV Requirements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">EV-Specific Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {evRequirements.map((req, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-4">{req.title}</h3>
                    <ul className="space-y-2">
                      {req.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6F7B83]">
                          <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                        <td className="px-6 py-4 text-[#6F7B83] font-medium">{spec.label}</td>
                        <td className="px-6 py-4 text-[#1D2931]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Design Services */}
            <section className="mb-16">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Custom Design Services</h2>
                    <p className="text-[#6F7B83] mb-4">
                      Every EV battery pack is unique. Our engineering team works with you from
                      concept to production to develop flexible busbar solutions that meet your
                      exact requirements.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Design consultation and optimization',
                        'Thermal and electrical analysis',
                        'Prototype development',
                        'Testing and validation support',
                        'Production scaling',
                      ].map((service, index) => (
                        <li key={index} className="flex items-center text-[#6F7B83]">
                          <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-[#F4F3EE] rounded-lg p-8">
                      <p className="text-[#6F7B83] mb-4">Ready to discuss your EV project?</p>
                      <Link
                        href="/contact"
                        className="inline-block bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                      >
                        Contact Engineering Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/products/flexible-busbars/switchgear"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Switchgear Busbars
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Flexible busbars for power distribution equipment.</p>
                </Link>
                <Link
                  href="/products/welding-systems-connection-cables"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Connection Cables
                  </h3>
                  <p className="text-[#6F7B83] text-sm">High-current connection cables for industrial applications.</p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Copper Materials
                  </h3>
                  <p className="text-[#6F7B83] text-sm">High-purity copper alloys for electrical applications.</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Partner With Us for Your EV Project</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                From prototype to mass production, we support EV manufacturers with reliable,
                high-performance flexible busbar solutions. Contact us to discuss your requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request a Quote
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
