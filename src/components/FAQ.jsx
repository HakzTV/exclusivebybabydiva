import  { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Make sure to install react-icons

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 1 week of purchase for an alternate outfit.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery usually takes between 2-3 business days.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we can deliver through DHL',
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can reach our customer service at info@exclusivebabydiva.com or call us at +233543062425 or +233505069190.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We  accept cash, momo payment, bank transfer and POS.',
    }, {
      question: 'How can i book an appointment?',
      answer: 'You can book in person, via email, phone number or whatsapp',
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div 
              className="faq-question" 
              onClick={() => toggleAnswer(index)} 
              aria-expanded={activeIndex === index}
            >
              <h3>{item.question}</h3>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
