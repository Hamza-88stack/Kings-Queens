import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router';
import { ChevronDown, ChevronUp, Minus, Plus, ArrowLeft, CheckCircle } from 'lucide-react';
import { SERVICE_DETAILS, type ServicePricingItem } from '../data/services';
import '../../styles/services.css';

export default function ServiceDetailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [item: string]: number }>({});

  const serviceIdParam = searchParams.get('serviceId') || searchParams.get('id');
  const serviceSlugParam = searchParams.get('slug');

  let currentService = SERVICE_DETAILS.find(s => 
    (serviceIdParam && s.id === parseInt(serviceIdParam)) || 
    (serviceSlugParam && s.slug === serviceSlugParam)
  );

  if (!currentService) {
    currentService = SERVICE_DETAILS[0];
  }

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
  }, [currentService]);

  const handleQtyChange = (itemName: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities(prev => {
      const current = prev[itemName] || 1;
      const updated = Math.max(1, current + delta);
      return { ...prev, [itemName]: updated };
    });
  };

  const handleBookItem = (item: ServicePricingItem) => {
    const qty = quantities[item.item] || 1;
    navigate(`/contact?service=${encodeURIComponent(item.item)}&qty=${qty}`);
  };

  return (
    <div className="services-page">
      <div className="sv-cur" ref={curRef}></div>
      <div className="sv-cur-o" ref={curORef}></div>

      {/* NAV */}
      <nav className={`sv-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/"><img src="/knqlogo.svg" alt="Kings & Queens" className="sv-nav-logo" /></Link>
        <div className="sv-nav-r">
          <ul className="sv-nav-links">
            <li><Link to="/services" style={{ color: 'var(--gold)' }}>Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/private-clients">Private Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:02071124884" className="sv-nav-tel">020 7112 4884</a></li>
          </ul>
          <Link to="/contact#book" className="sv-nav-cta">Book Collection</Link>
          <div className={`sv-burger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <section className="sv-hero" style={{ paddingBottom: '2.5rem' }}>
        <div className="sv-hero-inner">
          <div className="sv-crumbs">
            <Link to="/">Home</Link><span className="sep">/</span><Link to="/services">Services</Link><span className="sep">/</span><span style={{ color: 'var(--gold)' }}>{currentService.title}</span>
          </div>
          <div style={{ display: 'inline-block', background: 'rgba(201,169,97,0.15)', border: '1px solid var(--gold)', borderRadius: '20px', padding: '4px 16px', color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1rem' }}>
            {currentService.badge || 'Professional Service'}
          </div>
          <h1 className="sv-title">
            Order <em>{currentService.title}</em>
          </h1>
          <p className="sv-desc">
            {currentService.p1} {currentService.p2}
          </p>
        </div>
      </section>

      {/* SERVICE SELECTOR TABS */}
      <div className="sv-order-tabs-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 2rem' }}>
        <div className="sv-order-tabs" style={{ display: 'flex', gap: '0.8rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {SERVICE_DETAILS.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/service/order?slug=${s.slug}`)}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                border: '1px solid ' + (s.id === currentService.id ? 'var(--gold)' : 'rgba(201,169,97,0.2)'),
                background: s.id === currentService.id ? 'linear-gradient(135deg, #C6AE64, #9C7238)' : '#141414',
                color: s.id === currentService.id ? '#000' : '#fff',
                fontWeight: s.id === currentService.id ? 600 : 400,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* PRICING GRID & BOOKING */}
      <div className="sv-order-pricing-wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div className="sv-order-pricing-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 300, color: '#fff' }}>
            {currentService.title} Price Directory
          </h2>
          <Link to="/services" style={{ color: 'var(--gold)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ArrowLeft size={16} /> Back to All Services
          </Link>
        </div>

        <div className="sv-order-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.2rem' }}>
          {currentService.pricing.map((p, idx) => {
            const isExpanded = expandedItem === p.item;
            const qty = quantities[p.item] || 1;
            const formattedPrice = typeof p.price === 'number' ? `FROM £${p.price.toFixed(2)}` : p.price;

            return (
              <div
                key={idx}
                onClick={() => setExpandedItem(isExpanded ? null : p.item)}
                style={{
                  background: isExpanded ? 'linear-gradient(180deg, rgba(198,174,100,0.18), rgba(20,20,20,0.95))' : '#141414',
                  border: '1px solid ' + (isExpanded ? 'var(--gold)' : 'rgba(201,169,97,0.2)'),
                  borderRadius: '10px',
                  padding: '1.3rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 400, color: '#fff', fontSize: '1.05rem' }}>{p.item}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>Includes 24hr collection &amp; delivery</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '1rem' }}>{formattedPrice}</span>
                    {isExpanded ? <ChevronUp size={18} color="var(--gold)" /> : <ChevronDown size={18} color="rgba(255,255,255,0.4)" />}
                  </div>
                </div>

                {isExpanded && (
                  <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,169,97,0.25)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Quantity:</span>
                      <div style={{ display: 'flex', alignItems: 'center', background: '#0A0A0A', border: '1px solid rgba(201,169,97,0.3)', borderRadius: '20px', padding: '2px 10px' }}>
                        <button onClick={(e) => handleQtyChange(p.item, -1, e)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
                          <Minus size={14} color="var(--gold)" />
                        </button>
                        <span style={{ padding: '0 12px', color: 'var(--gold)', fontWeight: 600, fontSize: '0.95rem' }}>{qty}</span>
                        <button onClick={(e) => handleQtyChange(p.item, 1, e)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '4px' }}>
                          <Plus size={14} color="var(--gold)" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); handleBookItem(p); }}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, #C6AE64, #9C7238)',
                        color: '#000',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      Book Collection for {p.item} ({qty}) &rarr;
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* GUARANTEE STRIP */}
      <div style={{ background: '#0D0D0D', borderTop: '1px solid rgba(201,169,97,0.15)', borderBottom: '1px solid rgba(201,169,97,0.15)', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <CheckCircle size={36} color="var(--gold)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.6rem', fontWeight: 300, color: '#fff', marginBottom: '0.5rem' }}>
            100% Satisfaction Guarantee
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            If you are not entirely satisfied with any item we clean, we will re-clean it for free — no questions asked. Free collection &amp; delivery across all London postcodes.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="sv-ft">
        <div className="sv-ft-g">
          <div>
            <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '34px', width: 'auto', filter: 'brightness(1.1)' }} />
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
