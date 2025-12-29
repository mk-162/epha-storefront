import { ArrowRight, Calendar, ChevronRight, Clock } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { blogPosts, categories } from '~/lib/blog-data';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
                <Link className="transition-colors hover:text-white" href="/">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Blog</span>
              </nav>
              <h1 className="mb-4 font-heading text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
                Industry Insights
              </h1>
              <p className="max-w-2xl text-xl text-white/80">
                Expert advice, case studies, and the latest trends in hydraulic hose protection and
                equipment maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="bg-slate-50 py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-1 w-12 bg-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">
                  Featured Article
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group grid gap-8 overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl md:grid-cols-2">
                  <div className="relative h-64 overflow-hidden md:h-auto">
                    <Image
                      alt={featuredPost.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      src={featuredPost.image}
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="mb-4 font-heading text-2xl font-bold uppercase text-primary transition-colors group-hover:text-accent md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-600">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase text-accent transition-all group-hover:gap-4">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="border-b border-gray-100 bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-all hover:border-gray-200 hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        alt={post.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                        src={post.image}
                      />
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase text-primary backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-primary transition-colors group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="rounded-lg border-2 border-primary px-8 py-3 text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase text-white md:text-4xl">
              Stay Ahead of the Curve
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-white/80">
              Get the latest industry insights, maintenance tips, and exclusive case studies
              delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your email"
                type="email"
              />
              <button className="rounded-lg bg-accent px-8 py-3 font-bold uppercase text-white transition-colors hover:bg-accent/90">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
