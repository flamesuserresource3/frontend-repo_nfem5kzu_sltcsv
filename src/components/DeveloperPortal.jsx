import { Code2, TerminalSquare, Boxes } from "lucide-react";

const snippets = {
  python: `import requests\nAPI_URL = f"{import.meta.env.VITE_BACKEND_URL}/api/mortality/predict"\npayload = {"age": 45, "gender": "male", "region": "ng"}\nr = requests.post(API_URL, json=payload)\nprint(r.json())`,
  r: `library(httr)\nurl <- paste0(Sys.getenv("VITE_BACKEND_URL"), "/api/mortality/predict")\npayload <- list(age=45, gender="male", region="ng")\nres <- POST(url, body = payload, encode = "json")\ncontent(res)`,
  js: `const url = \`${import.meta.env.VITE_BACKEND_URL}/api/mortality/predict\`;\nconst res = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ age:45, gender:'male', region:'ng' })});\nconst data = await res.json();\nconsole.log(data);`,
};

export default function DeveloperPortal() {
  return (
    <section id="developers" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-center gap-3">
        <Boxes className="h-6 w-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Developer Portal</h2>
      </div>
      <p className="max-w-3xl text-gray-600">
        Integrate in minutes. SDKs and code snippets for Python, R, and JavaScript. Generate an API key and start calling models immediately.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900">Python</h3>
          <pre className="mt-2 max-h-56 overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">{snippets.python}</pre>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900">R</h3>
          <pre className="mt-2 max-h-56 overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">{snippets.r}</pre>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900">JavaScript</h3>
          <pre className="mt-2 max-h-56 overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">{snippets.js}</pre>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border bg-gradient-to-br from-indigo-600 to-blue-600 p-6 text-white shadow-sm">
        <div className="flex items-center gap-3 text-indigo-100">
          <TerminalSquare className="h-5 w-5" />
          <span className="uppercase tracking-wide">Why this matters</span>
        </div>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
          <li>Small insurers can ship ML features without data science teams</li>
          <li>API economy enables recurring revenue and predictable costs</li>
          <li>Network effects: more users → better models</li>
        </ul>
      </div>
    </section>
  );
}
