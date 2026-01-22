import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Mesh Welding | Welding Techniques | SVS Maverick',
  description: 'Mesh and wire welding technique overview - resistance welding process for producing welded wire mesh, fencing, concrete reinforcement, and wire products.',
};

export default function MeshWeldingPage() {
  const applications = [
    'Concrete reinforcement mesh',
    'Security fencing',
    'Animal enclosures',
    'Shopping carts and baskets',
    'Refrigerator shelving',
    'Industrial grating',
    'Gabion baskets',
    'Decorative screens',
  ];

  const industries = [
    'Construction',
    'Agriculture',
    'Retail',
    'Appliances',
    'Infrastructure',
    'Manufacturing',
  ];

  const advantages = [
    {
      title: 'High Speed',
      description: 'Automated systems can produce hundreds of welds per minute for maximum productivity.',
    },
    {
      title: 'Consistent Quality',
      description: 'Precise electrode positioning ensures uniform weld strength across the entire mesh.',
    },
    {
      title: 'Material Efficient',
      description: 'Optimized wire usage with minimal waste and no filler material required.',
    },
    {
      title: 'Flexible Patterns',
      description: 'Easily adjustable for different mesh sizes, wire diameters, and patterns.',
    },
    {
      title: 'Strong Joints',
      description: 'Cross-wire resistance welds provide excellent structural integrity.',
    },
    {
      title: 'Cost Effective',
      description: 'Low operating costs with minimal consumables and energy-efficient operation.',
    },
  ];

  const keyParameters = [
    { label: 'Wire Diameter', value: '2 - 12 mm' },
    { label: 'Weld Current', value: '2,000 - 15,000 A' },
    { label: 'Weld Time', value: '20 - 200 ms' },
    { label: 'Production Speed', value: 'Up to 150 cycles/min' },
  ];

  const relatedProducts = [
    {
      name: 'Mesh Welding Electrodes',
      description: 'Precision electrodes designed for high-speed cross-wire welding applications.',
      href: '/products/welding-products',
    },
    {
      name: 'Electrode Holders',
      description: 'Heavy-duty holders for multi-point mesh welding systems.',
      href: '/products/welding-products',
    },
    {
      name: 'WIRBALIT Copper Alloys',
      description: 'High-conductivity copper alloys optimized for wire welding applications.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Current Shunts',
      description: 'Flexible current conductors for mesh welding machines.',
      href: '/products/welding-products',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1 p-8 lg:p-12">
          <div className="max-w-5xl">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-[#6F7B83]">
                <li><Link href="/" className="hover:text-[#1D2931]">HOME</Link></li>
                <li>&gt;</li>
                <li><Link href="/products" className="hover:text-[#1D2931]">PRODUCTS</Link></li>
                <li>&gt;</li>
                <li><Link href="/products/welding-products" className="hover:text-[#1D2931]">WELDING PRODUCTS</Link></li>
                <li>&gt;</li>
                <li className="text-[#1D2931] font-medium">MESH WELDING</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-8">
              Mesh Welding
            </h1>

            {/* Process Description */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Process Description</h2>
                <p className="text-[#6F7B83] mb-6 leading-relaxed">
                  Mesh welding, also known as wire welding or cross-wire welding, is a specialized resistance
                  welding process for joining intersecting wires to create mesh products. This high-speed,
                  automated technique is essential for manufacturing concrete reinforcement, fencing,
                  shelving, and countless other wire mesh products.
                </p>
                <p className="text-[#6F7B83] mb-6 leading-relaxed">
                  Mesh welding uses the principle of resistance welding to join crossing wires at their
                  intersection points. Opposing electrodes apply pressure and electrical current simultaneously
                  to multiple wire crossings, creating strong metallurgical bonds in milliseconds.
                </p>
                <p className="text-[#6F7B83] leading-relaxed">
                  Modern mesh welding machines can have hundreds of electrodes, allowing entire rows
                  of cross-wires to be welded in a single cycle. The longitudinal wires are fed
                  continuously while cross-wires are placed and welded at precise intervals.
                </p>
              </div>
            </section>

            {/* Mesh Welding Systems */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Mesh Welding Systems</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-[#1D2931]">Line Machines</span>
                      <p className="text-[#6F7B83] text-sm">Continuous production of standard mesh panels and rolls</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-[#1D2931]">Lattice Girder Machines</span>
                      <p className="text-[#6F7B83] text-sm">3D reinforcement structures for construction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-[#EF290E] mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-[#1D2931]">Special Purpose Machines</span>
                      <p className="text-[#6F7B83] text-sm">Custom configurations for specific products</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Parameters */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {keyParameters.map((param, index) => (
                    <div key={index} className="bg-[#F4F3EE] p-4 rounded-lg">
                      <p className="text-sm text-[#6F7B83] mb-1">{param.label}</p>
                      <p className="font-semibold text-[#1D2931]">{param.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                      <p className="text-[#6F7B83] text-sm">{advantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Applications */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Applications</h2>
                    <p className="text-[#6F7B83] mb-6">
                      Mesh welding produces a wide variety of wire products for construction,
                      agriculture, and consumer goods.
                    </p>
                    <ul className="space-y-3">
                      {applications.map((app, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-[#EF290E] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#6F7B83]">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Industries</h2>
                    <p className="text-[#6F7B83] mb-6">
                      Wire mesh products serve diverse industries from construction
                      to consumer products manufacturing.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {industries.map((industry, index) => (
                        <div key={index} className="bg-[#F4F3EE] p-4 rounded-lg text-center">
                          <p className="font-medium text-[#1D2931]">{industry}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mesh Products */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Common Mesh Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Reinforcement Mesh', desc: 'Concrete reinforcing for construction' },
                    { name: 'Fencing', desc: 'Security and agricultural fencing' },
                    { name: 'Shelving', desc: 'Retail and appliance wire shelving' },
                    { name: 'Cages & Baskets', desc: 'Shopping carts and storage' },
                    { name: 'Grating', desc: 'Industrial floor and walkway grating' },
                    { name: 'Gabions', desc: 'Erosion control and landscaping' },
                    { name: 'Filters', desc: 'Industrial filtration screens' },
                    { name: 'Decorative', desc: 'Architectural mesh and screens' },
                  ].map((product) => (
                    <div key={product.name} className="bg-[#F4F3EE] p-4 rounded-lg text-center">
                      <h3 className="text-[#1D2931] font-semibold mb-1 text-sm">{product.name}</h3>
                      <p className="text-[#6F7B83] text-xs">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-2">Related Products</h2>
                <p className="text-[#6F7B83] mb-6">
                  SVS Maverick supplies electrodes and components for mesh welding machines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedProducts.map((product, index) => (
                    <Link
                      key={index}
                      href={product.href}
                      className="border border-gray-200 rounded-lg p-6 hover:border-[#EF290E] transition-colors group"
                    >
                      <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#6F7B83] mb-4">{product.description}</p>
                      <span className="inline-flex items-center text-[#EF290E] font-medium text-sm">
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="border border-gray-200 rounded-lg bg-[#1D2931] p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need Mesh Welding Solutions?
                </h2>
                <p className="text-[#B8BFC4] mb-6 max-w-2xl mx-auto">
                  Our experts can help you select the right electrodes and materials
                  for your wire mesh production requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
                  >
                    Contact Our Experts
                  </Link>
                  <Link
                    href="/products/welding-products"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1D2931] transition-colors"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
