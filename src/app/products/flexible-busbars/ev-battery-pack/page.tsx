import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'EV Battery Busbars | Flexible Busbars for Battery Packs & BESS | SVS Maverick',
  description:
    'Flexible copper busbars for EV battery modules, packs, and energy storage (BESS). Up to 2,000 A continuous, 1,000 V DC, automotive vibration-rated. Custom design from prototype to production.',
  keywords:
    'EV busbar, battery busbar, flexible busbar EV, battery pack interconnect, battery module busbar, BESS busbar, energy storage busbar, EV battery connector, laminated busbar battery, cell-to-cell busbar',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/ev-battery-pack/',
  },
  openGraph: {
    title: 'EV Battery Busbars | Flexible Busbars for Battery Packs & BESS',
    description:
      'Flexible copper busbars for EV battery modules, packs, and energy storage. Up to 2,000 A, 1,000 V DC, automotive-grade.',
    url: 'https://www.svsmav.com/products/flexible-busbars/ev-battery-pack/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Why use flexible busbars instead of cables in EV battery packs?',
    answer:
      'Flexible busbars carry the same current in a thinner, flatter package than round cable, freeing space and reducing weight - both critical for EV range. The flat profile also dissipates heat better, has lower inductance for fast-switching circuits, and the defined shape simplifies automated assembly compared to routing cables.',
  },
  {
    question: 'Why use flexible busbars instead of rigid busbars between battery modules?',
    answer:
      'Battery modules shift relative to each other from road vibration, thermal cycling, and cell swelling over the pack lifetime. A rigid busbar transmits these forces into the cell terminals, the weakest point in the pack. A flexible busbar absorbs the movement, protecting terminals and welds for the life of the vehicle.',
  },
  {
    question: 'Can flexible busbars connect to aluminium battery terminals?',
    answer:
      'Yes. Nickel-plated copper busbars are the standard solution for laser or ultrasonic welding to aluminium cell terminals, preventing galvanic corrosion at the copper-aluminium interface. Tin plating is used for bolted aluminium joints.',
  },
  {
    question: 'Are your busbars suitable for stationary energy storage (BESS)?',
    answer:
      'Yes. The same flexible busbar technology used in EV packs applies to grid-scale and commercial battery energy storage systems - module interconnects, rack busbars, and connections to power conversion systems. BESS designs typically allow larger cross-sections and favor tin plating with heat shrink insulation.',
  },
  {
    question: 'What insulation is used for high-voltage EV busbars?',
    answer:
      'Kapton (polyimide) film, PET film, and Nomex are the standard insulations for 400 V and 800 V EV systems. They provide high dielectric strength in thin layers, meet flame-retardancy requirements, and maintain creepage and clearance distances in compact packs.',
  },
  {
    question: 'Do you support prototype quantities for EV development?',
    answer:
      'Yes. SVS Maverick supports EV and battery programs from first prototypes through validation builds to series production, with design consultation, quick-turn samples, and scaling as your program ramps.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Flexible Busbars for EV Battery Packs and Energy Storage',
  description:
    'Flexible laminated copper busbars for electric vehicle battery modules, packs, and battery energy storage systems. Up to 2,000 A continuous, 1,000 V DC, -40°C to +85°C.',
  brand: { '@type': 'Brand', name: 'SVS Maverick' },
  manufacturer: { '@type': 'Organization', name: 'SVS Maverick Private Limited' },
  category: 'Electrical Conductors',
  url: 'https://www.svsmav.com/products/flexible-busbars/ev-battery-pack/',
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
    {
      '@type': 'ListItem',
      position: 4,
      name: 'EV Battery Pack',
      item: 'https://www.svsmav.com/products/flexible-busbars/ev-battery-pack/',
    },
  ],
};

