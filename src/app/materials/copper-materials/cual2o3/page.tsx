import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'WIRBALIT® CA (CuAl2O3) Semi-Finished Products & Custom Parts | SVS Maverick',
  description: 'CuAl2O3 dispersion-strengthened copper alloy with extreme temperature resistance and high conductivity for aluminum welding applications.',
};

export default function CuAl2O3Page() {
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
              <span className="text-[#1D2931] font-medium">WIRBALIT® CA (CUAL2O3)</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-4">
              WIRBALIT<sup className="text-3xl">®</sup> CA
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D2931] mb-6">(CuAl2O3)</h2>
            <p className="text-xl text-[#1D2931] mb-12">
              Dispersion-Strengthened Copper Semi-Finished, Finished and Drawing Parts
            </p>

            {/* Standards Table */}
            <div className="mb-16 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Alloy</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">SVS</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Type</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">Al2O3 Content</th>
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">DIN ISO 5182</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-[#1D2931]">CuAl2O3</td>
                    <td className="py-4 px-4 text-[#1D2931]">WIRBALIT® CA</td>
                    <td className="py-4 px-4 text-[#1D2931]">Dispersion Strengthened</td>
                    <td className="py-4 px-4 text-[#1D2931]">0.5-1.5%</td>
                    <td className="py-4 px-4 text-[#1D2931]">Class A2/1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Semi-Finished Products & Custom Parts</h3>
              <p className="text-[#6F7B83] text-lg mb-4">
                WIRBALIT® CA is a unique dispersion-strengthened copper alloy where fine aluminum oxide (Al2O3) particles are uniformly distributed throughout the copper matrix. This microstructure provides exceptional resistance to softening at extreme temperatures while maintaining excellent electrical and thermal conductivity.
              </p>
              <p className="text-[#6F7B83] text-lg mb-4">
                Unlike conventional precipitation-hardened alloys, the oxide dispersion strengthening (ODS) mechanism ensures properties remain stable even after repeated thermal cycling. The material does not soften on reheating, making it ideal for applications with extreme thermal loads.
              </p>
              <p className="text-[#6F7B83] text-lg">
                We supply semi-finished stock or custom-made parts tailored to your specific technical requirements with short lead times. WIRBALIT® CA delivers 3-5x longer electrode life compared to standard copper alloys.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">Extreme Temperature Resistance</h4>
                  <p className="text-[#6F7B83]">Softening temperature above 900°C - the highest among all copper electrode materials. No property loss after repeated thermal cycling.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">High Conductivity</h4>
                  <p className="text-[#6F7B83]">Up to 92% IACS electrical conductivity combined with excellent thermal conductivity for efficient heat and current transfer.</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">Aluminum Welding Specialist</h4>
                  <p className="text-[#6F7B83]">Minimal electrode sticking and pickup when welding aluminum alloys. Extended electrode life in demanding applications.</p>
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
                      <td className="py-4 px-4 text-[#1D2931] font-medium">85-92% IACS</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Thermal Conductivity</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">330-365 W/mK</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Hardness</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">65-90 HRB</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Tensile Strength</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">350-500 MPa</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Softening Temperature</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">&ge; 900°C</td>
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
                      'Spot welding of aluminum alloys',
                      'Projection welding electrodes',
                      'Flash butt welding dies',
                      'High-temperature electrode caps',
                      'Long-life welding electrodes',
                    ].map((app) => (
                      <li key={app} className="flex items-start">
                        <span className="text-[#EF290E] mr-2">•</span>
                        <span className="text-[#6F7B83]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1D2931] mb-4">Industries & Materials</h4>
                  <ul className="space-y-2">
                    {[
                      'Automotive aluminum body welding',
                      'Aerospace material joining',
                      'Extreme duty electrode applications',
                      'Coated and galvanized materials',
                      'High-volume production environments',
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
                We supply WIRBALIT® CA in a wide range of standard and custom forms:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Round Bars', 'Flat Bars', 'Plates', 'Electrode Caps', 'Forgings', 'Profiles', 'Machined Parts', 'Custom Shapes'].map((form) => (
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
                  <span className="text-[#6F7B83]">Material properties remain stable even after repeated thermal cycling - no softening on reheating.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Oxide particles (0.5-1.5% Al2O3) are mechanically alloyed into the copper matrix, creating a stable microstructure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Can be machined using standard carbide tools. Avoid aggressive cutting parameters due to dispersion-hardened structure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Not suitable for brazing or welding - use mechanical fastening or interference fits for joining.</span>
                </li>
              </ul>
            </div>

            {/* Technical Data Link */}
            <div className="mb-16 flex flex-col md:flex-row items-center justify-between border border-gray-200 rounded p-8">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-[#1D2931] mb-2">Technical Data Sheet</h3>
                <p className="text-[#6F7B83]">Download detailed specifications and compare with other WIRBALIT® alloys.</p>
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
                Contact us for pricing and availability of WIRBALIT® CA (CuAl2O3) materials in your required form and quantity. Custom parts available with short lead times.
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
