import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import '../../styles/about.css';

export default function AboutPage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const curRef = useRef<HTMLDivElement>(null);
  const curORef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll handler
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveals
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
    document.querySelectorAll('.ab-reveal').forEach((el) => io.observe(el));

    // Custom cursor
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

    // Hover effect for interactive elements
    const hoverEls = document.querySelectorAll('.about-page a,.about-page button,.ab-val,.ab-p-card,.ab-num,.ab-tl-item');
    const addHover = () => curO?.classList.add('hover');
    const removeHover = () => curO?.classList.remove('hover');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      io.disconnect();
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <div className="about-page">
      <div className="ab-cur" ref={curRef}></div>
      <div className="ab-cur-o" ref={curORef}></div>

      {/* NAV */}
      <nav className={`ab-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/">
          <img
            src="/knqlogo.svg"
            alt="Kings & Queens"
            className="ab-nav-logo"
          />
        </Link>
        <div className="ab-nav-r">
          <ul className="ab-nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/private-clients">Private Clients</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/#reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="tel:02071124884" className="ab-nav-tel">020 7112 4884</a></li>
          </ul>
          <Link to="/contact" className="ab-nav-cta">Book Collection</Link>
          <div
            className={`ab-burger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Glass Slide Menu */}
      <div className={`ab-slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`ab-slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="ab-slide-top">
          <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '32px', width: 'auto', filter: 'brightness(1.1)' }} />
          <div className="ab-slide-close" onClick={() => setMobileMenuOpen(false)}><span></span><span></span></div>
        </div>
        <div className="ab-slide-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.05s' }}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.1s' }}>Services</Link>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.15s' }}>Private Clients</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.2s', color: 'var(--agold)' }}>About</Link>
          <Link to="/#reviews" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.25s' }}>Reviews</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.3s' }}>Contact</Link>
        </div>
        <div className="ab-slide-bottom">
          <a href="tel:02071124884" className="ab-slide-tel">020 7112 4884</a>
          <a href="https://wa.me/447512244796" target="_blank" className="ab-slide-wa">WhatsApp Us</a>
          <Link to="/contact" className="ab-slide-cta" onClick={() => setMobileMenuOpen(false)}>Book Collection <span className="ab-arr">&rarr;</span></Link>
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="ab-pg-hero">
        <div className="ab-pg-hero-inner">
          <div className="ab-pg-crumbs">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--agold)' }}>About</span>
          </div>
          <h1
            className="ab-pg-title"
            style={{ opacity: 0, animation: 'abSlideUp 1s var(--aease) .2s forwards' }}
          >
            Established over fifteen years ago, rooted <em>in London.</em>
          </h1>
          <p
            className="ab-pg-desc"
            style={{ opacity: 0, animation: 'abSlideUp .9s var(--aease) .4s forwards' }}
          >
            From a single laundrette on Waterloo Road to becoming the trusted partner for
            London's finest hotels and over 130,000 customers.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="ab-story">
        <div className="ab-story-vis ab-reveal">
          <div className="ab-story-block"></div>
          <div className="ab-story-accent">
            <div className="ab-story-accent-big">SE1</div>
            <div className="ab-story-accent-sm">Waterloo, London</div>
          </div>
        </div>
        <div>
          <div className="ab-sec-label ab-reveal">The Beginning</div>
          <h2 className="ab-sec-h ab-reveal ab-reveal-d1">
            From Waterloo Road to <em>London's finest.</em>
          </h2>
          <p className="ab-story-p ab-reveal ab-reveal-d2" style={{ marginTop: '2.5rem' }}>
            Kings & Queens was born from a simple belief: that every garment, whether a hotel
            bedsheet or a bespoke Savile Row suit, deserves the same meticulous care and attention.
          </p>
          <p className="ab-story-p ab-reveal ab-reveal-d3">
            Established over fifteen years ago at 221 Waterloo Road, we set out to deliver the
            finest dry cleaning, laundry, alteration and restoration services in Central London.
            What started as a local laundrette quickly grew into something far larger, as word
            spread about our obsessive attention to detail and genuine care for every item.
          </p>
          <p className="ab-story-p ab-reveal">
            Today, we serve over 130,000 customers, maintain long-standing partnerships with
            London's most prestigious hotels, and hold a 4.9-star rating across 5,433 Google
            reviews. At Kings & Queens, every garment is royalty.
          </p>
        </div>
      </section>

      {/* NUMBERS */}
      <div className="ab-numbers">
        <div className="ab-num ab-reveal">
          <div className="ab-num-v">15+</div>
          <div className="ab-num-l">Years of Service</div>
        </div>
        <div className="ab-num ab-reveal ab-reveal-d1">
          <div className="ab-num-v">130,000+</div>
          <div className="ab-num-l">Customers Served</div>
        </div>
        <div className="ab-num ab-reveal ab-reveal-d2">
          <div className="ab-num-v">5,433</div>
          <div className="ab-num-l">Five-Star Reviews</div>
        </div>
        <div className="ab-num ab-reveal ab-reveal-d3">
          <div className="ab-num-v">4.9</div>
          <div className="ab-num-l">Google Rating</div>
        </div>
      </div>

      {/* VALUES */}
      <section className="ab-values">
        <div className="ab-values-center">
          <div className="ab-sec-label ab-reveal"><span>What Drives Us</span></div>
          <h2 className="ab-sec-h ab-reveal ab-reveal-d1">
            The principles behind <em>every stitch.</em>
          </h2>
        </div>
        <div className="ab-val-grid">
          <div className="ab-val ab-reveal">
            <div className="ab-val-num">I</div>
            <h3 className="ab-val-title">Exacting Quality</h3>
            <p className="ab-val-desc">
              Every item individually inspected, treated and finished by hand. We never cut
              corners — your wardrobe deserves nothing less than perfection.
            </p>
          </div>
          <div className="ab-val ab-reveal ab-reveal-d1">
            <div className="ab-val-num">II</div>
            <h3 className="ab-val-title">Peerless Service</h3>
            <p className="ab-val-desc">
              From our drivers to our customer care team, we treat every interaction with the
              same respect and warmth. Real people, genuine care, every time.
            </p>
          </div>
          <div className="ab-val ab-reveal ab-reveal-d2">
            <div className="ab-val-num">III</div>
            <h3 className="ab-val-title">Sustainability</h3>
            <p className="ab-val-desc">
              Biodegradable detergents, energy-efficient machines, water conservation. Your
              clothes are as clean as your conscience.
            </p>
          </div>
          <div className="ab-val ab-reveal">
            <div className="ab-val-num">IV</div>
            <h3 className="ab-val-title">Convenience First</h3>
            <p className="ab-val-desc">
              Free collection and delivery. Flexible time slots including evenings and weekends.
              WhatsApp booking. We work around your life.
            </p>
          </div>
          <div className="ab-val ab-reveal ab-reveal-d1">
            <div className="ab-val-num">V</div>
            <h3 className="ab-val-title">Satisfaction Guaranteed</h3>
            <p className="ab-val-desc">
              100% happy or we re-clean for free. No questions, no hassle. We stand behind every
              single garment we touch.
            </p>
          </div>
          <div className="ab-val ab-reveal ab-reveal-d2">
            <div className="ab-val-num">VI</div>
            <h3 className="ab-val-title">Trust & Transparency</h3>
            <p className="ab-val-desc">
              Clear pricing with no surprises. We always confirm costs before starting. Over
              5,400 verified reviews speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="ab-eco">
        <div className="ab-eco-content">
          <div className="ab-sec-label ab-reveal">Sustainability</div>
          <h2 className="ab-sec-h ab-reveal ab-reveal-d1">
            Premium care with a <em>lighter footprint.</em>
          </h2>
          <p className="ab-eco-text ab-reveal ab-reveal-d2" style={{ marginTop: '2rem' }}>
            We prioritise sustainability at every step. From the detergents we choose to the
            machines we invest in, reducing environmental impact sits at the heart of our philosophy.
          </p>
          <div className="ab-eco-list">
            <div className="ab-eco-item ab-reveal">
              <div className="ab-eco-dot"></div>
              <div>
                <div className="ab-eco-item-title">Eco-Friendly Products</div>
                <p className="ab-eco-item-desc">
                  Biodegradable detergents and solvents, gentle on fabrics and the environment.
                </p>
              </div>
            </div>
            <div className="ab-eco-item ab-reveal ab-reveal-d1">
              <div className="ab-eco-dot"></div>
              <div>
                <div className="ab-eco-item-title">Energy-Efficient Technology</div>
                <p className="ab-eco-item-desc">
                  Modern low-energy machines that reduce power consumption without compromising quality.
                </p>
              </div>
            </div>
            <div className="ab-eco-item ab-reveal ab-reveal-d2">
              <div className="ab-eco-dot"></div>
              <div>
                <div className="ab-eco-item-title">Water Conservation</div>
                <p className="ab-eco-item-desc">
                  Advanced systems that minimise water usage and enable responsible recycling
                  throughout our processes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-eco-vis ab-reveal">
          <div className="ab-eco-box">
            <div className="ab-eco-box-inner">
              <h3 className="ab-sec-h">Clean clothes, <em>clear conscience.</em></h3>
              <p>Sustainability is not an afterthought. It is woven into everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="ab-partners">
        <div className="ab-partners-center">
          <div className="ab-sec-label ab-reveal"><span>Trusted Partners</span></div>
          <h2 className="ab-sec-h ab-reveal ab-reveal-d1">
            Proud to serve London's <em>finest.</em>
          </h2>
        </div>
        <div className="ab-p-grid">
          <div className="ab-p-card ab-reveal">
            <div className="ab-p-name">Hilton</div>
            <div className="ab-p-type">Hotel Group</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d1">
            <div className="ab-p-name">Shangri-La</div>
            <div className="ab-p-type">The Shard</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d2">
            <div className="ab-p-name">Park Plaza</div>
            <div className="ab-p-type">Hotels</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d3">
            <div className="ab-p-name">Hampton</div>
            <div className="ab-p-type">by Hilton</div>
          </div>
          <div className="ab-p-card ab-reveal">
            <div className="ab-p-name">Somerset House</div>
            <div className="ab-p-type">Arts & Culture</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d1">
            <div className="ab-p-name">Airbnb</div>
            <div className="ab-p-type">Host Partners</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d2">
            <div className="ab-p-name">LSBU</div>
            <div className="ab-p-type">University</div>
          </div>
          <div className="ab-p-card ab-reveal ab-reveal-d3">
            <div className="ab-p-name">Your Business</div>
            <div className="ab-p-type">Get in Touch</div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="ab-timeline">
        <div className="ab-timeline-center">
          <div className="ab-sec-label ab-reveal"><span>Our Journey</span></div>
          <h2 className="ab-sec-h ab-reveal ab-reveal-d1">
            Milestones along <em>the way.</em>
          </h2>
        </div>
        <div className="ab-tl-items">
          <div className="ab-tl-item ab-reveal">
            <div className="ab-tl-dot">I</div>
            <div>
              <div className="ab-tl-year">The Beginning</div>
              <h3 className="ab-tl-title">A Laundrette on Waterloo Road</h3>
              <p className="ab-tl-desc">
                Kings & Queens opens at 221 Waterloo Road, SE1. A small team with a big ambition:
                the finest garment care in Central London.
              </p>
            </div>
          </div>
          <div className="ab-tl-item ab-reveal">
            <div className="ab-tl-dot">II</div>
            <div>
              <div className="ab-tl-year">Growth</div>
              <h3 className="ab-tl-title">Collection & Delivery Across London</h3>
              <p className="ab-tl-desc">
                Launching free collection and delivery, allowing busy professionals and families
                across London to access expert cleaning from home.
              </p>
            </div>
          </div>
          <div className="ab-tl-item ab-reveal">
            <div className="ab-tl-dot">III</div>
            <div>
              <div className="ab-tl-year">Partnerships</div>
              <h3 className="ab-tl-title">Trusted by London's Finest Hotels</h3>
              <p className="ab-tl-desc">
                Securing contracts with Hilton, Shangri-La at The Shard, Park Plaza, Hampton by
                Hilton and Somerset House.
              </p>
            </div>
          </div>
          <div className="ab-tl-item ab-reveal">
            <div className="ab-tl-dot">IV</div>
            <div>
              <div className="ab-tl-year">130,000+</div>
              <h3 className="ab-tl-title">A Milestone Built on Trust</h3>
              <p className="ab-tl-desc">
                Reaching over 130,000 customers and 5,400+ five-star Google reviews, maintaining
                a 4.9-star rating through unwavering quality.
              </p>
            </div>
          </div>
          <div className="ab-tl-item ab-reveal">
            <div className="ab-tl-dot">V</div>
            <div>
              <div className="ab-tl-year">Today</div>
              <h3 className="ab-tl-title">Still Growing, Still Caring</h3>
              <p className="ab-tl-desc">
                Investing in eco-friendly technology, expanding specialist services, and welcoming
                new hotel and business partners across London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="ab-cta-section">
        <div className="ab-cta-inner">
          <h2 className="ab-cta-h">Ready to experience the difference?</h2>
          <p className="ab-cta-sub">Free collection. 24-hour turnaround. Satisfaction guaranteed.</p>
          <Link to="/contact" className="ab-btn ab-btn-dark">
            Book Your Collection <span className="ab-arr">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ab-footer">
        <div className="ab-ft-grid">
          <div>
            <div className="ab-ft-brand">
              <img
                src="/knqlogo.svg"
                alt="Kings & Queens"
                style={{ height: '44px', width: 'auto', display: 'block', filter: 'brightness(1.1)' }}
              />
            </div>
            <p className="ab-ft-desc">
              Premium dry cleaning and laundrette in the heart of Waterloo, London. Trusted for
              over 15 years.
            </p>
          </div>
          <div className="ab-ft-col">
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
          <div className="ab-ft-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services#dry-cleaning">Dry Cleaning</Link></li>
              <li><Link to="/services#shirt-service">Shirt Service</Link></li>
              <li><Link to="/services#laundry-service-wash">Laundry</Link></li>
              <li><Link to="/services#wedding-dress">Wedding Dresses</Link></li>
              <li><Link to="/services#alterations">Alterations</Link></li>
              <li><Link to="/services#hotels-business">Hotels &amp; Business</Link></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
            </ul>
          </div>
          <div className="ab-ft-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:02071124884">020 7112 4884</a></li>
              <li><a href="https://wa.me/447512244796">WhatsApp</a></li>
              <li><a href="mailto:kingsandqueens.dcl@gmail.com">Email</a></li>
              <li><a href="#">221 Waterloo Rd, SE1</a></li>
            </ul>
          </div>
        </div>
        <div className="ab-ft-btm">
          <div className="ab-ft-copy">&copy; 2025 Kings & Queens Dry Cleaning & Laundrette</div>
          <div className="ab-ft-legal">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Claims</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
