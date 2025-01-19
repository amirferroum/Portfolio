import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { CONTACT } from '../constants';

const Contact = () => {
  const contactItems = [
    { text: CONTACT.address, direction: 'left' },
    { text: CONTACT.phoneNo, direction: 'right' },
    { text: CONTACT.email, direction: 'left', isLink: true },
    { text: 'Made by @FerroumAmir', direction: 'right' },
  ];

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
      <div className="text-center tracking-tighter">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: item.direction === 'left' ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.3,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="my-4"
          >
            {item.isLink ? (
              <a
                href="#"
                className="border-b hover:text-purple-500 transition-colors duration-300"
              >
                {item.text}
              </a>
            ) : (
              <p>{item.text}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
