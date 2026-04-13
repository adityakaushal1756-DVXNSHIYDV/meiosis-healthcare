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
    <section className="section-wrapper-glass border-y border-white/5 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12">
          Powered by enterprise-grade technology
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 text-center group"
            >
              <div className="h-14 w-14 rounded-2xl bg-card/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <tech.icon className="h-6 w-6 text-accent group-hover:text-accent/80 transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
