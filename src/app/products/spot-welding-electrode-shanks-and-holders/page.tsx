import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Spot Welding Electrode Shanks & Holders | SVS Maverick',
  description: 'Precision electrode shanks and holder adapters for spot welding. WIRBALIT copper alloy components for reliable electrode mounting and current transfer.',
};

export default function SpotWeldingElectrodeShanksAndHoldersPage() {
  const features = [
    {
      title: 'Precision Tapers',
      description: 'Accurate taper geometry ensures secure electrode mounting and optimal electrical contact.',
    },
    {
      title: 'Superior Conductivity',
      description: 'Premium copper alloys minimize resistance losses for efficient current transfer.',
    },
    {
      title: 'Integrated Cooling',
      description: 'Water cooling passages maintain optimal operating temperatures during continuous welding.',
    },
    {
      title: 'Universal Compatibility',
      description: 'Standard ISO tapers ensure compatibility with electrodes from all major manufacturers.',
    },
  ];

  const specifications = [
    { label: 'Shank Tapers', value: 'CM1, CM2, CM3, CM4 (ISO 5821)' },
    { label: 'Body Diameters', value: '16mm - 38mm' },
    { label: 'Shank Lengths', value: '50mm - 200mm' },
    { label: 'Cooling', value: 'Internal water circulation' },
    { label: 'Mounting Options', value: 'Threaded, Press-fit, Quick-change' },
    { label: 'Standards', value: 'ISO 5821, DIN EN ISO 5182' },
  ];

  const materials = [
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Standard copper chromium zirconium alloy providing excellent conductivity and mechanical properties.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'WIRBALIT C (CuCrZr)',
      description: 'Enhanced alloy for improved wear resistance at the taper interface.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Copper-Steel Composite',
      description: 'Steel-reinforced construction for maximum strength in high-force applications.',
      link: '/materials/copper-materials',
    },
  ];

  const productTypes = [
    {
      name: 'Straight Shanks',
      description: 'Standard straight configuration for direct electrode mounting.',
    },
    {
      name: 'Offset Shanks',
      description: 'Angled designs for improved access to restricted weld locations.',
    },
    {
      name: 'Adapter Holders',
      description: 'Taper conversion adapters for using different electrode sizes.',
    },
    {
      name: 'Quick-Change Holders',
      description: 'Rapid electrode change systems for high-volume production.',
    },
  ];

  const applications = [
    'Robotic spot welding systems',
    'Manual welding guns',
    'Pedestal welding machines',
    'Multi-spot welding equipment',
    'Press-type resistance welders',
    'Custom welding tooling',
    'Production line automation',
    'Maintenance and replacement',
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
              <Link href="/products/welding-technique/spot-welding" className="text-[#6F7B83] hover:text-[#1D2931]">SPOT WELDING</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">ELECTRODE SHANKS & HOLDERS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Electrode Shanks & Holder Adapters
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-4xl">
              Precision-manufactured electrode shanks and holder adapters for spot welding applications.
              Our components ensure secure electrode mounting, reliable current transfer, and efficient
              cooling for consistent weld quality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#D42208] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Specifications
              </Link>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Features & Benefits</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our shanks and holders are engineered for reliable electrode mounting and optimal electrical performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Types Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Product Types</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                We offer a complete range of shank and holder configurations to suit your welding system and electrode requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                    <p className="text-[#6F7B83] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Materials Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Premium WIRBALIT Copper Alloys</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our shanks and holders are manufactured from WIRBALIT copper alloys,
                engineered to deliver optimal electrical and thermal performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materials.map((material, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#EF290E] mb-2">{material.name}</h3>
                    <p className="text-[#6F7B83] text-sm mb-4">{material.description}</p>
                    <Link
                      href={material.link}
                      className="inline-flex items-center text-[#EF290E] font-medium text-sm hover:underline"
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

            {/* Standard Taper Sizes Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Standard Taper Sizes</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                We manufacture shanks and holders in all standard ISO 5821 taper sizes for maximum compatibility.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-2">CM1</div>
                  <p className="text-[#1D2931] font-medium">1:10 Taper</p>
                  <p className="text-sm text-[#6F7B83] mt-2">Light duty applications</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-2">CM2</div>
                  <p className="text-[#1D2931] font-medium">1:10 Taper</p>
                  <p className="text-sm text-[#6F7B83] mt-2">Standard applications</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-2">CM3</div>
                  <p className="text-[#1D2931] font-medium">1:10 Taper</p>
                  <p className="text-sm text-[#6F7B83] mt-2">Heavy duty applications</p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-[#EF290E] mb-2">CM4</div>
                  <p className="text-[#1D2931] font-medium">1:10 Taper</p>
                  <p className="text-sm text-[#6F7B83] mt-2">Extra heavy duty</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications and Applications */}
            <div id="specifications" className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Specifications */}
                <div>
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

                {/* Applications */}
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Solutions CTA */}
            <div className="mb-16 border border-gray-200 rounded-lg bg-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">Need Custom Shanks or Holders?</h3>
                  <p className="text-[#6F7B83]">
                    We can manufacture custom shanks and holders to match your specific equipment and electrode requirements.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors whitespace-nowrap"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Request a Quote</h3>
              <p className="text-[#6F7B83] mb-6">
                Contact us for pricing and availability of electrode shanks and holders for your welding application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-block border-2 border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
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
