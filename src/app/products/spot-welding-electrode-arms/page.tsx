import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Spot Welding Electrode Arms | SVS Maverick',
  description: 'High-performance electrode arms and holders for spot welding. Precision-engineered from WIRBALIT copper alloys for robotic and manual welding systems.',
};

export default function SpotWeldingElectrodeArmsPage() {
  const features = [
    {
      title: 'Optimal Current Transfer',
      description: 'Low-resistance design ensures maximum electrical efficiency and consistent weld quality.',
    },
    {
      title: 'High Rigidity',
      description: 'Engineered for precise electrode positioning and minimal deflection under welding forces.',
    },
    {
      title: 'Effective Cooling',
      description: 'Integrated water cooling channels maintain optimal operating temperatures.',
    },
    {
      title: 'Versatile Mounting',
      description: 'Compatible with all major welding gun manufacturers and robotic systems.',
    },
  ];

  const specifications = [
    { label: 'Arm Styles', value: 'Straight, Offset, C-Type, X-Type' },
    { label: 'Reach Lengths', value: '150mm - 600mm' },
    { label: 'Throat Depths', value: '50mm - 400mm' },
    { label: 'Cooling', value: 'Internal water circulation' },
    { label: 'Gun Compatibility', value: 'OBARA, ARO, NIMAK, RESISTANCE' },
    { label: 'Standards', value: 'OEM specifications, ISO 5182' },
  ];

  const materials = [
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Standard copper chromium zirconium alloy for excellent conductivity and mechanical properties.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'WIRBALIT C (CuCrZr)',
      description: 'Enhanced alloy for improved strength and wear resistance in demanding applications.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Copper-Steel Composite',
      description: 'Steel-backed copper construction for maximum strength in high-force applications.',
      link: '/materials/copper-materials',
    },
  ];

  const armTypes = [
    {
      name: 'Straight Arms',
      description: 'Standard configuration for direct access to flat workpieces.',
    },
    {
      name: 'Offset Arms',
      description: 'Angled designs for accessing recessed or obstructed weld locations.',
    },
    {
      name: 'C-Type Arms',
      description: 'Deep throat configuration for welding large assemblies.',
    },
    {
      name: 'X-Type Arms',
      description: 'Scissor-action design for welding gun applications.',
    },
  ];

  const applications = [
    'Robotic spot welding cells',
    'Automated production lines',
    'Manual welding gun systems',
    'Pedestal welding machines',
    'Press-type resistance welders',
    'Custom welding fixtures',
    'Multi-spot welding systems',
    'Automotive body-in-white assembly',
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
              <span className="text-[#1D2931] font-medium">ELECTRODE ARMS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Spot Welding Electrode Arms
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Precision-engineered electrode arms and holders for robotic and manual spot welding systems.
              Our arms combine superior current-carrying capacity with exceptional mechanical strength
              for reliable performance in automated production environments.
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
                Our electrode arms are designed for maximum performance and durability in high-volume production.
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

            {/* Arm Types Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Arm Configurations</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                We manufacture electrode arms in various configurations to match your welding gun design and part access requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {armTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                    <p className="text-[#6F7B83] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Premium WIRBALIT Copper Alloys</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our electrode arms are manufactured from WIRBALIT copper alloys and composite materials,
                engineered to provide the optimal balance of conductivity and mechanical strength.
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

            {/* Specifications Section */}
            <div id="specifications" className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="py-4 px-6 text-[#6F7B83]">{spec.label}</td>
                        <td className="py-4 px-6 text-[#1D2931] font-medium">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6F7B83]">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Arms CTA */}
            <div className="mb-16 border border-gray-200 rounded-lg bg-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">Need Custom Electrode Arms?</h3>
                  <p className="text-[#6F7B83]">
                    We design and manufacture custom electrode arms to match your specific welding gun and application requirements.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#D42208] transition-colors whitespace-nowrap"
                >
                  Get Expert Advice
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Request a Quote</h3>
              <p className="text-[#6F7B83] mb-6">
                Contact us for pricing and availability of electrode arms in your required configuration and quantity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#D42208] transition-colors"
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
