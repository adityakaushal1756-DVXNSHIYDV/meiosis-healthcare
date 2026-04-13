import { Building2, Globe, Lock, Stethoscope, Wifi, Zap } from "lucide-react";
import { motion } from "motion/react";

const techStack = [
  { icon: Wifi, label: "Local-First" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Zap, label: "Mac Studio LLM" },
  { icon: Building2, label: "Supabase + AWS" },
  { icon: Stethoscope, label: "SNOMED CT" },
  { icon: Globe, label: "ABDM Certification Upcoming" },
];

export function TechTrustBar() {
  return (
    <section className="bg-muted/40 border-y border-white/5 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">
          Powered by enterprise-grade technology
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center">
                <tech.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
