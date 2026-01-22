import Link from 'next/link';

export const metadata = {
  title: 'Copper Alloys & High-Melting Metals | SVS Maverick',
  description: 'Premium copper alloys and refractory metals for demanding industrial applications.',
};

export default function CopperAlloysPage() {
  const products = [
    {
      name: 'CuCrZr Alloys',
      description: 'Copper-Chromium-Zirconium alloys with excellent conductivity and wear resistance.',
      features: ['High electrical conductivity', 'Excellent thermal conductivity', 'Superior wear resistance', 'Heat treatable'],
    },
    {
      name: 'CuCr Alloys',
      description: 'Copper-Chromium alloys for high-performance welding applications.',
      features: ['Good electrical conductivity', 'High strength at elevated temperatures', 'Corrosion resistant', 'Weldable'],
    },
    {
      name: 'Tungsten Products',
      description: 'High-purity tungsten for extreme temperature applications.',
      features: ['Highest melting point of all metals', 'Excellent high-temperature strength', 'Low thermal expansion', 'High density'],
    },
    {
      name: 'Molybdenum Products',
      description: 'Molybdenum and molybdenum alloys for high-temperature use.',
      features: ['High melting point', 'Good thermal conductivity', 'Low coefficient of expansion', 'Excellent machinability'],
    },
    {
      name: 'Resistance Welding Electrodes',
      description: 'Precision electrodes for spot welding and seam welding applications.',
      features: ['Optimized tip geometry', 'Extended service life', 'Consistent weld quality', 'Multiple alloy options'],
    },
    {
      name: 'Custom Fabricated Components',
      description: 'Tailored solutions for specific application requirements.',
      features: ['Custom designs', 'Precision manufacturing', 'Material optimization', 'Technical consultation'],
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
              <li className="text-white">Copper Alloys</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Copper Alloys & High-Melting Metals</h1>
            <p className="text-xl text-[#B8BFC4]">
              Premium quality copper alloys and refractory metals engineered for the most demanding applications.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-[#6F7B83] mb-6">
              Our copper alloys and high-melting metals are specifically developed for resistance welding,
              electrical contacts, and high-temperature applications. With decades of metallurgical expertise,
              we offer materials that deliver exceptional performance in the most challenging environments.
            </p>
            <p className="text-lg text-[#6F7B83]">
              From standard alloy compositions to custom-engineered solutions, SVS Maverick provides
              comprehensive support from material selection through final application.
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

      {/* Applications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Resistance Welding</h3>
              <p className="text-sm text-[#6F7B83]">Electrodes, caps, and welding fixtures</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Electrical Contacts</h3>
              <p className="text-sm text-[#6F7B83]">Switchgear and power distribution</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">High-Temperature</h3>
              <p className="text-sm text-[#6F7B83]">Furnace components and heat shields</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#F4F3EE] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#1D2931] mb-2">Special Applications</h3>
              <p className="text-sm text-[#6F7B83]">Custom solutions for unique requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Technical Assistance?
          </h2>
          <p className="text-[#B8BFC4] mb-8">
            Our metallurgical experts are available to help you select the right material for your application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}
