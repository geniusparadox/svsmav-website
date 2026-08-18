import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Flexible Laminated Busbar Manufacturer India | SVS Maverick',
  description:
    'Diffusion-welded flexible laminated copper busbars for solar inverters, BESS, EV, and railway traction. ISO 9001:2015 manufacturer in Bangalore, India. Built to your drawing — request a quote.',
  keywords: [
    'flexible laminated busbar',
    'flexible copper busbar manufacturer India',
    'diffusion welded busbar',
    'laminated shunt',
    'flexible busbar for solar inverter',
    'EV battery busbar',
    'flexible connector for switchgear',
    '1500V DC busbar',
    'copper foil busbar',
    'flexible busbar Bangalore',
    'bus bar',
    'buss bar',
  ],
};

// Segment-targeted application blocks — each is an indexable, cross-linkable
// section aimed at procurement and design engineers in that vertical.
const segments = [
  {
    id: 'solar',
    tag: 'Utility-Scale Solar',
    short: 'Solar Inverters',
    h2: 'Flexible Busbars for Solar Inverters — 1500 V DC Central & String Inverters',
    body: [
      'For central and string inverters in the 1–4 MW class, our diffusion-welded flexible laminated busbars carry high DC and AC currents between capacitor banks, IGBT/SiC modules, DC links, and output terminals while absorbing the thermal expansion and vibration that rigid bars cannot.',
      'Our 1500 V DC busbars are in series production in megawatt-class central inverters deployed at a 100 MW solar plant — proven under continuous field duty, thermal cycling, and outdoor conditions. Low contact resistance keeps junction temperatures and I²R losses down, directly protecting inverter efficiency and lifetime.',
      'Each flexible busbar for solar inverter applications is built to your drawing with the plating, insulation, and terminal geometry your assembly needs — no re-engineering of your busbar layout required.',
    ],
    points: [
      '1500 V DC rated, series-production proven',
      'Capacitor-bank, DC-link and module interconnects',
      'Absorbs thermal cycling & outdoor vibration',
      'Low I²R loss protects inverter efficiency',
    ],
  },
  {
    id: 'bess',
    tag: 'Energy Storage',
    short: 'BESS & PCS',
    h2: 'Flexible Laminated Busbars for BESS and PCS Cabinets',
    body: [
      'Battery energy storage systems and power conversion system (PCS) cabinets pack high continuous currents into dense enclosures where rigid copper cannot accommodate stack tolerances or module movement. Our flexible copper busbars provide compliant, low-resistance links between battery racks, DC combiners, PCS modules, and AC output.',
      'Diffusion-welded copper foil construction gives the current capacity of solid copper with the flexibility to absorb assembly misalignment, thermal growth, and vibration over thousands of charge/discharge cycles. Low, stable contact resistance limits heat rise at the joints — a critical safety and derating factor in sealed BESS cabinets.',
      'We manufacture each laminated busbar to your cabinet drawing with tin, nickel, or silver plating and PVC, heat-shrink, or epoxy insulation, so creepage and clearance requirements are met without field rework.',
    ],
    points: [
      'Rack-to-PCS and DC-combiner links',
      'Stable contact resistance limits cabinet heat rise',
      'Withstands thousands of charge/discharge cycles',
      'Insulation options for creepage & clearance',
    ],
  },
  {
    id: 'ev',
    tag: 'E-Mobility',
    short: 'EV & Traction',
    h2: 'EV Battery Busbars, Traction Inverters & DC Fast Chargers',
    body: [
      'Electric-vehicle powertrains and charging infrastructure demand high current density in minimal space, with tolerance for continuous vibration and thermal cycling. Our EV battery busbars connect modules, packs, traction inverters, and DC fast-charger power stages with a compact, low-inductance laminated profile.',
      'We currently supply a specialist EV fast-charging technology company, delivering flexible copper busbars engineered for high continuous current and rapid thermal cycling. Nickel or tin plating supports reliable jointing, while the flexible copper-foil construction resists fatigue where rigid bars would crack under automotive shock and vibration.',
      'Every EV battery busbar is manufactured to your drawing, letting you optimise weight, bend profile, and terminal layout for tightly packaged battery and inverter enclosures — without compromising current capacity or joint reliability.',
    ],
    points: [
      'Module, pack, traction-inverter & DC-charger links',
      'High current density in minimal volume',
      'Supplied to an EV fast-charging technology company',
      'Fatigue-resistant under automotive vibration',
    ],
  },
  {
    id: 'rail',
    tag: 'Rail Traction',
    short: 'Railway Traction',
    h2: 'Flexible Busbars for Railway Traction & Auxiliary Converters',
    body: [
      'Railway traction and auxiliary converters run under some of the harshest electrical and mechanical duty in the industry: high currents, constant vibration, shock, and wide thermal swings. Our flexible laminated busbars provide durable, low-resistance connections inside traction converters, auxiliary power units, and DC-link assemblies.',
      'We supply a leading Indian rail traction OEM with flexible copper busbars built to withstand this environment. Diffusion-welded foil construction — with no filler and no brazed joints — eliminates the weak points that fail under sustained vibration, delivering the long service life rolling-stock programmes require.',
      'Each busbar is manufactured to your converter drawing with the plating and insulation system your specification calls for, backed by ISO 9001:2015 quality control and full traceability for rail supply-chain requirements.',
    ],
    points: [
      'Traction & auxiliary converter interconnects',
      'Supplied to a leading Indian rail traction OEM',
      'Diffusion-welded — no filler, no brazed weak points',
      'ISO 9001:2015 quality with traceability',
    ],
  },
  {
    id: 'ups',
    tag: 'Critical Power',
    short: 'UPS & Data Center',
    h2: 'Flexible Copper Busbars for UPS and Data-Center Power Systems',
    body: [
      'Uninterruptible power supplies and data-center power distribution demand connections that stay cool and reliable under continuous, non-stop load. Our flexible copper busbars link rectifier and inverter stages, battery strings, static bypass, and output distribution with low, stable contact resistance that minimises heat rise and energy loss.',
      'In the high-availability world of critical power, every watt of joint loss becomes waste heat the cooling system must remove. Diffusion-welded laminated construction delivers consistent low-resistance joints that hold up over years of uninterrupted operation, while the flexible profile absorbs thermal expansion in densely packed cabinets and busduct.',
      'We build each flexible busbar to your UPS or PDU drawing, with plating and insulation selected for the current density, creepage, and serviceability your platform requires — supporting both single units and pan-India rollout of data-center power infrastructure.',
    ],
    points: [
      'Rectifier, inverter, battery & bypass links',
      'Low joint loss reduces cooling load',
      'Stable under continuous 24/7 duty',
      'For UPS, PDU and busduct assemblies',
    ],
  },
  {
    id: 'switchgear',
    tag: 'Switchgear & Panels',
    short: 'Switchgear & Panels',
    h2: 'Flexible Connectors for Switchgear, Panel Builders & Busduct',
    body: [
      'Panel builders, switchgear manufacturers, and busduct producers use our flexible connectors to join rigid busbars where thermal expansion, vibration, and installation tolerances would otherwise stress a bolted rigid joint. The result is faster assembly and a joint that stays tight over the equipment’s service life.',
      'Our flexible laminated busbars and laminated shunts act as expansion links and flexible connectors for switchgear between rigid bars, transformers, breakers, and busway sections. Diffusion-welded copper foil provides high current capacity with the compliance to absorb movement — without the resistance drift of braided or bolted alternatives.',
      'Every flexible connector is manufactured to your drawing with tin, nickel, or silver plating and your choice of PVC, heat-shrink, or epoxy insulation, so it drops straight into your panel or busduct design with transparent, LME-linked pricing.',
    ],
    points: [
      'Expansion links between rigid busbars',
      'Faster assembly, joints that stay tight',
      'For switchgear, panels, transformers & busduct',
      'Built to drawing with LME-linked pricing',
    ],
    href: '/products/flexible-busbars/switchgear',
  },
  {
    id: 'welding',
    tag: 'Welding Machines',
    short: 'Resistance Welding',
    h2: 'Laminated Shunts & Flexible Busbars for Resistance Welding Machines',
    body: [
      'Resistance welding machines and inverter power sources carry very high secondary currents across moving arms and transformer secondaries, where flexibility and fatigue life are as important as conductivity. Our laminated shunts and flexible busbars provide the compliant, high-current links these machines depend on.',
      'Built from 99.9% pure electrolytic copper foils and joined by solid-state diffusion welding, our laminated shunts flex millions of cycles without the fatigue cracking that ends the life of lesser connectors. This is core SVS Schweisstechnik heritage — the same flexible-conductor technology proven in welding equipment for decades.',
      'We manufacture each laminated shunt and welding busbar to your machine drawing, matching the current rating, flex geometry, and terminal pattern your welding transformers, arms, and power sources require.',
    ],
    points: [
      'Secondary links, arms & transformer connections',
      'Millions of flex cycles without fatigue cracking',
      'Core SVS Schweisstechnik welding heritage',
      'Built to your machine drawing',
    ],
    href: '/products/welding-systems-lamella-shunts',
  },
];

