import { Link } from '~/components/link';

export function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Trusted by fleet managers and equipment operators across the toughest sectors.
          </p>
        </div>

        <div className="grid h-[500px] gap-4 md:grid-cols-3">
          <Link
            className="group relative overflow-hidden rounded-lg md:col-span-2"
            href="/industries/construction"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="mb-2 font-heading text-3xl font-bold uppercase text-white">
                Construction
              </h3>
              <p className="max-w-md text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Protecting excavators, dozers, and loaders from daily site hazards.
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <Link
              className="group relative flex-1 overflow-hidden rounded-lg"
              href="/industries/municipal"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579532537598-4595d2c8d28e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold uppercase text-white">Municipal</h3>
              </div>
            </Link>
            <Link
              className="group relative flex-1 overflow-hidden rounded-lg"
              href="/industries/agricultural"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  Agriculture
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
