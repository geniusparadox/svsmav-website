import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Technical Properties - WIRBALIT® Copper Alloys | SVS Maverick',
  description: 'Compare technical properties of all WIRBALIT copper alloys for resistance welding electrodes.',
};

const alloys = [
  {
    name: 'WIRBALIT® HF/N/G',
    composition: 'CuCr1Zr',
    standard: '2.1293 – CW106C',
    conductivity: '≥ 80%',
    thermalConductivity: '≥ 320',
    hardness: '120-170',
    tensileStrength: '400-550',
    softeningTemp: '≥ 500',
    link: '/materials/copper-materials/cucr1zr',
  },
  {
    name: 'WIRBALIT® B',
    composition: 'CuCo2Be',
    standard: '2.1285 – CW104C',
    conductivity: '45-60%',
    thermalConductivity: '180-220',
    hardness: '200-400',
    tensileStrength: '700-1200',
    softeningTemp: '≥ 550',
    link: '/materials/copper-materials/cuco2be',
  },
  {
    name: 'WIRBALIT® D',
    composition: 'CuNi2.5SiCr',
    standard: '2.0853 – CW112C',
    conductivity: '35-45%',
    thermalConductivity: '150-190',
    hardness: '180-280',
    tensileStrength: '600-900',
    softeningTemp: '≥ 550',
    link: '/materials/copper-materials/cuni2-5sicr',
  },
  {
    name: 'WIRBALIT® CA',
    composition: 'CuAl2O3',
    standard: 'Dispersion Strengthened',
    conductivity: '85-92%',
    thermalConductivity: '330-365',
    hardness: '65-90 HRB',
    tensileStrength: '350-500',
    softeningTemp: '≥ 900',
    link: '/materials/copper-materials/cual2o3',
  },
  {
    name: 'WIRBALIT® L',
    composition: 'CuAg0.10P',
    standard: '2.1211',
    conductivity: '≥ 98%',
    thermalConductivity: '≥ 380',
    hardness: '50-90',
    tensileStrength: '220-350',
    softeningTemp: '≥ 340',
    link: '/materials/copper-materials/cuag',
  },
];

const selectionGuide = [
  {
    application: 'General purpose spot welding',
    recommended: 'CuCr1Zr',
    reason: 'Best balance of conductivity and mechanical properties',
  },
  {
    application: 'High-volume production (coated steels)',
    recommended: 'CuCo2Be',
    reason: 'Highest hardness for maximum electrode life',
  },
  {
    application: 'Seam welding wheels',
    recommended: 'CuNi2.5SiCr',
    reason: 'Superior thermal stability and strength',
  },
  {
    application: 'Aluminum alloy welding',
    recommended: 'CuAl2O3',
    reason: 'Extreme temperature resistance, minimal sticking',
  },
  {
    application: 'Projection welding dies',
    recommended: 'CuCo2Be or CuNi2.5SiCr',
    reason: 'High hardness and wear resistance',
  },
  {
    application: 'Flash butt welding',
    recommended: 'CuNi2.5SiCr or CuAl2O3',
    reason: 'High-temperature stability',
  },
  {
    application: 'Maximum conductivity required',
    recommended: 'CuAg0.10P',
    reason: 'Highest conductivity (≥98% IACS) with improved softening resistance',
  },
  {
    application: 'Electrode holders and bus bars',
    recommended: 'CuAg0.10P or CuCr1Zr',
    reason: 'High current-carrying capacity',
  },
];

