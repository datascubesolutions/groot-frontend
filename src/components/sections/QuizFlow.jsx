// @ts-nocheck
"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import {
    animate,
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    CheckCircle2,
    Download,
    Mail,
    TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Question weights
const WEIGHTS = {
  q1_platform: 0.2,
  q2_reporting: 0.15,
  q3_pipelines: 0.15,
  q4_trust: 0.2,
  q5_ai: 0.15,
  q6_blocker: 0.1,
  q7_timeline: 0.05,
};

// Answer definitions
const QUIZ_DATA = [
  {
    id: "q1",
    question: "What best describes your current data platform?",
    weight: WEIGHTS.q1_platform,
    options: [
      { id: "no_platform", label: "We don't have one yet", points: 0 },
      {
        id: "spreadsheets",
        label: "Spreadsheets and manual processes",
        points: 15,
      },
      {
        id: "basic_cloud",
        label: "Basic cloud setup (Azure/AWS) but fragmented",
        points: 40,
      },
      {
        id: "modern_struggling",
        label: "Modern lakehouse (Fabric/Databricks) but struggling",
        points: 65,
      },
      { id: "mature", label: "Mature, governed platform", points: 100 },
    ],
  },
  {
    id: "q2",
    question:
      "How long does it take to answer a new business question with data?",
    weight: WEIGHTS.q2_reporting,
    options: [
      { id: "cant", label: "We can't — we don't have the data", points: 0 },
      { id: "days_weeks", label: "Days to weeks", points: 25 },
      { id: "hours", label: "Hours", points: 60 },
      { id: "minutes", label: "Minutes (self-service)", points: 100 },
    ],
  },
  {
    id: "q3",
    question:
      "How often do your data pipelines fail or require manual intervention?",
    weight: WEIGHTS.q3_pipelines,
    options: [
      { id: "daily", label: "Daily", points: 10 },
      { id: "weekly", label: "Weekly", points: 35 },
      { id: "monthly", label: "Monthly", points: 70 },
      { id: "rarely", label: "Rarely — they run themselves", points: 100 },
    ],
  },
  {
    id: "q4",
    question: "Does leadership trust your data enough to make decisions on it?",
    weight: WEIGHTS.q4_trust,
    options: [
      { id: "no_gut", label: "No — they still rely on gut feel", points: 0 },
      {
        id: "sometimes",
        label: "Sometimes — depends on the report",
        points: 35,
      },
      { id: "mostly", label: "Mostly — but there are gaps", points: 70 },
      { id: "yes", label: "Yes — data drives all decisions", points: 100 },
    ],
  },
  {
    id: "q5",
    question: "Where are you on your AI journey?",
    weight: WEIGHTS.q5_ai,
    options: [
      { id: "not_started", label: "Haven't started", points: 20 },
      { id: "exploring", label: "Exploring use cases", points: 45 },
      {
        id: "pilots_struggling",
        label: "Running pilots (but struggling)",
        points: 60,
      },
      { id: "production", label: "Some AI in production", points: 100 },
    ],
  },
  {
    id: "q6",
    question: "What's your biggest data challenge right now?",
    weight: WEIGHTS.q6_blocker,
    options: [
      {
        id: "no_platform",
        label: "No platform / starting from scratch",
        points: 10,
      },
      { id: "siloed", label: "Siloed systems (M&A, legacy)", points: 35 },
      {
        id: "quality_trust",
        label: "Data quality and trust issues",
        points: 40,
      },
      {
        id: "ai_stuck",
        label: "AI pilots not reaching production",
        points: 70,
      },
      { id: "no_expertise", label: "Lack of internal expertise", points: 50 },
    ],
  },
  {
    id: "q7",
    question: "How quickly do you need to show results?",
    weight: WEIGHTS.q7_timeline,
    options: [
      { id: "30_days", label: "30 days", points: 50 },
      { id: "90_days", label: "90 days", points: 75 },
      { id: "6_months", label: "6 months", points: 50 },
      { id: "no_timeline", label: "No specific timeline", points: 25 },
    ],
  },
];

