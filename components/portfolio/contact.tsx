"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { socialLinks } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  Phone,
  Github,
} from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(
    null
  );

  const handleCopy = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      // Fallback if clipboard is unavailable
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-card/90 via-card/70 to-card/90 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
                {t.contact.title}
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center flex-wrap mb-10">
              <Button asChild size="lg" className="font-medium group">
                <a href={socialLinks.email}>
                  <Mail className="h-4 w-4 mr-2" />
                  {t.contact.emailLabel}
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="font-medium group bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0"
              >
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t.contact.whatsappLabel}
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-medium group border-border/70 bg-background/50 hover:border-primary/40"
              >
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2 text-primary" />
                  {t.contact.linkedinLabel}
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-medium group border-border/70 bg-background/50 hover:border-primary/40"
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Interactive Business Card Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-8 border-t border-border/40">
              {/* Copyable Email Card */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 hover:border-primary/35 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      E-mail
                    </p>
                    <p className="text-xs md:text-sm font-mono text-foreground truncate">
                      {t.contact.email}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(t.contact.email, "email")}
                  className="shrink-0 h-8 px-2.5 text-xs font-mono text-muted-foreground hover:text-primary"
                >
                  {copiedField === "email" ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                      <span className="text-emerald-400">
                        {t.contact.copiedLabel}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      <span>{t.contact.copyLabel}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Copyable Phone Card */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-background/50 px-4 py-3.5 hover:border-primary/35 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      WhatsApp / Tel
                    </p>
                    <p className="text-xs md:text-sm font-mono text-foreground truncate">
                      {t.contact.phone}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(t.contact.phone, "phone")}
                  className="shrink-0 h-8 px-2.5 text-xs font-mono text-muted-foreground hover:text-primary"
                >
                  {copiedField === "phone" ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                      <span className="text-emerald-400">
                        {t.contact.copiedLabel}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      <span>{t.contact.copyLabel}</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/30 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary/80" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.contact.locationLabel}
                  </p>
                  <p className="text-xs md:text-sm text-foreground/90">
                    {t.contact.locationValue}
                  </p>
                </div>
              </div>

              {/* Current Status */}
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/30 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.contact.statusLabel}
                  </p>
                  <p className="text-xs md:text-sm text-emerald-300 font-medium">
                    {t.contact.statusValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
