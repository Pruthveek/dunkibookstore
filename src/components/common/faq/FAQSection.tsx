"use client";
import React from "react";

interface SectionProps {
  question: string;
  answer: string;
  isVisible: boolean;
  setIsVisible: (value: string | null) => void;
}

const FAQSection: React.FC<SectionProps> = ({
  question,
  answer,
  isVisible,
  setIsVisible,
}) => {
  return (
    <div className="w-full border-b border-gray-300 py-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsVisible(isVisible ? null : question)}
          className="text-2xl leading-nonetext-black flex justify-between w-full cursor-pointer"
        >
          <h3 className="text-lg md:text-xl">{question}</h3>
          {isVisible ? "−" : "+"}
        </button>
      </div>

      {isVisible && (
        <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQSection;
