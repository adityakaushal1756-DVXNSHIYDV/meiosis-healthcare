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
    <section className="py-28 bg-muted/30 backdrop-blur-xl border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/6 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Badge
            variant="outline"
            className="mb-5 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-accent border-accent/30 bg-accent/5"
          >
            Get Started Today
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Ready to Transform{" "}
            <span className="text-gradient-primary">Your Practice?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Start delivering faster, smarter care with Meiosis. Begin your free
            trial — no credit card required, ABDM compliant from day one.
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
            className="mt-8 flex justify-center"
          >
            <div
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full
                bg-gradient-to-r from-accent/20 via-accent/15 to-accent/20
                border border-accent/50
                shadow-[0_0_48px_0px_rgba(16,185,129,0.35),0_0_12px_0px_rgba(16,185,129,0.2)]
                relative overflow-hidden"
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
              <Sparkles className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <div className="text-base font-bold text-accent tracking-tight leading-none">
                  3 Months Free — No Credit Card Required
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Full access to all Standard features during your trial
                </div>
              </div>
              <Sparkles className="h-5 w-5 text-accent/60 flex-shrink-0" />
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
            className="mt-7 flex flex-wrap justify-center gap-4"
          >
            <a
              href={`${AUTH_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-9 shadow-elevated transition-smooth"
                data-ocid="final-cta-primary"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={AUTH_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 border-border hover:border-primary/40 transition-smooth"
                data-ocid="final-cta-signin"
              >
                Sign In to Dashboard
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-5 text-xs text-muted-foreground"
          >
            <span className="font-semibold text-accent">
              3 months free trial
            </span>{" "}
            · No credit card required · ABDM compliant from day one
          </motion.p>

          {/* Currently Under Development tag at page bottom */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.45 }}
            className="mt-8 flex justify-center"
          >
            <DevTag />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
