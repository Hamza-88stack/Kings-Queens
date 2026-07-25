import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import '../../styles/kings-queens.css';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const curRef = useRef<HTMLDivElement>(null);
  const curORef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll event for nav
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.rv').forEach((el) => observer.observe(el));

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

    // Hover effect
    const hoverEls = document.querySelectorAll('.home-page a,.home-page button,.sc,.stc,.rc');
    const addHover = () => curO?.classList.add('hover');
    const removeHover = () => curO?.classList.remove('hover');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Handle hash scroll on load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="home-page">
      <div className="hp-cur" ref={curRef}></div>
      <div className="hp-cur-o" ref={curORef}></div>

      <nav className={`nav ${navScrolled ? 's' : ''}`} id="nav">
        <a href="#" className="n-brand" onClick={(e) => e.preventDefault()}>
          <img
            src="/knqlogo.svg"
            alt="Kings & Queens Dry Cleaning & Laundrette"
            style={{ height: '40px', width: 'auto', display: 'block', filter: 'brightness(1.1)' }}
          />
        </a>
        <ul className="n-links" id="nl">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/private-clients">Private Clients</Link>
          </li>
          <li>
            <a href="#process" onClick={handleNavClick}>How It Works</a>
          </li>
          <li>
            <a href="#reviews" onClick={handleNavClick}>Reviews</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="tel:02071124884" className="n-tel">020 7112 4884</a>
          </li>
          <li>
            <a href="#contact" className="n-cta" onClick={handleNavClick}>Book Collection</a>
          </li>
        </ul>
        <div
          className={`burger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Glass Slide Menu */}
      <div className={`slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="slide-menu-top">
          <img
            src="/knqlogo.svg"
            alt="Kings & Queens"
            style={{ height: '32px', width: 'auto', filter: 'brightness(1.1)' }}
          />
          <div className="slide-close" onClick={() => setMobileMenuOpen(false)}>
            <span></span><span></span>
          </div>
        </div>
        <div className="slide-menu-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.05s' }}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.1s' }}>Services</Link>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.15s' }}>Private Clients</Link>
          <a href="#process" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }} style={{ transitionDelay: '.2s' }}>How It Works</a>
          <a href="#reviews" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }} style={{ transitionDelay: '.25s' }}>Reviews</a>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.3s' }}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.35s' }}>Contact</Link>
        </div>
        <div className="slide-menu-bottom">
          <a href="tel:02071124884" className="slide-tel">020 7112 4884</a>
          <a href="https://wa.me/447512244796" target="_blank" className="slide-wa">WhatsApp Us</a>
          <a href="#contact" className="slide-cta" onClick={(e) => { handleNavClick(e); setMobileMenuOpen(false); }}>
            Book Collection <span className="arr">&rarr;</span>
          </a>
        </div>
      </div>

      <section className="hero">
        <div className="h-ey">Est. 15+ years &mdash; Waterloo, London</div>
        <h1 className="h-t">
          The Art of
          <br />
          <em>Impeccable</em>
          <br />
          <span className="rw">
            <span className="rt">
              <span>Dry Cleaning</span>
              <span>Garment Care</span>
              <span>Fabric Revival</span>
            </span>
          </span>
        </h1>
        <p className="h-sub">
          Expert dry cleaners trusted by London's finest hotels. Free collection &amp; delivery.
          24-hour turnaround.
        </p>
        <div className="h-acts">
          <a href="#contact" className="btn btn-g" onClick={handleNavClick}>
            Book a Collection <span className="arr">&rarr;</span>
          </a>
          <a href="https://wa.me/447512244796" className="btn btn-o" target="_blank">
            WhatsApp Us
          </a>
        </div>
        <div className="h-proof">
          <div>
            <div className="p-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="p-ct">
              <strong>5,433</strong> reviews on Google
            </div>
          </div>
          <div className="p-sep"></div>
          <div className="p-logos">
            <img src="hilton (1).png" alt="Hilton" style={{ height: '24px', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
            <img src="shangrila (1).png" alt="Shangri-La" style={{ height: '24px', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
            <img src="parkplaza (1).png" alt="Park Plaza" style={{ height: '24px', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
            <img src="somerset-house (1).png" alt="Somerset House" style={{ height: '24px', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
            <img src="airbnb (1).png" alt="Airbnb" style={{ height: '24px', opacity: 0.8, filter: 'brightness(0) invert(1)' }} />
          </div>
        </div>
      </section>

      <div className="mq">
        <div className="mq-t">
          <div className="mq-i">
            <span>Free Collection &amp; Delivery</span>
            <div className="mq-d"></div>
            <span>24-Hour Turnaround</span>
            <div className="mq-d"></div>
            <span>Satisfaction Guaranteed</span>
            <div className="mq-d"></div>
            <span>Eco-Friendly Products</span>
            <div className="mq-d"></div>
            <span>130,000+ Customers Served</span>
            <div className="mq-d"></div>
            <span>Serving Hotels Across London</span>
            <div className="mq-d"></div>
            <span>5,433 Five-Star Reviews</span>
            <div className="mq-d"></div>
          </div>
          <div className="mq-i">
            <span>Free Collection &amp; Delivery</span>
            <div className="mq-d"></div>
            <span>24-Hour Turnaround</span>
            <div className="mq-d"></div>
            <span>Satisfaction Guaranteed</span>
            <div className="mq-d"></div>
            <span>Eco-Friendly Products</span>
            <div className="mq-d"></div>
            <span>130,000+ Customers Served</span>
            <div className="mq-d"></div>
            <span>Serving Hotels Across London</span>
            <div className="mq-d"></div>
            <span>5,433 Five-Star Reviews</span>
            <div className="mq-d"></div>
          </div>
        </div>
      </div>

      <section className="svc" id="services">
        <div className="svc-top rv">
          <div>
            <div className="sl">What We Do</div>
            <h2 className="sh">
              Everything perfectly <em>taken care of.</em>
            </h2>
          </div>
          <p>
            From everyday shirts to couture wedding gowns, every piece receives the red carpet
            treatment you'd expect from London's premier cleaners.
          </p>
        </div>
        <div className="sg">
          <div className="sc rv">
            <div className="sc-n">I</div>
            <h3 className="sc-t">Dry Cleaning</h3>
            <p className="sc-d">
              Professional solvent cleaning for suits, dresses, coats and delicate fabrics.
              Eco-friendly products, meticulous hand-finishing.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">II</div>
            <h3 className="sc-t">Shirt Service</h3>
            <p className="sc-d">
              Beautifully cleaned and crisply pressed shirts returned on hangers or folded.
              Same-day turnaround available.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">III</div>
            <h3 className="sc-t">Laundry &amp; Service Wash</h3>
            <p className="sc-d">
              Full-service wash, tumble dry and fold. Starting from &pound;26 per load. Neatly
              packaged and returned fresh.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">IV</div>
            <h3 className="sc-t">Wedding Dresses</h3>
            <p className="sc-d">
              Specialist cleaning, stain removal, restoration and preservation. Protect the
              memories woven into every stitch.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">V</div>
            <h3 className="sc-t">Shoe Cleaning &amp; Repair</h3>
            <p className="sc-d">
              Professional restoration for trainers, leather shoes and luxury footwear. Sole
              repair, deep cleaning, polish.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">VI</div>
            <h3 className="sc-t">Alterations</h3>
            <p className="sc-d">
              Expert tailoring to ensure your garments fit perfectly and reflect your personal
              style. From trouser hems to full relines.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">VII</div>
            <h3 className="sc-t">Curtains &amp; Household</h3>
            <p className="sc-d">
              Duvets, bed linen, curtains, rugs, cushion covers. Professionally cleaned and
              returned ready to use.
            </p>
          </div>
          <div className="sc rv">
            <div className="sc-n">VIII</div>
            <h3 className="sc-t">Hotels &amp; Business</h3>
            <p className="sc-d">
              Bespoke contracts for Hilton, Shangri-La, Park Plaza, Airbnb hosts, care homes and
              corporate clients.
            </p>
          </div>
        </div>
      </section>

      <section className="pcx" id="private-clients">
        <div className="pcx-in">
          <div className="pcx-copy rv">
            <div className="sl">Exclusive Atelier Concierge</div>
            <h2 className="sh">
              The Private Clients <em>Programme.</em>
            </h2>
            <p className="pcx-lede">
              Designed for estate managers, butlers, housekeepers and personal assistants who need
              absolute discretion, priority handling and flawless garment care.
            </p>
            <div className="pcx-points">
              <span>Direct hotline</span>
              <span>Unmarked collections</span>
              <span>NDA privacy protocols</span>
              <span>Bespoke monthly invoicing</span>
              <span>Priority 24-hour turnaround</span>
            </div>
            <div className="pcx-actions">
              <Link to="/private-clients" className="btn btn-g">
                Explore Programme <span className="arr">&rarr;</span>
              </Link>
              <Link to="/contact?service=Private%20Clients%20Programme#book" className="btn btn-o">
                Principal Enquiry
              </Link>
            </div>
          </div>
          <div className="pcx-card rv">
            <img
              src="/images/private-clients-wardrobe.jpg"
              alt="White-glove private wardrobe care for expensive garments"
              className="pcx-card-img"
            />
            <div className="pcx-card-caption">
              <div className="pcx-mark">K&amp;Q</div>
              <p>
                Private wardrobe care for couture fabrics, elite residences and time-sensitive
                household requests.
              </p>
              <span>Discretion-led garment concierge</span>
            </div>
          </div>
        </div>
      </section>

      <section className="prc" id="process">
        <div className="prc-c rv">
          <div className="sl">How It Works</div>
          <h2 className="sh">
            Fresh laundry, <em>zero hassle.</em>
          </h2>
        </div>
        <div className="ps">
          <div className="st rv">
            <div className="st-n">I</div>
            <h3 className="st-t">You Book</h3>
            <p className="st-d">
              Schedule online, via WhatsApp, or by phone. Flexible slots including evenings and
              weekends.
            </p>
          </div>
          <div className="st rv">
            <div className="st-n">II</div>
            <h3 className="st-t">We Collect</h3>
            <p className="st-d">
              Pop items in a bag. Our driver arrives at your door to collect and confirm what you
              need done.
            </p>
          </div>
          <div className="st rv">
            <div className="st-n">III</div>
            <h3 className="st-t">We Clean</h3>
            <p className="st-d">
              Professionally cleaned, pressed and finished with eco-friendly products and
              meticulous care.
            </p>
          </div>
          <div className="st rv">
            <div className="st-n">IV</div>
            <h3 className="st-t">Delivered Back</h3>
            <p className="st-d">
              Garments returned within 24 hours &mdash; clean, pressed and ready. Satisfaction
              guaranteed or we re-clean free.
            </p>
          </div>
        </div>
      </section>

      <div className="sts">
        <div className="stc rv">
          <div className="stc-v">5,433</div>
          <div className="stc-l">Five-Star Reviews</div>
        </div>
        <div className="stc rv">
          <div className="stc-v">130,000+</div>
          <div className="stc-l">Customers Served</div>
        </div>
        <div className="stc rv">
          <div className="stc-v">15+</div>
          <div className="stc-l">Years in London</div>
        </div>
        <div className="stc rv">
          <div className="stc-v">99.9%</div>
          <div className="stc-l">Satisfaction Rate</div>
        </div>
      </div>

      <section className="rev" id="reviews">
        <div className="rev-top rv">
          <div>
            <div className="sl">Client Reviews</div>
            <h2 className="sh">
              Over 130,000 people trust <em>the crown.</em>
            </h2>
          </div>
        </div>
        <div className="rg">
          <div className="rc rv">
            <div className="rc-q">
              Absolutely outstanding service. I brought in my favourite jeans covered in stubborn
              grass and paint stains. Somehow, these guys worked magic. The stains are completely
              gone and the jeans look brand new. I wouldn't go anywhere else now.
            </div>
            <div className="rc-f">
              <div className="rc-i">M</div>
              <div>
                <div className="rc-nm">Margarita P.</div>
                <div className="rc-sr">Google Review</div>
              </div>
            </div>
          </div>
          <div className="rc rv">
            <div className="rc-q">
              Amazing service. They handled my silk dress and winter coat with real care.
              Collection was discreet, everything came back perfectly pressed and beautifully fresh.
            </div>
            <div className="rc-f">
              <div className="rc-i">A</div>
              <div>
                <div className="rc-nm">Anastasia K.</div>
                <div className="rc-sr">Google Review</div>
              </div>
            </div>
          </div>
          <div className="rc rv">
            <div className="rc-q">
              We used Kings & Queens during our London stay. Shirts and suits were cleaned quickly,
              delivered to the hotel on time, and packed beautifully. Highly recommend.
            </div>
            <div className="rc-f">
              <div className="rc-i">D</div>
              <div>
                <div className="rc-nm">Dmitri S.</div>
                <div className="rc-sr">Google Review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt" id="about">
        <div className="abt-vis rv">
          <div className="abt-box"></div>
          <div className="abt-badge">
            <div className="abt-b-big">SE1</div>
            <div className="abt-b-sm">Waterloo, London</div>
          </div>
        </div>
        <div className="rv">
          <div className="sl">Our Story</div>
          <h2 className="sh">
            Established over 15 years ago, rooted <em>in London.</em>
          </h2>
          <p className="abt-txt">
            Kings &amp; Queens Dry Cleaning and Laundrette has been delivering the finest dry cleaning,
            laundry, alteration and restoration services from Waterloo, Central London. With
            exacting quality, peerless service and reducing environmental impact at the heart of
            our philosophy.
          </p>
          <p className="abt-txt">
            From a single laundrette, we've grown into a trusted partner for Hilton, Shangri-La,
            Park Plaza, Airbnb hosts, Somerset House, London South Bank University, and over
            130,000 individual customers.
          </p>
          <div className="abt-feats">
            <div className="af">Free Collection &amp; Delivery</div>
            <div className="af">24-Hour Turnaround</div>
            <div className="af">Eco-Friendly Products</div>
            <div className="af">Satisfaction Guarantee</div>
            <div className="af">Same-Day Available</div>
            <div className="af">WhatsApp Booking</div>
          </div>
          <Link to="/about" className="btn btn-g">
            Read Our Full Story <span className="arr">&rarr;</span>
          </Link>
        </div>
      </section>

      <div className="cta">
        <div className="cta-in">
          <h2 className="cta-h">
            100% happy or we re-clean
            <br />
            your items for free.
          </h2>
          <p className="cta-s">Free collection. 24-hour turnaround. No surprises.</p>
          <a href="#contact" className="btn btn-d" onClick={handleNavClick}>
            Book Your Collection <span className="arr">&rarr;</span>
          </a>
        </div>
      </div>

      <section className="cnt" id="contact">
        <div>
          <div className="sl">Get in Touch</div>
          <h2 className="sh" style={{ marginBottom: '2.5rem' }}>
            The best dry cleaning, delivered to <em>your door.</em>
          </h2>
          <div className="cnt-b">
            <h3>Visit</h3>
            <p>
              Kings &amp; Queens Dry Cleaning
              <br />
              221 Waterloo Road
              <br />
              London SE1 8XH
            </p>
          </div>
          <div className="cnt-b">
            <h3>Call</h3>
            <p>
              <a href="tel:02071124884">020 7112 4884</a>
            </p>
          </div>
          <div className="cnt-b">
            <h3>Email</h3>
            <p>
              <a href="mailto:kingsandqueens.dcl@gmail.com">kingsandqueens.dcl@gmail.com</a>
            </p>
          </div>
          <a href="https://wa.me/447512244796" target="_blank" className="wa">
            Chat on WhatsApp &rarr;
          </a>
        </div>
        <div className="fw rv">
          <h3>Book a Collection</h3>
          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit}>
              <div className="fr">
                <div className="fd">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="fd">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your phone number" required />
                </div>
              </div>
              <div className="fd">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="fd">
                <label>Service</label>
                <select>
                  <option>Dry Cleaning</option>
                  <option>Laundry / Service Wash</option>
                  <option>Shirt Service</option>
                  <option>Wedding Dress</option>
                  <option>Shoe Cleaning &amp; Repair</option>
                  <option>Alterations</option>
                  <option>Curtains &amp; Household</option>
                  <option>Hotel / Business Contract</option>
                  <option>Private Clients Programme</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="fd">
                <label>Message</label>
                <textarea placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-g"
                style={{ width: '100%', justifyContent: 'center', border: 'none' }}
              >
                Send Enquiry <span className="arr">&rarr;</span>
              </button>
            </form>
          ) : (
            <p
              style={{
                padding: '3rem 0',
                textAlign: 'center',
                fontFamily: 'var(--serif)',
                fontSize: '1.2rem',
              }}
            >
              Thank you. We'll be in touch shortly.
            </p>
          )}
        </div>
      </section>

      <footer className="ft">
        <div className="ft-g">
          <div>
            <div className="ft-b">
              <img
                src="/knqlogo.svg"
                alt="Kings & Queens"
                style={{
                  height: '34px',
                  width: 'auto',
                  display: 'block',
                  filter: 'brightness(1.1)',
                }}
              />
            </div>
            <p className="ft-desc">
              Premium dry cleaning and laundrette in the heart of Waterloo, London. Trusted for
              over 15 years.
            </p>
          </div>
          <div className="ft-c">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#services" onClick={handleNavClick}>Services</a></li>
              <li><a href="#process" onClick={handleNavClick}>How It Works</a></li>
              <li><a href="#reviews" onClick={handleNavClick}>Reviews</a></li>
              <li><Link to="/private-clients">Private Clients</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="ft-c">
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
          <div className="ft-c">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:02071124884">020 7112 4884</a></li>
              <li><a href="https://wa.me/447512244796">WhatsApp</a></li>
              <li><a href="mailto:kingsandqueens.dcl@gmail.com">Email</a></li>
              <li><a href="#">221 Waterloo Rd, SE1</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-btm">
          <div className="ft-cp">
            &copy; 2025 Kings &amp; Queens Dry Cleaning &amp; Laundrette
          </div>
          <div className="ft-lgl">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Claims</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
