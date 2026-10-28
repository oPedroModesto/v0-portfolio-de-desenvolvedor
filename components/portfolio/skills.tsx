"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

function TechBadge({
  name,
  icon,
  color,
}: {
  name: string;
  icon: string;
  color: string;
}) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? `${color}80` : undefined,
        boxShadow: hovered ? `0 0 16px -4px ${color}40` : undefined,
      }}
      className="flex items-center gap-2.5 rounded-lg border border-border/50 bg-background/60 px-3.5 py-2 hover:bg-background transition-all duration-200 cursor-default"
    >
      {icon && !imgError ? (
        <img
          src={`https://cdn.simpleicons.org/${icon}/${color.replace("#", "")}`}
          alt={name}
          width={16}
          height={16}
          className="shrink-0"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="h-2.5 w-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      <span className="text-sm font-medium text-foreground/90 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.skills.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {t.skills.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/40">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                    {category.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <TechBadge
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                      color={item.color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
