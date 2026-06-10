import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbars | Laminated Copper Connectors Manufacturer | SVS Maverick',
  description:
    'Flexible busbar manufacturer in Bangalore, India. Custom laminated copper connectors up to 10,000 A for switchgear, transformers, EV battery packs, and energy storage. Global export. Request a quote.',
  keywords:
    'flexible busbar, laminated copper connector, flexible copper busbar, laminated busbar, copper flexible connector, busbar manufacturer India, flexible busbar manufacturer, copper shunt, EV busbar, switchgear busbar',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/',
  },
  openGraph: {
    title: 'Flexible Busbars | Laminated Copper Connectors Manufacturer',
    description:
      'Custom flexible busbars and laminated copper connectors up to 10,000 A. Manufactured in India, supplied worldwide.',
    url: 'https://www.svsmav.com/products/flexible-busbars/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is a flexible busbar?',
    answer:
      'A flexible busbar is an electrical conductor made from multiple thin copper foils (typically 0.1-0.5 mm each) stacked and bonded together at the terminal ends. It carries high currents like a solid copper busbar but bends and flexes along its length, allowing it to absorb thermal expansion, vibration, and alignment tolerances between connection points.',
  },
  {
    question: 'How are flexible busbars manufactured?',
    answer:
      'Thin electrolytic copper foils are stacked to the required cross-section, then the terminal ends are fused into solid contact pads using diffusion (press) welding - high current and pressure applied simultaneously, bonding the copper layers into a homogeneous solid without any filler material. The contact ends are then drilled, punched, or machined to the customer drawing, and the body can be insulated with heat shrink, PVC, or high-temperature films.',
  },
  {
    question: 'What is the difference between a flexible busbar and a rigid busbar?',
    answer:
      'A rigid busbar is a solid copper or aluminium bar that must be precisely aligned and cannot absorb movement. A flexible busbar uses laminated thin foils, so it tolerates thermal expansion, vibration, and misalignment while carrying the same current for a given cross-section. Flexible busbars are preferred wherever two connection points move relative to each other or where installation tolerances are hard to control.',
  },
  {
    question: 'What current ratings are available?',
    answer:
      'SVS Maverick manufactures flexible busbars from 100 A up to 10,000 A continuous current. The rating depends on the copper cross-section, number of laminations, permissible temperature rise, and ambient conditions. Our engineering team sizes each busbar to the application - send us your current, voltage, and space requirements for a recommendation.',
  },
  {
    question: 'Can flexible busbars be insulated?',
    answer:
      'Yes. Standard options include polyolefin heat shrink sleeves (up to 125°C), PVC sleeving (105°C), silicone rubber (180°C), and Kapton polyimide film (200°C). For EV and battery applications, PET and Nomex insulation meeting automotive high-voltage isolation requirements are available.',
  },
  {
    question: 'Do you export flexible busbars outside India?',
    answer:
      'Yes. SVS Maverick manufactures flexible busbars in Bangalore, India and supplies customers worldwide, including Europe, North America, the Middle East, and Southeast Asia. We work from customer drawings or develop designs from electrical and mechanical requirements.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Flexible Busbars - Laminated Copper Connectors',
  description:
    'Custom flexible busbars made from laminated high-purity copper foils, rated 100 A to 10,000 A, for switchgear, transformers, EV battery packs, and energy storage systems.',
  brand: { '@type': 'Brand', name: 'SVS Maverick' },
  manufacturer: {
    '@type': 'Organization',
    name: 'SVS Maverick Private Limited',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
  },
  category: 'Electrical Conductors',
  material: 'Electrolytic Copper (ETP), Oxygen-Free Copper (OFC)',
  url: 'https://www.svsmav.com/products/flexible-busbars/',
};

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
  ],
};

