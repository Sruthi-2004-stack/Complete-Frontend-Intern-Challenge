"use client";

import { motion, Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
    },
  },
};

export default function AnimatedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}
