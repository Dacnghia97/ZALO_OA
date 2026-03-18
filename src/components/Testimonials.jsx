import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-16 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-slate-500">Khách hàng nói gì</h2>
        
        <div className="space-y-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl italic text-slate-700 dark:text-slate-300 relative shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <span className="material-symbols-outlined absolute -top-3 -left-1 text-primary/20 text-4xl">format_quote</span>
            <p className="md:text-lg">
              "Em Nghĩa làm việc rất nhanh và nhiệt tình. Từ lúc làm chatbot mình không còn sợ khách mắng vì trả lời muộn nữa. Cảm ơn em!"
            </p>
            <div className="mt-4 not-italic font-bold text-sm text-slate-900 dark:text-slate-100">— Chị Tươi, Thời trang trung niên Anchi</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl italic text-slate-700 dark:text-slate-300 relative shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <span className="material-symbols-outlined absolute -top-3 -left-1 text-primary/20 text-4xl">format_quote</span>
            <p className="md:text-lg">
              "Support cực kỳ có tâm, không hiểu gì hỏi là Nghĩa giải thích ngay. Hệ thống ổn định, rất đáng đồng tiền bát gạo."
            </p>
            <div className="mt-4 not-italic font-bold text-sm text-slate-900 dark:text-slate-100">— Anh Thanh Tiền, Shop Hoa tươi Vũng Tàu</div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h3 className="text-xl font-bold mb-6">Trực tiếp quản trị và hỗ trợ hàng loạt Zalo OA doanh nghiệp</h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
             <img 
               src="/dashboard-proof.jpg" 
               alt="Giao diện quản lý hàng loạt Zalo OA" 
               className="w-full h-auto object-cover hover:scale-105 transition duration-700"
             />
          </div>
          <p className="mt-4 text-sm text-slate-500">
             *Hình ảnh thực tế danh sách quản lý Zalo OA của khách hàng đã tin tưởng hợp tác.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
