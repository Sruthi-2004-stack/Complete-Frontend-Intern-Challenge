"use client";

import { motion } from "framer-motion";
import { itemVariants } from "../ui/AnimatedContainer";

export default function HeroTile() {
  return (
    <motion.article
      variants={itemVariants}
      className="
        col-span-1
        md:col-span-2
        xl:col-span-4
        rounded-3xl
        border border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        to-zinc-950
        p-8
      "
    >
      <h1 className="text-4xl font-bold">
        Welcome back 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Continue your learning journey.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-3xl">🔥</span>

        <div>
          <p className="font-semibold">
            7 Day Learning Streak
          </p>

          <p className="text-sm text-zinc-400">
            Keep up the momentum!
          </p>
        </div>
      </div>
    </motion.article>
  );
}