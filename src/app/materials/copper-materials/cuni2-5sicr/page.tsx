import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'WIRBALIT® D (CuNi2.5SiCr) Semi-Finished Products & Custom Parts | SVS Maverick',
  description: 'CuNi2.5SiCr beryllium-free high-strength age-hardened electrode material with high softening temperature and electrical conductivity.',
};

export default function CuNi25SiCrPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#F4F3EE]">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/materials/copper-materials" className="text-[#6F7B83] hover:text-[#1D2931]">COPPER MATERIALS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">WIRBALIT® D (CUNI2.5SICR)</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-4">
              WIRBALIT<sup className="text-3xl">®</sup> D
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D2931] mb-6">(CuNi2.5SiCr)</h2>
            <p className="text-xl text-[#1D2931] mb-12">
              Copper-Nickel-Silicon-Chromium Semi-Finished, Finished and Drawing Parts
            </p>

            {/* Standards Table */}
            <div className="mb-16 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Alloy</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">SVS</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Europe</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">International</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">DIN ISO 5182</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">R.W.M.A</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-[#1D2931]">CuNi2.5SiCr</td>
                    <td className="py-4 px-4 text-[#1D2931]">WIRBALIT® D</td>
                    <td className="py-4 px-4 text-[#1D2931]">CW112C</td>
                    <td className="py-4 px-4 text-[#1D2931]">2.0853</td>
                    <td className="py-4 px-4 text-[#1D2931]">Class A3</td>
                    <td className="py-4 px-4 text-[#1D2931]">Class 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Semi-Finished Products & Custom Parts</h3>
              <p className="text-[#6F7B83] text-lg mb-4">
                WIRBALIT® D is a beryllium-free copper alloy that combines high strength with excellent thermal stability. It provides an environmentally friendly alternative to beryllium copper (CuCo2Be) with comparable performance characteristics.
              </p>
              <p className="text-[#6F7B83] text-lg mb-4">
                This material is suitable for resistance welding of conducting components, projection welding, as well as for consumable and butt welding electrodes. It is also used for welding high-strength sections, pistons, and plungers of die casting machines.
              </p>
              <p className="text-[#6F7B83] text-lg">
                We supply semi-finished stock or custom-made parts tailored to your specific technical requirements with short lead times.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">Beryllium-Free</h4>
                  <p className="text-[#6F7B83]">Environmentally friendly alternative to beryllium copper. No special handling or safety precautions required during machining.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">High Softening Temperature</h4>
                  <p className="text-[#6F7B83]">Superior thermal stability with softening temperature above 550°C for extended service life in demanding applications.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">High Strength</h4>
                  <p className="text-[#6F7B83]">Excellent tensile strength up to 900 MPa combined with good electrical conductivity for demanding mechanical loads.</p>
                </div>
              </div>
            </div>

            {/* Key Properties */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Key Properties</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Property</th>
                      <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Electrical Conductivity</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">35-45% IACS</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Thermal Conductivity</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">150-190 W/mK</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Hardness (age-hardened)</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">180-280 HB</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Tensile Strength</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">600-900 MPa</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Softening Temperature</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">&ge; 550°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Typical Applications */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Typical Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-[#1D2931] mb-4">Welding Applications</h4>
                  <ul className="space-y-2">
                    {[
                      'Current-carrying components for resistance welding',
                      'Projection welding electrodes',
                      'Flash/butt welding tools',
                      'Seam welding wheels',
                      'Consumable welding electrodes',
                    ].map((app) => (
                      <li key={app} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1D2931] mb-4">Other Applications</h4>
                  <ul className="space-y-2">
                    {[
                      'High-strength profiles',
                      'Aluminum die casting molds',
                      'Pistons and plungers for die casting machines',
                      'High-temperature structural components',
                      'Wear-resistant tooling',
                    ].map((app) => (
                      <li key={app} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Available Forms */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Available Forms</h3>
              <p className="text-[#6F7B83] text-lg mb-6">
                We supply WIRBALIT® D in a wide range of standard and custom forms:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Round Bars', 'Flat Bars', 'Plates', 'Tubes', 'Rings', 'Discs', 'Profiles', 'Custom Parts'].map((form) => (
                  <div key={form} className="border border-gray-200 p-4 rounded text-center">
                    <span className="text-[#1D2931] font-medium">{form}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Processing Guidelines */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Processing Guidelines</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Material is supplied either cold-worked or cold-worked and age-hardened, depending on application requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">A rise in temperature above the softening temperature will significantly lower mechanical and physical properties.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Beryllium-free - no special handling precautions required for machining operations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Excellent machinability with standard carbide tools.</span>
                </li>
              </ul>
            </div>

            {/* Technical Data Link */}
            <div className="mb-16 flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded p-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Technical Data Sheet</h3>
                <p className="text-[#6F7B83]">Download detailed specifications and chemical composition data.</p>
              </div>
              <Link
                href="/materials/copper-materials/technical-properties"
                className="bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                View Technical Data
              </Link>
            </div>

            {/* CTA */}
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Request a Quote</h3>
              <p className="text-[#6F7B83] mb-6">
                Contact us for pricing and availability of WIRBALIT® D (CuNi2.5SiCr) materials in your required form and quantity. Custom parts available with short lead times.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
