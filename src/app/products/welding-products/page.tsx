import Link from 'next/link';

export const metadata = {
  title: 'Welding Products | SVS Maverick',
  description: 'Complete range of welding consumables and equipment for all welding processes.',
};

export default function WeldingProductsPage() {
  const products = [
    {
      name: 'MIG/MAG Welding Wires',
      description: 'High-quality solid and flux-cored wires for gas metal arc welding.',
      features: ['Excellent arc stability', 'Low spatter', 'High deposition rates', 'Multiple material options'],
    },
    {
      name: 'TIG Welding Electrodes',
      description: 'Tungsten electrodes for precision TIG welding applications.',
      features: ['Pure tungsten and alloys', 'Consistent arc performance', 'Long electrode life', 'Various tip geometries'],
    },
    {
      name: 'TIG Filler Rods',
      description: 'Premium filler metals for TIG welding various materials.',
      features: ['High purity', 'Consistent chemistry', 'Clean welds', 'Wide alloy selection'],
    },
    {
      name: 'Resistance Welding Equipment',
      description: 'Complete systems for spot, seam, and projection welding.',
      features: ['Automated controls', 'Precision force control', 'Energy efficient', 'Customizable'],
    },
    {
      name: 'Welding Accessories',
      description: 'Essential accessories for optimal welding performance.',
      features: ['Contact tips', 'Nozzles', 'Liners', 'Gas diffusers'],
    },
    {
      name: 'Safety Equipment',
      description: 'Protective gear for safe welding operations.',
      features: ['Welding helmets', 'Protective clothing', 'Ventilation systems', 'Fire protection'],
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
              <li className="text-white">Welding Products</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welding Products</h1>
            <p className="text-xl text-[#B8BFC4]">
              Complete range of welding consumables and equipment designed for all welding processes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-[#6F7B83] mb-6">
              SVS Maverick offers a comprehensive selection of welding consumables and equipment
              for MIG/MAG, TIG, resistance welding, and specialized joining processes. Our products
              are engineered to deliver consistent, high-quality results across a wide range of
              applications and materials.
            </p>
            <p className="text-lg text-[#6F7B83]">
              From automotive manufacturing to aerospace fabrication, our welding solutions are
              trusted by industries worldwide for their reliability and performance.
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

      {/* Welding Processes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12">Supported Welding Processes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F4F3EE] p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">MIG/MAG</div>
              <p className="text-[#6F7B83]">Gas Metal Arc Welding</p>
            </div>
            <div className="bg-[#F4F3EE] p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">TIG</div>
              <p className="text-[#6F7B83]">Gas Tungsten Arc Welding</p>
            </div>
            <div className="bg-[#F4F3EE] p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">RSW</div>
              <p className="text-[#6F7B83]">Resistance Spot Welding</p>
            </div>
            <div className="bg-[#F4F3EE] p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#EF290E] mb-2">Seam</div>
              <p className="text-[#6F7B83]">Resistance Seam Welding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#F4F3EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Automotive', 'Aerospace', 'Construction', 'Energy', 'Shipbuilding', 'Rail'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-xl text-center">
                <p className="font-medium text-[#1D2931]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1D2931] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Looking for Specific Welding Solutions?
          </h2>
          <p className="text-[#B8BFC4] mb-8">
            Our welding specialists can help you find the right products for your application.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </>
  );
}