export default function EVBatteryBusbarsPage() {
  const stats = [
    { value: '2000A', label: 'Max Continuous Current' },
    { value: '1000V', label: 'Voltage Rating' },
    { value: '-40°C', label: 'Min Operating Temp' },
    { value: '+85°C', label: 'Max Operating Temp' },
  ];

  const features = [
    {
      title: 'High Current Density',
      description:
        'Optimized cross-section design delivers maximum current capacity with minimum weight and volume.',
    },
    {
      title: 'Thermal Management',
      description:
        'Laminated construction provides excellent heat dissipation, preventing hotspots in battery systems.',
    },
    {
      title: 'Weight Optimization',
      description:
        'Precisely engineered to minimize weight while meeting current and thermal requirements - critical for EV range.',
    },
    {
      title: 'Vibration Resistance',
      description:
        'Flexible design withstands automotive vibration and shock without fatigue or loosening.',
    },
    {
      title: 'Compact Design',
      description:
        'Low-profile construction fits in tight battery pack spaces where rigid busbars and cables cannot.',
    },
    {
      title: 'Safety Features',
      description:
        'Insulation options meet automotive safety standards for high-voltage isolation in 400 V and 800 V systems.',
    },
  ];

  const packApplications = [
    {
      title: 'Prismatic Cell Packs',
      description: 'Flexible connections between prismatic cells in module configurations.',
    },
    {
      title: 'Pouch Cell Packs',
      description: 'Low-profile busbars for connecting pouch cell tabs in series and parallel.',
    },
    {
      title: 'Cylindrical Cell Packs',
      description: 'Interconnects for 18650, 21700, and 4680 cylindrical cell modules.',
    },
    {
      title: 'Module-to-Module',
      description: 'High-current connections between battery modules within the pack.',
    },
  ];

  const commonUses = [
    'Battery module interconnections',
    'Battery pack main busbars',
    'BMS (Battery Management System) connections',
    'Inverter and motor controller connections',
    'DC fast charging circuits',
    'High-voltage junction boxes',
    'Onboard charger connections',
    'BESS rack and container busbars',
  ];

  const requirements = [
    {
      title: 'Electrical Performance',
      points: [
        'Low resistance for minimal power loss',
        'Low inductance for fast switching',
        'High current capacity for rapid charging',
        'Consistent performance across temperature range',
      ],
    },
    {
      title: 'Mechanical Requirements',
      points: [
        'Vibration resistance (automotive standards)',
        'Thermal cycling durability',
        'Compact form factor',
        'Easy assembly and serviceability',
      ],
    },
    {
      title: 'Safety & Compliance',
      points: [
        'High-voltage isolation (creepage/clearance)',
        'Flame retardant materials',
        'Automotive qualification testing',
        'Traceability and documentation',
      ],
    },
  ];

  const specifications = [
    { label: 'Current Rating', value: '100 A - 2,000 A (continuous)' },
    { label: 'Voltage Class', value: 'Up to 1,000 V DC' },
    { label: 'Conductor Material', value: 'ETP / OFC Copper' },
    { label: 'Lamination Thickness', value: '0.1 - 0.2 mm (typical)' },
    { label: 'Operating Temperature', value: '-40°C to +85°C' },
    { label: 'Insulation', value: 'Kapton, PET, or Nomex' },
    { label: 'Plating', value: 'Nickel or tin (for aluminium welding compatibility)' },
    { label: 'Standards', value: 'ISO 6469, IEC 61851, SAE J1772' },
  ];

  const designServices = [
    'Design consultation and optimization',
    'Thermal and electrical analysis',
    'Prototype development',
    'Testing and validation support',
    'Production scaling',
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
              <Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931]">FLEXIBLE BUSBARS</Link>
              <span className="text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">EV BATTERY PACK</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Busbars for EV Battery Packs
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              High-performance laminated copper busbars engineered for electric vehicle battery
              systems and stationary energy storage (BESS). Optimized for high current, thermal
              management, and the demanding vibration and safety requirements of automotive
              applications.
            </p>

            {/* Stats */}
            <section className="mb-10 sm:mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#EF290E] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#6F7B83]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Battery Pack Applications */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Battery Pack Applications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {packApplications.map((app) => (
                    <div key={app.title} className="border border-gray-200 rounded-lg bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{app.title}</h3>
                      <p className="text-[#6F7B83] text-sm">{app.description}</p>
                    </div>
                  ))}
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Common Uses</h3>
                  <ul className="space-y-3">
                    {commonUses.map((use, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Energy Storage */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Battery Energy Storage Systems (BESS)
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8">
                <p className="text-[#6F7B83] mb-4">
                  The same flexible busbar technology proven in EV packs is increasingly used in
                  stationary battery energy storage - grid-scale containers, commercial and
                  industrial BESS, and solar-plus-storage installations. Flexible busbars connect
                  battery modules to rack busbars and power conversion systems while absorbing
                  thermal cycling across the wide temperature swings of outdoor enclosures.
                </p>
                <p className="text-[#6F7B83]">
                  For BESS applications, SVS Maverick typically supplies tin-plated copper busbars
                  with heat shrink or PVC insulation, sized for continuous charge/discharge duty.
                  Larger cross-sections up to 10,000 A are available for DC bus and PCS connections.
                </p>
              </div>
            </section>

            {/* EV-Specific Requirements */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">EV-Specific Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {requirements.map((req) => (
                  <div key={req.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-4">{req.title}</h3>
                    <ul className="space-y-2">
                      {req.points.map((point, index) => (
                        <li key={index} className="flex items-start text-sm text-[#6F7B83]">
                          <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
              <p className="text-[#6F7B83] mt-4 text-sm">
                Sizing a busbar for your pack? See our{' '}
                <Link href="/products/flexible-busbars/sizing-guide" className="text-[#EF290E] font-medium hover:underline">
                  sizing &amp; ampacity guide
                </Link>
                .
              </p>
            </section>

            {/* Custom Design Services */}
            <section className="mb-10 sm:mb-16">
              <div className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">Custom Design Services</h2>
                <p className="text-[#6F7B83] mb-6 max-w-3xl">
                  Every EV battery pack is unique. Our engineering team works with you from concept
                  to production to develop flexible busbar solutions that meet your exact
                  requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  {designServices.map((service, index) => (
                    <li key={index} className="flex items-start text-[#6F7B83]">
                      <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Contact Engineering Team
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                EV Busbar FAQ
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Related Products & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/products/flexible-busbars/switchgear"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Switchgear Busbars
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Flexible busbars for power distribution equipment.
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
                    Compare flexible connector types for battery applications.
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
                    Materials, plating, insulation, testing, and ordering questions answered.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">Partner With Us for Your EV Project</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                From prototype to mass production, we support EV and energy storage manufacturers in
                India and worldwide with reliable, high-performance flexible busbar solutions.
                Contact us to discuss your requirements.
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
