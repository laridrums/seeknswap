"use client";

import { FC } from "react";
import { TrendingUp, Zap, Shield } from "lucide-react";

const stats = [
  { icon: Zap, label: "Best routes", value: "via Jupiter" },
  { icon: TrendingUp, label: "Platform fee", value: "0.5% only" },
  { icon: Shield, label: "Non-custodial", value: "Always" },
];

export const StatsBanner: FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Icon size={14} className="text-accent" />
          </div>
          <div>
            <p className="text-text-dim text-xs font-body">{label}</p>
            <p className="text-text text-sm font-display font-600">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
