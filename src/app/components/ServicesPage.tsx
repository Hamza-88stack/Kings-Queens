import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SERVICE_DETAILS, SERVICE_PRICE_GROUPS } from '../data/services';
import '../../styles/services.css';

const QUICK_NAV = SERVICE_DETAILS.map((s) => ({ id: s.slug, num: s.num, name: s.title }));

const AREAS = [
  'Waterloo','Lambeth','Southwark','Westminster','London Bridge','Elephant & Castle',
  'Kennington','Vauxhall','Bermondsey','Borough','Pimlico','Victoria',
  'Brixton','Clapham','Battersea','Chelsea','Fulham','Canary Wharf',
  'City of London','Shoreditch','Mayfair','Kensington','Notting Hill','Camden',
  'Islington','All London Postcodes',
];

/* ═══ COMPONENT ═══ */

export default function ServicesPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // Cursor
    const cur = curRef.current;
    const curO = curORef.current;
    let cx = 0, cy = 0, ox = 0, oy = 0;
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; } };
    const lerp = () => { ox += (cx - ox) * 0.12; oy += (cy - oy) * 0.12; if (curO) { curO.style.left = ox + 'px'; curO.style.top = oy + 'px'; } animId = requestAnimationFrame(lerp); };
    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(lerp);

    const hoverEls = document.querySelectorAll('.services-page a,.services-page button,.sv-qnav-item,.sv-how-step,.sv-price-card,.sv-g-card');
    const addH = () => curO?.classList.add('hover');
    const rmH = () => curO?.classList.remove('hover');
    hoverEls.forEach((el) => { el.addEventListener('mouseenter', addH); el.addEventListener('mouseleave', rmH); });

    // Hash scroll
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      io.disconnect();
      hoverEls.forEach((el) => { el.removeEventListener('mouseenter', addH); el.removeEventListener('mouseleave', rmH); });
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="services-page">
      <div className="sv-cur" ref={curRef}></div>
      <div className="sv-cur-o" ref={curORef}></div>

      {/* ═══ NAV ═══ */}
      <nav className={`sv-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/"><img src="/knqlogo.svg" alt="Kings & Queens" className="sv-nav-logo" /></Link>
        <div className="sv-nav-r">
          <ul className="sv-nav-links">
            <li><a href="#" className="active">Services</a></li>
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
      {/* Glass Slide Menu */}
      <div className={`sv-slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`sv-slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sv-slide-top">
          <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '32px', width: 'auto', filter: 'brightness(1.1)' }} />
          <div className="sv-slide-close" onClick={() => setMobileMenuOpen(false)}><span></span><span></span></div>
        </div>
        <div className="sv-slide-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.05s' }}>Home</Link>
          <a href="#" style={{ color: 'var(--gold)' }} onClick={() => setMobileMenuOpen(false)}>Services</a>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.15s' }}>Private Clients</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.2s' }}>About</Link>
          <Link to="/#reviews" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.25s' }}>Reviews</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.3s' }}>Contact</Link>
        </div>
        <div className="sv-slide-bottom">
          <a href="tel:02071124884" className="sv-slide-tel">020 7112 4884</a>
          <a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer" className="sv-slide-wa">WhatsApp Us</a>
          <Link to="/contact#book" className="sv-slide-cta" onClick={() => setMobileMenuOpen(false)}>Book Collection <span className="sv-arr">&rarr;</span></Link>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="sv-hero">
        <div className="sv-hero-inner">
          <div className="sv-crumbs" style={{ opacity: 0, animation: 'sv-slideUp .8s var(--ease) .1s forwards' }}>
            <Link to="/">Home</Link><span className="sep">/</span><span style={{ color: 'var(--gold)' }}>Services</span>
          </div>
          <h1 className="sv-title" style={{ opacity: 0, animation: 'sv-slideUp 1s var(--ease) .2s forwards' }}>
            Professional dry cleaning &amp; laundry <em>services.</em>
          </h1>
          <p className="sv-desc" style={{ opacity: 0, animation: 'sv-slideUp .9s var(--ease) .4s forwards' }}>
            Eight expert services under one roof - from everyday laundry to luxury garment restoration,
            wedding dress preservation and hotel-grade business contracts. Free collection and delivery
            across all London postcodes with 24-hour turnaround.
          </p>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <div className="sv-trust">
        <div className="sv-ts sv-reveal"><div className="sv-ts-v">5,433</div><div className="sv-ts-l">Five-Star Google Reviews</div></div>
        <div className="sv-ts sv-reveal sv-d1"><div className="sv-ts-v">130,000+</div><div className="sv-ts-l">Customers Served</div></div>
        <div className="sv-ts sv-reveal sv-d2"><div className="sv-ts-v">15+ Years</div><div className="sv-ts-l">Established in London</div></div>
        <div className="sv-ts sv-reveal sv-d3"><div className="sv-ts-v">24hr</div><div className="sv-ts-l">Standard Turnaround</div></div>
      </div>

      {/* ═══ QUICK NAV ═══ */}
      <div className="sv-qnav">
        <div className="sv-qnav-inner sv-reveal">
          <p className="sv-qnav-title">Jump to a service below, or <em>browse them all.</em></p>
          <div className="sv-qnav-grid">
            {QUICK_NAV.map((q) => (
              <div key={q.id} className="sv-qnav-item" onClick={() => scrollTo(q.id)}>
                <div className="sv-qnav-num">{q.num}</div>
                <div className="sv-qnav-name">{q.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SERVICE DETAILS ═══ */}
      {SERVICE_DETAILS.map((svc, i) => (
        <section key={svc.slug} id={svc.slug} className={`sv-detail${i % 2 !== 0 ? ' reverse' : ''}`}>
          <div className="sv-detail-inner">
            <div className="sv-detail-img sv-reveal">
              {svc.badge && <div className="sv-detail-badge">{svc.badge}</div>}
              <ImageWithFallback src={svc.img} alt={`${svc.title} — Kings & Queens Dry Cleaning London`} />
            </div>
            <div className="sv-detail-content">
              <div className="sv-detail-num sv-reveal">{svc.num}</div>
              <h2 className="sv-detail-h sv-reveal">{svc.titleLead} <em>{svc.titleEm}</em></h2>
              <p className="sv-detail-p sv-reveal">{svc.p1}</p>
              <p className="sv-detail-p sv-reveal">{svc.p2}</p>
              <ul className="sv-detail-list sv-reveal">
                {svc.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="sv-detail-price sv-reveal">
                <span className="sv-detail-price-label">{svc.priceLabel}</span>
                <span className="sv-detail-price-val">{svc.priceVal}</span>
                <span className="sv-detail-price-label">{svc.priceSub}</span>
              </div>
              <div className="sv-detail-ctas sv-reveal">
                <Link to={`/service/order?slug=${svc.slug}`} className="sv-btn sv-btn-p">
                  Order &amp; View Prices <span className="sv-arr">&rarr;</span>
                </Link>
                <a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn-s">
                  WhatsApp Us <span className="sv-arr">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ INLINE CTA ═══ */}
      <div className="sv-inline-cta">
        <div className="sv-inline-cta-inner sv-reveal">
          <div className="sv-inline-cta-text">
            <h3 className="sv-inline-cta-h">Not sure which service <em>you need?</em></h3>
            <p className="sv-inline-cta-p">Send us a photo on WhatsApp or call us — we'll assess your items and recommend the best service at the right price.</p>
          </div>
          <div className="sv-inline-cta-btns">
            <a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn-p">WhatsApp Us <span className="sv-arr">&rarr;</span></a>
            <a href="tel:02071124884" className="sv-btn sv-btn-s">Call 020 7112 4884</a>
          </div>
        </div>
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="sv-how">
        <div className="sv-how-center">
          <div className="sv-label sv-reveal">How It Works</div>
          <h2 className="sv-sh sv-reveal sv-d1">Four simple steps to <em>fresh garments.</em></h2>
        </div>
        <div className="sv-how-grid">
          <div className="sv-how-step sv-reveal">
            <div className="sv-how-num">I</div>
            <h3 className="sv-how-t">Book</h3>
            <p className="sv-how-d">Book a free collection online, by phone or via WhatsApp. Choose a time slot that works for you — mornings, afternoons or evenings.</p>
          </div>
          <div className="sv-how-step sv-reveal sv-d1">
            <div className="sv-how-num">II</div>
            <h3 className="sv-how-t">We Collect</h3>
            <p className="sv-how-d">Our driver arrives at your door. No need to sort — just hand us your bag. We'll assess each item and confirm pricing before we start.</p>
          </div>
          <div className="sv-how-step sv-reveal sv-d2">
            <div className="sv-how-num">III</div>
            <h3 className="sv-how-t">We Clean</h3>
            <p className="sv-how-d">Every garment is individually treated, cleaned with eco-friendly products, hand-finished and quality-inspected. 24-hour turnaround as standard.</p>
          </div>
          <div className="sv-how-step sv-reveal sv-d3">
            <div className="sv-how-num">IV</div>
            <h3 className="sv-how-t">We Deliver</h3>
            <p className="sv-how-d">Your items are delivered back to your door, perfectly cleaned, pressed and packaged. Satisfaction guaranteed on every single item.</p>
          </div>
        </div>
      </section>

      {/* ═══ PRICING OVERVIEW ═══ */}
      <section className="sv-pricing">
        <div className="sv-pricing-top">
          <div>
            <div className="sv-label sv-reveal">Transparent Pricing</div>
            <h2 className="sv-sh sv-reveal sv-d1">Clear prices, no <em>surprises.</em></h2>
          </div>
          <p className="sv-pricing-desc sv-reveal sv-d2">All prices include free collection and delivery across London. Volume discounts available for regular customers and businesses.</p>
        </div>
        <div className="sv-pricing-grid">
          {SERVICE_PRICE_GROUPS.map((cat) => (
            <div key={cat.name} className="sv-price-card sv-reveal">
              <div className="sv-price-name">{cat.name}</div>
              <div className="sv-price-from">Starting from</div>
              <div className="sv-price-val">{cat.from}</div>
              <ul className="sv-price-items">
                {cat.items.map(([item, price]) => (
                  <li key={item}><span>{item}</span><span>{price}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="sv-price-note sv-reveal">
          Prices shown are starting rates. Final pricing depends on garment type, fabric and condition.
          We always confirm costs before starting any work. <Link to="/contact" style={{ color: 'var(--gold)' }}>Request a detailed quote &rarr;</Link>
        </p>
      </section>

      {/* ═══ GUARANTEE ═══ */}
      <section className="sv-guarantee">
        <div className="sv-guarantee-inner sv-reveal">
          <div className="sv-guarantee-icon">&#10003;</div>
          <h2>Our promise to <em>you.</em></h2>
          <p>
            If you're not 100% happy with any item we've cleaned, we will re-clean it for free.
            No questions asked, no time limit. We've built our reputation over 15 years on this
            simple principle: your satisfaction is non-negotiable.
          </p>
          <Link to="/contact#book" className="sv-btn sv-btn-p">
            Book a Free Collection <span className="sv-arr">&rarr;</span>
          </Link>
        </div>
        <div className="sv-guarantee-grid">
          <div className="sv-g-card sv-reveal">
            <div className="sv-g-card-icon">I</div>
            <h4>Free Re-Clean</h4>
            <p>Not satisfied? We re-clean any item for free, no questions asked.</p>
          </div>
          <div className="sv-g-card sv-reveal sv-d1">
            <div className="sv-g-card-icon">II</div>
            <h4>Free Collection</h4>
            <p>We collect and deliver across all London postcodes at no extra cost.</p>
          </div>
          <div className="sv-g-card sv-reveal sv-d2">
            <div className="sv-g-card-icon">III</div>
            <h4>Eco-Friendly</h4>
            <p>Biodegradable detergents, energy-efficient machines, water conservation.</p>
          </div>
        </div>
      </section>

      {/* ═══ AREAS ═══ */}
      <div className="sv-areas">
        <div className="sv-areas-inner sv-reveal">
          <h2 className="sv-areas-t">Free collection &amp; delivery across <em>London</em></h2>
          <div className="sv-areas-list">
            {AREAS.map((area, i) => (
              <span key={area}>
                <span>{area}</span>
                {i < AREAS.length - 1 && <span className="sv-areas-sep"> &middot; </span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="sv-cta">
        <div className="sv-cta-in">
          <h2 className="sv-cta-h">Ready to experience London's finest dry cleaning?</h2>
          <p className="sv-cta-sub">Free collection. 24-hour turnaround. Satisfaction guaranteed.</p>
          <div className="sv-cta-btns">
            <Link to="/contact#book" className="sv-btn sv-btn-d">Book Your Collection <span className="sv-arr">&rarr;</span></Link>
            <a href="tel:02071124884" className="sv-btn sv-btn-d" style={{ background: 'transparent', border: '1px solid rgba(6,6,10,.2)' }}>Call 020 7112 4884</a>
          </div>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="sv-ft">
        <div className="sv-ft-g">
          <div>
            <div className="sv-ft-brand">
              <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '34px', width: 'auto', filter: 'brightness(1.1)' }} />
            </div>
            <p className="sv-ft-desc">Premium dry cleaning and laundrette in the heart of Waterloo, London. Trusted for over 15 years.</p>
          </div>
          <div className="sv-ft-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#reviews">Reviews</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#dry-cleaning" onClick={(e) => { e.preventDefault(); scrollTo('dry-cleaning'); }}>Dry Cleaning</a></li>
              <li><a href="#shirt-service" onClick={(e) => { e.preventDefault(); scrollTo('shirt-service'); }}>Shirt Service</a></li>
              <li><a href="#laundry-service-wash" onClick={(e) => { e.preventDefault(); scrollTo('laundry-service-wash'); }}>Laundry</a></li>
              <li><a href="#wedding-dress" onClick={(e) => { e.preventDefault(); scrollTo('wedding-dress'); }}>Wedding Dresses</a></li>
              <li><a href="#alterations" onClick={(e) => { e.preventDefault(); scrollTo('alterations'); }}>Alterations</a></li>
              <li><a href="#hotels-business" onClick={(e) => { e.preventDefault(); scrollTo('hotels-business'); }}>Hotels &amp; Business</a></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
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
          <div className="sv-ft-lgl"><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Claims</a></div>
        </div>
      </footer>
    </div>
  );
}
