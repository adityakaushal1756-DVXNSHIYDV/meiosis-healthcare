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
    <section className="py-24 bg-background/80 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Legally Compliant Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every type of medical document, perfectly formatted and fully compliant with legal and regulatory standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${feature.color} transition-colors`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}