import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Electrode Cap Dressing Units | SVS Maverick',
  description: 'Professional electrode cap dressers - handheld, stationary, and swing-arm variants for precision tip maintenance in resistance welding applications.',
};

const variants = [
  {
    name: 'Handheld / Mobile Dressers',
    description: 'Portable tip dressers ideal for manual welding operations and flexible production environments.',
    features: [
      'Lightweight and ergonomic design',
      'Pneumatic or electric drive options',
      'Quick-change cutter system',
      'Suitable for manual welding guns',
      'Portable for multiple workstations',
      'Simple operation, minimal training required',
    ],
    applications: ['Manual spot welding', 'Low-volume production', 'Repair and maintenance', 'Mobile operations'],
  },
  {
    name: 'Stationary Dressers',
    description: 'Fixed-mount tip dressers for high-volume production lines and automated welding cells.',
    features: [
      'Robust industrial construction',
      'High dressing precision and repeatability',
      'Integrated chip collection system',
      'Adjustable dressing parameters',
      'Quick cycle times',
      'Robot interface ready',
    ],
    applications: ['Automated production lines', 'Robotic welding cells', 'High-volume manufacturing', 'Automotive body shops'],
  },
  {
    name: 'Swing-Arm Dressers',
    description: 'Articulated swing-arm units that combine flexibility with fixed installation benefits.',
    features: [
      'Articulated arm for positioning flexibility',
      'Space-efficient design',
      'Can reach multiple welding stations',
      'Pneumatic or electric actuation',
      'Quick positioning and retraction',
      'Reduced floor space requirements',
    ],
    applications: ['Multi-station setups', 'Space-constrained installations', 'Semi-automated lines', 'Flexible manufacturing cells'],
  },
];

const technicalSpecs = [
  { label: 'Electrode Diameter Range', value: '12 - 25 mm' },
  { label: 'Dressing Time', value: '0.5 - 2 seconds' },
  { label: 'Drive Options', value: 'Pneumatic / Electric' },
  { label: 'Air Pressure (Pneumatic)', value: '5 - 7 bar' },
  { label: 'Motor Power (Electric)', value: '0.25 - 0.75 kW' },
  { label: 'Rotation Speed', value: '300 - 600 RPM' },
  { label: 'Cutter Material', value: 'HSS / Carbide' },
  { label: 'Operating Temperature', value: '-10 to +50 C' },
];

const keyAdvantages = [
  'Restores electrode contact face to optimal geometry',
  'Extends electrode cap life by 3-5 times',
  'Ensures consistent weld nugget formation',
  'Reduces electrode consumption costs significantly',
  'Quick dressing cycle - typically under 2 seconds',
];

const howItWorks = [
  'Electrodes are positioned in the dresser',
  'Pneumatic or electric motor drives the cutter',
  'Rotating cutter removes deformed surface material',
  'Precision depth control ensures consistent results',
  'Chips are collected and removed automatically',
  'Dressed electrodes return to optimal geometry',
];

const optionsAccessories = [
  {
    title: 'Cutter Types',
    items: ['Standard flat face', 'Radius cutters', 'Pointed electrode profiles', 'Custom geometries'],
  },
  {
    title: 'Drive Options',
    items: ['Pneumatic motor', 'Electric servo motor', 'Manual operation'],
  },
  {
    title: 'Mounting Options',
    items: ['Floor stand', 'Wall mount', 'Robot mount bracket', 'Portable base'],
  },
  {
    title: 'Control Options',
    items: ['Basic on/off control', 'PLC interface', 'Robot communication', 'Dressing counter'],
  },
];

export default function ElectrodeCapDressingUnitPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931]">TIP DRESSING UNITS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">ELECTRODE CAP DRESSING UNITS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Electrode Cap Dressing Units
            </h1>
            <p className="text-xl text-[#1D2931] mb-8 max-w-3xl">
              Precision tip dressers that restore electrode caps to optimal geometry, ensuring
              consistent weld quality and extended electrode life. Available in handheld,
              stationary, and swing-arm configurations.
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
                href="/tip-dressing-units/dressing-tools"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Dressing Tools
              </Link>
            </div>

            {/* Product Description */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Precision Electrode Maintenance</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    Our electrode cap dressing units are engineered to restore welding electrode caps
                    to their original geometry with precision accuracy. The dressing process removes
                    the deformed and contaminated surface layer, exposing fresh copper material and
                    restoring optimal current flow for consistent weld quality.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Each dressing unit features a robust drive system, precision-ground cutters, and
                    an adjustable dressing depth control. The modular design allows for quick cutter
                    changes and easy maintenance, minimizing production downtime.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="font-semibold text-[#1D2931] mb-4">Key Advantages</h3>
                  <ul className="space-y-3">
                    {keyAdvantages.map((item, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">How It Works</h2>
              <div className="border border-gray-200 rounded-lg p-6 bg-white">
                <ol className="space-y-3">
                  {howItWorks.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-[#6F7B83]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Variants */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Available Variants</h2>
              <p className="text-[#6F7B83] mb-8">
                Choose the configuration that best suits your production environment and requirements
              </p>
              <div className="space-y-6">
                {variants.map((variant, index) => (
                  <div key={variant.name} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="w-10 h-10 rounded-full bg-[#EF290E] text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-[#1D2931]">{variant.name}</h3>
                      </div>
                      <p className="text-[#6F7B83] mb-6">{variant.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[#1D2931] mb-3">Features</h4>
                          <ul className="space-y-2">
                            {variant.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                <span className="text-[#6F7B83]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1D2931] mb-3">Applications</h4>
                          <ul className="space-y-2">
                            {variant.applications.map((app, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="w-2 h-2 bg-[#1D2931] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                <span className="text-[#6F7B83]">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
                  <p className="text-[#6F7B83] mb-6">
                    Our electrode cap dressing units are available with various specifications to match
                    your specific requirements. Contact us for detailed technical data sheets and
                    customization options.
                  </p>
                  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {technicalSpecs.map((spec, index) => (
                          <tr key={spec.label} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                            <td className="px-6 py-4 text-[#6F7B83]">{spec.label}</td>
                            <td className="px-6 py-4 text-[#1D2931] font-semibold text-right">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-[#6F7B83] mt-4">
                    * Specifications may vary by model. Contact us for specific product datasheets.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Options & Accessories</h2>
                  <div className="space-y-4">
                    {optionsAccessories.map((category) => (
                      <div key={category.title} className="border border-gray-200 rounded-lg bg-white p-6">
                        <h3 className="font-bold text-[#1D2931] mb-3">{category.title}</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {category.items.map((item) => (
                            <li key={item} className="flex items-center text-sm text-[#6F7B83]">
                              <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/tip-dressing-units/dressing-tools"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Dressing Tools & Cutters
                  </h3>
                  <p className="text-[#6F7B83] text-sm">High-quality milling cutters and blades for all dressing units</p>
                </Link>
                <Link
                  href="/tip-dressing-units/cap-changer"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Cap Changer Systems
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Automatic electrode cap changing for high-volume production</p>
                </Link>
                <Link
                  href="/tip-dressing-units/combi-dresser"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Combi Dresser-Changer
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Combined dressing and changing in one compact unit</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Help Selecting the Right Dresser?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our welding specialists can help you choose the optimal electrode cap dressing unit
                for your specific application and production requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Contact Our Experts
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
