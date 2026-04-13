import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Lock,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";

const trustBadges = [
  {
    icon: ShieldCheck,
    label: "ABDM Certification Upcoming",
    description: "NHA compliance in progress",
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    icon: Stethoscope,
    label: "SNOMED CT",
    description: "Standardized terminology",
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    icon: Wifi,
    label: "Offline Capable",
    description: "Local-first architecture",
    color: "text-secondary bg-secondary/10 border-secondary/20",
  },
  {
    icon: UserCheck,
    label: "Patient-Owned Data",
    description: "Zero vendor lock-in",
    color: "text-accent bg-accent/10 border-accent/20",
  },
  {
    icon: Lock,
    label: "End-to-End Encrypted",
    description: "Zero-knowledge design",
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    icon: Globe,
    label: "Built for India",
    description: "ABDM · SNOMED · Regional AI",
    color: "text-secondary bg-secondary/10 border-secondary/20",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-background/80 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary border-primary/30 bg-primary/5"
          >
            Compliance & Security
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trusted. Compliant. Secure.
          </h2>
          <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
            Every architectural decision in Meiosis was made with clinical
            compliance and patient trust at the center.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-card border border-border hover:shadow-elevated transition-smooth group"
            >
              <div
                className={`h-12 w-12 rounded-xl border flex items-center justify-center mb-3 transition-smooth ${badge.color}`}
              >
                <badge.icon className="h-6 w-6" />
              </div>
              <div className="font-display font-semibold text-foreground text-sm">
                {badge.label}
              </div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-tight">
                {badge.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
