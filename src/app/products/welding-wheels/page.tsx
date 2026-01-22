import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Seam Welding Wheels | SVS Maverick',
  description: 'High-performance seam welding wheels for continuous resistance welding. Engineered for fuel tanks, radiators, drums, and industrial container production.',
};

export default function WeldingWheelsPage() {
  const features = [
    {
      title: 'Precision Profile Machining',
      description: 'CNC-machined wheel profiles ensure consistent contact width and optimal current density throughout the weld seam.',
    },
    {
      title: 'Superior Thermal Management',
      description: 'Internal cooling designs and optimal material selection maintain stable wheel temperature during continuous operation.',
    },
    {
      title: 'Extended Service Life',
      description: 'Premium copper alloys with enhanced wear resistance deliver maximum wheel life between dressing operations.',
    },
    {
      title: 'Dressable Surface',
      description: 'Wheel surfaces can be redressed multiple times to restore optimal profile, maximizing total wheel utilization.',
    },
  ];

  const specifications = [
    { label: 'Wheel Diameters', value: '100mm - 500mm' },
    { label: 'Wheel Widths', value: '5mm - 50mm' },
    { label: 'Profile Types', value: 'Flat, Radius, V-Groove, Custom' },
    { label: 'Bore Sizes', value: '20mm - 100mm' },
    { label: 'Current Capacity', value: 'Up to 50,000A' },
    { label: 'Welding Speed', value: 'Up to 30 m/min' },
  ];

  const applications = [
    'Automotive fuel tank manufacturing',
    'Radiator and heat exchanger production',
    'Steel drum and container fabrication',
    'HVAC ductwork manufacturing',
    'Appliance housing production',
    'Aerospace structural welding',
    'Pipe and tube seam welding',
    'Can and packaging production',
  ];

  const wheelTypes = [
    {
      name: 'Solid Wheels',
      description: 'Traditional single-piece construction for general seam welding applications',
      features: ['Cost-effective', 'Simple maintenance', 'Wide range of sizes'],
    },
    {
      name: 'Segmented Wheels',
      description: 'Multi-segment design allowing individual segment replacement',
      features: ['Reduced wheel costs', 'Faster changeover', 'Optimized cooling'],
    },
    {
      name: 'Knurled Wheels',
      description: 'Surface-textured wheels for improved material grip and current transfer',
      features: ['Enhanced traction', 'Better seam tracking', 'Coated material welding'],
    },
  ];

  const keyBenefits = [
    'Consistent weld quality throughout wheel life',
    'Multiple redressing cycles for maximum utilization',
    'Precision profiles for optimal current density',
    'Internal cooling options for high-speed welding',
    'Compatible with all major seam welding machines',
    'Custom profiles for specialized applications',
  ];

  const profileTypes = [
    { name: 'Flat Profile', desc: 'Standard profile for general seam welding' },
    { name: 'Radius Profile', desc: 'Rounded edge for improved contact distribution' },
    { name: 'V-Groove Profile', desc: 'For welding at corners and edges' },
    { name: 'Custom Profiles', desc: 'Application-specific geometries' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1 px-8 lg:px-16 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <Link href="/products/welding-technique/seam-welding" className="text-[#6F7B83] hover:text-[#1D2931]">SEAM WELDING</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <span className="text-[#1D2931] font-medium">WELDING WHEELS</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
            Seam Welding Wheels
          </h1>

          {/* Intro Text */}
          <p className="text-lg text-[#6F7B83] mb-8 max-w-3xl">
            High-performance seam welding wheels engineered for continuous resistance welding applications.
            Deliver consistent weld quality for fuel tanks, radiators, drums, and industrial containers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/materials/copper-materials"
              className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              View Materials
            </Link>
          </div>

          {/* Product Description Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Continuous Welding Excellence</h2>
                <p className="text-[#6F7B83] mb-4">
                  Seam welding is a continuous resistance welding process where rotating electrode
                  wheels produce overlapping spot welds to create leak-tight joints. The quality
                  of the weld seam depends critically on the precision of the welding wheels
                  and their ability to maintain consistent contact throughout the welding operation.
                </p>
                <p className="text-[#6F7B83] mb-4">
                  Our seam welding wheels are precision-machined from premium copper alloys to
                  deliver the exact profile geometry and surface quality needed for reliable
                  seam welding. The material selection balances electrical conductivity with
                  wear resistance to maximize wheel life while maintaining optimal weld quality.
                </p>
                <p className="text-[#6F7B83]">
                  From automotive fuel tanks to industrial drums, our welding wheels support
                  the most demanding continuous welding applications. We offer standard designs
                  for common applications as well as custom-engineered solutions for specialized
                  requirements.
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
          </section>

          {/* Wheel Types Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Wheel Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wheelTypes.map((type, index) => (
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

          {/* Features Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                  <p className="text-[#6F7B83]">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Profile Types Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Wheel Profile Types</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {profileTypes.map((profile, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <h3 className="font-semibold text-[#1D2931] mb-2">{profile.name}</h3>
                  <p className="text-sm text-[#6F7B83]">{profile.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Materials Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Available Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCr1Zr</h3>
                <p className="text-[#6F7B83] mb-3">Standard material for most seam welding applications with excellent balance of properties.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCoBe</h3>
                <p className="text-[#6F7B83] mb-3">Premium alloy for high-wear applications requiring extended wheel life.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuNi2SiCr</h3>
                <p className="text-[#6F7B83] mb-3">High-strength alloy for demanding continuous welding operations.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
            </div>
          </section>

          {/* Specifications and Applications */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
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
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start border border-gray-200 rounded-lg bg-white p-4">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83]">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/products/welding-systems-connection-cables" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Connection Cables</h3>
                <p className="text-[#6F7B83] mb-3">Flexible cables for connecting seam welders to power sources.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
              <Link href="/products/welding-systems-lamella-shunts" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Lamella Shunts</h3>
                <p className="text-[#6F7B83] mb-3">Flexible conductors for current transfer to welding wheel assemblies.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#1D2931] mb-4">
              Optimize Your Seam Welding Operations
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
              Our seam welding specialists can help you select the optimal wheel configuration
              and material for your specific application. Contact us for technical consultation.
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
