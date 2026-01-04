import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  BarChart,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Zap
} from "lucide-react";

export const metadata = {
  title: "Technologies | Groot Analytics",
  description: "Explore our modern technology stack including Databricks, Snowflake, Azure, AWS, GCP, and more.",
};

const techCategories = [
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    techs: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"]
  },
  {
    title: "Data Platforms",
    icon: Database,
    techs: ["Snowflake", "Databricks", "BigQuery", "Synapse Analytics", "MongoDB"]
  },
  {
    title: "Data Engineering",
    icon: Code2,
    techs: ["dbt (Data Build Tool)", "Apache Airflow", "Python/PySpark", "Informatica"]
  },
  {
    title: "Visualization & BI",
    icon: BarChart,
    techs: ["Power BI", "Tableau", "Looker", "ThoughtSpot"]
  },
  {
    title: "Real-time & AI",
    icon: Zap,
    techs: ["Apache Kafka", "Spark Streaming", "Azure Open AI", "Databricks MLflow"]
  },
  {
    title: "Governance & Quality",
    icon: ShieldCheck,
    techs: ["Purview", "Collibra", "Great Expectations", "Monte Carlo"]
  }
];

export default function TechnologiesPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Technologies", href: "/technologies" }
        ]}
      />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Modern Tech Stack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            We are platform-agnostic partners. We help you choose the best-of-breed technologies to build your future-ready data landscape.
          </p>
          <Button variant="hero" size="lg">Request Tech Consultation</Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techCategories.map((cat, index) => (
              <div key={index} className="p-10 rounded-3xl bg-background border border-border group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <cat.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((t, idx) => (
                    <div key={idx} className="px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium hover:bg-primary/5 hover:border-primary/50 transition-all cursor-default">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Logos Placeholder Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Strategic Technology Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold tracking-tighter">MICROSOFT</div>
            <div className="text-2xl font-bold tracking-tighter">AWS</div>
            <div className="text-2xl font-bold tracking-tighter">DATABRICKS</div>
            <div className="text-2xl font-bold tracking-tighter">SNOWFLAKE</div>
            <div className="text-2xl font-bold tracking-tighter">GOOGLE CLOUD</div>
          </div>
        </div>
      </section>
    </main>
  );
}
