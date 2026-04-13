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
    <section className="section-wrapper-glass border-y border-white/5 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs md:text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-slate-500 mb-14">
          Enterprise-Grade Technology Stack
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-4 text-center group"
            >
              <div className="h-16 w-16 rounded-2xl bg-card/80 border border-border/50 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:bg-card/95 transition-all duration-300">
                <tech.icon className="h-7 w-7 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300 group-hover:text-accent transition-colors leading-snug">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
