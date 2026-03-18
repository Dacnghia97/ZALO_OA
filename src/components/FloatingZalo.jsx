import React from 'react';
import { motion } from 'framer-motion';

const FloatingZalo = () => {
  return (
    <motion.a 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl z-50 animate-bounce hover:bg-blue-700 transition-colors" 
      href="https://zalo.me/0333231232"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="material-symbols-outlined text-3xl">chat_bubble</span>
    </motion.a>
  );
};

export default FloatingZalo;
