import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-white">
            <Shield className="h-5 w-5" />
          </span>
          Flames Actuarial APIs
        </a>
        <nav className="hidden items-center gap-8 text-sm text-gray-700 md:flex">
          <a href="#models" className="hover:text-gray-900">Models</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#developers" className="hover:text-gray-900">Developers</a>
        </nav>
        <div className="hidden gap-3 md:flex">
          <a href="#developers" className="rounded-md border px-4 py-2 text-sm">Sign in</a>
          <a href="#developers" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">Get API Key</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-6 py-3 md:hidden">
          <div className="flex flex-col gap-2 text-sm">
            <a href="#models">Models</a>
            <a href="#pricing">Pricing</a>
            <a href="#developers">Developers</a>
          </div>
        </div>
      )}
    </header>
  );
}
