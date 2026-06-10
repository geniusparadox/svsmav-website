import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbar Sizing & Ampacity Guide | Current Rating Calculation | SVS Maverick',
  description:
    'How to size a flexible copper busbar: cross-section calculation, current density rules of thumb, ampacity reference table, temperature rise, and derating factors. Practical guide from a busbar manufacturer.',
  keywords:
    'busbar sizing, busbar ampacity, copper busbar current rating, busbar cross section calculation, current density copper busbar, flexible busbar sizing, busbar derating, busbar temperature rise',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/sizing-guide/',
  },
  openGraph: {
    title: 'Flexible Busbar Sizing & Ampacity Guide',
    description:
      'Cross-section calculation, current density rules, ampacity reference table, and derating factors for flexible copper busbars.',
    url: 'https://www.svsmav.com/products/flexible-busbars/sizing-guide/',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'How do I calculate the cross-section of a copper busbar?',
    answer:
      'A practical first estimate divides the continuous current by an allowable current density: S = I / k, where S is the cross-section in mm², I is the current in amperes, and k is the current density in A/mm². For bare copper in enclosed assemblies, k = 1.5-2 A/mm² is a conservative starting point; well-ventilated or short busbars can run higher. The final size must be verified against permissible temperature rise for the specific installation.',
  },
  {
    question: 'What current density is safe for copper busbars?',
    answer:
      'Typical design values range from 1.2-2 A/mm² for enclosed switchgear with limited cooling, up to 2-3 A/mm² for short, well-ventilated busbars. Higher densities mean higher temperature rise. Standards-based design works from permissible temperature rise (commonly 30-65 K depending on the standard and plating) rather than a fixed density.',
  },
  {
    question: 'How does ambient temperature affect busbar ampacity?',
    answer:
      'Published ratings usually assume 35-40°C ambient. As a rule of thumb, every 10°C of additional ambient above the reference reduces ampacity by roughly 8-10%, because less temperature-rise margin remains before the conductor reaches its limit.',
  },
  {
    question: 'Does insulation reduce a busbar’s current rating?',
    answer:
      'Yes, slightly. Insulation impedes heat dissipation from the copper surface, so an insulated busbar of the same cross-section runs warmer than a bare one. The insulation’s temperature class can also become the limiting factor - PVC at 105°C limits the design more than Kapton at 200°C. Account for this in sizing or specify a higher temperature-class insulation.',
  },
  {
    question: 'Why specify a safety margin when sizing a busbar?',
    answer:
      'A 15-20% margin above the calculated continuous current covers load growth, harmonics, voltage fluctuations, contact resistance aging at bolted joints, and hotter-than-expected ambient conditions. If your system requires 2,000 A continuous, sizing for roughly 2,400 A is common practice.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.svsmav.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.svsmav.com/products/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Flexible Busbars',
      item: 'https://www.svsmav.com/products/flexible-busbars/',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Sizing Guide',
      item: 'https://www.svsmav.com/products/flexible-busbars/sizing-guide/',
    },
  ],
};

