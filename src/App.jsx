import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModelsGrid from './components/ModelsGrid';
import Pricing from './components/Pricing';
import DeveloperPortal from './components/DeveloperPortal';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ModelsGrid />
        <section id="pricing">
          <Pricing />
        </section>
        <DeveloperPortal />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Flames Actuarial APIs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Status</a>
            <a href="#" className="hover:text-gray-900">Docs</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
