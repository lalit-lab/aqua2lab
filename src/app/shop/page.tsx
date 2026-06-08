"use client";

import { useState } from "react";
import ShopNav from "@/components/shop/ShopNav";
import ShopHero from "@/components/shop/ShopHero";
import PortfolioSection from "@/components/shop/PortfolioSection";
import ServicesSection from "@/components/shop/ServicesSection";
import ProcessSection from "@/components/shop/ProcessSection";
import ShopTestimonials from "@/components/shop/ShopTestimonials";
import ContactSection from "@/components/shop/ContactSection";
import WhyUs from "@/components/shop/WhyUs";
import GuidesSection from "@/components/shop/GuidesSection";
import ShopFooter from "@/components/shop/ShopFooter";
import RegisterModal from "@/components/shop/RegisterModal";
import WhatsAppFAB from "@/components/shop/WhatsAppFAB";

export default function ShopPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const openModal = (service = "") => {
    setPreselectedService(service);
    setModalOpen(true);
  };

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <ShopNav onOpenModal={() => openModal()} />
      <ShopHero onOpenModal={() => openModal()} />
      <PortfolioSection />
      <ServicesSection onOpenModal={openModal} />
      <ProcessSection onOpenModal={() => openModal()} />
      <ShopTestimonials />
      <ContactSection onOpenModal={() => openModal()} />
      <WhyUs />
      <GuidesSection />
      <ShopFooter />

      <WhatsAppFAB />
      <RegisterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={preselectedService}
      />
    </main>
  );
}
