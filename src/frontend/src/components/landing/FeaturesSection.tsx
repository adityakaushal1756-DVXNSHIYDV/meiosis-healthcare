import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Keyboard,
  Link2,
  Mic2,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Keyboard,
    title: "Keyboard-Centric EMR",
    description:
      "Dashboard-style layout engineered for speed. Every action mapped to keyboard shortcuts — no mouse required. Navigate 10× faster than traditional click-heavy EMRs.",
    badge: "Core",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: ShieldCheck,
    title: "SNOMED CT Integration",
    description:
      "Standardized medical terminology at every touchpoint. Accurate drug interaction checks, consistent diagnosis coding, and FHIR-ready data exchange built-in.",
    badge: "Compliance",
    color: "text-secondary bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: Mic2,
    title: "AI-Scribe",
    description:
      "Real-time voice-to-prescription powered by local LLM inference. Optimized for Hindi, Marathi, Tamil, and other Indian regional languages and medical vocabulary.",
    badge: "AI",
    color: "text-accent bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Users2,
    title: "Queue Management",
    description:
      "Proprietary patient flow engine with real-time queue visibility, intelligent prioritization, and accurate wait-time forecasting for high-throughput clinics.",
    badge: "Operations",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Link2,
    title: "Patient Linking",
    description:
      "Universal patient identity via ABHA Health IDs and NFC recognition. Link family members, manage dependencies, and maintain longitudinal care continuity.",
    badge: "Records",
    color: "text-secondary bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: FileText,
    title: "Document Generation",
    description:
      "Every medical document — prescriptions, discharge summaries, referral letters, lab orders, certificates — generated instantly with structured SNOMED CT coding.",
    badge: "Records",
    color: "text-accent bg-accent/10 group-hover:bg-accent/20",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary border-primary/30 bg-primary/5"
          >
            The Meiosis Ecosystem
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Everything Your Clinic Needs
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Built from first principles for Indian healthcare — privacy-first,
            keyboard-fast, natively ABDM-compliant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card className="h-full p-6 bg-card border-border hover:border-primary/30 hover:shadow-elevated transition-smooth group cursor-default">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-smooth ${feature.color}`}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground text-base">
                        {feature.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 border-secondary/30 text-secondary shrink-0"
                      >
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
