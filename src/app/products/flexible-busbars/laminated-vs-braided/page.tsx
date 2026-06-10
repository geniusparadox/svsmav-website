import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Laminated vs Braided Flexible Busbars: Which to Choose? | SVS Maverick',
  description:
    'Laminated and braided flexible busbars compared: construction, current capacity, flexibility, inductance, cost, and best-fit applications. Selection guide from a busbar manufacturer.',
  keywords:
    'laminated vs braided busbar, braided copper connector, laminated copper connector, flexible busbar types, copper braid vs laminate, flexible connector comparison, braided shunt, laminated shunt',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/laminated-vs-braided/',
  },
  openGraph: {
    title: 'Laminated vs Braided Flexible Busbars: Which to Choose?',
    description:
      'Construction, current capacity, flexibility, and cost compared - with clear guidance on which type fits which application.',
    url: 'https://www.svsmav.com/products/flexible-busbars/laminated-vs-braided/',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Which carries more current: laminated or braided busbars?',
    answer:
      'For the same overall envelope, laminated busbars carry more current. Flat copper foils stack with almost no air gaps, so nearly the full cross-section is copper. Braided conductors contain air between woven strands, so a braid needs a larger envelope to achieve the same copper cross-section and runs slightly hotter due to strand-to-strand contact resistance.',
  },
  {
    question: 'Which is more flexible: laminated or braided busbars?',
    answer:
      'Braided busbars flex in all directions and tolerate repeated, continuous movement, making them ideal for frequently moving connections. Laminated busbars flex mainly perpendicular to the foil plane and are designed for limited movement - thermal expansion, vibration, and installation tolerance - rather than constant articulation.',
  },
  {
    question: 'Are laminated busbars cheaper than braided ones?',
    answer:
      'At equal current rating, laminated busbars are usually more economical in high-current sizes because foil stacking and diffusion welding scale efficiently. Braids can be cheaper in small sizes and standard catalog dimensions. For a specific application, request quotes for both - SVS Maverick manufactures laminated flexible busbars and can advise when a braid is the better fit.',
  },
  {
    question: 'Can laminated and braided connectors be used together?',
    answer:
      'Yes. Many installations use laminated busbars for the main high-current path and braided connectors for grounding straps and frequently moving links. The choice is made per connection, not per system.',
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
      name: 'Laminated vs Braided',
      item: 'https://www.svsmav.com/products/flexible-busbars/laminated-vs-braided/',
    },
  ],
};

