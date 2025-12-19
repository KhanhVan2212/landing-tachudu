"use client";
import React, { useEffect } from "react";
import DealsHero from "@/app/[locale]/deals/components/DealsHero";
import DealsCategories from "@/app/[locale]/deals/components/DealsCategories";
import FlashSales from "@/app/[locale]/deals/components/FlashSales";
import VoucherSection from "@/app/[locale]/deals/components/VoucherSection";
import Newsletter from "@/app/[locale]/deals/components/Newsletter";
import DealsList from "@/app/[locale]/deals/components/DealsList";

const Deals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectCategory = (category: string) => {
    // If clicking the same category, toggle it off
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <DealsHero />
      <DealsCategories
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {selectedCategory ? (
        <DealsList category={selectedCategory} />
      ) : (
        <>
          <FlashSales />
          <VoucherSection />
        </>
      )}

      <Newsletter />
    </div>
  );
};

export default Deals;
