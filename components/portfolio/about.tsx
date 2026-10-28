"use client";

import { useLanguage } from "@/lib/language-context";
import { Bot, Database, Code2, Cloud } from "lucide-react";

const PILLAR_ICONS: Record<string, typeof Bot> = {
  bot: Bot,
  database: Database,
  code: Code2,
  cloud: Cloud,
};

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            {t.about.title}
          </h2>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-12">
            {t.about.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.about.pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.icon] || Code2;
              return (
                <div
                  key={pillar.title}
                  className="group rounded-xl border border-border/50 bg-card/50 p-5 hover:border-primary/40 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
