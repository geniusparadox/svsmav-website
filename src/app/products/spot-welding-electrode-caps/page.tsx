import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Spot Welding Electrode Caps | SVS Maverick',
  description: 'High-performance electrode caps for spot welding applications. Made from premium WIRBALIT copper alloys for maximum durability and conductivity.',
};

export default function SpotWeldingElectrodeCapPage() {
  const features = [
    {
      title: 'Extended Service Life',
      description: 'Precision-manufactured from premium copper alloys for maximum weld count between dressings.',
    },
    {
      title: 'Optimal Heat Dissipation',
      description: 'Excellent thermal conductivity ensures rapid heat transfer and consistent weld quality.',
    },
    {
      title: 'Consistent Weld Quality',
      description: 'Uniform material properties deliver repeatable, high-quality spot welds every time.',
    },
    {
      title: 'Easy Replacement',
      description: 'Quick-change design minimizes downtime and simplifies electrode maintenance.',
    },
  ];

  const specifications = [
    { label: 'Tip Diameters', value: '4mm - 20mm' },
    { label: 'Cap Styles', value: 'Pointed, Domed, Flat, Radius' },
    { label: 'Taper Options', value: 'ISO 5821 Standard Tapers' },
    { label: 'Cooling', value: 'Internal water cooling compatible' },
    { label: 'Standards', value: 'ISO 5821, DIN EN ISO 5182' },
  ];

  const materials = [
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'Standard material for most spot welding applications with excellent balance of conductivity and hardness.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'WIRBALIT C (CuCrZr)',
      description: 'Enhanced hardness variant for welding coated steels and higher-strength materials.',
      link: '/materials/copper-materials',
    },
    {
      name: 'WIRBALIT A (CuCoBe)',
      description: 'Premium alloy for demanding applications requiring maximum wear resistance.',
      link: '/materials/copper-materials',
    },
  ];

  const applications = [
    'Automotive body assembly and sheet metal joining',
    'Appliance manufacturing',
    'HVAC component fabrication',
    'Electrical enclosure assembly',
    'General sheet metal fabrication',
    'High-volume production welding',
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#F4F3EE]">
          <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm mb-8 sm:mb-12 flex flex-wrap gap-1">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <Link href="/products/welding-technique/spot-welding" className="text-[#6F7B83] hover:text-[#1D2931]">SPOT WELDING</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">ELECTRODE CAPS</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Spot Welding Electrode Caps
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-4xl">
              Premium replaceable electrode caps engineered for high-volume spot welding operations.
              Our caps deliver exceptional weld quality, extended service life, and consistent performance
              across thousands of welds.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#D42208] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Specifications
              </Link>
            </div>

            {/* Features & Benefits */}
            <div className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4 sm:mb-6">Features & Benefits</h2>
              <p className="text-[#6F7B83] text-base sm:text-lg mb-6 sm:mb-8">
                Designed for demanding production environments where reliability and performance are critical.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

            {/* Premium WIRBALIT Copper Alloys */}
            <div className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4 sm:mb-6">Premium WIRBALIT Copper Alloys</h2>
              <p className="text-[#6F7B83] text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl">
                Our electrode caps are manufactured from WIRBALIT copper alloys, specifically engineered
                for resistance welding applications. Select the optimal material for your specific welding requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {materials.map((material, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#EF290E] mb-2">{material.name}</h3>
                    <p className="text-[#6F7B83] mb-4">{material.description}</p>
                    <Link
                      href={material.link}
                      className="inline-flex items-center text-[#EF290E] font-medium hover:underline"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div id="specifications" className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4 sm:mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-x-auto">
                <table className="w-full min-w-[350px]">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}>
                        <td className="py-4 px-6 text-[#6F7B83]">{spec.label}</td>
                        <td className="py-4 px-6 text-[#1D2931] font-semibold text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-10 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4 sm:mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#EF290E] mr-3 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[#6F7B83]">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="border border-gray-200 rounded-lg bg-white p-4 sm:p-8 mb-10 sm:mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D2931] mb-2">
                    Ready to Optimize Your Spot Welding Process?
                  </h3>
                  <p className="text-[#6F7B83]">
                    Contact our welding specialists to find the perfect electrode caps for your application.
                    We offer custom solutions for unique requirements.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#D42208] transition-colors"
                  >
                    Get Expert Advice
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Request Quote */}
            <div className="border-t border-gray-200 pt-8 sm:pt-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4">Request a Quote</h3>
              <p className="text-[#6F7B83] mb-6">
                Contact us for pricing and availability of spot welding electrode caps in your required specifications and quantity.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#D42208] transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
