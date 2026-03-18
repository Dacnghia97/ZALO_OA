import React from 'react';
import { motion } from 'framer-motion';

const Results = () => {
  return (
    <section id="casestudies" className="px-6 py-12 bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Hiệu quả thực tế</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Thời trang trung niên Anchi</span>
              <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Thành công</span>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Tăng tỷ lệ phản hồi khách hàng tự động</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Gia tăng doanh thu nhờ luồng tin nhắn Zalo chuẩn xác</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Hoa tươi Vũng Tàu</span>
              <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">Thành công</span>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Thiết lập kịch bản CSKH tự động sau khi mua</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Kịch bản tặng voucher cá nhân hóa cho từng khách</p>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm text-sm text-slate-600 dark:text-slate-400">
            <div className="flex -space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white dark:border-slate-800 flex items-center justify-center text-primary text-[10px] font-bold">
                +50
              </div>
            </div>
            <span className="text-center">...cùng hơn <strong>50+ nhãn hàng & doanh nghiệp</strong> khác đã tối ưu quy trình thành công.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
