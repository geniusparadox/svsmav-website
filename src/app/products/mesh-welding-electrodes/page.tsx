import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Mesh Welding Electrodes | SVS Maverick',
  description: 'High-performance electrodes for wire mesh and reinforcement welding. Engineered for extended service life in automated mesh production.',
};

export default function MeshWeldingElectrodesPage() {
  const features = [
    {
      title: 'Optimized Contact Geometry',
      description: 'Precisely engineered tip profiles ensure consistent current distribution across each weld point for uniform joint quality.',
    },
    {
      title: 'Extended Electrode Life',
      description: 'Premium materials and heat treatment processes deliver exceptional wear resistance for high-volume mesh production.',
    },
    {
      title: 'Rapid Heat Dissipation',
      description: 'Superior thermal conductivity prevents overheating and maintains electrode integrity during continuous operation.',
    },
    {
      title: 'Consistent Weld Quality',
      description: 'Stable electrical and thermal properties ensure repeatable weld nugget formation throughout electrode service life.',
    },
  ];

  const specifications = [
    { label: 'Wire Diameter Range', value: '3mm - 16mm' },
    { label: 'Electrode Face Styles', value: 'Flat, Radius, V-Groove' },
    { label: 'Shank Diameters', value: '16mm - 50mm' },
    { label: 'Standard Lengths', value: '50mm - 200mm' },
    { label: 'Hardness Range', value: '120-200 HB' },
    { label: 'Electrical Conductivity', value: '> 75% IACS' },
  ];

  const applications = [
    'Reinforcing mesh for concrete construction',
    'Industrial wire mesh and screens',
    'Fencing and security mesh',
    'Architectural mesh panels',
    'Automotive seat frames and components',
    'Shopping cart and display fixtures',
  ];

  const electrodeTypes = [
    {
      name: 'Upper Electrodes',
      description: 'Fixed or adjustable upper electrodes for vertical force application',
      features: ['Multiple tip geometries', 'Quick-change designs', 'Water cooling options'],
    },
    {
      name: 'Lower Electrodes',
      description: 'Anvil-style electrodes providing stable support for mesh wires',
      features: ['Flat and grooved profiles', 'Wear-resistant surfaces', 'High current capacity'],
    },
    {
      name: 'Cross-Wire Electrodes',
      description: 'Specialized designs for crossing wire intersections',
      features: ['Optimized contact area', 'Even pressure distribution', 'Extended service life'],
    },
  ];

  const keyBenefits = [
    'Reduced electrode consumption and changeover time',
    'Consistent weld quality across entire mesh sheets',
    'Compatible with all major mesh welding machines',
    'Available for wire sizes from 3mm to 16mm',
    'Quick-change designs minimize production interruptions',
    'Expert technical support for electrode selection',
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1 p-8 lg:p-12">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <span className="text-[#6F7B83]">MESH WELDING</span>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <span className="text-[#1D2931] font-medium">ELECTRODES</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
            Mesh Welding Electrodes
          </h1>

          <p className="text-xl text-[#6F7B83] mb-8 max-w-3xl">
            Purpose-built electrodes for wire mesh and reinforcement welding applications.
            Designed to deliver consistent weld quality and maximum productivity in automated mesh production lines.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/products/mesh-welding-electrode-holders"
              className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              View Electrode Holders
            </Link>
          </div>

          {/* Product Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-lg bg-white p-8">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Precision Electrodes for Mesh Production</h2>
              <p className="text-[#6F7B83] mb-4">
                Wire mesh welding requires electrodes that can maintain consistent performance across
                thousands of rapid welding cycles. Our mesh welding electrodes are engineered specifically
                for this demanding application, providing the reliability and longevity that modern
                mesh production lines require.
              </p>
              <p className="text-[#6F7B83] mb-4">
                The unique demands of mesh welding - rapid cycle times, varying wire diameters, and
                continuous operation - require electrodes with exceptional thermal management and
                wear resistance. Our electrodes are manufactured from premium copper alloys selected
                for their optimal combination of conductivity, hardness, and temperature stability.
              </p>
              <p className="text-[#6F7B83]">
                Whether you produce construction reinforcement mesh, industrial screens, or decorative
                wire panels, SVS Maverick offers electrode solutions tailored to your specific requirements.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg bg-white p-8">
              <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6F7B83]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Electrode Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Electrode Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {electrodeTypes.map((type, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-3">{type.name}</h3>
                  <p className="text-[#6F7B83] mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, fIndex) => (
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
          </section>

          {/* Product Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                  <p className="text-[#6F7B83]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Available Materials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCr1Zr</h3>
                <p className="text-[#6F7B83] mb-3">Standard material for general mesh welding with excellent conductivity.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCoBe</h3>
                <p className="text-[#6F7B83] mb-3">Premium alloy for high-volume production requiring maximum wear resistance.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Dispersion Hardened</h3>
                <p className="text-[#6F7B83] mb-3">Al2O3-reinforced copper for extreme service conditions.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
            </div>
          </section>

          {/* Technical Specifications & Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                {specifications.map((spec, index) => (
                  <div key={index} className={`flex justify-between p-4 ${index !== specifications.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="text-[#6F7B83]">{spec.label}</span>
                    <span className="font-semibold text-[#1D2931]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <ul className="space-y-4">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/products/mesh-welding-electrode-holders" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Mesh Welding Electrode Holders</h3>
                <p className="text-[#6F7B83] mb-3">Complete holder systems designed to work with our mesh welding electrodes.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
              <Link href="/products/welding-wheels" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Welding Wheels</h3>
                <p className="text-[#6F7B83] mb-3">Seam welding wheels for continuous wire mesh production lines.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Maximize Your Mesh Production Efficiency
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
              Our welding specialists can help you select the optimal electrode configuration
              for your mesh welding application. Contact us for technical consultation and quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Get Technical Support
              </Link>
              <Link
                href="/products"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
