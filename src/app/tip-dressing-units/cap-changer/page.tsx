import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Cap Changer Systems | SVS Maverick',
  description: 'Automatic electrode cap changing systems - mobile and stationary configurations for high-volume resistance welding production.',
};

const variants = [
  {
    name: 'Mobile Cap Changer',
    description: 'Portable automatic cap changing systems designed for flexible manufacturing environments where mobility is essential.',
    features: [
      'Wheeled portable design',
      'Self-contained pneumatic system',
      'Magazine capacity: 20-50 caps',
      'Quick positioning at workstation',
      'Suitable for multiple welding guns',
      'Easy cap magazine reload',
    ],
    benefits: [
      'Flexibility to serve multiple stations',
      'Lower initial investment',
      'Quick deployment and relocation',
      'Ideal for low to medium volume production',
    ],
  },
  {
    name: 'Stationary Cap Changer',
    description: 'Fixed-installation automatic cap changers optimized for high-speed robotic welding cells and automated production lines.',
    features: [
      'Robust industrial construction',
      'Large cap magazine capacity (50-200 caps)',
      'Robot interface integration',
      'Automatic used cap ejection',
      'Integrated chip collection',
      'Quick cycle time (< 5 seconds)',
    ],
    benefits: [
      'Maximum production efficiency',
      'Seamless robot integration',
      'Minimal operator intervention',
      'Ideal for high-volume automotive production',
    ],
  },
];

const technicalSpecs = [
  { label: 'Cap Size Range', value: '13 mm - 20 mm (ISO taper)' },
  { label: 'Change Cycle Time', value: '3 - 5 seconds' },
  { label: 'Magazine Capacity', value: '20 - 200 caps (model dependent)' },
  { label: 'Air Pressure Required', value: '5 - 7 bar' },
  { label: 'Air Consumption', value: '~10 Nl per cycle' },
  { label: 'Cap Removal Force', value: 'Up to 5000 N' },
  { label: 'Cap Insertion Force', value: 'Up to 3000 N' },
  { label: 'Control Interface', value: 'Digital I/O / Fieldbus' },
];

const processSteps = [
  {
    step: 1,
    title: 'Cap Removal',
    description: 'Worn electrode caps are gripped and pulled from the electrode shank using pneumatic force.',
  },
  {
    step: 2,
    title: 'Used Cap Ejection',
    description: 'Removed caps are automatically ejected into a collection bin for recycling.',
  },
  {
    step: 3,
    title: 'New Cap Positioning',
    description: 'Fresh caps are indexed from the magazine into the insertion position.',
  },
  {
    step: 4,
    title: 'Cap Insertion',
    description: 'New caps are pressed onto the electrode shanks with controlled force for secure fit.',
  },
];

const keyBenefits = [
  'Eliminates manual cap changing - reduces operator fatigue',
  'Consistent cap installation force and quality',
  'Minimizes production downtime for cap changes',
  'Large magazine capacity reduces reload frequency',
  'Robot integration enables fully automated operation',
  'Used cap collection simplifies recycling',
  'Reduces risk of electrode shank damage',
  'Improves overall equipment effectiveness (OEE)',
];

const compatibleRobots = ['ABB', 'FANUC', 'KUKA', 'Yaskawa', 'Kawasaki', 'Universal Robots'];

const communicationProtocols = ['Digital I/O', 'PROFINET', 'EtherNet/IP', 'DeviceNet', 'Profibus', 'Custom protocols'];

const options = [
  {
    title: 'High-Capacity Magazine',
    description: 'Extended magazine for up to 200 caps per side',
  },
  {
    title: 'Used Cap Counter',
    description: 'Track electrode usage for quality control',
  },
  {
    title: 'Quick-Change Magazine',
    description: 'Tool-free magazine swap for rapid reload',
  },
  {
    title: 'Integrated Air Blow',
    description: 'Clean electrode shank before new cap insertion',
  },
];

