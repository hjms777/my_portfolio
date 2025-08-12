'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const menuItems = [
  { id: 'intro', title: '소개' },
  { id: 'skills', title: '기술 스택' },
  { id: 'projects', title: '프로젝트' },
  { id: 'experience', title: '경력' },
  { id: 'contact', title: '연락처' },
];

const LNB = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-48 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white p-6">
      <h1 className="text-2xl font-bold mb-10 text-gray-800 dark:text-white tracking-tight">MinSung</h1>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                activeSection === item.id 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-600 dark:border-indigo-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LNB;
