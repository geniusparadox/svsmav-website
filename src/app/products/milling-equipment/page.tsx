import Link from 'next/link';

export const metadata = {
  title: 'Milling Equipment | SVS Maverick',
  description: 'Precision milling devices and accessories for professional weld preparation.',
};

export default function MillingEquipmentPage() {
  const products = [
    {
      name: 'Electrode Tip Dressers',
      description: 'Automatic and manual tip dressers for optimal electrode geometry.',
      features: ['Consistent tip shape', 'Extended electrode life', 'Reduced downtime', 'Easy integration'],
    },
    {
      name: 'Milling Cutters',
      description: 'High-precision cutters for various electrode configurations.',
      features: ['Multiple geometries', 'Long tool life', 'Precise cutting', 'Quick change system'],
    },
    {
      name: 'Milling Inserts',
      description: 'Replaceable inserts for cost-effective operation.',
      features: ['Easy replacement', 'Consistent quality', 'Multiple edges', 'Various materials'],
    },
    {
      name: 'Pneumatic Drives',
      description: 'Air-powered drive units for tip dressing applications.',
      features: ['Compact design', 'Variable speed', 'Low maintenance', 'High torque'],
    },
    {
      name: 'Electric Drives',
      description: 'Electric motor drives for precision milling operations.',
      features: ['Precise speed control', 'Energy efficient', 'Quiet operation', 'Programmable'],
    },
    {
      name: 'Complete Systems',
      description: 'Integrated tip dressing solutions for production environments.',
      features: ['Turnkey solutions', 'Robot integration', 'Quality monitoring', 'Data logging'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-[#B8BFC4]">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li>/</li>
              <li className="text-white">Milling Equipment</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Milling Equipment</h1>
            <p className="text-xl text-[#B8BFC4]">
              Precision milling devices and accessories for professional weld preparation and electrode maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-[#6F7B83] mb-6">
              Proper electrode tip geometry is critical for consistent weld quality in resistance welding
              applications. Our milling equipment ensures optimal tip shape and surface condition,
              extending electrode life and maintaining weld integrity throughout production.
            </p>
            <p className="text-lg text-[#6F7B83]">
              From manual tip dressers to fully automated systems integrated with welding robots,
              SVS Maverick provides complete solutions for electrode maintenance in high-volume
              manufacturing environments.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12">Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl card-hover">
                <h3 className="text-xl font-semibold text-[#1D2931] mb-3">{product.name}</h3>
                <p className="text-[#6F7B83] mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-[#6F7B83]">
                      <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12 text-center">Benefits of Proper Tip Dressing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Consistent Quality</h3>
              <p className="text-sm text-[#6F7B83]">Maintain optimal weld quality throughout production runs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Extended Life</h3>
              <p className="text-sm text-[#6F7B83]">Significantly increase electrode service life</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Increased Productivity</h3>
              <p className="text-sm text-[#6F7B83]">Reduce downtime and increase throughput</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Cost Savings</h3>
              <p className="text-sm text-[#6F7B83]">Lower consumable costs and reduced waste</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12">Tip Geometries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Flat', 'Radius', 'Dome', 'Truncated Cone', 'Pointed', 'Offset', 'Custom'].map((geometry) => (
              <div key={geometry} className="bg-white p-6 rounded-xl text-center">
                <p className="font-medium text-[#1D2931]">{geometry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Milling Solution?
          </h2>
          <p className="text-[#B8BFC4] mb-8">
            We can develop tailored tip dressing solutions for your specific production requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </>
  );
}
