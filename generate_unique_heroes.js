const fs = require('fs');
const path = require('path');

const dir = '/home/hexylon/Datascube/groot/groot-frontend/src/components/sections/microsoft';
const pagesDir = '/home/hexylon/Datascube/groot/groot-frontend/src/app/microsoft';

const heroes = {
  fabric: {
    component: 'FabricHero',
    badgeIcon: 'Database',
    badgeText: '20+ Fabric Implementations',
    title: 'Microsoft Fabric',
    subtitle: 'One platform. All your data. From raw ingestion to board-ready dashboards — unified, governed, and ready for AI.',
    ctaText: 'Get Readiness Assessment',
    ctaLink: '/contact?service=fabric-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-forest/5 rounded-full blur-3xl" />
        {/* Central OneLake */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 40px rgba(var(--primary-rgb), 0.3)", "0 0 0px rgba(0,0,0,0)"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-forest absolute z-20 flex items-center justify-center shadow-xl border border-white/20"
        >
          <Database className="w-12 h-12 text-white" />
        </motion.div>

        {/* Orbiting nodes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute z-10 w-16 h-16 rounded-2xl bg-white shadow-lg border border-border flex items-center justify-center"
            animate={{
              rotate: 360,
              x: Math.cos(i * (Math.PI * 2 / 5)) * 140,
              y: Math.sin(i * (Math.PI * 2 / 5)) * 140
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
             <div className="w-6 h-6 rounded-full bg-primary/20" />
          </motion.div>
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <motion.circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" className="text-border" strokeWidth="1" strokeDasharray="4 4"
             animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }}
          />
        </svg>
      </div>
    `
  },
  'power-bi': {
    component: 'PowerBIHero',
    badgeIcon: 'BarChart3',
    badgeText: '100+ Dashboards Delivered',
    title: 'Power BI',
    subtitle: 'Dashboards people actually use. Self-service analytics with the guardrails that keep Finance from losing sleep.',
    ctaText: 'Get Dashboard Assessment',
    ctaLink: '/contact?service=powerbi-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-end justify-center gap-4 pb-12">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

        {[40, 70, 45, 90, 60, 100].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: height + '%', opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 + 0.5, type: "spring" }}
            className="w-12 rounded-t-lg bg-gradient-to-t relative group"
            style={{
              background: i === 5 ? "linear-gradient(to top, hsl(162, 82%, 20%), hsl(168, 76%, 46%))" : "linear-gradient(to top, var(--border), var(--muted))"
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {height}%
            </motion.div>
          </motion.div>
        ))}

        {/* Floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 p-4 bg-white rounded-2xl shadow-xl border border-border"
        >
          <div className="w-16 h-16 rounded-full border-4 border-primary border-t-forest border-r-forest" />
        </motion.div>
      </div>
    `
  },
  copilot: {
    component: 'CopilotHero',
    badgeIcon: 'Sparkles',
    badgeText: '100+ Copilot Rollouts',
    title: 'Microsoft Copilot',
    subtitle: 'AI that knows your business. Deploy it right, and people use it. Deploy it wrong, and it becomes expensive shelfware.',
    ctaText: 'Get Readiness Assessment',
    ctaLink: '/contact?service=copilot-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-radial from-primary/10 to-transparent blur-2xl" />

        {/* Central AI Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-40 h-40 rounded-full bg-gradient-to-tr from-primary via-forest to-teal opacity-90 blur-md absolute z-10"
        />
        <div className="w-32 h-32 rounded-full bg-white z-20 shadow-2xl flex items-center justify-center relative border border-white/50">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>

        {/* Floating Chat Bubbles */}
        {[
          { text: "Summarize the Q3 report", x: -120, y: -100, delay: 0 },
          { text: "Draft an email to the client", x: 100, y: -60, delay: 1 },
          { text: "Analyze this dataset", x: -80, y: 120, delay: 2 },
          { text: "Create presentation slides", x: 120, y: 80, delay: 3 }
        ].map((bubble, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [bubble.y + 20, bubble.y, bubble.y - 10, bubble.y - 30] }}
            transition={{ duration: 6, delay: bubble.delay, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
            className="absolute z-30 px-4 py-3 bg-white shadow-lg rounded-2xl rounded-bl-sm border border-border text-sm font-medium text-foreground/80 max-w-[150px] whitespace-nowrap"
            style={{ left: "calc(50% + " + bubble.x + "px)", top: "calc(50% + " + bubble.y + "px)" }}
          >
            {bubble.text}
          </motion.div>
        ))}
      </div>
    `
  },
  'ai-foundry': {
    component: 'AIFoundryHero',
    badgeIcon: 'Cpu',
    badgeText: 'Enterprise AI That Ships',
    title: 'Azure AI Foundry',
    subtitle: 'From prototype to production. The platform for building AI applications that actually ship.',
    ctaText: 'Discuss Your AI Project',
    ctaLink: '/contact?service=ai-foundry',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 rounded-full blur-3xl" />

        {/* Neural Network Grid */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                backgroundColor: ["#ffffff", "hsl(168, 76%, 46%)", "#ffffff"],
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(var(--primary-rgb), 0.5)", "0 0 0px rgba(0,0,0,0)"]
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 3
              }}
              className="w-12 h-12 rounded-xl border border-border bg-white flex items-center justify-center shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </motion.div>
          ))}
        </div>

        {/* Background connecting lines (simulated with SVG) */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <pattern id="grid" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M 70 0 L 0 0 0 70" fill="none" stroke="hsl(168, 76%, 46%)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    `
  },
  purview: {
    component: 'PurviewHero',
    badgeIcon: 'ShieldAlert',
    badgeText: 'Governance That Works',
    title: 'Microsoft Purview',
    subtitle: 'Data governance that gets used. Discovery, lineage, classification, and policy — across your actual data estate.',
    ctaText: 'Get Governance Assessment',
    ctaLink: '/contact?service=purview-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />

        {/* Central Shield */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 w-40 h-40 bg-white rounded-3xl shadow-2xl border border-border flex items-center justify-center"
        >
          <ShieldAlert className="w-16 h-16 text-primary" />

          {/* Scanning radar line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
          >
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-transparent origin-bottom-right" />
          </motion.div>
        </motion.div>

        {/* Floating Data Assets being scanned */}
        {[
          { icon: 'FileText', x: -140, y: -80, delay: 0 },
          { icon: 'Database', x: 140, y: -40, delay: 0.5 },
          { icon: 'Cloud', x: -120, y: 100, delay: 1 },
          { icon: 'Server', x: 120, y: 120, delay: 1.5 }
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{
              y: [item.y - 10, item.y + 10, item.y - 10],
              borderColor: ["#e5e7eb", "hsl(168, 76%, 46%)", "#e5e7eb"]
            }}
            transition={{ duration: 4, delay: item.delay, repeat: Infinity }}
            className="absolute z-10 w-16 h-16 bg-white rounded-xl shadow-md border-2 border-border flex items-center justify-center"
            style={{ left: "calc(50% + " + item.x + "px)", top: "calc(50% + " + item.y + "px)" }}
          >
            <div className="w-6 h-6 bg-muted rounded-md" />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, delay: item.delay + 0.5, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            />
          </motion.div>
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
          <motion.path
            d="M 50% 50% L 20% 30% M 50% 50% L 80% 40% M 50% 50% L 25% 75% M 50% 50% L 75% 80%"
            stroke="hsl(168, 76%, 46%)" strokeWidth="2" strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    `
  },
  azure: {
    component: 'AzureHero',
    badgeIcon: 'Server',
    badgeText: 'Sensitive Workload Infra',
    title: 'Azure Data Infrastructure',
    subtitle: 'The foundation beneath your data platform. Storage, networking, security — configured for enterprise analytics.',
    ctaText: 'Get Infrastructure Assessment',
    ctaLink: '/contact?service=azure-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent blur-2xl" />

        {/* Isometric Servers Stacking */}
        <div className="relative z-10 w-64 h-64 flex flex-col items-center justify-end perspective-1000">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
              className="w-48 h-16 bg-white rounded-lg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-border mb-4 relative overflow-hidden flex items-center px-6"
            >
              {/* Server lights */}
              <div className="flex gap-2 w-full">
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: i }} className="w-2 h-2 rounded-full bg-primary" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i+0.2 }} className="w-2 h-2 rounded-full bg-forest" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.2, repeat: Infinity, delay: i+0.4 }} className="w-2 h-2 rounded-full bg-teal" />
                <div className="ml-auto w-12 h-2 rounded-full bg-muted" />
              </div>

              {/* Data flow pulse */}
              <motion.div
                animate={{ x: [-100, 200] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12"
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Clouds */}
        <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-10 text-muted/30">
          <Cloud className="w-24 h-24" />
        </motion.div>
        <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-20 right-10 text-muted/30">
          <Cloud className="w-32 h-32" />
        </motion.div>
      </div>
    `
  },
  devops: {
    component: 'DevOpsHero',
    badgeIcon: 'GitBranch',
    badgeText: 'DataOps specifically for Data',
    title: 'Azure DevOps (DataOps)',
    subtitle: "Engineering discipline for analytics. Version control, CI/CD, and testing — because 'I'll just update production' isn't a deployment strategy.",
    ctaText: 'Assess DataOps Maturity',
    ctaLink: '/contact?service=devops-assessment',
    visual: `
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-forest/5 blur-3xl opacity-50" />

        {/* Animated Pipeline path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <path id="pipelinePath" d="M 50 100 Q 150 20 200 100 T 350 100" fill="none" stroke="hsl(var(--border))" strokeWidth="4" strokeLinecap="round" />
          <motion.path
            d="M 50 100 Q 150 20 200 100 T 350 100"
            fill="none"
            stroke="hsl(168, 76%, 46%)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Pipeline stages */}
        <div className="absolute flex justify-between w-[300px] z-10 mt-10">
          {['Dev', 'Test', 'Prod'].map((stage, i) => (
            <div key={i} className="flex flex-col items-center gap-2 bg-white/80 p-2 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold text-foreground">{stage}</span>
            </div>
          ))}
        </div>

        {/* Moving data packets */}
        <motion.div
           animate={{
             x: [0, 300],
             y: [0, -60, 0, 60, 0]
           }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           className="absolute z-20 w-6 h-6 bg-primary rounded-md shadow-lg shadow-primary/40 left-[calc(50%-150px)] top-[calc(50%-10px)]"
        />
        <motion.div
           animate={{
             x: [0, 300],
             y: [0, -60, 0, 60, 0]
           }}
           transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
           className="absolute z-20 w-6 h-6 bg-forest rounded-md shadow-lg shadow-forest/40 left-[calc(50%-150px)] top-[calc(50%-10px)]"
        />
      </div>
    `
  }
};

const imports = '"use client";\\nimport { motion } from "framer-motion";\\nimport { ArrowRight, Database, BarChart3, Sparkles, Cpu, ShieldAlert, FileText, Server, Cloud, GitBranch, CheckCircle } from "lucide-react";\\nimport Link from "next/link";\\nimport { Button } from "@/components/ui/Button";\\n\\n';

Object.entries(heroes).forEach(([key, config]) => {
  const code = imports + "export function " + config.component + "() {\\n" +
    "  return (\\n" +
    "    <section className=\\"relative min-h - [70vh] flex items - center overflow - hidden pt - 32 pb - 16 bg - grid - slate - 50 / 50\\">\\n" +
      "      <div className=\\"absolute inset - 0 bg - background / 90\\" />\\n" +
        "      \\n" +
        "      <div className=\\"container mx - auto px - 6 relative z - 10 w - full max - w - 7xl\\">\\n" +
          "        <div className=\\"grid lg: grid - cols - 2 gap - 12 lg: gap - 16 items - center\\">\\n" +
            "          {/* Left content */}\\n" +
            "          <div className=\\"space - y - 8\\">\\n" +
              "            <motion.div\\n" +
              "              initial={{ opacity: 0, y: 20 }}\\n" +
              "              animate={{ opacity: 1, y: 0 }}\\n" +
              "              transition={{ delay: 0.1 }}\\n" +
              "              className=\\"inline - flex items - center gap - 2 px - 4 py - 2 rounded - full bg - primary / 10 border border - primary / 20\\"\\n" +
                "            >\\n" +
                "              <" + config.badgeIcon + " className=\\"w - 4 h - 4 text - primary\\" />\\n" +
                  "              <span className=\\"text - sm font - bold uppercase tracking - wider text - primary\\">\\n" +
                    "                " + config.badgeText + "\\n" +
                    "              </span>\\n" +
                    "            </motion.div>\\n" +
                    "\\n" +
                    "            <motion.h1\\n" +
                    "              initial={{ opacity: 0, y: 20 }}\\n" +
                    "              animate={{ opacity: 1, y: 0 }}\\n" +
                    "              transition={{ delay: 0.2 }}\\n" +
                    "              className=\\"text - 4xl md: text - 5xl lg: text - 6xl font - bold leading - tight text - foreground\\"\\n" +
                      "            >\\n" +
                      "              " + config.title + "\\n" +
                      "            </motion.h1>\\n" +
                      "\\n" +
                      "            <motion.p\\n" +
                      "              initial={{ opacity: 0, y: 20 }}\\n" +
                      "              animate={{ opacity: 1, y: 0 }}\\n" +
                      "              transition={{ delay: 0.3 }}\\n" +
                      "              className=\\"text - xl text - muted - foreground leading - relaxed\\"\\n" +
                        "            >\\n" +
                        "              " + config.subtitle + "\\n" +
                        "            </motion.p>\\n" +
                        "\\n" +
                        "            <motion.div\\n" +
                        "              initial={{ opacity: 0, y: 20 }}\\n" +
                        "              animate={{ opacity: 1, y: 0 }}\\n" +
                        "              transition={{ delay: 0.4 }}\\n" +
                        "              className=\\"flex flex - col sm: flex - row gap - 4 pt - 4\\"\\n" +
                          "            >\\n" +
                          "              <Link href=\\"" + config.ctaLink + "\\">\\n" +
                            "                <Button variant=\\"hero\\" size=\\"xl\\" className=\\"w - full sm: w - auto group shadow - lg shadow - primary / 20\\">\\n" +
                              "                  " + config.ctaText + "\\n" +
                              "                  <ArrowRight className=\\"w - 5 h - 5 ml - 2 transition - transform group - hover: translate - x - 1\\" />\\n" +
                                "                </Button>\\n" +
                                "              </Link>\\n" +
                                "            </motion.div>\\n" +
                                "          </div>\\n" +
                                "\\n" +
                                "          {/* Right visualization */}\\n" +
                                "          <motion.div\\n" +
                                "            initial={{ opacity: 0, scale: 0.9 }}\\n" +
                                "            animate={{ opacity: 1, scale: 1 }}\\n" +
                                "            transition={{ delay: 0.3, duration: 0.8 }}\\n" +
                                "            className=\\"hidden lg:block relative\\"\\n" +
                                  "          >\\n" +
                                  "            <div className=\\"absolute inset - 0 bg - white rounded - 3xl shadow - xl transform rotate - 3 scale - 105 pointer - events - none opacity - 50\\" />\\n" +
                                    "            <div className=\\"absolute inset - 0 bg - white / 50 rounded - 3xl shadow - xl transform - rotate - 2 scale - 105 pointer - events - none opacity - 50\\" />\\n" +
                                      "            <div className=\\"relative bg - white rounded - 3xl shadow - 2xl border border - border overflow - hidden\\">\\n" +
                                        "              " + config.visual + "\\n" +
                                        "            </div>\\n" +
                                        "          </motion.div>\\n" +
                                        "        </div>\\n" +
                                        "      </div>\\n" +
                                        "    </section>\\n" +
                                        "  );\\n" +
                                        "}\\n";

  fs.writeFileSync(path.join(dir, config.component + '.jsx'), code);
  console.log('Created ' + config.component);

  // Replace in page.js
  const pageFile = path.join(pagesDir, key, 'page.js');
  let pageContent = fs.readFileSync(pageFile, 'utf8');

  // Match the MicrosoftHero import
  const importRegex = /import \{ MicrosoftHero \} from "@\\/components\\/sections\\/microsoft\\/MicrosoftHero";/g;
  pageContent = pageContent.replace(importRegex, "import { " + config.component + " } from \\"@/components/sections / microsoft / " + config.component + "\\";");

  // Match the MicrosoftHero component call
  const componentRegex = /<MicrosoftHero[\\s\\S]*?\\/ >/g;
  pageContent = pageContent.replace(componentRegex, "<" + config.component + " />");

  fs.writeFileSync(pageFile, pageContent);
  console.log('Updated ' + key + '/page.js');
});
