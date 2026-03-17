import React from 'react';
import { motion } from 'framer-motion';

const FloatingZalo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg mb-4 text-sm font-medium text-gray-800 border border-gray-100 animate-bounce cursor-pointer relative hidden sm:block">
        Chat ngay với tôi! 👋
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
      </div>
      
      <a 
        href="https://zalo.me/0333231232" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:scale-110"
      >
        <span className="absolute w-full h-full rounded-full bg-blue-500 animate-ping opacity-40"></span>
        <svg viewBox="0 0 48 48" className="w-8 h-8 md:w-10 md:h-10 text-white fill-current">
          <path d="M24.04 4.02C12.98 4.02 4 12.01 4 21.84c0 5.48 2.89 10.37 7.42 13.62l-2.06 6.54c-.16.51.37.96.84.69l7.55-4.27c2.01.52 4.14.8 6.33.8 11.06 0 20.03-7.99 20.03-17.82 0-9.83-8.97-17.82-20.07-17.82zM12.92 27.6h-3.41v-10.4c0-.98.79-1.78 1.78-1.78.98 0 1.78.79 1.78 1.78l1.3-4.39h5.36l-3.23 8.87 3.23 5.41h-2l-1.84-3.13-2.97 3.64zm12.39 0h-1.92v-7.23h-3.66v7.23h-1.92v-11.2h5.58v11.2zm6.75 0h-5v-1.72h3.08v-1.46h-3.08v-1.72h5v-6.3h-1.92v2.44h-3.08v-2.44h-1.92v6.3h5v5.1h-5v1.72h5v1.46h-3.08v1.72h5v6.3zm5.66 0v-11.2h-1.92v11.2h1.92zm3.32-6.57c-1.39 0-2.52-1.13-2.52-2.52 0-1.39 1.13-2.52 2.52-2.52 1.39 0 2.52 1.13 2.52 2.52 0 1.39-1.13 2.52-2.52 2.52h-.04m-2.48 6.57h1.92v-1.3l.6-.26c.55.77 1.45 1.25 2.44 1.25 1.63 0 2.96-1.33 2.96-2.96 0-1.63-1.33-2.96-2.96-2.96-1.01 0-1.9.48-2.44 1.25l-.6-.26v-1.3h-1.92v6.57z"></path>
        </svg>
      </a>
    </motion.div>
  );
};

export default FloatingZalo;
