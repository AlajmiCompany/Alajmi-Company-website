"use client";
import BranchesSection from "@/components/ContactUsPage/BranchesSection";
import ContactForm from "@/components/ContactUsPage/ContactForm";

export default function page() {
  return (
    <div className="container">
      <ContactForm />
      <BranchesSection />
    </div>
  );
}
