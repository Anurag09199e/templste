import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, CheckCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(message || 'Hallo DeutschKraft Team! I want to inquire about German courses.');
    window.open(`https://wa.me/4915200000000?text=${encodedMsg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 glass-card rounded-3xl p-5 border border-emerald-500/30 shadow-2xl shadow-emerald-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                  DK
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#200e4f] dark:text-white">DeutschKraft Admissions</h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Online Now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-slate-100 dark:bg-slate-950/70 rounded-2xl p-3 mb-4 space-y-2 text-xs">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl rounded-tl-none shadow-sm max-w-[85%] text-[#200e4f] dark:text-slate-200">
                Guten Tag! 👋 How can our Goethe certified advisors assist your German journey today?
                <span className="block text-[10px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                  16:20 <CheckCheck className="w-3 h-3 text-emerald-500" />
                </span>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about A1-C2, Visa, Fees..."
                className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-[#200e4f] dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40 border-2 border-white/20 relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
        <MessageSquare className="w-7 h-7" />
      </motion.button>
    </div>
  );
};
