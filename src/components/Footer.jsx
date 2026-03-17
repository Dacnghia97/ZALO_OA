import React from 'react';
import { Link } from 'react-scroll';
import { Facebook, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 inline-block">
              Đắc Nghĩa OA.
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Chuyên gia tư vấn và cung cấp giải pháp chuyển đổi số toàn diện trên hệ sinh thái Zalo (OA, MiniApp, ZBS) cho SMEs Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition text-white">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition text-white">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {['Về tôi', 'Dịch vụ', 'Case Study', 'Bảng giá'].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={i===0?'about':i===1?'services':i===2?'casestudies':'pricing'} 
                    smooth={true} 
                    className="hover:text-blue-400 transition cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Dịch vụ nổi bật</h4>
             <ul className="space-y-3">
               <li className="hover:text-blue-400 transition cursor-pointer">Khởi tạo OA Tích vàng</li>
               <li className="hover:text-blue-400 transition cursor-pointer">Xây dựng kịch bản Chatbot</li>
               <li className="hover:text-blue-400 transition cursor-pointer">Tối ưu Zalo Broadcast</li>
               <li className="hover:text-blue-400 transition cursor-pointer">Tư vấn chiến lược CRM</li>
             </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Đắc Nghĩa Zalo OA. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <span className="hover:text-gray-300 cursor-pointer">Chính sách bảo mật</span>
             <span className="hover:text-gray-300 cursor-pointer">Điều khoản dịch vụ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
