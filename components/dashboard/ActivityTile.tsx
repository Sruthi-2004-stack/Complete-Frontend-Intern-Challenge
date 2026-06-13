"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../ui/AnimatedContainer";

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      className="
        rounded-3xl
        border border-zinc-800
        bg-zinc-900
        p-6
        md:col-span-2
      "
    >
      <h2 className="text-xl font-semibold">
        Learning Activity
      </h2>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="
              h-4
              w-4
              rounded-sm
              bg-blue-500/70
            "
          />
        ))}
      </div>
    </motion.article>
  );
}
