import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.svsmav.com';

const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/', priority: 0.8, changeFrequency: 'weekly' },
  // Flexible busbar hub
  { path: '/products/flexible-busbars/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/products/flexible-busbars/switchgear/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/flexible-busbars/ev-battery-pack/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/flexible-busbars/laminated-vs-braided/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/flexible-busbars/sizing-guide/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/flexible-busbars/calculator/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/flexible-busbars/faq/', priority: 0.8, changeFrequency: 'monthly' },
  // Products
  { path: '/products/copper-alloys/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/welding-products/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products/portfolio/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/spot-welding-electrodes/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/spot-welding-electrode-caps/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/spot-welding-electrode-arms/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/spot-welding-electrode-shanks-and-holders/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/projection-welding-replaceable-electrodes/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/projection-welding-centering-and-positioning-pins/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/mig-mag-welding-contact-tips/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/mig-mag-welding-gas-nozzles/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/mig-mag-welding-nozzle-holders/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/tig-wig-welding-electrodes/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/submerged-arc-welding-contact-tips/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/micro-welding-electrodes/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/mesh-welding-electrodes/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/mesh-welding-electrode-holders/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-wheels/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-systems-connection-cables/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-systems-lamella-shunts/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/laser-protection-windows/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/milling-equipment/', priority: 0.6, changeFrequency: 'monthly' },
  // Welding techniques
  { path: '/products/welding-technique/spot-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/projection-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/mig-mag-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/tig-wig-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/laser-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/seam-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/micro-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/mesh-welding/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products/welding-technique/submerged-arc-welding/', priority: 0.6, changeFrequency: 'monthly' },
  // Materials
  { path: '/materials/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/cucr1zr/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/cuco2be/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/cual2o3/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/cuag/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/cuni2-5sicr/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/copper-materials/technical-properties/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/tungsten/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/tungsten-copper/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/tungsten-heavy-metal/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/molybdenum/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/tantalum/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/materials/refractory-alloys/tzm/', priority: 0.6, changeFrequency: 'monthly' },
  // Tip dressing
  { path: '/tip-dressing-units/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tip-dressing-units/electrode-cap-dressing-unit/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tip-dressing-units/combi-dresser/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tip-dressing-units/cap-changer/', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tip-dressing-units/dressing-tools/', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