export default function SizingGuidePage() {
  const sizingSteps = [
    {
      step: '1. Define the Continuous Current',
      description:
        'Establish the maximum continuous (not peak) current the busbar must carry, including any duty-cycle or overload requirements. Add a 15-20% safety margin for load growth and aging.',
    },
    {
      step: '2. Estimate the Cross-Section',
      description:
        'Apply S = I / k with a current density appropriate to the installation: 1.5-2 A/mm² is a conservative start for enclosed assemblies. Example: 1,000 A ÷ 1.7 A/mm² ≈ 590 mm².',
    },
    {
      step: '3. Check Temperature Rise',
      description:
        'Verify the chosen section against the permissible temperature rise for your standard and plating (bolted joints with bare copper are typically limited to lower rises than plated ones). Consider ambient temperature, enclosure ventilation, and nearby heat sources.',
    },
    {
      step: '4. Apply Derating Factors',
      description:
        'Derate for elevated ambient (≈8-10% per 10°C above reference), altitude above 1,000 m, insulation over the busbar body, bundled or stacked conductors, and restricted airflow.',
    },
    {
      step: '5. Define the Mechanical Envelope',
      description:
        'Choose width, stack thickness, and lamination count to fit the space and provide the required flexibility. Thinner foils (0.1 mm) flex more; thicker foils (0.3-0.5 mm) suit mostly static links.',
    },
    {
      step: '6. Specify Terminals and Finish',
      description:
        'Define hole patterns or studs per your mating hardware, plating (tin for general use, nickel for welding to aluminium, silver for lowest contact resistance), and insulation class.',
    },
  ];

  const ampacityTable = [
    { section: '50 mm²', dimensions: 'e.g. 20 × 2.5 mm stack', current: '≈ 100 - 150 A' },
    { section: '120 mm²', dimensions: 'e.g. 32 × 4 mm stack', current: '≈ 250 - 320 A' },
    { section: '250 mm²', dimensions: 'e.g. 50 × 5 mm stack', current: '≈ 450 - 600 A' },
    { section: '500 mm²', dimensions: 'e.g. 63 × 8 mm stack', current: '≈ 800 - 1,100 A' },
    { section: '800 mm²', dimensions: 'e.g. 80 × 10 mm stack', current: '≈ 1,200 - 1,600 A' },
    { section: '1,200 mm²', dimensions: 'e.g. 100 × 12 mm stack', current: '≈ 1,700 - 2,300 A' },
    { section: '2,000 mm²', dimensions: 'e.g. 125 × 16 mm stack', current: '≈ 2,600 - 3,500 A' },
    { section: '4,000 mm²', dimensions: 'multiple parallel stacks', current: '≈ 5,000 - 10,000 A' },
  ];

  const deratingFactors = [
    {
      title: 'Ambient Temperature',
      description:
        'Ratings assume 35-40°C ambient. Derate roughly 8-10% per additional 10°C. Inside sealed enclosures, use the internal air temperature, not the room temperature.',
    },
    {
      title: 'Insulation',
      description:
        'Insulated busbars dissipate heat less effectively than bare copper. Apply a 10-15% derating or verify by temperature-rise test, and check the insulation temperature class.',
    },
    {
      title: 'Enclosure & Ventilation',
      description:
        'Free-air ratings drop significantly inside unventilated enclosures. Forced ventilation or generous spacing between conductors recovers capacity.',
    },
    {
      title: 'Duty Cycle',
      description:
        'Intermittent loads allow smaller sections than continuous duty. Short-time ratings (e.g. fault currents for 1 s) are governed by adiabatic heating, not steady-state ampacity.',
    },
    {
      title: 'Altitude',
      description:
        'Above approximately 1,000 m, thinner air reduces convective cooling. Apply standard altitude correction factors for your applicable standard.',
    },
    {
      title: 'Joint Quality',
      description:
        'Bolted joints add contact resistance and local heating. Proper contact pressure, plating, and joint overlap (typically 5-10× bar thickness) keep joints cooler than the bar itself.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931]">FLEXIBLE BUSBARS</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">SIZING GUIDE</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Busbar Sizing &amp; Ampacity Guide
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              A practical guide to sizing flexible copper busbars: how to calculate the
              cross-section from your current rating, what current density to assume, and which
              derating factors matter. Written by the engineering team at SVS Maverick.
            </p>

            {/* Quick Answer */}
            <section className="mb-10 sm:mb-16">
              <div className="border-l-4 border-[#EF290E] bg-white rounded-r-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-3">Quick Sizing Rule</h2>
                <p className="text-[#6F7B83] mb-3">
                  <strong className="text-[#1D2931]">Cross-section (mm²) = Continuous current (A) ÷ Current density (A/mm²)</strong>
                </p>
                <p className="text-[#6F7B83]">
                  For bare copper in enclosed switchgear, start with 1.5-2 A/mm². A 1,000 A
                  connection therefore needs roughly 500-660 mm² of copper. Then verify
                  temperature rise and apply deratings for ambient, insulation, and ventilation.
                  For a guaranteed rating, ask us to size the busbar against your actual operating
                  conditions.
                </p>
              </div>
            </section>

            {/* Sizing Steps */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                How to Size a Flexible Busbar in 6 Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sizingSteps.map((item) => (
                  <div key={item.step} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{item.step}</h3>
                    <p className="text-[#6F7B83] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ampacity Table */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Indicative Ampacity Reference Table
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-x-auto max-w-full">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="bg-[#1D2931]">
                      <th className="px-6 py-4 text-left text-white font-semibold">Copper Cross-Section</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Typical Stack Dimensions</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Indicative Continuous Current*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ampacityTable.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                        <td className="px-6 py-4 text-[#1D2931] font-medium">{row.section}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{row.dimensions}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{row.current}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6F7B83] mt-4 text-sm">
                *Indicative ranges for bare copper at 35-40°C ambient with moderate ventilation,
                spanning conservative enclosed-panel to ventilated installations. Actual ratings
                depend on temperature rise limits, enclosure, insulation, and duty cycle - always
                verify for your installation or request a sized recommendation from our engineers.
                For a quick interactive estimate, try our{' '}
                <Link href="/products/flexible-busbars/calculator" className="text-[#EF290E] font-medium hover:underline">
                  busbar ampacity calculator
                </Link>
                .
              </p>
            </section>

            {/* Derating Factors */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Derating Factors to Consider
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {deratingFactors.map((factor) => (
                  <div key={factor.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{factor.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{factor.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Flexibility section */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Sizing for Flexibility, Not Just Current
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
                <p className="text-[#6F7B83] mb-4">
                  Two busbars with identical cross-sections can have very different mechanical
                  behavior. Flexibility is set by the lamination thickness and count: a 500 mm²
                  busbar built from fifty 0.1 mm foils bends easily, while the same section built
                  from ten 0.5 mm strips is much stiffer. Specify the expected movement - thermal
                  expansion range, vibration amplitude, and installation offset - alongside the
                  current rating.
                </p>
                <p className="text-[#6F7B83]">
                  The flexible length between the solid terminal pads also matters: a longer free
                  length distributes bending over more material, reducing stress per cycle and
                  extending fatigue life. Our engineers balance these parameters when designing to
                  your application.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Sizing FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{faq.question}</h3>
                    <p className="text-[#6F7B83]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Continue Reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/products/flexible-busbars"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Flexible Busbars Overview
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Construction, manufacturing, and full specifications.
                  </p>
                </Link>
                <Link
                  href="/products/flexible-busbars/laminated-vs-braided"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Laminated vs Braided
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Choose the right flexible connector construction.
                  </p>
                </Link>
                <Link
                  href="/products/flexible-busbars/faq"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Flexible Busbar FAQ
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Materials, plating, insulation, testing, and ordering.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">
                Let Us Size It for You
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your continuous current, ambient conditions, space envelope, and movement
                requirements. Our engineering team will recommend a verified cross-section,
                lamination build, and terminal design - free of charge with your quotation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request a Sized Quotation
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