export default function LaminatedVsBraidedPage() {
  const comparison = [
    {
      criterion: 'Construction',
      laminated: 'Flat copper foils (0.1-0.5 mm) stacked and diffusion-welded at the ends',
      braided: 'Fine copper wires woven into a flat or round braid, pressed into terminals',
    },
    {
      criterion: 'Current capacity (same envelope)',
      laminated: 'Higher - near 100% copper fill, no air gaps',
      braided: 'Lower - air between strands reduces effective copper cross-section',
    },
    {
      criterion: 'Flexibility',
      laminated: 'Good - bends perpendicular to foil plane; suited to limited, defined movement',
      braided: 'Excellent - flexes in all directions; suited to frequent or continuous movement',
    },
    {
      criterion: 'Electrical resistance',
      laminated: 'Lower - solid foil paths and homogeneous welded ends',
      braided: 'Slightly higher - strand-to-strand contact resistance',
    },
    {
      criterion: 'Inductance / high frequency',
      laminated: 'Low inductance; reduced skin-effect losses - best for power electronics',
      braided: 'Higher inductance; less suited to fast-switching circuits',
    },
    {
      criterion: 'Vibration endurance',
      laminated: 'Very good within design flex range',
      braided: 'Excellent, including multi-axis vibration',
    },
    {
      criterion: 'Space requirement',
      laminated: 'Compact flat profile, predictable shape',
      braided: 'Bulkier for the same rating; shape less defined',
    },
    {
      criterion: 'Typical applications',
      laminated: 'Switchgear links, transformer connections, EV battery packs, BESS, rectifiers',
      braided: 'Grounding straps, frequently moving joints, welding machine shunts',
    },
  ];

  const chooseLaminated = [
    'Maximum current in a confined space',
    'Low inductance for power electronics or fast-switching circuits',
    'Defined, repeatable shape for automated assembly',
    'Thermal expansion and vibration compensation in switchgear or battery packs',
    'Lowest resistance and millivolt drop',
  ];

  const chooseBraided = [
    'Continuous or frequent movement between connection points',
    'Multi-directional flexing (bending and twisting)',
    'Grounding and earthing straps',
    'Door hinges, drawers, and movable equipment connections',
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
              <span className="text-[#1D2931] font-medium">LAMINATED VS BRAIDED</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Laminated vs Braided Flexible Busbars
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              Both laminated and braided flexible busbars connect high-current points that move
              relative to each other - but they differ in construction, current capacity,
              flexibility, and cost. This guide compares the two so you can choose the right type
              for your application.
            </p>

            {/* Quick Answer */}
            <section className="mb-10 sm:mb-16">
              <div className="border-l-4 border-[#EF290E] bg-white rounded-r-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-3">The Short Answer</h2>
                <p className="text-[#6F7B83]">
                  Choose a <strong className="text-[#1D2931]">laminated flexible busbar</strong> when
                  you need maximum current in minimum space, low inductance, and compensation for
                  thermal expansion or vibration - switchgear, transformers, EV battery packs, and
                  energy storage. Choose a{' '}
                  <strong className="text-[#1D2931]">braided connector</strong> when the connection
                  moves frequently or in multiple directions - grounding straps, hinged panels, and
                  continuously articulating joints.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section className="mb-10 sm:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4">
                    What Is a Laminated Flexible Busbar?
                  </h2>
                  <p className="text-[#6F7B83] mb-4">
                    A laminated flexible busbar is made from thin flat copper foils, typically 0.1
                    to 0.5 mm thick, stacked to the required cross-section. The terminal ends are
                    diffusion-welded into solid copper contact pads, while the body between them
                    remains free to flex.
                  </p>
                  <p className="text-[#6F7B83]">
                    Because the foils lie flat against each other with virtually no air gaps, the
                    full envelope is conducting copper - giving the highest current density of any
                    flexible connector type.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1D2931] mb-4">
                    What Is a Braided Busbar?
                  </h2>
                  <p className="text-[#6F7B83] mb-4">
                    A braided busbar (or braided connector) is made from hundreds of fine copper
                    wires woven into a flat or round braid. The ends are compressed into solid
                    ferrules or terminals, leaving the woven body free to bend and twist in any
                    direction.
                  </p>
                  <p className="text-[#6F7B83]">
                    The weave traps air between strands, so a braid needs a larger envelope for the
                    same copper cross-section - but it offers unmatched freedom of movement.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-x-auto max-w-full">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-[#1D2931]">
                      <th className="px-6 py-4 text-left text-white font-semibold">Criterion</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Laminated Busbar</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Braided Busbar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                        <td className="px-6 py-4 text-[#1D2931] font-medium">{row.criterion}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{row.laminated}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{row.braided}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* When to Choose */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Which Should You Choose?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">
                    Choose Laminated When You Need:
                  </h3>
                  <ul className="space-y-3">
                    {chooseLaminated.map((item, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">
                    Choose Braided When You Need:
                  </h3>
                  <ul className="space-y-3">
                    {chooseBraided.map((item, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Frequently Asked Questions
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
                    Construction, manufacturing process, and specifications.
                  </p>
                </Link>
                <Link
                  href="/products/flexible-busbars/sizing-guide"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Sizing &amp; Ampacity Guide
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    How to calculate the copper cross-section for your current rating.
                  </p>
                </Link>
                <Link
                  href="/products/welding-systems-lamella-shunts"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Lamella Shunts
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Flexible copper shunts for welding equipment.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">
                Not Sure Which Type Fits Your Application?
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your current rating, movement requirements, and space envelope. Our
                engineers will recommend the right construction and provide a quotation - we
                manufacture custom laminated flexible busbars in Bangalore, India for customers
                worldwide.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Ask Our Experts
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
