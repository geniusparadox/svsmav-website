import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Materials | SVS Maverick',
  description: 'High-quality copper alloys and refractory metals for welding applications from SVS Maverick.',
};

export default function MaterialsPage() {
  const materials = [
    {
      title: 'Copper Materials',
      description: 'WIRBALIT® copper alloys offering excellent electrical and thermal conductivity combined with high strength and wear resistance.',
      href: '/materials/copper-materials',
      image: '/images/copper-materials.jpg',
    },
    {
      title: 'Refractory Alloys',
      description: 'High-performance refractory metals including tungsten, molybdenum, and their alloys for extreme temperature applications.',
      href: '/materials/refractory-alloys',
      image: '/images/refractory-alloys.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F3EE]">
      {/* Hero Section */}
      <section className="bg-[#1D2931] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Materials</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            SVS Maverick supplies premium semi-finished parts and custom components from copper alloys and refractory metals for resistance welding applications.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material) => (
              <Link
                key={material.title}
                href={material.href}
                className="group block bg-[#F4F3EE] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-[#1D2931] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl text-white/20">
                      {material.title === 'Copper Materials' ? 'Cu' : 'W'}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#1D2931] mb-4 group-hover:text-[#EF290E] transition-colors">
                    {material.title}
                  </h2>
                  <p className="text-[#6F7B83] mb-4">{material.description}</p>
                  <span className="text-[#EF290E] font-semibold inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4F3EE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1D2931] mb-4">Need Custom Materials?</h2>
          <p className="text-[#6F7B83] mb-8 max-w-2xl mx-auto">
            Our team can help you select the right material for your specific application requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#EF290E] text-white px-8 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
