import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { motion } from "motion/react";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const abdmFeatures = [
  "ABHA Health ID creation & auto-linking",
  "NFC-based patient recognition at reception",
  "School health ID & family health profiles",
  "Longitudinal health records across providers",
  "FHIR R4-compliant data exchange",
  "Consent management framework (PHR App compatible)",
];

const abdmModules = [
  { label: "ABHA Health ID", status: "Connected" },
  { label: "Digital Records (PHR)", status: "Connected" },
  { label: "NFC Recognition", status: "Connected" },
  { label: "FHIR Exchange", status: "Connected" },
  { label: "Consent Management", status: "Connected" },
  { label: "HFR Facility Registry", status: "Connected" },
];

export function ABDMSection() {
  return (
    <section id="abdm" className="section-wrapper bg-muted/30 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid-2-col items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className="badge-section"
              >
                National Interoperability
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/25 text-xs font-bold px-4 py-1.5">
                ✦ ABDM Compliant
              </Badge>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-5">
              Built for India's{" "}
              <span className="text-gradient-primary">Digital Health</span>{" "}
              Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Meiosis is fully aligned with the Ayushman Bharat Digital Mission
              (ABDM). From ABHA Health ID creation to nationwide longitudinal
              record access, we handle every touchpoint of India's national
              digital health infrastructure.
            </p>

            <ul className="space-y-4">
              {abdmFeatures.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.45,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="flex items-center gap-3 text-base text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.45 }}
              className="mt-8"
            >
              <a
                href={`${AUTH_URL}/signup`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  data-ocid="abdm-cta"
                >
                  Get ABDM-Ready Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: ABDM status panel */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="rounded-2xl bg-card border border-border p-6 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    Official ABDM Integration
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Certified · Audited · Active
                  </div>
                </div>
                <Badge className="ml-auto bg-accent/10 text-accent border-accent/20 text-xs">
                  Live
                </Badge>
              </div>

              <div className="space-y-1">
                {abdmModules.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.07,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-muted/40 transition-smooth border-b border-border/40 last:border-0"
                  >
                    <span className="text-sm text-foreground font-medium">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-lg bg-accent/8 border border-accent/20 text-center">
                <span className="text-xs font-semibold text-accent tracking-wide">
                  Certified by the National Health Authority
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
