import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, CheckCircle2, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border bg-gray-50 flex items-end justify-center">
                 {/* Thay bằng ảnh thật của cá nhân, ở đây dùng minh hoạ */}
                 <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Đắc Nghĩa" 
                    className="w-full h-full object-cover"
                 />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-blue-100 text-sm font-medium">Năm Kinh Nghiệm<br/>Thực Chiến</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Về Tôi</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Xin chào, tôi là <span className="text-blue-600">Đắc Nghĩa</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Tôi là một chuyên gia đắm mình trong hệ sinh thái Zalo với nỗ lực giúp các doanh nghiệp Việt Nam tối ưu hóa chi phí CSKH và gia tăng doanh số bền vững.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Sức mạnh cốt lõi của tôi nằm ở việc triển khai kiến trúc hệ thống thực chiến: không chỉ cấu hình kỹ thuật mà còn xây dựng chiến lược, nội dung kịch bản bám sát chân dung khách hàng của từng ngành nghề.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Đã triển khai hệ thống cho hơn 100+ doanh nghiệp vừa và nhỏ",
                "Chuyên sâu về Zalo MiniApp, ZBS & Chatbot AI",
                "Tiết kiệm đến 40% chi phí nhân sự CSKH cho đối tác",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-blue-500 mr-3 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                     <Award size={20} />
                  </div>
                  <div className="font-bold text-gray-900">100+ OA</div>
                  <div className="text-sm text-gray-500">Đã thiết lập thành công</div>
               </div>
               <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                     <Zap size={20} />
                  </div>
                  <div className="font-bold text-gray-900">80% Auto</div>
                  <div className="text-sm text-gray-500">Tự động hóa tin nhắn</div>
               </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
