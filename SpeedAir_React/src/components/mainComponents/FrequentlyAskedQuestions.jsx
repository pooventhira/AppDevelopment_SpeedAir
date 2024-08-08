import React, { useState } from 'react';
import '../../assets/styles/mainStyles/FrequentlyAskedQuestions.css';

const FrequentlyAskedQuestions = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: 'What is SpeedAir App?',
      answer: 'SpeedAir is a tech-enabled logistics company offering a variety of intracity and intercity delivery services. Just download and register yourself on the app, choose the service that best fits your logistic needs, and make your booking! With SpeedAir, you will get a verified driver and vehicle right at your doorstep.',
    },
    {
      question: 'How do I use SpeedAir App?',
      answer: 'You can use SpeedAir App by downloading it from the app store, registering, and following the instructions to book logistics services.',
    },
    {
      question: 'How do I book a tempo/mini truck/bike or intercity courier services online from the SpeedAir app?',
      answer: 'Booking is simple! Just open the app, select your vehicle or service, fill in the required details, and confirm your booking.',
    },
    {
      question: 'Does SpeedAir provide intercity or interstate service?',
      answer: 'Yes, SpeedAir provides both intercity and interstate services. You can choose according to your requirement in the app.',
    },
    {
      question: 'What are the charges for a SpeedAir truck and SpeedAir bike delivery service?',
      answer: 'Charges vary based on distance, type of service, and vehicle. You can get a quick estimate from the app.',
    },
    {
      question: 'Does SpeedAir provide Packers and Movers services?',
      answer: 'Yes, SpeedAir offers Packers and Movers services. You can book them through the app for a seamless relocation experience.',
    },
    {
      question: 'What does SpeedAir deliver?',
      answer: 'SpeedAir delivers a wide range of goods, including documents, packages, and larger shipments, using a variety of vehicles suited to your needs.',
    },
  ];

  return (
    <section className="faq">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <p className="faq-subheader">In case you have more questions, feel free to reach out to us.</p>
      <div className="faq-list">
        {faqs.map( (faq, index) => (
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-right"></i>}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
