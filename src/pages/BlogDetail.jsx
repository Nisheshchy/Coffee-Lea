/** @format */

import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Heart } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { useState, useEffect } from "react";

export default function BlogDetail({ id, navigateTo }) {
  const [liked, setLiked] = useState(false);
  const story = blogPosts.find((s) => s.id === id);

  // Scroll to top when loading a new article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!story) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white py-20 px-6 text-center border border-[#eedfd3] shadow-sm">
        <p className="text-lg font-semibold text-[#3c2417]">Article not found.</p>
        <button
          onClick={() => navigateTo("/blog")}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3b2519] px-6 py-2.5 text-xs font-semibold text-[#f4e7dc] transition-all hover:bg-[#523525]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </button>
      </div>
    );
  }

  // Find related articles (same category if possible, excluding current one, up to 3)
  const relatedArticles = blogPosts
    .filter((p) => p.id !== story.id)
    .sort((a, b) => (a.category === story.category ? -1 : 1))
    .slice(0, 3);

  // Dynamic content formatter
  const formatContent = (content) => {
    return content.split("\n\n").map((block, idx) => {
      // Check for blockquote
      if (block.startsWith('*"') && block.endsWith('"*')) {
        const text = block.substring(2, block.length - 2).split(" — ");
        return (
          <blockquote
            key={idx}
            className="my-8 border-l-4 border-[#3b2519] pl-6 italic text-[#523525] bg-[#fdfaf7] py-5 pr-5 rounded-r-3xl shadow-sm text-base sm:text-lg"
          >
            "{text[0]}"
            {text[1] && (
              <span className="block mt-2.5 text-xs font-bold not-italic text-[#b99d81] tracking-wider uppercase">
                — {text[1]}
              </span>
            )}
          </blockquote>
        );
      }

      // Check for header
      if (block.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="text-xl font-bold text-[#3c2417] sm:text-2xl mt-10 mb-4 tracking-tight border-b border-[#eedfd3] pb-2"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }

      // Check for numbered list
      if (block.includes("\n1. ") || block.startsWith("1. ")) {
        const items = block.split("\n");
        return (
          <ol key={idx} className="list-decimal pl-6 space-y-3.5 my-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            {items.map((item, itemIdx) => {
              const match = item.match(/^\d+\.\s+\*\*(.*?)\*\*:\s*(.*)/);
              if (match) {
                return (
                  <li key={itemIdx}>
                    <strong className="text-[#3c2417] font-semibold">{match[1]}:</strong> {match[2]}
                  </li>
                );
              }
              const cleanItem = item.replace(/^\d+\.\s+/, "");
              return <li key={itemIdx}>{cleanItem}</li>;
            })}
          </ol>
        );
      }

      // Check for bullet list
      if (block.includes("\n* ") || block.startsWith("* ")) {
        const items = block.split("\n");
        return (
          <ul key={idx} className="list-disc pl-6 space-y-3 my-6 text-sm sm:text-base text-gray-700 leading-relaxed">
            {items.map((item, itemIdx) => {
              const match = item.match(/^\*\s+\*\*(.*?)\*\*:\s*(.*)/);
              if (match) {
                return (
                  <li key={itemIdx}>
                    <strong className="text-[#3c2417] font-semibold">{match[1]}:</strong> {match[2]}
                  </li>
                );
              }
              const cleanItem = item.replace(/^\*\s+/, "");
              return <li key={itemIdx}>{cleanItem}</li>;
            })}
          </ul>
        );
      }

      // Standard paragraph
      return (
        <p key={idx} className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
          {block}
        </p>
      );
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <article className="space-y-10 animate-fadeIn">
      {/* Back Button Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo("/blog")}
          className="inline-flex items-center gap-2 rounded-full border border-[#eedfd3] bg-white px-5 py-2.5 text-xs font-semibold text-[#3b2519] transition-all hover:bg-[#fcf8f5] hover:border-[#b99d81]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </button>

        {/* Social interactions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              liked
                ? "bg-red-50 border-red-200 text-red-500"
                : "bg-white border-[#eedfd3] text-gray-400 hover:text-red-500 hover:border-red-200"
            }`}
          >
            <Heart className={`h-4.5 w-4.5 ${liked ? "fill-current" : ""}`} />
          </button>
          <button
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eedfd3] bg-white text-gray-400 hover:text-[#3b2519] hover:border-[#3b2519] transition-all"
          >
            <Share2 className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      {/* Main Post Shell */}
      <div className="overflow-hidden rounded-[2.5rem] bg-white border border-[#eedfd3] shadow-sm">
        {/* Banner Cover Image */}
        <div className="relative h-[300px] sm:h-[450px] w-full overflow-hidden">
          <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3b2519]/40 to-transparent"></div>
        </div>

        {/* Post Container */}
        <div className="mx-auto max-w-4xl px-6 py-10 sm:px-12 sm:py-14 space-y-8">
          {/* Post Header Meta */}
          <div className="space-y-4 border-b border-gray-100 pb-8">
            <div className="flex flex-wrap items-center gap-3.5 text-xs font-medium text-gray-500">
              <span className="rounded-full bg-[#fcf5ef] px-3.5 py-1.5 font-bold text-[#3b2519] border border-[#f2d5c3]">
                {story.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {story.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {story.readTime}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#3c2417] sm:text-4xl md:text-5xl leading-tight">
              {story.title}
            </h1>

            {/* Author Profile Bar */}
            <div className="flex items-center gap-3.5 pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b2519] text-sm font-bold text-[#f4e7dc] shadow-md">
                {story.author.avatarId}
              </div>
              <div>
                <p className="text-base font-bold text-[#3c2417]">{story.author.name}</p>
                <p className="text-xs text-gray-500 font-medium">{story.author.role}</p>
              </div>
            </div>
          </div>

          {/* Styled Content Block */}
          <div className="prose prose-coffee max-w-none text-gray-700">
            {formatContent(story.content)}
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="space-y-6 pt-10 border-t border-[#eedfd3]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight text-[#3c2417]">Continue Reading</h3>
          <span className="text-xs font-bold uppercase tracking-wider text-[#b99d81]">
            Curated For You
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedArticles.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-white border border-[#eedfd3] p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="relative h-40 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-3xs font-medium text-gray-400 px-0.5">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className="text-sm font-bold leading-snug text-[#3c2417] hover:text-[#523525] transition-colors line-clamp-2 px-0.5">
                  <a
                    href={`#/blog/${post.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`/blog/${post.id}`);
                    }}
                  >
                    {post.title}
                  </a>
                </h4>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-50 px-0.5">
                <span className="text-3xs font-bold text-gray-500 uppercase bg-gray-50 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <a
                  href={`#/blog/${post.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(`/blog/${post.id}`);
                  }}
                  className="inline-flex items-center gap-1 text-2xs font-bold text-[#3b2519] hover:gap-1.5 transition-all"
                >
                  Read <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
