import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GALLERY_ITEMS } from '../data/mockData';
import { Modal } from '../components/common/Modal';
import { GalleryItem } from '../types';
import { Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['ALL', 'Graduation', 'Events', 'Classroom', 'Germany Trips'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'ALL' ? true : item.category === selectedCategory
  );

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            Life at DeutschKraft
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Institute & Campus <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Celebrations, classroom immersion sessions, cultural Oktoberfest events, and orientation trips in Munich.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold font-heading transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="relative rounded-3xl overflow-hidden group h-72 cursor-pointer shadow-xl border border-slate-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-amber-500/80 text-white rounded-md w-fit mb-2">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <Modal isOpen={!!activeItem} onClose={() => setActiveItem(null)} maxWidth="2xl">
            <div className="space-y-4">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase">{activeItem.category} • {activeItem.date}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mt-1">{activeItem.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{activeItem.caption}</p>
              </div>
            </div>
          </Modal>
        )}

      </div>
    </div>
  );
};
