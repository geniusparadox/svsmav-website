import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Products Portfolio | All Products at a Glance | SVS Maverick',
  description: 'Complete overview of SVS Maverick products - copper alloys, refractory metals, welding components, tip dressing units, and flexible busbars.',
};

export default function ProductsPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">PORTFOLIO</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-4">
              Products Portfolio
            </h1>
            <p className="text-xl text-[#6F7B83] mb-12 max-w-3xl">
              All SVS Maverick products at a glance. Browse our complete range of semi-finished parts,
              welding products, welding systems, and flexible busbars.
            </p>

            <div className="w-full h-px bg-gray-300 mb-12"></div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Semi-Finished Parts */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  SEMI-FINISHED PARTS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/materials/copper-materials" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Copper Materials</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/copper-materials/cucr1zr" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>WIRBALIT® HF/N/G (CuCr1Zr)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/copper-materials/cuco2be" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>WIRBALIT® B (CuCo2Be)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/copper-materials/cuni2-5sicr" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>WIRBALIT® D (CuNi2.5SiCr)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/copper-materials/cual2o3" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>WIRBALIT® CA (CuAl2O3)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/refractory-alloys" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Refractory Metals</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/refractory-alloys/tungsten" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Tungsten (W)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/refractory-alloys/tungsten-copper" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Tungsten-Copper (WCu)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/refractory-alloys/molybdenum" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Molybdenum (Mo)</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/materials/refractory-alloys/tzm" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>TZM</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Welding Products */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  WELDING PRODUCTS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/welding-technique/spot-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Spot Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/projection-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Projection Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/seam-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Seam Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/mesh-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Mesh Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/micro-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Micro Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/mig-mag-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>MIG/MAG Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/tig-wig-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>TIG Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/submerged-arc-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Submerged Arc Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/laser-welding" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Laser Welding</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Welding Systems */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  WELDING SYSTEMS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/tip-dressing-units" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Tip Dressing Units</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/electrode-cap-dressing-unit" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Electrode Tip Dresser</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/cap-changer" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Electrode Cap Changer</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/combi-dresser" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Combi Dresser-Changer</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/dressing-tools" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Milling Tools</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-systems-connection-cables" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Connection Cables</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-systems-lamella-shunts" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Lamella Shunts</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Flexible Busbars */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-lg font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  FLEXIBLE BUSBARS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/flexible-busbars" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Overview</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/flexible-busbars/switchgear" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Switchgear & Transformers</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/flexible-busbars/ev-battery-pack" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>EV Battery Packs</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
                {/* Highlight box for EV & Power */}
                <div className="mt-6 p-4 bg-[#1D2931] rounded-lg">
                  <span className="text-xs font-medium text-[#EF290E] uppercase tracking-wider">EV & Power</span>
                  <p className="text-white text-sm mt-1">Diffusion-welded busbars for high-current applications</p>
                </div>
              </div>
            </div>

            {/* Additional Product Categories */}
            <h2 className="text-2xl font-bold text-[#1D2931] mt-16 mb-6">Drawing Parts & Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Spot Welding Components */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-base font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  SPOT WELDING
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/spot-welding-electrode-caps" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Electrode Caps</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/spot-welding-electrodes" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Electrodes</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/spot-welding-electrode-shanks-and-holders" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Shanks & Holders</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/spot-welding-electrode-arms" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Electrode Arms</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* MIG/MAG Components */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-base font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  MIG/MAG WELDING
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/mig-mag-welding-contact-tips" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Contact Tips</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/mig-mag-welding-gas-nozzles" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Gas Nozzles</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/mig-mag-welding-nozzle-holders" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Nozzle Holders</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Projection Welding Components */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-base font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  PROJECTION WELDING
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/projection-welding-replaceable-electrodes" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Replaceable Electrodes</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/projection-welding-centering-and-positioning-pins" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Centering & Positioning Pins</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Other Welding Components */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#EF290E] transition-colors group">
                <h3 className="text-base font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                  OTHER COMPONENTS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/welding-wheels" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Seam Welding Wheels</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/mesh-welding-electrodes" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Mesh Welding Electrodes</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/tig-wig-welding-electrodes" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>TIG Electrodes</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/laser-protection-windows" className="flex items-center justify-between text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm">
                      <span>Laser Protection Windows</span>
                      <svg className="w-3 h-3 text-[#EF290E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <section className="mt-16 border border-gray-200 rounded-lg bg-white p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need a Custom Solution?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Can&apos;t find what you&apos;re looking for? We offer custom-made products and drawing parts
                tailored to your specific requirements. Contact our engineering team for a consultation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
