import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Seam Welding | Welding Techniques | SVS Maverick',
  description: 'Seam welding technique overview - resistance welding process for creating continuous, leak-tight welds using rotating wheel electrodes for tanks, containers, and tubing.',
};

export default function SeamWeldingPage() {
  const applications = [
    'Fuel tanks',
    'Radiators and heat exchangers',
    'Drums and containers',
    'Exhaust systems',
    'HVAC ductwork',
    'Hermetic enclosures',
    'Tubing and pipe',
    'Food and beverage containers',
  ];

  const industries = [
    'Automotive',
    'HVAC',
    'Food & Beverage',
    'Aerospace',
    'Petrochemical',
    'Medical Devices',
  ];

  const advantages = [
    {
      title: 'Leak-Tight Joints',
      description: 'Creates continuous, hermetically sealed welds ideal for pressure vessels and fluid containers.',
    },
    {
      title: 'High Speed',
      description: 'Continuous welding at speeds up to several meters per minute for efficient production.',
    },
    {
      title: 'Consistent Quality',
      description: 'Automated process ensures uniform weld quality along the entire seam length.',
    },
    {
      title: 'No Filler Metal',
      description: 'Clean process with no consumable filler materials required.',
    },
    {
      title: 'Minimal Distortion',
      description: 'Localized heat input reduces warping and maintains dimensional accuracy.',
    },
    {
      title: 'Versatile Materials',
      description: 'Suitable for steel, stainless steel, aluminum, and coated materials.',
    },
  ];

  const keyParameters = [
    { label: 'Weld Current', value: '5,000 - 30,000 A' },
    { label: 'Welding Speed', value: '0.5 - 5 m/min' },
    { label: 'Wheel Force', value: '2 - 15 kN' },
    { label: 'Sheet Thickness', value: '0.1 - 3 mm' },
  ];

  const seamTypes = [
    {
      name: 'Continuous Seam',
      description: 'Overlapping welds create a complete hermetic seal',
    },
    {
      name: 'Roll Spot Weld',
      description: 'Spaced spot welds for structural applications',
    },
    {
      name: 'Mash Seam',
      description: 'Thins the overlap for flush-surface applications',
    },
  ];

  const relatedProducts = [
    {
      name: 'Seam Welding Wheels',
      description: 'Precision-machined copper alloy wheels for continuous seam welding applications.',
      href: '/products/welding-products',
    },
    {
      name: 'WIRBALIT Copper Alloys',
      description: 'High-conductivity copper materials engineered for seam welding electrodes.',
      href: '/products/copper-alloys',
    },
    {
      name: 'Electrode Adapters',
      description: 'Precision adapters for mounting seam welding wheels.',
      href: '/products/welding-products',
    },
    {
      name: 'Wheel Dressers',
      description: 'Maintain optimal wheel profiles for consistent seam weld quality.',
      href: '/products/milling-equipment',
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
              <Link href="/products/welding-technique" className="text-gray-500 hover:text-[#1D2931]">WELDING PRODUCTS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">SEAM WELDING</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] max-w-3xl leading-tight">
              Seam Welding
            </h1>
          </section>

          {/* Process Description */}
          <section className="px-8 lg:px-16 pb-12">
            <div className="max-w-4xl">
              <p className="text-lg text-[#6F7B83] mb-6">
                Seam welding is a continuous resistance welding process that uses rotating wheel electrodes to create leak-tight, overlapping spot welds. This technique is essential for manufacturing tanks, containers, radiators, and any application requiring hermetically sealed joints with high production efficiency.
              </p>
              <p className="text-lg text-[#6F7B83]">
                Seam welding passes overlapping metal sheets between two rotating copper alloy wheels (electrodes). As the wheels rotate, they apply pressure and conduct welding current to create a series of overlapping spot welds that form a continuous seam.
              </p>
            </div>
          </section>

          {/* Seam Weld Types */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Seam Weld Types</h2>
            <div className="space-y-4">
              {seamTypes.map((type) => (
                <div
                  key={type.name}
                  className="flex items-start p-6 border border-gray-200 rounded-lg bg-white"
                >
                  <span className="w-3 h-3 rounded-full bg-[#EF290E] mr-4 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D2931] mb-1">{type.name}</h3>
                    <p className="text-[#6F7B83]">{type.description}</p>
                  </div>
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

          {/* Advantages */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Advantages of Seam Welding</h2>
            <p className="text-lg text-[#6F7B83] mb-8 max-w-2xl">
              Seam welding is the go-to process for applications requiring continuous, leak-tight joints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
                  <h3 className="text-lg font-bold text-[#EF290E] mb-3">{advantage.title}</h3>
                  <p className="text-[#6F7B83]">{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications & Industries */}
          <section className="px-8 lg:px-16 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Applications</h2>
                <p className="text-[#6F7B83] mb-6">
                  Seam welding is essential for products requiring leak-proof, pressure-tight joints.
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

              {/* Industries */}
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Industries</h2>
                <p className="text-[#6F7B83] mb-6">
                  Industries manufacturing sealed containers and tubular products rely on seam welding for production efficiency.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white text-center">
                      <span className="font-medium text-[#1D2931]">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Related Products</h2>
            <p className="text-lg text-[#6F7B83] mb-8 max-w-2xl">
              SVS Maverick provides high-quality seam welding consumables and equipment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="flex flex-col p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all group"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#6F7B83] mb-4">{product.description}</p>
                  </div>
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

          {/* CTA Section */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 border border-gray-200 rounded-lg bg-white">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-2">Need Seam Welding Solutions?</h2>
                <p className="text-[#6F7B83]">
                  Our experts can help you select the right seam welding wheels and materials for your leak-tight joining applications.
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
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded hover:bg-[#1D2931] hover:text-white transition-colors"
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
