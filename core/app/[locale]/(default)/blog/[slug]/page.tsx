import { ArrowLeft, Calendar, ChevronRight, Clock, Share2, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { blogPosts } from '~/lib/blog-data';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative flex h-[50vh] min-h-[400px] items-end">
          <div className="absolute inset-0">
            <Image alt={post.title} className="object-cover" fill priority src={post.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-4 pb-12">
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link className="transition-colors hover:text-white" href="/blog">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{post.category}</span>
            </nav>
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
              {post.category}
            </span>
            <h1 className="mb-4 max-w-4xl font-heading text-3xl font-bold uppercase text-white md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">{post.author}</p>
                  <p className="text-xs text-white/60">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              <article className="lg:col-span-2">
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Share */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-2 font-bold text-gray-700">
                      <Share2 className="h-4 w-4" />
                      Share this article:
                    </span>
                    <div className="flex gap-2">
                      <button className="rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        LinkedIn
                      </button>
                      <button className="rounded-full bg-black px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        X
                      </button>
                      <button className="rounded-full bg-[#1877F2] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        Facebook
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-8">
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase text-primary transition-colors hover:text-accent"
                    href="/blog"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Related Posts */}
                  <div className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-4 font-heading font-bold uppercase text-primary">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          className="group block"
                          href={`/blog/${relatedPost.slug}`}
                          key={relatedPost.slug}
                        >
                          <p className="line-clamp-2 text-sm font-medium text-gray-800 transition-colors group-hover:text-accent">
                            {relatedPost.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">{relatedPost.date}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="rounded-xl bg-primary p-6 text-white">
                    <h3 className="mb-3 font-heading font-bold uppercase">Free Consultation</h3>
                    <p className="mb-4 text-sm text-white/80">
                      Get expert advice on protecting your hydraulic systems. Our team is ready to
                      help.
                    </p>
                    <Link
                      className="inline-block w-full rounded-lg bg-accent py-3 text-center text-sm font-bold uppercase text-white transition-colors hover:bg-accent/90"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* Featured Product */}
                  <Link className="group block" href="/products">
                    <div className="overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-accent/50 hover:shadow-lg">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          alt="EPHA Spiral Guards"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          fill
                          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute left-2 top-2">
                          <span className="rounded bg-accent px-2 py-1 text-[10px] font-bold uppercase text-white">
                            Best Seller
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4">
                        <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                          Hose Protection
                        </p>
                        <h4 className="mb-2 font-heading text-lg font-bold uppercase text-primary transition-colors group-hover:text-accent">
                          Spiral Hose Guards
                        </h4>
                        <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                          Extend hose life by up to 500%. Industrial-grade HDPE construction.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">From $8.99</span>
                          <span className="text-xs font-bold uppercase text-accent group-hover:underline">
                            View &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Newsletter */}
                  <div className="rounded-xl border border-gray-200 p-6">
                    <h3 className="mb-3 font-heading font-bold uppercase text-primary">
                      Newsletter
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <input
                      className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your email"
                      type="email"
                    />
                    <button className="w-full rounded-lg bg-primary py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-primary/90">
                      Subscribe
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
