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
    <section id="trust" className="section-wrapper-glass border-t border-white/5">
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
            Compliance & Security
          </Badge>
          <h2 className="section-title mb-4">
            Trusted. Compliant. Secure.
          </h2>
          <p className="section-description max-w-3xl">
            Every architectural decision in Meiosis was made with clinical compliance and patient trust at the center. Built to meet India's most rigorous healthcare standards.
          </p>
        </motion.div>

        <div className="grid-trust max-w-6xl mx-auto">
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
              className="card-base flex flex-col items-center text-center group hover:shadow-lg"
            >
              <div
                className={`h-14 w-14 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${badge.color}`}
              >
                <badge.icon className="h-7 w-7 trust-icon" />
              </div>
              <div className="font-display font-semibold text-foreground text-sm md:text-base">
                {badge.label}
              </div>
              <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-tight font-light">
                {badge.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
