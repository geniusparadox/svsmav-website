import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Spot Welding | Welding Techniques | SVS Maverick',
  description: 'Spot welding technique overview - precision resistance welding for joining overlapping metal sheets in automotive, appliance, and industrial manufacturing.',
};

export default function SpotWeldingPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <MaterialsSidebar />

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-8 lg:px-16 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm mb-12">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <Link href="/products/welding-products" className="text-[#6F7B83] hover:text-[#1D2931]">WELDING PRODUCTS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">SPOT WELDING</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Spot Welding
            </h1>
            <p className="text-xl text-[#1D2931] mb-12 max-w-3xl">
              The most widely used resistance welding process for joining overlapping metal sheets with high speed and precision.
            </p>

            {/* Process Description */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">How Spot Welding Works</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    Spot welding, also known as Resistance Spot Welding (RSW), joins two or more overlapping
                    metal sheets by applying pressure and passing electrical current through the workpieces
                    via copper alloy electrodes.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    The process creates a nugget of molten metal at the interface between the sheets. As the
                    current is stopped and the electrodes continue to apply pressure, the weld nugget solidifies
                    to form a strong metallurgical bond.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="font-semibold text-[#1D2931] mb-4">The Spot Welding Process:</h3>
                  <ol className="space-y-3 text-[#6F7B83]">
                    <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span>Electrodes clamp the workpieces together under controlled pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span>High electrical current passes through the electrodes and workpieces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span>Resistance at the sheet interface generates heat, melting the metal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Current stops while pressure is maintained during cooling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-[#EF290E] text-white text-sm flex items-center justify-center mr-3 flex-shrink-0">5</span>
                      <span>A solid weld nugget forms, creating a permanent bond</span>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Key Parameters */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Key Parameters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                  <p className="text-sm text-[#6F7B83] mb-2">Weld Current</p>
                  <p className="text-xl font-semibold text-[#1D2931]">5,000 - 50,000 A</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                  <p className="text-sm text-[#6F7B83] mb-2">Weld Time</p>
                  <p className="text-xl font-semibold text-[#1D2931]">0.1 - 0.5 sec</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                  <p className="text-sm text-[#6F7B83] mb-2">Electrode Force</p>
                  <p className="text-xl font-semibold text-[#1D2931]">1 - 10 kN</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white text-center">
                  <p className="text-sm text-[#6F7B83] mb-2">Sheet Thickness</p>
                  <p className="text-xl font-semibold text-[#1D2931]">0.5 - 4 mm</p>
                </div>
              </div>
            </section>

            {/* Advantages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'High Speed', desc: 'Weld cycles typically complete in milliseconds, enabling high-volume production.' },
                  { title: 'No Filler Material', desc: 'Creates strong joints without additional consumables like wire or flux.' },
                  { title: 'Minimal Distortion', desc: 'Localized heat application reduces warping and maintains part dimensions.' },
                  { title: 'Automation Ready', desc: 'Easily integrated with robotic systems for consistent, repeatable quality.' },
                  { title: 'Cost Effective', desc: 'Low operating costs with minimal consumable requirements.' },
                  { title: 'Clean Process', desc: 'No smoke, fumes, or spatter when properly configured.' },
                ].map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83]">{advantage.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Industries</h3>
                  <ul className="space-y-3">
                    {['Automotive', 'EV & Battery', 'Home Appliance', 'HVAC', 'Aerospace', 'Electronics'].map((industry, index) => (
                      <li key={index} className="flex items-center text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1D2931] mb-4">Common Uses</h3>
                  <ul className="space-y-3">
                    {['Automotive body assembly', 'Sheet metal fabrication', 'Appliance manufacturing', 'Electrical enclosures', 'HVAC ductwork', 'Battery pack assembly'].map((use, index) => (
                      <li key={index} className="flex items-center text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Spot Welding Electrode Caps', href: '/products/spot-welding-electrode-caps', desc: 'Precision-machined electrode caps in various shapes and materials.' },
                  { name: 'Electrode Shanks & Holders', href: '/products/spot-welding-electrode-shanks-and-holders', desc: 'Complete range of holders and adapters for spot welding equipment.' },
                  { name: 'Electrode Arms', href: '/products/spot-welding-electrode-arms', desc: 'Robust electrode arms for manual and robotic spot welding.' },
                  { name: 'Tip Dressing Units', href: '/tip-dressing-units', desc: 'Maintain optimal electrode geometry for consistent weld quality.' },
                ].map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                  >
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#6F7B83] text-sm">{product.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Spot Welding Solutions?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our experts can help you select the right electrodes, materials, and equipment for your spot welding applications.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Contact Our Experts
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
