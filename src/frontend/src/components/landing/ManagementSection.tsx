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
    <section className="py-24 bg-muted/30 backdrop-blur-xl border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Healthcare Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline hospital and clinic operations with integrated management systems designed for modern healthcare facilities.
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