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
    <section id="privacy" className="section-wrapper-glass border-t border-white/5">
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
            Privacy & Sovereignty
          </Badge>
          <h2 className="section-title mb-4">
            Your Data. Your Clinic. Your Control.
          </h2>
          <p className="section-subtitle">
            Local-first architecture, on-premise AI
          </p>
          <p className="section-description">
            Patient records stay on your clinic's hardware. Meiosis doesn't own your data — your patients and clinic do. Full offline capability, local LLM inference, and secure cloud sync when you need it.
          </p>
        </motion.div>

        <div className="grid-features max-w-6xl mx-auto">
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
              <Card className="card-base h-full flex flex-col group hover:shadow-lg">
                <div className="h-16 w-16 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md mx-auto">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-accent transition-colors mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-350 leading-relaxed flex-1 text-center mb-6">
                  {card.description}
                </p>
                <div className="flex justify-center">
                  <Badge
                    className={`text-xs px-4 py-1.5 ${card.highlightColor}`}
                  >
                    {card.highlight}
                  </Badge>
                </div>
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
          className="mt-16 max-w-3xl mx-auto rounded-2xl glass-panel p-8 text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
            <span className="font-semibold text-foreground block mb-2">
              Built for India's reality:
            </span>
            Low-bandwidth clinics in rural areas, high-volume practices in metros — Meiosis adapts to your infrastructure, not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
