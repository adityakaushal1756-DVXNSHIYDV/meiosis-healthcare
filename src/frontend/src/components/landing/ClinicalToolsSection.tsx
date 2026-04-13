import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BedDouble, MessageSquare, Mic2, Users2 } from "lucide-react";
import { motion } from "motion/react";

const clinicalTools = [
  {
    icon: Users2,
    title: "Queue Management Engine",
    description:
      "Proprietary queue engine handles high-volume patient flow with real-time position tracking, intelligent token routing, and wait-time displays for reception screens.",
    tag: "Operations",
  },
  {
    icon: Mic2,
    title: "AI-Scribe (Regional Dialects)",
    description:
      "Voice-to-prescription optimized for Hindi, Marathi, Tamil, Bengali, Telugu, and Kannada. Local LLM inference on your hardware keeps every spoken word on-premises.",
    tag: "AI",
  },
  {
    icon: BedDouble,
    title: "Hospitalisation Accommodation",
    description:
      "Full inpatient management — bed allocation, ward rounds, transfer orders, and discharge planning. Integrated billing for procedures, room charges, and nursing care.",
    tag: "Inpatient",
  },
  {
    icon: MessageSquare,
    title: "Patient Communication",
    description:
      "Post-consultation follow-up, prescription reminders, lab result notifications, and appointment confirmations — delivered via WhatsApp, SMS, or in-app messaging.",
    tag: "Engagement",
  },
];

export function ClinicalToolsSection() {
  return (
    <section id="tools" className="section-wrapper border-t border-white/5">
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
            Specialized Tools
          </Badge>
          <h2 className="section-title mb-4">
            Powerful Tools for Modern Clinics
          </h2>
          <p className="section-subtitle">
            Beyond the EMR core
          </p>
          <p className="section-description">
            Specialized modules handle every dimension of modern clinical practice — from queue management to AI-powered note taking, all integrated into your workflow.
          </p>
        </motion.div>

        <div className="grid-2-col max-w-6xl mx-auto">
          {clinicalTools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card className="card-base h-full group hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <tool.icon className="h-7 w-7 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="pill-badge text-accent border-accent/30 mt-0.5"
                  >
                    {tool.tag}
                  </Badge>
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-accent transition-colors mb-3">
                  {tool.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed">
                  {tool.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
