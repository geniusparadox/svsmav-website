import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Tungsten Heavy Metal (WNiFe/WNiCu) | SVS Maverick',
  description: 'Tungsten heavy metal alloys - high-density materials for radiation shielding, counterweights, and defense applications.',
};

export default function TungstenHeavyMetalPage() {
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
              <Link href="/materials/refractory-alloys" className="text-gray-500 hover:text-[#1D2931]">REFRACTORY ALLOYS</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-[#1D2931] font-medium">TUNGSTEN HEAVY METAL</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">WHM</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">Tungsten Heavy Metal (WHM)</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">WNiFe / WNiCu</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              High-density tungsten alloys with nickel-iron or nickel-copper matrix. Exceptional radiation shielding, superior machinability, and ideal for precision counterweight applications.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  Tungsten heavy metal (WHM) alloys consist of tungsten particles (90-97%) bonded together by a nickel-iron or nickel-copper matrix. This combination provides near-tungsten density with significantly improved ductility and machinability compared to pure tungsten.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density Range</span>
                    <span className="font-semibold text-[#1D2931]">17.0 - 18.5 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength</span>
                    <span className="font-semibold text-[#1D2931]">800-1000 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Elongation</span>
                    <span className="font-semibold text-[#1D2931]">5-15%</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Hardness</span>
                    <span className="font-semibold text-[#1D2931]">25-35 HRC</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Modulus of Elasticity</span>
                    <span className="font-semibold text-[#1D2931]">350-380 GPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity</span>
                    <span className="font-semibold text-[#1D2931]">90-120 W/mK</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'Radiation shielding (X-ray, gamma ray)',
                    'Medical collimators and shielding',
                    'Aircraft and helicopter counterweights',
                    'Automotive crankshaft balancing weights',
                    'Gyroscope components',
                    'Vibration damping weights',
                    'Kinetic energy penetrators',
                    'Boring bars and tool holders',
                    'Fishing and golf club weights',
                    'Industrial counterbalances',
                  ].map((app) => (
                    <li key={app} className="flex items-start">
                      <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                      <span className="text-[#6F7B83]">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Alloy Types */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Alloy Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1D2931] mb-4">WNiFe (Tungsten-Nickel-Iron)</h3>
                <p className="text-[#6F7B83] mb-6">
                  The most common tungsten heavy metal type. Offers excellent mechanical properties, good machinability, and is suitable for most applications. Magnetic due to iron content.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Higher strength and hardness
                  </li>
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Magnetic properties
                  </li>
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Lower cost option
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1D2931] mb-4">WNiCu (Tungsten-Nickel-Copper)</h3>
                <p className="text-[#6F7B83] mb-6">
                  Non-magnetic variant for applications requiring no magnetic interference. Slightly lower mechanical properties but essential for sensitive electronic and medical equipment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Non-magnetic
                  </li>
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Better corrosion resistance
                  </li>
                  <li className="flex items-center text-sm text-[#6F7B83]">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Higher ductility
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Density Grades */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Density Grades</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Grade</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">W Content (%)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Density (g/cm³)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Tensile Strength (MPa)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Elongation (%)</th>
                  </tr>
                </thead>
                <tbody className="text-[#6F7B83]">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W90</td>
                    <td className="px-6 py-4">90</td>
                    <td className="px-6 py-4">17.0</td>
                    <td className="px-6 py-4">800-900</td>
                    <td className="px-6 py-4">10-15</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W93</td>
                    <td className="px-6 py-4">93</td>
                    <td className="px-6 py-4">17.6</td>
                    <td className="px-6 py-4">850-950</td>
                    <td className="px-6 py-4">8-12</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W95</td>
                    <td className="px-6 py-4">95</td>
                    <td className="px-6 py-4">18.0</td>
                    <td className="px-6 py-4">900-1000</td>
                    <td className="px-6 py-4">5-10</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W97</td>
                    <td className="px-6 py-4">97</td>
                    <td className="px-6 py-4">18.5</td>
                    <td className="px-6 py-4">950-1050</td>
                    <td className="px-6 py-4">3-7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rods & Bars', 'Plates & Blocks', 'Cubes', 'Cylinders', 'Rings', 'Counterweights', 'Shielding', 'Custom Parts'].map((form) => (
                <div key={form} className="border border-gray-200 p-4 rounded text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Advantages */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Key Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-3">Superior Machinability</h3>
                <p className="text-[#6F7B83]">Unlike pure tungsten, WHM can be easily machined using conventional methods with carbide tools.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-3">High Ductility</h3>
                <p className="text-[#6F7B83]">Significantly more ductile than pure tungsten, allowing for complex shapes and reduced brittleness.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-3">Near-Tungsten Density</h3>
                <p className="text-[#6F7B83]">Achieves up to 96% of pure tungsten density while maintaining excellent workability.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of tungsten heavy metal products in your required grade, form, and quantity.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
