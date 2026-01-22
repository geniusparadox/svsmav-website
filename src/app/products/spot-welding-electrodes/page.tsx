import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Spot Welding Electrodes | SVS Maverick',
  description: 'Complete spot welding electrodes for resistance welding. Premium WIRBALIT copper alloy electrodes for automotive and industrial applications.',
};

export default function SpotWeldingElectrodesPage() {
  const features = [
    {
      title: 'Superior Conductivity',
      description: 'High electrical and thermal conductivity ensures efficient energy transfer and optimal weld formation.',
    },
    {
      title: 'Exceptional Durability',
      description: 'Premium copper alloys provide outstanding wear resistance and extended electrode life.',
    },
    {
      title: 'Precision Manufacturing',
      description: 'Tight tolerances and consistent geometry ensure reliable performance in automated systems.',
    },
    {
      title: 'Complete Solutions',
      description: 'Full range of styles, sizes, and materials to match any welding application.',
    },
  ];

  const specifications = [
    { label: 'Electrode Styles', value: 'Male, Female, Offset, Bent' },
    { label: 'Body Diameters', value: '12mm - 32mm' },
    { label: 'Face Diameters', value: '4mm - 20mm' },
    { label: 'Face Types', value: 'Flat, Domed, Pointed, Truncated Cone' },
    { label: 'Shank Tapers', value: 'CM1, CM2, CM3 (ISO 5821)' },
    { label: 'Standards', value: 'ISO 5821, DIN EN ISO 5182, RWMA' },
  ];

  const materials = [
    {
      name: 'WIRBALIT HF/N/G (CuCr1Zr)',
      description: 'The standard choice for most resistance welding applications. Excellent balance of conductivity and mechanical strength.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'WIRBALIT C (CuCrZr)',
      description: 'Enhanced wear resistance for welding galvanized steels, aluminum, and coated materials.',
      link: '/materials/copper-materials',
    },
    {
      name: 'WIRBALIT A (CuCoBe)',
      description: 'Maximum hardness and wear resistance for the most demanding welding applications.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Dispersion Hardened Copper',
      description: 'Al2O3 reinforced copper for extreme wear resistance when welding aluminum alloys.',
      link: '/materials/copper-materials',
    },
  ];

  const electrodeTypes = [
    {
      name: 'Male Electrodes',
      description: 'Standard straight electrodes with external taper for direct mounting.',
    },
    {
      name: 'Female Electrodes',
      description: 'Internal taper design for cap-style configurations.',
    },
    {
      name: 'Offset Electrodes',
      description: 'Angled designs for accessing restricted weld locations.',
    },
    {
      name: 'Bent Electrodes',
      description: 'Custom bent configurations for complex part geometries.',
    },
  ];

  const industries = [
    'Automotive manufacturing and assembly',
    'Aerospace component fabrication',
    'Appliance and white goods production',
    'Electronics enclosure manufacturing',
    'HVAC equipment assembly',
    'General metal fabrication',
    'Railway vehicle construction',
    'Agricultural equipment manufacturing',
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
              <span className="text-[#1D2931] font-medium">ELECTRODES</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Spot Welding Electrodes
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Complete spot welding electrodes engineered for precision resistance welding.
              From standard configurations to custom solutions, our electrodes deliver consistent,
              high-quality welds in the most demanding production environments.
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
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Features & Benefits</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                Our spot welding electrodes are manufactured to the highest standards, ensuring optimal performance and longevity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
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

            {/* Electrode Types Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Electrode Types</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                We offer a complete range of electrode configurations to suit every welding application and part geometry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electrodeTypes.map((type, index) => (
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
                Our electrodes are manufactured from WIRBALIT copper alloys, precision-engineered
                for resistance welding. Choose the optimal material based on your workpiece materials and production requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materials.map((material, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#EF290E] mb-2">{material.name}</h3>
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

            {/* Specifications Section */}
            <div id="specifications" className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-b-0">
                        <td className="py-4 px-6 text-[#6F7B83]">{spec.label}</td>
                        <td className="py-4 px-6 font-semibold text-[#1D2931] text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Industries Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Industries Served</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6F7B83]">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Electrodes CTA */}
            <div className="mb-16 border border-gray-200 rounded-lg bg-white p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">Need Custom Spot Welding Electrodes?</h3>
                  <p className="text-[#6F7B83]">
                    Our engineering team can design and manufacture custom electrodes for your specific application.
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
                Contact us for pricing and availability of spot welding electrodes in your required configuration and quantity.
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
