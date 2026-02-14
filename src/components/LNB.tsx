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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white/90 text-gray-900 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-slate-900/90 dark:text-white md:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="lnb-navigation"
        aria-label="메뉴 열기"
      >
        {isMobileMenuOpen ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isMobileMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="메뉴 닫기"
        />
      )}

      <nav
        id="lnb-navigation"
        className={`fixed left-0 top-0 z-40 h-full w-72 max-w-[80vw] border-r border-gray-200 bg-white/90 p-6 pt-20 text-gray-900 backdrop-blur-md transition-transform duration-300 dark:border-gray-700 dark:bg-slate-900/90 dark:text-white md:w-48 md:translate-x-0 md:pt-6 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="mb-10 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">MinSung</h1>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  activeSection === item.id
                    ? 'border-l-4 border-indigo-600 bg-indigo-50 text-indigo-600 dark:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LNB;
