import React from 'react';

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">menu</span>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Đắc Nghĩa
          </span>
          <span className="hidden sm:inline-block text-slate-300 dark:text-slate-600">|</span>
          <span className="mt-0.5 sm:mt-0 text-[10px] sm:text-xs font-extrabold text-white bg-slate-800 dark:bg-primary px-2 py-0.5 rounded uppercase tracking-wider shadow-sm">
            Hệ Sinh Thái Zalo Business
          </span>
        </div>
      </div>
      <a 
        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 transition" 
        href="https://zalo.me/0333231232"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nhắn Zalo
      </a>
    </nav>
  );
};

export default Header;
