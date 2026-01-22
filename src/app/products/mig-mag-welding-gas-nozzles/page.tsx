import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Arc Welding Gas Nozzles | MIG/MAG Welding | SVS Maverick',
  description: 'Premium gas nozzles for MIG/MAG arc welding torches. High-quality copper, brass, and chrome-plated nozzles for optimal shielding gas coverage.',
};

export default function MigMagWeldingGasNozzlesPage() {
  const features = [
    {
      title: 'Optimal Gas Coverage',
      description: 'Precision-designed profiles ensure uniform shielding gas distribution for quality welds.',
    },
    {
      title: 'Spatter Resistance',
      description: 'Smooth interior surfaces and anti-spatter treatments minimize buildup and extend nozzle life.',
    },
    {
      title: 'Heat Resistance',
      description: 'High-temperature materials maintain shape and performance under intense welding conditions.',
    },
    {
      title: 'Wide Compatibility',
      description: 'Available for all major MIG/MAG torch manufacturers and models.',
    },
  ];

  const specifications = [
    { label: 'Nozzle Types', value: 'Cylindrical, Tapered, Conical' },
    { label: 'Bore Diameters', value: '9.5mm - 24mm' },
    { label: 'Mounting Types', value: 'Threaded, Push-fit, Spring-clip' },
    { label: 'Materials', value: 'Copper, Brass, Chrome-plated' },
    { label: 'Torch Compatibility', value: 'Binzel, Fronius, Lincoln, Miller, ESAB' },
    { label: 'Standards', value: 'OEM specifications' },
  ];

  const nozzleTypes = [
    {
      name: 'Copper Gas Nozzles',
      description: 'Premium copper nozzles for excellent heat dissipation and durability in high-amperage applications.',
    },
    {
      name: 'Brass Gas Nozzles',
      description: 'Cost-effective brass nozzles for general purpose MIG/MAG welding applications.',
    },
    {
      name: 'Chrome-Plated Nozzles',
      description: 'Anti-spatter chrome coating for extended service life and easy cleaning.',
    },
    {
      name: 'Ceramic Insert Nozzles',
      description: 'High-temperature ceramic insulation for heavy-duty continuous welding applications.',
    },
  ];

  const nozzleShapes = [
    {
      name: 'Cylindrical Nozzles',
      description: 'Standard shape for general-purpose welding with good gas coverage.',
    },
    {
      name: 'Tapered Nozzles',
      description: 'Improved access to tight spaces and corner joints.',
    },
    {
      name: 'Conical Nozzles',
      description: 'Better visibility and access for precision welding work.',
    },
    {
      name: 'Adjustable Nozzles',
      description: 'Recessed or extended tip position for various welding conditions.',
    },
  ];

  const materials = [
    {
      name: 'Copper Alloys',
      description: 'High thermal conductivity for optimal heat dissipation and long service life.',
      link: '/materials/copper-materials/cucr1zr',
    },
    {
      name: 'Brass Alloys',
      description: 'Cost-effective option with good wear resistance for general welding use.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Chrome Plating',
      description: 'Anti-spatter surface treatment that prevents weld spatter adhesion.',
      link: '/materials/copper-materials',
    },
  ];

  const applications = [
    'MIG/MAG welding of steel and stainless steel',
    'Automated and robotic welding systems',
    'Automotive body manufacturing',
    'Pipe and tube welding',
    'Sheet metal fabrication',
    'Heavy equipment manufacturing',
    'Shipbuilding and marine applications',
    'Structural steel fabrication',
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
              <Link href="/products/welding-products" className="text-[#6F7B83] hover:text-[#1D2931]">WELDING PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products/welding-technique/mig-mag-welding" className="text-[#6F7B83] hover:text-[#1D2931]">MIG/MAG WELDING</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">GAS NOZZLES</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Arc Welding Gas Nozzles
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Premium gas nozzles engineered for optimal shielding gas coverage in MIG/MAG welding.
              Our nozzles provide reliable performance and extended service life for consistent,
              high-quality welds.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#EF290E] text-white font-semibold rounded hover:bg-[#d42410] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="#specifications"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Specifications
              </Link>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Features & Benefits</h2>
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

            {/* Nozzle Types Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Nozzle Materials</h2>
              <p className="text-[#6F7B83] text-lg mb-6 max-w-3xl">
                Choose from a range of materials optimized for different welding conditions and service life requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nozzleTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{type.name}</h3>
                    <p className="text-[#6F7B83] text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nozzle Shapes Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Nozzle Shapes</h2>
              <p className="text-[#6F7B83] text-lg mb-6 max-w-3xl">
                Available in various profiles to suit different joint configurations and access requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {nozzleShapes.map((shape, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{shape.name}</h3>
                    <p className="text-[#6F7B83] text-sm">{shape.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Materials Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Premium Materials</h2>
              <p className="text-[#6F7B83] text-lg mb-6 max-w-3xl">
                Our gas nozzles are manufactured from carefully selected materials to ensure
                optimal performance and durability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materials.map((material, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{material.name}</h3>
                    <p className="text-[#6F7B83] text-sm mb-4">{material.description}</p>
                    <Link
                      href={material.link}
                      className="inline-flex items-center text-[#EF290E] font-medium text-sm hover:underline"
                    >
                      View Material Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Applications Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#EF290E] mr-3">•</span>
                    <span className="text-[#6F7B83]">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/products/mig-mag-welding-contact-tips"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    MIG/MAG Contact Tips
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Precision contact tips for reliable wire feeding.</p>
                </Link>
                <Link
                  href="/products/mig-mag-welding-nozzle-holders"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Nozzle Holders
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Secure nozzle holders and adapters.</p>
                </Link>
                <Link
                  href="/products/welding-technique/mig-mag-welding"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    MIG/MAG Welding Overview
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Learn more about MIG/MAG welding techniques.</p>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border border-gray-200 rounded-lg bg-white p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-2">
                    Need Gas Nozzles for Your MIG/MAG Torches?
                  </h3>
                  <p className="text-[#6F7B83]">
                    Contact our team to find the right gas nozzles for your welding applications.
                    We offer bulk pricing and quick delivery.
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
                Contact us for pricing and availability of gas nozzles in your required specifications and quantity.
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
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
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
