import { Link } from '~/components/link';

export function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading uppercase mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by fleet managers and equipment operators across the toughest sectors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 h-[500px]">
          <Link href="/industries/construction" className="relative group overflow-hidden rounded-lg md:col-span-2">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-heading font-bold text-white uppercase mb-2">Construction</h3>
              <p className="text-gray-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">Protecting excavators, dozers, and loaders from daily site hazards.</p>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <Link href="/industries/municipal" className="relative group overflow-hidden rounded-lg flex-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-4595d2c8d28e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white uppercase">Municipal</h3>
              </div>
            </Link>
            <Link href="/industries/agricultural" className="relative group overflow-hidden rounded-lg flex-1">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white uppercase">Agriculture</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
