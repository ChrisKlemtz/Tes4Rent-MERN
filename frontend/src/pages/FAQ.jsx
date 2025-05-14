import { motion } from "framer-motion";
import { useState } from "react";

const faqData = [
  {
    question: "What Tesla models can I rent?",
    answer:
      "We offer Model S, 3, X, and Y. All vehicles come with the latest features, autopilot, and full charge.",
  },
  {
    question: "Where can I pick up and return the car?",
    answer:
      "You can pick up and return Teslas at any of our designated locations across Europe or request delivery.",
  },
  {
    question: "Is charging included in the rental?",
    answer:
      "Yes! Charging at Tesla Superchargers is included in most rental plans. Details are shown during booking.",
  },
  {
    question: "Can I rent without a credit card?",
    answer:
      "A credit card is required for security deposit purposes. Debit cards are not accepted at this time.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <motion.div
      className="min-h-screen bg-white text-black px-6 py-16 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 cursor-pointer shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <motion.p
                className="text-gray-700 mt-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
