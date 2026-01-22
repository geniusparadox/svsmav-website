import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbars | Laminated Copper Connectors | SVS Maverick',
  description: 'High-performance flexible busbars and laminated copper connectors for switchgear, transformers, and EV battery pack applications. Custom designs available.',
};

export default function FlexibleBusbarsPage() {
  const applications = [
    {
      title: 'Switchgear & Transformers',
      description: 'Flexible connections for power distribution equipment, compensating for thermal expansion and vibration.',
      href: '/products/flexible-busbars/switchgear',
      features: ['Thermal expansion compensation', 'Vibration isolation', 'Easy installation', 'Long service life'],
    },
    {
      title: 'EV Battery Packs',
      description: 'High-current connections for electric vehicle battery modules and packs with optimized space efficiency.',
      href: '/products/flexible-busbars/ev-battery-pack',
      features: ['High current capacity', 'Compact design', 'Thermal management', 'Weight optimization'],
    },
  ];

  const advantages = [
    {
      title: 'High Current Capacity',
      description: 'Multiple copper laminations provide excellent current-carrying capability with minimal resistance.',
    },
    {
      title: 'Flexibility',
      description: 'Accommodates thermal expansion, vibration, and misalignment between connection points.',
    },
    {
      title: 'Low Inductance',
      description: 'Laminated construction minimizes inductance for improved electrical performance.',
    },
    {
      title: 'Space Efficient',
      description: 'Compact profile allows installation in tight spaces where rigid busbars cannot fit.',
    },
    {
      title: 'Thermal Performance',
      description: 'Excellent heat dissipation through multiple thin copper layers with large surface area.',
    },
    {
      title: 'Custom Solutions',
      description: 'Manufactured to customer specifications for optimal fit and performance.',
    },
  ];

  const specifications = [
    { label: 'Conductor Material', value: 'Electrolytic Copper (ETP)' },
    { label: 'Purity', value: '99.9%+ Cu' },
    { label: 'Lamination Thickness', value: '0.1 - 0.5 mm' },
    { label: 'Number of Laminations', value: '10 - 200+ layers' },
    { label: 'Current Rating', value: 'Up to 10,000 A' },
    { label: 'Insulation Options', value: 'Polyolefin heat shrink sleeves' },
    { label: 'Terminal Types', value: 'Drilled holes, Threaded studs, Custom' },
    { label: 'Plating Options', value: 'Tin, Nickel, Silver' },
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
              <span className="text-[#1D2931] font-medium">FLEXIBLE BUSBARS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Flexible Busbars
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              High-performance laminated copper connectors engineered for reliable power transmission
              in demanding applications. Our flexible busbars provide the perfect balance of
              electrical conductivity, mechanical flexibility, and thermal performance.
            </p>

            {/* What Are Flexible Busbars */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">What Are Flexible Busbars?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    Flexible busbars, also known as laminated busbars or flexible copper connectors,
                    are electrical conductors made from multiple thin copper foils or strips laminated
                    together. This construction provides the high current-carrying capacity of solid
                    copper with added flexibility for dynamic connections.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Unlike rigid busbars, flexible busbars can absorb mechanical stresses from thermal
                    expansion, vibration, and installation tolerances. This makes them ideal for
                    connections between fixed and moving components, or where precise alignment is
                    difficult to achieve.
                  </p>
                  <p className="text-[#6F7B83]">
                    Our flexible busbars are manufactured using high-purity electrolytic copper
                    with optional insulation and surface treatments to meet specific application
                    requirements.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Construction</h3>
                  <ul className="space-y-3">
                    {[
                      'Multiple thin copper laminations (0.1-0.5mm each)',
                      'Solid copper terminal ends for connections',
                      'Optional insulation between laminations',
                      'Surface plating for corrosion protection',
                      'Custom bend profiles and lengths',
                      'Drilled or threaded terminal options',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {applications.map((app) => (
                  <Link
                    key={app.title}
                    href={app.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-[#1D2931] mb-3 group-hover:text-[#EF290E] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[#6F7B83] mb-4">{app.description}</p>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-[#6F7B83]">
                          <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </section>

            {/* Advantages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Key Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{advantage.description}</p>
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

            {/* Industries */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Industries Served</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Power Distribution',
                  'Electric Vehicles',
                  'Renewable Energy',
                  'Industrial Equipment',
                  'Railway & Transit',
                  'Data Centers',
                  'Marine & Offshore',
                  'Aerospace',
                ].map((industry) => (
                  <div key={industry} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <span className="text-[#1D2931] font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Materials */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/materials/copper-materials/cucr1zr"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Electrolytic Copper (ETP)
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Standard high-purity copper for excellent electrical conductivity.
                  </p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Oxygen-Free Copper (OFC)
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Ultra-high purity copper for critical applications requiring maximum conductivity.
                  </p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Tinned Copper
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Tin-plated copper for enhanced corrosion resistance and solderability.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Custom Flexible Busbar Solutions</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Every application is unique. Contact our engineering team to discuss your specific
                requirements and receive a custom solution designed for your exact specifications.
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
