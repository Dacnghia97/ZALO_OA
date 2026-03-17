import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Liên Hệ Trực Tiếp</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nâng cấp trải nghiệm <span className="text-blue-600">khách hàng</span> của bạn ngay hôm nay.
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Đừng ngần ngại liên hệ nếu bạn có bất kỳ thắc mắc nào về việc ứng dụng Zalo OA vào thực tế doanh nghiệp. Tôi luôn sẵn sàng chia sẻ!
            </p>

            <div className="space-y-6">
              <a href="https://zalo.me/0333231232" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Nhắn tin ngay (Đề xuất)</div>
                  <div className="text-lg font-bold text-gray-900">Zalo: 0333 231 232</div>
                </div>
              </a>

              <a href="tel:0333231232" className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mr-4 group-hover:bg-green-600 group-hover:text-white transition">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Gọi Hotline Hỗ Trợ</div>
                  <div className="text-lg font-bold text-gray-900">Hotline: 0333 231 232</div>
                </div>
              </a>

              <a href="mailto:hello@domain.com" className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mr-4 group-hover:bg-purple-600 group-hover:text-white transition">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Gửi Email Công Việc</div>
                  <div className="text-lg font-bold text-gray-900">hello@domain.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Để lại thông tin nhận tư vấn</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" placeholder="Nhập tên của bạn" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại / Zalo *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" placeholder="Nhập số điện thoại" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lĩnh vực kinh doanh</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" placeholder="VD: Bán lẻ, Spa, BĐS..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vấn đề bạn đang gặp phải?</label>
                <textarea rows="3" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition" placeholder="Mô tả ngắn gọn..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
