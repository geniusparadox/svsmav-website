import Link from 'next/link';

export const metadata = {
  title: 'WIRBALIT® L (CuAg0.10P) Semi-Finished Products & Custom Parts | SVS Maverick',
  description: 'CuAg0.10P silver-bearing copper alloy with improved softening resistance and excellent electrical conductivity for specialized welding applications.',
};

export default function CuAgPage() {
  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      {/* Hero */}
      <section className="bg-[#1D2931] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6">
            <Link href="/materials" className="text-gray-400 hover:text-white">Materials</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/materials/copper-materials" className="text-gray-400 hover:text-white">Copper Materials</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span>CuAg0.10P</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">WIRBALIT® L</h1>
          <p className="text-2xl text-gray-300 font-mono mb-6">CuAg0.10P – 2.1211</p>
          <p className="text-xl text-gray-300 max-w-3xl">
            Silver-bearing copper alloy with improved softening resistance and excellent electrical conductivity. Ideal for applications requiring high conductivity with enhanced temperature stability.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Semi-Finished Products & Custom Parts</h2>
              <p className="text-[#6F7B83] text-lg mb-6">
                WIRBALIT® L is a silver-bearing copper alloy that offers excellent electrical conductivity combined with improved softening resistance compared to pure copper. The addition of silver and phosphorus enhances the material&apos;s performance at elevated temperatures.
              </p>
              <p className="text-[#6F7B83] text-lg mb-6">
                This material is particularly suited for applications where maximum electrical conductivity is required alongside moderate strength and improved thermal stability.
              </p>
              <p className="text-[#6F7B83] text-lg">
                We supply semi-finished stock or custom-made parts tailored to your specific technical requirements with short lead times.
              </p>
            </div>
            <div className="bg-[#F4F3EE] rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#1D2931] mb-6">Key Properties</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-[#6F7B83]">Electrical Conductivity</span>
                  <span className="font-semibold text-[#1D2931]">≥ 98% IACS</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-[#6F7B83]">Thermal Conductivity</span>
                  <span className="font-semibold text-[#1D2931]">≥ 380 W/mK</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-[#6F7B83]">Hardness</span>
                  <span className="font-semibold text-[#1D2931]">50-90 HB</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-[#6F7B83]">Tensile Strength</span>
                  <span className="font-semibold text-[#1D2931]">220-350 MPa</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-[#6F7B83]">Softening Temperature</span>
                  <span className="font-semibold text-[#1D2931]">≥ 340°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F3EE] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#EF290E] mb-2">Highest Conductivity</h3>
              <p className="text-[#6F7B83]">
                Near-pure copper electrical conductivity (≥98% IACS) for maximum current transfer efficiency.
              </p>
            </div>
            <div className="bg-[#F4F3EE] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#EF290E] mb-2">Improved Softening Resistance</h3>
              <p className="text-[#6F7B83]">
                Silver addition raises the softening temperature compared to pure copper, extending service life.
              </p>
            </div>
            <div className="bg-[#F4F3EE] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#EF290E] mb-2">Excellent Brazeability</h3>
              <p className="text-[#6F7B83]">
                Phosphorus content provides self-fluxing properties for easy brazing and joining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-8">Typical Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#1D2931] mb-4">Welding Applications</h3>
              <ul className="space-y-3">
                {[
                  'Electrode holders and shanks',
                  'Current-carrying arms and connections',
                  'Welding transformer connections',
                  'Secondary circuit components',
                  'Bus bars for welding equipment',
                ].map((app) => (
                  <li key={app} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6F7B83]">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1D2931] mb-4">Other Applications</h3>
              <ul className="space-y-3">
                {[
                  'Electrical connectors and terminals',
                  'Heat exchangers',
                  'Commutator segments',
                  'Switch gear components',
                  'High-current electrical contacts',
                ].map((app) => (
                  <li key={app} className="flex items-start">
                    <svg className="w-5 h-5 text-[#EF290E] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#6F7B83]">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Composition */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Chemical Composition</h2>
          <div className="bg-[#F4F3EE] rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded">
                <span className="text-2xl font-bold text-[#EF290E]">Cu</span>
                <p className="text-[#6F7B83] mt-2">Balance</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded">
                <span className="text-2xl font-bold text-[#1D2931]">Ag</span>
                <p className="text-[#6F7B83] mt-2">0.08-0.12%</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded">
                <span className="text-2xl font-bold text-[#1D2931]">P</span>
                <p className="text-[#6F7B83] mt-2">0.002-0.007%</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded">
                <span className="text-2xl font-bold text-[#1D2931]">O</span>
                <p className="text-[#6F7B83] mt-2">&lt;0.01%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Forms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Available Forms</h2>
          <p className="text-[#6F7B83] text-lg mb-8">
            We supply WIRBALIT® L in a wide range of standard and custom forms:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Round Bars', 'Flat Bars', 'Plates', 'Tubes', 'Bus Bars', 'Profiles', 'Strips', 'Custom Parts'].map((form) => (
              <div key={form} className="bg-[#F4F3EE] p-4 rounded-lg text-center">
                <span className="text-[#1D2931] font-medium">{form}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Guidelines */}
      <section className="py-16 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Processing Guidelines</h2>
          <div className="bg-[#1D2931] rounded-lg p-8">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#EF290E] mr-3 font-bold">*</span>
                <span>Excellent machinability similar to pure copper. Standard copper machining parameters apply.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EF290E] mr-3 font-bold">*</span>
                <span>Self-fluxing when brazing with phosphorus-containing brazing alloys.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EF290E] mr-3 font-bold">*</span>
                <span>Good cold formability. Can be bent, formed, and deep drawn.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EF290E] mr-3 font-bold">*</span>
                <span>Welding possible using TIG or resistance welding methods.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Data Link */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#F4F3EE] rounded-lg p-8">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1D2931]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Request a Quote</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for pricing and availability of WIRBALIT® L (CuAg0.10P) materials in your required form and quantity. Custom parts available with short lead times.
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
  );
}
