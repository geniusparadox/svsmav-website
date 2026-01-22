import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Laser Protection Windows | SVS Maverick',
  description: 'High-quality laser safety windows for industrial laser welding and cutting applications. Protect operators while maintaining process visibility.',
};

export default function LaserProtectionWindowsPage() {
  const features = [
    {
      title: 'Certified Protection',
      description: 'Windows certified to meet international laser safety standards including EN 207 and ANSI Z136 for operator protection.',
    },
    {
      title: 'Optical Clarity',
      description: 'High-transmission materials provide clear visibility of the welding process while blocking hazardous wavelengths.',
    },
    {
      title: 'Multi-Wavelength Protection',
      description: 'Available for all common industrial laser types including CO2, Nd:YAG, fiber, and diode lasers.',
    },
    {
      title: 'Durable Construction',
      description: 'Scratch-resistant coatings and impact-resistant substrates ensure long service life in industrial environments.',
    },
  ];

  const specifications = [
    { label: 'Protected Wavelengths', value: '180nm - 11,000nm' },
    { label: 'Optical Density', value: 'OD 4+ to OD 7+' },
    { label: 'Standard Sizes', value: '100x100mm - 1000x1000mm' },
    { label: 'Thickness Range', value: '3mm - 12mm' },
    { label: 'Light Transmission', value: 'Up to 85% VLT' },
    { label: 'Operating Temperature', value: '-20C to +80C' },
  ];

  const applications = [
    'Laser welding cell enclosures',
    'Laser cutting machine windows',
    'Robotic laser welding stations',
    'Laser marking and engraving systems',
    'Additive manufacturing enclosures',
    'Laser cleaning equipment',
    'Research and development facilities',
    'Medical device manufacturing',
  ];

  const laserTypes = [
    {
      name: 'CO2 Laser Windows',
      wavelength: '10,600nm',
      description: 'Protection for carbon dioxide laser systems',
      applications: ['Cutting', 'Welding', 'Marking'],
    },
    {
      name: 'Fiber Laser Windows',
      wavelength: '1,064nm - 1,080nm',
      description: 'Protection for fiber and Nd:YAG laser systems',
      applications: ['Welding', 'Cutting', 'Cleaning'],
    },
    {
      name: 'Diode Laser Windows',
      wavelength: '800nm - 980nm',
      description: 'Protection for semiconductor diode laser systems',
      applications: ['Brazing', 'Hardening', 'Cladding'],
    },
    {
      name: 'UV Laser Windows',
      wavelength: '180nm - 400nm',
      description: 'Protection for ultraviolet laser systems',
      applications: ['Marking', 'Ablation', 'Micromachining'],
    },
  ];

  const odData = [
    { od: 'OD 4+', factor: '10,000x', app: 'Low-power lasers up to 100W' },
    { od: 'OD 5+', factor: '100,000x', app: 'Medium-power lasers 100W-1kW' },
    { od: 'OD 6+', factor: '1,000,000x', app: 'High-power lasers 1kW-10kW' },
    { od: 'OD 7+', factor: '10,000,000x', app: 'Very high-power lasers 10kW+' },
  ];

  const certifications = [
    { name: 'EN 207', desc: 'European laser safety standard' },
    { name: 'EN 60825', desc: 'Laser equipment safety' },
    { name: 'ANSI Z136', desc: 'American laser safety standard' },
    { name: 'CE Marked', desc: 'European conformity' },
  ];

  const benefits = [
    'Certified to international laser safety standards',
    'High visible light transmission for process monitoring',
    'Protection against direct and reflected laser beams',
    'Durable construction for industrial environments',
    'Available for all common laser wavelengths',
    'Custom sizes and shapes available',
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
            <Link href="/products/laser-welding" className="text-[#6F7B83] hover:text-[#1D2931]">LASER WELDING</Link>
            <span className="mx-2 text-[#6F7B83]">&gt;</span>
            <span className="text-[#1D2931] font-medium">PROTECTION WINDOWS</span>
          </nav>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-8">
            Laser Protection Windows
          </h1>

          {/* Introduction */}
          <p className="text-lg text-[#6F7B83] mb-8 max-w-4xl">
            Certified laser safety windows for industrial welding and cutting applications.
            Protect operators from hazardous laser radiation while maintaining clear visibility of the process.
          </p>

          {/* Safety Warning Banner */}
          <div className="border-l-4 border-[#EF290E] bg-white p-4 rounded-r-lg mb-12">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-[#EF290E] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-[#1D2931] font-medium">Important: Always select laser protection windows certified for your specific laser wavelength and power level.</p>
            </div>
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
              href="/contact"
              className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
            >
              Technical Consultation
            </Link>
          </div>

          {/* Product Description Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h2 className="text-2xl font-bold text-[#1D2931] mb-6">Certified Laser Safety Solutions</h2>
                <p className="text-[#6F7B83] mb-4">
                  Industrial laser systems generate concentrated light that can cause severe eye
                  injuries and skin burns. Our laser protection windows provide a critical safety
                  barrier between operators and laser radiation while allowing clear visibility
                  of the welding or cutting process.
                </p>
                <p className="text-[#6F7B83] mb-4">
                  Each window is manufactured with precision optical materials that selectively
                  absorb or reflect hazardous laser wavelengths while transmitting visible light.
                  The protection level (Optical Density) is carefully engineered to match specific
                  laser types and power levels, ensuring compliance with workplace safety regulations.
                </p>
                <p className="text-[#6F7B83]">
                  SVS Maverick offers laser protection windows for all common industrial laser types,
                  including standard sizes for retrofit applications and custom-fabricated windows
                  for specialized enclosures and machine designs.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg bg-white p-8">
                <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
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

          {/* Laser Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Protection by Laser Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {laserTypes.map((type, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                  <h3 className="text-lg font-bold text-[#1D2931] mb-2">{type.name}</h3>
                  <p className="text-sm text-[#EF290E] font-mono mb-3">{type.wavelength}</p>
                  <p className="text-[#6F7B83] text-sm mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app, aIndex) => (
                      <span key={aIndex} className="bg-[#F4F3EE] text-[#6F7B83] text-xs px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
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

          {/* Optical Density Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Understanding Optical Density</h2>
            <p className="text-[#6F7B83] mb-8 max-w-3xl">
              Optical Density (OD) indicates the level of laser protection. Higher OD values provide greater
              attenuation of laser power. The required OD depends on your laser wavelength and power output.
            </p>
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#1D2931] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Optical Density</th>
                    <th className="px-6 py-4 text-left font-semibold">Attenuation Factor</th>
                    <th className="px-6 py-4 text-left font-semibold">Typical Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {odData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                      <td className="px-6 py-4 text-[#1D2931] font-semibold">{row.od}</td>
                      <td className="px-6 py-4 text-[#6F7B83]">{row.factor}</td>
                      <td className="px-6 py-4 text-[#6F7B83]">{row.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Specifications and Applications */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Standards & Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                  <h3 className="font-bold text-[#1D2931] mb-2">{cert.name}</h3>
                  <p className="text-sm text-[#6F7B83]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="border border-gray-200 rounded-lg bg-white p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">
                Need Laser Safety Expertise?
              </h2>
              <p className="text-[#6F7B83] mb-8">
                Our laser safety specialists can help you select the correct protection windows
                for your specific laser system and application. Contact us for expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Get Safety Consultation
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
