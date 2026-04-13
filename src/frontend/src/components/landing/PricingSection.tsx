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
    <section id="pricing" className="section-wrapper border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header mb-16"
        >
          <Badge
            variant="outline"
            className="badge-section mb-6"
          >
            Pricing
          </Badge>
          <h2 className="section-title mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="section-subtitle">
            No hidden fees. No surprises.
          </p>
          <p className="section-description max-w-3xl mb-12">
            Flat-fee subscription with no per-patient charges. One simple plan for single clinics, custom enterprise solutions for hospitals and networks.
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
            className="mt-8 inline-flex items-center gap-4 px-6 py-4 rounded-2xl
              bg-accent/12 border border-accent/40
              shadow-[0_0_32px_0px_rgba(16,185,129,0.25)]
              relative overflow-hidden group hover:bg-accent/15 transition-all"
          >
            {/* subtle shimmer line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -skew-x-12 pointer-events-none" />
            <div className="h-10 w-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Gift className="h-5 w-5 text-accent" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-accent tracking-tight">
                3 Months Free Trial
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                No credit card required
              </div>
            </div>
            <Sparkles className="h-5 w-5 text-accent/70 flex-shrink-0" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
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
                className={`card-base h-full flex flex-col relative group hover:shadow-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "border-accent ring-2 ring-accent/25 shadow-xl"
                    : ""
                }`}
              >
                {plan.badgeText && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-5 py-1.5 text-xs font-bold shadow-subtle">
                      {plan.badgeText}
                    </Badge>
                  </div>
                )}

                {/* 3 Months Free Trial badge on the Standard card */}
                {plan.showTrialBadge && (
                  <div className="absolute -top-4 right-6">
                    <span
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold
                        bg-accent text-accent-foreground
                        shadow-[0_0_20px_2px_rgba(16,185,129,0.5)]
                        ring-1 ring-accent/60"
                    >
                      <Sparkles className="h-3.5 w-3.5" />3 Months Free
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                    {plan.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-3 font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-6xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-600 dark:text-slate-400 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.price === "Custom" && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-light">
                      Scalable pricing for your organization
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-350"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full font-semibold text-base py-6 rounded-xl transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-2xl shadow-xl"
                        : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    }`}
                    data-ocid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-16 space-y-2"
        >
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
            ✓ All plans include{" "}
            <span className="font-semibold text-accent">3 months free trial</span>
          </p>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-500">
            ABDM compliant from day one · No credit card required · Setup in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
