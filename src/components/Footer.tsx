import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EE] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content - use flexbox with space-between */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">

          {/* Company Info */}
          <div className="lg:max-w-md">
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-v3.png"
                alt="SVS Maverick"
                width={280}
                height={30}
                className="h-8 w-auto invert hue-rotate-180 saturate-[10] brightness-110"
              />
            </Link>

            {/* Company Name */}
            <h4 className="text-xl font-bold text-[#1D2931] mb-3">
              SVS Maverick Private Limited
            </h4>

            {/* Address */}
            <address className="not-italic text-sm text-[#6F7B83] mb-4 leading-relaxed">
              No 40/A, Site No 193/3, Narayanapura Main Road,<br />
              Peenya Industrial Area, Bangalore - 560058,<br />
              Karnataka, India
            </address>

            {/* Contact */}
            <div className="flex gap-6 text-sm">
              <a href="tel:+917204057172" className="text-[#1D2931] hover:text-[#EF290E] transition-colors">
                +91 72040 57172
              </a>
              <a href="mailto:sales@svsmav.com" className="text-[#1D2931] hover:text-[#EF290E] transition-colors">
                sales@svsmav.com
              </a>
            </div>
          </div>

          {/* Links Section - Products and Resources side by side */}
          <div className="flex gap-16 sm:gap-24 lg:gap-32">
            {/* Products Column */}
            <div>
              <h3 className="text-sm font-bold text-[#1D2931] uppercase tracking-wider mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/materials/copper-materials" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Copper Alloys
                  </Link>
                </li>
                <li>
                  <Link href="/materials/refractory-alloys" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Refractory Metals
                  </Link>
                </li>
                <li>
                  <Link href="/products/welding-technique/spot-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Spot Welding
                  </Link>
                </li>
                <li>
                  <Link href="/products/welding-technique/projection-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Projection Welding
                  </Link>
                </li>
                <li>
                  <Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Welding Systems
                  </Link>
                </li>
                <li>
                  <Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors">
                    Flexible Busbars
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-bold text-[#1D2931] uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-sm">
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <Link href="/legal" className="text-[#6F7B83] hover:text-[#1D2931] uppercase font-medium transition-colors">
                Legal Notices
              </Link>
              <Link href="/privacy" className="text-[#6F7B83] hover:text-[#1D2931] uppercase font-medium transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#6F7B83] hover:text-[#1D2931] uppercase font-medium transition-colors">
                General Conditions
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-[#6F7B83]">
              © {new Date().getFullYear()} SVS Maverick. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
