import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="px-6 py-12 md:py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
        >
          Chào bạn, mình là Nghĩa
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-lg"
        >
          <p>
            Làm việc với nhiều anh chị chủ shop và doanh nghiệp, mình nhận ra một nỗi trăn trở chung: khách nhắn hỏi giá lúc nửa đêm không ai trực, hay thông tin khách hàng rơi rớt vì khâu chăm sóc thủ công quá tải.
          </p>
          <p>
            Đó là lý do mình ở đây để đồng hành cùng bạn. Với kinh nghiệm chuyên sâu về <strong>Hệ sinh thái Zalo Business</strong>, mình sẽ trực tiếp giúp bạn giải bài toán này bằng một quy trình bán hàng và chăm sóc tự động, khép kín.
          </p>
          <p>
            Từ việc khởi tạo Zalo OA chuẩn chỉnh, cài đặt Chatbot AI thông minh, lên kịch bản ZBS đến xây dựng Zalo Mini App – mọi kỹ thuật phức tạp đều sẽ được mình "đơn giản hoá" và thiết kế riêng cho mô hình của bạn. Mục tiêu cuối cùng là giúp hệ thống tự vận hành trơn tru, để bạn hoàn toàn yên tâm tập trung vào việc gia tăng doanh thu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
