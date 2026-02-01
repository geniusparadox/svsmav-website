'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

type MobileMenuView = 'main' | 'products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<MobileMenuView>('main');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuView('main');
    setExpandedSection(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F3EE] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-v3.png"
              alt="SVS Maverick"
              width={280}
              height={24}
              className="h-6 sm:h-7 md:h-8 w-auto invert hue-rotate-180 saturate-[10] brightness-110"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors py-7 ${
                  productsMenuOpen ? 'text-[#EF290E]' : 'text-[#1D2931] hover:text-[#EF290E]'
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
              {productsMenuOpen && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EF290E]" />}
            </div>

            <Link href="/about" className="font-medium text-[#1D2931] hover:text-[#EF290E] transition-colors">
              ABOUT US
            </Link>
            <Link href="/contact" className="font-medium text-[#1D2931] hover:text-[#EF290E] transition-colors">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1D2931]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {productsMenuOpen && (
        <div
          className="hidden lg:block absolute top-20 left-0 right-0 bg-[#F4F3EE] border-t border-gray-200 shadow-lg"
          onMouseEnter={() => setProductsMenuOpen(true)}
          onMouseLeave={() => setProductsMenuOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link
              href="/products"
              className="inline-flex items-center text-xl font-bold text-[#1D2931] hover:text-[#EF290E] mb-8 group"
            >
              PRODUCTS OVERVIEW
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            <div className="grid grid-cols-4 gap-8">
              {/* Materials */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">MATERIALS</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#1D2931] mb-2">COPPER ALLOYS</h4>
                  <ul className="space-y-2">
                    <li><Link href="/materials/copper-materials" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Overview</Link></li>
                    <li><Link href="/materials/copper-materials/cucr1zr" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">WIRBALIT® HF/N/G (CuCr1Zr)</Link></li>
                    <li><Link href="/materials/copper-materials/cuco2be" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">WIRBALIT® B (CuCo2Be)</Link></li>
                    <li><Link href="/materials/copper-materials/cuni2-5sicr" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">WIRBALIT® D (CuNi2.5SiCr)</Link></li>
                    <li><Link href="/materials/copper-materials/cual2o3" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">WIRBALIT® CA (CuAl2O3)</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D2931] mb-2">REFRACTORY METALS</h4>
                  <ul className="space-y-2">
                    <li><Link href="/materials/refractory-alloys" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Overview</Link></li>
                    <li><Link href="/materials/refractory-alloys/tungsten" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Tungsten (W)</Link></li>
                    <li><Link href="/materials/refractory-alloys/tungsten-copper" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Tungsten-Copper (WCu)</Link></li>
                    <li><Link href="/materials/refractory-alloys/molybdenum" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Molybdenum (Mo)</Link></li>
                  </ul>
                </div>
              </div>

              {/* Welding Products */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">WELDING PRODUCTS</h3>
                <ul className="space-y-2">
                  <li><Link href="/products/welding-technique/spot-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Spot Welding</Link></li>
                  <li><Link href="/products/welding-technique/projection-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Projection Welding</Link></li>
                  <li><Link href="/products/welding-technique/seam-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Seam Welding</Link></li>
                  <li><Link href="/products/welding-technique/mig-mag-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">MIG/MAG Welding</Link></li>
                  <li><Link href="/products/welding-technique/tig-wig-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">TIG Welding</Link></li>
                  <li><Link href="/products/welding-technique/submerged-arc-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Submerged Arc Welding</Link></li>
                  <li><Link href="/products/welding-technique/mesh-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Mesh Welding</Link></li>
                  <li><Link href="/products/welding-technique/micro-welding" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Micro Welding</Link></li>
                </ul>
              </div>

              {/* Welding Systems & Busbars */}
              <div>
                <h3 className="text-lg font-bold text-[#1D2931] mb-4">WELDING SYSTEMS</h3>
                <ul className="space-y-2">
                  <li><Link href="/tip-dressing-units" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Overview</Link></li>
                  <li><Link href="/tip-dressing-units/electrode-cap-dressing-unit" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Electrode Tip Dresser</Link></li>
                  <li><Link href="/tip-dressing-units/cap-changer" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Electrode Cap Changer</Link></li>
                  <li><Link href="/tip-dressing-units/combi-dresser" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Combi Dresser-Changer</Link></li>
                </ul>

                <h3 className="text-lg font-bold text-[#1D2931] mb-4 mt-6">FLEXIBLE BUSBARS</h3>
                <ul className="space-y-2">
                  <li><Link href="/products/flexible-busbars" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Overview</Link></li>
                  <li><Link href="/products/flexible-busbars/switchgear" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">Switchgear & Transformers</Link></li>
                  <li><Link href="/products/flexible-busbars/ev-battery-pack" className="text-[#6F7B83] hover:text-[#1D2931] text-sm">EV Battery Packs</Link></li>
                </ul>
              </div>

              {/* Contact Card */}
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
                  Questions about our products or custom solutions? We respond within 24 hours.
                </p>
                <Link href="/contact" className="inline-block bg-[#EF290E] text-white px-6 py-3 rounded font-semibold hover:bg-[#d42410] transition-colors text-sm">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu - Main View */}
      {mobileMenuOpen && mobileMenuView === 'main' && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[#F4F3EE] z-40 overflow-y-auto">
          <nav className="px-6 py-8">
            {/* Products - opens submenu */}
            <button
              onClick={() => setMobileMenuView('products')}
              className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#1D2931] border-b border-gray-200"
            >
              <span>PRODUCTS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* About Us */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="block py-4 text-lg font-bold text-[#EF290E] border-b border-gray-200"
            >
              ABOUT US
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block py-4 text-lg font-bold text-[#1D2931] border-b border-gray-200"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}

      {/* Mobile Menu - Products View */}
      {mobileMenuOpen && mobileMenuView === 'products' && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[#F4F3EE] z-40 overflow-y-auto">
          <div className="px-6 py-4">
            {/* Back Button */}
            <button
              onClick={() => setMobileMenuView('main')}
              className="flex items-center text-sm font-medium text-[#1D2931] mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              BACK
            </button>

            {/* Products Overview Link */}
            <Link
              href="/products"
              onClick={closeMenu}
              className="flex items-center justify-between py-4 text-lg font-bold text-[#1D2931] border-b border-gray-200"
            >
              <span>PRODUCTS OVERVIEW</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            {/* Materials Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('materials')}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#1D2931]"
              >
                <span>MATERIALS</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSection === 'materials' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'materials' && (
                <div className="pb-4 space-y-3">
                  <p className="text-xs font-bold text-[#6F7B83] uppercase tracking-wider">Copper Alloys</p>
                  <Link href="/materials/copper-materials" onClick={closeMenu} className="block text-[#6F7B83] py-1">Overview</Link>
                  <Link href="/materials/copper-materials/cucr1zr" onClick={closeMenu} className="block text-[#6F7B83] py-1">WIRBALIT® HF/N/G (CuCr1Zr)</Link>
                  <Link href="/materials/copper-materials/cuco2be" onClick={closeMenu} className="block text-[#6F7B83] py-1">WIRBALIT® B (CuCo2Be)</Link>
                  <Link href="/materials/copper-materials/cuni2-5sicr" onClick={closeMenu} className="block text-[#6F7B83] py-1">WIRBALIT® D (CuNi2.5SiCr)</Link>
                  <Link href="/materials/copper-materials/cual2o3" onClick={closeMenu} className="block text-[#6F7B83] py-1">WIRBALIT® CA (CuAl2O3)</Link>
                  <Link href="/materials/copper-materials/technical-properties" onClick={closeMenu} className="block text-[#EF290E] py-1">Material Properties</Link>

                  <p className="text-xs font-bold text-[#6F7B83] uppercase tracking-wider pt-4">Refractory Metals</p>
                  <Link href="/materials/refractory-alloys" onClick={closeMenu} className="block text-[#6F7B83] py-1">Overview</Link>
                  <Link href="/materials/refractory-alloys/tungsten" onClick={closeMenu} className="block text-[#6F7B83] py-1">Tungsten (W)</Link>
                  <Link href="/materials/refractory-alloys/tungsten-copper" onClick={closeMenu} className="block text-[#6F7B83] py-1">Tungsten-Copper (WCu)</Link>
                  <Link href="/materials/refractory-alloys/molybdenum" onClick={closeMenu} className="block text-[#6F7B83] py-1">Molybdenum (Mo)</Link>
                </div>
              )}
            </div>

            {/* Welding Products Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('welding-products')}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#1D2931]"
              >
                <span>WELDING PRODUCTS</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSection === 'welding-products' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'welding-products' && (
                <div className="pb-4 space-y-3">
                  <Link href="/products/welding-technique/spot-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Spot Welding</Link>
                  <Link href="/products/welding-technique/projection-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Projection Welding</Link>
                  <Link href="/products/welding-technique/seam-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Seam Welding</Link>
                  <Link href="/products/welding-technique/mig-mag-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">MIG/MAG Welding</Link>
                  <Link href="/products/welding-technique/tig-wig-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">TIG Welding</Link>
                  <Link href="/products/welding-technique/submerged-arc-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Submerged Arc Welding</Link>
                  <Link href="/products/welding-technique/mesh-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Mesh Welding</Link>
                  <Link href="/products/welding-technique/micro-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Micro Welding</Link>
                  <Link href="/products/welding-technique/laser-welding" onClick={closeMenu} className="block text-[#6F7B83] py-1">Laser Welding</Link>
                </div>
              )}
            </div>

            {/* Welding Systems Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('welding-systems')}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#1D2931]"
              >
                <span>WELDING SYSTEMS</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSection === 'welding-systems' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'welding-systems' && (
                <div className="pb-4 space-y-3">
                  <Link href="/tip-dressing-units" onClick={closeMenu} className="block text-[#6F7B83] py-1">Overview</Link>
                  <Link href="/tip-dressing-units/electrode-cap-dressing-unit" onClick={closeMenu} className="block text-[#6F7B83] py-1">Electrode Tip Dresser</Link>
                  <Link href="/tip-dressing-units/cap-changer" onClick={closeMenu} className="block text-[#6F7B83] py-1">Electrode Cap Changer</Link>
                  <Link href="/tip-dressing-units/combi-dresser" onClick={closeMenu} className="block text-[#6F7B83] py-1">Combi Dresser-Changer</Link>
                  <Link href="/tip-dressing-units/dressing-tools" onClick={closeMenu} className="block text-[#6F7B83] py-1">Milling Tools</Link>
                </div>
              )}
            </div>

            {/* Flexible Busbars Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection('flexible-busbars')}
                className="w-full flex items-center justify-between py-4 text-lg font-bold text-[#1D2931]"
              >
                <span>FLEXIBLE BUSBARS</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSection === 'flexible-busbars' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === 'flexible-busbars' && (
                <div className="pb-4 space-y-3">
                  <Link href="/products/flexible-busbars" onClick={closeMenu} className="block text-[#6F7B83] py-1">Overview</Link>
                  <Link href="/products/flexible-busbars/switchgear" onClick={closeMenu} className="block text-[#6F7B83] py-1">Switchgear & Transformers</Link>
                  <Link href="/products/flexible-busbars/ev-battery-pack" onClick={closeMenu} className="block text-[#6F7B83] py-1">EV Battery Packs</Link>
                </div>
              )}
            </div>

            {/* Expert Contact Card */}
            <div className="mt-8 bg-white rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-[#1D2931]">
                  Speak with <span className="font-bold">our experts</span>
                </h3>
                <p className="text-sm text-[#6F7B83] mt-1 mb-4">
                  Questions? We respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center bg-[#EF290E] text-white py-3 rounded font-semibold"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-24"></div>
          </div>
        </div>
      )}
    </header>
  );
}
