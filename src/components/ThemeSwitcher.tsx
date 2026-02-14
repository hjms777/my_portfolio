'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonId = React.useId();
  const menuId = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-lg border-2 border-gray-600 dark:border-indigo-600 shadow-md px-4 py-2 bg-gray-100 dark:bg-indigo-900/40 backdrop-blur-sm text-sm font-semibold text-gray-900 dark:text-indigo-300 hover:bg-gray-200 dark:hover:bg-indigo-900/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-indigo-900 focus:ring-indigo-400 transition-all duration-200"
          id={buttonId}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          id={menuId}
          className="origin-top-right absolute right-0 mt-2 w-full rounded-lg shadow-xl bg-white dark:bg-gray-900/95 backdrop-blur-md border-2 border-gray-600 dark:border-indigo-800 focus:outline-none z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={buttonId}
        >
          <div className="py-1" role="none">
            <button
              onClick={() => {
                setTheme('light');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-indigo-900/30 hover:text-black dark:hover:text-indigo-300 transition-colors duration-150"
              role="menuitem"
            >
              Light
            </button>
            <button
              onClick={() => {
                setTheme('dark');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-indigo-900/30 hover:text-black dark:hover:text-indigo-300 transition-colors duration-150"
              role="menuitem"
            >
              Dark
            </button>
            <button
              onClick={() => {
                setTheme('system');
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-indigo-900/30 hover:text-black dark:hover:text-indigo-300 transition-colors duration-150"
              role="menuitem"
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
