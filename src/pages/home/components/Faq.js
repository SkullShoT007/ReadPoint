import { Accordian } from "./Accordian";
export const Faq = () => {
    const faqs = [
  {
    id: 1,
    question: "Why should I use ReadPoint?",
    answer: "ReadPoint provides high-quality, curated eBooks and courses designed by industry experts. With a focus on upskilling and practical learning, you get lifetime access to resources, project-based learning, and an easy-to-use platform trusted by thousands of learners."
  },
  {
    id: 2,
    question: "Can I access my eBook on mobile?",
    answer: "Yes! All your purchased eBooks and learning content can be accessed on any mobile device via our mobile-friendly website. You can also download them for offline reading, depending on the license."
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: "Absolutely. If you're not satisfied with your purchase, we offer a 7-day refund policy. Just contact our support team with your order ID, and we’ll be happy to assist you."
  },
  {
    id: 4,
    question: "Do you support international payments?",
    answer: "Yes, we support all major international payment methods, including credit/debit cards and PayPal. Our payment gateway is secure and optimized for global users."
  }
];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {faqs.map((faq) => (
                <Accordian key = {faq.id} faq = {faq}/>
              ))}            
            </div>
      </section>
  )
}