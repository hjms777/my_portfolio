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
      const sections = menuItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-48 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <h1 className="text-xl font-bold mb-8">Portfolio</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-4">
            <Link
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`text-lg ${
                activeSection === item.id
                  ? 'font-bold text-teal-500 dark:text-teal-300'
                  : ''
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
