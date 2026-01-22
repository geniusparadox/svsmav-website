import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Projection Welding | Welding Techniques | SVS Maverick',
  description: 'Projection welding technique overview - resistance welding process for joining parts with embossed projections, ideal for fasteners, brackets, and sheet metal assemblies.',
};

export default function ProjectionWeldingPage() {
  const applications = [
    'Weld nuts and bolts',
    'Captive fasteners',
    'Brackets and clips',
    'Cross-wire welding',
    'Sheet metal assemblies',
    'Automotive components',
    'Electrical contacts',
    'Metal furniture hardware',
  ];

  const industries = [
    'Automotive',
    'Electronics',
    'Appliances',
    'Furniture',
    'Fastener Mfg',
    'Metal Fabrication',
  ];

  const advantages = [
    {
      title: 'Multiple Welds',
      description: 'Create multiple welds simultaneously using multiple projections in a single operation.',
    },
    {
      title: 'Thick to Thin',
      description: 'Effectively join thick to thin materials where spot welding would be difficult.',
    },
    {
      title: 'Precise Location',
      description: 'Projections ensure accurate weld placement for consistent part-to-part quality.',
    },
    {
      title: 'Higher Strength',
      description: 'Concentrated current flow through projections creates stronger individual welds.',
    },
    {
      title: 'Less Marking',
      description: 'Minimal surface marking on the non-projection side of the workpiece.',
    },
    {
      title: 'Fast Cycle Times',
      description: 'High-speed production with typical cycle times under one second.',
    },
  ];

  const relatedProducts = [
    {
      name: 'Projection Welding Electrodes',
      description: 'Flat-faced and contoured electrodes designed for projection welding applications.',
      href: '/products/welding-products',
    },
    {
      name: 'Electrode Holders',
      description: 'Robust holders for projection welding with high force capabilities.',
      href: '/products/welding-products',
    },
    {
      name: 'WIRBALIT Copper Alloys',
      description: 'High-strength copper alloys for demanding projection welding applications.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Tip Dressing Equipment',
      description: 'Maintain optimal electrode surfaces for consistent projection weld quality.',
      href: '/products/milling-equipment',
    },
  ];

  const keyParameters = [
    { label: 'Weld Current', value: '8,000 - 40,000 A' },
    { label: 'Weld Time', value: '0.05 - 0.5 sec' },
    { label: 'Electrode Force', value: '2 - 20 kN' },
    { label: 'Projection Height', value: '0.5 - 3 mm' },
  ];

  const projectionTypes = [
    {
      name: 'Embossed Projections',
      description: 'Stamped dimples in sheet metal for sheet-to-sheet joining',
    },
    {
      name: 'Solid Projections',
      description: 'Machined or forged projections on fasteners and thick parts',
    },
    {
      name: 'Annular Projections',
      description: 'Ring-shaped projections for hermetic seals and studs',
    },
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
              <span className="text-[#1D2931] font-medium">PROJECTION WELDING</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Projection Welding
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              Projection welding is a resistance welding process that uses raised sections (projections)
              on one or both workpieces to localize the welding current and force. This technique excels
              at attaching fasteners, creating multiple simultaneous welds, and joining dissimilar
              thickness materials with precision and speed.
            </p>

            {/* Process Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">How Projection Welding Works</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-4">
                    Projection welding uses embossed or machined projections on one workpiece to concentrate
                    the welding current at specific points. When current flows through these projections,
                    they rapidly heat up and collapse under electrode pressure, forming solid welds.
                  </p>
                  <p className="text-[#6F7B83] text-lg">
                    The projections serve to localize heat generation and control weld location precisely.
                    Multiple projections can be used to create several welds in a single operation,
                    significantly increasing production efficiency.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Types of Projections</h3>
                  <ul className="space-y-4">
                    {projectionTypes.map((type) => (
                      <li key={type.name} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <div>
                          <span className="font-medium text-[#1D2931]">{type.name}</span>
                          <p className="text-sm text-[#6F7B83]">{type.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Parameters */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyParameters.map((param) => (
                  <div key={param.label} className="border border-gray-200 rounded-lg bg-white p-6">
                    <p className="text-sm text-[#6F7B83] mb-1">{param.label}</p>
                    <p className="font-semibold text-[#1D2931] text-lg">{param.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages of Projection Welding</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                Projection welding offers unique benefits for high-volume fastener and assembly applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83]">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] text-lg mb-6">
                    Projection welding is particularly suited for attaching fasteners and
                    creating precise, repeatable assemblies.
                  </p>
                  <ul className="space-y-3">
                    {applications.map((app) => (
                      <li key={app} className="flex items-center">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Industries</h3>
                  <p className="text-[#6F7B83] mb-6">
                    High-volume manufacturing industries rely on projection welding
                    for efficient fastener attachment and assembly.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((industry) => (
                      <div key={industry} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                        <span className="font-medium text-[#1D2931]">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Projection vs Spot Welding</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#EF290E] mb-4">Projection Welding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Multiple welds per cycle possible</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Better for fastener attachment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Ideal for thick-to-thin joining</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Flat electrodes with longer life</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-4">Spot Welding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#1D2931] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">No part preparation required</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#1D2931] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Better for similar thickness sheets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#1D2931] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">More flexible weld positioning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#1D2931] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">Lower tooling costs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                SVS Maverick provides complete solutions for projection welding applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow group"
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

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need Projection Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-6">
                Our experts can help you select the right electrodes and materials
                for your projection welding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Contact Our Experts
                </Link>
                <Link
                  href="/products/welding-products"
                  className="inline-flex items-center justify-center border-2 border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
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
