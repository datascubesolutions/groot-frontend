"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { animate, AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Download,
  Mail,
  TrendingUp
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Question weights
const WEIGHTS = {
  q1_platform: 0.20,
  q2_reporting: 0.15,
  q3_pipelines: 0.15,
  q4_trust: 0.20,
  q5_ai: 0.15,
  q6_blocker: 0.10,
  q7_timeline: 0.05
};

// Answer definitions
const QUIZ_DATA = [
  {
    id: "q1",
    question: "What best describes your current data platform?",
    weight: WEIGHTS.q1_platform,
    options: [
      { id: "no_platform", label: "We don't have one yet", points: 0 },
      { id: "spreadsheets", label: "Spreadsheets and manual processes", points: 15 },
      { id: "basic_cloud", label: "Basic cloud setup (Azure/AWS) but fragmented", points: 40 },
      { id: "modern_struggling", label: "Modern lakehouse (Fabric/Databricks) but struggling", points: 65 },
      { id: "mature", label: "Mature, governed platform", points: 100 },
    ]
  },
  {
    id: "q2",
    question: "How long does it take to answer a new business question with data?",
    weight: WEIGHTS.q2_reporting,
    options: [
      { id: "cant", label: "We can't — we don't have the data", points: 0 },
      { id: "days_weeks", label: "Days to weeks", points: 25 },
      { id: "hours", label: "Hours", points: 60 },
      { id: "minutes", label: "Minutes (self-service)", points: 100 },
    ]
  },
  {
    id: "q3",
    question: "How often do your data pipelines fail or require manual intervention?",
    weight: WEIGHTS.q3_pipelines,
    options: [
      { id: "daily", label: "Daily", points: 10 },
      { id: "weekly", label: "Weekly", points: 35 },
      { id: "monthly", label: "Monthly", points: 70 },
      { id: "rarely", label: "Rarely — they run themselves", points: 100 },
    ]
  },
  {
    id: "q4",
    question: "Does leadership trust your data enough to make decisions on it?",
    weight: WEIGHTS.q4_trust,
    options: [
      { id: "no_gut", label: "No — they still rely on gut feel", points: 0 },
      { id: "sometimes", label: "Sometimes — depends on the report", points: 35 },
      { id: "mostly", label: "Mostly — but there are gaps", points: 70 },
      { id: "yes", label: "Yes — data drives all decisions", points: 100 },
    ]
  },
  {
    id: "q5",
    question: "Where are you on your AI journey?",
    weight: WEIGHTS.q5_ai,
    options: [
      { id: "not_started", label: "Haven't started", points: 20 },
      { id: "exploring", label: "Exploring use cases", points: 45 },
      { id: "pilots_struggling", label: "Running pilots (but struggling)", points: 60 },
      { id: "production", label: "Some AI in production", points: 100 },
    ]
  },
  {
    id: "q6",
    question: "What's your biggest data challenge right now?",
    weight: WEIGHTS.q6_blocker,
    options: [
      { id: "no_platform", label: "No platform / starting from scratch", points: 10 },
      { id: "siloed", label: "Siloed systems (M&A, legacy)", points: 35 },
      { id: "quality_trust", label: "Data quality and trust issues", points: 40 },
      { id: "ai_stuck", label: "AI pilots not reaching production", points: 70 },
      { id: "no_expertise", label: "Lack of internal expertise", points: 50 },
    ]
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
    ]
  }
];

