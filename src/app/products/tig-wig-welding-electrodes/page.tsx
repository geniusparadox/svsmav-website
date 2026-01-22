import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'TIG/WIG Welding Electrodes | SVS Maverick',
  description: 'Premium tungsten electrodes for TIG/WIG welding. High-quality pure and alloyed tungsten electrodes for precision welding applications.',
};

export default function TigWigWeldingElectrodesPage() {
  const features = [
    {
      title: 'Stable Arc Performance',
      description: 'Consistent arc starting and stability for precision welding across all materials.',
    },
    {
      title: 'Long Electrode Life',
      description: 'Premium tungsten alloys provide excellent wear resistance and extended service life.',
    },
    {
      title: 'Low Contamination',
      description: 'High-purity materials minimize tungsten inclusions in the weld pool.',
    },
    {
      title: 'Versatile Applications',
      description: 'Full range of alloy types for welding steel, aluminum, titanium, and exotic metals.',
    },
  ];

  const specifications = [
    { label: 'Electrode Diameters', value: '0.5mm - 6.4mm' },
    { label: 'Standard Lengths', value: '150mm, 175mm' },
    { label: 'Alloy Types', value: 'Pure, Thoriated, Ceriated, Lanthanated' },
    { label: 'Tip Geometries', value: 'Ground, Ball, Truncated' },
    { label: 'Current Types', value: 'AC, DC, AC/DC' },
    { label: 'Standards', value: 'ISO 6848, AWS A5.12' },
  ];

  const electrodeTypes = [
    {
      name: 'Pure Tungsten (WP)',
      color: 'Green',
      description: 'For AC welding of aluminum and magnesium. Forms a clean balled tip.',
      applications: ['Aluminum welding', 'Magnesium welding', 'AC TIG processes'],
    },
    {
      name: 'Thoriated (WT20)',
      color: 'Red',
      description: 'Industry standard for DC welding. Excellent arc starting and stability.',
      applications: ['Carbon steel', 'Stainless steel', 'Nickel alloys', 'Titanium'],
    },
    {
      name: 'Ceriated (WC20)',
      color: 'Gray',
      description: 'Non-radioactive alternative to thoriated. Excellent for low-amperage DC.',
      applications: ['Thin materials', 'Orbital welding', 'Precision work'],
    },
    {
      name: 'Lanthanated (WL15/WL20)',
      color: 'Gold/Blue',
      description: 'Versatile non-radioactive electrode for AC and DC welding.',
      applications: ['All metals', 'AC and DC', 'Automated welding'],
    },
  ];

  const materials = [
    {
      name: 'Pure Tungsten',
      description: 'Highest purity tungsten for AC welding of aluminum and magnesium alloys.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Thorium Oxide (ThO2)',
      description: 'Traditional additive for excellent DC welding performance on steel.',
      link: '/materials/copper-materials',
    },
    {
      name: 'Rare Earth Oxides',
      description: 'Cerium, lanthanum, and yttrium oxides for enhanced arc performance.',
      link: '/materials/copper-materials',
    },
  ];

  const applications = [
    'Aerospace component fabrication',
    'Stainless steel fabrication',
    'Aluminum welding',
    'Pipe and tube welding',
    'Nuclear industry applications',
    'Food and beverage equipment',
    'Pharmaceutical manufacturing',
    'Precision instrument manufacturing',
  ];

  const diameters = [
    '0.5mm', '1.0mm', '1.6mm', '2.0mm', '2.4mm', '3.0mm', '3.2mm', '4.0mm', '4.8mm',
    '6.4mm', '1/16"', '3/32"', '1/8"', '5/32"', '3/16"', '1/4"', '5/16"', '3/8"'
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1 px-8 lg:px-16 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-[#6F7B83]">
              <li><Link href="/" className="hover:text-[#1D2931] transition-colors">HOME</Link></li>
              <li>&gt;</li>
              <li><Link href="/products" className="hover:text-[#1D2931] transition-colors">PRODUCTS</Link></li>
              <li>&gt;</li>
              <li><Link href="/products/welding-technique/tig-wig-welding" className="hover:text-[#1D2931] transition-colors">TIG WELDING</Link></li>
              <li>&gt;</li>
              <li className="text-[#1D2931] font-medium">ELECTRODES</li>
            </ol>
          </nav>

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              TIG/WIG Welding Electrodes
            </h1>
            <p className="text-lg text-[#6F7B83] max-w-3xl">
              Premium tungsten electrodes for precision TIG (GTAW) and WIG welding applications.
              Our electrodes deliver stable arc performance, excellent current carrying capacity,
              and long service life for demanding welding operations.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="#electrode-types"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded-lg hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              View Electrode Types
            </Link>
          </div>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Features & Benefits
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-2xl">
              Our tungsten electrodes are manufactured to the highest quality standards for reliable welding performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <div className="w-10 h-10 bg-[#EF290E] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                  <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Electrode Types Section */}
          <section id="electrode-types" className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Tungsten Electrode Types
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-3xl">
              We offer a complete range of tungsten electrode alloys to match your specific welding requirements.
              Each type is color-coded according to ISO standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {electrodeTypes.map((type, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-semibold text-[#1D2931]">{type.name}</h3>
                    <span className="text-xs text-[#6F7B83] bg-[#F4F3EE] px-3 py-1 rounded-full">
                      {type.color} Tip
                    </span>
                  </div>
                  <p className="text-[#6F7B83] text-sm mb-4">{type.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-[#1D2931] mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-xs text-[#6F7B83] bg-[#F4F3EE] px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Available Diameters Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Available Diameters
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-3xl">
              We stock tungsten electrodes in all standard metric and imperial diameters.
            </p>
            <div className="border border-gray-200 rounded-lg bg-white p-6">
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {diameters.map((size) => (
                  <div key={size} className="bg-[#F4F3EE] p-3 rounded-lg text-center">
                    <span className="text-sm font-semibold text-[#1D2931]">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Materials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
              Electrode Materials
            </h2>
            <p className="text-[#6F7B83] mb-8 max-w-3xl">
              Our tungsten electrodes are manufactured from high-purity tungsten with precisely controlled oxide additions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-3">{material.name}</h3>
                  <p className="text-[#6F7B83] text-sm mb-6">{material.description}</p>
                  <Link
                    href={material.link}
                    className="inline-flex items-center text-[#EF290E] font-medium text-sm hover:underline"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications & Applications */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Specifications */}
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">
                  Technical Specifications
                </h2>
                <div className="space-y-0">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-4 border-b border-gray-100 last:border-b-0">
                      <span className="text-[#6F7B83] text-sm">{spec.label}</span>
                      <span className="font-semibold text-[#1D2931] text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="border border-gray-200 rounded-lg bg-white p-6">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">
                  Applications
                </h2>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#6F7B83] text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1D2931] mb-4">
                Need Tungsten Electrodes for Your Application?
              </h2>
              <p className="text-[#6F7B83] mb-8">
                Contact our welding specialists to find the right tungsten electrode type and size for your TIG welding needs.
                We offer bulk pricing and technical support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#EF290E] text-white font-semibold rounded-lg hover:bg-[#D42208] transition-colors"
                >
                  Get Expert Advice
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1D2931] text-[#1D2931] font-semibold rounded-lg hover:bg-[#1D2931] hover:text-white transition-colors"
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
