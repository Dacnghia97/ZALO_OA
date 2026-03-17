import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Tư vấn & Phân tích",
    description: "Khảo sát hiện trạng doanh nghiệp, vẽ chân dung khách hàng và quy trình Sale/CSKH hiện tại."
  },
  {
    num: "02",
    title: "Thiết lập nền tảng OA",
    description: "Khởi tạo, xác thực tài khoản OA, thiết kế menu, lời chào và kết nối API hệ thống (nếu có)."
  },
  {
    num: "03",
    title: "Xây dựng Bot & Kịch bản",
    description: "Lên flow kịch bản tư vấn tự động, kịch bản Broadcast retargeting và phân loại thẻ tag User."
  },
  {
    num: "04",
    title: "Test & Tối ưu",
    description: "Chạy thử nghiệm hệ thống luồng bot, fix lỗi và tối ưu hóa nội dung tin nhắn để tăng tỷ lệ chuyển đổi."
  },
  {
    num: "05",
    title: "Bàn giao & Hỗ trợ",
    description: "Training cho đội ngũ Sale/CSKH cách sử dụng hệ thống phần mềm hiệu quả, bảo hành hỗ trợ dài hạn."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">Cách thức triển khai</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quy trình làm việc <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">chuyên nghiệp</span>
          </h2>
          <p className="text-gray-400 text-lg">
            5 bước rõ ràng giúp doanh nghiệp hình dung chính xác cách hệ thống Zalo Automation sẽ được xây dựng và đưa vào hoạt động thực tế.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-800"></div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 shadow-[0_0_0_2px_rgba(59,130,246,0.3)] flex items-center justify-center text-2xl font-bold text-blue-400 mb-6 relative z-10 group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_0_4px_rgba(59,130,246,0.6)] hover:bg-gray-700 cursor-pointer">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed md:pr-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
