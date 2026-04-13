import { Card } from "@/components/ui/card";
import {
  Phone,
  MessageSquare,
  Bell,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Phone,
    title: "Staff Intercom",
    description:
      "Instant voice and text communication between medical staff. Secure, HIPAA-compliant internal messaging with priority alerts for emergencies and consultations.",
    color: "text-blue-500 bg-blue-500/10 group-hover:bg-blue-500/20",
  },
  {
    icon: MessageSquare,
    title: "Patient Messaging",
    description:
      "Two-way SMS and app-based messaging for appointment reminders, test results, and follow-up care. Multi-language support with automated translations.",
    color: "text-purple-500 bg-purple-500/10 group-hover:bg-purple-500/20",
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    description:
      "Automated medication adherence system with smart notifications. Integrates with pharmacy records and sends reminders via SMS, app, and voice calls.",
    color: "text-orange-500 bg-orange-500/10 group-hover:bg-orange-500/20",
  },
  {
    icon: Zap,
    title: "LLM-Powered Chat",
    description:
      "AI assistant for patient queries, appointment scheduling, and basic medical information. Trained on medical knowledge with natural language understanding.",
    color: "text-amber-500 bg-amber-500/10 group-hover:bg-amber-500/20",
  },
];

export function CommunicationSection() {
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
            Seamless Communication
          </h2>
          <p className="section-subtitle">
            Connect teams and patients instantly
          </p>
          <p className="section-description">
            Secure, HIPAA-compliant communication tools that keep staff coordinated and patients informed. From intercom to intelligent AI assistants.
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
                <div className={`feature-icon ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg md:text-xl group-hover:text-accent transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed flex-1">
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