import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Projection Welding Replaceable Electrodes | SVS Maverick',
  description: 'Precision projection welding electrodes for fastener welding and multi-point joining. WIRBALIT copper alloy electrodes for automotive and industrial applications.',
};

export default function ProjectionWeldingReplaceableElectrodesPage() {
  const features = [
    {
      title: 'Precision Alignment',
      description: 'Tight tolerances ensure accurate electrode positioning for consistent weld placement.',
    },
    {
      title: 'High Current Capacity',
      description: 'Premium copper alloys handle high welding currents without overheating.',
    },
    {
      title: 'Extended Service Life',
      description: 'Wear-resistant materials provide excellent electrode life and reduced changeover frequency.',
    },
    {
      title: 'Quick Replacement',
      description: 'Modular designs allow fast electrode changes to minimize production downtime.',
    },
  ];

  const specifications = [
    { label: 'Electrode Styles', value: 'Flat Face, Domed, Grooved, Custom' },
    { label: 'Face Diameters', value: '6mm - 50mm' },
    { label: 'Mounting Types', value: 'Press-fit, Threaded, Bayonet' },
    { label: 'Cooling', value: 'Internal water cooling compatible' },
    { label: 'Current Ratings', value: 'Up to 50,000A' },
    { label: 'Standards', value: 'ISO 5182, Customer specifications' },
  ];

  const materials = [
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Standard copper chromium zirconium for most projection welding applications.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'WIRBALIT C (CuCrZr)',
      description: 'Enhanced alloy for improved wear resistance when welding coated materials.',
      link: '/materials/copper-materials',
    },
    {
      name: 'WIRBALIT A (CuCoBe)',
      description: 'Maximum hardness for demanding applications with high-strength steels.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Dispersion Hardened Copper',
      description: 'Al2O3 reinforced copper for extreme wear resistance with aluminum projections.',
      link: '/materials/copper-materials',
    },
  ];

  const electrodeTypes = [
    {
      name: 'Flat Face Electrodes',
      description: 'Standard configuration for embossed projections and general fastener welding.',
    },
    {
      name: 'Domed Face Electrodes',
      description: 'Radius face design for welding on crowned or curved surfaces.',
    },
    {
      name: 'Grooved Electrodes',
      description: 'Slotted designs to accommodate weld nuts and special fasteners.',
    },
    {
      name: 'Locating Electrodes',
      description: 'Precision locating features for accurate fastener positioning.',
    },
  ];

  const applications = [
    {
      name: 'Weld Nut Welding',
      description: 'Joining threaded nuts to sheet metal for assembly applications.',
    },
    {
      name: 'Weld Stud Welding',
      description: 'Attaching studs and threaded fasteners to panels and structures.',
    },
    {
      name: 'Multi-Point Joining',
      description: 'Simultaneous welding of multiple projections in a single operation.',
    },
    {
      name: 'Cross-Wire Welding',
      description: 'Joining wire mesh and grid structures at intersection points.',
    },
  ];

  const industries = [
    'Automotive body assembly',
    'Appliance manufacturing',
    'HVAC equipment production',
    'Electrical panel assembly',
    'Furniture manufacturing',
    'Construction hardware',
    'Wire mesh and grating production',
    'General metal fabrication',
  ];

  const customSolutions = [
    'Custom face geometries for special fasteners',
    'Locating features for precise positioning',
    'Multi-point electrode assemblies',
    'Integrated cooling solutions',
    'Quick-change mounting systems',
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
              <Link href="/products/welding-technique/projection-welding" className="text-[#6F7B83] hover:text-[#1D2931]">PROJECTION WELDING</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">REPLACEABLE ELECTRODES</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Projection Welding Replaceable Electrodes
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-4xl">
              Precision-engineered projection welding electrodes for fastener welding and multi-point joining.
              Our electrodes deliver consistent weld quality, extended service life, and reliable
              performance in high-volume production environments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded-lg hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Specifications
              </Link>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Features & Benefits</h2>
              <p className="text-[#6F7B83] mb-8 max-w-3xl">
                Our projection welding electrodes are designed for maximum performance and reliability in demanding production environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                        <p className="text-[#6F7B83]">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Electrode Types Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Electrode Types</h2>
              <p className="text-[#6F7B83] mb-8 max-w-3xl">
                We manufacture projection welding electrodes in various configurations to match your specific fastener and application requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {electrodeTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                    <p className="text-[#6F7B83]">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Welding Applications Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Welding Applications</h2>
              <p className="text-[#6F7B83] mb-8 max-w-3xl">
                Our projection welding electrodes are designed for a wide range of fastener and multi-point welding applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {applications.map((app, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{app.name}</h3>
                    <p className="text-[#6F7B83]">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium WIRBALIT Copper Alloys */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Premium WIRBALIT Copper Alloys</h2>
              <p className="text-[#6F7B83] mb-8 max-w-3xl">
                Our projection welding electrodes are manufactured from WIRBALIT copper alloys,
                precision-engineered to deliver optimal performance for each application.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materials.map((material, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{material.name}</h3>
                    <p className="text-[#6F7B83] mb-4">{material.description}</p>
                    <Link
                      href={material.link}
                      className="inline-flex items-center text-[#EF290E] font-medium hover:underline"
                    >
                      View Material Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div id="specifications" className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="py-4 px-6 text-[#6F7B83]">{spec.label}</td>
                        <td className="py-4 px-6 text-[#1D2931] font-medium text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industries Served */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Industries Served</h2>
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#EF290E] mr-3">•</span>
                      <span className="text-[#6F7B83]">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Custom Electrode Solutions */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Custom Electrode Solutions</h2>
              <p className="text-[#6F7B83] mb-8 max-w-3xl">
                Every projection welding application is unique. Our engineering team can design and
                manufacture custom electrodes tailored to your specific fastener geometry,
                workpiece configuration, and production requirements.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-4">Custom Capabilities</h3>
                  <ul className="space-y-3">
                    {customSolutions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-4">Engineering Support</h3>
                  <p className="text-[#6F7B83] mb-6">
                    Our experienced welding engineers can assist with electrode selection, custom design,
                    and process optimization to ensure optimal weld quality and electrode life.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#EF290E] font-medium hover:underline"
                  >
                    Contact Our Engineering Team
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">
                Ready to Optimize Your Projection Welding Process?
              </h2>
              <p className="text-[#6F7B83] mb-6 max-w-2xl">
                Contact our projection welding specialists to find the right electrodes for your application.
                We offer standard and custom solutions for all fastener welding requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
                >
                  Get Expert Advice
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded-lg hover:bg-[#1D2931] hover:text-white transition-colors"
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
