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
    <section id="tools" className="py-24 bg-background/80 backdrop-blur-xl border-t border-white/5\">
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
            Specialized Tools
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Powerful Tools for{" "}
            <span className="text-gradient-primary">Modern Clinics</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Beyond the EMR core — specialized modules that handle every
            dimension of modern clinical practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              <Card className="h-full p-6 bg-card border-border hover:border-primary/30 hover:shadow-elevated transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-smooth">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-semibold text-foreground text-base">
                        {tool.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 border-accent/30 text-accent shrink-0"
                      >
                        {tool.tag}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
