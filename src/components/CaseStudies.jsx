import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowDownRight, MousePointerClick } from 'lucide-react';

const caseStudies = [
  {
    company: "Chuỗi Thẩm Mỹ Viện A",
    industry: "Spa / Beauty",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    before: "Mất 15 phút để phản hồi chat, rớt 30% khách hàng mới.",
    after: "Chatbot xử lý 100% kịch bản đặt lịch 24/7.",
    metrics: [
      { label: "Tăng doanh thu", value: "+30%", icon: <TrendingUp size={18} className="text-green-500" /> },
      { label: "Giảm chi phí CSKH", value: "-40%", icon: <ArrowDownRight size={18} className="text-blue-500" /> },
      { label: "Tỷ lệ mở tin nhắn", value: "75%", icon: <MousePointerClick size={18} className="text-purple-500" /> }
    ]
  },
  {
    company: "Hệ Thống Bán Lẻ Thời Trang",
    industry: "Retail / E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    before: "Gửi SMS Marketing tốn kém, tỷ lệ chuyển đổi thấp dưới 1%.",
    after: "Chuyển đổi sang Zalo Broadcast + Kịch bản Retargeting.",
    metrics: [
      { label: "Tăng doanh thu", value: "+45%", icon: <TrendingUp size={18} className="text-green-500" /> },
      { label: "Giảm ngân sách Ads", value: "-25%", icon: <ArrowDownRight size={18} className="text-blue-500" /> },
      { label: "Tỷ lệ mở tin nhắn", value: "82%", icon: <MousePointerClick size={18} className="text-purple-500" /> }
    ]
  }
];

const CaseStudies = () => {
  return (
    <section id="casestudies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Câu Chuyện Thành Công</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kết quả <span className="text-blue-600">thực chiến</span> mang lại
            </h2>
            <p className="text-gray-600 text-lg">
              Không chỉ là lý thuyết, dưới đây là những con số biết nói từ các doanh nghiệp đã ứng dụng giải pháp Zalo Automation do tôi xây dựng.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <a href="#contact" className="text-blue-600 font-medium hover:text-blue-700 underline underline-offset-4">
               Trở thành case study tiếp theo
             </a>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border text-left rounded-3xl overflow-hidden shadow-lg border-gray-100 flex flex-col lg:flex-row group"
            >
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {study.industry}
                </div>
              </div>
              
              <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.company}</h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <div className="text-xs font-bold text-red-600 uppercase mb-1 tracking-wider">Trước khi triển khai</div>
                    <div className="text-sm text-gray-700">{study.before}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                     <div className="text-xs font-bold text-green-600 uppercase mb-1 tracking-wider">Sau khi ứng dụng</div>
                     <div className="text-sm text-gray-700">{study.after}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="flex items-center space-x-2 text-2xl font-bold text-gray-900 mb-1">
                        {metric.icon}
                        <span>{metric.value}</span>
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
