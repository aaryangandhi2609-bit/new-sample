'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg transition-smooth">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary animate-fadeIn">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="group relative text-sm font-medium text-foreground transition-smooth hover:text-primary"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-smooth group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-smooth ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-smooth ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-smooth ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 border-t border-border/40 py-4 md:hidden animate-slideDown">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="text-left text-sm font-medium text-foreground transition-smooth hover:text-primary hover:translate-x-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
