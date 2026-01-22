import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'MIG/MAG Welding Nozzle Holders | SVS Maverick',
  description: 'Premium nozzle holders and tip adapters for MIG/MAG welding torches. High-quality copper alloy components for reliable torch assembly.',
};

export default function MigMagWeldingNozzleHoldersPage() {
  const features = [
    {
      title: 'Secure Nozzle Retention',
      description: 'Precision-machined seats ensure reliable nozzle mounting and gas seal integrity.',
    },
    {
      title: 'Excellent Current Transfer',
      description: 'High-conductivity materials minimize electrical resistance for efficient welding.',
    },
    {
      title: 'Heat Resistance',
      description: 'Premium alloys maintain dimensional stability under high-temperature welding conditions.',
    },
    {
      title: 'OEM Compatibility',
      description: 'Direct replacement for all major torch manufacturers including Binzel, Fronius, and Lincoln.',
    },
  ];

  const specifications = [
    { label: 'Holder Types', value: 'Standard, Heavy Duty, Robotic' },
    { label: 'Thread Sizes', value: 'M6, M8, M10, M12' },
    { label: 'Nozzle Mounting', value: 'Threaded, Press-fit, Spring-loaded' },
    { label: 'Torch Compatibility', value: 'Binzel, Fronius, Lincoln, Miller, ESAB' },
    { label: 'Current Rating', value: 'Up to 600A' },
    { label: 'Standards', value: 'OEM specifications, ISO 9001' },
  ];

  const materials = [
    {
      name: 'E-Cu (Pure Copper)',
      description: 'Standard copper providing excellent electrical conductivity for general applications.',
      link: '/materials/copper-materials',
    },
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Copper chromium zirconium for enhanced heat resistance and durability.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'Brass Alloys',
      description: 'Selected brass alloys for specific torch designs and applications.',
      link: '/materials/copper-materials',
    },
  ];

  const holderTypes = [
    {
      name: 'Standard Nozzle Holders',
      description: 'General purpose holders for manual MIG/MAG welding torches.',
    },
    {
      name: 'Heavy Duty Holders',
      description: 'Reinforced construction for high-amperage industrial applications.',
    },
    {
      name: 'Robotic Torch Holders',
      description: 'Precision holders designed for automated welding systems.',
    },
    {
      name: 'Quick-Change Holders',
      description: 'Rapid nozzle change systems for high-volume production.',
    },
  ];

  const applications = [
    'Manual MIG/MAG welding torches',
    'Robotic welding systems',
    'Automated production lines',
    'Heavy industrial welding',
    'Light fabrication work',
    'Automotive manufacturing',
    'Structural steel fabrication',
    'Maintenance and repair',
  ];

  const compatibleBrands = ['Binzel', 'Fronius', 'Lincoln', 'Miller', 'ESAB', 'Kemppi', 'Panasonic', 'SKS', 'Dinse', 'ABICOR', 'Tregaskiss', 'Tweco'];

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
              <Link href="/products/welding-technique/mig-mag-welding" className="text-[#6F7B83] hover:text-[#1D2931]">MIG/MAG WELDING</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">NOZZLE HOLDERS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              MIG/MAG Welding Nozzle Holders
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Premium nozzle holders and tip adapters engineered for reliable MIG/MAG torch assembly.
              Our holders ensure secure nozzle mounting, optimal gas flow, and efficient current
              transfer for consistent welding performance.
            </p>

            {/* CTA Buttons */}
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
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Features & Benefits</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our nozzle holders are precision-manufactured for optimal torch assembly and welding performance.
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

            {/* Nozzle Holder Types */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Nozzle Holder Types</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                We offer nozzle holders in various configurations to match your specific torch design and application requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {holderTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                    <p className="text-[#6F7B83] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Copper Alloys */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Premium Copper Alloys</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our nozzle holders are manufactured from high-quality copper alloys selected for optimal
                electrical conductivity and heat resistance.
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

            {/* Torch Compatibility */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Torch Compatibility</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our nozzle holders are compatible with all major MIG/MAG welding torch manufacturers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {compatibleBrands.map((brand) => (
                  <div key={brand} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <span className="text-[#1D2931] font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div id="specifications" className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Specification</th>
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

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#EF290E] mr-3">•</span>
                    <span className="text-[#6F7B83]">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need Replacement Nozzle Holders?</h2>
              <p className="text-[#6F7B83] mb-6 max-w-2xl">
                Contact our team to find the right nozzle holders for your MIG/MAG welding torches.
                We offer bulk pricing and quick delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#D42208] transition-colors"
                >
                  Get Expert Advice
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
