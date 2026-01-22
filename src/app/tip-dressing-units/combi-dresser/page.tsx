import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Combi Dresser-Changer Units | SVS Maverick',
  description: 'Combined tip dressing and cap changing systems - space-saving all-in-one solution for complete electrode maintenance in resistance welding.',
};

const keyFeatures = [
  {
    title: 'All-in-One Solution',
    description: 'Combines tip dressing and cap changing functions in a single compact unit, eliminating the need for separate equipment.',
  },
  {
    title: 'Space Efficient',
    description: 'Single footprint for both functions saves valuable floor space in crowded production cells and workcells.',
  },
  {
    title: 'Reduced Cycle Time',
    description: 'Optimized sequencing allows dressing and changing to occur in rapid succession without repositioning delays.',
  },
  {
    title: 'Robot Optimized',
    description: 'Single tool center point (TCP) for robot programming simplifies integration and reduces teaching time.',
  },
];

const configurations = [
  {
    name: 'Combi Standard',
    description: 'Entry-level combined unit for standard production requirements.',
    specs: [
      'Dresser + single-sided cap changer',
      'Magazine capacity: 30 caps',
      'Pneumatic drive',
      'Basic digital I/O control',
    ],
    ideal: 'Small to medium volume production',
  },
  {
    name: 'Combi Plus',
    description: 'Enhanced combined unit with dual-sided cap changing.',
    specs: [
      'Dresser + dual-sided cap changer',
      'Magazine capacity: 60 caps total',
      'Pneumatic drive with speed control',
      'Fieldbus communication',
    ],
    ideal: 'Medium to high volume production',
    popular: true,
  },
  {
    name: 'Combi Pro',
    description: 'Premium combined unit for high-performance applications.',
    specs: [
      'Dresser + high-capacity cap changer',
      'Magazine capacity: 100+ caps',
      'Electric servo drive option',
      'Full robot integration package',
    ],
    ideal: 'High volume automotive production',
  },
];

const technicalSpecs = [
  { label: 'Electrode Cap Range', value: '13 - 20 mm (ISO taper)' },
  { label: 'Dressing Time', value: '1 - 2 seconds' },
  { label: 'Cap Change Time', value: '3 - 5 seconds' },
  { label: 'Combined Cycle Time', value: '5 - 8 seconds' },
  { label: 'Magazine Capacity', value: '30 - 100+ caps' },
  { label: 'Air Pressure Required', value: '5 - 7 bar' },
  { label: 'Drive Options', value: 'Pneumatic / Electric' },
  { label: 'Control Interface', value: 'Digital I/O / Fieldbus' },
  { label: 'Dimensions (L x W x H)', value: '~600 x 400 x 500 mm' },
  { label: 'Weight', value: '~45 - 80 kg' },
];

const operationModes = [
  {
    title: 'Dress Only',
    description: 'Perform electrode tip dressing to restore cap geometry during regular production intervals.',
    steps: ['Robot positions electrodes', 'Dresser mills cap faces', 'Chips are collected', 'Robot returns to welding'],
  },
  {
    title: 'Change Only',
    description: 'Replace worn electrode caps when they reach end of service life after multiple dressing cycles.',
    steps: ['Robot positions electrodes', 'Old caps are removed', 'New caps are inserted', 'Robot returns to welding'],
  },
  {
    title: 'Dress + Change',
    description: 'Perform final dressing before cap change to maximize material recovery from worn caps.',
    steps: ['Robot positions for dressing', 'Final dress cycle', 'Reposition for cap change', 'Complete cap replacement'],
  },
];

const advantages = [
  'Single footprint vs. two separate machines',
  'One robot tool center point for simplified programming',
  'Reduced robot travel time between stations',
  'Lower total investment cost',
  'Simplified maintenance with common components',
  'Single air and electrical connection point',
  'Coordinated control system',
  'Easier cell layout and integration',
];

const mountingOptions = [
  {
    title: 'Floor Mount',
    description: 'Standard floor-standing installation with adjustable height',
  },
  {
    title: 'Pedestal Mount',
    description: 'Elevated mounting for improved robot access angles',
  },
  {
    title: 'Wall Mount',
    description: 'Wall-mounted option for space-constrained cells',
  },
  {
    title: 'Custom Integration',
    description: 'Custom mounting solutions for specific cell layouts',
  },
];

