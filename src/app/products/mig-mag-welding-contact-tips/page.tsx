import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'MIG/MAG Welding Contact Tips | SVS Maverick',
  description: 'Premium contact tips for MIG/MAG welding. High-quality copper alloy tips for consistent wire feeding and reliable arc performance.',
};

export default function MigMagWeldingContactTipsPage() {
  const features = [
    {
      title: 'Consistent Wire Feed',
      description: 'Precision bore diameter ensures smooth, uninterrupted wire feeding for stable arc performance.',
    },
    {
      title: 'Extended Service Life',
      description: 'Premium copper alloys resist wear and erosion for maximum tip life and reduced changeovers.',
    },
    {
      title: 'Optimal Current Transfer',
      description: 'High conductivity materials ensure efficient electrical contact and arc stability.',
    },
    {
      title: 'Universal Compatibility',
      description: 'Available for all major welding torch manufacturers including Fronius, Lincoln, Miller, and more.',
    },
  ];

  const specifications = [
    { label: 'Wire Diameters', value: '0.6mm - 2.4mm' },
    { label: 'Thread Sizes', value: 'M6, M8, M10' },
    { label: 'Tip Lengths', value: '25mm - 45mm' },
    { label: 'Bore Tolerance', value: '+0.02mm to +0.05mm' },
    { label: 'Torch Compatibility', value: 'Binzel, Fronius, Lincoln, Miller, ESAB' },
    { label: 'Standards', value: 'ISO 9001, Manufacturer OEM specs' },
  ];

  const materials = [
    {
      name: 'E-Cu (Pure Copper)',
      description: 'Standard copper for general purpose welding with excellent conductivity.',
      link: '/materials/copper-materials',
    },
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Copper chromium zirconium for improved wear resistance and longer tip life.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'CuCrZr Silver-Plated',
      description: 'Silver coating for enhanced conductivity and reduced spatter adhesion.',
      link: '/materials/copper-materials',
    },
  ];

  const tipTypes = [
    {
      name: 'Standard Contact Tips',
      description: 'General purpose tips for most MIG/MAG welding applications.',
    },
    {
      name: 'Heavy Duty Tips',
      description: 'Extended length and reinforced construction for high-amperage welding.',
    },
    {
      name: 'Precision Tips',
      description: 'Tight bore tolerance for precision welding and robotics.',
    },
    {
      name: 'Special Alloy Tips',
      description: 'Silver-plated and chrome-zirconium for demanding applications.',
    },
  ];

  const applications = [
    'Automotive manufacturing and repair',
    'Steel fabrication and construction',
    'Shipbuilding and marine applications',
    'Pipeline welding',
    'Robotic welding cells',
    'General metal fabrication',
    'Maintenance and repair welding',
    'Heavy equipment manufacturing',
  ];

  const wireSizes = ['0.6mm', '0.8mm', '0.9mm', '1.0mm', '1.2mm', '1.4mm', '1.6mm', '2.0mm', '2.4mm', '.023"', '.030"', '.035"'];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Header Section */}
          <section className="px-8 lg:px-16 py-12">
            {/* Breadcrumb */}
            <nav className="text-sm mb-8">
              <Link href="/" className="text-gray-500 hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/products" className="text-gray-500 hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/products/welding-technique/mig-mag-welding" className="text-gray-500 hover:text-[#1D2931]">MIG/MAG WELDING</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">CONTACT TIPS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] max-w-4xl leading-tight">
              MIG/MAG Welding Contact Tips
            </h1>
          </section>

          {/* Introduction */}
          <section className="px-8 lg:px-16 pb-12">
            <div className="max-w-4xl">
              <p className="text-lg text-[#6F7B83] mb-6">
                Premium contact tips engineered for reliable MIG/MAG welding performance. Our tips deliver consistent wire feeding, stable arc characteristics, and extended service life for both manual and robotic welding applications.
              </p>
              <div className="flex flex-wrap gap-4">
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
            </div>
          </section>

          {/* Features Section */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Features & Benefits</h2>
            <p className="text-lg text-[#6F7B83] max-w-3xl mb-8">
              Our contact tips are precision-manufactured for optimal welding performance and reliability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">{feature.title}</h3>
                  <p className="text-[#6F7B83]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tip Types Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Contact Tip Types</h2>
            <p className="text-lg text-[#6F7B83] max-w-3xl mb-8">
              We offer contact tips in various configurations to match your specific welding torch and application requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tipTypes.map((type, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">{type.name}</h3>
                  <p className="text-[#6F7B83]">{type.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Materials Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Premium Copper Alloys</h2>
            <p className="text-lg text-[#6F7B83] max-w-3xl mb-8">
              Our contact tips are manufactured from high-quality copper alloys selected for optimal conductivity, wear resistance, and service life.
            </p>
            <div className="space-y-4">
              {materials.map((material, index) => (
                <Link
                  key={index}
                  href={material.link}
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all group"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors mb-2">
                      {material.name}
                    </h3>
                    <p className="text-[#6F7B83]">{material.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#EF290E] ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* Wire Size Reference Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Wire Size Compatibility</h2>
            <p className="text-lg text-[#6F7B83] max-w-3xl mb-8">
              We stock contact tips for all common welding wire diameters in metric and imperial sizes.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {wireSizes.map((size) => (
                <div key={size} className="p-4 border border-gray-200 rounded-lg bg-white text-center">
                  <span className="text-lg font-semibold text-[#1D2931]">{size}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications Section */}
          <section id="specifications" className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Technical Specifications</h2>
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                      <span className="text-[#6F7B83]">{spec.label}</span>
                      <span className="font-semibold text-[#1D2931]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Applications</h2>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-200 rounded-lg bg-white">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-2">Optimize Your MIG/MAG Welding Process</h2>
                <p className="text-[#6F7B83]">
                  Contact our welding specialists to find the right contact tips for your torch and application. We offer bulk pricing and custom solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Expert Advice
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center border border-[#1D2931] text-[#1D2931] px-6 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
