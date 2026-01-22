import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'WIRBALIT® HF/N/G (CuCr1Zr) Semi-Finished Products & Custom Parts | SVS Maverick',
  description: 'CuCr1Zr copper chromium zirconium alloy - the standard material for resistance welding electrodes. High-strength age-hardened electrode material.',
};

export default function CuCr1ZrPage() {
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
              <span className="text-[#1D2931] font-medium">WIRBALIT® HF/N/G (CUCR1ZR)</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-4">
              WIRBALIT<sup className="text-3xl">®</sup> HF/N/G
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D2931] mb-6">(CuCr1Zr)</h2>
            <p className="text-xl text-[#1D2931] mb-12">
              Copper-Chromium-Zirconium Semi-Finished, Finished and Drawing Parts
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
                    <th className="py-4 px-4 text-left text-[#1D2931] font-semibold">USA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 text-[#1D2931]">CuCr1Zr</td>
                    <td className="py-4 px-4 text-[#1D2931]">WIRBALIT® HF/N/G</td>
                    <td className="py-4 px-4 text-[#1D2931]">CW106C</td>
                    <td className="py-4 px-4 text-[#1D2931]">2.1293</td>
                    <td className="py-4 px-4 text-[#1D2931]">Class A2/2</td>
                    <td className="py-4 px-4 text-[#1D2931]">Class 2</td>
                    <td className="py-4 px-4 text-[#1D2931]">C 18150<br />C 18200<br />C 18400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Semi-Finished Products & Custom Parts</h3>
              <p className="text-[#6F7B83] text-lg mb-4">
                CuCr1Zr is the most widely used copper alloy for resistance welding electrodes. We supply semi-finished stock or custom-made parts tailored to your specific technical requirements.
              </p>
              <p className="text-[#6F7B83] text-lg mb-4">
                The material provides an excellent combination of high electrical and thermal conductivity with good mechanical strength, making it suitable for most standard welding applications.
              </p>
              <p className="text-[#6F7B83] text-lg">
                Available in cold-worked or cold-worked and age-hardened conditions. With our extensive inventory, we offer short lead times and flexible production of custom parts.
              </p>
            </div>

            {/* Material Variants */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#1D2931] mb-6">Material Variants</h3>
              <p className="text-[#6F7B83] text-lg mb-6">
                WIRBALIT® HF/N/G is available in three variants, each optimized for specific applications:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">WIRBALIT® HF</h4>
                  <p className="text-[#1D2931] font-medium mb-2">High-strength age-hardened electrode material</p>
                  <p className="text-sm text-[#6F7B83]"><strong>Applications:</strong> Spot welding electrodes, electrode caps, projection welding electrodes</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">WIRBALIT® N</h4>
                  <p className="text-[#1D2931] font-medium mb-2">Age-hardened electrode material for projection and butt welding</p>
                  <p className="text-sm text-[#6F7B83]"><strong>Applications:</strong> Projection welding, butt welding, electrode holders</p>
                </div>
                <div className="border border-gray-200 p-6 rounded">
                  <h4 className="text-lg font-bold text-[#EF290E] mb-2">WIRBALIT® G</h4>
                  <p className="text-[#1D2931] font-medium mb-2">Age-hardened electrode for roller seam welding</p>
                  <p className="text-sm text-[#6F7B83]"><strong>Applications:</strong> Seam welding wheels, large diameter electrodes, rings and discs</p>
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
                      <td className="py-4 px-4 text-[#1D2931] font-medium">≥ 80% IACS</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Thermal Conductivity</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">≥ 320 W/mK</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Hardness (age-hardened)</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">120-170 HB</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Tensile Strength</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">400-550 MPa</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 text-[#6F7B83]">Softening Temperature</td>
                      <td className="py-4 px-4 text-[#1D2931] font-medium">≥ 500°C</td>
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
                      'Spot welding electrodes and electrode caps',
                      'Seam welding wheels and rollers',
                      'Projection welding electrodes',
                      'Butt welding dies and electrodes',
                      'Flash welding electrodes',
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
                      'Contact nozzles for MIG/MAG welding',
                      'Rings, discs, plates, and tubes',
                      'Mold construction components',
                      'Current-carrying components',
                      'Heat sinks and thermal management',
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
                We supply WIRBALIT® HF/N/G in a wide range of standard and custom forms:
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
                  <span className="text-[#6F7B83]">Material can be machined in both cold-worked and age-hardened conditions using standard carbide tooling.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Age hardening temperature: 450-500°C for 2-4 hours, depending on cross-section.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Avoid prolonged exposure to temperatures above 500°C to prevent softening.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EF290E] mr-3">•</span>
                  <span className="text-[#6F7B83]">Cold forming is possible in the solution-annealed condition.</span>
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
                Contact us for pricing and availability of WIRBALIT® HF/N/G (CuCr1Zr) materials in your required form and quantity.
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
