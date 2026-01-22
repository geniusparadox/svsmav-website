import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Tungsten-Copper (WCu) Composite | SVS Maverick',
  description: 'Tungsten-copper composite materials - combining tungsten wear resistance with copper thermal and electrical conductivity.',
};

export default function TungstenCopperPage() {
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
              <span className="text-[#1D2931] font-medium">TUNGSTEN-COPPER</span>
            </nav>

            {/* Title */}
            <div className="flex items-center gap-6 mb-6">
              <span className="text-6xl font-bold text-[#EF290E]">WCu</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931]">Tungsten-Copper (WCu)</h1>
                <p className="text-2xl text-[#6F7B83] font-mono">W-Cu Composite</p>
              </div>
            </div>
            <p className="text-xl text-[#6F7B83] max-w-3xl">
              A unique composite material combining tungsten&apos;s exceptional wear resistance and arc erosion properties with copper&apos;s superior thermal and electrical conductivity.
            </p>
          </section>

          {/* Properties */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Material Properties</h2>
                <p className="text-[#6F7B83] text-lg mb-8">
                  Tungsten-copper is a pseudo-alloy (composite) where tungsten particles are infiltrated with copper. This creates a material that cannot be achieved through conventional alloying, offering properties from both metals tailored to specific applications.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Density (W75Cu25)</span>
                    <span className="font-semibold text-[#1D2931]">14.5 g/cm³</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Thermal Conductivity (W75Cu25)</span>
                    <span className="font-semibold text-[#1D2931]">200 W/mK</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Electrical Conductivity (W75Cu25)</span>
                    <span className="font-semibold text-[#1D2931]">40% IACS</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Hardness (W75Cu25)</span>
                    <span className="font-semibold text-[#1D2931]">220-260 HV</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Tensile Strength</span>
                    <span className="font-semibold text-[#1D2931]">550-700 MPa</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="text-[#6F7B83]">Coefficient of Thermal Expansion</span>
                    <span className="font-semibold text-[#1D2931]">6.5-11 x 10⁻⁶ /K</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
                <ul className="space-y-4">
                  {[
                    'High-voltage electrical contacts',
                    'Circuit breaker arcing contacts',
                    'EDM (Electrical Discharge Machining) electrodes',
                    'Resistance welding electrodes',
                    'Heat sinks for electronic packages',
                    'Semiconductor heat spreaders',
                    'Vacuum interrupter contacts',
                    'Plasma-facing components',
                    'Aerospace thermal management',
                    'RF/microwave packaging',
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">W90Cu10</h3>
                <p className="text-[#6F7B83] text-sm mb-4">90% Tungsten, 10% Copper</p>
                <p className="text-[#6F7B83]">Maximum arc erosion resistance. Ideal for high-power arcing contacts.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">W80Cu20</h3>
                <p className="text-[#6F7B83] text-sm mb-4">80% Tungsten, 20% Copper</p>
                <p className="text-[#6F7B83]">Excellent balance of wear resistance and conductivity. Popular for EDM electrodes.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">W75Cu25</h3>
                <p className="text-[#6F7B83] text-sm mb-4">75% Tungsten, 25% Copper</p>
                <p className="text-[#6F7B83]">Standard grade for electrical contacts and resistance welding electrodes.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">W70Cu30</h3>
                <p className="text-[#6F7B83] text-sm mb-4">70% Tungsten, 30% Copper</p>
                <p className="text-[#6F7B83]">Higher thermal conductivity. Excellent for heat sink applications.</p>
              </div>
            </div>
          </section>

          {/* Properties Comparison */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Grade Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Grade</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Density (g/cm³)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Thermal Cond. (W/mK)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Elec. Cond. (% IACS)</th>
                    <th className="px-6 py-4 text-left text-[#1D2931] font-semibold border-b border-gray-200">Hardness (HV)</th>
                  </tr>
                </thead>
                <tbody className="text-[#6F7B83]">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W90Cu10</td>
                    <td className="px-6 py-4">17.0</td>
                    <td className="px-6 py-4">170</td>
                    <td className="px-6 py-4">32</td>
                    <td className="px-6 py-4">280-320</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W80Cu20</td>
                    <td className="px-6 py-4">15.5</td>
                    <td className="px-6 py-4">185</td>
                    <td className="px-6 py-4">38</td>
                    <td className="px-6 py-4">240-280</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W75Cu25</td>
                    <td className="px-6 py-4">14.5</td>
                    <td className="px-6 py-4">200</td>
                    <td className="px-6 py-4">40</td>
                    <td className="px-6 py-4">220-260</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-[#1D2931]">W70Cu30</td>
                    <td className="px-6 py-4">13.8</td>
                    <td className="px-6 py-4">210</td>
                    <td className="px-6 py-4">45</td>
                    <td className="px-6 py-4">200-240</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Rods & Bars', 'Plates & Sheets', 'Discs', 'Electrodes', 'Heat Sinks', 'Contacts', 'Blanks', 'Custom Parts'].map((form) => (
                <div key={form} className="border border-gray-200 p-4 rounded text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-16 border-t border-gray-200">
            <div className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Request a Quote</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact us for pricing and availability of tungsten-copper products in your required grade, form, and quantity.
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
