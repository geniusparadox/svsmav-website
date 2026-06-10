import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';
import Calculator from './Calculator';

export const metadata = {
  title: 'Busbar Ampacity Calculator | Current to Cross-Section | SVS Maverick',
  description:
    'Free copper busbar calculator: enter your current to get the required cross-section, then adjust width, foil thickness, and laminations to find a busbar geometry that carries it. Works both ways.',
  keywords:
    'busbar calculator, busbar ampacity calculator, busbar cross section calculator, copper busbar current calculator, current density calculator, busbar sizing tool, flexible busbar calculator',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/calculator/',
  },
  openGraph: {
    title: 'Busbar Ampacity Calculator | Current to Cross-Section',
    description:
      'Enter a current, get the required copper cross-section, and play with width and thickness until the geometry fits.',
    url: 'https://www.svsmav.com/products/flexible-busbars/calculator/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How does this busbar calculator work?',
    answer:
      'It uses the standard current-density sizing rule: required cross-section (mm²) = current (A) ÷ current density (A/mm²). You choose a density matching your installation (1.5-2.5 A/mm² covers most cases), and the calculator shows the copper area you need. You then adjust width, foil thickness, and number of laminations until width × thickness × laminations meets or exceeds that area.',
  },
  {
    question: 'What current density should I use?',
    answer:
      'Use 1.5 A/mm² for insulated busbars in enclosed panels, 1.8 A/mm² for bare copper in typical enclosed switchgear, 2.2 A/mm² with good ventilation, and up to 2.5 A/mm² for short busbars in free air. When in doubt, choose the lower value - the result is a cooler-running, longer-lived busbar.',
  },
  {
    question: 'Can I use this calculator in reverse - from dimensions to current?',
    answer:
      'Yes. Set the width, foil thickness, and lamination count of an existing busbar, and the "Carries approximately" result shows its indicative continuous ampacity at the chosen current density - regardless of what target current you entered.',
  },
  {
    question: 'Is the result a guaranteed rating?',
    answer:
      'No - it is a first-pass engineering estimate. Real ampacity depends on permissible temperature rise, ambient temperature, enclosure ventilation, insulation, duty cycle, and joint quality. SVS Maverick verifies every busbar design against the actual operating conditions before quoting; send us your result for a confirmed recommendation.',
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

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Busbar Ampacity Calculator',
  url: 'https://www.svsmav.com/products/flexible-busbars/calculator/',
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Any (web browser)',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Calculates the required copper cross-section for a given current, and the indicative ampacity of a busbar geometry (width × foil thickness × laminations).',
  provider: { '@type': 'Organization', name: 'SVS Maverick Private Limited' },
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
      name: 'Ampacity Calculator',
      item: 'https://www.svsmav.com/products/flexible-busbars/calculator/',
    },
  ],
};

export default function BusbarCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
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
              <span className="text-[#1D2931] font-medium">CALCULATOR</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Busbar Ampacity Calculator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              Enter the current your connection must carry, and the calculator shows the copper
              cross-section you need. Then play with width, foil thickness, and number of
              laminations until the geometry fits your space - or work in reverse from dimensions
              to ampacity.
            </p>

            {/* Calculator */}
            <section className="mb-10 sm:mb-16">
              <Calculator />
            </section>

            {/* How it works */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                The Math Behind the Calculator
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
                <p className="text-[#6F7B83] mb-4">
                  The calculator applies the standard current-density sizing rule used for
                  first-pass copper busbar design:
                </p>
                <p className="text-[#1D2931] font-semibold mb-4 text-lg">
                  Required cross-section S (mm²) = Current I (A) ÷ Current density k (A/mm²)
                </p>
                <p className="text-[#6F7B83] mb-4">
                  For a laminated flexible busbar, the cross-section is simply width × foil
                  thickness × number of laminations. Example: a 30 A connection at a conservative
                  1.8 A/mm² needs about 17 mm² - achievable as a 20 mm wide busbar with four 0.2 mm
                  foils (16 mm², slightly under) or five foils (20 mm², comfortable).
                </p>
                <p className="text-[#6F7B83]">
                  The same section can be built many ways: more thin foils give a more flexible
                  busbar, fewer thick foils a stiffer one. Pick the combination that fits your
                  space and movement requirement, then read the full{' '}
                  <Link
                    href="/products/flexible-busbars/sizing-guide"
                    className="text-[#EF290E] font-medium hover:underline"
                  >
                    sizing &amp; ampacity guide
                  </Link>{' '}
                  for temperature rise and derating factors.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Calculator FAQ
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
                  href="/products/flexible-busbars/sizing-guide"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Sizing &amp; Ampacity Guide
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Temperature rise, derating factors, and the full 6-step sizing method.
                  </p>
                </Link>
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
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">
                Found Your Cross-Section?
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us the result along with your terminal dimensions and operating conditions.
                Our engineers will verify the sizing against actual temperature rise and quote a
                custom flexible busbar - manufactured in Bangalore, India and supplied worldwide.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request a Quote
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
