import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Molybdenum (Mo) - Pure Molybdenum | SVS Maverick',
  description: 'Pure molybdenum - high-temperature refractory metal with excellent thermal conductivity and low thermal expansion.',
};

export default function MolybdenumPage() {
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
              <span className="text-[#1D2931] font-medium">MOLYBDENUM</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">Mo</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">Molybdenum (Mo)</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">Mo 99.95%+</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              A versatile refractory metal combining high-temperature strength with excellent thermal conductivity and low thermal expansion for precision applications.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  Molybdenum offers an excellent combination of high-temperature strength, thermal conductivity, and dimensional stability. Its lower density compared to tungsten makes it ideal for applications where weight is a consideration.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Melting Point</span>
                    <span className="font-semibold text-[#1D2931]">2623°C (4753°F)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density</span>
                    <span className="font-semibold text-[#1D2931]">10.2 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity</span>
                    <span className="font-semibold text-[#1D2931]">138 W/mK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Electrical Resistivity</span>
                    <span className="font-semibold text-[#1D2931]">5.7 μΩ·cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength</span>
                    <span className="font-semibold text-[#1D2931]">500-700 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Coefficient of Thermal Expansion</span>
                    <span className="font-semibold text-[#1D2931]">4.8 x 10⁻⁶ /K</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'High-temperature furnace components',
                    'Glass melting electrodes',
                    'Semiconductor heat sinks',
                    'Sputtering targets for thin films',
                    'X-ray tube anodes',
                    'Lighting and electronic components',
                    'Die casting dies and cores',
                    'Aerospace structural components',
                    'Nuclear reactor components',
                    'EDM electrodes',
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

          {/* Grades */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Grades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Pure Molybdenum</h3>
                <p className="text-[#6F7B83]">99.95%+ purity for general high-temperature applications and glass processing.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Mo-La (MoLa)</h3>
                <p className="text-[#6F7B83]">Lanthanum oxide dispersion strengthened molybdenum with improved creep resistance.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Mo-Y (MoY)</h3>
                <p className="text-[#6F7B83]">Yttrium oxide dispersion strengthened for superior high-temperature properties.</p>
              </div>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rods & Bars', 'Plates & Sheets', 'Wire', 'Tubes', 'Crucibles', 'Boats & Trays', 'Sputtering Targets', 'Custom Parts'].map((form) => (
                <div key={form} className="border border-gray-200 p-4 rounded text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Notes */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Notes</h2>
            <div className="border border-gray-200 p-8 rounded-lg">
              <ul className="space-y-4 text-[#6F7B83]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                  <span>Molybdenum has a ductile-to-brittle transition temperature (DBTT) typically around -20°C to +40°C, depending on processing history.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                  <span>Oxidation resistance is limited above 500°C in air. Use protective atmospheres (hydrogen, inert gas) or vacuum at elevated temperatures.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                  <span>Better machinability than tungsten. Can be machined with carbide tools when properly supported.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of molybdenum products in your required form, grade, and quantity.
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
