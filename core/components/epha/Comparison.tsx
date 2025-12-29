import { CheckCircle2, XCircle } from "lucide-react";

export function Comparison() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left Side - Problem */}
        <div className="relative bg-gray-200 flex items-center justify-center p-12 overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-red-900/20" />

          <div className="relative z-10 text-center max-w-md">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 shadow-lg">
              <XCircle className="h-4 w-4" /> Without Protection
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-800 mb-4">The Real Cost of Unprotected Hoses</h3>
            <p className="text-gray-700 font-medium mb-8">
              "We lost $12,000 in fluid and downtime from a single burst hose on our main excavator."
            </p>
            <ul className="text-left space-y-3 bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-red-200">
              <li className="flex items-center gap-2 text-red-800 font-medium"><XCircle className="h-4 w-4" /> Abrasion failure in 3-6 months</li>
              <li className="flex items-center gap-2 text-red-800 font-medium"><XCircle className="h-4 w-4" /> UV degradation & cracking</li>
              <li className="flex items-center gap-2 text-red-800 font-medium"><XCircle className="h-4 w-4" /> Dangerous fluid injection risks</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Solution */}
        <div className="relative bg-primary flex items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900" />

          <div className="relative z-10 text-center max-w-md">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 shadow-lg">
              <CheckCircle2 className="h-4 w-4" /> With EPHA Protection
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">Stop Downtime, Boost Profitability</h3>
            <div className="text-5xl font-heading font-bold text-white mb-2">SAVES $13,825</div>
            <p className="text-blue-200 mb-8">Average annual savings per machine</p>

            <ul className="text-left space-y-3 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <li className="flex items-center gap-2 text-white font-medium"><CheckCircle2 className="h-4 w-4 text-green-400" /> 5x Longer hose life</li>
              <li className="flex items-center gap-2 text-white font-medium"><CheckCircle2 className="h-4 w-4 text-green-400" /> Abrasion & Impact resistant</li>
              <li className="flex items-center gap-2 text-white font-medium"><CheckCircle2 className="h-4 w-4 text-green-400" /> ISO 3457 Compliant Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
