"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id={id} ref={ref} className="min-h-screen flex items-center py-16 md:py-24 px-5 md:px-24">
      <motion.div
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="h-[2px] w-12 bg-accent" />
          <span className="font-black text-xs tracking-[0.5em] text-accent uppercase">[{label}]</span>
        </div>
        {children}
      </motion.div>
    </section>

  );
}
