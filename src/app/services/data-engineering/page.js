import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { TextFlip } from "@/components/ui/TextFlip";
import {
  Activity,
  ArrowRight,
  Cloud,
  Database,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Data Engineering Services | Groot Analytics",
  description: "Build scalable, modern data infrastructure with cloud-native architectures and real-time pipelines.",
};

export default function DataEngineeringPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: "Data Engineering", href: "/services/data-engineering" }
        ]}
      />

      <section className="relative min-h-[60vh] flex items-center justify-center bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <TextFlip
            as="h1"
            text="Data Engineering & Modern Platforms"
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Build the foundation for data-driven decisions with scalable, reliable, and modern data infrastructure.
          </p>
          <Button variant="hero" size="lg">Get Started</Button>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="10B+" label="Records Processed Daily" />
            <StatCard value="99.9%" label="Platform Uptime" />
            <StatCard value="500+" label="Pipelines Built" />
            <StatCard value="50%" label="Cost Reduction Average" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Data Engineering Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cloud architecture to real-time processing, we build data systems that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Cloud}
              title="Multi-Cloud Data Platforms"
              description="Architect and build unified data platforms on Azure (Fabric, Databricks), AWS (Glue, EMR), or GCP (BigQuery, Dataproc). We ensure portability and scalability."
              href="/services/data-engineering/cloud-data-architecture-design"
            />
            <ServiceCard
              icon={Zap}
              title="Data Processing & Orchestration"
              description="Build robust ETL/ELT pipelines using Apache Spark, Airflow, and dbt. enhanced by Python and PySpark for complex transformations."
              href="/services/data-engineering/data-pipeline-development"
            />
            <ServiceCard
              icon={Database}
              title="Modern Data Warehousing"
              description="Implement enterprise-grade warehouses with Snowflake, Azure Synapse, Amazon Redshift, or Google BigQuery. Optimized for high-performance analytics."
              href="/services/data-engineering/data-lake-warehouse-implementation"
            />
            <ServiceCard
              icon={Activity}
              title="Real-Time Streaming"
              description="Ingest and process real-time data streams using Apache Kafka, Spark Streaming, or cloud-native services like AWS Kinesis and Azure Event Hubs."
              href="/services/data-engineering/real-time-data-processing"
            />
            <ServiceCard
              icon={Shield}
              title="Data Governance & Quality"
              description="Ensure data trust with Great Expectations, dbt tests, and governance tools like Azure Purview and AWS Glue Data Catalog."
              href="/services/data-engineering/data-quality-observability"
            />
            <ServiceCard
              icon={ArrowRight}
              title="Migration & Modernization"
              description="Seamlessly migrate legacy on-prem systems (SQL Server, Hadoop) to modern cloud infrastructure with zero business disruption."
              href="/services/data-engineering/platform-migration-modernization"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Groot for Data Engineering?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WhyCard
                title="Cloud-Native Expertise"
                text="We've built data platforms on all major clouds. We know what works and what doesn't."
              />
              <WhyCard
                title="Modern Stack"
                text="We use the latest tools and frameworks—Databricks, Snowflake, dbt, Airflow, Kafka, and more."
              />
              <WhyCard
                title="Cost Optimization"
                text="We design for performance AND cost. Our clients typically see 30-50% cost reduction."
              />
              <WhyCard
                title="Production-Ready"
                text="We build for scale from day one. Monitoring, alerting, disaster recovery—all included."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Data Platform?</h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss your data infrastructure needs and design the right solution.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button variant="hero" size="lg" className="px-8">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <Link href={href || "#"} className="inline-flex items-center text-primary font-medium hover:underline">
        Learn More <span className="ml-1">→</span>
      </Link>
    </div>
  );
}

function WhyCard({ title, text }) {
  return (
    <div className="p-6">
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
