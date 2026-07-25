import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ShieldCheck, ReceiptText, PhoneCall, Timer, Car } from 'lucide-react';
import '../../styles/services.css';

const PRIVILEGES = [
  {
    title: 'Direct Hotline',
    text: 'Bypass the general customer queue with a direct line to senior operations.',
    Icon: PhoneCall,
  },
  {
    title: 'Unmarked Collections',
    text: 'Discreet collection and delivery by clean, unmarked premium transport.',
    Icon: Car,
  },
  {
    title: 'NDA Privacy Protocols',
    text: 'Vetted staff and strict privacy handling for principals, estates and residences.',
    Icon: ShieldCheck,
  },
  {
    title: 'Bespoke Invoicing',
    text: 'Itemised monthly billing and digital receipts for smooth household accounting.',
    Icon: ReceiptText,
  },
  {
    title: 'Priority Turnaround',
    text: '24-hour standard turnaround with same-day emergency collections prioritised.',
    Icon: Timer,
  },
];

export default function PrivateClientsPage() {
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
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.sv-reveal').forEach((el) => io.observe(el));

    const cur = curRef.current;
    const curO = curORef.current;
    let cx = 0, cy = 0, ox = 0, oy = 0;
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (cur) {
        cur.style.left = cx + 'px';
        cur.style.top = cy + 'px';
      }
    };
    const lerp = () => {
      ox += (cx - ox) * 0.12;
      oy += (cy - oy) * 0.12;
      if (curO) {
        curO.style.left = ox + 'px';
        curO.style.top = oy + 'px';
      }
      animId = requestAnimationFrame(lerp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      io.disconnect();
    };
  }, []);

  return (
    <div className="services-page">
      <div className="sv-cur" ref={curRef}></div>
      <div className="sv-cur-o" ref={curORef}></div>

      <nav className={`sv-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/"><img src="KNQ_logo_for_website__3__e07d6e57__1_.svg" alt="Kings & Queens" className="sv-nav-logo" /></Link>
        <div className="sv-nav-r">
          <ul className="sv-nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/private-clients" className="active">Private Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:02076604800" className="sv-nav-tel">020 7660 4800</a></li>
          </ul>
          <Link to="/contact?service=Private%20Clients%20Programme#book" className="sv-nav-cta">Enquire</Link>
          <div className={`sv-burger ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      <div className={`sv-slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`sv-slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sv-slide-top">
          <img src="KNQ_logo_for_website__3__e07d6e57__1_.svg" alt="Kings & Queens" style={{ height: '32px', width: 'auto', filter: 'brightness(1.1)' }} />
          <div className="sv-slide-close" onClick={() => setMobileMenuOpen(false)}><span></span><span></span></div>
        </div>
        <div className="sv-slide-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--gold)' }}>Private Clients</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
        <div className="sv-slide-bottom">
          <a href="tel:02076604800" className="sv-slide-tel">020 7660 4800</a>
          <a href="https://wa.me/447503344983" target="_blank" rel="noopener noreferrer" className="sv-slide-wa">WhatsApp Private Desk</a>
          <Link to="/contact?service=Private%20Clients%20Programme#book" className="sv-slide-cta" onClick={() => setMobileMenuOpen(false)}>Enquire <span className="sv-arr">&rarr;</span></Link>
        </div>
      </div>

      <section className="sv-private-hero">
        <div className="sv-private-inner">
          <div className="sv-private-copy">
            <div className="sv-crumbs sv-reveal">
              <Link to="/">Home</Link><span className="sep">/</span><span style={{ color: 'var(--gold)' }}>Private Clients</span>
            </div>
            <div className="sv-label sv-reveal">Exclusive Atelier Concierge</div>
            <h1 className="sv-title sv-reveal">The Private Clients <em>Programme.</em></h1>
            <p className="sv-desc sv-reveal">
              High-profile individuals and elite estates require a higher standard of care,
              absolute discretion and flawless execution.
            </p>
            <p className="sv-private-lede sv-reveal">
              Built for estate managers, butlers, housekeepers and personal assistants, Kings & Queens acts
              as your private laundry atelier for couture fabrics, household wardrobes and everyday garments.
            </p>
            <div className="sv-detail-ctas sv-reveal">
              <Link to="/contact?service=Private%20Clients%20Programme#book" className="sv-btn sv-btn-p">Enquire for a Principal Account <span className="sv-arr">&rarr;</span></Link>
              <a href="tel:02076604800" className="sv-btn sv-btn-s">Call General Manager Desk</a>
            </div>
          </div>
          <div className="sv-private-card sv-reveal">
            <img
              src="/images/private-clients-wardrobe.jpg"
              alt="White-glove private wardrobe inspection for high-value garments"
              className="sv-private-card-img"
            />
            <div className="sv-private-card-caption">
              <div className="sv-private-crown">K&Q</div>
              <h2>Trust in Discretion</h2>
              <p>
                "Kings & Queens delivered flawless couture wardrobe care, with absolute discretion
                from their private collection process."
              </p>
              <span>Residence Manager, Mayfair Estate</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sv-private-privileges">
        <div className="sv-pricing-top">
          <div>
            <div className="sv-label sv-reveal">Core Privileges</div>
            <h2 className="sv-sh sv-reveal">Designed for households that require <em>precision.</em></h2>
          </div>
          <p className="sv-pricing-desc sv-reveal">
            A discreet operating layer for high-value wardrobes, time-sensitive requests and estate-level administration.
          </p>
        </div>
        <div className="sv-private-grid">
          {PRIVILEGES.map(({ title, text, Icon }, index) => (
            <div className="sv-private-privilege sv-reveal" key={title}>
              <div className="sv-private-icon"><Icon size={20} /></div>
              <div className="sv-private-num">{String(index + 1).padStart(2, '0')}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="sv-cta">
        <div className="sv-cta-in">
          <h2 className="sv-cta-h">A private standard for exceptional wardrobes.</h2>
          <p className="sv-cta-sub">Discreet collection. Priority care. Bespoke account handling.</p>
          <div className="sv-cta-btns">
            <Link to="/contact?service=Private%20Clients%20Programme#book" className="sv-btn sv-btn-d">Start an Enquiry <span className="sv-arr">&rarr;</span></Link>
            <a href="https://wa.me/447503344983" className="sv-btn sv-btn-d" style={{ background: 'transparent', border: '1px solid rgba(6,6,10,.2)' }}>WhatsApp Private Desk</a>
          </div>
        </div>
      </div>

      <footer className="sv-ft">
        <div className="sv-ft-g">
          <div>
            <img src="KNQ_logo_for_website__3__e07d6e57__1_.svg" alt="Kings & Queens" style={{ height: '34px', width: 'auto', filter: 'brightness(1.1)' }} />
            <p className="sv-ft-desc">Premium dry cleaning and private garment care in Waterloo, London. Trusted for over 15 years.</p>
          </div>
          <div className="sv-ft-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>Private Care</h4>
            <ul>
              <li><a href="tel:02076604800">Direct Hotline</a></li>
              <li><Link to="/contact?service=Private%20Clients%20Programme#book">Principal Account</Link></li>
              <li><Link to="/services#wedding-dress">Couture Garments</Link></li>
              <li><Link to="/services#hotels-business">Estate Laundry</Link></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:02076604800">020 7660 4800</a></li>
              <li><a href="https://wa.me/447503344983" target="_blank" rel="noopener noreferrer">WhatsApp Private Desk</a></li>
              <li><a href="mailto:basit@knqdcl.co.uk">basit@knqdcl.co.uk</a></li>
              <li><a href="mailto:simba@knqdcl.co.uk">simba@knqdcl.co.uk</a></li>
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
