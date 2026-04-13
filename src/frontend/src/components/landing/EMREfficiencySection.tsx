import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Pill,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const emrFeatures = [
  {
    title: "Keyboard-centric navigation",
    description:
      "Every clinical action reachable without lifting your hands from the keyboard",
  },
  {
    title: "SNOMED CT drug interaction checks",
    description:
      "Real-time contraindication alerts with standardized terminology",
  },
  {
    title: "Workflow optimization engine",
    description:
      "Intelligent templates that adapt to your specialty and patient patterns",
  },
  {
    title: "Dashboard-style minimal scrolling",
    description:
      "Everything relevant in a single view — no tab-hopping, no hunting",
  },
];

const shortcuts = [
  { key: "⌘ K", action: "Quick command palette" },
  { key: "⌘ P", action: "New prescription" },
  { key: "⌘ L", action: "Lab order" },
  { key: "⌘ N", action: "New patient" },
  { key: "⌘ ↑ / ↓", action: "Navigate patient list" },
  { key: "⌘ S", action: "Save & close note" },
  { key: "⌘ D", action: "Discharge summary" },
  { key: "⌘ R", action: "Referral letter" },
];

// SNOMED CT Drug Interaction Panel data
const drugInteractions = [
  {
    drug1: { name: "Warfarin", code: "372756006", class: "Anticoagulant" },
    drug2: { name: "Aspirin", code: "387458008", class: "NSAID" },
    severity: "high" as const,
    alert: "Major bleeding risk — monitor INR closely",
  },
  {
    drug1: { name: "Metformin", code: "109081006", class: "Antidiabetic" },
    drug2: { name: "Contrast Dye", code: "385420005", class: "Radiographic" },
    severity: "moderate" as const,
    alert: "Risk of lactic acidosis — hold 48h pre-procedure",
  },
];

const severityConfig = {
  high: {
    label: "Major",
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/30",
    dot: "bg-destructive",
    icon: AlertTriangle,
  },
  moderate: {
    label: "Moderate",
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/30",
    dot: "bg-accent",
    icon: Zap,
  },
};

// Workflow steps for the optimisation panel
const workflowSteps = [
  { id: 1, label: "Patient Check-in", sublabel: "ABHA linked", active: false },
  { id: 2, label: "Triage", sublabel: "Vitals recorded", active: false },
  { id: 3, label: "Consultation", sublabel: "AI-Scribe active", active: true },
  { id: 4, label: "Prescription", sublabel: "SNOMED validated", active: false },
  {
    id: 5,
    label: "Discharge",
    sublabel: "Summary auto-generated",
    active: false,
  },
];

const workflowMetrics = [
  "60% fewer clicks",
  "avg. 4 min consult",
  "95% keyboard nav",
];

function WorkflowOptimisationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="rounded-2xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col"
      style={{ minHeight: 340 }}
    >
      {/* Panel header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border flex-shrink-0">
        <div className="h-3 w-3 rounded-full bg-destructive/60" />
        <div className="h-3 w-3 rounded-full bg-accent/60" />
        <div className="h-3 w-3 rounded-full bg-secondary/60" />
        <div className="ml-2 flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-accent/20 flex items-center justify-center">
            <GitBranch className="h-2.5 w-2.5 text-accent" />
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Workflow Optimisation
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] font-mono text-accent">Optimising</span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-3">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Clinical Flow
          </p>
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0 border-accent/30 text-accent"
          >
            Live Session
          </Badge>
        </div>

        {/* Workflow steps */}
        <div className="flex flex-col gap-0">
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + idx * 0.09,
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-stretch gap-2.5"
            >
              {/* Connector line + node */}
              <div className="flex flex-col items-center flex-shrink-0 w-6">
                <div
                  className={`h-5 w-5 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 transition-all duration-500 ${
                    step.active
                      ? "border-accent bg-accent/20 shadow-[0_0_10px_2px_rgba(16,185,129,0.35)]"
                      : "border-border bg-card"
                  }`}
                >
                  {step.active ? (
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  ) : (
                    <div className="h-1.5 w-1.5 rounded-full bg-border" />
                  )}
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div
                    className={`w-px flex-1 min-h-[16px] mt-0.5 ${
                      idx < 2 ? "bg-accent/40" : "bg-border/50"
                    }`}
                  />
                )}
              </div>

              {/* Step info */}
              <div
                className={`flex items-center justify-between flex-1 py-1.5 px-2.5 mb-0.5 rounded-lg transition-all duration-300 ${
                  step.active
                    ? "bg-accent/10 border border-accent/25"
                    : "bg-transparent"
                }`}
              >
                <div>
                  <div
                    className={`text-xs font-semibold ${
                      step.active ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {step.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-tight">
                    {step.sublabel}
                  </div>
                </div>
                {step.active && (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-accent/15 border border-accent/30">
                    <div className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                    <span className="text-[9px] font-bold text-accent uppercase tracking-wide">
                      Now
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics pills */}
        <div className="mt-auto pt-2 border-t border-border/50 flex flex-wrap gap-1.5">
          {workflowMetrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/10 border border-accent/20 text-accent"
            >
              <CheckCircle2 className="h-2.5 w-2.5 flex-shrink-0" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function EMREfficiencySection() {
  return (
    <section id="emr" className="section-wrapper border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge
            variant="outline"
            className="badge-section mb-6"
          >
            EMR Efficiency
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Built for{" "}
            <span className="text-gradient-primary">Clinical Efficiency</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Traditional EMRs were designed for compliance, not speed. Meiosis was engineered for the doctor — every interaction optimized to reduce cognitive load and administrative friction.
          </p>
        </motion.div>

        {/* Two-Column Mirror Layout: Workflow (LEFT) — SNOMED (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {/* LEFT: Workflow Optimisation Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <WorkflowOptimisationPanel />
          </motion.div>

          {/* RIGHT: SNOMED CT Drug Interaction Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div
              className="rounded-2xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col"
              style={{ minHeight: 340 }}
            >
              {/* Panel header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border flex-shrink-0">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-accent/60" />
                <div className="h-3 w-3 rounded-full bg-secondary/60" />
                <div className="ml-2 flex items-center gap-2">
                  <div className="h-4 w-4 rounded bg-secondary/20 flex items-center justify-center">
                    <Pill className="h-2.5 w-2.5 text-secondary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    SNOMED CT Drug Interactions
                  </span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent">Live</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 space-y-3">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                    Active Interactions
                  </p>
                  <Badge
                    variant="outline"
                    className="pill-badge text-secondary border-secondary/30"
                  >
                    CT v3.0
                  </Badge>
                </div>

                {drugInteractions.map((interaction, interactionIdx) => {
                  const sev = severityConfig[interaction.severity];
                  const SevIcon = sev.icon;
                  return (
                    <motion.div
                      key={`${interaction.drug1.code}-${interaction.drug2.code}`}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + interactionIdx * 0.12,
                        duration: 0.45,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={`rounded-xl border p-2.5 ${sev.bg} ${sev.border}`}
                    >
                      {/* Drug pair row */}
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="flex items-center gap-1 flex-1 min-w-0">
                          <div className="h-6 w-6 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                            <Pill className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-semibold text-foreground truncate">
                              {interaction.drug1.name}
                            </div>
                            <div className="text-[9px] font-mono text-muted-foreground truncate">
                              {interaction.drug1.code}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`flex-shrink-0 px-1.5 py-0.5 rounded-md ${sev.bg} border ${sev.border}`}
                        >
                          <SevIcon className={`h-2.5 w-2.5 ${sev.text}`} />
                        </div>

                        <div className="flex items-center gap-1 flex-1 min-w-0">
                          <div className="h-6 w-6 rounded-lg bg-card border border-border flex items-center justify-center flex-shrink-0">
                            <Pill className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] font-semibold text-foreground truncate">
                              {interaction.drug2.name}
                            </div>
                            <div className="text-[9px] font-mono text-muted-foreground truncate">
                              {interaction.drug2.code}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Severity + alert */}
                      <div className="flex items-start gap-1.5">
                        <div
                          className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide ${sev.bg} ${sev.text} border ${sev.border} flex-shrink-0`}
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full ${sev.dot}`}
                          />
                          {sev.label}
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">
                          {interaction.alert}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* SNOMED CT footer stamp */}
                <div className="mt-auto pt-2 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded bg-secondary/15 flex items-center justify-center">
                      <CheckCircle2 className="h-2.5 w-2.5 text-secondary" />
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      <span className="font-semibold text-secondary">
                        SNOMED CT
                      </span>{" "}
                      terminology
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/60">
                    FHIR R4
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature List Below */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emrFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: 0.25 + i * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-base">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Keyboard Shortcuts Terminal — below both panels */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.65,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-card border border-border shadow-elevated overflow-hidden">
            {/* Terminal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border">
              <div className="h-3 w-3 rounded-full bg-destructive/60" />
              <div className="h-3 w-3 rounded-full bg-accent/60" />
              <div className="h-3 w-3 rounded-full bg-secondary/60" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                Meiosis — Keyboard Shortcuts
              </span>
              <div className="ml-auto">
                <Badge className="pill-badge text-accent border-accent/20">
                  Customizable
                </Badge>
              </div>
            </div>

            {/* Shortcuts grid */}
            <div className="p-6">
              <p className="text-xs font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Global Shortcuts
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {shortcuts.map((s, i) => (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.35 + i * 0.05,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted/60 transition-smooth group border border-border/30 hover:border-accent/30"
                  >
                    <span className="text-sm text-foreground font-medium group-hover:text-accent transition-smooth">
                      {s.action}
                    </span>
                    <kbd className="inline-flex items-center gap-1 rounded-md bg-muted border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-sm">
                      {s.key}
                    </kbd>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/8 border border-primary/20 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="text-sm font-medium text-primary leading-relaxed">
                  All shortcuts are fully customizable per specialty and personal workflow
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
