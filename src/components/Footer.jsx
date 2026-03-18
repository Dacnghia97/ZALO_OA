import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 py-12 text-center">
      <div className="font-bold text-xl mb-6">Đắc Nghĩa</div>
      <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <p>Hotline/Zalo: 0333.231.232</p>
        <p>Email: <a>nghia.zalobusiness@gmail.com</a></p>
        <p>Hà Nội, Việt Nam</p>
      </div>
      <div className="text-[10px] text-slate-400 uppercase tracking-widest">
        © 2024 Đắc Nghĩa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
