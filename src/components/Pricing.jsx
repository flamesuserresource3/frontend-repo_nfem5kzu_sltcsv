export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Simple, usage-based pricing</h2>
        <p className="mt-2 text-gray-600">Start free. Scale transparently. No commitments.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Sandbox</h3>
          <p className="mt-1 text-sm text-gray-600">Evaluate endpoints and integrate quickly.</p>
          <div className="mt-6 text-3xl font-extrabold">Free</div>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• 1,000 calls / month</li>
            <li>• Limited throughput</li>
            <li>• Community support</li>
          </ul>
          <a href="#developers" className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-2 text-white">Get API Key</a>
        </div>

        <div className="rounded-2xl border-2 border-indigo-600 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Growth</h3>
          <p className="mt-1 text-sm text-gray-600">For teams launching to production.</p>
          <div className="mt-6 text-3xl font-extrabold">$0.002</div>
          <div className="text-sm text-gray-500">per call</div>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• 100k calls / month included</li>
            <li>• Regional models (Africa)</li>
            <li>• Email support</li>
          </ul>
          <a href="#developers" className="mt-6 inline-block rounded-md bg-indigo-600 px-5 py-2 font-semibold text-white">Start Now</a>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
          <p className="mt-1 text-sm text-gray-600">Dedicated SLAs, custom limits, on-prem.</p>
          <div className="mt-6 text-3xl font-extrabold">Custom</div>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>• Unlimited scale</li>
            <li>• Private deployments</li>
            <li>• Priority support</li>
          </ul>
          <a href="#contact" className="mt-6 inline-block rounded-md bg-gray-900 px-5 py-2 text-white">Talk to Sales</a>
        </div>
      </div>
    </section>
  );
}
