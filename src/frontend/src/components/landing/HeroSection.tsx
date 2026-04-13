import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "ABDM", label: "Certification Upcoming" },
];

function DevTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs px-3 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Currently Under Development
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[140px] -translate-y-1/3" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10 flex justify-center">
        <div className="max-w-2xl text-center">
          {/* Currently Under Development tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4"
          >
            <DevTag />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Badge className="mb-5 bg-accent/10 text-accent border-accent/25 font-semibold text-xs px-3.5 py-1.5 tracking-wide">
              ✦ ABDM Certification Upcoming &nbsp;·&nbsp; SNOMED CT Integrated
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-display text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08]"
          >
            <span className="text-gradient-primary">
              The Future of
              <br />
              Clinical Care
            </span>
            <br />
            <span className="text-foreground">in India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.65,
              delay: 0.22,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg"
          >
            Keyboard-efficient, local-first, and fully ABDM-aligned EMR built
            for the speed and complexity of modern Indian clinics. See 40% more
            patients without sacrificing care quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.32,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <a
              href={`${AUTH_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-7 shadow-elevated transition-smooth"
                data-ocid="hero-cta-primary"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={`${AUTH_URL}/demo`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-7 border-border hover:border-primary/40 transition-smooth"
                data-ocid="hero-cta-demo"
              >
                <Play className="mr-2 h-4 w-4" />
                Request Demo
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mt-3 text-xs text-muted-foreground"
          >
            Redirects to{" "}
            <span className="font-mono text-primary/70">
              meiosis-healthcare.vercel.app
            </span>{" "}
            · No credit card required
          </motion.p>

          {/* Stats Row — only kept non-count stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
              className="mt-10 flex gap-3 justify-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 0.56 + i * 0.08,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-center p-3 px-5 rounded-xl bg-card/70 backdrop-blur-sm border border-border/60"
              >
                <div className="font-display text-xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
