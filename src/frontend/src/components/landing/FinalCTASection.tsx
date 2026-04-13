import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

function DevTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs px-3 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Currently Under Development
    </span>
  );
}

export function FinalCTASection() {
  return (
    <section className="section-wrapper-glass relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/8 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Badge
            variant="outline"
            className="badge-section mb-8"
          >
            Get Started Today
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
            Ready to Transform <br className="hidden md:inline" />
            <span className="text-gradient-primary">Your Practice?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-14 max-w-3xl mx-auto font-light">
            Start delivering faster, smarter care with Meiosis. Free trial, ABDM compliant from day one.
          </p>

          {/* 3 Months Free Trial — prominent pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mb-12 flex justify-center"
          >
            <div
              className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-10 py-5 rounded-2xl sm:rounded-full
                bg-gradient-to-r from-accent/20 via-accent/15 to-accent/20
                border border-accent/50
                shadow-[0_0_48px_0px_rgba(16,185,129,0.35),0_0_12px_0px_rgba(16,185,129,0.2)]
                relative overflow-hidden group hover:shadow-[0_0_56px_0px_rgba(16,185,129,0.45)] transition-all"
            >
              {/* animated shimmer */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2.4,
                  ease: "linear",
                  repeatDelay: 1.2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -skew-x-12 pointer-events-none"
              />
              <Sparkles className="h-6 w-6 text-accent flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="text-base sm:text-lg font-bold text-accent tracking-tight leading-tight">
                  3 Months Free — No Credit Card Required
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 font-light">
                  Full access to all Standard features during trial
                </div>
              </div>
              <Sparkles className="h-6 w-6 text-accent/60 flex-shrink-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.28,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <a
              href={`${AUTH_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-2xl font-semibold text-base px-10 py-6 shadow-xl transition-all duration-300 rounded-xl"
                data-ocid="final-cta-primary"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href={AUTH_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-10 py-6 border-2 border-slate-300 dark:border-slate-600 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 rounded-xl"
                data-ocid="final-cta-signin"
              >
                Sign In to Dashboard
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="space-y-4"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 font-light">
              ✓ <span className="font-semibold text-accent">
                3 months free
              </span>{" "}
              · No credit card · ABDM compliant from day one
            </p>

            {/* Currently Under Development tag at page bottom */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.45 }}
              className="flex justify-center"
            >
              <DevTag />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
