"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
}

export function MotionWrapper({ children }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}