export default function CapChangerPage() {
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
              <span className="text-[#1D2931] font-medium">CAP CHANGER SYSTEMS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Cap Changer Systems
            </h1>
            <p className="text-xl text-[#1D2931] mb-8 max-w-3xl">
              Automatic electrode cap changing systems for high-volume resistance welding production.
              Available in mobile and stationary configurations with seamless robot integration
              for maximum production efficiency.
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
                href="/tip-dressing-units/combi-dresser"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Combi Units
              </Link>
            </div>

            {/* Product Description */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Automatic Cap Changing</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    When electrode caps reach the end of their service life, they need to be replaced
                    quickly and efficiently to minimize production downtime. Our automatic cap changer
                    systems remove worn caps and install fresh ones in seconds, without operator intervention.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Designed for integration with robotic welding cells, our cap changers feature
                    robust construction, high-capacity cap magazines, and reliable pneumatic operation.
                    The systems are compatible with all standard ISO taper electrode caps.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                      <div className="text-3xl font-bold text-[#EF290E] mb-2">&lt;5s</div>
                      <div className="text-sm text-[#6F7B83]">Change Cycle Time</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                      <div className="text-3xl font-bold text-[#EF290E] mb-2">200+</div>
                      <div className="text-sm text-[#6F7B83]">Cap Magazine Capacity</div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-[#6F7B83]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">How It Works</h2>
              <p className="text-[#6F7B83] mb-8">
                The cap changing process is fully automatic and completes in seconds
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="border border-gray-200 rounded-lg p-6 bg-white">
                    <div className="w-12 h-12 rounded-full bg-[#EF290E] text-white flex items-center justify-center font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2">{item.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Configurations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Available Configurations</h2>
              <p className="text-[#6F7B83] mb-8">
                Choose between mobile flexibility or stationary high-volume production
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {variants.map((variant) => (
                  <div key={variant.name} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <div className="bg-[#1D2931] text-white p-4">
                      <h3 className="text-xl font-bold">{variant.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-[#6F7B83] mb-6">{variant.description}</p>

                      <h4 className="font-semibold text-[#1D2931] mb-3">Features</h4>
                      <ul className="space-y-2 mb-6">
                        {variant.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span className="text-[#6F7B83]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-semibold text-[#1D2931] mb-3">Benefits</h4>
                      <ul className="space-y-2 mb-6">
                        {variant.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="w-2 h-2 bg-[#1D2931] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span className="text-[#6F7B83]">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-[#EF290E] font-semibold hover:underline"
                      >
                        Request Quote
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications & Robot Integration */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
                  <p className="text-[#6F7B83] mb-6">
                    Our cap changer systems are engineered for reliability and performance in demanding
                    production environments. Available specifications vary by model.
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
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Robot Integration</h2>
                  <div className="border border-gray-200 rounded-lg bg-white p-6 mb-6">
                    <h3 className="font-bold text-[#1D2931] mb-4">Compatible Robots</h3>
                    <p className="text-[#6F7B83] mb-4">
                      Our cap changer systems integrate seamlessly with all major robot brands
                      used in automotive manufacturing.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {compatibleRobots.map((brand) => (
                        <div key={brand} className="bg-[#F4F3EE] rounded-lg p-3 text-center">
                          <span className="font-medium text-[#1D2931]">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="font-bold text-[#1D2931] mb-4">Communication Interfaces</h3>
                    <ul className="space-y-2">
                      {communicationProtocols.map((protocol) => (
                        <li key={protocol} className="flex items-center text-sm text-[#6F7B83]">
                          <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2"></span>
                          {protocol}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Options & Accessories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Options & Accessories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {options.map((option) => (
                  <div key={option.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="font-bold text-[#1D2931] mb-2">{option.title}</h3>
                    <p className="text-sm text-[#6F7B83]">{option.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/tip-dressing-units/electrode-cap-dressing-unit"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Electrode Cap Dressers
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Restore electrode caps to optimal geometry between changes</p>
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
                <Link
                  href="/products/welding-products"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Electrode Caps
                  </h3>
                  <p className="text-[#6F7B83] text-sm">High-quality electrode caps for resistance welding</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Upgrade Your Electrode Management</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us to discuss how automatic cap changing can improve your production
                efficiency and reduce electrode-related downtime.
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
