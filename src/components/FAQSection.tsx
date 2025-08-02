import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const faqs = [
  {
    question: "When will Petnify be available?",
    answer: "We're currently in development and plan to launch in early 2024. Join our waitlist to be notified as soon as we're ready!"
  },
  {
    question: "Will Petnify be free to use?",
    answer: "Petnify will offer both free and premium features. Basic pet tracking and community access will be free, while advanced features like detailed health analytics and priority booking will be part of our premium plans."
  },
  {
    question: "What types of pets does Petnify support?",
    answer: "Petnify is designed for all pets! Whether you have dogs, cats, birds, rabbits, reptiles, or any other companion animal, our platform adapts to your pet's specific needs."
  },
  {
    question: "How does the vet booking feature work?",
    answer: "Our platform connects you with verified veterinarians and pet service providers in your area. You can view availability, read reviews, and book appointments directly through the app."
  },
  {
    question: "Is my pet's data secure?",
    answer: "Absolutely! We take data privacy seriously and use industry-standard encryption to protect your pet's information. You control who can access your pet's data."
  },
  {
    question: "Can I use Petnify for multiple pets?",
    answer: "Yes! Petnify is designed to manage multiple pets from a single account. You can create individual profiles for each of your pets and track their unique needs separately."
  }
];

const FAQSection = () => {
  useEffect(() => {
    // Add FAQ Schema.org structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing FAQ schema if present
    const existingSchema = document.querySelector('script[data-faq-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new FAQ schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector('script[data-faq-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30" id="faq" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common 
            questions about Petnify.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-sm bg-card/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;