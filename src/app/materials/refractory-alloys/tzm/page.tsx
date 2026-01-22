import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'TZM Alloy (Mo-Ti-Zr) | SVS Maverick',
  description: 'TZM - Titanium Zirconium Molybdenum alloy with superior high-temperature strength and creep resistance.',
};

export default function TZMPage() {
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
              <span className="text-[#1D2931] font-medium">TZM</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">TZM</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">TZM Alloy</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">Mo-0.5Ti-0.08Zr-0.03C</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              Titanium-Zirconium-Molybdenum alloy - The premium choice for demanding high-temperature structural applications requiring superior strength and creep resistance.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  TZM is a precipitation-hardened molybdenum alloy containing titanium, zirconium, and carbon. These additions form fine carbide dispersions that significantly improve high-temperature strength, creep resistance, and recrystallization temperature compared to pure molybdenum.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Melting Point</span>
                    <span className="font-semibold text-[#1D2931]">2617°C (4743°F)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density</span>
                    <span className="font-semibold text-[#1D2931]">10.2 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity</span>
                    <span className="font-semibold text-[#1D2931]">126 W/mK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength (RT)</span>
                    <span className="font-semibold text-[#1D2931]">690-900 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength (1000°C)</span>
                    <span className="font-semibold text-[#1D2931]">400-500 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Recrystallization Temperature</span>
                    <span className="font-semibold text-[#1D2931]">1400°C</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'Die casting dies and cores',
                    'Hot forging dies and punches',
                    'Extrusion dies for light metals',
                    'Piercing plugs and mandrels',
                    'Isothermal forging dies',
                    'Rocket nozzles and thrust chambers',
                    'X-ray rotating anodes',
                    'High-temperature furnace components',
                    'Resistance welding electrodes',
                    'Glass processing equipment',
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

          {/* Advantages over Pure Mo */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Advantages Over Pure Molybdenum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Higher Strength</h3>
                <p className="text-[#6F7B83]">Approximately 2x the tensile strength of pure Mo at elevated temperatures.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Better Creep Resistance</h3>
                <p className="text-[#6F7B83]">Superior long-term performance under load at high temperatures.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Higher Recrystallization</h3>
                <p className="text-[#6F7B83]">Recrystallization temperature ~250°C higher than pure molybdenum.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Good Weldability</h3>
                <p className="text-[#6F7B83]">Can be welded using electron beam or TIG in protective atmosphere.</p>
              </div>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rods & Bars', 'Plates & Sheets', 'Forgings', 'Discs', 'Rings', 'Die Inserts', 'Electrodes', 'Custom Parts'].map((form) => (
                <div key={form} className="border border-gray-200 p-4 rounded text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Composition */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Nominal Composition</h2>
            <div className="border border-gray-200 p-8 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded">
                  <span className="text-2xl font-bold text-[#EF290E]">Mo</span>
                  <p className="text-[#6F7B83] mt-2">Balance</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded">
                  <span className="text-2xl font-bold text-[#1D2931]">Ti</span>
                  <p className="text-[#6F7B83] mt-2">0.40-0.55%</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded">
                  <span className="text-2xl font-bold text-[#1D2931]">Zr</span>
                  <p className="text-[#6F7B83] mt-2">0.06-0.12%</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded">
                  <span className="text-2xl font-bold text-[#1D2931]">C</span>
                  <p className="text-[#6F7B83] mt-2">0.01-0.04%</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded">
                  <span className="text-2xl font-bold text-[#1D2931]">O</span>
                  <p className="text-[#6F7B83] mt-2">&lt;0.003%</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of TZM alloy products in your required form and quantity.
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
