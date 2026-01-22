import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Tungsten (W) - Pure Tungsten | SVS Maverick',
  description: 'Pure tungsten - the highest melting point metal for extreme high-temperature applications, radiation shielding, and electrical contacts.',
};

export default function TungstenPage() {
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
              <span className="text-[#1D2931] font-medium">TUNGSTEN</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">W</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">Tungsten (W)</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">W 99.95%+</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              The metal with the highest melting point. Exceptional strength at extreme temperatures, superior density, and excellent radiation shielding capabilities.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  Tungsten possesses the highest melting point and lowest vapor pressure of all metals, making it ideal for the most demanding high-temperature applications. Its exceptional density provides superior radiation shielding and counterweight applications.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Melting Point</span>
                    <span className="font-semibold text-[#1D2931]">3422°C (6192°F)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density</span>
                    <span className="font-semibold text-[#1D2931]">19.3 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity</span>
                    <span className="font-semibold text-[#1D2931]">173 W/mK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Electrical Resistivity</span>
                    <span className="font-semibold text-[#1D2931]">5.6 μΩ·cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength</span>
                    <span className="font-semibold text-[#1D2931]">550-1100 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Modulus of Elasticity</span>
                    <span className="font-semibold text-[#1D2931]">411 GPa</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'Lighting filaments and electrodes',
                    'X-ray and radiation shielding',
                    'High-temperature furnace elements',
                    'Electrical contacts and electrodes',
                    'Aerospace and rocket nozzles',
                    'Sputtering targets for thin film deposition',
                    'Counterweights and balancing weights',
                    'Welding electrodes (TIG welding)',
                    'Glass-to-metal seals',
                    'Ion implantation components',
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
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Pure Tungsten (W)</h3>
                <p className="text-[#6F7B83]">99.95%+ purity for general high-temperature applications and radiation shielding.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Doped Tungsten (WL/WT)</h3>
                <p className="text-[#6F7B83]">Lanthanum or thorium oxide doped for improved electron emission and arc stability.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Potassium-Doped (AKS)</h3>
                <p className="text-[#6F7B83]">Non-sag tungsten with improved high-temperature creep resistance for lighting applications.</p>
              </div>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rods & Bars', 'Plates & Sheets', 'Wire & Filaments', 'Tubes', 'Crucibles', 'Electrodes', 'Sputtering Targets', 'Custom Shapes'].map((form) => (
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
                  <span>Tungsten becomes brittle below its ductile-to-brittle transition temperature (DBTT), typically 200-400°C depending on processing.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                  <span>Oxidation begins at approximately 400°C in air. Protective atmospheres or vacuum required at elevated temperatures.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                  <span>Machining should be performed with carbide or diamond tools. EDM (Electrical Discharge Machining) is often preferred for complex shapes.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of tungsten products in your required form, grade, and quantity.
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
