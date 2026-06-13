"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../ui/AnimatedContainer";

const activity = [
  true, false, true, false, true, true, false,
  true, true, false, true, false, true, false,
  false, true, true, false, true, true, false,
  false, false, true, true, true, false, true,
  true, false, false, true, false, true, true,
];

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      className="
        rounded-3xl
        border border-zinc-800
        bg-zinc-900
        p-6
      "
    >
      <h2 className="text-xl font-semibold">
        Learning Activity
      </h2>

      <div
        className="
          mt-6
          grid
          grid-cols-7
          gap-2
        "
      >
        {activity.map((active, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-sm ${
              active
                ? "bg-blue-500"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </motion.article>
  );
}