import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-xl hover:shadow-2xl transition"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Chi phí dịch vụ</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto md:text-lg">
            Mỗi shop có nhu cầu khác nhau, mình sẽ tư vấn kỹ phương án tối ưu nhất trước khi bắt đầu.
          </p>
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-lg text-primary font-bold md:text-lg">
            Tư vấn miễn phí 1-1
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
