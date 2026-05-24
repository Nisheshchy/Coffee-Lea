/** @format */

import { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Coffee } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export default function Blog({ navigateTo }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Brewing Guide", "Coffee Education", "Sustainability", "Community"];

  // Filtering logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post is the first matched post when no search query is active
  const featuredPost = searchQuery === "" && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const standardPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section className="space-y-10 animate-fadeIn">
      {/* Blog Hero Header */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3b2519] px-8 py-14 text-[#f4e7dc] shadow-[0_30px_90px_rgba(57,32,20,0.25)]">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#f2d5c3] opacity-[0.04] blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#b99d81] opacity-[0.06] blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f2d5c3]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e6cab8] backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" /> Coffee Lea Gazette
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Roasted Stories
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#d9c4b6] sm:text-base">
            Explore brew guides, roasting philosophies, community profiles, and our ongoing journey toward a sustainable specialty coffee future.
          </p>
        </div>
      </div>

      {/* Filters & Search Controls */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#3b2519] text-[#f4e7dc] shadow-[0_10px_25px_rgba(59,37,25,0.25)]"
                  : "bg-white text-[#3c2417] border border-[#e5d5c8] hover:bg-[#fcf8f5] hover:border-[#b99d81]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full lg:w-80">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-[#e5d5c8] bg-white py-3 pl-11 pr-5 text-sm text-[#3c2417] placeholder-[#b99d81] outline-none shadow-sm transition-all duration-300 focus:border-[#3b2519] focus:ring-2 focus:ring-[#3b2519]/10"
          />
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#b99d81]" />
        </div>
      </div>

      {/* Main Blog Content */}
      {filteredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white py-20 px-6 text-center border border-[#eedfd3] shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#f5eade] text-[#3b2519] mb-4">
            <Coffee className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-[#3c2417]">No articles matched your search</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-sm">
            Try adjusting your search keywords or switching to a different category.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-6 rounded-full bg-[#3b2519] px-6 py-2.5 text-xs font-semibold text-[#f4e7dc] transition-all hover:bg-[#523525]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Featured Post Card */}
          {featuredPost && (
            <div className="group overflow-hidden rounded-[2rem] bg-white border border-[#eedfd3] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="relative min-h-[300px] overflow-hidden lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="absolute left-6 top-6 rounded-full bg-[#f2d5c3] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3b2519] shadow-md">
                    Featured Article
                  </span>
                </div>
                <div className="flex flex-col justify-between p-8 sm:p-10 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                      <span className="rounded-full bg-[#fcf5ef] px-3 py-1 font-semibold text-[#3b2519] border border-[#f2d5c3]/50">
                        {featuredPost.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-[#3c2417] sm:text-3xl hover:text-[#523525] transition-colors">
                      <a
                        href={`#/blog/${featuredPost.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(`/blog/${featuredPost.id}`);
                        }}
                      >
                        {featuredPost.title}
                      </a>
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b2519] text-xs font-bold text-[#f4e7dc]">
                        {featuredPost.author.avatarId}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#3c2417]">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
                      </div>
                    </div>

                    <a
                      href={`#/blog/${featuredPost.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(`/blog/${featuredPost.id}`);
                      }}
                      className="inline-flex items-center gap-1 text-sm font-bold text-[#3b2519] hover:gap-2 transition-all"
                    >
                      Read Article <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Standard Blog Cards Grid */}
          {standardPosts.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {standardPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white border border-[#eedfd3] p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <div className="space-y-4">
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden rounded-2xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-[#3b2519]/80 backdrop-blur-md px-3 py-1 text-2xs font-bold uppercase tracking-wider text-[#f4e7dc]">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-2xs font-medium text-gray-500 px-1">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="px-1 space-y-2.5">
                      <h3 className="text-lg font-bold leading-snug text-[#3c2417] hover:text-[#523525] transition-colors">
                        <a
                          href={`#/blog/${post.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateTo(`/blog/${post.id}`);
                          }}
                        >
                          {post.title}
                        </a>
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Author & Link */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 px-1">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2d5c3] text-2xs font-bold text-[#3b2519]">
                        {post.author.avatarId}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#3c2417] leading-none">{post.author.name}</p>
                        <p className="text-3xs text-gray-500 mt-0.5">{post.author.role}</p>
                      </div>
                    </div>

                    <a
                      href={`#/blog/${post.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(`/blog/${post.id}`);
                      }}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fcf5ef] text-[#3b2519] hover:bg-[#3b2519] hover:text-[#f4e7dc] transition-all duration-300"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
