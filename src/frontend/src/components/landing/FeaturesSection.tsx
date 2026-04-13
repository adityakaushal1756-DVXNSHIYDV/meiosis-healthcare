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
    <section id="features" className="section-wrapper border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header mb-20"
        >
          <Badge
            variant="outline"
            className="badge-section mb-6"
          >
            The Meiosis Ecosystem
          </Badge>
          <h2 className="section-title mb-4">
            Everything Your Clinic Needs
          </h2>
          <p className="section-subtitle">
            Purpose-built for speed and compliance
          </p>
          <p className="section-description">
            Built from first principles for Indian healthcare — privacy-first, keyboard-fast, natively ABDM-compliant. Every feature engineered to reduce administrative overhead and maximize patient throughput.
          </p>
        </motion.div>

        <div className="grid-features">
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
              <Card className="card-base h-full group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`feature-icon ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge
                    variant="outline"
                    className="pill-badge text-secondary border-secondary/30 mt-0.5"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-accent transition-colors mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
