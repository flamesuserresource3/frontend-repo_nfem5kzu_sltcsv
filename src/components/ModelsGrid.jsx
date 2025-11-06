import { Activity, PiggyBank, Users, BadgeDollarSign } from "lucide-react";

const models = [
  {
    id: "mortality",
    name: "Mortality Rate Predictions",
    description: "Predict age, gender, and region-adjusted mortality probabilities.",
    icon: Activity,
    latency: "~120ms",
    endpoint: "/api/mortality/predict",
  },
  {
    id: "severity",
    name: "Claims Severity Forecasting",
    description: "Estimate expected claim amount distributions and tail risk.",
    icon: PiggyBank,
    latency: "~150ms",
    endpoint: "/api/claims-severity/predict",
  },
  {
    id: "churn",
    name: "Customer Churn Prediction",
    description: "Classify churn risk and drivers for retention strategies.",
    icon: Users,
    latency: "~110ms",
    endpoint: "/api/churn/predict",
  },
  {
    id: "pricing",
    name: "Premium Pricing Recommendations",
    description: "Optimize pricing within constraints for conversion and margin.",
    icon: BadgeDollarSign,
    latency: "~140ms",
    endpoint: "/api/pricing/recommend",
  },
];

export default function ModelsGrid() {
  return (
    <section id="models" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pre-trained Models</h2>
          <p className="mt-1 text-gray-600">Pay-per-call access with regional customization for Africa.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {models.map(({ id, name, description, icon: Icon, latency, endpoint }) => (
          <div key={id} className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-gray-900">{name}</h3>
              </div>
              <span className="text-xs text-gray-500">{latency}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{description}</p>
            <div className="mt-4 rounded-md bg-gray-50 p-2 text-[11px] font-mono text-gray-700">
              {endpoint}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
