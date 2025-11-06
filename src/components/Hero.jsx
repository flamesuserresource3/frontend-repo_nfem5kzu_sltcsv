import { Rocket, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-sm text-indigo-700 shadow-sm">
              <Rocket className="h-4 w-4" /> Actuarial API Marketplace
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Predictive APIs for Modern Insurers
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Access pre-trained actuarial models via simple APIs. Built on African data for regional accuracy. Pay only for what you use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#models"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow hover:bg-indigo-700"
              >
                Explore Models
              </a>
              <a
                href="#developers"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                For Developers
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-indigo-600" /> Regional calibration for Africa</div>
              <div>Pay-per-call pricing</div>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border bg-white p-6 shadow-lg">
              <div className="text-xs font-mono text-gray-500">curl example</div>
              <pre className="mt-2 overflow-auto rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
{`curl -X POST \\
  "$VITE_BACKEND_URL/api/mortality/predict" \\
  -H "Content-Type: application/json" \\
  -d '{
    "age": 45,
    "gender": "male",
    "region": "ng"
  }'`}
              </pre>
              <div className="mt-4 rounded-lg bg-indigo-50 p-3 text-indigo-900">
                Get instant predictions without managing infrastructure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
