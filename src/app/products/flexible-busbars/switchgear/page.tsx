import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Busbars for Switchgear & Transformers | Up to 10,000 A | SVS Maverick',
  description:
    'Flexible copper busbars for LV/MV switchgear, transformers, circuit breakers, and generator connections. 100-10,000 A, up to 36 kV. Custom-manufactured in India, exported worldwide.',
  keywords:
    'switchgear busbar, flexible busbar switchgear, transformer flexible connector, circuit breaker busbar, flexible copper link, MV switchgear connection, busbar thermal expansion',
  alternates: {
    canonical: 'https://www.svsmav.com/products/flexible-busbars/switchgear/',
  },
  openGraph: {
    title: 'Flexible Busbars for Switchgear & Transformers',
    description:
      'Flexible copper busbars for power distribution equipment - 100 to 10,000 A, up to 36 kV. Custom designs from drawings.',
    url: 'https://www.svsmav.com/products/flexible-busbars/switchgear/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Why are flexible busbars used in switchgear?',
    answer:
      'Switchgear connections carry high currents that heat conductors and cause thermal expansion. A rigid connection transmits this expansion force directly into bushings, insulators, and terminals, loosening joints and cracking ceramics over time. A flexible busbar absorbs that movement, plus vibration from breakers and transformers, protecting the equipment and extending service life.',
  },
  {
    question: 'What voltage class can flexible busbars handle?',
    answer:
      'The copper conductor itself is voltage-independent - voltage capability is determined by insulation, creepage, and clearance. SVS Maverick supplies flexible busbars for low-voltage assemblies and medium-voltage switchgear up to 36 kV, with insulation classes B, F, or H as the design requires.',
  },
  {
    question: 'Can you replace a rigid copper link with a flexible busbar?',
    answer:
      'Yes, in most cases. A flexible busbar with the same copper cross-section carries the same current as the rigid bar it replaces, while adding thermal-expansion compensation and vibration isolation. Send us the drawing of the existing link and we will quote a direct flexible replacement.',
  },
  {
    question: 'What plating do you recommend for switchgear connections?',
    answer:
      'Tin plating is the standard recommendation for switchgear: it prevents oxidation at bolted joints and maintains low contact resistance for decades. Silver plating offers the lowest contact resistance for very high current or frequently operated connections. Bare copper is acceptable in dry, indoor, regularly maintained installations.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Flexible Busbars for Switchgear and Transformers',
  description:
    'Flexible laminated copper busbars for switchgear, transformers, circuit breakers, and generator connections. Rated 100 A to 10,000 A, voltage class up to 36 kV.',
  brand: { '@type': 'Brand', name: 'SVS Maverick' },
  manufacturer: { '@type': 'Organization', name: 'SVS Maverick Private Limited' },
  category: 'Electrical Conductors',
  url: 'https://www.svsmav.com/products/flexible-busbars/switchgear/',
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
      name: 'Switchgear',
      item: 'https://www.svsmav.com/products/flexible-busbars/switchgear/',
    },
  ],
};

