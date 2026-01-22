import Link from 'next/link';
import MaterialsSidebar from '@/components/MaterialsSidebar';

export const metadata = {
  title: 'Dressing Tools & Cutters | SVS Maverick',
  description: 'High-quality milling tools, dressing cutters, and blades for electrode tip maintenance in resistance welding applications.',
};

const productCategories = [
  {
    name: 'Milling Cutters',
    description: 'Precision milling cutters for automatic and semi-automatic tip dressers. Available in HSS and carbide for extended tool life.',
    products: [
      { name: 'Standard Flat Face Cutter', spec: 'For flat-faced electrode caps' },
      { name: 'Radius Cutter', spec: 'For radius-tipped electrodes' },
      { name: 'Pointed Cutter', spec: 'For pointed/dome electrode profiles' },
      { name: 'Combination Cutter', spec: 'Multiple profiles in one tool' },
    ],
    materials: ['High-Speed Steel (HSS)', 'Tungsten Carbide', 'Coated Carbide'],
  },
  {
    name: 'Dressing Blades',
    description: 'Replaceable cutting blades for modular dressing systems. Quick-change design minimizes downtime.',
    products: [
      { name: 'Single-Edge Blade', spec: 'Standard replacement blade' },
      { name: 'Double-Edge Blade', spec: 'Reversible for extended life' },
      { name: 'Indexable Insert', spec: 'Multi-edge carbide insert' },
      { name: 'Form Blade', spec: 'Custom profile blades' },
    ],
    materials: ['HSS', 'Carbide', 'Ceramic-Coated'],
  },
  {
    name: 'Manual Dressing Tools',
    description: 'Hand tools for manual electrode tip maintenance and touch-up operations.',
    products: [
      { name: 'Hand File Set', spec: 'For manual tip shaping' },
      { name: 'Rotary Hand Dresser', spec: 'Manual rotary tool' },
      { name: 'Tip Gauge', spec: 'For measuring tip diameter' },
      { name: 'Cleaning Brush', spec: 'For electrode cleaning' },
    ],
    materials: ['Hardened Steel', 'Diamond-Coated', 'Brass'],
  },
];

const cutterProfiles = [
  {
    name: 'Flat Face (ISO Type F)',
    description: 'Standard flat contact face for general spot welding',
    applications: ['Mild steel', 'General automotive', 'Standard applications'],
  },
  {
    name: 'Radius (ISO Type R)',
    description: 'Spherical radius tip for reduced electrode wear',
    applications: ['Coated steels', 'Galvanized steel', 'Aluminum'],
  },
  {
    name: 'Truncated Cone (ISO Type E)',
    description: 'Tapered profile with flat contact face',
    applications: ['High-strength steel', 'Multi-layer stacks', 'AHSS'],
  },
  {
    name: 'Dome (ISO Type D)',
    description: 'Rounded dome shape for specific applications',
    applications: ['Projection welding', 'Special applications', 'Aluminum'],
  },
];

const technicalSpecs = [
  { label: 'Cutter Diameter Range', value: '20 - 50 mm' },
  { label: 'Electrode Cap Range', value: '12 - 25 mm' },
  { label: 'Material Options', value: 'HSS / Carbide / Coated' },
  { label: 'Standard Profiles', value: 'F, R, E, D (ISO)' },
  { label: 'Typical Tool Life (HSS)', value: '5,000 - 15,000 dresses' },
  { label: 'Typical Tool Life (Carbide)', value: '25,000 - 50,000 dresses' },
  { label: 'Surface Finish Achieved', value: 'Ra < 1.6 um' },
  { label: 'Concentricity', value: '< 0.02 mm' },
];

const toolLifeFactors = [
  {
    title: 'Electrode Material',
    description: 'Harder electrode alloys like CuCrZr reduce tool life compared to pure copper.',
  },
  {
    title: 'Dressing Frequency',
    description: 'More frequent, lighter dressing extends tool life vs. heavy infrequent cuts.',
  },
  {
    title: 'Cutting Speed',
    description: 'Optimal RPM settings vary by cutter material and electrode alloy.',
  },
  {
    title: 'Coolant/Lubrication',
    description: 'Dry cutting is standard; some applications benefit from air blow cooling.',
  },
];

const whyToolQualityMatters = [
  'Consistent electrode geometry after each dress',
  'Smooth surface finish for optimal current flow',
  'Extended tool life reduces replacement frequency',
  'Precise concentricity prevents uneven wear',
  'Proper chip formation and evacuation',
  'Reduced heat generation during cutting',
  'Compatible with all major dresser brands',
  'German quality manufacturing standards',
];

