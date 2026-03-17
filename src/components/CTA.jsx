import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden relative"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Bạn muốn triển khai Zalo OA bài bản?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Nhận ngay lộ trình tư vấn 1:1 hoàn toàn miễn phí, thiết kế riêng cho mô hình kinh doanh của bạn. Thời gian là tiền bạc, hãy tự động hóa từ hôm nay!
            </p>
            
            <a 
              href="https://zalo.me/0333231232" // Replace with real Zalo link
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 group"
            >
              Liên hệ Zalo tư vấn <Send size={20} className="ml-2 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
