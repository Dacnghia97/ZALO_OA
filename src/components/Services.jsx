import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 md:py-20 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-slate-500">
          Dịch vụ của mình
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">verified_user</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Khởi tạo, xác thực Zalo OA</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Hỗ trợ xác thực thành công ngay cả khi bạn không có giấy tờ doanh nghiệp.</p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Setup kịch bản chatbot</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Tích hợp chat AI tư vấn 24/7 linh hoạt, không bỏ lỡ khách hàng.</p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">apps</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Triển khai Zalo Mini App</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Xây dựng ứng dụng chuyên nghiệp, custom chuyên sâu theo nhu cầu riêng.</p>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">campaign</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Tạo mẫu, tư vấn nội dung ZBS</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Gửi tin nhắn Zalo Broadcast tương tác lại tệp khách hàng định kỳ.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