export default function DressingToolsPage() {
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
              <Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931]">TIP DRESSING UNITS</Link>
              <span className="mx-2 text-[#6F7B83]">&gt;</span>
              <span className="text-[#1D2931] font-medium">DRESSING TOOLS & CUTTERS</span>
            </nav>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1D2931] mb-6">
              Dressing Tools & Cutters
            </h1>
            <p className="text-xl text-[#1D2931] mb-8 max-w-3xl">
              High-quality milling tools, dressing cutters, and blades engineered for precise
              electrode tip restoration. Available in HSS and carbide with standard and custom
              profiles to match your electrode geometry.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/tip-dressing-units/electrode-cap-dressing-unit"
                className="inline-block border border-[#1D2931] text-[#1D2931] px-8 py-3 rounded font-semibold hover:bg-[#1D2931] hover:text-white transition-colors"
              >
                View Dressing Units
              </Link>
            </div>

            {/* Product Description */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Precision Cutting Tools</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#6F7B83] mb-4">
                    The quality of your tip dressing depends directly on the quality of your cutting
                    tools. Our dressing cutters and blades are precision-manufactured to deliver
                    consistent, accurate electrode restoration with every dressing cycle.
                  </p>
                  <p className="text-[#6F7B83] mb-4">
                    We offer a complete range of cutters to match all standard electrode profiles,
                    plus custom tooling for special geometries. Our carbide cutters provide exceptional
                    tool life in high-volume production environments.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white text-center">
                      <div className="text-2xl font-bold text-[#EF290E] mb-1">50,000+</div>
                      <div className="text-sm text-[#6F7B83]">Dresses per Carbide Cutter</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white text-center">
                      <div className="text-2xl font-bold text-[#EF290E] mb-1">Ra &lt;1.6</div>
                      <div className="text-sm text-[#6F7B83]">Surface Finish (um)</div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#1D2931] mb-4">Why Tool Quality Matters</h3>
                  <ul className="space-y-3">
                    {whyToolQualityMatters.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-[#6F7B83]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Product Categories */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Product Categories</h2>
              <p className="text-[#6F7B83] mb-8">
                Complete range of cutting tools for all tip dressing applications
              </p>
              <div className="space-y-6">
                {productCategories.map((category) => (
                  <div key={category.name} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-[#1D2931] mb-3">{category.name}</h3>
                      <p className="text-[#6F7B83] mb-6">{category.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[#1D2931] mb-3">Available Products</h4>
                          <ul className="space-y-2">
                            {category.products.map((product) => (
                              <li key={product.name} className="flex items-start text-sm">
                                <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                <div>
                                  <span className="text-[#1D2931] font-medium">{product.name}</span>
                                  <span className="text-[#6F7B83]"> - {product.spec}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1D2931] mb-3">Material Options</h4>
                          <ul className="space-y-2">
                            {category.materials.map((material) => (
                              <li key={material} className="flex items-center text-sm">
                                <span className="w-2 h-2 bg-[#1D2931] rounded-full mr-2"></span>
                                <span className="text-[#6F7B83]">{material}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cutter Profiles */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Standard Cutter Profiles</h2>
              <p className="text-[#6F7B83] mb-8">
                Cutters available for all ISO standard electrode tip geometries
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cutterProfiles.map((profile) => (
                  <div key={profile.name} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <div className="bg-[#1D2931] p-6 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-[#EF290E] flex items-center justify-center">
                        <span className="text-white font-bold text-xs text-center">{profile.name.split('(')[1]?.replace(')', '') || 'F'}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#1D2931] mb-2">{profile.name}</h3>
                      <p className="text-sm text-[#6F7B83] mb-4">{profile.description}</p>
                      <h4 className="text-xs font-semibold text-[#1D2931] mb-2">APPLICATIONS</h4>
                      <ul className="space-y-1">
                        {profile.applications.map((app) => (
                          <li key={app} className="text-xs text-[#6F7B83] flex items-start">
                            <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1 flex-shrink-0"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border border-gray-200 rounded-lg bg-white p-6 text-center">
                <p className="text-[#1D2931]">
                  <strong>Custom Profiles Available</strong> - We can manufacture cutters for non-standard electrode geometries.
                  <Link href="/contact" className="text-[#EF290E] ml-2 hover:underline">Contact us for details</Link>
                </p>
              </div>
            </section>

            {/* Technical Specifications & Tool Life Factors */}
            <section className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Technical Specifications</h2>
                  <p className="text-[#6F7B83] mb-6">
                    General specifications for our dressing tool range. Custom specifications
                    available upon request.
                  </p>
                  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {technicalSpecs.map((spec, index) => (
                          <tr key={spec.label} className={index % 2 === 0 ? 'bg-[#F4F3EE]' : 'bg-white'}>
                            <td className="px-6 py-4 text-[#6F7B83]">{spec.label}</td>
                            <td className="px-6 py-4 text-[#1D2931] font-semibold text-right">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Tool Life Factors</h2>
                  <p className="text-[#6F7B83] mb-6">
                    Several factors influence the service life of dressing tools:
                  </p>
                  <div className="space-y-4">
                    {toolLifeFactors.map((factor) => (
                      <div key={factor.title} className="border border-gray-200 rounded-lg bg-white p-6">
                        <h3 className="font-bold text-[#1D2931] mb-2">{factor.title}</h3>
                        <p className="text-sm text-[#6F7B83]">{factor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* HSS vs Carbide Comparison */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">HSS vs. Carbide Cutters</h2>
              <p className="text-[#6F7B83] mb-8">
                Choose the right material for your application and budget
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg bg-white p-8">
                  <h3 className="text-2xl font-bold text-[#1D2931] mb-4">High-Speed Steel (HSS)</h3>
                  <p className="text-[#6F7B83] mb-6">
                    Cost-effective solution for low to medium volume production with good performance.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#6F7B83]">Tool Life</span>
                        <span className="text-[#1D2931] font-medium">5,000 - 15,000 dresses</span>
                      </div>
                      <div className="w-full bg-[#F4F3EE] rounded-full h-2">
                        <div className="bg-[#EF290E] h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#6F7B83]">Initial Cost</span>
                        <span className="text-[#1D2931] font-medium">Lower</span>
                      </div>
                      <div className="w-full bg-[#F4F3EE] rounded-full h-2">
                        <div className="bg-[#1D2931] h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#1D2931] mb-2">Best For:</h4>
                  <ul className="space-y-1 text-sm text-[#6F7B83]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#1D2931] rounded-full mr-2 mt-1.5"></span>
                      Low to medium volume production
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#1D2931] rounded-full mr-2 mt-1.5"></span>
                      Budget-conscious applications
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#1D2931] rounded-full mr-2 mt-1.5"></span>
                      Soft electrode materials
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-[#EF290E] rounded-lg bg-white p-8 relative">
                  <div className="absolute -top-3 left-6 bg-[#EF290E] text-white px-3 py-1 text-sm font-bold rounded">
                    RECOMMENDED
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D2931] mb-4">Tungsten Carbide</h3>
                  <p className="text-[#6F7B83] mb-6">
                    Premium solution for high-volume production with exceptional tool life and consistency.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#6F7B83]">Tool Life</span>
                        <span className="text-[#1D2931] font-medium">25,000 - 50,000 dresses</span>
                      </div>
                      <div className="w-full bg-[#F4F3EE] rounded-full h-2">
                        <div className="bg-[#EF290E] h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#6F7B83]">Cost per Dress</span>
                        <span className="text-[#1D2931] font-medium">Lower (long-term)</span>
                      </div>
                      <div className="w-full bg-[#F4F3EE] rounded-full h-2">
                        <div className="bg-[#1D2931] h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#1D2931] mb-2">Best For:</h4>
                  <ul className="space-y-1 text-sm text-[#6F7B83]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                      High-volume automotive production
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                      Hard electrode alloys (CuCrZr)
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#EF290E] rounded-full mr-2 mt-1.5"></span>
                      Minimum tool change requirements
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Products */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/tip-dressing-units/electrode-cap-dressing-unit"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Electrode Cap Dressers
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Complete tip dressing units for all applications</p>
                </Link>
                <Link
                  href="/tip-dressing-units/combi-dresser"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Combi Dresser-Changer
                  </h3>
                  <p className="text-[#6F7B83] text-sm">Combined dressing and cap changing systems</p>
                </Link>
                <Link
                  href="/products/welding-products"
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-[#EF290E] transition-colors group"
                >
                  <h3 className="text-lg font-semibold text-[#1D2931] mb-2 group-hover:text-[#EF290E] transition-colors">
                    Electrode Caps
                  </h3>
                  <p className="text-[#6F7B83] text-sm">High-quality electrode caps for resistance welding</p>
                </Link>
              </div>
            </section>

            {/* CTA */}
            <section className="border border-gray-200 rounded-lg p-8 lg:p-12 text-center bg-white">
              <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Help Selecting the Right Tools?</h2>
              <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
                Our team can help you select the optimal dressing tools for your electrode type,
                production volume, and quality requirements.
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
