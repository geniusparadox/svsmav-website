import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Mesh Welding Electrode Holders | SVS Maverick',
  description: 'Robust electrode holders for mesh welding systems. Engineered for reliable current transfer and quick electrode changes in high-production environments.',
};

export default function MeshElectrodeHoldersPage() {
  const features = [
    {
      title: 'Quick-Change Design',
      description: 'Rapid electrode replacement minimizes downtime during production changeovers and electrode maintenance.',
    },
    {
      title: 'Optimal Current Transfer',
      description: 'Precision-machined contact surfaces ensure consistent electrical transfer from transformer to electrode.',
    },
    {
      title: 'Integrated Cooling',
      description: 'Water cooling channels maintain optimal operating temperatures during continuous high-speed production.',
    },
    {
      title: 'Robust Construction',
      description: 'Heavy-duty design withstands the mechanical stresses of high-force, high-speed mesh welding operations.',
    },
  ];

  const specifications = [
    { label: 'Electrode Shank Sizes', value: '16mm - 50mm diameter' },
    { label: 'Current Capacity', value: 'Up to 30,000A' },
    { label: 'Cooling Type', value: 'Internal water cooling' },
    { label: 'Mounting Options', value: 'Standard and custom' },
    { label: 'Electrode Clamping', value: 'Mechanical or hydraulic' },
    { label: 'Operating Force', value: 'Up to 10,000N' },
  ];

  const applications = [
    'Reinforcing mesh welding machines',
    'Industrial wire mesh production',
    'Fencing and security panel manufacturing',
    'Gratings and flooring panel production',
    'Automotive component mesh welding',
    'Custom wire product manufacturing',
  ];

  const holderTypes = [
    {
      name: 'Standard Holders',
      description: 'Versatile holders compatible with common mesh welding machine configurations',
      features: ['Universal mounting', 'Multiple shank sizes', 'Proven reliability'],
    },
    {
      name: 'Quick-Change Holders',
      description: 'Rapid electrode replacement for high-volume production environments',
      features: ['Tool-free changeover', 'Positive locking', 'Reduced downtime'],
    },
    {
      name: 'Heavy-Duty Holders',
      description: 'Reinforced designs for large wire diameters and high welding forces',
      features: ['Extra-strength construction', 'Enhanced cooling', 'High current capacity'],
    },
  ];

  const keyBenefits = [
    'Minimized downtime with quick-change designs',
    'Consistent weld quality through stable current transfer',
    'Extended service life in demanding applications',
    'Compatible with standard and custom electrodes',
    'Efficient cooling for continuous operation',
    'Available for all major machine brands',
  ];

  const machineBrands = ['EVG', 'Schlatter', 'Progress', 'IDEAL', 'MBK', 'AWM', 'TJK', 'Custom'];

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
            <span className="text-[#1D2931] font-medium">ELECTRODE HOLDERS</span>
          </nav>

          {/* Title Section */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Mesh Welding Electrode Holders
            </h1>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              Robust and reliable electrode holders engineered for mesh welding systems.
              Optimize your production efficiency with quick-change designs and superior current transfer capabilities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="/products/mesh-welding-electrodes"
              className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              View Electrodes
            </Link>
          </div>

          {/* Product Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">The Foundation of Reliable Mesh Welding</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                Electrode holders are critical components in any mesh welding system, responsible for
                securely positioning electrodes and efficiently transferring welding current. Our mesh
                welding electrode holders are designed to meet the demanding requirements of modern
                high-speed production environments.
              </p>
              <p className="text-[#6F7B83] text-lg mb-6">
                With integrated water cooling, precision-machined contact surfaces, and robust
                mechanical construction, these holders maintain optimal performance throughout
                extended production runs. The quick-change designs enable rapid electrode replacement,
                minimizing costly downtime during maintenance and changeovers.
              </p>
              <p className="text-[#6F7B83] text-lg">
                SVS Maverick offers electrode holders compatible with all major mesh welding machine
                manufacturers, as well as custom-engineered solutions for specialized applications.
                Our engineering team can work with you to develop holder configurations optimized
                for your specific production requirements.
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

          {/* Holder Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Holder Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {holderTypes.map((type, index) => (
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
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Product Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-3">{feature.title}</h3>
                  <p className="text-[#6F7B83]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Construction Materials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Construction Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCr1Zr Body</h3>
                <p className="text-[#6F7B83] mb-3">Primary holder body material providing excellent conductivity and strength.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCoBe Contacts</h3>
                <p className="text-[#6F7B83] mb-3">High-hardness contact surfaces for extended wear life.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Steel Components</h3>
                <p className="text-[#6F7B83] mb-3">Hardened steel for mechanical clamping and structural elements.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Specifications and Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Technical Specifications</h2>
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
              <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Applications</h2>
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

          {/* Machine Compatibility */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Machine Compatibility</h2>
            <p className="text-[#6F7B83] text-lg max-w-3xl mb-8">
              Our electrode holders are compatible with mesh welding machines from all major manufacturers.
              Contact us with your machine specifications for exact compatibility information.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {machineBrands.map((brand) => (
                <div key={brand} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                  <span className="text-[#1D2931] font-medium">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/products/mesh-welding-electrodes" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Mesh Welding Electrodes</h3>
                <p className="text-[#6F7B83] mb-3">Complete range of electrodes designed to work with our holder systems.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
              <Link href="/products/welding-systems-connection-cables" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Connection Cables</h3>
                <p className="text-[#6F7B83] mb-3">Flexible cables for connecting holders to welding transformers.</p>
                <span className="text-[#EF290E] font-medium">View product &rarr;</span>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Need Custom Electrode Holders?
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
              Our engineering team can design electrode holder solutions tailored to your specific
              mesh welding machine and production requirements. Contact us for a consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request Custom Quote
              </Link>
              <Link
                href="/products"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
