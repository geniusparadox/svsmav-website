import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Micro Welding Electrodes | SVS Maverick',
  description: 'Precision micro welding electrodes for electronics, medical devices, and fine wire applications. Engineered for ultra-precise joining operations.',
};

export default function MicroWeldingElectrodesPage() {
  const features = [
    {
      title: 'Ultra-Fine Tip Precision',
      description: 'Tip diameters as small as 0.3mm enable precise welding of miniature components with minimal heat-affected zones.',
    },
    {
      title: 'Exceptional Surface Finish',
      description: 'Mirror-polished contact surfaces ensure consistent electrical contact and prevent contamination of sensitive components.',
    },
    {
      title: 'Tight Tolerances',
      description: 'Manufactured to tolerances of +/- 0.01mm for repeatable positioning in automated micro-welding systems.',
    },
    {
      title: 'Material Purity',
      description: 'High-purity electrode materials prevent contamination in critical applications like medical device and semiconductor manufacturing.',
    },
  ];

  const specifications = [
    { label: 'Tip Diameter Range', value: '0.3mm - 6mm' },
    { label: 'Electrode Lengths', value: '10mm - 100mm' },
    { label: 'Positional Tolerance', value: '+/- 0.01mm' },
    { label: 'Surface Finish', value: 'Ra < 0.4 (polished)' },
    { label: 'Tip Geometries', value: 'Flat, Radius, Truncated Cone' },
    { label: 'Current Range', value: '1A - 5,000A' },
  ];

  const applications = [
    'Battery cell tab welding',
    'Medical device component assembly',
    'Semiconductor lead frame bonding',
    'Fine wire termination',
    'Sensor and connector manufacturing',
    'Watch and jewelry manufacturing',
    'Aerospace micro-components',
    'Electronic module assembly',
  ];

  const electrodeCategories = [
    {
      name: 'Ultra-Fine Electrodes',
      description: 'For micro-scale welding with tip diameters from 0.3mm to 1mm',
      specs: ['Battery cell welding', 'Wire bonding', 'Micro-connector assembly'],
    },
    {
      name: 'Precision Electrodes',
      description: 'Standard micro welding with tip diameters from 1mm to 3mm',
      specs: ['Sensor manufacturing', 'Medical devices', 'Electronic components'],
    },
    {
      name: 'Small-Scale Electrodes',
      description: 'Fine resistance welding with tip diameters from 3mm to 6mm',
      specs: ['Small fasteners', 'Wire terminations', 'Component attachment'],
    },
  ];

  const keyBenefits = [
    'Precise heat concentration for minimal component damage',
    'Consistent weld quality at micro scale',
    'Compatible with automated micro-welding systems',
    'High-purity materials for contamination-sensitive applications',
    'Custom tip geometries for specific applications',
    'Expert support for electrode selection',
  ];

  const industries = [
    { name: 'Battery Manufacturing', desc: 'Cell tab and busbar welding' },
    { name: 'Medical Devices', desc: 'Precision component assembly' },
    { name: 'Electronics', desc: 'PCB and connector welding' },
    { name: 'Aerospace', desc: 'Micro-component joining' },
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
            <span className="text-[#6F7B83]">MICRO WELDING</span>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <span className="text-[#1D2931] font-medium">ELECTRODES</span>
          </nav>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
            Micro Welding Electrodes
          </h1>

          {/* Intro */}
          <p className="text-xl text-[#6F7B83] mb-8 max-w-4xl">
            Precision-engineered electrodes for micro resistance welding applications.
            Deliver ultra-precise joining for electronics, medical devices, and miniature component assembly.
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
              href="/materials/copper-materials"
              className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              View Materials
            </Link>
          </div>

          {/* Product Description Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Precision at the Micro Scale</h2>
                <p className="text-[#6F7B83] mb-4">
                  Micro welding demands electrodes that can deliver precise current to extremely small
                  areas while maintaining consistent contact geometry. Our micro welding electrodes
                  are manufactured using advanced precision machining techniques to achieve the tight
                  tolerances and surface finishes required for demanding micro-joining applications.
                </p>
                <p className="text-[#6F7B83] mb-4">
                  From battery cell tab welding to medical device assembly, these electrodes enable
                  reliable joining of miniature components where conventional welding electrodes
                  cannot provide the required precision. The exceptional surface finish prevents
                  sticking and ensures clean weld surfaces critical for sensitive applications.
                </p>
                <p className="text-[#6F7B83]">
                  Available in a range of high-purity materials selected for specific application
                  requirements, our micro welding electrodes support both manual precision welding
                  and high-speed automated production systems.
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

          {/* Electrode Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Electrode Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {electrodeCategories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-3">{category.name}</h3>
                  <p className="text-[#6F7B83] mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.specs.map((spec, sIndex) => (
                      <li key={sIndex} className="flex items-center text-sm text-[#6F7B83]">
                        <svg className="w-4 h-4 mr-2 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
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

          {/* Materials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/materials/copper-materials/cucr1zr" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCr1Zr</h3>
                <p className="text-[#6F7B83] mb-3">Standard choice for general micro welding applications.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials/copper-materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">CuCoBe</h3>
                <p className="text-[#6F7B83] mb-3">High-hardness for extended wear life in production.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Tungsten</h3>
                <p className="text-[#6F7B83] mb-3">For high-temperature micro welding applications.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
              <Link href="/materials" className="block border border-gray-200 rounded-lg bg-white p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Molybdenum</h3>
                <p className="text-[#6F7B83] mb-3">High-purity option for sensitive component welding.</p>
                <span className="text-[#EF290E] font-medium">Learn more &rarr;</span>
              </Link>
            </div>
          </section>

          {/* Specifications and Applications */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <ul className="space-y-3">
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
          </section>

          {/* Industries Served */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Industries Served</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <h3 className="font-semibold text-[#1D2931] mb-2">{industry.name}</h3>
                  <p className="text-sm text-[#6F7B83]">{industry.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                Need Precision Micro Welding Solutions?
              </h2>
              <p className="text-[#6F7B83] mb-8">
                Our micro welding specialists can help you select or design electrodes optimized
                for your specific application requirements. Contact us for expert consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Expert Consultation
                </Link>
                <Link
                  href="/products"
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Browse All Products
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
