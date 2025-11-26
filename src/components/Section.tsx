'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
