"use client";

import {
  Home,
  BookOpen,
  Settings,
} from "lucide-react";

const items = [
  {
    label: "Dashboard",
    icon: Home,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <nav
      className="
        hidden
        md:flex
        w-20
        lg:w-64
        flex-col
        gap-4
        border-r
        border-zinc-800
        p-4
      "
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              p-4
              text-zinc-400
              transition
              hover:bg-zinc-900
              hover:text-white
            "
          >
            <Icon size={22} />

            <span className="hidden lg:block">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}