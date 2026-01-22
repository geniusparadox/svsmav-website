'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProductsMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setProductsMenuOpen(false);
    }, 150); // 150ms delay before closing
  }, []);

  const handleLinkClick = useCallback(() => {
    setProductsMenuOpen(false);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#F4F3EE] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - applies filter when on white background to preserve red */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-v3.png"
              alt="SVS Maverick"
              width={280}
              height={45}
              className="h-9 w-auto invert hue-rotate-180 saturate-[10] brightness-110"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors py-7 ${
                  productsMenuOpen
                    ? 'text-[#EF290E]'
                    : 'text-[#1D2931] hover:text-[#EF290E]'
                }`}
              >
                <span>PRODUCTS</span>
                <svg
                  className={`w-4 h-4 transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Red underline when active */}
              {productsMenuOpen && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EF290E]" />
              )}

              {/* Invisible bridge to connect button to dropdown */}
              {productsMenuOpen && (
                <div className="absolute top-full left-0 right-0 h-2" />
              )}
            </div>

            <Link
              href="/about"
              className="font-medium transition-colors text-[#1D2931] hover:text-[#EF290E]"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="font-medium transition-colors text-[#1D2931] hover:text-[#EF290E]"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1D2931]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {productsMenuOpen && (
        <div
          className="hidden lg:block absolute top-20 left-0 right-0 bg-[#F4F3EE] border-t border-gray-200 shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Products Overview Link */}
            <Link
              href="/products"
              className="inline-flex items-center text-xl font-bold text-[#1D2931] hover:text-[#EF290E] mb-8 group"
              onClick={handleLinkClick}
            >
              PRODUCTS OVERVIEW
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            <div className="grid grid-cols-4 gap-8">
              {/* Column 1: Materials */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">MATERIALS</h3>

                {/* Copper Alloys */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#1D2931] mb-2">COPPER ALLOYS</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/materials/copper-materials" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/copper-materials/cucr1zr" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        WIRBALIT® HF/N/G (CuCr1Zr)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/copper-materials/cuco2be" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        WIRBALIT® B (CuCo2Be)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/copper-materials/cuni2-5sicr" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        WIRBALIT® D (CuNi2.5SiCr)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/copper-materials/cual2o3" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        WIRBALIT® CA (CuAl2O3)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/copper-materials/technical-properties" className="text-[#EF290E] hover:text-[#d42410] transition-colors text-sm inline-flex items-center" onClick={handleLinkClick}>
                        Material Properties
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Refractory Metals */}
                <div>
                  <h4 className="text-sm font-bold text-[#1D2931] mb-2">REFRACTORY METALS</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/materials/refractory-alloys" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/refractory-alloys/tungsten" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Tungsten (W)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/refractory-alloys/tungsten-copper" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Tungsten-Copper (WCu)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/refractory-alloys/tungsten-heavy-metal" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Tungsten Heavy Metal (WNiFe, WNiCu)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/refractory-alloys/molybdenum" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        Molybdenum (Mo)
                      </Link>
                    </li>
                    <li>
                      <Link href="/materials/refractory-alloys/tzm" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                        TZM
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 2: Welding Products */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">WELDING PRODUCTS</h3>

                <h4 className="text-sm font-bold text-[#1D2931] mb-2">WELDING TECHNIQUE</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/welding-technique/submerged-arc-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Submerged Arc Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/mig-mag-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      MIG/MAG Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/tig-wig-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      TIG Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/projection-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Projection Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/spot-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Spot Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/seam-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Seam Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/mesh-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Mesh Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/micro-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Micro Welding
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/welding-technique/laser-welding" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Laser Welding
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Welding Systems & Flexible Busbars */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">WELDING SYSTEMS</h3>

                <ul className="space-y-2">
                  <li>
                    <Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/electrode-cap-dressing-unit" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Electrode Tip Dresser
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/cap-changer" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Electrode Cap Changer
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/combi-dresser" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Combi Dresser-Changer
                    </Link>
                  </li>
                  <li>
                    <Link href="/tip-dressing-units/dressing-tools" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Milling Tools
                    </Link>
                  </li>
                </ul>

                <h3 className="text-lg font-bold text-[#1D2931] mb-4 mt-6">FLEXIBLE BUSBARS</h3>

                <ul className="space-y-2">
                  <li>
                    <Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/flexible-busbars/switchgear" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      Switchgear & Transformers
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/flexible-busbars/ev-battery-pack" className="text-[#6F7B83] hover:text-[#1D2931] transition-colors text-sm" onClick={handleLinkClick}>
                      EV Battery Packs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Expert Contact */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl text-[#1D2931] mb-1">
                  Speak with <span className="font-bold">our experts</span>
                </h3>
                <p className="text-[#6F7B83] text-sm mb-4">
                  Whether you have questions about our product catalog or interest in custom solutions. We respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors text-sm"
                  onClick={handleLinkClick}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F3EE] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <nav className="space-y-6">
              {/* Products Section */}
              <div>
                <Link
                  href="/products"
                  className="block text-lg font-bold text-[#1D2931] mb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PRODUCTS OVERVIEW
                </Link>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-sm font-bold text-[#1D2931] mb-2">MATERIALS</h3>
                <div className="pl-4 space-y-2">
                  <h4 className="text-xs font-bold text-[#6F7B83] uppercase">Copper Alloys</h4>
                  <Link href="/materials/copper-materials" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link href="/materials/copper-materials/cucr1zr" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    WIRBALIT® HF/N/G (CuCr1Zr)
                  </Link>
                  <Link href="/materials/copper-materials/cuco2be" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    WIRBALIT® B (CuCo2Be)
                  </Link>
                  <Link href="/materials/copper-materials/cuni2-5sicr" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    WIRBALIT® D (CuNi2.5SiCr)
                  </Link>
                  <Link href="/materials/copper-materials/cual2o3" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    WIRBALIT® CA (CuAl2O3)
                  </Link>
                  <Link href="/materials/copper-materials/technical-properties" className="block text-[#EF290E] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Material Properties
                  </Link>
                </div>
                <div className="pl-4 space-y-2 mt-4">
                  <h4 className="text-xs font-bold text-[#6F7B83] uppercase">Refractory Metals</h4>
                  <Link href="/materials/refractory-alloys" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link href="/materials/refractory-alloys/tungsten" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Tungsten (W)
                  </Link>
                  <Link href="/materials/refractory-alloys/tungsten-copper" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Tungsten-Copper (WCu)
                  </Link>
                  <Link href="/materials/refractory-alloys/molybdenum" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Molybdenum (Mo)
                  </Link>
                </div>
              </div>

              {/* Welding Products */}
              <div>
                <h3 className="text-sm font-bold text-[#1D2931] mb-2">WELDING PRODUCTS</h3>
                <div className="pl-4 space-y-2">
                  <Link href="/products/welding-technique/spot-welding" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Spot Welding
                  </Link>
                  <Link href="/products/welding-technique/mig-mag-welding" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    MIG/MAG Welding
                  </Link>
                  <Link href="/products/welding-technique/tig-wig-welding" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    TIG Welding
                  </Link>
                  <Link href="/products/welding-technique/projection-welding" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Projection Welding
                  </Link>
                  <Link href="/products/welding-technique/seam-welding" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Seam Welding
                  </Link>
                </div>
              </div>

              {/* Welding Systems */}
              <div>
                <h3 className="text-sm font-bold text-[#1D2931] mb-2">WELDING SYSTEMS</h3>
                <div className="pl-4 space-y-2">
                  <Link href="/tip-dressing-units" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link href="/tip-dressing-units/electrode-cap-dressing-unit" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Electrode Tip Dresser
                  </Link>
                  <Link href="/tip-dressing-units/cap-changer" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Electrode Cap Changer
                  </Link>
                  <Link href="/tip-dressing-units/combi-dresser" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Combi Dresser-Changer
                  </Link>
                </div>
              </div>

              {/* Flexible Busbars */}
              <div>
                <h3 className="text-sm font-bold text-[#1D2931] mb-2">FLEXIBLE BUSBARS</h3>
                <div className="pl-4 space-y-2">
                  <Link href="/products/flexible-busbars" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Overview
                  </Link>
                  <Link href="/products/flexible-busbars/switchgear" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    Switchgear & Transformers
                  </Link>
                  <Link href="/products/flexible-busbars/ev-battery-pack" className="block text-[#6F7B83] text-sm" onClick={() => setMobileMenuOpen(false)}>
                    EV Battery Packs
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <Link href="/about" className="block font-medium text-[#1D2931]" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT US
                </Link>
                <Link href="/contact" className="block font-medium text-[#1D2931]" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT US
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
