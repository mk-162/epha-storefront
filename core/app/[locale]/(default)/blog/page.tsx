import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';
import { Image } from '~/components/image';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { blogPosts, categories } from '~/lib/blog-data';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Blog</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase mb-4">
                Industry Insights
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Expert advice, case studies, and the latest trends in hydraulic hose protection and equipment maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-12 bg-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">Featured Article</span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-bold uppercase text-sm group-hover:gap-4 transition-all">
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
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get the latest industry insights, maintenance tips, and exclusive case studies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-8 py-3 bg-accent text-white font-bold uppercase rounded-lg hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