const ScoreGauge = ({ score }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, score, { duration: 2, ease: "circOut" });
    return animation.stop;
  }, [score]);

  const needleRotation = (score / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <div className="w-full max-w-[360px] mx-auto flex flex-col items-center gap-6">
      <div className="relative w-full aspect-[2/1] rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] border border-slate-100 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-x-6 bottom-0 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />

        {/* SVG Arc */}
        <div className="absolute inset-x-6 bottom-4 top-4">
          <svg viewBox="0 0 200 110" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <g className="text-[9px] font-semibold fill-slate-400 opacity-70">
              <text x="20" y="118" textAnchor="middle">0</text>
              <text x="100" y="20" textAnchor="middle">50</text>
              <text x="180" y="118" textAnchor="middle">100</text>
            </g>
          </svg>

          {/* Needle */}
          <motion.div
            className="absolute bottom-[6%] left-1/2 w-1.5 h-[48%] bg-slate-900 origin-bottom rounded-full z-20 shadow-lg shadow-slate-900/40"
            style={{ translateX: "-50%" }}
            initial={{ rotate: -90 }}
            animate={{ rotate: needleRotation }}
            transition={{ type: "spring", stiffness: 55, damping: 14, delay: 0.3 }}
          >
            <div className="w-4 h-4 rounded-full bg-slate-900 border-[3px] border-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm" />
            <div className="w-9 h-9 rounded-full bg-slate-900 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-md z-10 border border-slate-700/60" />
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
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 block mb-1">
          Your Readiness Score
        </span>
        <div className="flex items-baseline justify-center gap-1.5">
          <motion.span className="text-5xl sm:text-6xl font-black text-slate-900 leading-none tabular-nums">
            {rounded}
          </motion.span>
          <span className="text-xl text-slate-400 font-semibold">/100</span>
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

  useEffect(() => () => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
  }, []);

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
      const option = q.options.find(o => o.id === selectedOptionId);
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
    await new Promise(resolve => setTimeout(resolve, 1500));

    const finalScore = calculateScore(answers);
    setScore(finalScore);
    setStep("results");
    setIsSubmitting(false);
  };

  const renderIntro = () => (
    <motion.div
      className="text-center py-6"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
          Get Your <span className="text-emerald-600">Data Readiness Score</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-slate-600 mb-8 font-medium"
      >
        Answer 7 quick questions to find out:
      </motion.p>

      <ul className="text-left max-w-sm mx-auto space-y-4 mb-10">
        {[
          "Where you stand on data maturity",
          "Your recommended starting point",
          "A personalized roadmap"
        ].map((text, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <span className="text-slate-700 text-lg font-medium">{text}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-2 mb-8 text-sm font-medium text-slate-500"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
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
          className="w-full sm:w-auto px-10 py-6 text-lg font-bold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
        >
          Start Assessment
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </motion.div>
  );

  const renderQuestion = () => (
    <div className="py-4 px-2">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Question {currentQIndex + 1}/{QUIZ_DATA.length}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-600">{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="mb-8 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-snug min-h-[4rem]">
        {currentQuestion.question}
      </h3>

      <RadioGroup
        value={answers[currentQuestion.id]}
        onValueChange={handleAnswerSelect}
        className="space-y-3 mb-10"
      >
        {currentQuestion.options.map((option) => (
          <div key={option.id}>
            <RadioGroupItem
              value={option.id}
              id={option.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={option.id}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group relative overflow-hidden",
                "peer-data-[state=checked]:border-emerald-500 peer-data-[state=checked]:bg-emerald-50/50 peer-data-[state=checked]:shadow-md peer-data-[state=checked]:shadow-emerald-100",
                "hover:border-emerald-200 hover:bg-slate-50",
                "border-slate-100 bg-white"
              )}
            >
              <span className={cn(
                "text-base font-medium transition-colors relative z-10",
                answers[currentQuestion.id] === option.id ? "text-emerald-900" : "text-slate-600"
              )}>
                {option.label}
              </span>

              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 relative z-10",
                answers[currentQuestion.id] === option.id
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-slate-200 group-hover:border-emerald-300"
              )}>
                {answers[currentQuestion.id] === option.id && (
                  <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                )}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <Button
          variant="ghost"
          onClick={handleBack}
          size="sm"
          className="px-4 text-slate-400 hover:text-slate-600 hover:bg-slate-50"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back
        </Button>
        {showNextStep && answers[currentQuestion.id] && (
          <Button
            onClick={handleNext}
            size="sm"
            className="px-6 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {currentQIndex === QUIZ_DATA.length - 1 ? "See Results" : "Next Step"}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );

  const renderEmailCapture = () => (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <Mail className="w-10 h-10 text-emerald-600" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-slate-900 mb-3"
      >
        Almost there!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-base text-slate-600 mb-8 max-w-sm mx-auto"
      >
        Where should we send your results and personalized roadmap?
      </motion.p>

      <form onSubmit={handleEmailSubmit} className="max-w-sm mx-auto space-y-6">
        <div className="text-left space-y-2">
          <Label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Work Email</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 pl-11 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
            />
            <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
          </div>
        </div>

        <div className="flex items-start gap-3 text-left p-4 rounded-xl border border-slate-100 bg-slate-50/50">
          <input
            type="checkbox"
            id="sendPdf"
            checked={sendPdf}
            onChange={(e) => setSendPdf(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <Label htmlFor="sendPdf" className="text-slate-600 cursor-pointer select-none">
            <span className="font-bold text-slate-900 block text-sm">Send me the AI Roadmap PDF</span>
            <span className="text-xs text-slate-500">Includes our 2026 data strategy guide.</span>
          </Label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full py-6 text-lg font-bold shadow-xl shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all hover:-translate-y-0.5"
        >
          {isSubmitting ? "Calculating Score..." : "Get My Score"}
          {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
        </Button>

        <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> No spam, we promise.
        </p>
      </form>
    </div>
  );

  const getRecommendation = (score) => {
    if (score <= 35) {
      return {
        stage: "Foundation Gap",
        bucket: "Fabric-Ready Foundation",
        description: "Your data platform needs work before you can drive reliable insights or enable AI. You're not alone — most companies we work with start here.",
        issues: ["Platform fragmentation", "Pipeline reliability", "Data governance gaps"],
        solution: "We deploy Azure + Fabric + Purview to give you a governed, production-grade data platform.",
        color: "text-rose-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        progressColor: "bg-rose-500"
      };
    } else if (score <= 65) {
      return {
        stage: "Decision Gap",
        bucket: "Decision Intelligence Engine",
        description: "You have a foundation, but you're not getting the insights and trust you need from your data. Leadership is still making decisions on gut feel.",
        issues: ["Dashboards not trusted", "Self-service gaps", "Data quality concerns"],
        solution: "We build Power BI dashboards on a semantic layer your leadership will actually trust.",
        color: "text-amber-600",
        bgColor: "bg-white",
        borderColor: "border-slate-200",
        progressColor: "bg-amber-500"
      };
    } else {
      return {
        stage: "AI Ready",
        bucket: "Production-Grade AI Foundry",
        description: "Your foundation is solid — you're ahead of most. Now it's time to accelerate AI initiatives and get pilots into production.",
        issues: ["AI pilots not reaching production", "MLOps gaps", "Copilot readiness"],
        solution: "We architect AI Foundry and Copilot on your governed data so pilots actually ship to production.",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        progressColor: "bg-emerald-500"
      };
    }
  };

  const renderResults = () => {
    const rec = getRecommendation(score);
    return (
      <div className="py-2 sm:py-6">
        {/* Score Section */}
        <motion.div
          className="text-center mb-10 relative"
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
            <div className={cn("inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-base font-bold tracking-wide border shadow-sm backdrop-blur-sm bg-opacity-70", rec.bgColor, rec.borderColor, rec.color)}>
              <span className={cn("w-2.5 h-2.5 rounded-full shadow-inner", rec.progressColor)} />
              {rec.stage}
            </div>
          </motion.div>
        </motion.div>

        {/* Breakdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={cn("p-6 sm:p-8 rounded-3xl border mb-8 relative overflow-hidden shadow-lg", rec.bgColor, rec.borderColor)}
        >
          {/* Subtle pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10">
            <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-slate-900 rounded-full inline-block" />
              Overview
            </h4>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
              {rec.description}
            </p>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-sm">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-widest mb-4 opacity-80">Key Improvements Required:</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {rec.issues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", rec.color)} />
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
          className="p-8 rounded-3xl bg-slate-900 text-white mb-8 relative overflow-hidden group shadow-2xl ring-1 ring-slate-900/10"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 z-0" />
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <TrendingUp size={140} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div>
                <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Recommended Starting Point
                </h4>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">{rec.bucket}</h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-6 sm:mb-0">
                  {rec.solution}
                </p>
              </div>

              <div className="shrink-0">
                <Button className="w-full sm:w-auto bg-white text-slate-900 hover:bg-emerald-50 hover:text-emerald-700 font-bold px-8 py-6 h-auto rounded-xl shadow-lg transition-all hover:scale-105" onClick={() => window.location.href = '/services'}>
                  Explore Solution <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="flex-1 py-4 h-auto text-lg font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all rounded-xl">
            <Download className="mr-2 w-6 h-6" />
            Download AI Roadmap
          </Button>
          <Button variant="outline" className="flex-1 py-4 h-auto text-lg font-bold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl transition-all">
            <Calendar className="mr-2 w-6 h-6" />
            Book a 30-min Call
          </Button>
        </motion.div>

        <div className="text-center pt-6 border-t border-slate-100">
          <p className="text-sm text-slate-400">
            Full analysis sent to <span className="font-bold text-slate-800">{email}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
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
