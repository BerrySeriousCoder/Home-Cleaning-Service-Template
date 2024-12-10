import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We currently serve the greater metropolitan area and surrounding suburbs within a 30-mile radius. Contact us to confirm service availability in your specific location.',
  },
  {
    question: 'Do you use eco-friendly cleaning products?',
    answer:
      'Yes, we exclusively use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment while maintaining the highest cleaning standards.',
  },
  {
    question: 'How can I reschedule or cancel my booking?',
    answer:
      'You can reschedule or cancel your booking up to 24 hours before your scheduled service through our online portal or by calling our customer service team.',
  },
  {
    question: 'Are your cleaners insured and vetted?',
    answer:
      'Yes, all our cleaning professionals undergo thorough background checks, are fully insured, and receive extensive training to ensure the highest quality service.',
  },
  {
    question: 'What should I do before the cleaners arrive?',
    answer:
      'To ensure the most effective cleaning service, we recommend picking up loose items, securing valuables, and ensuring clear access to all areas that need cleaning.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}