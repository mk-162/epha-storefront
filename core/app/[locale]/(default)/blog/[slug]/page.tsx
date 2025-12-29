import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';
import { Image } from '~/components/image';
import { Calendar, Clock, ChevronRight, ArrowLeft, Share2, Linkedin, Twitter, Facebook, User } from 'lucide-react';
import { blogPosts } from '~/lib/blog-data';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
          <div className="container mx-auto px-4 pb-12 relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{post.category}</span>
            </nav>
            <span className="inline-block bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white uppercase mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-white/60 text-xs">{post.authorRole}</p>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-bold text-gray-700 flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Share this article:
                    </span>
                    <div className="flex gap-2">
                      <button className="h-10 w-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Linkedin className="h-5 w-5" />
                      </button>
                      <button className="h-10 w-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Twitter className="h-5 w-5" />
                      </button>
                      <button className="h-10 w-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                        <Facebook className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm hover:text-accent transition-colors"
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
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-heading font-bold text-primary uppercase mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <p className="text-sm font-medium text-gray-800 group-hover:text-accent transition-colors line-clamp-2">
                            {relatedPost.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-heading font-bold uppercase mb-3">Free Consultation</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Get expert advice on protecting your hydraulic systems. Our team is ready to help.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block w-full text-center bg-accent text-white font-bold uppercase text-sm py-3 rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>

                  {/* Featured Product */}
                  <Link href="/products" className="block group">
                    <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-accent/50 hover:shadow-lg transition-all">
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                          alt="EPHA Spiral Guards"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-accent text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                            Best Seller
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hose Protection</p>
                        <h4 className="font-heading font-bold text-primary uppercase text-lg mb-2 group-hover:text-accent transition-colors">
                          Spiral Hose Guards
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          Extend hose life by up to 500%. Industrial-grade HDPE construction.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">From $8.99</span>
                          <span className="text-xs font-bold text-accent uppercase group-hover:underline">
                            View &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Newsletter */}
                  <div className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-heading font-bold text-primary uppercase mb-3">Newsletter</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    <button className="w-full bg-primary text-white font-bold uppercase text-sm py-2 rounded-lg hover:bg-primary/90 transition-colors">
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
