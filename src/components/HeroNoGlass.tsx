import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// Utility easing and clamping helpers
const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const mapRange = (p: number, inMin: number, inMax: number) => clamp((p - inMin) / (inMax - inMin));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - clamp(t), 3);

const HeroNoGlass = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);
  const ctaWrapRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = sectionRef.current;
    const sticky = stickyRef.current;
    const heading = headingRef.current;
    const sub = subRef.current;
    const ctaWrap = ctaWrapRef.current;
    const cta = ctaRef.current;

    if (!el || !sticky || !heading || !sub || !cta || !ctaWrap) return;

    // Initial styles for smoother animation
    heading.style.willChange = 'transform, opacity';
    sub.style.willChange = 'transform, opacity, margin-top';
    cta.style.willChange = 'transform, opacity';
    ctaWrap.style.willChange = 'margin-top';
    sticky.style.willChange = 'transform';

    const update = () => {
      rafRef.current = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = Math.max(rect.height - vh, 1); // ~50vh (150vh container - 100vh viewport)
      const scrolled = clamp(-rect.top, 0, totalScroll);
      const progress = scrolled / totalScroll; // 0 -> 1

      if (prefersReduced) {
        heading.style.opacity = '1';
        heading.style.transform = 'translate3d(0,0,0)';
        sub.style.opacity = '1';
        sub.style.transform = 'translate3d(0,0,0)';
        cta.style.opacity = '1';
        cta.style.transform = 'translate3d(0,0,0)';
        sticky.style.transform = 'translate3d(0,0,0)';
        return;
      }

      // Heading lifts upward while subheading scrolls up into view
      const hP = easeOutCubic(mapRange(progress, 0, 0.45));
      const sP = easeOutCubic(mapRange(progress, 0.08, 0.65));
      const bP = easeOutCubic(mapRange(progress, 0.4, 0.85));

      // Move heading up to create space for subheading (adaptive to viewport)
      const upShiftPx = Math.round(hP * Math.min(Math.max(vh * 0.08, 28), 56));
      heading.style.opacity = '1';
      heading.style.transform = `translate3d(0, ${-upShiftPx}px, 0)`;

      // Subheading reveals and rises smoothly toward its resting position
      const subShiftPx = Math.round((1 - sP) * 32);
      sub.style.opacity = String(sP);
      sub.style.transform = `translate3d(0, ${subShiftPx}px, 0)`;

      // Keep visual balance at rest: equal gaps above and below subheading
      const isMd = window.innerWidth >= 768;
      const desiredGap = isMd ? 44 : 32; // px (increase overall spacing)
      // Dynamic margin compensates for heading's upward shift and sub's interim offset
      const dynamicTopMargin = Math.round(desiredGap - upShiftPx + subShiftPx);
      sub.style.marginTop = `${dynamicTopMargin}px`;
      ctaWrap.style.marginTop = `${desiredGap}px`;

      // CTA enters later to maintain visual hierarchy
      cta.style.opacity = String(bP);
      cta.style.transform = `translate3d(0, ${Math.round((1 - bP) * 16)}px, 0)`;

      // Keep sticky viewport fixed to prevent any gap below the video
      sticky.style.transform = 'translate3d(0,0,0)';
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    const onResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // IntersectionObserver to avoid work when not visible
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onResize);
          onResize();
        } else {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onResize);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    io.observe(el);
    // Initial paint
    onResize();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    // 150vh container to create scroll space; sticky inner keeps background fixed during this scroll
    <section ref={sectionRef} className="relative h-[150vh] bg-deep-soil text-white overflow-visible">
      {/* Sticky viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen">
        {/* Organic background shapes (SVG) */}
        <div className="absolute inset-0 -z-10">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <radialGradient id="rg1" cx="20%" cy="25%" r="60%">
                <stop offset="0%" stopColor="#B08A2B" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#B08A2B" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="rg2" cx="80%" cy="35%" r="50%">
                <stop offset="0%" stopColor="#3F4F2E" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#3F4F2E" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1E130D" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#1E130D" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#1E130D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1440" height="900" fill="#1E130D" />
            <rect width="1440" height="900" fill="url(#rg1)" />
            <rect width="1440" height="900" fill="url(#rg2)" />
            <rect width="1440" height="900" fill="url(#fade)" />
          </svg>
        </div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-soil/30 via-deep-soil/15 to-transparent" />

        {/* Background blur layer (above background shapes, below content) */}
        <div className="absolute inset-0 pointer-events-none backdrop-blur-sm" />

        {/* Content directly over the background (no glass container) */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center relative">
            {/* Keep heading in normal flow so it can move up and reveal space */}
            <h1 ref={headingRef} className="text-4xl md:text-6xl font-thin leading-tight tracking-tight text-white font-heading">
              We Invest to Empower
              <span className="block text-indigo-dye font-normal">Health and Sovereignty</span>
            </h1>

            {/* Reserve space so subheading can rise into it without overlapping */}
            <div ref={subRef} className="mx-auto max-w-3xl opacity-0 mb-0 min-h-[3.25rem] md:min-h-[4rem]">
              <p className="text-lg md:text-xl leading-relaxed font-light text-white py-6 px-8">
                We acquire regenerative assets across the Americas — creating value through trust, technology, and modern deal structures.
              </p>
            </div>

            <div ref={ctaWrapRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-0">
              <button
                ref={ctaRef}
                className="bg-warm-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium flex items-center transition-colors duration-200 hover:bg-warm-white/20 hover:border-white/30 shadow-lg opacity-0"
              >
                Explore Fund
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNoGlass;