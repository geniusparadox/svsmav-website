import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Tip Dressing Units | Welding Systems | SVS Maverick',
  description: 'Professional tip dressing equipment for resistance welding - electrode cap dressers, cap changers, combi units, and milling tools from SVS Maverick.',
};

export default function TipDressingUnitsPage() {
  const products = [
    {
      title: 'Electrode Tip Dresser',
      description: 'Precision electrode cap dressers available in stationary, swing-in, trolley, and mobile configurations.',
      href: '/tip-dressing-units/electrode-cap-dressing-unit',
      features: ['Stationary dressers', 'Swing-in systems', 'Trolley units', 'Mobile configurations'],
    },
    {
      title: 'Electrode Cap Changer',
      description: 'Automatic electrode cap changing systems for high-volume production environments.',
      href: '/tip-dressing-units/cap-changer',
      features: ['Automatic cap removal', 'New cap insertion', 'Stationary & mobile options', 'Robot integration'],
    },
    {
      title: 'Combi Dresser-Changer',
      description: 'Combined tip dressing and cap changing systems - two functions in one compact unit.',
      href: '/tip-dressing-units/combi-dresser',
      features: ['Dress and change in one unit', 'Rotary configuration', 'Push-off configuration', 'Reduced cycle time'],
    },
    {
      title: 'Milling Tools',
      description: 'High-quality milling cutters and heads engineered for precise electrode tip restoration.',
      href: '/tip-dressing-units/dressing-tools',
      features: ['Over 20,000 dressing cycles', 'Six-step precision edges', 'Custom profiles', 'Long tool life'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE] pt-20">
      <div className="flex">
        <MaterialsSidebar />

        <main className="flex-1">
          <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm mb-8 sm:mb-12 flex flex-wrap gap-1">
              <Link href="/" className="text-[#6F7B83] hover:text-[#1D2931]">HOME</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931]">PRODUCTS</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">TIP DRESSING UNITS</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Tip Dressing Units
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              Your partner for tip dressers and cap changers in resistance welding.
              Remove buildup, restore precision, cycle by cycle.
            </p>

            {/* Why Tip Dressing */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Why Tip Dressing Matters</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    Regular electrode tip dressing is essential for maintaining consistent weld quality
                    in resistance welding operations. As electrodes wear during use, their contact face
                    deforms and increases in diameter, leading to reduced current density and poor weld quality.
                  </p>
                  <p className="text-[#6F7B83] mb-6">
                    Our tip dressing units restore electrodes to their optimal geometry, extending electrode
                    life by up to 5x and ensuring consistent, high-quality welds throughout production.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                      <div className="text-3xl font-bold text-[#EF290E] mb-1">5x</div>
                      <div className="text-sm text-[#6F7B83]">Electrode Life Extension</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                      <div className="text-3xl font-bold text-[#EF290E] mb-1">99%</div>
                      <div className="text-sm text-[#6F7B83]">Weld Consistency</div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      'Consistent weld quality throughout electrode life',
                      'Reduced electrode consumption and costs',
                      'Lower maintenance downtime',
                      'Improved production efficiency',
                      'Compliance with automotive quality standards',
                      'Automated operation reduces operator fatigue',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Products Grid */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Our Product Range</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-[#1D2931] mb-3 group-hover:text-[#EF290E] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-[#6F7B83] mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-[#6F7B83]">
                          <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Industry Applications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {[
                  { name: 'Automotive', desc: 'Body-in-white' },
                  { name: 'EV Battery', desc: 'Cell assembly' },
                  { name: 'Aerospace', desc: 'Structural parts' },
                  { name: 'Appliances', desc: 'Sheet metal' },
                  { name: 'Electronics', desc: 'Precision welding' },
                  { name: 'General Industry', desc: 'Manufacturing' },
                ].map((industry) => (
                  <div key={industry.name} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <p className="font-semibold text-[#1D2931] mb-1">{industry.name}</p>
                    <p className="text-sm text-[#6F7B83]">{industry.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">Ready to Optimize Your Welding Process?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Contact our team for expert guidance on selecting the right tip dressing equipment
                for your application.
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
