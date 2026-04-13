import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Shield,
  PenTool,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: FileText,
    title: "Legal Document Generation",
    description:
      "Automated creation of all medical documents including prescriptions, discharge summaries, consent forms, and legal certificates. Fully compliant with Indian medical regulations.",
    badge: "Legal",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Built-in compliance with MCI guidelines, NABH standards, and data protection laws. Digital signatures, audit trails, and tamper-proof document storage.",
    badge: "Compliance",
    color: "text-secondary bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: PenTool,
    title: "Smart Templates",
    description:
      "Intelligent document templates that adapt to specialty, patient condition, and regulatory requirements. Auto-populate with patient data and clinical findings.",
    badge: "Automation",
    color: "text-accent bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: CheckCircle,
    title: "Document Verification",
    description:
      "Blockchain-based document verification and sharing. QR codes for patient access, secure sharing with insurers, and integration with government health portals.",
    badge: "Security",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
];

export function DocumentsSection() {
  return (
    <section className="section-wrapper border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header mb-20"
        >
          <h2 className="section-title">
            Legally Compliant Documentation
          </h2>
          <p className="section-subtitle">
            Every document, perfectly formatted
          </p>
          <p className="section-description">
            Automated generation of all medical documents with full compliance to Indian medical regulations. From prescriptions to discharge notes, all MCI-aligned and audit-ready.
          </p>
        </motion.div>

        <div className="grid-2-col">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full flex flex-col group hover:shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`feature-icon ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="pill-badge text-primary border-primary/30 mt-0.5">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-accent transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed flex-1">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}