export default function TechnicalPropertiesPage() {
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
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/materials" className="text-gray-500 hover:text-[#1D2931]">SEMI-FINISHED PARTS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <Link href="/materials/copper-materials" className="text-gray-500 hover:text-[#1D2931]">COPPER MATERIALS</Link>
              <span className="mx-2 text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">TECHNICAL PROPERTIES</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-4">
              Technical Properties
            </h1>
            <p className="text-xl text-[#6F7B83] max-w-2xl">
              Compare the technical properties of all WIRBALIT copper alloys to find the optimal material for your resistance welding application.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Properties Comparison</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left p-4 font-semibold text-[#1D2931]">Alloy</th>
                    <th className="text-left p-4 font-semibold text-[#1D2931]">Composition</th>
                    <th className="text-center p-4 font-semibold text-[#1D2931]">Conductivity<br/><span className="font-normal text-sm text-[#6F7B83]">% IACS</span></th>
                    <th className="text-center p-4 font-semibold text-[#1D2931]">Thermal Cond.<br/><span className="font-normal text-sm text-[#6F7B83]">W/mK</span></th>
                    <th className="text-center p-4 font-semibold text-[#1D2931]">Hardness<br/><span className="font-normal text-sm text-[#6F7B83]">HB</span></th>
                    <th className="text-center p-4 font-semibold text-[#1D2931]">Tensile Strength<br/><span className="font-normal text-sm text-[#6F7B83]">MPa</span></th>
                    <th className="text-center p-4 font-semibold text-[#1D2931]">Softening Temp.<br/><span className="font-normal text-sm text-[#6F7B83]">°C</span></th>
                  </tr>
                </thead>
                <tbody>
                  {alloys.map((alloy) => (
                    <tr key={alloy.composition} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <Link href={alloy.link} className="text-[#EF290E] font-semibold hover:underline">
                          {alloy.name}
                        </Link>
                      </td>
                      <td className="p-4 font-mono text-[#6F7B83]">{alloy.composition}</td>
                      <td className="p-4 text-center text-[#1D2931]">{alloy.conductivity}</td>
                      <td className="p-4 text-center text-[#1D2931]">{alloy.thermalConductivity}</td>
                      <td className="p-4 text-center text-[#1D2931]">{alloy.hardness}</td>
                      <td className="p-4 text-center text-[#1D2931]">{alloy.tensileStrength}</td>
                      <td className="p-4 text-center text-[#1D2931]">{alloy.softeningTemp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#6F7B83] mt-4">
              * Values shown are typical ranges. Actual properties may vary based on product form and heat treatment condition.
            </p>
          </section>

          {/* Visual Comparison */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Property Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">Highest Conductivity</h3>
                <div className="text-4xl font-bold text-[#EF290E] mb-2">CuAg0.10P</div>
                <p className="text-[#6F7B83]">Up to 98% IACS electrical conductivity</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">Highest Hardness</h3>
                <div className="text-4xl font-bold text-[#EF290E] mb-2">CuCo2Be</div>
                <p className="text-[#6F7B83]">Up to 400 HB for maximum wear resistance</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">Highest Strength</h3>
                <div className="text-4xl font-bold text-[#EF290E] mb-2">CuCo2Be</div>
                <p className="text-[#6F7B83]">Up to 1200 MPa tensile strength</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">Highest Temperature</h3>
                <div className="text-4xl font-bold text-[#EF290E] mb-2">CuAl2O3</div>
                <p className="text-[#6F7B83]">900C softening temperature</p>
              </div>
            </div>
          </section>

          {/* Selection Guide */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Material Selection Guide</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left p-4 font-semibold text-[#1D2931]">Application</th>
                    <th className="text-left p-4 font-semibold text-[#1D2931]">Recommended Alloy</th>
                    <th className="text-left p-4 font-semibold text-[#1D2931]">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {selectionGuide.map((item) => (
                    <tr key={item.application} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 text-[#1D2931] font-medium">{item.application}</td>
                      <td className="p-4 font-mono text-[#EF290E] font-semibold">{item.recommended}</td>
                      <td className="p-4 text-[#6F7B83]">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Alloy Cards */}
          <section className="px-8 lg:px-16 py-12">
            <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Explore Each Alloy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {alloys.map((alloy) => (
                <Link
                  key={alloy.composition}
                  href={alloy.link}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#EF290E]">Cu</span>
                    <div>
                      <h3 className="font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors">{alloy.name}</h3>
                      <p className="text-sm font-mono text-[#6F7B83]">{alloy.composition}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#6F7B83]">Conductivity</span>
                      <span className="text-[#1D2931]">{alloy.conductivity} IACS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6F7B83]">Hardness</span>
                      <span className="text-[#1D2931]">{alloy.hardness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6F7B83]">Softening</span>
                      <span className="text-[#1D2931]">{alloy.softeningTemp}C</span>
                    </div>
                  </div>
                  <div className="mt-4 text-[#EF290E] font-semibold text-sm group-hover:underline">
                    View Details
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 lg:px-16 py-12 border-t border-gray-200">
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Help Selecting the Right Material?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our SVS Maverick engineering team can help you choose the optimal WIRBALIT alloy for your specific application requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
