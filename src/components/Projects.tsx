import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    title: 'Lomas de Atitlán',
    location: 'Lake Atitlán, Guatemala',
    image:
      'https://images.unsplash.com/photo-1549887534-1541e9323e49?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Sacred Valley Retreat',
    location: 'Sacred Valley, Peru',
    image:
      'https://images.unsplash.com/photo-1528821154947-1aa3d1f1bb59?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Diamante Sanctuary',
    location: 'Diamante Valley, Costa Rica',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Uvita Wellness Hub',
    location: 'Uvita, Costa Rica',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Bocas Regenerative Resort',
    location: 'Bocas del Toro, Panama',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Boquete Mountain Sanctuary',
    location: 'Boquete, Panama',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
  },
];

// Fallback reference image from Unsplash when a project is missing an image
const getProjectImage = (p: { image?: string; location?: string; title?: string }) => {
  if (p.image && p.image.trim().length > 0) return p.image;
  const query = [p.title, p.location, 'nature', 'landscape']
    .filter(Boolean)
    .slice(0, 3)
    .join(',');
  return `https://source.unsplash.com/1600x1200/?${encodeURIComponent(query || 'nature,landscape')}`;
};

// Additional fallback when the primary image fails to load
const getFallbackImage = (p: { location?: string; title?: string }) => {
  const query = [p.title, p.location, 'nature', 'landscape']
    .filter(Boolean)
    .slice(0, 3)
    .join(',');
  return `https://source.unsplash.com/1600x1200/?${encodeURIComponent(query || 'nature,landscape')}`;
};

// Static final-resort fallback image (stable Unsplash photo URL)
const STATIC_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Snap to a card by index
  const scrollToIndex = (index: number) => {
    const c = containerRef.current;
    if (!c) return;
    const child = c.children[index] as HTMLElement | undefined;
    if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const next = () => {
    const i = (activeIndex + 1) % projects.length;
    setActiveIndex(i);
    scrollToIndex(i);
  };
  const prev = () => {
    const i = (activeIndex - 1 + projects.length) % projects.length;
    setActiveIndex(i);
    scrollToIndex(i);
  };

  // Track which card is centered while user scrolls
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const center = c.scrollLeft + c.clientWidth / 2;
        let closest = 0;
        let min = Infinity;
        Array.from(c.children).forEach((child, idx) => {
          const el = child as HTMLElement;
          const rectLeft = el.offsetLeft + el.clientWidth / 2; // card center relative to container
          const d = Math.abs(rectLeft - center);
          if (d < min) {
            min = d;
            closest = idx;
          }
        });
        setActiveIndex(closest);
        ticking = false;
      });
    };

    c.addEventListener('scroll', onScroll, { passive: true });
    return () => c.removeEventListener('scroll', onScroll as any);
  }, []);

  const indexLabel = useMemo(() => String(activeIndex + 1).padStart(2, '0'), [activeIndex]);

  return (
    <section id="projects" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-thin text-deep-soil tracking-tight">Featured Projects</h2>
            <p className="text-deep-soil/60 font-light text-sm mt-2">Modern sanctuaries and sovereign communities across the Americas</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button aria-label="Previous" onClick={prev} className="h-10 w-10 rounded-full border border-sand-beige/60 text-indigo-dye hover:bg-indigo-dye/5 flex items-center justify-center transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next" onClick={next} className="h-10 w-10 rounded-full border border-sand-beige/60 text-indigo-dye hover:bg-indigo-dye/5 flex items-center justify-center transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal carousel */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className={[
                  'snap-center shrink-0 rounded-3xl overflow-hidden relative shadow-lg transition-all duration-500',
                  'w-[260px] h-[380px] sm:w-[340px] sm:h-[440px] md:w-[420px] md:h-[500px]',
                  i === activeIndex ? 'scale-[1.02] shadow-xl' : 'scale-95 opacity-90',
                ].join(' ')}
              >
                <img
                  src={getProjectImage(p)}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    // First fallback: Unsplash Source API by query
                    if (img.dataset.fallbackApplied !== 'true') {
                      img.dataset.fallbackApplied = 'true';
                      img.src = getFallbackImage(p);
                      return;
                    }
                    // Second fallback: static known-good image
                    if (img.dataset.staticFallbackApplied !== 'true') {
                      img.dataset.staticFallbackApplied = 'true';
                      img.src = STATIC_FALLBACK_IMAGE;
                      return;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-soil/60 via-deep-soil/10 to-transparent" />

                {/* Top-right location */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-indigo-dye text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{p.location}</span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-white/70 text-xs font-light tracking-wider">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-white text-lg sm:text-xl font-light tracking-wide">{p.title}</h3>
                    </div>
                    <button onClick={() => scrollToIndex((i + 1) % projects.length)} className="bg-white/90 hover:bg-white text-deep-soil rounded-full p-2 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="sm:hidden flex items-center justify-center gap-3 mt-6">
            <button aria-label="Previous" onClick={prev} className="h-10 w-10 rounded-full border border-sand-beige/60 text-indigo-dye hover:bg-indigo-dye/5 flex items-center justify-center transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next" onClick={next} className="h-10 w-10 rounded-full border border-sand-beige/60 text-indigo-dye hover:bg-indigo-dye/5 flex items-center justify-center transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <button className="bg-gold hover:bg-gold/90 text-deep-soil px-8 py-3 rounded-full font-medium inline-flex items-center transition-all duration-200 text-sm tracking-wide">
            View Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;