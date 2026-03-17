import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bot, MessageSquareText, Rss, LineChart, Target } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck size={28} className="text-blue-600" />,
    title: 'Khởi tạo & Xác thực OA',
    description: 'Đăng ký mới, chuẩn hóa hồ sơ và xin cấp tích vàng (xác thực) nhanh chóng, chuẩn quy định Zalo.',
  },
  {
    icon: <Bot size={28} className="text-blue-600" />,
    title: 'Setup Chatbot Zalo',
    description: 'Xây dựng kịch bản chatbot tự động hóa 80% câu hỏi thường gặp, trực 24/7 không bỏ sót khách.',
  },
  {
    icon: <MessageSquareText size={28} className="text-blue-600" />,
    title: 'Kịch bản CSKH',
    description: 'Thiết kế chuỗi tin nhắn chăm sóc lại khách hàng cũ (Retargeting) giúp tăng tỷ lệ quay lại mua hàng.',
  },
  {
    icon: <Rss size={28} className="text-blue-600" />,
    title: 'Tối ưu Zalo Broadcast',
    description: 'Chiến lược gửi tin nhắn hàng loạt (ZBS) hiệu quả, tránh bị spam, tỷ lệ mở tin (Open rate) đạt >60%.',
  },
  {
    icon: <Target size={28} className="text-blue-600" />,
    title: 'Chiến lược Zalo Marketing',
    description: 'Tư vấn phễu bán hàng trên nền tảng Zalo phù hợp đặc thù riêng của từng ngành nghề kinh doanh.',
  },
  {
    icon: <LineChart size={28} className="text-blue-600" />,
    title: 'Phân tích & Tối ưu',
    description: 'Đo lường hiệu quả chuyển đổi, phân tích hành vi người quan tâm để tinh chỉnh kịch bản liên tục.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Dịch Vụ Cung Cấp</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giải pháp toàn diện cho <span className="text-blue-600">Zalo OA</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Từ những bước nền tảng đến tự động hóa nâng cao, tôi đồng hành cùng bạn để biến Zalo thành cỗ máy tạo doanh thu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
