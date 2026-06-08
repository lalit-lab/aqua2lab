"use client";

import { useState } from "react";
import ShopNav from "@/components/shop/ShopNav";
import ShopHero from "@/components/shop/ShopHero";
import WhyUs from "@/components/shop/WhyUs";
import PortfolioSection from "@/components/shop/PortfolioSection";
import ServicesSection from "@/components/shop/ServicesSection";
import ProcessSection from "@/components/shop/ProcessSection";
import GuidesSection from "@/components/shop/GuidesSection";
import TeamSection from "@/components/shop/TeamSection";
import ShopTestimonials from "@/components/shop/ShopTestimonials";
import FaqSection from "@/components/shop/FaqSection";
import ContactSection from "@/components/shop/ContactSection";
import ShopFooter from "@/components/shop/ShopFooter";
import RegisterModal from "@/components/shop/RegisterModal";
import WhatsAppFAB from "@/components/shop/WhatsAppFAB";

export default function Home() {
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
      <WhyUs />
      <PortfolioSection />
      <ServicesSection onOpenModal={openModal} />
      <ProcessSection onOpenModal={() => openModal()} />
      <GuidesSection />
      <TeamSection />
      <ShopTestimonials />
      <FaqSection />
      <ContactSection onOpenModal={() => openModal()} />
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
