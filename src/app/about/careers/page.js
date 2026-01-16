import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Filter,
  MapPin,
  Search
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers | Groot Analytics",
  description: "Join our team of data experts and help build the future of intelligent decision systems.",
};

const jobPositions = [
  {
    title: "Senior Data Engineer",
    department: "Data Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years (Spark/Databricks)",
  },
  {
    title: "Analytics Engineer",
    department: "Business Intelligence",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ years (dbt/Snowflake)",
  },
  {
    title: "AI & ML Practitioner",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years (Python/PyTorch)",
  },
  {
    title: "Data Strategy Consultant",
    department: "Advisory",
    location: "London / New York",
    type: "Full-time",
    experience: "7+ years (Multi-Cloud)",
  },
  {
    title: "Platform Architect (Cloud)",
    department: "Data Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "8+ years (Azure/AWS)",
  },
  {
    title: "Junior Data Analyst",
    department: "Business Intelligence",
    location: "Remote",
    type: "Full-time",
    experience: "1+ year (SQL/Power BI)",
  }
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      <Breadcrumb
        items={[
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/about/careers" }
        ]}
      />

      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Join the Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're looking for passionate data practitioners who love solving complex problems and building state-of-the-art systems.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search for roles (e.g. Data Engineer)..."
                className="w-full h-16 pl-12 pr-6 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter size={18} className="text-muted-foreground mr-2" />
            <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">All Roles</button>
            <button className="px-6 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary transition-colors">Engineering</button>
            <button className="px-6 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary transition-colors">Analytics</button>
            <button className="px-6 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary transition-colors">Strategy</button>
            <button className="px-6 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary transition-colors">AI / ML</button>
          </div>
        </div>
      </section>

      {/* Job List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-4">
            {jobPositions.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see the right role?</h3>
            <p className="text-muted-foreground mb-8">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <Button variant="outline" size="lg">Send General Application</Button>
          </div>
        </div>
      </section>

      {/* Why Groot Section Teaser */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="bg-background border border-primary/10 rounded-[3rem] p-12 md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Why Groot Analytics?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learn about our culture, benefits, and the impact you'll make from day one.
              </p>
              <Button variant="hero" asChild>
                <Link href="/about/why-join-us" prefetch={true}>Learn More About Groot Culture</Link>
              </Button>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="text-6xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Remote Flexibility</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function JobCard({ job }) {
  return (
    <div className="group p-8 bg-background rounded-3xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {job.department}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary">
            <Clock size={12} /> {job.type}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
          <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.experience}</span>
        </div>
      </div>
      <div className="group-hover:translate-x-2 transition-transform">
        <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowRight size={24} />
        </div>
      </div>
    </div>
  )
}
