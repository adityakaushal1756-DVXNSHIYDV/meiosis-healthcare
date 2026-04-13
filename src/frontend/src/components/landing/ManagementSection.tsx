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
    <section className="section-wrapper bg-muted/30 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="section-header"
        >
          <h2 className="section-title">
            Complete Healthcare Management
          </h2>
          <p className="section-description">
            Streamline hospital and clinic operations with integrated management systems designed for modern healthcare facilities.
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