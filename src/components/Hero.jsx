import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="px-6 pt-12 pb-16 flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-40 h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-xl mb-8 overflow-hidden bg-slate-200"
      >
        <img 
          alt="Đắc Nghĩa" 
          className="w-full h-full object-cover" 
          src="/avatar.jpg"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"
      >
        Mình giúp bạn triển khai Zalo OA, Chatbot & Mini App một cách đơn giản – hiệu quả
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-8 max-w-lg"
      >
        Không cần hiểu kỹ thuật – vẫn có hệ thống chăm sóc khách hàng tự động
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row w-full gap-3 justify-center sm:max-w-md max-w-xs"
      >
        <a 
          href="https://zalo.me/0333231232" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white py-4 px-6 rounded-xl font-bold text-base shadow-lg shadow-primary/30 hover:bg-blue-700 transition flex items-center justify-center"
        >
          Nhắn Zalo cho mình
        </a>
        <a href="#casestudies" className="bg-primary/10 text-primary py-4 px-6 rounded-xl font-bold text-base hover:bg-primary/20 transition flex items-center justify-center">
          Xem mình đã làm gì
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm"
      >
        <span className="material-symbols-outlined text-yellow-500 fill-1">verified</span>
        <span className="text-sm font-medium">Đã hỗ trợ 100+ OA doanh nghiệp</span>
      </motion.div>
    </section>
  );
};

export default Hero;
