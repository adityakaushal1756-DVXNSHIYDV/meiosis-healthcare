import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Cpu, Wifi } from "lucide-react";
import { motion } from "motion/react";

const privacyCards = [
  {
    icon: Wifi,
    title: "Local-First Architecture",
    description:
      "Patient data lives on your hardware first. Meiosis remains fully functional offline — critical for clinics in Tier 2 & 3 Indian cities with unstable connectivity.",
    highlight: "Offline ready",
    highlightColor: "bg-accent/10 text-accent border-accent/20",
  },
  {
    icon: Cpu,
    title: "Local LLM Inference",
    description:
      "Leverage high-performance hardware like Mac Studio to run medical-grade speech-to-text and AI-Scribe locally. Sensitive consultation data never leaves your clinic.",
    highlight: "On-premise AI",
    highlightColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: Building2,
    title: "Secure Cloud Sync",
    description:
      "When you do sync, it's via Supabase and AWS with end-to-end encryption, zero-knowledge design, and full audit logging. You control what syncs and when.",
    highlight: "Supabase + AWS",
    highlightColor: "bg-secondary/10 text-secondary border-secondary/20",
  },
];

export function PrivacySection() {
  return (
    <section id="privacy" className="section-wrapper border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header"
        >
          <Badge
            variant="outline"
            className="badge-section mb-5"
          >
            Privacy & Sovereignty
          </Badge>
          <h2 className="section-title">
            Your Data. Your Clinic.{" "}
            <span className="text-gradient-primary">Your Control.</span>
          </h2>
          <p className="section-description">
            Most SaaS EMRs own your patient data. Meiosis doesn't. Local-first
            architecture means patient records belong to your clinic — and your
            patients.
          </p>
        </motion.div>

        <div className="grid-features max-w-5xl mx-auto">
          {privacyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card className="card-base h-full flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {card.description}
                </p>
                <Badge
                  className={`mt-5 text-xs px-3 py-1 ${card.highlightColor}`}
                >
                  {card.highlight}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Emphasis banner */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12 max-w-3xl mx-auto rounded-2xl bg-muted/50 border border-border p-6 text-center"
        >
          <p className="text-muted-foreground text-base leading-relaxed">
            <span className="font-semibold text-foreground">
              Designed for India's reality:
            </span>{" "}
            Low-bandwidth clinics in Rajasthan, high-volume practices in Mumbai,
            and everything in between — Meiosis adapts to your infrastructure,
            not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
