import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbars for Switchgear | Power Distribution | SVS Maverick',
  description: 'High-performance flexible busbars for switchgear, transformers, and power distribution equipment. Compensate for thermal expansion and vibration.',
};

export default function SwitchgearBusbarsPage() {
  const applications = [
    'Low and medium voltage switchgear',
    'Power transformers',
    'Circuit breaker connections',
    'Disconnect switch links',
    'Bus duct systems',
    'Generator connections',
    'Capacitor bank connections',
    'Reactor connections',
  ];

  const features = [
    {
      title: 'Thermal Expansion Compensation',
      description: 'Absorbs dimensional changes caused by heating during high-current operation, preventing stress on terminals and insulators.',
    },
    {
      title: 'Vibration Isolation',
      description: 'Flexible construction isolates vibrations from rotating machinery, preventing fatigue failures and loosening of connections.',
    },
    {
      title: 'Misalignment Tolerance',
      description: 'Accommodates manufacturing tolerances and installation variations between connection points.',
    },
    {
      title: 'Easy Installation',
      description: 'Flexible design simplifies installation in confined spaces and reduces assembly time compared to rigid alternatives.',
    },
  ];

  const specifications = [
    { label: 'Current Rating', value: '100 A - 10,000 A' },
    { label: 'Voltage Class', value: 'Up to 36 kV' },
    { label: 'Conductor Material', value: 'ETP Copper (99.9%+ purity)' },
    { label: 'Lamination Thickness', value: '0.1 - 0.3 mm' },
    { label: 'Insulation Class', value: 'Class B, F, or H' },
    { label: 'Temperature Range', value: '-40°C to +150°C' },
    { label: 'Terminal Options', value: 'Drilled holes, palm terminals, custom' },
    { label: 'Surface Treatment', value: 'Bare, tin-plated, silver-plated' },
  ];

  const designConsiderations = [
    {
      title: 'Current Capacity',
      points: [
        'Cross-sectional area determines ampacity',
        'Number and thickness of laminations',
        'Operating temperature limits',
        'Duty cycle considerations',
      ],
    },
    {
      title: 'Mechanical Requirements',
      points: [
        'Expected thermal movement range',
        'Vibration frequency and amplitude',
        'Installation space constraints',
        'Terminal orientation and spacing',
      ],
    },
    {
      title: 'Environmental Factors',
      points: [
        'Indoor or outdoor installation',
        'Humidity and corrosion resistance',
        'Altitude and air density',
        'Contamination and pollution levels',
      ],
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
              <span className="text-[#1D2931] font-medium">SWITCHGEAR</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Flexible Busbars for Switchgear
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Reliable high-current connections for power distribution equipment. Our flexible
              busbars compensate for thermal expansion and vibration while maintaining excellent
              electrical performance.
            </p>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-[#6F7B83]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Flexible Busbars */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Why Use Flexible Busbars in Switchgear?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    In switchgear and transformer applications, electrical connections must carry
                    high currents while accommodating mechanical stresses. Rigid busbars transmit
                    these stresses to insulators and terminals, potentially causing damage over time.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Flexible busbars act as stress-relief elements, absorbing thermal expansion,
                    contraction, and vibration. This protects sensitive equipment and extends the
                    service life of the entire installation.
                  </p>
                  <p className="text-[#6F7B83]">
                    The laminated construction also provides lower inductance compared to solid
                    conductors, which is beneficial in applications with high switching frequencies
                    or transient currents.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Common Applications</h3>
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

            {/* Design Considerations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Design Considerations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {designConsiderations.map((consideration, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-4">{consideration.title}</h3>
                    <ul className="space-y-2">
                      {consideration.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6F7B83]">
                          <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Insulation Options */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Insulation Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'PVC Sleeving', temp: 'Up to 105°C', desc: 'Cost-effective general purpose insulation' },
                  { name: 'Heat Shrink', temp: 'Up to 125°C', desc: 'Tight-fitting moisture-resistant covering' },
                  { name: 'Kapton Film', temp: 'Up to 200°C', desc: 'High-temperature polyimide insulation' },
                  { name: 'Silicone Rubber', temp: 'Up to 180°C', desc: 'Flexible high-temperature insulation' },
                ].map((option) => (
                  <div key={option.name} className="border border-gray-200 rounded-lg bg-white p-4">
                    <h3 className="font-semibold text-[#1D2931] mb-1">{option.name}</h3>
                    <p className="text-[#EF290E] text-sm font-medium mb-2">{option.temp}</p>
                    <p className="text-[#6F7B83] text-sm">{option.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/products/flexible-busbars/ev-battery-pack"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    EV Battery Pack Busbars
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Flexible busbars for electric vehicle battery applications.</p>
                </Link>
                <Link
                  href="/products/welding-systems-lamella-shunts"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Lamella Shunts
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Flexible copper shunts for welding equipment.</p>
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
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Custom Switchgear Busbars?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your specifications or drawings for a custom quotation. Our engineering
                team can help optimize the design for your specific application requirements.
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
