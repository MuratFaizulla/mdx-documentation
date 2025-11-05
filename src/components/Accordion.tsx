"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string | React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="py-4 sm:py-2">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className=" flex items-center gap-4 sm:gap-6 text-lg sm:text-xl w-full justify-items-start sm:justify-start "
          aria-expanded={accordionOpen}
        >
          <svg
            className={`fill-gray-500 shrink-0 transition-transform duration-200 ease-out ${
              accordionOpen ? "rotate-180" : ""
            }`}
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="7" width="16" height="2" rx="1" />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className="rotate-90 origin-center"
            />
          </svg>
          <span className="font-semibold">{title}</span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-600 text-sm sm:text-base ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div
            className="overflow-hidden mt-2 sm:mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {answer}
          </div>
        </div>
        <hr className=" border-gray-200 " />
      </div>
    </>
  );
};

export default Accordion;