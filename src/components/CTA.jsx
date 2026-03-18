import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Bạn đang muốn triển khai kênh doanh nghiệp trên Zalo?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs mx-auto">
          Đừng để quy trình thủ công làm chậm bước tiến kinh doanh của bạn.
        </p>
        <a 
          href="https://zalo.me/0333231232"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/40 flex items-center justify-center gap-3 mx-auto hover:bg-blue-700 transition"
        >
          <span className="material-symbols-outlined">chat</span>
          Nhắn Zalo – Tư vấn miễn phí
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
