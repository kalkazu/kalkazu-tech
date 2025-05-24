'use client';
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FaqAccordion = ({value, titleTrigger, accordionContent}) => {
  return (
    <div>
      <AccordionItem value={value}>
        <AccordionTrigger className="text-white cursor-pointer">
          {titleTrigger}
        </AccordionTrigger>
        <AccordionContent className="text-white">
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default FaqAccordion;