const ScoreGauge = ({ score }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, score, { duration: 2, ease: "circOut" });
    return animation.stop;
    // `count` is a stable Framer Motion value; only `score` should restart the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- count is stable motion value
  }, [score]);

  const needleRotation = (score / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col items-center gap-6">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-none border-[4px] border-foreground bg-card shadow-[12px_12px_0_0_hsl(var(--foreground))]">
        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-32 bg-forest/5 blur-3xl" />

        {/* SVG Arc */}
        <div className="absolute inset-x-6 bottom-4 top-4">
          <svg viewBox="0 0 200 110" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient
                id="gaugeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ef4444" /> {/* Red */}
                <stop offset="25%" stopColor="#f97316" /> {/* Orange */}
                <stop offset="50%" stopColor="#eab308" /> {/* Yellow */}
                <stop offset="75%" stopColor="#84cc16" /> {/* Lime */}
                <stop offset="100%" stopColor="#10b981" /> {/* Emerald */}
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Track */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Colored Arc */}
            <motion.path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="18"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.1 }}
            />

            {/* Ticks/Decorations */}
            <g className="fill-slate-400 text-[9px] font-semibold opacity-70">
              <text x="20" y="118" textAnchor="middle">
                0
              </text>
              <text x="100" y="20" textAnchor="middle">
                50
              </text>
              <text x="180" y="118" textAnchor="middle">
                100
              </text>
            </g>
          </svg>

          {/* Needle */}
          <motion.div
            className="absolute bottom-[6%] left-1/2 z-20 h-[48%] w-1.5 origin-bottom rounded-full bg-slate-900 shadow-lg shadow-foreground/20"
            style={{ translateX: "-50%" }}
            initial={{ rotate: -90 }}
            animate={{ rotate: needleRotation }}
            transition={{
              type: "spring",
              stiffness: 55,
              damping: 14,
              delay: 0.3,
            }}
          >
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-card bg-slate-900 shadow-sm" />
            <div className="absolute bottom-0 left-1/2 z-10 h-9 w-9 -translate-x-1/2 translate-y-1/2 rounded-full border border-slate-700/60 bg-slate-900 shadow-md" />
          </motion.div>
        </div>
      </div>

      {/* Score Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
          Your Readiness Score
        </span>
        <div className="flex items-baseline justify-center gap-1.5">
          <motion.span className="text-5xl font-black tabular-nums leading-none text-foreground sm:text-6xl">
            {rounded}
          </motion.span>
          <span className="text-xl font-semibold text-muted-foreground/70">
            /100
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export function QuizFlow({ onComplete }) {
  const [step, setStep] = useState("intro"); // intro, questions, email, results
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [sendPdf, setSendPdf] = useState(true);
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNextStep, setShowNextStep] = useState(false);
  const advanceTimeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    },
    []
  );

  const currentQuestion = QUIZ_DATA[currentQIndex];
  const progress = ((currentQIndex + 1) / QUIZ_DATA.length) * 100;

  const handleNext = () => {
    setShowNextStep(false);
    if (currentQIndex < QUIZ_DATA.length - 1) {
      setCurrentQIndex((i) => i + 1);
    } else {
      setStep("email");
    }
  };

  const handleAnswerSelect = (val) => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    setShowNextStep(false);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));
    const isLastQuestion = currentQIndex === QUIZ_DATA.length - 1;
    advanceTimeoutRef.current = setTimeout(() => {
      advanceTimeoutRef.current = null;
      if (isLastQuestion) {
        setStep("email");
      } else {
        setCurrentQIndex((i) => i + 1);
      }
    }, 500);
  };

  const handleBack = () => {
    if (currentQIndex > 0) {
      setShowNextStep(true);
      setCurrentQIndex(currentQIndex - 1);
    } else {
      setStep("intro");
    }
  };

  const calculateScore = (finalAnswers) => {
    let totalScore = 0;
    QUIZ_DATA.forEach((q) => {
      const selectedOptionId = finalAnswers[q.id];
      const option = q.options.find((o) => o.id === selectedOptionId);
      if (option) {
        totalScore += option.points * q.weight;
      }
    });
    return Math.round(totalScore);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setStep("results");
    setIsSubmitting(false);
  };

  const renderIntro = () => (
    <motion.div
      className="py-4 text-center sm:py-6"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-card/95 px-5 py-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-8 sm:py-9">
        <div className="pointer-events-none absolute -left-20 -top-16 h-44 w-44 rounded-full bg-forest/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10">
          <motion.span
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mb-4 inline-flex items-center rounded-full border border-forest/20 bg-forest/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest"
          >
            Free Maturity Check
          </motion.span>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4"
      >
        <h2 className="mb-2 text-[2rem] font-extrabold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          Get Your <span className="text-forest">Data Readiness Score</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-8 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg"
      >
        Answer 7 quick questions to find out:
      </motion.p>

      <ul className="mx-auto mb-9 max-w-md space-y-3.5 text-left sm:mb-10">
        {[
          "Where you stand on data maturity",
          "Your recommended starting point",
          "A personalized roadmap",
        ].map((text, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-3.5 rounded-xl border border-border/60 bg-muted/30 px-3 py-2.5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-forest/20 bg-forest/10 text-forest">
              <CheckCircle2 className="h-[18px] w-[18px]" strokeWidth={2.5} />
            </div>
            <span className="text-base font-medium text-foreground/85 sm:text-lg">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-7 flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground sm:mb-8"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest/80 opacity-70"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest"></span>
        </span>
        Takes about 2 minutes
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          onClick={() => setStep("questions")}
          size="lg"
          className="group relative isolate w-full overflow-hidden rounded-xl bg-forest px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_-10px_rgba(6,95,70,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-[0_18px_35px_-12px_rgba(6,95,70,0.6)] sm:w-auto sm:min-w-[260px] sm:px-10 sm:py-6 sm:text-lg"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.22),transparent_55%)]"
            animate={{ opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
          />
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            <span>Start Assessment</span>
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 2.5, 0] }}
              transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </span>
        </Button>
      </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const renderQuestion = () => (
    <div className="px-0 py-2 sm:px-2 sm:py-4">
      <div className="mb-4 flex items-center justify-between sm:mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
          Question {currentQIndex + 1} of {QUIZ_DATA.length}
        </span>
      </div>

      <h3 className="mb-8 min-h-[4rem] text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-[2rem]">
        {currentQuestion.question}
      </h3>

      <RadioGroup
        value={answers[currentQuestion.id]}
        onValueChange={handleAnswerSelect}
        className="mb-12 space-y-4"
      >
        {currentQuestion.options.map((option, index) => {
          const isSelected = answers[currentQuestion.id] === option.id;
          const letter = String.fromCharCode(65 + index);

          return (
            <div key={option.id}>
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={option.id}
                className={cn(
                  "group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-none border-[3px] p-3 shadow-[4px_4px_0_0_hsl(var(--foreground))] transition-all duration-300 sm:p-5 sm:shadow-[6px_6px_0_0_hsl(var(--foreground))] md:p-6",
                  "peer-data-[state=checked]:-translate-y-1 peer-data-[state=checked]:border-forest peer-data-[state=checked]:bg-forest/5 peer-data-[state=checked]:shadow-[4px_4px_0_0_hsl(var(--forest))] sm:peer-data-[state=checked]:shadow-[8px_8px_0_0_hsl(var(--forest))]",
                  "hover:-translate-y-1 hover:border-foreground hover:bg-muted/50 hover:shadow-[6px_6px_0_0_hsl(var(--foreground))] sm:hover:shadow-[10px_10px_0_0_hsl(var(--foreground))]",
                  "border-foreground bg-card"
                )}
              >
                <div className="relative z-10 flex w-full min-w-0 items-center gap-2 pr-2 sm:gap-4 sm:pr-8">
                  {/* Letter Key Box */}
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-none border-[2px] border-foreground text-xs font-bold transition-colors duration-300 sm:h-8 sm:w-8 sm:text-sm",
                      isSelected
                        ? "border-forest bg-forest text-white shadow-sm"
                        : "bg-muted text-muted-foreground group-hover:bg-foreground/10 group-hover:text-foreground/80"
                    )}
                  >
                    {letter}
                  </div>

                  {/* Option Label */}
                  <span
                    className={cn(
                      "w-full whitespace-normal break-words text-sm font-semibold leading-snug transition-colors duration-300 sm:text-lg",
                      isSelected
                        ? "text-forest"
                        : "text-foreground/80 group-hover:text-foreground"
                    )}
                  >
                    {option.label}
                  </span>
                </div>

                {/* Animated Checkmark */}
                <div
                  className={cn(
                    "relative z-10 ml-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-none border-[2px] transition-all duration-300 sm:ml-0 sm:h-6 sm:w-6 sm:border-[3px]",
                    isSelected
                      ? "border-forest bg-forest shadow-[2px_2px_0_0_hsl(var(--foreground))]"
                      : "border-foreground group-hover:border-forest"
                  )}
                >
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                      >
                        <CheckCircle2
                          className="h-4 w-4 text-white"
                          strokeWidth={3}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle Background Interaction (Pulse on active) */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-forest/0 via-forest/5 to-forest/0 mix-blend-multiply"
                      initial={{ opacity: 0, x: "-100%" }}
                      animate={{ opacity: 1, x: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    />
                  )}
                </AnimatePresence>
              </Label>
            </div>
          );
        })}
      </RadioGroup>

      <div className="flex items-center justify-between border-t border-slate-50 pt-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          size="sm"
          className="px-4 text-muted-foreground/70 hover:bg-muted/50 hover:text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
    </div>
  );

  const renderEmailCapture = () => (
    <div className="py-8 text-center">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-forest/5"
      >
        <Mail className="h-10 w-10 text-forest" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-3 text-3xl font-bold text-foreground"
      >
        Almost there!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mx-auto mb-8 max-w-sm text-base text-muted-foreground"
      >
        Where should we send your results and personalized roadmap?
      </motion.p>

      <form onSubmit={handleEmailSubmit} className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-left">
          <Label
            htmlFor="email"
            className="ml-1 text-sm font-bold text-foreground/80"
          >
            Work Email
          </Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-border pl-11 focus:border-forest focus:ring-forest/20"
            />
            <Mail className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground/70" />
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4 text-left">
          <input
            type="checkbox"
            id="sendPdf"
            checked={sendPdf}
            onChange={(e) => setSendPdf(e.target.checked)}
            className="mt-1 h-5 w-5 rounded border-slate-300 text-forest focus:ring-forest"
          />
          <Label
            htmlFor="sendPdf"
            className="cursor-pointer select-none text-muted-foreground"
          >
            <span className="block text-sm font-bold text-foreground">
              Send me the AI Roadmap PDF
            </span>
            <span className="text-xs text-muted-foreground">
              Includes our 2026 data strategy guide.
            </span>
          </Label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full rounded-xl bg-forest py-6 text-lg font-bold text-white shadow-xl shadow-forest/20 transition-all hover:-translate-y-0.5 hover:bg-forest/90"
        >
          {isSubmitting ? "Calculating Score..." : "Get My Score"}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>

        <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground/70">
          <CheckCircle2 className="h-3 w-3" /> No spam, we promise.
        </p>
      </form>
    </div>
  );

  const getRecommendation = (score) => {
    if (score <= 35) {
      return {
        stage: "Foundation Gap",
        bucket: "Fabric-Ready Foundation",
        description:
          "Your data platform needs work before you can drive reliable insights or enable AI. You're not alone — most companies we work with start here.",
        issues: [
          "Platform fragmentation",
          "Pipeline reliability",
          "Data governance gaps",
        ],
        solution:
          "We deploy Azure + Fabric + Purview to give you a governed, production-grade data platform.",
        color: "text-rose-600",
        bgColor: "bg-card",
        borderColor: "border-border",
        progressColor: "bg-rose-500",
      };
    } else if (score <= 65) {
      return {
        stage: "Decision Gap",
        bucket: "Decision Intelligence Engine",
        description:
          "You have a foundation, but you're not getting the insights and trust you need from your data. Leadership is still making decisions on gut feel.",
        issues: [
          "Dashboards not trusted",
          "Self-service gaps",
          "Data quality concerns",
        ],
        solution:
          "We build Power BI dashboards on a semantic layer your leadership will actually trust.",
        color: "text-amber-600",
        bgColor: "bg-card",
        borderColor: "border-border",
        progressColor: "bg-amber-500",
      };
    } else {
      return {
        stage: "AI Ready",
        bucket: "Production-Grade AI Foundry",
        description:
          "Your foundation is solid — you're ahead of most. Now it's time to accelerate AI initiatives and get pilots into production.",
        issues: [
          "AI pilots not reaching production",
          "MLOps gaps",
          "Copilot readiness",
        ],
        solution:
          "We architect AI Foundry and Copilot on your governed data so pilots actually ship to production.",
        color: "text-forest",
        bgColor: "bg-forest/5",
        borderColor: "border-forest/20",
        progressColor: "bg-forest",
      };
    }
  };

  const renderResults = () => {
    const rec = getRecommendation(score);
    return (
      <div className="py-2 sm:py-6">
        {/* Score Section */}
        <motion.div
          className="relative mb-10 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScoreGauge score={score} />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <div
              className={cn(
                "inline-flex items-center gap-2.5 rounded-full border bg-opacity-70 px-5 py-2 text-base font-bold tracking-wide shadow-sm backdrop-blur-sm",
                rec.bgColor,
                rec.borderColor,
                rec.color
              )}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full shadow-inner",
                  rec.progressColor
                )}
              />
              {rec.stage}
            </div>
          </motion.div>
        </motion.div>

        {/* Breakdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={cn(
            "relative mb-8 overflow-hidden rounded-3xl border p-6 shadow-lg sm:p-8",
            rec.bgColor,
            rec.borderColor
          )}
        >
          {/* Subtle pattern background */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

          <div className="relative z-10">
            <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
              <span className="inline-block h-6 w-1 rounded-full bg-slate-900" />
              Overview
            </h4>
            <p className="mb-6 text-lg font-medium leading-relaxed text-foreground/80">
              {rec.description}
            </p>

            <div className="rounded-2xl border border-white/50 bg-card/60 p-5 shadow-sm backdrop-blur-md">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground opacity-80">
                Key Improvements Required:
              </h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {rec.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-medium text-foreground/80"
                  >
                    <CheckCircle2
                      className={cn("mt-0.5 h-5 w-5 shrink-0", rec.color)}
                    />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Recommendation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="group relative mb-8 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-2xl ring-1 ring-border/50 sm:p-8"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-forest to-slate-900" />
          <div className="absolute right-0 top-0 p-8 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
            <TrendingUp size={140} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Recommended Starting Point
                </h4>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {rec.bucket}
                </h3>
                <p className="mb-6 max-w-lg text-lg leading-relaxed text-slate-300 sm:mb-0">
                  {rec.solution}
                </p>
              </div>

              <div className="w-full shrink-0 sm:w-auto">
                <Button
                  className="h-auto w-full rounded-xl bg-white px-4 py-4 text-sm font-bold text-forest shadow-lg transition-all hover:scale-105 hover:bg-forest/5 hover:text-forest/90 sm:w-auto sm:px-8 sm:py-6 sm:text-base"
                  onClick={() =>
                    (window.location.href =
                      "/services/define-your-roadmap/maturity-assessment")
                  }
                >
                  <span>Explore Solution</span>{" "}
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="h-auto flex-1 whitespace-normal break-words rounded-xl bg-forest py-4 text-center text-sm font-bold text-white shadow-xl shadow-forest/20 transition-all hover:-translate-y-1 hover:bg-forest hover:shadow-forest/40 sm:text-lg">
            <Download className="mr-2 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            <span>Download AI Roadmap</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto flex-1 whitespace-normal break-words rounded-xl border-2 border-border py-4 text-center text-sm font-bold text-foreground/80 transition-all hover:border-slate-300 hover:bg-muted/50 sm:text-lg"
          >
            <Calendar className="mr-2 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            <span>Book a 30-min Call</span>
          </Button>
        </motion.div>

        <div className="border-t border-border/60 pt-6 text-center">
          <p className="text-sm text-muted-foreground/70">
            Full analysis sent to{" "}
            <span className="font-bold text-foreground">{email}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Top-Mounted Premium Progress Bar */}
      {step === "questions" && (
        <div className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-muted">
          <motion.div
            className="h-full bg-forest"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "circOut" }}
          />
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={step === "questions" ? `${step}-${currentQIndex}` : step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === "intro" && renderIntro()}
          {step === "questions" && renderQuestion()}
          {step === "email" && renderEmailCapture()}
          {step === "results" && renderResults()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
