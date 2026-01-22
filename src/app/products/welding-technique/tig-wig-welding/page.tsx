import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'TIG/WIG Welding | Welding Techniques | SVS Maverick',
  description: 'TIG/WIG welding technique overview - Gas Tungsten Arc Welding (GTAW) for precision welding of critical applications in aerospace, nuclear, and high-quality fabrication.',
};

export default function TigWigWeldingPage() {
  const applications = [
    'Aerospace components',
    'Nuclear industry',
    'Food and pharmaceutical equipment',
    'Precision instruments',
    'Thin-wall tubing',
    'Automotive exhaust systems',
    'Bicycle frames',
    'Art and sculpture',
  ];

  const industries = [
    'Aerospace',
    'Nuclear',
    'Pharmaceutical',
    'Food Processing',
    'Automotive',
    'Precision Engineering',
  ];

  const advantages = [
    {
      title: 'Superior Quality',
      description: 'Produces the highest quality welds with excellent appearance and minimal defects.',
    },
    {
      title: 'Precise Control',
      description: 'Allows precise control of heat input, ideal for thin materials and critical joints.',
    },
    {
      title: 'No Spatter',
      description: 'Clean process with no spatter, reducing post-weld cleanup requirements.',
    },
    {
      title: 'All Metals',
      description: 'Can weld virtually any metal including exotic alloys and dissimilar materials.',
    },
    {
      title: 'No Flux Required',
      description: 'Shielding gas eliminates the need for flux, preventing slag inclusions.',
    },
    {
      title: 'Visible Arc',
      description: 'Excellent visibility of the weld pool for precise operator control.',
    },
  ];

  const relatedProducts = [
    {
      name: 'Tungsten Electrodes',
      description: 'Pure tungsten and thoriated, ceriated, lanthanated electrodes for all applications.',
      href: '/products/welding-products',
    },
    {
      name: 'TIG Filler Rods',
      description: 'Premium filler metals for TIG welding various materials and alloys.',
      href: '/products/welding-products',
    },
    {
      name: 'Gas Nozzles & Cups',
      description: 'Ceramic and glass cups for optimal shielding gas coverage.',
      href: '/products/welding-products',
    },
    {
      name: 'Collets & Bodies',
      description: 'Precision collets and collet bodies for secure electrode holding.',
      href: '/products/welding-products',
    },
  ];

  const electrodeTypes = [
    { type: 'Pure Tungsten', color: 'Green', use: 'AC welding of aluminum and magnesium' },
    { type: 'Thoriated', color: 'Red/Yellow', use: 'DC welding of steel and stainless' },
    { type: 'Ceriated', color: 'Gray', use: 'Low-amperage DC applications' },
    { type: 'Lanthanated', color: 'Gold/Blue', use: 'AC and DC welding, all-purpose' },
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
              <span className="text-[#1D2931] font-medium">TIG WELDING</span>
            </nav>

            {/* Title */}
            <div className="inline-block px-4 py-1 bg-[#EF290E] text-white text-sm font-medium rounded-full mb-6">
              Gas Tungsten Arc Welding
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              TIG/WIG Welding
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-4xl">
              Gas Tungsten Arc Welding (GTAW), known as TIG (Tungsten Inert Gas) or WIG (Wolfram Inert Gas)
              in Europe, is the premier welding process for applications requiring the highest weld quality.
              Using a non-consumable tungsten electrode and inert shielding gas, TIG welding delivers
              unmatched precision and aesthetics.
            </p>

            {/* Process Description */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">How TIG/WIG Welding Works</h2>
              <div className="space-y-4">
                <p className="text-[#6F7B83] text-lg">
                  TIG welding uses a non-consumable tungsten electrode to produce the weld arc.
                  The tungsten electrode, weld pool, and surrounding heat-affected zone are protected
                  from atmospheric contamination by an inert shielding gas, typically argon or helium.
                </p>
                <p className="text-[#6F7B83] text-lg">
                  Unlike MIG welding, filler metal is added separately by hand or by automatic feed,
                  giving the welder complete control over the heat input and filler deposition.
                  This makes TIG welding ideal for critical applications and thin materials.
                </p>
              </div>

              {/* TIG vs WIG Terminology */}
              <div className="border border-gray-200 rounded-lg bg-white p-6 mt-8">
                <h3 className="font-semibold text-[#1D2931] mb-4">TIG vs WIG Terminology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[#1D2931] mb-2">TIG (Tungsten Inert Gas)</h4>
                    <p className="text-sm text-[#6F7B83]">American terminology, emphasizing the tungsten electrode and inert gas shielding.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1D2931] mb-2">WIG (Wolfram Inert Gas)</h4>
                    <p className="text-sm text-[#6F7B83]">European/German terminology, using the German word for tungsten (Wolfram).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Parameters */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Parameter</th>
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Electrode Diameter</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">0.5 - 6.4 mm</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Current Range</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">5 - 500 A</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Gas Flow</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">5 - 20 L/min</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Material Thickness</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">0.1 - 10+ mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tungsten Electrode Types */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Tungsten Electrode Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electrodeTypes.map((electrode) => (
                  <div key={electrode.type} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-[#1D2931] font-semibold mb-2">{electrode.type}</h3>
                    <p className="text-[#EF290E] text-sm mb-2">Color Code: {electrode.color}</p>
                    <p className="text-[#6F7B83] text-sm">{electrode.use}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Advantages of TIG/WIG Welding</h2>
              <p className="text-[#6F7B83] text-lg mb-8">
                TIG welding is the choice for applications where quality and precision are paramount.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
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

            {/* Applications & Industries */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
                  <p className="text-[#6F7B83] mb-6">
                    TIG welding excels in applications requiring precision, cleanliness, and
                    exceptional weld quality.
                  </p>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EF290E] mr-3">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Industries</h2>
                  <p className="text-[#6F7B83] mb-6">
                    Industries with strict quality requirements rely on TIG welding
                    for their critical fabrication needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((industry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                        <span className="font-medium text-[#1D2931]">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Related Products</h2>
              <p className="text-[#6F7B83] mb-8">
                SVS Maverick supplies premium consumables and accessories for TIG/WIG welding applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <Link
                    key={index}
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
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Need TIG/WIG Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-6">
                Our experts can help you select the right tungsten electrodes, filler materials,
                and accessories for your precision welding applications.
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
