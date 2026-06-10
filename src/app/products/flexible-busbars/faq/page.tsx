import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbar FAQ | Materials, Plating, Insulation & Ordering | SVS Maverick',
  description:
    'Answers to common flexible busbar questions: copper grades, tin vs nickel vs silver plating, insulation options, testing, lead times, MOQ, and how to order custom laminated copper connectors.',
  keywords:
    'flexible busbar FAQ, busbar questions, copper busbar plating, busbar insulation, busbar testing, custom busbar order, busbar lead time, laminated connector questions',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/faq/',
  },
  openGraph: {
    title: 'Flexible Busbar FAQ',
    description:
      'Materials, plating, insulation, testing, lead times, and ordering - answered by a flexible busbar manufacturer.',
    url: 'https://www.svsmav.com/products/flexible-busbars/faq/',
    type: 'article',
  },
};

const faqCategories = [
  {
    category: 'Basics',
    faqs: [
      {
        question: 'What is a flexible busbar used for?',
        answer:
          'Flexible busbars connect two high-current points that move relative to each other or cannot be perfectly aligned. Typical uses: transformer-to-switchgear links, circuit breaker connections, generator terminals, EV battery module interconnects, energy storage rack busbars, and rectifier connections. They replace rigid bars where thermal expansion, vibration, or tolerances would stress the joint, and replace cables where space, heat dissipation, or a defined shape matters.',
      },
      {
        question: 'What is the difference between a flexible busbar and a flexible shunt?',
        answer:
          'They are largely the same product under different names. "Shunt" is the traditional term, common in welding and electrical machine contexts; "flexible busbar" or "laminated connector" is more common in power distribution and EV applications. All describe laminated copper foil conductors with solid contact ends.',
      },
      {
        question: 'How long do flexible busbars last?',
        answer:
          'Within their designed flex range, laminated copper busbars typically last the life of the installation - decades in switchgear. Fatigue life depends on bending amplitude and frequency: designs flexing within the intended thermal-expansion range experience very low stress per cycle. Applications with continuous large movement need specific fatigue-oriented design, which our engineers account for when you specify the movement.',
      },
    ],
  },
  {
    category: 'Materials & Plating',
    faqs: [
      {
        question: 'What copper is used in flexible busbars?',
        answer:
          'Electrolytic tough pitch (ETP) copper with 99.9%+ purity and 100% IACS conductivity is the standard. Oxygen-free copper (OFC) is used where maximum conductivity or welding performance is critical. Foils are typically supplied in annealed (soft) temper for flexibility.',
      },
      {
        question: 'Tin, nickel, or silver plating - which should I choose?',
        answer:
          'Tin is the general-purpose choice: it prevents oxidation at bolted joints, is economical, and suits most switchgear and BESS applications. Nickel is specified for welding copper to aluminium terminals (common in EV cells) and for higher-temperature joints. Silver gives the lowest contact resistance and suits very high current or frequently operated connections. Bare copper is acceptable for dry indoor installations with maintained joints.',
      },
      {
        question: 'Can flexible busbars be made from aluminium?',
        answer:
          'Laminated flexible connectors can be made from aluminium foils for weight-critical or cost-driven designs, though copper dominates because of its roughly 60% higher conductivity, easier joining, and smaller envelope. SVS Maverick primarily manufactures copper flexible busbars; contact us to discuss aluminium or copper-aluminium (bimetal) requirements.',
      },
    ],
  },
  {
    category: 'Insulation',
    faqs: [
      {
        question: 'What insulation options are available?',
        answer:
          'PVC sleeving (up to 105°C) for general purpose, polyolefin heat shrink (125°C) for a tight moisture-resistant fit, silicone rubber (180°C) for flexible high-temperature service, and Kapton polyimide film (200°C) for the highest temperatures. EV and high-voltage battery applications additionally use PET film and Nomex for automotive-grade dielectric isolation.',
      },
      {
        question: 'Is insulation required on a flexible busbar?',
        answer:
          'No - bare busbars are standard where clearance and creepage distances are met by the layout, as in much MV switchgear. Insulation is specified where compact spacing, touch protection, pollution, or high-voltage isolation requirements demand it. Terminal pads are left bare for electrical contact in either case.',
      },
    ],
  },
  {
    category: 'Testing & Quality',
    faqs: [
      {
        question: 'How are flexible busbars tested?',
        answer:
          'Standard tests include dimensional inspection against the drawing, millivolt-drop (resistance) measurement across the busbar and especially across the diffusion-welded joints, and insulation/dielectric testing where insulated. Material certificates trace the copper to its mill batch. Application-specific tests - thermal cycling, vibration, or salt spray - can be arranged for qualification programs.',
      },
      {
        question: 'What is millivolt drop and why does it matter?',
        answer:
          'Millivolt drop is the voltage measured across the busbar at a defined test current - a direct indicator of total resistance, including the welded terminal joints. A properly diffusion-welded busbar shows nearly the same resistance as solid copper of equal cross-section; a poor weld shows up immediately as excess millivolt drop and would overheat in service.',
      },
    ],
  },
  {
    category: 'Ordering & Custom Design',
    faqs: [
      {
        question: 'What information do you need for a quotation?',
        answer:
          'Ideally a drawing with dimensions, hole patterns, and tolerances. If you do not have a drawing, send the continuous current rating, voltage and insulation requirement, end-to-end length and space envelope, terminal hole sizes or stud requirements, expected movement (thermal/vibration), operating temperature, and quantity. Our engineers will propose a design.',
      },
      {
        question: 'What are typical lead times and minimum order quantities?',
        answer:
          'Lead times depend on design complexity and quantity - prototypes are typically faster, with production batches scheduled to your call-off. We support low minimum order quantities for development and prototype work and scale to series production. Contact us with your requirement for a specific commitment.',
      },
      {
        question: 'Do you manufacture from customer drawings?',
        answer:
          'Yes - manufacturing to customer drawings is our standard mode of working. We also offer design-in support: send your electrical and mechanical requirements and we develop the busbar design for you, including material, lamination build, plating, and insulation selection.',
      },
      {
        question: 'Where are SVS Maverick flexible busbars manufactured?',
        answer:
          'All flexible busbars are manufactured at our facility in Peenya Industrial Area, Bangalore, India. We supply customers across India and export worldwide, including Europe, North America, the Middle East, and Southeast Asia.',
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
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
      name: 'FAQ',
      item: 'https://www.svsmav.com/products/flexible-busbars/faq/',
    },
  ],
};

export default function FlexibleBusbarFaqPage() {
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
              <span className="text-[#1D2931] font-medium">FAQ</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Busbar FAQ
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              Answers from our engineering team to the questions we hear most about flexible
              busbars and laminated copper connectors - materials, plating, insulation, testing,
              and how to order.
            </p>

            {/* FAQ Sections */}
            {faqCategories.map((category) => (
              <section key={category.category} className="mb-10 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{faq.question}</h3>
                      <p className="text-[#6F7B83]">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Related */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Learn More</h2>
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
                    Calculate the right cross-section for your current rating.
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
                    Compare flexible connector types and choose the right one.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">
                Question Not Answered Here?
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our engineers respond directly to technical questions about flexible busbar design,
                materials, and applications - usually within one business day.
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
