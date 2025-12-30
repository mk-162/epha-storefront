'use client';

import { useState } from 'react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { type BlogPost, categories } from '~/lib/blog-data';

const POSTS_PER_PAGE = 6;

interface BlogFiltersProps {
  posts: BlogPost[];
}

export function BlogFilters({ posts }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(POSTS_PER_PAGE);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <>
      {/* Category Filter */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === activeCategory
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                key={category}
                onClick={() => handleCategoryChange(category)}
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
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              No articles found in this category.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
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
          )}

          {/* Load More */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                className="rounded-lg border-2 border-primary px-8 py-3 text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white"
                onClick={loadMore}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
