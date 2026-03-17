import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, PlayCircle } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Chuyên gia Zalo OA & Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Giúp doanh nghiệp <br/>
              <span className="text-blue-600">tăng doanh thu </span>& <br/>
              tự động hóa CSKH
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Xây dựng hệ thống Zalo Official Account bài bản, kết hợp Chatbot tự động hóa 80% quy trình tư vấn và chăm sóc khách hàng.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
              >
                Nhận tư vấn miễn phí <ArrowRight size={18} className="ml-2" />
              </a>
              <Link 
                to="casestudies"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-flex justify-center items-center px-6 py-3.5 rounded-full bg-white text-gray-700 font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition cursor-pointer"
              >
                <PlayCircle size={18} className="mr-2 text-blue-600" /> Xem Case Study
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-1.5" /> 100+ Doanh nghiệp
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-1.5" /> Tối ưu chi phí
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Chuyên gia Zalo OA" 
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  OA
                </div>
                <div>
                  <div className="text-xs text-gray-500">Tin nhắn tự động</div>
                  <div className="font-bold text-gray-900">+80% Tốc độ</div>
                </div>
              </motion.div>

               <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Doanh thu</div>
                  <div className="font-bold text-gray-900">+45% ROI</div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Blob for Image */}
            <div className="absolute -top-4 -bottom-4 -left-4 -right-4 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-[2rem] -z-10 rotate-3 opacity-20 blur-lg"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
