import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Submerged Arc Welding | Welding Techniques | SVS Maverick',
  description: 'Submerged Arc Welding (SAW) technique overview - high deposition rate welding process for heavy fabrication, shipbuilding, and pressure vessel manufacturing.',
};

export default function SubmergedArcWeldingPage() {
  const applications = [
    'Pressure vessel fabrication',
    'Shipbuilding and offshore',
    'Pipe and tube manufacturing',
    'Structural steel construction',
    'Bridge fabrication',
    'Wind tower production',
    'Heavy equipment manufacturing',
    'Railway tank cars',
  ];

  const industries = [
    'Shipbuilding',
    'Oil & Gas',
    'Power Generation',
    'Heavy Industry',
    'Construction',
    'Transportation',
  ];

  const advantages = [
    {
      title: 'High Deposition Rate',
      description: 'Up to 10 times higher deposition rates than manual welding processes.',
    },
    {
      title: 'Deep Penetration',
      description: 'Excellent penetration for single-pass welding of thick materials.',
    },
    {
      title: 'Minimal Spatter',
      description: 'Arc shielded by flux eliminates spatter and produces clean welds.',
    },
    {
      title: 'High Quality',
      description: 'Consistent, porosity-free welds with excellent mechanical properties.',
    },
    {
      title: 'Efficient Flux Use',
      description: 'Unfused flux can be recovered and reused, reducing costs.',
    },
    {
      title: 'Low Smoke',
      description: 'Submerged arc produces minimal fumes for improved working conditions.',
    },
  ];

  const keyParameters = [
    { label: 'Welding Current', value: '300 - 2,000 A' },
    { label: 'Voltage', value: '25 - 45 V' },
    { label: 'Travel Speed', value: '0.3 - 3 m/min' },
    { label: 'Deposition Rate', value: 'Up to 45 kg/hr' },
  ];

  const sawConfigurations = [
    {
      name: 'Single Wire',
      description: 'Standard configuration for most applications',
    },
    {
      name: 'Tandem Wire',
      description: 'Two wires for higher deposition rates',
    },
    {
      name: 'Multi-Wire',
      description: 'Three or more wires for maximum productivity',
    },
  ];

  const productivityComparison = [
    { process: 'SMAW (Stick)', rate: '1-5 kg/hr', relative: '1x' },
    { process: 'MIG/MAG', rate: '3-12 kg/hr', relative: '3x' },
    { process: 'SAW', rate: '15-45 kg/hr', relative: '10x' },
  ];

  const relatedProducts = [
    {
      name: 'SAW Contact Tips',
      description: 'Heavy-duty contact tips designed for high-current submerged arc applications.',
      href: '/products/welding-products',
    },
    {
      name: 'SAW Jaws & Nozzles',
      description: 'Precision flux delivery components for consistent weld coverage.',
      href: '/products/welding-products',
    },
    {
      name: 'Copper Backing Bars',
      description: 'WIRBALIT copper backing materials for SAW joint configurations.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Current Conductors',
      description: 'High-ampacity conductors for SAW power delivery.',
      href: '/products/welding-products',
    },
  ];

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
              <Link href="/products/welding-products" className="text-gray-500 hover:text-[#1D2931]">WELDING PRODUCTS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">SUBMERGED ARC WELDING</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] max-w-3xl leading-tight">
              Submerged Arc Welding
            </h1>
          </section>

          {/* Process Description */}
          <section className="px-8 lg:px-16 pb-12">
            <div className="max-w-4xl">
              <p className="text-lg text-[#6F7B83] mb-6">
                Submerged Arc Welding (SAW) is a high-productivity arc welding process where the arc
                is shielded by a blanket of granular flux. This technique delivers exceptional deposition
                rates and deep penetration, making it the preferred choice for heavy fabrication,
                shipbuilding, pressure vessels, and large structural applications.
              </p>
              <p className="text-lg text-[#6F7B83]">
                In SAW, a continuous wire electrode is fed into the weld zone beneath a layer of
                granular flux. The electric arc forms between the electrode and the workpiece,
                completely submerged under the flux layer, which protects the weld from atmospheric
                contamination. As the flux melts, it forms a protective slag over the weld pool.
              </p>
            </div>
          </section>

          {/* SAW Configurations */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">SAW Configurations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sawConfigurations.map((config) => (
                <div key={config.name} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#EF290E]"></span>
                    <h3 className="text-lg font-bold text-[#1D2931]">{config.name}</h3>
                  </div>
                  <p className="text-[#6F7B83]">{config.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Parameters */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Key Parameters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyParameters.map((param) => (
                <div key={param.label} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <p className="text-sm text-[#6F7B83] mb-2">{param.label}</p>
                  <p className="text-xl font-bold text-[#1D2931]">{param.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Productivity Comparison */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">SAW Productivity Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productivityComparison.map((item) => (
                <div key={item.process} className="p-6 border border-gray-200 rounded-lg bg-white text-center">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-3">{item.process}</h3>
                  <p className="text-2xl font-bold text-[#EF290E] mb-2">{item.rate}</p>
                  <p className="text-[#6F7B83]">Relative Productivity: {item.relative}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advantages */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Advantages of Submerged Arc Welding</h2>
            <p className="text-lg text-[#6F7B83] mb-8 max-w-3xl">
              SAW offers unmatched productivity for heavy fabrication and thick-section welding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">{advantage.title}</h3>
                  <p className="text-[#6F7B83]">{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="px-8 lg:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Applications</h2>
                <p className="text-[#6F7B83] mb-6">
                  SAW excels in applications requiring high deposition rates and
                  deep penetration on thick materials.
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
                <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Industries</h2>
                <p className="text-[#6F7B83] mb-6">
                  Heavy industries rely on SAW for efficient, high-quality welding
                  of large structures and thick materials.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white text-center">
                      <p className="font-medium text-[#1D2931]">{industry}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Related Products</h2>
            <p className="text-lg text-[#6F7B83] mb-8 max-w-3xl">
              SVS Maverick supplies components and consumables for submerged arc welding systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#6F7B83] mb-4">{product.description}</p>
                  <span className="inline-flex items-center text-[#EF290E] font-medium text-sm">
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-200 rounded-lg bg-white">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-2">Need Submerged Arc Welding Solutions?</h2>
                <p className="text-[#6F7B83]">
                  Our experts can help you select the right consumables and equipment for your high-productivity SAW applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Contact Our Experts
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
                  href="/products/welding-products"
                  className="inline-flex items-center justify-center border-2 border-[#1D2931] text-[#1D2931] px-6 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
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
