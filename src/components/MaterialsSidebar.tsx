'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, createContext, useContext, useEffect } from 'react';

interface SidebarItem {
  label: string;
  href?: string;
  children?: SidebarItem[];
}

// Context to manage accordion state at each level
interface AccordionContextType {
  openItem: string | null;
  setOpenItem: (item: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const sidebarData: SidebarItem[] = [
  {
    label: 'Semi-Finished Parts',
    children: [
      {
        label: 'Copper Materials',
        children: [
          { label: 'Overview', href: '/materials/copper-materials' },
          { label: 'WIRBALIT HF/N/G (CuCr1Zr)', href: '/materials/copper-materials/cucr1zr' },
          { label: 'WIRBALIT B (CuCo2Be)', href: '/materials/copper-materials/cuco2be' },
          { label: 'WIRBALIT D (CuNi2.5SiCr)', href: '/materials/copper-materials/cuni2-5sicr' },
          { label: 'WIRBALIT CA (CuAl2O3)', href: '/materials/copper-materials/cual2o3' },
          { label: 'Material Properties', href: '/materials/copper-materials/technical-properties' },
        ],
      },
      {
        label: 'Refractory Alloys',
        children: [
          { label: 'Overview', href: '/materials/refractory-alloys' },
          { label: 'Tungsten (W)', href: '/materials/refractory-alloys/tungsten' },
          { label: 'Tungsten-Copper (WCu)', href: '/materials/refractory-alloys/tungsten-copper' },
          { label: 'Tungsten Heavy Metal', href: '/materials/refractory-alloys/tungsten-heavy-metal' },
          { label: 'Molybdenum (Mo)', href: '/materials/refractory-alloys/molybdenum' },
          { label: 'TZM', href: '/materials/refractory-alloys/tzm' },
          { label: 'Tantalum (Ta)', href: '/materials/refractory-alloys/tantalum' },
        ],
      },
    ],
  },
  {
    label: 'Welding Products',
    children: [
      {
        label: 'Spot Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/spot-welding' },
          { label: 'Electrode Caps', href: '/products/spot-welding-electrode-caps' },
          { label: 'Electrodes', href: '/products/spot-welding-electrodes' },
          { label: 'Shanks & Holders', href: '/products/spot-welding-electrode-shanks-and-holders' },
          { label: 'Electrode Arms', href: '/products/spot-welding-electrode-arms' },
        ],
      },
      {
        label: 'Projection Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/projection-welding' },
          { label: 'Replaceable Electrodes', href: '/products/projection-welding-replaceable-electrodes' },
          { label: 'Centering Pins', href: '/products/projection-welding-centering-and-positioning-pins' },
        ],
      },
      {
        label: 'MIG/MAG Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/mig-mag-welding' },
          { label: 'Contact Tips', href: '/products/mig-mag-welding-contact-tips' },
          { label: 'Gas Nozzles', href: '/products/mig-mag-welding-gas-nozzles' },
          { label: 'Nozzle Holders', href: '/products/mig-mag-welding-nozzle-holders' },
        ],
      },
      {
        label: 'TIG Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/tig-wig-welding' },
          { label: 'Electrodes', href: '/products/tig-wig-welding-electrodes' },
        ],
      },
      {
        label: 'Seam Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/seam-welding' },
          { label: 'Welding Wheels', href: '/products/welding-wheels' },
        ],
      },
      {
        label: 'Mesh Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/mesh-welding' },
          { label: 'Electrodes', href: '/products/mesh-welding-electrodes' },
          { label: 'Electrode Holders', href: '/products/mesh-welding-electrode-holders' },
        ],
      },
      {
        label: 'Other',
        children: [
          { label: 'Submerged Arc Welding', href: '/products/welding-technique/submerged-arc-welding' },
          { label: 'Micro Welding', href: '/products/welding-technique/micro-welding' },
          { label: 'Laser Welding', href: '/products/welding-technique/laser-welding' },
        ],
      },
    ],
  },
  {
    label: 'Welding Systems',
    children: [
      { label: 'Tip Dressing Units', href: '/tip-dressing-units' },
      { label: 'Connection Cables', href: '/products/welding-systems-connection-cables' },
      { label: 'Lamella Shunts', href: '/products/welding-systems-lamella-shunts' },
    ],
  },
  {
    label: 'Flexible Busbars',
    children: [
      { label: 'Overview', href: '/products/flexible-busbars' },
      { label: 'Solar Inverters (1500V DC)', href: '/products/flexible-busbars#solar' },
      { label: 'BESS & PCS Cabinets', href: '/products/flexible-busbars#bess' },
      { label: 'EV & Traction', href: '/products/flexible-busbars/ev-battery-pack' },
      { label: 'Railway Traction', href: '/products/flexible-busbars#rail' },
      { label: 'UPS & Data Center', href: '/products/flexible-busbars#ups' },
      { label: 'Switchgear & Panels', href: '/products/flexible-busbars/switchgear' },
      { label: 'Resistance Welding', href: '/products/flexible-busbars#welding' },
    ],
  },
];

