import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Building2,
    title: "Hospital Management System",
    description:
      "Comprehensive HMS with bed management, resource allocation, inventory tracking, and operational dashboards. Real-time monitoring of hospital capacity and utilization.",
    badge: "HMS",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Calendar,
    title: "Clinic Management",
    description:
      "End-to-end clinic operations including appointment scheduling, billing, insurance processing, and patient flow management. Integrated with hospital systems.",
    badge: "Operations",
    color: "text-secondary bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Advanced analytics for clinical outcomes, financial performance, and operational efficiency. Custom dashboards and automated compliance reporting.",
    badge: "Insights",
    color: "text-accent bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Settings,
    title: "Queue Handling",
    description:
      "Intelligent queue management with predictive wait times, priority routing, and automated notifications. Optimize patient flow and reduce wait times.",
    badge: "Efficiency",
    color: "text-primary bg-primary/10 group-hover:bg-primary/20",
  },
];

export function ManagementSection() {
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
            Complete Healthcare Management
          </h2>
          <p className="section-subtitle">
            For hospitals and multi-location networks
          </p>
          <p className="section-description">
            Enterprise-grade operations management including hospital systems, clinic coordination, advanced analytics, and intelligent queue handling. Designed for complex healthcare organizations.
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