export default function SwitchgearBusbarsPage() {
  const applications = [
    'Low and medium voltage switchgear',
    'Power and distribution transformers',
    'Circuit breaker connections',
    'Disconnect switch links',
    'Bus duct and busway systems',
    'Generator and alternator connections',
    'Capacitor bank connections',
    'Reactor and rectifier connections',
  ];

  const features = [
    {
      title: 'Thermal Expansion Compensation',
      description:
        'Absorbs dimensional changes caused by heating during high-current operation, preventing stress on terminals, bushings, and insulators.',
    },
    {
      title: 'Vibration Isolation',
      description:
        'Flexible construction isolates vibrations from breakers, transformers, and rotating machinery, preventing fatigue failures and loosening of bolted connections.',
    },
    {
      title: 'Misalignment Tolerance',
      description:
        'Accommodates manufacturing tolerances and installation variations between connection points - no precision alignment needed.',
    },
    {
      title: 'Easy Installation',
      description:
        'Bends around obstacles and simplifies installation in confined panels, reducing assembly time compared to rigid bars that need exact pre-forming.',
    },
  ];

  const specifications = [
    { label: 'Current Rating', value: '100 A - 10,000 A' },
    { label: 'Voltage Class', value: 'Up to 36 kV' },
    { label: 'Conductor Material', value: 'ETP Copper (99.9%+ purity)' },
    { label: 'Lamination Thickness', value: '0.1 - 0.3 mm' },
    { label: 'Insulation Class', value: 'Class B, F, or H' },
    { label: 'Temperature Range', value: '-40°C to +150°C' },
    { label: 'Terminal Options', value: 'Drilled holes, palm terminals, custom' },
    { label: 'Surface Treatment', value: 'Bare, tin-plated, silver-plated' },
  ];

  const designConsiderations = [
    {
      title: 'Current Capacity',
      points: [
        'Cross-sectional area determines ampacity',
        'Number and thickness of laminations',
        'Operating temperature limits',
        'Duty cycle considerations',
      ],
    },
    {
      title: 'Mechanical Requirements',
      points: [
        'Expected thermal movement range',
        'Vibration frequency and amplitude',
        'Installation space constraints',
        'Terminal orientation and spacing',
      ],
    },
    {
      title: 'Environmental Factors',
      points: [
        'Indoor or outdoor installation',
        'Humidity and corrosion resistance',
        'Altitude and air density',
        'Contamination and pollution levels',
      ],
    },
  ];

  const insulationOptions = [
    { name: 'PVC Sleeving', temp: 'Up to 105°C', description: 'Cost-effective general purpose insulation' },
    { name: 'Heat Shrink', temp: 'Up to 125°C', description: 'Tight-fitting moisture-resistant covering' },
    { name: 'Kapton Film', temp: 'Up to 200°C', description: 'High-temperature polyimide insulation' },
    { name: 'Silicone Rubber', temp: 'Up to 180°C', description: 'Flexible high-temperature insulation' },
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
              <span className="text-[#1D2931] font-medium">SWITCHGEAR</span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Busbars for Switchgear
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-8 sm:mb-12 max-w-3xl">
              Reliable high-current connections for switchgear, transformers, and power distribution
              equipment - rated 100 A to 10,000 A and up to 36 kV. Our flexible copper busbars
              compensate for thermal expansion and vibration while maintaining the electrical
              performance of solid copper.
            </p>

            {/* Key Features */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{feature.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Use */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Why Use Flexible Busbars in Switchgear?
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    In switchgear and transformer applications, electrical connections must carry
                    high currents while accommodating mechanical stresses. Rigid busbars transmit
                    these stresses directly to insulators, bushings, and terminals, loosening bolted
                    joints and cracking ceramic components over years of thermal cycling.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    Flexible busbars act as stress-relief elements, absorbing thermal expansion,
                    contraction, and vibration. This protects sensitive equipment, keeps contact
                    resistance stable, and extends the service life of the entire installation.
                  </p>
                  <p className="text-[#6F7B83]">
                    The laminated construction also provides lower inductance than solid conductors
                    of the same cross-section - beneficial in circuits with high switching
                    frequencies or transient currents.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Common Applications</h3>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start text-[#6F7B83]">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
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
                Need help selecting a cross-section? See our{' '}
                <Link href="/products/flexible-busbars/sizing-guide" className="text-[#EF290E] font-medium hover:underline">
                  flexible busbar sizing &amp; ampacity guide
                </Link>
                .
              </p>
            </section>

            {/* Design Considerations */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Design Considerations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {designConsiderations.map((consideration) => (
                  <div key={consideration.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-4">{consideration.title}</h3>
                    <ul className="space-y-2">
                      {consideration.points.map((point, index) => (
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

            {/* Insulation Options */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Insulation Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {insulationOptions.map((option) => (
                  <div key={option.name} className="border border-gray-200 rounded-lg bg-white p-6 text-center">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-1">{option.name}</h3>
                    <p className="text-[#EF290E] font-bold mb-2">{option.temp}</p>
                    <p className="text-[#6F7B83] text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Switchgear Busbar FAQ
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

            {/* Related Products */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">Related Products & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/products/flexible-busbars/ev-battery-pack"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    EV Battery Pack Busbars
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Flexible busbars for electric vehicle battery and energy storage applications.
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
                    Which flexible connector type fits your switchgear application.
                  </p>
                </Link>
                <Link
                  href="/materials/copper-materials"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Copper Materials
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    High-purity copper alloys for electrical applications.
                  </p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">Need Custom Switchgear Busbars?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your specifications or drawings for a custom quotation. Our engineering team
                manufactures flexible busbars in Bangalore, India for switchgear OEMs and panel
                builders in India and worldwide.
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