export default function FlexibleBusbarsPage() {
  const applications = [
    {
      title: 'Switchgear & Transformers',
      description:
        'Flexible connections for power distribution equipment, compensating for thermal expansion and vibration.',
      href: '/products/flexible-busbars/switchgear',
      features: ['Thermal expansion compensation', 'Vibration isolation', 'Easy installation', 'Long service life'],
    },
    {
      title: 'EV Battery Packs & Energy Storage',
      description:
        'High-current connections for electric vehicle battery modules, packs, and stationary energy storage with optimized space efficiency.',
      href: '/products/flexible-busbars/ev-battery-pack',
      features: ['High current capacity', 'Compact design', 'Thermal management', 'Weight optimization'],
    },
  ];

  const guides = [
    {
      title: 'Laminated vs Braided Flexible Busbars',
      description:
        'Compare construction, current capacity, flexibility, and cost - and learn which type fits your application.',
      href: '/products/flexible-busbars/laminated-vs-braided',
    },
    {
      title: 'Sizing & Ampacity Guide',
      description:
        'How to size a flexible busbar: cross-section calculation, current density rules, temperature rise, and derating factors.',
      href: '/products/flexible-busbars/sizing-guide',
    },
    {
      title: 'Ampacity Calculator',
      description:
        'Interactive tool: enter your current, then adjust width, foil thickness, and laminations until the cross-section fits.',
      href: '/products/flexible-busbars/calculator',
    },
    {
      title: 'Frequently Asked Questions',
      description:
        'Answers on materials, plating, insulation, testing, lead times, minimum order quantities, and custom design.',
      href: '/products/flexible-busbars/faq',
    },
  ];

  const advantages = [
    {
      title: 'High Current Capacity',
      description:
        'Multiple copper laminations provide the same current-carrying capability as solid copper of equal cross-section, with ratings up to 10,000 A.',
    },
    {
      title: 'Flexibility',
      description:
        'Accommodates thermal expansion, vibration, and misalignment between connection points without stressing terminals or insulators.',
    },
    {
      title: 'Low Inductance',
      description:
        'Laminated flat construction minimizes inductance and skin-effect losses, improving performance in high-frequency and fast-switching circuits.',
    },
    {
      title: 'Space Efficient',
      description:
        'Compact flat profile bends around obstacles and installs in tight spaces where rigid busbars and round cables cannot fit.',
    },
    {
      title: 'Thermal Performance',
      description:
        'Large surface area of multiple thin copper layers dissipates heat efficiently, reducing hotspots and temperature rise.',
    },
    {
      title: 'Custom Solutions',
      description:
        'Every busbar is manufactured to customer drawings or developed by our engineers from your electrical and mechanical requirements.',
    },
  ];

  const specifications = [
    { label: 'Conductor Material', value: 'Electrolytic Copper (ETP), Oxygen-Free Copper (OFC)' },
    { label: 'Purity', value: '99.9%+ Cu' },
    { label: 'Lamination Thickness', value: '0.1 - 0.5 mm' },
    { label: 'Number of Laminations', value: '10 - 200+ layers' },
    { label: 'Current Rating', value: '100 A - 10,000 A continuous' },
    { label: 'Cross-Section Range', value: '10 mm² - 4,000 mm²' },
    { label: 'Insulation Options', value: 'Polyolefin heat shrink, PVC, silicone, Kapton, PET, Nomex' },
    { label: 'Terminal Types', value: 'Drilled holes, threaded studs, palm terminals, custom' },
    { label: 'Plating Options', value: 'Tin, Nickel, Silver' },
    { label: 'Manufacturing Process', value: 'Diffusion (press) welding of terminal ends' },
  ];

  const manufacturingSteps = [
    {
      step: '1. Foil Cutting & Stacking',
      description:
        'High-purity electrolytic copper foils (0.1-0.5 mm) are cut to length and stacked to achieve the required cross-sectional area.',
    },
    {
      step: '2. Diffusion Welding',
      description:
        'Terminal ends are fused under high current and pressure. The copper layers bond into a solid homogeneous block - no filler metal, no brazing alloy, negligible millivolt drop across the joint.',
    },
    {
      step: '3. Machining & Forming',
      description:
        'Contact pads are drilled, punched, or machined to drawing. The flexible body is formed to the required bend profile.',
    },
    {
      step: '4. Plating & Insulation',
      description:
        'Optional tin, nickel, or silver plating for corrosion protection, and insulation sleeving rated for the application temperature and voltage.',
    },
    {
      step: '5. Testing & Inspection',
      description:
        'Dimensional inspection, millivolt-drop / resistance measurement, and insulation testing before dispatch, with full material traceability.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
              <span className="text-[#1D2931] font-medium">FLEXIBLE BUSBARS</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Busbars
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              SVS Maverick manufactures custom flexible busbars and laminated copper connectors rated
              from 100 A to 10,000 A. Made in Bangalore, India and supplied worldwide, our busbars
              combine the conductivity of solid copper with the flexibility demanded by switchgear,
              transformers, EV battery packs, and energy storage systems.
            </p>

            {/* What Are Flexible Busbars */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">What Is a Flexible Busbar?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    A flexible busbar - also called a laminated busbar, flexible copper connector,
                    copper laminated flexible, or flexible shunt - is an electrical conductor made
                    from multiple thin copper foils or strips stacked together and fused into solid
                    contact pads at each end. This construction delivers the high current-carrying
                    capacity of solid copper while the laminated body bends, twists, and flexes.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Unlike rigid busbars, flexible busbars absorb mechanical stresses from thermal
                    expansion, vibration, and installation tolerances. This makes them the standard
                    choice for connections between fixed and moving components, between equipment
                    that expands at different rates, or wherever precise alignment is difficult to
                    achieve.
                  </p>
                  <p className="text-[#6F7B83]">
                    SVS Maverick flexible busbars are manufactured from 99.9%+ purity electrolytic
                    copper using a diffusion welding process, with optional plating and insulation
                    to match each application&apos;s electrical, thermal, and environmental
                    requirements.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Construction</h3>
                  <ul className="space-y-3">
                    {[
                      'Multiple thin copper laminations (0.1-0.5 mm each)',
                      'Diffusion-welded solid copper terminal ends',
                      'Optional insulation over the flexible body',
                      'Tin, nickel, or silver plating for corrosion protection',
                      'Custom bend profiles and lengths',
                      'Drilled, punched, or threaded terminal options',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Manufacturing Process */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                How Flexible Busbars Are Manufactured
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {manufacturingSteps.map((item) => (
                  <div key={item.step} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{item.step}</h3>
                    <p className="text-[#6F7B83] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Applications */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {applications.map((app) => (
                  <Link
                    key={app.title}
                    href={app.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                  >
                    <h3 className="text-xl font-bold text-[#1D2931] mb-3 group-hover:text-[#EF290E] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-[#6F7B83] mb-4">{app.description}</p>
                    <ul className="space-y-2">
                      {app.features.map((feature, index) => (
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

            {/* Guides / Knowledge Hub */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Selection & Design Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {guides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                  >
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-[#6F7B83] text-sm">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Advantages */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Key Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{advantage.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Technical Specifications</h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-x-auto max-w-full">
                <table className="w-full min-w-[400px]">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                        <td className="px-6 py-4 text-[#6F7B83] font-medium">{spec.label}</td>
                        <td className="px-6 py-4 text-[#1D2931]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Industries */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Industries Served</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  'Power Distribution',
                  'Electric Vehicles',
                  'Energy Storage (BESS)',
                  'Renewable Energy',
                  'Industrial Equipment',
                  'Railway & Transit',
                  'Data Centers',
                  'Marine & Offshore',
                ].map((industry) => (
                  <div key={industry} className="border border-gray-200 rounded-lg bg-white p-4 text-center">
                    <span className="text-[#1D2931] font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Materials */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Material Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Electrolytic Copper (ETP)
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Standard 99.9%+ purity copper with 100% IACS conductivity - the default choice
                    for flexible busbars.
                  </p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Oxygen-Free Copper (OFC)
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Ultra-high purity copper for critical applications requiring maximum
                    conductivity and weldability.
                  </p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Tinned Copper
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Tin-plated copper foils for enhanced corrosion resistance, solderability, and
                    long-term contact stability.
                  </p>
                </Link>
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
              <p className="text-[#6F7B83] mt-6">
                More questions?{' '}
                <Link href="/products/flexible-busbars/faq" className="text-[#EF290E] font-medium hover:underline">
                  See the full flexible busbar FAQ
                </Link>{' '}
                or{' '}
                <Link href="/contact" className="text-[#EF290E] font-medium hover:underline">
                  ask our engineers
                </Link>
                .
              </p>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">Custom Flexible Busbar Solutions</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your drawing or your electrical and mechanical requirements - current rating,
                voltage, terminal dimensions, and space envelope. Our engineering team in Bangalore
                designs and manufactures custom flexible busbars for customers in India and
                worldwide, from prototype quantities to series production.
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
