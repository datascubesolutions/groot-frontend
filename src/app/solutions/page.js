// @ts-nocheck
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  BarChart,
  Lightbulb,
  Settings,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Solutions | Groot Analytics",
  description:
    "End-to-end data and AI solutions tailored to solve specific business problems.",
};

const solutions = [
  {
    title: "Executive Decision Intelligence",
    description:
      "Real-time executive dashboards built on Power BI and Tableau, powered by automated data pipelines using Airflow and dbt.",
    icon: Lightbulb,
  },
  {
    title: "Customer 360 & Personalization",
    description:
      "Unified customer data platforms on Snowflake or Databricks that drive deep personalization using reverse ETL tools.",
    icon: Target,
  },
  {
    title: "Supply Chain & Operations AI",
    description:
      "Optimize logistics and inventory with predictive models built on Azure Machine Learning and deployed via Kubernetes.",
    icon: Settings,
  },
  {
    title: "Financial Governance & Compliance",
    description:
      "Automated regulatory reporting and fraud detection systems leveraging Azure Purview and AWS Glue for end-to-end lineage.",
    icon: ShieldCheck,
  },
  {
    title: "Sales & Growth Analytics",
    description:
      "Revenue attribution and churn prediction models built in Python/PySpark to forecast growth with 95%+ accuracy.",
    icon: BarChart,
  },
  {
    title: "Self-Service Analytics Engine",
    description:
      "Governed semantic layers on Azure Synapse or BigQuery that empower business users to explore data securely.",
    icon: Zap,
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      <Breadcrumb items={[{ label: "Solutions", href: "/solutions" }]} />

      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-border bg-background">
        <div className="container z-10 mx-auto px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Impact-Driven Solutions
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground md:text-2xl">
            We don&apos;t just build technology. We solve business problems
            using the power of data and AI.
          </p>
          <Button variant="hero" size="lg">
            Discuss Your Challenges
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-border bg-background p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <solution.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{solution.title}</h3>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 font-bold text-primary transition-transform group-hover:translate-x-2"
                >
                  Learn More <span className="ml-2">→</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="bg-muted/20 py-24">
        <div className="container mx-auto px-6">
          <div className="items-center gap-16 rounded-[3rem] border border-border bg-background p-12 md:flex">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                Featured Transformation
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Reducing Supply Chain Costs by 22%
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                Discover how we implemented a real-time predictive logistics
                platform for a global manufacturing leader, resulting in
                millions of dollars in annual savings.
              </p>
              <Button variant="hero" size="lg">
                Read Case Study
              </Button>
            </div>
            <div className="flex aspect-video items-center justify-center rounded-[2rem] border border-border bg-gradient-to-br from-primary/20 to-secondary/20 md:w-1/2">
              <BarChart size={100} className="text-primary/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
