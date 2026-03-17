import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: "Khởi tạo cơ bản",
    price: "2.5M",
    period: "1 lần",
    description: "Dành cho DNVVN mới bắt đầu muốn có kênh Zalo OA chuyên nghiệp.",
    features: [
      "Đăng ký và xác thực OA (Tích vàng)",
      "Thiết kế 3 banner bìa chuẩn kích thước",
      "Thiết lập menu OA (Quick menu)",
      "Cấu hình lời chào tự động",
      "Template gửi broadcast cơ bản"
    ],
    isPopular: false
  },
  {
    name: "Tự động hóa",
    price: "8.5M",
    period: "1 lần setup",
    description: "Giải pháp chatbot kịch bản toàn diện, tối ưu nguồn lực CSKH.",
    features: [
      "Trọn gói Khởi tạo cơ bản",
      "Tích hợp MiniApp hoặc hệ thống Bot API",
      "Xây dựng dòng chảy (Flow) hỏi đáp (FAQ)",
      "Kịch bản nhắc hẹn khách hàng",
      "Phân quyền nhân viên xử lý chat",
      "Đào tạo phần mềm (1 buổi)"
    ],
    isPopular: true
  },
  {
    name: "Chiến lược tổng thể",
    price: "Liên hệ",
    period: "Custom",
    description: "Xây dựng phòng Marketing Zalo theo ngách đặc thù.",
    features: [
      "Mọi tính năng gói Tự động hóa",
      "Lên 10 kịch bản Broadcast ra đơn/tháng",
      "Chiến lược Retargeting khách hàng tỷ lệ >20%",
      "Khai thác tệp SĐT qua Zalo Ads",
      "Tối ưu thiết kế Zalo Form",
      "Bảo hành & Follow hệ thống 3 tháng"
    ],
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Đầu tư hiệu quả</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Các gói dịch vụ triển khai
          </h2>
          <p className="text-gray-600 text-lg">
            Chi phí minh bạch, cam kết hiệu quả cho từng giải pháp tôi bàn giao. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-3xl p-8 relative ${
                plan.isPopular 
                  ? 'border-2 border-blue-500 shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'border border-gray-100 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                  <Star size={12} className="mr-1 fill-white" /> Khuyên dùng
                </div>
              )}
              
              <div className="text-xl font-bold text-gray-900 mb-2">{plan.name}</div>
              <p className="text-sm text-gray-500 mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price !== 'Liên hệ' && plan.price}
                  {plan.price === 'Liên hệ' && 'Báo giá'}
                </span>
                {plan.price !== 'Liên hệ' && (
                   <span className="text-gray-500 font-medium"> /{plan.period}</span>
                )}
              </div>
              
              <a 
                href="#contact" 
                className={`block w-full py-3 px-4 rounded-xl text-center font-bold transition-all ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/30' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                Đăng ký ngay
              </a>
              
              <div className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check size={18} className="text-blue-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
