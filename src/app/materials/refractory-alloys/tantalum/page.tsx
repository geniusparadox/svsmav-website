import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Tantalum (Ta) - Pure Tantalum | SVS Maverick',
  description: 'Pure tantalum - highly corrosion-resistant refractory metal for chemical processing, medical, and electronics applications.',
};

export default function TantalumPage() {
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
              <span className="text-[#1D2931] font-medium">TANTALUM</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">Ta</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">Tantalum (Ta)</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">Ta 99.95%+</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              A highly corrosion-resistant refractory metal with exceptional biocompatibility. The material of choice for aggressive chemical environments and medical implant applications.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  Tantalum is renowned for its exceptional corrosion resistance, surpassing that of platinum and gold in many environments. Its oxide layer provides self-healing protection, making it virtually immune to attack by most acids. Combined with excellent biocompatibility, tantalum is indispensable in chemical processing and medical applications.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Melting Point</span>
                    <span className="font-semibold text-[#1D2931]">3017°C (5463°F)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density</span>
                    <span className="font-semibold text-[#1D2931]">16.6 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity</span>
                    <span className="font-semibold text-[#1D2931]">57.5 W/mK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Electrical Resistivity</span>
                    <span className="font-semibold text-[#1D2931]">12.4 μΩ·cm</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength (Annealed)</span>
                    <span className="font-semibold text-[#1D2931]">200-350 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Elongation</span>
                    <span className="font-semibold text-[#1D2931]">20-40%</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'Chemical processing equipment',
                    'Heat exchangers for corrosive media',
                    'Tantalum capacitors (electronics)',
                    'Medical implants and devices',
                    'Surgical instruments',
                    'Laboratory equipment',
                    'Sputtering targets',
                    'Spinnerets for fiber production',
                    'Vacuum furnace components',
                    'Corrosion-resistant fasteners',
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

          {/* Corrosion Resistance */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Exceptional Corrosion Resistance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-4">Resistant To:</h3>
                <ul className="space-y-3 text-[#6F7B83]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Sulfuric acid (all concentrations)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Hydrochloric acid (all concentrations)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Nitric acid (up to 70%)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Phosphoric acid
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Organic acids
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Most salt solutions
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-4">Attacked By:</h3>
                <ul className="space-y-3 text-[#6F7B83]">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Hydrofluoric acid
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Hot concentrated alkalis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Aqua regia
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Fluorine gas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                    Fused alkalis
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Grades */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Grades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Pure Tantalum</h3>
                <p className="text-[#6F7B83]">99.95%+ purity for chemical processing and general industrial applications.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Capacitor Grade</h3>
                <p className="text-[#6F7B83]">High-purity tantalum powder and wire for electronic capacitor manufacturing.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Ta-2.5W / Ta-10W</h3>
                <p className="text-[#6F7B83]">Tantalum-tungsten alloys with improved strength for demanding structural applications.</p>
              </div>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Sheets & Plates', 'Rods & Bars', 'Wire', 'Tubes', 'Foil', 'Crucibles', 'Sputtering Targets', 'Custom Parts'].map((form) => (
                <div key={form} className="border border-gray-200 p-4 rounded text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Biocompatibility */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-[#1D2931] mb-4">Biocompatibility</h2>
              <p className="text-[#6F7B83] mb-6">
                Tantalum is one of the most biocompatible metals known, making it an excellent choice for medical implants and devices. It does not react with body fluids and promotes bone growth (osseointegration), making it ideal for orthopedic and dental applications.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center text-[#6F7B83]">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                  Hip and knee replacement components
                </li>
                <li className="flex items-center text-[#6F7B83]">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                  Dental implants and posts
                </li>
                <li className="flex items-center text-[#6F7B83]">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                  Pacemaker electrodes
                </li>
                <li className="flex items-center text-[#6F7B83]">
                  <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                  Surgical clips and staples
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of tantalum products in your required form, grade, and quantity.
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
