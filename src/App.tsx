import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { Section02 } from './components/Section02';
import { ProductCarousel } from './components/ProductCarousel';
import { FiltrationSection } from './components/FiltrationSection';
import { GreenTeamSection } from './components/GreenTeamSection';
import { LifestyleBrandSection } from './components/LifestyleBrandSection';
import { AntiGravityBanner } from './components/AntiGravityBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy'>(() => {
    return typeof window !== 'undefined' && window.location.hash === '#privacy-policy'
      ? 'privacy'
      : 'home';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy-policy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!window.location.hash || window.location.hash === '#' || window.location.hash === '') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPrivacy = () => {
    window.location.hash = 'privacy-policy';
    setCurrentView('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    if (window.location.hash === '#privacy-policy') {
      window.history.pushState(null, '', window.location.pathname);
    }
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopClick = () => {
    setIsCartOpen(true);
  };

  const handleLearnMoreClick = () => {
    setIsSearchOpen(true);
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans selection:bg-sky-brand selection:text-white flex flex-col overflow-x-hidden">
      {/* 01. HEADER / NAVIGATION (88px) */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onNavigateHome={navigateToHome}
      />

      {currentView === 'privacy' ? (
        <PrivacyPolicy
          onBackToHome={navigateToHome}
          onOpenContact={() => setIsSearchOpen(true)}
        />
      ) : (
        /* HERO & SECTIONS */
        <main className="w-full">
          {/* 02. HERO BANNER (470px) Full-Width Image Carousel */}
          <HeroCarousel
            onShopClick={handleShopClick}
            onLearnMoreClick={handleLearnMoreClick}
          />

          {/* SECTION 02: Clean Air / For A Healthier You (Two-Column Layout with Video) */}
          <Section02
            onLearnMore={handleLearnMoreClick}
          />

          {/* SECTION 03: Horizontal Product-Card Carousel (Featured 67% + Secondary 33%) */}
          <ProductCarousel
            onShopClick={(productName) => {
              setCartItems((prev) => {
                const existing = prev.find((item) => item.name === productName);
                if (existing) {
                  return prev.map((item) =>
                    item.name === productName
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  );
                }
                return [
                  ...prev,
                  {
                    id: String(Date.now()),
                    name: productName,
                    price: 0,
                    quantity: 1,
                    image: '/images/card1_ref_clean.png',
                  },
                ];
              });
              setIsCartOpen(true);
            }}
            onLearnMoreClick={() => setIsSearchOpen(true)}
          />

          {/* SECTION 04: Advanced 5-Stage Filtration Technology */}
          <FiltrationSection
            onLearnMoreClick={handleLearnMoreClick}
          />

          {/* SECTION 05: Meet The Green Team (Interactive Expanding Product Showcase) */}
          <GreenTeamSection
            onShopNowClick={(productName) => {
              setCartItems((prev) => {
                const existing = prev.find((item) => item.name === productName);
                if (existing) {
                  return prev.map((item) =>
                    item.name === productName
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  );
                }
                return [
                  ...prev,
                  {
                    id: String(Date.now()),
                    name: `Kiyoki ${productName}`,
                    price: 0,
                    quantity: 1,
                    image: `/images/purifier_${productName.toLowerCase()}.png`,
                  },
                ];
              });
              setIsCartOpen(true);
            }}
          />

          {/* SECTION 06: Purify Your Space, Elevate Your Life (Lifestyle & Brand-Story Section) */}
          <LifestyleBrandSection
            onLearnMoreClick={handleLearnMoreClick}
          />

          {/* SECTION 07: Breathe Better With Kiyoki (Anti-Gravity Promotional Banner) */}
          <AntiGravityBanner
            onLearnMoreClick={handleLearnMoreClick}
          />
        </main>
      )}

      {/* SECTION 08: Final Footer Section (Full-Width Solid Black Footer) */}
      <Footer
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPrivacyPolicy={navigateToPrivacy}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

export default App;
