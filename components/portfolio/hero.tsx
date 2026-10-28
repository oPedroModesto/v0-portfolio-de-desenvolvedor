"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowDown, ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard is unavailable
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16">
      {/* Subtle architectural grid & ambient glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[22rem] bg-primary/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>{t.hero.availability}</span>
          </div>

          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3 font-mono">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-5">
            <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-primary/90 font-medium mb-5 max-w-2xl mx-auto text-balance">
            {t.hero.role}
          </p>

          <div className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10 rounded-md bg-card/60 border border-border/50 px-3.5 py-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{t.hero.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-medium shadow-lg shadow-primary/20 group"
            >
              <Link href="#projects">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-medium border-border/70 bg-card/50 hover:bg-card hover:border-primary/40"
            >
              <Link href="#contact">{t.hero.ctaSecondary}</Link>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto font-mono text-xs text-muted-foreground hover:text-foreground border border-transparent hover:border-border/50"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">{t.hero.emailCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-3.5 w-3.5" />
                  <span>{t.hero.copyEmail}</span>
                </>
              )}
            </Button>
          </div>

          {/* Quick Engineering Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto pt-6 border-t border-border/40">
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm px-4 py-3.5 text-center hover:border-primary/30 hover:bg-card/70 transition-colors"
              >
                <p className="text-xl md:text-2xl font-bold text-foreground font-mono tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        aria-label="Scroll to About"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors animate-bounce"
      >
        <ArrowDown className="h-4 w-4" />
      </Link>
    </section>
  );
}
