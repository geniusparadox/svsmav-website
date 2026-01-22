'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, createContext, useContext } from 'react';

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
          { label: 'WIRBALIT® HF/N/G (CuCr1Zr)', href: '/materials/copper-materials/cucr1zr' },
          { label: 'WIRBALIT® B (CuCo2Be)', href: '/materials/copper-materials/cuco2be' },
          { label: 'WIRBALIT® D (CuNi2.5SiCr)', href: '/materials/copper-materials/cuni2-5sicr' },
          { label: 'WIRBALIT® CA (CuAl2O3)', href: '/materials/copper-materials/cual2o3' },
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
        label: 'Submerged Arc Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/submerged-arc-welding' },
          { label: 'Contact Tips', href: '/products/submerged-arc-welding-contact-tips' },
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
        label: 'Projection Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/projection-welding' },
          { label: 'Replaceable Electrodes', href: '/products/projection-welding-replaceable-electrodes' },
          { label: 'Centering & Positioning Pins', href: '/products/projection-welding-centering-and-positioning-pins' },
        ],
      },
      {
        label: 'Spot Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/spot-welding' },
          { label: 'Electrode Caps', href: '/products/spot-welding-electrode-caps' },
          { label: 'Electrodes', href: '/products/spot-welding-electrodes' },
          { label: 'Electrode Shanks & Holders', href: '/products/spot-welding-electrode-shanks-and-holders' },
          { label: 'Electrode Arms', href: '/products/spot-welding-electrode-arms' },
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
        label: 'Micro Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/micro-welding' },
          { label: 'Electrodes', href: '/products/micro-welding-electrodes' },
        ],
      },
      {
        label: 'Laser Welding',
        children: [
          { label: 'Overview', href: '/products/welding-technique/laser-welding' },
          { label: 'Protection Windows', href: '/products/laser-protection-windows' },
        ],
      },
    ],
  },
  {
    label: 'Welding Systems',
    children: [
      {
        label: 'Tip Dressing Units',
        children: [
          { label: 'Overview', href: '/tip-dressing-units' },
          { label: 'Electrode Tip Dresser', href: '/tip-dressing-units/electrode-cap-dressing-unit' },
          { label: 'Electrode Cap Changer', href: '/tip-dressing-units/cap-changer' },
          { label: 'Combi Dresser-Changer', href: '/tip-dressing-units/combi-dresser' },
          { label: 'Milling Tools', href: '/tip-dressing-units/dressing-tools' },
        ],
      },
      {
        label: 'Welding Accessories',
        children: [
          { label: 'Connection Cables', href: '/products/welding-systems-connection-cables' },
          { label: 'Lamella Shunts', href: '/products/welding-systems-lamella-shunts' },
        ],
      },
    ],
  },
  {
    label: 'Flexible Busbars',
    children: [
      { label: 'Overview', href: '/products/flexible-busbars' },
      { label: 'Switchgear & Transformers', href: '/products/flexible-busbars/switchgear' },
      { label: 'EV Battery Packs', href: '/products/flexible-busbars/ev-battery-pack' },
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

  // Determine if this section should be open
  // Only use hasActiveChild as default when no explicit selection has been made
  const hasActiveChild = checkPathMatch(item.children, pathname);
  const isOpen = accordionContext
    ? accordionContext.openItem === itemKey
    : hasActiveChild;

  const isActive = item.href === pathname;
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    if (accordionContext) {
      // Toggle: if already open, close it; otherwise open it (and close others)
      accordionContext.setOpenItem(isOpen ? null : itemKey);
    }
  };

  if (item.href && !hasChildren) {
    // Leaf node with link
    return (
      <li className={`${level > 1 ? 'border-l border-gray-300 pl-4 ml-1' : ''}`}>
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
              <span className="w-2 h-2 bg-[#EF290E] rounded-full mr-2" />
            )}
            {item.label}
          </span>
          <svg
            className="w-3 h-3 text-[#EF290E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </Link>
      </li>
    );
  }

  // Section with children - wrap in its own accordion context for nested items
  return (
    <li>
      <button
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 text-left transition-colors ${
          level === 0
            ? 'font-semibold text-[#1D2931]'
            : 'text-[#1D2931] font-medium'
        }`}
      >
        <span>{item.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${
            isOpen ? 'text-[#EF290E]' : 'text-[#6F7B83]'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && hasChildren && (
        <SidebarAccordionGroup items={item.children!} level={level + 1} parentKey={itemKey} />
      )}
    </li>
  );
}

// Component that provides accordion context for a group of items
function SidebarAccordionGroup({ items, level, parentKey }: { items: SidebarItem[]; level: number; parentKey: string }) {
  const pathname = usePathname();

  // Find which item should be open by default (if any has active children)
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

  // Find which top-level item should be open by default
  const defaultOpen = sidebarData.findIndex(item => checkPathMatch(item.children, pathname));
  const [openItem, setOpenItem] = useState<string | null>(
    defaultOpen >= 0 ? `root-${defaultOpen}` : null
  );

  return (
    <aside className="w-80 flex-shrink-0 bg-[#F4F3EE] min-h-screen">
      <nav className="sticky top-20 p-6">
        <AccordionContext.Provider value={{ openItem, setOpenItem }}>
          <ul className="space-y-4">
            {sidebarData.map((item, index) => (
              <SidebarSection key={index} item={item} itemKey={`root-${index}`} />
            ))}
          </ul>
        </AccordionContext.Provider>

        {/* Ask Our Experts Button */}
        <Link
          href="/contact"
          className="mt-8 flex items-center justify-center gap-2 bg-[#EF290E] text-white px-6 py-4 rounded font-semibold hover:bg-[#d42410] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          ASK OUR EXPERTS
        </Link>
      </nav>
    </aside>
  );
}
