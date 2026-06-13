"use client";

import { useEffect, useState } from "react";

type ActivityTileProps = {
  totalSessions?: number;
};

export default function ActivityTile({ totalSessions }: ActivityTileProps) {
  const [safeSessions, setSafeSessions] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // If value comes from props → use it
    if (typeof totalSessions === "number") {
      setSafeSessions(totalSessions);
      return;
    }

    // fallback (client-only storage safe access)
    const stored = localStorage.getItem("totalSessions");
    setSafeSessions(stored ? Number(stored) : 0);
  }, [totalSessions]);

  // Prevent hydration mismatch (VERY IMPORTANT)
  if (!mounted) {
    return (
      <div className="p-4 rounded-xl bg-white/5 animate-pulse">
        <p className="text-2xl font-bold text-white">0</p>
        <p className="text-xs text-white/40 mt-0.5">Sessions</p>
      </div>
    );
  }

  return (
    <div
      className="p-4 rounded-xl"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <p className="text-2xl font-bold text-white">{safeSessions}</p>
      <p className="text-xs text-white/40 mt-0.5">Sessions</p>
    </div>
  );
}
