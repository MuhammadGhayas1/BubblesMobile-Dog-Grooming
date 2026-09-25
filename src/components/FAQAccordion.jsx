import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/gallery';

export function FAQAccordion() {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  color: 'var(--color-sage)'
                }}
              />
            </button>
            {isOpen && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
