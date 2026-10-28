"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-12">
            {t.experience.title}
          </h2>

          <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
            {t.experience.items.map((item, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline node */}
                <div className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center">
                  {item.current ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    </>
                  ) : (
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-muted-foreground/60 group-hover:bg-primary ring-4 ring-background transition-colors" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="rounded-xl border border-border/50 bg-card/60 p-6 hover:border-primary/35 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {t.experience.currentBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-primary/80" />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-background/60 border border-border/50 rounded-md px-2.5 py-1 whitespace-nowrap self-start">
                      <Calendar className="h-3 w-3 text-primary/70" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-foreground/85 mb-5 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                    {item.techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
