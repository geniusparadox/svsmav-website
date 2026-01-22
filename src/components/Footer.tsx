import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EE] text-[#1D2931] relative overflow-hidden border-t border-gray-200 mt-16 lg:mt-24">
      {/* Decorative curved line - full height background positioned right */}
      <div className="absolute inset-0 flex justify-end items-start overflow-hidden pointer-events-none">
        <svg
          className="h-full w-[75%] lg:w-[65%] text-[#1D2931]/10"
          viewBox="0 0 574 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin meet"
        >
          <path
            d="M574 647L457.424 647C442.621 647 428.341 641.068 417.874 630.556L17.4477 228.403C6.9062 217.816 1 203.475 1 188.533L1 0"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Logo - absolutely positioned inside the curve area */}
      <div className="absolute top-16 lg:top-20 right-4 sm:right-8 lg:right-12 z-20">
        <Link href="/">
          <Image
            src="/logo-v3.png"
            alt="SVS Maverick"
            width={500}
            height={45}
            className="h-9 w-auto invert hue-rotate-180 saturate-[10] brightness-110"
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Top section - Links and Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left side - Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Products Column */}
            <nav>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#1D2931]">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/products" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/materials/copper-materials" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Copper Materials
                  </Link>
                </li>
                <li>
                  <Link href="/materials/refractory-alloys" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Refractory Metals
                  </Link>
                </li>
                <li>
                  <Link href="/products/welding-products" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Welding Products
                  </Link>
                </li>
                <li>
                  <Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Welding Systems
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Resources Column */}
            <nav>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#1D2931]">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Spacer for grid */}
          <div className="lg:col-span-7"></div>
        </div>

        {/* Spacer for larger screens */}
        <div className="hidden lg:block h-20"></div>

        {/* Bottom section */}
        <div className="mt-16 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-xl lg:text-2xl font-bold text-[#1D2931] hover:text-[#EF290E] transition-colors">
              SVS Maverick Private Limited
            </Link>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <address className="not-italic text-[#6F7B83] leading-relaxed">
                No 40/A, Site No 193/3,<br />
                Narayanapura Main Road,<br />
                Peenya Industrial Area,<br />
                Bangalore - 560058, Karnataka, INDIA
              </address>
              <div className="text-[#6F7B83] leading-relaxed">
                <a href="tel:+917204057172" className="block hover:text-[#1D2931] transition-colors">
                  +91 72040 57172
                </a>
                <a href="mailto:sales@svsmav.com" className="block hover:text-[#1D2931] transition-colors">
                  sales@svsmav.com
                </a>
                <p className="mt-4 text-sm">
                  GSTIN: 29ABGCS3119N1ZV<br />
                  CIN: U27205KA2021PTC148812
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 lg:justify-end">
            <Link href="/legal" className="text-sm font-bold uppercase tracking-wider text-[#6F7B83] hover:text-[#1D2931] transition-colors">
              Legal Notices
            </Link>
            <Link href="/privacy" className="text-sm font-bold uppercase tracking-wider text-[#6F7B83] hover:text-[#1D2931] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-bold uppercase tracking-wider text-[#6F7B83] hover:text-[#1D2931] transition-colors">
              General Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