export default function CombiDresserPage() {
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
              <span className="text-[#1D2931] font-medium">COMBI DRESSER-CHANGER</span>
            </nav>

            {/* Title */}
            <div className="inline-block px-3 py-1 bg-[#EF290E] text-white text-sm font-medium rounded-full mb-4">
              All-in-One Solution
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Combi Dresser-Changer Units
            </h1>
            <p className="text-xl text-[#1D2931] mb-8 max-w-3xl">
              Combined tip dressing and cap changing in one space-saving unit. The ultimate
              solution for complete electrode maintenance with minimal footprint and reduced
              robot travel time.
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
                href="/tip-dressing-units"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View All Products
              </Link>
            </div>

            {/* Key Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Why Choose a Combi Unit?</h2>
              <p className="text-[#6F7B83] mb-8">
                The combi dresser-changer combines the best of both worlds in one efficient package
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyFeatures.map((feature) => (
                  <div key={feature.title} className="border border-gray-200 rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#6F7B83]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Description */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Complete Electrode Maintenance</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    Our combi dresser-changer units integrate tip dressing and cap changing functions
                    into a single, compact system. This innovative design provides complete electrode
                    maintenance capability while saving valuable floor space in your production cell.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    The unit can perform dressing-only, changing-only, or combined dress-and-change
                    operations based on your process requirements. Smart sequencing minimizes total
                    cycle time and robot travel distance.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white text-center">
                      <div className="text-2xl font-bold text-[#EF290E] mb-1">50%</div>
                      <div className="text-xs text-[#6F7B83]">Less Floor Space</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white text-center">
                      <div className="text-2xl font-bold text-[#EF290E] mb-1">30%</div>
                      <div className="text-xs text-[#6F7B83]">Faster Cycles</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white text-center">
                      <div className="text-2xl font-bold text-[#EF290E] mb-1">1</div>
                      <div className="text-xs text-[#6F7B83]">Robot TCP</div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Advantages Over Separate Units</h3>
                  <ul className="space-y-3">
                    {advantages.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-[#6F7B83]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Operation Modes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Operation Modes</h2>
              <p className="text-[#6F7B83] mb-8">
                Flexible operation to match your electrode maintenance strategy
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {operationModes.map((mode) => (
                  <div key={mode.title} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <div className="bg-[#1D2931] text-white p-4">
                      <h3 className="text-lg font-bold">{mode.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-[#6F7B83] mb-4">{mode.description}</p>
                      <h4 className="font-semibold text-[#1D2931] mb-3">Process Steps</h4>
                      <ol className="space-y-2">
                        {mode.steps.map((step, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="w-5 h-5 rounded-full bg-[#EF290E] text-white flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-[#6F7B83]">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Configurations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Available Configurations</h2>
              <p className="text-[#6F7B83] mb-8">
                Choose the configuration that matches your production volume and requirements
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {configurations.map((config) => (
                  <div
                    key={config.name}
                    className={`border rounded-lg bg-white overflow-hidden ${
                      config.popular ? 'border-[#EF290E] border-2' : 'border-gray-200'
                    }`}
                  >
                    {config.popular && (
                      <div className="bg-[#EF290E] text-white text-center py-1 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1D2931] mb-2">{config.name}</h3>
                      <p className="text-[#6F7B83] mb-4">{config.description}</p>
                      <ul className="space-y-2 mb-4">
                        {config.specs.map((spec, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span className="text-[#6F7B83]">{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm text-[#6F7B83] mb-4">
                        <span className="font-semibold text-[#1D2931]">Ideal for:</span> {config.ideal}
                      </div>
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

            {/* Technical Specifications & Mounting Options */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
                  <p className="text-[#6F7B83] mb-6">
                    General specifications for our combi dresser-changer range. Exact values
                    vary by configuration. Contact us for detailed specifications.
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
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Mounting Options</h2>
                  <div className="space-y-4">
                    {mountingOptions.map((option) => (
                      <div key={option.title} className="border border-gray-200 rounded-lg bg-white p-6">
                        <h3 className="font-bold text-[#1D2931] mb-2">{option.title}</h3>
                        <p className="text-sm text-[#6F7B83]">{option.description}</p>
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
                  href="/tip-dressing-units/electrode-cap-dressing-unit"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Electrode Cap Dressers
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Standalone tip dressing units for dedicated applications</p>
                </Link>
                <Link
                  href="/tip-dressing-units/cap-changer"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Cap Changer Systems
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Dedicated automatic cap changing systems</p>
                </Link>
                <Link
                  href="/tip-dressing-units/dressing-tools"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Dressing Tools & Cutters
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Replacement cutters and blades for all dressing units</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Simplify Your Electrode Maintenance</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Discover how a combi dresser-changer can streamline your electrode maintenance
                and save valuable floor space in your production cell.
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