// Check if any child matches the current path
function checkPathMatch(children: SidebarItem[] | undefined, pathname: string): boolean {
  if (!children) return false;
  return children.some(child =>
    child.href === pathname || checkPathMatch(child.children, pathname)
  );
}

function SidebarSection({ item, level = 0, itemKey }: { item: SidebarItem; level?: number; itemKey: string }) {
  const pathname = usePathname();
  const accordionContext = useContext(AccordionContext);

  const hasActiveChild = checkPathMatch(item.children, pathname);
  const isOpen = accordionContext
    ? accordionContext.openItem === itemKey
    : hasActiveChild;

  const isActive = item.href === pathname;
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    if (accordionContext) {
      accordionContext.setOpenItem(isOpen ? null : itemKey);
    }
  };

  if (item.href && !hasChildren) {
    return (
      <li className={`${level > 1 ? 'border-l border-gray-300 pl-3 ml-1' : ''}`}>
        <Link
          href={item.href}
          className={`flex items-center justify-between py-2 text-sm transition-colors ${
            isActive
              ? 'text-[#1D2931] font-medium'
              : 'text-[#6F7B83] hover:text-[#1D2931]'
          }`}
        >
          <span className="flex items-center">
            {isActive && (
              <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2 flex-shrink-0" />
            )}
            {item.label}
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 text-left transition-colors ${
          level === 0
            ? 'font-semibold text-[#1D2931]'
            : 'text-[#1D2931] font-medium text-sm'
        }`}
      >
        <span>{item.label}</span>
        <svg
          className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''} ${
            isOpen ? 'text-[#EF290E]' : 'text-[#6F7B83]'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && hasChildren && (
        <SidebarAccordionGroup items={item.children!} level={level + 1} parentKey={itemKey} />
      )}
    </li>
  );
}

function SidebarAccordionGroup({ items, level, parentKey }: { items: SidebarItem[]; level: number; parentKey: string }) {
  const pathname = usePathname();

  const defaultOpen = items.findIndex(item => checkPathMatch(item.children, pathname));
  const [openItem, setOpenItem] = useState<string | null>(
    defaultOpen >= 0 ? `${parentKey}-${defaultOpen}` : null
  );

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <ul className={`${level === 1 ? 'mt-2' : 'mt-1'} space-y-1`}>
        {items.map((child, index) => (
          <SidebarSection
            key={index}
            item={child}
            level={level}
            itemKey={`${parentKey}-${index}`}
          />
        ))}
      </ul>
    </AccordionContext.Provider>
  );
}

export default function MaterialsSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const defaultOpen = sidebarData.findIndex(item => checkPathMatch(item.children, pathname));
  const [openItem, setOpenItem] = useState<string | null>(
    defaultOpen >= 0 ? `root-${defaultOpen}` : null
  );

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const sidebarContent = (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <ul className="space-y-4">
        {sidebarData.map((item, index) => (
          <SidebarSection key={index} item={item} itemKey={`root-${index}`} />
        ))}
      </ul>
    </AccordionContext.Provider>
  );

  return (
    <>
      {/* Mobile Menu Button - Fixed at bottom */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-4 right-4 z-40 bg-[#EF290E] text-white p-3 rounded-full shadow-lg hover:bg-[#d42410] transition-colors"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Full-Screen Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#F4F3EE]">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-bold text-[#1D2931]">Menu</span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-[#6F7B83] hover:text-[#1D2931]"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {sidebarContent}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors w-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden lg:block w-72 flex-shrink-0 bg-[#F4F3EE]">
        <nav className="sticky top-20 p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {sidebarContent}

          <Link
            href="/contact"
            className="mt-8 flex items-center justify-center gap-2 bg-[#EF290E] text-white px-4 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors text-sm"
          >
            ASK OUR EXPERTS
          </Link>
        </nav>
      </aside>
    </>
  );
}
