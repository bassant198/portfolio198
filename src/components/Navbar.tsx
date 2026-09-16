import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/90 backdrop-blur-md py-3.5 border-b border-violet-900/20 shadow-lg shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="navbar-brand-link"
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-violet-900/30 group-hover:scale-105 transition-transform duration-200 border border-violet-400/20">
            <Code2 className="w-5 h-5 text-violet-200" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-violet-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-violet-400/90 font-medium tracking-wide">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-[#0D111D]/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={item.href}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-xs text-emerald-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for Hire
          </div>
          <a
            id="navbar-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-md shadow-violet-950/50 border border-violet-400/30"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-button"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#070A12]/98 border-b border-violet-900/30 px-6 py-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-emerald-300 font-medium">Open to Remote Opportunities</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              id="mobile-contact-cta"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors shadow-lg shadow-violet-950/40"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
            <div className="text-center text-xs text-slate-500 pt-2">
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
