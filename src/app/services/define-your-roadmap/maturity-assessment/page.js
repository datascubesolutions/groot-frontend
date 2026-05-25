import MaturityAssessmentClient from "./components/MaturityAssessmentClient";

export const metadata = {
  title: "Data & Analytics Maturity Assessment | Groot",
  description: "Stop Guessing. Start Scaling. We assess your current data capabilities across six dimensions and show you exactly where you stand with evidence.",
};

export default function MaturityAssessmentPage() {
  return <MaturityAssessmentClient />;
}