const credibility = [
  {
    title: '99.9% Electrolytic Copper Foils',
    description:
      'Built from high-purity electrolytic copper foils, 0.1–1.0 mm thick, for maximum conductivity and predictable current rating.',
  },
  {
    title: 'Solid-State Diffusion Welding',
    description:
      'Foils are joined by solid-state diffusion welding — no filler, no brazing. There are no weak brazed joints to fail under vibration or thermal cycling.',
  },
  {
    title: 'Low Contact Resistance',
    description:
      'Diffusion-welded terminals deliver low, stable contact resistance — less heat rise, lower I²R loss, and safer derating in sealed cabinets.',
  },
  {
    title: 'Vibration & Thermal-Cycle Tolerance',
    description:
      'The flexible laminated structure absorbs vibration, shock, and thermal expansion, giving long fatigue life in traction, EV, and inverter duty.',
  },
  {
    title: 'Plating & Insulation Options',
    description:
      'Tin, nickel, or silver plating and PVC, heat-shrink, or epoxy insulation — specified to meet your creepage, clearance, and jointing requirements.',
  },
  {
    title: 'Built to Customer Drawing',
    description:
      'Every flexible busbar is manufactured to your drawing — current rating, bend profile, terminal pattern, and finish — with LME-linked transparent pricing.',
  },
];

