import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Gift, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const AUTH_URL = "https://meiosis-healthcare.vercel.app";

const plans = [
  {
    name: "Standard",
    price: "₹4,499",
    period: "/month",
    description: "For single-location clinics of any size",
    features: [
      "Full EMR suite with keyboard-centric UI",
      "ABDM integration & ABHA Health ID linking",
      "AI-Scribe (unlimited voice transcriptions)",
      "Queue management engine",
      "All document generation types",
      "Patient linking & family profiles",
      "SNOMED CT drug interaction checks",
      "1 clinic location",
      "Email & chat support",
    ],
    cta: "Get Started Free",
    ctaHref: `${AUTH_URL}/signup`,
    highlighted: false,
    badgeText: null,
    showTrialBadge: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For hospitals, multi-location clinics & larger networks",
    features: [
      "Everything in Standard",
      "Multi-location & multi-branch support",
      "Hospitalisation accommodation module",
      "Custom integrations & API access",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom SLA & uptime guarantee",
      "Advanced analytics & reporting",
      "Priority onboarding & training",
    ],
    cta: "Contact Sales",
    ctaHref: AUTH_URL,
    highlighted: true,
    badgeText: "Best for Hospitals",
    showTrialBadge: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-primary border-primary/30 bg-primary/5"
          >
            Pricing
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Flat-fee subscription. No per-patient charges. No hidden fees. No
            surprises.
          </p>

          {/* 3 Months Free Trial hero banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-7 inline-flex items-center gap-3 px-6 py-3 rounded-2xl
              bg-accent/15 border border-accent/40
              shadow-[0_0_32px_0px_rgba(16,185,129,0.25)]
              relative overflow-hidden"
          >
            {/* subtle shimmer line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -skew-x-12 pointer-events-none" />
            <div className="h-8 w-8 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Gift className="h-4 w-4 text-accent" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-accent tracking-tight">
                3 Months Free Trial
              </div>
              <div className="text-xs text-muted-foreground">
                No credit card required to start
              </div>
            </div>
            <Sparkles className="h-4 w-4 text-accent/70 flex-shrink-0" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.14,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card
                className={`h-full flex flex-col p-7 relative transition-smooth ${
                  plan.highlighted
                    ? "border-primary bg-card shadow-elevated ring-2 ring-primary/25"
                    : "border-border bg-card hover:shadow-elevated"
                }`}
              >
                {plan.badgeText && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-subtle">
                      {plan.badgeText}
                    </Badge>
                  </div>
                )}

                {/* 3 Months Free Trial badge on the Standard card */}
                {plan.showTrialBadge && (
                  <div className="absolute -top-3.5 right-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold
                        bg-accent text-accent-foreground
                        shadow-[0_0_18px_2px_rgba(16,185,129,0.45)]
                        ring-1 ring-accent/60"
                    >
                      <Sparkles className="h-3 w-3" />3 Months Free
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="font-display font-bold text-foreground text-xl">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-7">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-base ml-1.5">
                      {plan.period}
                    </span>
                  )}
                  {plan.price === "Custom" && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Tailored for your scale
                    </p>
                  )}
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full font-semibold text-sm py-5 ${
                      plan.highlighted
                        ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    data-ocid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          All plans include{" "}
          <span className="font-semibold text-accent">3 months free trial</span>{" "}
          · ABDM compliant from day one · No credit card required to start
        </motion.p>
      </div>
    </section>
  );
}
