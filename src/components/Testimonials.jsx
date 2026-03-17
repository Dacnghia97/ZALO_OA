import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Hoàng Minh",
    role: "CEO - Chuỗi Thời Trang Nam",
    content: "Trước đây mỗi ngày shop nhận hàng trăm tin nhắn hỏi size, nhân viên trực rất vất vả mà vẫn bị sót. Từ khi Nghĩa setup kịch bản Zalo Automation, chốt tỷ lệ lên 30% mà chỉ cần 1 bạn sale trực.",
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lê Thùy Trang",
    role: "Founder - Viện Thẩm Mỹ Trang Spa",
    content: "ZBS gửi tin nhắn chúc mừng sinh nhật kèm voucher chạy hoàn toàn tự động đã giúp spa mình tăng 45% khách quay lại trong quý vừa rồi. Chi phí lại rẻ hơn SMS rất nhiều.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Trần Tuấn Anh",
    role: "Giám Đốc KV - Trung Tâm Tiếng Anh",
    content: "Tuyệt vời nhất là hệ thống nhắc lịch học tự động qua Zalo và tích hợp CRM. Tỷ lệ phụ huynh mở tin nhắn trên Zalo đạt tới 85%, cao hơn hẳn so với Email Marketing truyền thống.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Đánh Giá Từ Khách Hàng</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Đối tác nói gì về giải pháp?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <Quote size={40} className="text-blue-100 absolute top-6 right-6" />
              <div className="flex space-x-1 mb-6 text-yellow-400">
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
                <Star size={18} className="fill-current" />
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10 line-clamp-4">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
