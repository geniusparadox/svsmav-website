import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Copper Semi-Finished Products | WIRBALIT® Copper Alloys | SVS Maverick',
  description: 'High-performance WIRBALIT copper alloys for resistance welding electrodes. CuCr1Zr, CuCo2Be, CuNi2.5SiCr, and CuAl2O3 semi-finished products and custom parts.',
};

const materials = [
  {
    name: 'WIRBALIT® HF/N/G',
    composition: 'CuCr1Zr',
    standard: '2.1293 – CW106C',
    description: 'The standard material for resistance welding electrodes. High-strength age-hardened electrode material with excellent electrical and thermal conductivity.',
    href: '/materials/copper-materials/cucr1zr',
  },
  {
    name: 'WIRBALIT® B',
    composition: 'CuCo2Be',
    standard: '2.1285 – CW104C',
    description: 'Premium beryllium copper alloy for demanding applications requiring maximum hardness and wear resistance while maintaining good conductivity.',
    href: '/materials/copper-materials/cuco2be',
  },
  {
    name: 'WIRBALIT® D',
    composition: 'CuNi2.5SiCr',
    standard: '2.0853 – CW112C',
    description: 'Beryllium-free alternative with high strength and excellent thermal stability. Partly serving as an alternative to WIRBALIT® B.',
    href: '/materials/copper-materials/cuni2-5sicr',
  },
  {
    name: 'WIRBALIT® CA',
    composition: 'CuAl2O3',
    standard: 'Dispersion Strengthened',
    description: 'Dispersion-strengthened copper for extreme temperature applications and aluminum welding with softening resistance up to 900°C.',
    href: '/materials/copper-materials/cual2o3',
  },
];

export default function CopperMaterialsPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1">
          {/* Header Section */}
          <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm mb-6 sm:mb-8 flex flex-wrap gap-1">
              <Link href="/" className="text-gray-500 hover:text-[#1D2931]">HOME</Link>
              <span className="text-gray-400">&gt;</span>
              <Link href="/materials" className="text-gray-500 hover:text-[#1D2931]">SEMI-FINISHED PARTS</Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-[#1D2931] font-medium">COPPER MATERIALS</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] max-w-3xl leading-tight">
              Semi-Finished Copper Parts
            </h1>
          </section>

          {/* Introduction */}
          <section className="px-4 sm:px-8 lg:px-16 pb-8 sm:pb-12">
            <div className="max-w-4xl">
              <p className="text-base sm:text-lg text-[#6F7B83] mb-4 sm:mb-6">
                SVS Maverick supplies high-performance copper alloys under the WIRBALIT® brand for resistance welding electrodes and other demanding applications. Our comprehensive range includes standard and specialty alloys to match your specific requirements.
              </p>
              <p className="text-base sm:text-lg text-[#6F7B83]">
                We offer semi-finished stock in various forms including round bars, flat bars, plates, tubes, and custom-machined parts. All materials are available with short lead times from our extensive inventory.
              </p>
            </div>
          </section>

          {/* Materials List */}
          <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-6 sm:mb-8">WIRBALIT® Copper Alloy Range</h2>
            <div className="space-y-4">
              {materials.map((material) => (
                <Link
                  key={material.composition}
                  href={material.href}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                        {material.name}
                      </h3>
                      <span className="text-[#EF290E] font-mono text-sm sm:text-base">{material.composition}</span>
                      <span className="text-[#6F7B83] text-xs sm:text-sm hidden md:inline">({material.standard})</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#6F7B83]">{material.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-[#EF290E] mt-3 sm:mt-0 sm:ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 self-end sm:self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-6 sm:mb-8">Key Material Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#EF290E] mb-3">High Conductivity</h3>
                <p className="text-[#6F7B83]">
                  All WIRBALIT® alloys offer excellent electrical and thermal conductivity for efficient heat dissipation and current transfer.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#EF290E] mb-3">Mechanical Strength</h3>
                <p className="text-[#6F7B83]">
                  Age-hardened alloys provide the mechanical strength needed to withstand high electrode forces and thermal cycling.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold text-[#EF290E] mb-3">Temperature Resistance</h3>
                <p className="text-[#6F7B83]">
                  High softening temperatures ensure consistent performance even under demanding thermal loads.
                </p>
              </div>
            </div>
          </section>

          {/* Available Forms */}
          <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-6 sm:mb-8">Available Forms</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {['Round Bars', 'Flat Bars', 'Plates', 'Tubes', 'Rings', 'Discs', 'Profiles', 'Custom Parts'].map((form) => (
                <div key={form} className="p-4 border border-gray-200 rounded-lg text-center">
                  <span className="text-[#1D2931] font-medium">{form}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Material Properties Link */}
          <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 border border-gray-200 rounded-lg">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-2">Compare All Materials</h2>
                <p className="text-[#6F7B83]">
                  View detailed technical properties and selection guide for all WIRBALIT® copper alloys.
                </p>
              </div>
              <Link
                href="/materials/copper-materials/technical-properties"
                className="inline-flex items-center bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Material Properties
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
