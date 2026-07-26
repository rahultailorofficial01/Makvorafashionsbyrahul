"use client";

import { useState } from "react";
import SmoothScrollProvider from "../components/providers/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionGrid, { ProductItem, COLLECTION_ITEMS } from "@/components/CollectionGrid";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import LookbookSection from "@/components/LookbookSection";
import PressSection from "@/components/PressSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PrivateFittingModal from "@/components/PrivateFittingModal";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import CheckoutModal from "@/components/CheckoutModal";
import SafariCustomizerModal from "@/components/SafariCustomizerModal";
import SafariOverviewModal from "@/components/SafariOverviewModal";
import TrousersOverviewModal from "@/components/TrousersOverviewModal";
import TrousersCustomizerModal from "@/components/TrousersCustomizerModal";
import BellBottomOverviewModal from "@/components/BellBottomOverviewModal";
import BellBottomCustomizerModal from "@/components/BellBottomCustomizerModal";
import PathaniOverviewModal from "@/components/PathaniOverviewModal";
import PathaniCustomizerModal from "@/components/PathaniCustomizerModal";

export default function Home() {
  const [isFittingOpen, setIsFittingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSafariOverviewOpen, setIsSafariOverviewOpen] = useState(false);
  const [isSafariCustomizerOpen, setIsSafariCustomizerOpen] = useState(false);
  const [isTrousersOverviewOpen, setIsTrousersOverviewOpen] = useState(false);
  const [isTrousersCustomizerOpen, setIsTrousersCustomizerOpen] = useState(false);
  const [isBellBottomOverviewOpen, setIsBellBottomOverviewOpen] = useState(false);
  const [isBellBottomCustomizerOpen, setIsBellBottomCustomizerOpen] = useState(false);
  const [isPathaniOverviewOpen, setIsPathaniOverviewOpen] = useState(false);
  const [isPathaniCustomizerOpen, setIsPathaniCustomizerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      ...COLLECTION_ITEMS[0],
      quantity: 1,
    },
  ]);

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleQuickView = (product: ProductItem) => {
    if (product.id === "MKV-001") {
      setIsTrousersOverviewOpen(true);
    } else if (product.id === "MKV-002") {
      setIsSafariOverviewOpen(true);
    } else if (product.id === "MKV-004") {
      setIsBellBottomOverviewOpen(true);
    } else if (product.id === "MKV-005") {
      setIsPathaniOverviewOpen(true);
    } else {
      setQuickViewProduct(product);
    }
  };

  const handleRemoveFromCart = (id: string) => {
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

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SmoothScrollProvider>
      <main className="bg-[#FDFBF7] min-h-screen text-[#050505] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#050505]">
        {/* Top Navbar */}
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenFitting={() => setIsFittingOpen(true)}
        />

        {/* Hero Section */}
        <HeroSection onOpenFitting={() => setIsFittingOpen(true)} />

        {/* Collection Section */}
        <CollectionGrid
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Atelier Craftsmanship & Fabrics */}
        <CraftsmanshipSection />

        {/* Runway Lookbook Gallery */}
        <LookbookSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Editorial Press */}
        <PressSection />

        {/* Footer */}
        <Footer />

        {/* Interactive Modals & Drawers */}
        <PrivateFittingModal
          isOpen={isFittingOpen}
          onClose={() => setIsFittingOpen(false)}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onProceedToCheckout={() => setIsCheckoutOpen(true)}
        />

        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
        />

        {/* Safari Suits Collection Overview Page */}
        <SafariOverviewModal
          isOpen={isSafariOverviewOpen}
          onClose={() => setIsSafariOverviewOpen(false)}
          onOpenCustomizer={() => setIsSafariCustomizerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Safari Suit 3D/Style Customizer Modal */}
        <SafariCustomizerModal
          isOpen={isSafariCustomizerOpen}
          onClose={() => setIsSafariCustomizerOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Trousers Collection Overview Page */}
        <TrousersOverviewModal
          isOpen={isTrousersOverviewOpen}
          onClose={() => setIsTrousersOverviewOpen(false)}
          onOpenCustomizer={() => setIsTrousersCustomizerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Trousers Style Customizer Modal */}
        <TrousersCustomizerModal
          isOpen={isTrousersCustomizerOpen}
          onClose={() => setIsTrousersCustomizerOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Bell Bottoms Overview Page */}
        <BellBottomOverviewModal
          isOpen={isBellBottomOverviewOpen}
          onClose={() => setIsBellBottomOverviewOpen(false)}
          onOpenCustomizer={() => setIsBellBottomCustomizerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Bell Bottoms Style Customizer Modal */}
        <BellBottomCustomizerModal
          isOpen={isBellBottomCustomizerOpen}
          onClose={() => setIsBellBottomCustomizerOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Pathani Suits Overview Page */}
        <PathaniOverviewModal
          isOpen={isPathaniOverviewOpen}
          onClose={() => setIsPathaniOverviewOpen(false)}
          onOpenCustomizer={() => setIsPathaniCustomizerOpen(true)}
          onAddToCart={handleAddToCart}
        />

        {/* Pathani Suits Style Customizer Modal */}
        <PathaniCustomizerModal
          isOpen={isPathaniCustomizerOpen}
          onClose={() => setIsPathaniCustomizerOpen(false)}
          onAddToCart={handleAddToCart}
        />

        {/* Full Page Purchase Checkout Experience */}
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          items={cartItems}
          onClearCart={() => setCartItems([])}
        />
      </main>
    </SmoothScrollProvider>
  );
}