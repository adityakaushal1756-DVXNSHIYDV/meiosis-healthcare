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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Communication
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect staff, patients, and systems with intelligent communication tools designed for healthcare workflows.
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