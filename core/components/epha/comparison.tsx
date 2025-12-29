import { CheckCircle2, XCircle } from 'lucide-react';

export function Comparison() {
  return (
    <section className="w-full">
      <div className="grid min-h-[600px] md:grid-cols-2">
        {/* Left Side - Problem */}
        <div className="group relative flex items-center justify-center overflow-hidden bg-gray-200 p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-multiply contrast-125 grayscale" />
          <div className="absolute inset-0 bg-red-900/20" />

          <div className="relative z-10 max-w-md text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1 text-sm font-bold uppercase text-white shadow-lg">
              <XCircle className="h-4 w-4" /> Without Protection
            </div>
            <h3 className="mb-4 font-heading text-3xl font-bold text-gray-800">
              The Real Cost of Unprotected Hoses
            </h3>
            <p className="mb-8 font-medium text-gray-700">
              "We lost $12,000 in fluid and downtime from a single burst hose on our main
              excavator."
            </p>
            <ul className="space-y-3 rounded-lg border border-red-200 bg-white/50 p-6 text-left backdrop-blur-sm">
              <li className="flex items-center gap-2 font-medium text-red-800">
                <XCircle className="h-4 w-4" /> Abrasion failure in 3-6 months
              </li>
              <li className="flex items-center gap-2 font-medium text-red-800">
                <XCircle className="h-4 w-4" /> UV degradation & cracking
              </li>
              <li className="flex items-center gap-2 font-medium text-red-800">
                <XCircle className="h-4 w-4" /> Dangerous fluid injection risks
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Solution */}
        <div className="relative flex items-center justify-center overflow-hidden bg-primary p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-900" />

          <div className="relative z-10 max-w-md text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-sm font-bold uppercase text-white shadow-lg">
              <CheckCircle2 className="h-4 w-4" /> With EPHA Protection
            </div>
            <h3 className="mb-4 font-heading text-3xl font-bold text-white">
              Stop Downtime, Boost Profitability
            </h3>
            <div className="mb-2 font-heading text-5xl font-bold text-white">SAVES $13,825</div>
            <p className="mb-8 text-blue-200">Average annual savings per machine</p>

            <ul className="space-y-3 rounded-lg border border-white/10 bg-white/10 p-6 text-left backdrop-blur-sm">
              <li className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> 5x Longer hose life
              </li>
              <li className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> Abrasion & Impact resistant
              </li>
              <li className="flex items-center gap-2 font-medium text-white">
                <CheckCircle2 className="h-4 w-4 text-green-400" /> ISO 3457 Compliant Safety
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