const trustSignals = [
  'ISO 9001:2015 certified',
  'Subsidiary of SVS Schweisstechnik GmbH, Germany',
  'Tier-1 rail & EV OEM customers',
  'Peenya, Bangalore — pan-India delivery',
  'Export capability',
  'LME-linked transparent pricing',
];

const comparison = [
  {
    feature: 'Contact resistance over time',
    laminated: 'Low and stable (diffusion-welded terminals)',
    braided: 'Can drift as strands oxidise and loosen',
  },
  {
    feature: 'Current density / footprint',
    laminated: 'High — foils pack more copper per volume',
    braided: 'Lower — round strands leave air gaps',
  },
  {
    feature: 'Fatigue life under vibration',
    laminated: 'High — engineered flex, no brazed joints',
    braided: 'Strand breakage and fraying over time',
  },
  {
    feature: 'Joint construction',
    laminated: 'Solid-state diffusion weld — no filler',
    braided: 'Crimped or soldered — potential weak point',
  },
];

const faqs = [
  {
    q: 'What is a laminated flexible busbar?',
    a: 'A laminated flexible busbar is an electrical conductor built from multiple thin copper foils stacked and joined together, with solid terminal ends for bolting. The stacked foils carry the high current of solid copper while the layered structure flexes to absorb thermal expansion, vibration, and installation misalignment. SVS Maverick joins the foils by solid-state diffusion welding — no filler and no brazing — so there are no weak joints to fail in service.',
  },
  {
    q: 'Flexible busbar vs braided connector — what is the difference?',
    a: 'Both provide a flexible high-current link, but a laminated flexible busbar uses flat copper foils diffusion-welded at the terminals, while a braided connector uses woven round strands crimped or soldered to lugs. Laminated busbars pack more copper into a given footprint, keep a lower and more stable contact resistance, and resist fatigue better under vibration because there are no individual strands to break or fray. For high-current, high-reliability duty in inverters, EV, and rail, laminated construction is generally preferred.',
  },
  {
    q: 'How are flexible busbars rated for current?',
    a: 'Current rating depends on the copper cross-section (foil thickness × width × number of layers), the plating and insulation, the allowable temperature rise, and the mounting and ambient conditions. Because we build every flexible busbar to your drawing, we size the cross-section to your continuous current and temperature-rise limit rather than forcing your design onto a fixed catalogue part. Share your current, duty cycle, and space envelope and we will propose a cross-section.',
  },
  {
    q: 'What is diffusion welding, and why does it matter?',
    a: 'Diffusion welding is a solid-state joining process that bonds the copper foils together using heat and pressure below the melting point — with no filler metal and no brazing. This produces a homogeneous copper joint with low, stable contact resistance and no brittle brazed layer to crack under vibration or thermal cycling. It is the reason our flexible busbars and laminated shunts survive millions of flex cycles in welding, traction, and inverter applications.',
  },
  {
    q: 'Can you manufacture flexible busbars to our drawing, and what materials and finishes are available?',
    a: 'Yes — SVS Maverick manufactures every flexible laminated busbar to the customer drawing. We use 99.9% pure electrolytic copper foils from 0.1 to 1.0 mm thick, with tin, nickel, or silver plating and PVC, heat-shrink, or epoxy insulation options. We are ISO 9001:2015 certified, based in Peenya, Bangalore, deliver across India, and can export. Pricing is transparent and LME-linked.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function FlexibleBusbarsPage() {
  return (
    <div className="min-h-screen bg-[#F4F3EE]">
      {/* FAQ structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

            {/* Hero / H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D2931] mb-4 sm:mb-6">
              Flexible Laminated Copper Busbars
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#6F7B83] mb-6 max-w-3xl">
              SVS Maverick is an ISO 9001:2015 flexible copper busbar manufacturer in Bangalore,
              India — a subsidiary of SVS Schweisstechnik GmbH, Germany. We build diffusion-welded
              flexible laminated busbars and laminated shunts to your drawing for solar inverters,
              BESS, EV, railway traction, UPS, switchgear, and resistance welding machines.
            </p>

            {/* Trust signals bar */}
            <section className="mb-8 sm:mb-12">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {trustSignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-2 border border-gray-200 bg-white rounded-full px-4 py-2 text-sm text-[#1D2931]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full flex-shrink-0" />
                    {signal}
                  </span>
                ))}
              </div>
            </section>

            {/* Primary CTAs */}
            <section className="mb-10 sm:mb-16 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                Request the Datasheet (PDF)
              </Link>
            </section>

            {/* Applications index (jump links) */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Flexible Busbars by Application
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {segments.map((seg) => (
                  <a
                    key={seg.id}
                    href={`#${seg.id}`}
                    className="border border-gray-200 rounded-lg bg-white p-4 hover:border-[#EF290E] transition-colors group"
                  >
                    <span className="block text-xs text-[#EF290E] font-semibold mb-1 uppercase tracking-wide">
                      {seg.tag}
                    </span>
                    <span className="text-sm font-medium text-[#1D2931] group-hover:text-[#EF290E] transition-colors">
                      {seg.short}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Segment application blocks */}
            {segments.map((seg) => (
              <section
                key={seg.id}
                id={seg.id}
                className="mb-10 sm:mb-16 scroll-mt-24 border-t border-gray-200 pt-8 sm:pt-12"
              >
                <span className="block text-sm text-[#EF290E] font-semibold mb-2 uppercase tracking-wide">
                  {seg.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                  {seg.h2}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="lg:col-span-2">
                    {seg.body.map((para, i) => (
                      <p key={i} className="text-[#6F7B83] mb-4">
                        {para}
                      </p>
                    ))}
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Link
                        href="/contact"
                        className="inline-block bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                      >
                        Request a Quote
                      </Link>
                      {seg.href && (
                        <Link
                          href={seg.href}
                          className="inline-flex items-center text-[#1D2931] font-semibold px-2 py-3 hover:text-[#EF290E] transition-colors"
                        >
                          Learn more &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-4">At a glance</h3>
                    <ul className="space-y-3">
                      {seg.points.map((point, i) => (
                        <li key={i} className="flex items-start text-sm text-[#6F7B83]">
                          <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}

            {/* Technical credibility */}
            <section className="mb-10 sm:mb-16 border-t border-gray-200 pt-8 sm:pt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Why SVS Maverick Diffusion-Welded Busbars
              </h2>
              <p className="text-[#6F7B83] mb-6 max-w-3xl">
                Our flexible laminated busbars are engineered for the current density, reliability,
                and service life that power-electronics OEMs demand — with German engineering
                heritage from parent company SVS Schweisstechnik GmbH.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {credibility.map((item) => (
                  <div key={item.title} className="border border-gray-200 rounded-lg bg-white p-6">
                    <h3 className="text-lg font-semibold text-[#1D2931] mb-2">{item.title}</h3>
                    <p className="text-[#6F7B83] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison: laminated vs braided */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Flexible Laminated Busbar vs Braided Connector
              </h2>
              <div className="border border-gray-200 rounded-lg bg-white overflow-x-auto max-w-full">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-[#1D2931] text-white text-left">
                      <th className="px-6 py-4 font-semibold">Criterion</th>
                      <th className="px-6 py-4 font-semibold">Laminated Flexible Busbar</th>
                      <th className="px-6 py-4 font-semibold">Braided Connector</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F4F3EE]'}>
                        <td className="px-6 py-4 text-[#1D2931] font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-[#1D2931]">{row.laminated}</td>
                        <td className="px-6 py-4 text-[#6F7B83]">{row.braided}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related / internal links */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Related Products & Materials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/products/welding-systems-lamella-shunts"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    Laminated Shunts
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Flexible laminated shunts for welding machines and high-current secondaries.
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
                    High-purity electrolytic copper and copper alloys for electrical applications.
                  </p>
                </Link>
                <Link
                  href="/products/flexible-busbars/ev-battery-pack"
                  className="border border-gray-200 rounded-lg bg-white p-6 hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E]">
                    EV Battery Pack Busbars
                  </h3>
                  <p className="text-[#6F7B83] text-sm">
                    Detailed specifications for EV battery module and pack interconnections.
                  </p>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4 sm:mb-6">
                Flexible Busbar FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="border border-gray-200 rounded-lg bg-white p-6 group"
                  >
                    <summary className="text-lg font-semibold text-[#1D2931] cursor-pointer list-none flex items-start justify-between gap-4">
                      <span>{faq.q}</span>
                      <span className="text-[#EF290E] transition-transform group-open:rotate-45 flex-shrink-0 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="text-[#6F7B83] mt-4">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA / datasheet */}
            <section className="border border-gray-200 rounded-lg bg-white p-6 sm:p-8 lg:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2931] mb-4">
                Get a Flexible Busbar Built to Your Drawing
              </h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Send us your drawing, current rating, and space envelope. Our engineering team will
                propose a diffusion-welded flexible laminated busbar with the plating and insulation
                your application needs — with LME-linked transparent pricing and pan-India delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
                >
                  Request the Datasheet (PDF)
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
