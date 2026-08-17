import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ChevronDown, ChevronUp, Minus, Plus, Search } from 'lucide-react';
import { ALL_PRICING_SERVICES, type PricingService } from '../data/services';
import '../../styles/services.css';

const CATEGORIES = Array.from(new Set(ALL_PRICING_SERVICES.map(s => s.category)));

export default function PricingPage() {
  const navigate = useNavigate();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({});
  const curRef = useRef<HTMLDivElement>(null);
  const curORef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.sv-reveal').forEach((el) => io.observe(el));

    // Custom cursor
    const cur = curRef.current;
    const curO = curORef.current;
    let cx = 0, cy = 0, ox = 0, oy = 0;
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; } };
    const lerp = () => { ox += (cx - ox) * 0.12; oy += (cy - oy) * 0.12; if (curO) { curO.style.left = ox + 'px'; curO.style.top = oy + 'px'; } animId = requestAnimationFrame(lerp); };
    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      io.disconnect();
    };
  }, []);

  const handleQtyChange = (id: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities(prev => {
      const current = prev[id] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const handleBookItem = (item: PricingService) => {
    const qty = quantities[item.id] || 1;
    navigate(`/contact?service=${encodeURIComponent(item.title)}&qty=${qty}`);
  };

  const filteredServices = ALL_PRICING_SERVICES.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const grouped = filteredServices.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as { [cat: string]: PricingService[] });

  return (
    <div className="services-page">
      <div className="sv-cur" ref={curRef}></div>
      <div className="sv-cur-o" ref={curORef}></div>

      {/* NAV */}
      <nav className={`sv-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/"><img src="/knqlogo.svg" alt="Kings & Queens" className="sv-nav-logo" /></Link>
        <div className="sv-nav-r">
          <ul className="sv-nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing" style={{ color: 'var(--gold)' }}>Pricing</Link></li>
            <li><Link to="/private-clients">Private Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/#reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:02071124884" className="sv-nav-tel">020 7112 4884</a></li>
          </ul>
          <Link to="/contact#book" className="sv-nav-cta">Book Collection</Link>
          <div className={`sv-burger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="sv-hero" style={{ paddingBottom: '3rem' }}>
        <div className="sv-hero-inner">
          <div className="sv-crumbs">
            <Link to="/">Home</Link><span className="sep">/</span><span style={{ color: 'var(--gold)' }}>Pricing</span>
          </div>
          <h1 className="sv-title">
            Transparent pricing, <em>zero surprises.</em>
          </h1>
          <p className="sv-desc">
            Complete price directory for dry cleaning, shirt service, luxury delicate care, service washes, trainer restoration, and master tailoring. All services include free collection &amp; delivery across London with 24-hour turnaround.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH STRIP */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', width: '18px', height: '18px' }} />
            <input
              type="text"
              placeholder="Search garments, alterations, or laundry items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1rem 1rem 3rem',
                background: '#141414',
                border: '1px solid rgba(201,169,97,0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <button
              onClick={() => setActiveCategory('All')}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                border: '1px solid ' + (activeCategory === 'All' ? 'var(--gold)' : 'rgba(255,255,255,0.1)'),
                background: activeCategory === 'All' ? 'linear-gradient(135deg, #C6AE64, #9C7238)' : '#141414',
                color: activeCategory === 'All' ? '#000' : '#fff',
                fontWeight: activeCategory === 'All' ? 600 : 400,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              All Items ({ALL_PRICING_SERVICES.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '20px',
                  border: '1px solid ' + (activeCategory === cat ? 'var(--gold)' : 'rgba(255,255,255,0.1)'),
                  background: activeCategory === cat ? 'linear-gradient(135deg, #C6AE64, #9C7238)' : '#141414',
                  color: activeCategory === cat ? '#000' : '#fff',
                  fontWeight: activeCategory === cat ? 600 : 400,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE GRID DISPLAY */}
        {Object.keys(grouped).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'rgba(255,255,255,0.5)' }}>
            No pricing items match your search &quot;{searchQuery}&quot;.
          </div>
        ) : (
          Object.entries(grouped).map(([categoryName, items]) => (
            <div key={categoryName} style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--gold)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(201,169,97,0.15)', paddingBottom: '0.5rem' }}>
                {categoryName}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {items.map((item) => {
                  const isExpanded = expandedId === item.id;
                  const qty = quantities[item.id] || 1;
                  const formattedPrice = typeof item.price === 'number' ? `FROM £${item.price.toFixed(2)}` : item.price;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      style={{
                        background: isExpanded ? 'linear-gradient(180deg, rgba(198,174,100,0.15), rgba(20,20,20,0.95))' : '#141414',
                        border: '1px solid ' + (isExpanded ? 'var(--gold)' : 'rgba(201,169,97,0.15)'),
                        borderRadius: '8px',
                        padding: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 400, color: '#fff', fontSize: '1rem' }}>{item.title}</div>
                          {item.subtitle && <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{item.subtitle}</div>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <span style={{ color: 'var(--gold)', fontWeight: 500, fontSize: '0.95rem' }}>{formattedPrice}</span>
                          {isExpanded ? <ChevronUp size={16} color="var(--gold)" /> : <ChevronDown size={16} color="rgba(255,255,255,0.4)" />}
                        </div>
                      </div>

                      {/* EXPANDED INTERACTIVE PANEL */}
                      {isExpanded && (
                        <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,169,97,0.2)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Select Quantity:</span>
                            <div style={{ display: 'flex', alignItems: 'center', background: '#0A0A0A', border: '1px solid rgba(201,169,97,0.3)', borderRadius: '20px', padding: '2px 8px' }}>
                              <button onClick={(e) => handleQtyChange(item.id, -1, e)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
                                <Minus size={14} color="var(--gold)" />
                              </button>
                              <span style={{ padding: '0 10px', color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem' }}>{qty}</span>
                              <button onClick={(e) => handleQtyChange(item.id, 1, e)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
                                <Plus size={14} color="var(--gold)" />
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={(e) => { e.stopPropagation(); handleBookItem(item); }}
                            style={{
                              width: '100%',
                              padding: '0.8rem',
                              borderRadius: '6px',
                              background: 'linear-gradient(135deg, #C6AE64, #9C7238)',
                              color: '#000',
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            Book Collection for {item.title} ({qty}) &rarr;
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <footer className="sv-ft">
        <div className="sv-ft-g">
          <div>
            <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '44px', width: 'auto', display: 'block', filter: 'brightness(1.1)' }} />
            <p className="sv-ft-desc">Premium dry cleaning and laundrette in Waterloo, London. Trusted for over 15 years.</p>
          </div>
          <div className="sv-ft-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:02071124884">020 7112 4884</a></li>
              <li><a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:kingsandqueens.dcl@gmail.com">Email</a></li>
              <li><a href="#">221 Waterloo Rd, SE1</a></li>
            </ul>
          </div>
        </div>
        <div className="sv-ft-btm">
          <div className="sv-ft-cp">&copy; 2025 Kings &amp; Queens Dry Cleaning &amp; Laundrette</div>
        </div>
      </footer>
    </div>
  );
}
