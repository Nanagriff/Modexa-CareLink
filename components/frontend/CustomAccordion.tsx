import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

 export  type FAQItem = {
    qn: string;
    ans: string;
  };


  

  export function CustomAccordion({ FAQS }:{FAQS: FAQItem[]}) {
    // Array of FAQs

    return (
      <Accordion type="single" collapsible className="w-full">
        {
            FAQS.map((faq,i)=> {
                return (
                    <AccordionItem  key={i} value={faq.qn}>
                    <AccordionTrigger className="font-medium">{faq.qn}</AccordionTrigger>
                    <AccordionContent className="text-cyan">
                    {faq.ans}
                    </AccordionContent>
                  </AccordionItem>
                )
            })
        }
      </Accordion>
    )
  }
  