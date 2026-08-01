import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { BLOG_POSTS } from '../data/mockData';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { GradientButton } from '../components/common/GradientButton';

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Study in Germany', 'Grammar Tips', 'Ausbildung', 'Visa Guide'];

  const filteredPosts = BLOG_POSTS.filter((post) =>
    activeCategory === 'ALL' ? true : post.category === activeCategory
  );

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            German Learning Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Articles & <span className="text-gradient">German Hacks</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Expert insights on Goethe exam preparation, visa guidelines, blocked accounts, and living in Germany.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold font-heading transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <GlassCard key={post.id} className="flex flex-col justify-between p-6 border border-slate-200/80 dark:border-slate-800 group">
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-amber-400 font-extrabold text-[10px] rounded-lg uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-500" /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.publishedDate}</span>
                </div>

                <h3 className="font-extrabold font-heading text-lg text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{post.author}</span>
                </div>
                <GradientButton size="sm" icon={ArrowRight}>Read Article</GradientButton>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </div>
  );
};
