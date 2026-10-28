"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projects = t.projects.items;
  const labels = t.projects.modalLabels;

  // Extract unique categories while preserving order
  const categories = useMemo(() => {
    const seen = new Set<string>();
    for (const item of projects) {
      seen.add(item.category);
    }
    return Array.from(seen);
  }, [projects]);

  // Reset category filter if language switches and category label changes
  const effectiveCategory =
    activeCategory === "all" || categories.includes(activeCategory)
      ? activeCategory
      : "all";

  const filteredProjects = useMemo(() => {
    if (effectiveCategory === "all") return projects;
    return projects.filter((p) => p.category === effectiveCategory);
  }, [projects, effectiveCategory]);

  const selectedIndex = useMemo(() => {
    if (!selectedProjectId) return -1;
    return projects.findIndex((p) => p.id === selectedProjectId);
  }, [projects, selectedProjectId]);

  const selectedProject =
    selectedIndex >= 0 ? projects[selectedIndex] : undefined;

  const handlePrevious = () => {
    if (selectedIndex < 0) return;
    const prevIndex =
      (selectedIndex - 1 + projects.length) % projects.length;
    setSelectedProjectId(projects[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + 1) % projects.length;
    setSelectedProjectId(projects[nextIndex].id);
  };

  const isProductionStatus = (status: string) =>
    status.toLowerCase().includes("produ") ||
    status.toLowerCase().includes("conclu") ||
    status.toLowerCase().includes("complet");

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
                {t.projects.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                effectiveCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                  : "bg-card/60 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t.projects.filterAll} ({projects.length})
            </button>
            {categories.map((category) => {
              const count = projects.filter(
                (p) => p.category === category
              ).length;
              const isActive = effectiveCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                      : "bg-card/60 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const projectNumber = String(
                projects.findIndex((p) => p.id === project.id) + 1
              ).padStart(2, "0");

              return (
                <Card
                  key={project.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProjectId(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProjectId(project.id);
                    }
                  }}
                  className="group relative flex flex-col justify-between bg-card/80 border-border/50 hover:border-primary/45 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {/* Top subtle accent line on hover */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Stylized Window / Engineering Top Bar */}
                    <div className="flex items-center justify-between px-6 py-2.5 border-b border-border/40 bg-background/40">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-primary/70 font-semibold">
                          #{projectNumber}
                        </span>
                        <span className="text-border">•</span>
                        <Badge
                          variant="outline"
                          className="text-[11px] font-medium border-primary/30 text-primary bg-primary/5 py-0 h-5"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isProductionStatus(project.status)
                              ? "bg-emerald-400"
                              : "bg-amber-400"
                          }`}
                        />
                        {project.status}
                      </span>
                    </div>

                    <CardHeader className="pt-5 pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </CardTitle>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:text-primary transition-all">
                          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pb-4">
                      {/* Key Highlight Pill */}
                      <div className="flex items-center gap-2 text-xs font-medium text-primary/90 bg-primary/5 border border-primary/15 rounded-md px-3 py-2 mb-3">
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
                        <span className="truncate">{project.highlight}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </CardContent>
                  </div>

                  <CardFooter className="pt-3 flex flex-col items-start gap-4 border-t border-border/30 mt-2 bg-background/20">
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {project.techs.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techs.length > 5 && (
                        <Badge
                          variant="outline"
                          className="text-xs font-mono text-muted-foreground"
                        >
                          +{project.techs.length - 5}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between w-full text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      <span>{t.projects.viewDetails}</span>
                      <span className="font-mono text-xs translate-x-0 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectId(null);
        }}
      >
        <DialogContent className="sm:max-w-2xl max-h-[88vh] overflow-y-auto p-0 gap-0 border-border/70 bg-card shadow-2xl">
          {selectedProject && (
            <>
              {/* Modal Top Header Banner */}
              <div className="relative p-6 pb-5 border-b border-border/60 bg-gradient-to-b from-primary/10 via-card to-card">
                <DialogHeader className="text-left space-y-3 pr-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs font-medium border-primary/40 text-primary bg-primary/10"
                    >
                      {selectedProject.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs font-mono flex items-center gap-1.5"
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isProductionStatus(selectedProject.status)
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      />
                      {selectedProject.status}
                    </Badge>
                  </div>

                  <DialogTitle className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    {selectedProject.title}
                  </DialogTitle>

                  <DialogDescription className="text-sm text-primary/90 font-medium flex items-center gap-2 pt-0.5">
                    <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                    <span>{selectedProject.highlight}</span>
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5 text-primary" />
                    {labels.overview}
                  </h4>
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {labels.features}
                  </h4>
                  <ul className="grid gap-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed rounded-md border border-border/40 bg-background/40 px-3.5 py-2.5"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Impact Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border/50 bg-background/50 p-4 space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-primary font-semibold flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5" />
                      {labels.architecture}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-primary font-semibold flex items-center gap-2">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {labels.impact}
                    </h4>
                    <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {labels.techStack}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer with Project Navigation */}
              <div className="flex items-center justify-between gap-2 px-6 py-4 border-t border-border/60 bg-background/40">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    className="h-8 px-3 text-xs gap-1"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    {labels.previous}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    className="h-8 px-3 text-xs gap-1"
                  >
                    {labels.next}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">
                    {selectedIndex + 1} / {projects.length}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedProjectId(null)}
                    className="h-8 px-4 text-xs"
                  >
                    {labels.close}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
