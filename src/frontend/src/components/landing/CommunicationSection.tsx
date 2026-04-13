import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Phone,
  Bell,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Phone,
    title: "Staff Intercom",
    description:
      "Instant voice and text communication between medical staff. Secure, HIPAA-compliant internal messaging with priority alerts for emergencies and consultations.",
    badge: "Communication",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: MessageSquare,
    title: "Patient Messaging",
    description:
      "Two-way SMS and app-based messaging for appointment reminders, test results, and follow-up care. Multi-language support with automated translations.",
    badge: "Patient Care",
    color: "text-secondary bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    description:
      "Automated medication adherence system with smart notifications. Integrates with pharmacy records and sends reminders via SMS, app, and voice calls.",
    badge: "Adherence",
    color: "text-accent bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Users,
    title: "LLM-Powered Chat",
    description:
      "AI assistant for patient queries, appointment scheduling, and basic medical information. Trained on medical knowledge with natural language understanding.",
    badge: "AI",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
];

export function CommunicationSection() {
  return (
    <section className="section-wrapper bg-background/80 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header"
        >
          <h2 className="section-title">
            Seamless Communication
          </h2>
          <p className="section-description">
            Connect staff, patients, and systems with intelligent communication tools designed for healthcare workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-base h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`feature-icon ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}