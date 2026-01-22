import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Submerged Arc Welding Contact Tips | SVS Maverick',
  description: 'Premium SAW contact tips for reliable wire feeding and optimal current transfer. Engineered for high-amperage submerged arc welding applications.',
};

export default function SAWContactTipsPage() {
  const features = [
    {
      title: 'Superior Current Transfer',
      description: 'Optimized contact geometry ensures consistent electrical transfer to the welding wire, even at high amperages.',
    },
    {
      title: 'Extended Service Life',
      description: 'Premium copper alloys resist wear from continuous wire feeding, reducing downtime and consumable costs.',
    },
    {
      title: 'Precision Bore Sizes',
      description: 'Tight tolerance bore diameters ensure smooth wire feeding without excessive play or friction.',
    },
    {
      title: 'High-Temperature Performance',
      description: 'Maintains structural integrity and conductivity under the intense heat of SAW operations.',
    },
  ];

  const specifications = [
    { label: 'Wire Diameter Range', value: '2.0mm - 6.0mm' },
    { label: 'Current Capacity', value: 'Up to 2000A' },
    { label: 'Thread Types', value: 'M8, M10, M12, Custom' },
    { label: 'Tip Lengths', value: '35mm - 85mm' },
    { label: 'Bore Tolerance', value: '+0.05mm / -0.00mm' },
    { label: 'Contact Resistance', value: '< 0.5 milliohms' },
  ];

  const applications = [
    'Heavy plate welding in shipbuilding',
    'Pipeline and pressure vessel fabrication',
    'Structural steel manufacturing',
    'Wind tower production',
    'Bridge and infrastructure construction',
    'Offshore platform fabrication',
  ];

  const wireSizes = [
    { size: '2.0mm', bore: '2.05mm' },
    { size: '2.4mm', bore: '2.45mm' },
    { size: '3.2mm', bore: '3.25mm' },
    { size: '4.0mm', bore: '4.05mm' },
    { size: '5.0mm', bore: '5.05mm' },
    { size: '6.0mm', bore: '6.05mm' },
  ];

  const keyBenefits = [
    'Consistent arc stability at high amperages',
    'Reduced wire feeding problems and burnbacks',
    'Extended service life in continuous operations',
    'Compatible with all major SAW equipment',
    'Available for single and tandem wire systems',
    'Custom threading and lengths available',
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
              <span className="text-[#6F7B83]">SUBMERGED ARC WELDING</span>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">CONTACT TIPS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Submerged Arc Welding Contact Tips
            </h1>
            <p className="text-xl text-[#1D2931] mb-12 max-w-3xl">
              High-performance contact tips engineered for the demanding requirements of submerged arc welding.
              Deliver reliable current transfer and consistent wire feeding for heavy-duty industrial applications.
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
                href="/materials/copper-materials"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Materials
              </Link>
            </div>

            {/* Product Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Engineered for High-Amperage Performance</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    Submerged arc welding demands contact tips that can handle extreme currents while
                    maintaining reliable wire feeding and consistent arc characteristics. Our SAW contact
                    tips are specifically designed to meet these challenges, providing superior performance
                    in the most demanding heavy fabrication environments.
                  </p>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    Manufactured from carefully selected copper alloys with optimized conductivity and
                    wear resistance, these tips deliver thousands of meters of reliable wire feeding
                    before replacement. The precision-machined bore ensures smooth wire passage while
                    maintaining the electrical contact necessary for stable arc performance.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    Available in all standard wire sizes and thread configurations, our SAW contact tips
                    are compatible with equipment from all major manufacturers. Custom designs are also
                    available for specialized applications.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
                  <ul className="space-y-3">
                    {keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Product Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                    <p className="text-[#6F7B83]">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Wire Size Table */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Standard Wire Sizes</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-[#F4F3EE]">
                      <th className="px-6 py-4 text-left text-[#1D2931] font-semibold">Wire Diameter</th>
                      <th className="px-6 py-4 text-left text-[#1D2931] font-semibold">Bore Diameter</th>
                      <th className="px-6 py-4 text-left text-[#1D2931] font-semibold">Recommended Current</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wireSizes.map((wire, index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-6 py-4 text-[#1D2931] font-medium">{wire.size}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{wire.bore}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{parseInt(wire.size) * 250 + 200}A - {parseInt(wire.size) * 350}A</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Available Materials */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Available Materials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">CuCr1Zr</h3>
                  <p className="text-[#6F7B83] mb-3">Standard choice for most SAW applications with excellent conductivity.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
                <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">CuCrZrAl</h3>
                  <p className="text-[#6F7B83] mb-3">Enhanced wear resistance for high-production environments.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
                <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">CuAg</h3>
                  <p className="text-[#6F7B83] mb-3">Silver-bearing copper for maximum electrical conductivity.</p>
                  <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Specifications and Applications */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Technical Specifications */}
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
                  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    {specifications.map((spec, index) => (
                      <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <span className="text-[#6F7B83]">{spec.label}</span>
                        <span className="font-semibold text-[#1D2931]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start border border-gray-200 rounded-lg bg-white p-4">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Optimize Your SAW Operations</h2>
              <p className="text-[#6F7B83] mb-6 max-w-2xl">
                Contact our technical team to discuss your submerged arc welding requirements.
                We can recommend the optimal contact tip configuration for your specific application.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Expert Advice
                </Link>
                <Link
                  href="/products"
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
