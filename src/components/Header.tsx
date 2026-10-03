import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { KiyokiLogo } from './KiyokiLogo';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartCount?: number;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSearch, 
  onOpenCart, 
  cartCount = 0,
  onNavigateHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
    }
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        if (href.startsWith('#') && href !== '#') {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Purifiers', href: '#products' },
    { name: 'Technology', href: '#technology' },
    { name: 'Air Quality', href: '#technology' },
    { name: 'Discover', href: '#brand' },
    { name: 'Support', href: '#support' },
    { name: 'Shop', href: '#products' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white transition-all duration-300">
      {/* 88px exact height container matching wireframe specifications */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-[88px] flex items-center justify-between">
        
        {/* Left: KIYOKI Logo */}
        <div className="flex items-center shrink-0">
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center group transition-transform active:scale-95 cursor-pointer" 
            aria-label="Kiyoki Home"
          >
            <KiyokiLogo variant="dark" height={26} />
          </a>
        </div>

        {/* Center: Primary Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-[14px] lg:text-[15px] font-medium text-gray-800 hover:text-sky-brand transition-colors duration-200 tracking-normal cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Utility Icons */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {/* Search Icon */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 text-gray-900 hover:text-sky-brand transition-colors duration-200 rounded-full hover:bg-gray-50 focus:outline-none"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Account Icon */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 text-gray-900 hover:text-sky-brand transition-colors duration-200 rounded-full hover:bg-gray-50 focus:outline-none"
            aria-label="Account"
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            className="p-1.5 text-gray-900 hover:text-sky-brand transition-colors duration-200 rounded-full hover:bg-gray-50 focus:outline-none relative"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-sky-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-gray-900 hover:text-sky-brand focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-[15px] font-medium text-gray-800 hover:text-sky-brand py-1.5 border-b border-gray-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
