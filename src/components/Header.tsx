import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Scroll-reactive, elegant background wrapper */}
      <div
        className={[
          'relative px-6 sm:px-8 lg:px-10 transition-all duration-500',
          scrolled
            ? 'bg-warm-white/85 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Left: Logo */}
          <div
            className={[
              'flex items-center space-x-3 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
            ].join(' ')}
          >
            <a href="/" aria-label="Home">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/s8wxy93Zod7rS2Vs1nid/media/6368daf2d23ce5be90bdb021.png"
                alt="Freeborn Capital"
                className="h-8 brightness-0 invert"
              />
            </a>
          </div>

          {/* Center: Primary Nav */}
          <nav
            className={[
              'hidden md:flex items-center space-x-8 transition-all duration-700',
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
            ].join(' ')}
          >
            {[
              { href: '#about', label: 'About' },
              { href: '#funds', label: 'Funds' },
              { href: '#acquisitions', label: 'Acquisitions' },
              { href: '#projects', label: 'Projects' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-white/90 hover:text-text-accent transition-colors font-medium text-sm tracking-wide"
              >
                <span className="relative">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right: CTA + Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate('/book-call')}
              className={[
                'relative bg-transparent border border-white/40 text-white px-5 py-2.5 rounded-full transition-colors duration-300 font-medium text-sm tracking-wide cursor-pointer',
                'hover:bg-white/10 hover:border-white/60',
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
              ].join(' ')}
              aria-label="Book a Call"
            >
              Book a Call
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Decorative gradient line that appears once scrolled */}
        <div
          className={[
            'pointer-events-none h-px mx-6 bg-gradient-to-r from-transparent via-gold/30 to-transparent transition-opacity duration-500',
            scrolled ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="md:hidden pt-2 pb-6">
            <div className="rounded-2xl border border-indigo-dye/10 bg-warm-white/90 shadow-xl overflow-hidden">
              <div className="px-5 py-4">
                <div className="grid gap-2">
                  {[
                    { href: '#about', label: 'About' },
                    { href: '#funds', label: 'Funds' },
                    { href: '#acquisitions', label: 'Acquisitions' },
                    { href: '#projects', label: 'Projects' },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-3 text-indigo-dye/90 hover:text-gold hover:bg-indigo-dye/5 transition-colors font-medium text-sm tracking-wide"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate('/book-call');
                    }}
                    className="w-full relative bg-indigo-dye/5 border border-indigo-dye/20 text-indigo-dye px-5 py-3 rounded-full transition-colors duration-300 font-medium text-sm tracking-wide hover:bg-indigo-dye/10"
                  >
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;