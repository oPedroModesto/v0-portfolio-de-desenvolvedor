"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { socialLinks } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Linkedin, Mail, Github, Languages, Menu, Terminal } from "lucide-react";
import Link from "next/link";

const SECTION_IDS = [
  "about",
  "experience",
  "projects",
  "skills",
  "learning",
  "languages",
  "contact",
] as const;

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "learning", label: t.nav.learning },
    { id: "languages", label: t.nav.languages },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/10"
          : "bg-background/50 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="#"
          className="group flex items-center gap-2 text-base font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="tracking-tight">
            PM<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/50 bg-card/50 px-2 py-1 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/15 text-primary shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions & Mobile Drawer Trigger */}
        <div className="flex items-center gap-1.5">
          <div className="hidden sm:flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 text-muted-foreground hover:text-primary"
            >
              <a href={socialLinks.email} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <div className="w-px h-5 bg-border/60 mx-1.5" />
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="h-8 flex items-center gap-1.5 text-xs font-medium border-border/60 hover:border-primary/40"
          >
            <Languages className="h-3.5 w-3.5 text-primary" />
            {language === "pt" ? "EN" : "PT"}
          </Button>

          {/* Mobile Menu Sheet */}
          <div className="lg:hidden ml-1">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-border/60"
                  aria-label="Menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 border-border/60 bg-background/95 backdrop-blur-xl flex flex-col justify-between p-6"
              >
                <div>
                  <SheetHeader className="p-0 pb-6 border-b border-border/50 text-left">
                    <SheetTitle className="flex items-center gap-2 text-base font-bold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                        <Terminal className="h-3.5 w-3.5" />
                      </span>
                      Pedro Modesto
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 flex flex-col gap-1.5">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <Link
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-primary/15 text-primary border border-primary/20"
                              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="h-9 w-9">
                      <a href={socialLinks.email} aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
