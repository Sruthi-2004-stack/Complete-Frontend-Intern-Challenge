"use client";

import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import ProgressBar from "./ProgressBar";
import { Course } from "@/types/course";
import { itemVariants } from "../ui/AnimatedContainer";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  const Icon: LucideIcon =
    (Icons[course.icon_name as keyof typeof Icons] as LucideIcon) ||
    Icons.BookOpen;

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="flex items-center justify-between">
        <Icon className="h-8 w-8 text-blue-400" />

        <span className="text-sm text-zinc-400">
          {course.progress}%
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold">
        {course.title}
      </h3>

      <ProgressBar progress={course.progress} />
    </motion.article>
  );
}
