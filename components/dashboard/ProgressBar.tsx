"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <motion.div
        className="h-full rounded-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </div>
  );
}