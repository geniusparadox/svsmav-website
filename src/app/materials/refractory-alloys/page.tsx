import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Refractory Alloys Semi-Finished Products | SVS Maverick',
  description: 'High-performance refractory metals and alloys - WIRBALIT® Tungsten, Molybdenum, TZM, Tungsten-Copper, and Tantalum for demanding high-temperature applications.',
};

export default function RefractoryAlloysPage() {
  const refractoryMaterials = [
    {
      name: 'WIRBALIT® Tungsten',
      formula: 'W',
      standard: 'KW / WS',
      description: 'The highest melting point of all metals. Exceptional high-temperature strength, density, and radiation shielding properties for demanding applications.',
      href: '/materials/refractory-alloys/tungsten',
    },
    {
      name: 'WIRBALIT® M100 Molybdenum',
      formula: 'Mo',
      standard: '99.95%+',
      description: 'High-temperature metal with excellent thermal conductivity and low thermal expansion. Ideal for glass processing and high-temperature structural applications.',
      href: '/materials/refractory-alloys/molybdenum',
    },
    {
      name: 'Titanium-Zirconium-Molybdenum',
      formula: 'TZM',
      standard: 'Mo-Ti-Zr-C',
      description: 'Premium molybdenum alloy with superior high-temperature strength and recrystallization resistance for die casting and forging applications.',
      href: '/materials/refractory-alloys/tzm',
    },
    {
      name: 'Tungsten-Copper',
      formula: 'WCu',
      standard: 'W70Cu30 to W90Cu10',
      description: 'Composite material combining tungsten\'s wear resistance with copper\'s electrical and thermal conductivity for EDM and electrical contacts.',
      href: '/materials/refractory-alloys/tungsten-copper',
    },
    {
      name: 'Tungsten Heavy Metal',
      formula: 'WNiFe / WNiCu',
      standard: 'W90 to W97',
      description: 'High-density tungsten alloys with excellent machinability. Ideal for radiation shielding, counterweights, and aerospace applications.',
      href: '/materials/refractory-alloys/tungsten-heavy-metal',
    },
    {
      name: 'WIRBALIT® Tantalum',
      formula: 'Ta',
      standard: '99.95%+',
      description: 'Highly corrosion-resistant refractory metal with excellent biocompatibility for chemical processing and medical applications.',
      href: '/materials/refractory-alloys/tantalum',
    },
  ];

  const keyFeatures = [
    { title: 'Extreme Temperature Resistance', description: 'Materials withstand temperatures from 2000°C to over 3400°C' },
    { title: 'High Density Options', description: 'Tungsten-based materials up to 19.3 g/cm³ for shielding applications' },
    { title: 'Excellent Thermal Properties', description: 'Superior thermal conductivity and low thermal expansion' },
    { title: 'Corrosion Resistance', description: 'Tantalum offers exceptional chemical resistance' },
    { title: 'Custom Manufacturing', description: 'Semi-finished products and custom parts to your specifications' },
    { title: 'Short Lead Times', description: 'Extensive inventory with immediate delivery capability' },
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
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/materials" className="text-gray-500 hover:text-[#1D2931]">SEMI-FINISHED PARTS</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#1D2931] font-medium">REFRACTORY ALLOYS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Refractory Alloys
            </h1>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              High-performance refractory metals for extreme temperature applications, radiation shielding, and specialized industrial uses.
            </p>
          </section>

          {/* Introduction */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Semi-Finished Materials & Custom Parts</h2>
                <p className="text-[#6F7B83] text-lg mb-6">
                  Refractory metals are characterized by their extremely high melting points, excellent high-temperature strength, and resistance to wear and corrosion. These materials are essential for applications where conventional metals cannot survive.
                </p>
                <p className="text-[#6F7B83] text-lg mb-6">
                  We supply semi-finished stock or custom-made parts tailored to your specific technical requirements. Our comprehensive range includes pure refractory metals, advanced alloys, and composite materials.
                </p>
                <p className="text-[#6F7B83] text-lg">
                  With our extensive inventory and in-house machining capabilities, we offer short lead times and flexible production of custom parts.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold text-[#1D2931] mb-6">Available Forms</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Rods & Bars', 'Plates & Sheets', 'Wire & Filaments', 'Tubes', 'Crucibles', 'Electrodes', 'Sputtering Targets', 'Custom Parts'].map((form) => (
                    <div key={form} className="flex items-center">
                      <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                      <span className="text-[#1D2931]">{form}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Key Material Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyFeatures.map((feature) => (
                <div key={feature.title} className="border border-gray-200 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#EF290E] rounded-full mt-2 mr-4"></div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1D2931] mb-1">{feature.title}</h3>
                      <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Materials List */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Refractory Materials Range</h2>
            <p className="text-[#6F7B83] text-lg mb-12 max-w-3xl">
              Each material offers unique properties for specific high-temperature and specialized applications.
            </p>
            <div className="space-y-6">
              {refractoryMaterials.map((material) => (
                <Link
                  key={material.formula}
                  href={material.href}
                  className="group block border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-lg transition-all hover:border-gray-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                          {material.name}
                        </h3>
                        <span className="text-[#EF290E] font-mono text-lg">{material.formula}</span>
                        <span className="text-[#6F7B83] text-sm hidden md:inline">({material.standard})</span>
                      </div>
                      <p className="text-[#6F7B83]">{material.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-8">
                      <span className="inline-flex items-center text-[#EF290E] font-semibold">
                        View Details
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Key Industries */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Key Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Aerospace & Defense',
                'Medical Technology',
                'Semiconductor',
                'Nuclear Energy',
                'Electrical Contacts',
                'High-Temperature Furnaces',
                'Chemical Processing',
                'Radiation Shielding',
              ].map((industry) => (
                <div key={industry} className="border border-gray-200 p-6 rounded-lg text-center">
                  <span className="text-[#1D2931] font-semibold">{industry}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Typical Applications */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Typical Applications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Resistance Welding Electrodes',
                'EDM Electrodes',
                'Radiation Shielding',
                'Counterweights',
                'Die Casting Dies',
                'Glass Melting Electrodes',
                'X-Ray Equipment',
                'Heat Sinks',
              ].map((app) => (
                <div key={app} className="border border-gray-200 p-4 rounded-lg text-center">
                  <span className="text-[#1D2931] font-medium">{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Custom Parts or Material Selection Help?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our materials experts can help you choose the optimal refractory metal or alloy for your specific application and produce custom parts to your specifications.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
