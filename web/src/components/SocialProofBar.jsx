import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getDailyCount, getDailyRating, getRatingCount, TOOL_MAP } from "../utils/doaideViral";

export default function SocialProofBar() {
  const { pathname } = useLocation();
  const toolName = TOOL_MAP[pathname];

  const data = useMemo(() => {
    if (!toolName) return null;
    return {
      count: getDailyCount(toolName),
      rating: getDailyRating(toolName),
      ratingCount: getRatingCount(toolName),
    };
  }, [toolName]);

  if (!data) return null;

  const fullStars = Math.floor(Number(data.rating));
  const starStr = "★".repeat(fullStars) + (Number(data.rating) % 1 >= 0.5 ? "½" : "");

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap py-2 text-xs text-white/40">
      <span>{data.count.toLocaleString()} people used this today</span>
      <span className="text-signal">{starStr} {data.rating}/5 from {data.ratingCount.toLocaleString()} users</span>
    </div>
  );
}
