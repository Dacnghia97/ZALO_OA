import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <section id="process" className="px-6 py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">Quy trình làm việc</h2>
        
        <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700 sm:before:left-1/2">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-10 sm:pl-0 sm:w-1/2 sm:pr-10 sm:ml-0"
          >
            <div className="absolute left-0 sm:-right-4 sm:left-auto top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">1</div>
            <h4 className="font-bold sm:text-right">Nghe chia sẻ</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-right">Mình lắng nghe nhu cầu và vấn đề shop đang gặp phải.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative pl-10 sm:pl-10 sm:w-1/2 sm:ml-auto"
          >
            <div className="absolute left-0 sm:-left-4 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">2</div>
            <h4 className="font-bold">Đề xuất phương án</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Gợi ý gói giải pháp tiết kiệm và hiệu quả nhất.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-10 sm:pl-0 sm:w-1/2 sm:pr-10 sm:ml-0"
          >
            <div className="absolute left-0 sm:-right-4 sm:left-auto top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">3</div>
            <h4 className="font-bold sm:text-right">Setup & Test</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-right">Tiến hành cài đặt và chạy thử hệ thống chatbot.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative pl-10 sm:pl-10 sm:w-1/2 sm:ml-auto"
          >
            <div className="absolute left-0 sm:-left-4 top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">4</div>
            <h4 className="font-bold">Hướng dẫn sử dụng</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Bàn giao và hướng dẫn bạn cách quản lý đơn giản.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative pl-10 sm:pl-0 sm:w-1/2 sm:pr-10 sm:ml-0"
          >
            <div className="absolute left-0 sm:-right-4 sm:left-auto top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10">5</div>
            <h4 className="font-bold sm:text-right">Hỗ trợ trọn đời</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 sm:text-right">Đồng hành cùng bạn trong suốt quá trình vận hành.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Process;
