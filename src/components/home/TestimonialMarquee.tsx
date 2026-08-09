import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

// Generate colors based on initials for the avatar backgrounds
const getAvatarColor = (initial: string) => {
    const colors = [
        'bg-blue-500', 'bg-emerald-500', 'bg-amber-500',
        'bg-purple-500', 'bg-rose-500', 'bg-indigo-500'
    ];
    return colors[initial.charCodeAt(0) % colors.length];
};

const TestimonialCard = ({ test }: { test: typeof TESTIMONIALS[0] }) => {
    const initials = test.name
        .split(' ')
        .map(n => n.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2);

    return (
        <div className="flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl bg-[#f5f0e6] dark:bg-[#131B2E] border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between whitespace-normal mx-3">
            <div>
                <div className="flex text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <h4 className="font-bold text-[#200e4f] dark:text-white mb-3">
                    {test.goetheScore}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-6">
                    "{test.quote}"
                </p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold shadow-sm ${getAvatarColor(initials)}`}>
                    {initials}
                </div>
                <div>
                    <h5 className="font-bold text-sm text-[#200e4f] dark:text-white">{test.name}</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{test.role}</p>
                </div>
            </div>
        </div>
    );
};

export const TestimonialMarquee: React.FC = () => {
    // We duplicate the testimonials to create a seamless infinite scrolling effect.
    // 6 repeats ensures the row is wide enough to cover the screen and scroll 50% seamlessly.
    const duplicatedItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

    // Row 2 is just offset by starting from a different place or reversed.
    const duplicatedItemsReversed = [...duplicatedItems].reverse();

    return (
        <div className="relative w-full overflow-hidden flex flex-col gap-6 py-6 pb-12 cursor-default group">

            {/* Left/Right Fading Gradients for smooth entering/exiting */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#f9f7f1] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#f9f7f1] dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />

            {/* Row 1 (Left Scrolling) using Framer Motion */}
            <div className="flex w-max">
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                >
                    {duplicatedItems.map((test, index) => (
                        <TestimonialCard key={`row1-${index}`} test={test} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2 (Right Scrolling) using Framer Motion */}
            <div className="flex w-max">
                <motion.div
                    className="flex"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ ease: "linear", duration: 35, repeat: Infinity }}
                >
                    {duplicatedItemsReversed.map((test, index) => (
                        <TestimonialCard key={`row2-${index}`} test={test} />
                    ))}
                </motion.div>
            </div>

        </div>
    );
};
