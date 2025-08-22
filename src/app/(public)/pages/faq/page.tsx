"use client";

import BreadCrumb from "@/components/layouts/BreadCrumb";
import React, { useState } from "react";
import faqData from "@/data/faqData.json";
import FAQSection from "@/components/common/faq/FAQSection";
import Link from "next/link";
export default function FaqPAge() {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  return (
    <section className="flex flex-col items-center">
      <BreadCrumb
        title="Faq Page"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Faq Page" }]}
      />

      <div className="section-container mb-20">
        <p className="text-xl md:text-[30px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet
          pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae
        </p>
        <p className="text-base">
          Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id
          arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros
          maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed
          purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum,
          lobortis sed mauris. Integer congue, sem elementum varius tristique,
          erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat.
          Pellentesque elementum justo at velit fringilla, eu feugiat erat
          fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id
          lacus. Sed interdum convallis.
        </p>
      </div>
      <div className="section-container border-t-2  w-full">
        {faqData.map((faq) => (
          <FAQSection
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isVisible={visibleSection === faq.question}
            setIsVisible={setVisibleSection}
          />
        ))}
      </div>
      <div className="section-container">
        Don’t worry about anything, your Support experts will solve your hesitation or query.
        <br></br>
        <Link href="/" className="underline hover:text-red-600 transform ease-in-out duration-500">Schedule A Visit</Link>
      </div>
    </section>
  );
}
