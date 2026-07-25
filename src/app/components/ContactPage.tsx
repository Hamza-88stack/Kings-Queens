import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { SERVICE_DETAILS } from '../data/services';
import '../../styles/contact.css';

const FAQ_DATA = [
  { q: 'What services do you offer?', a: 'We provide professional dry cleaning, laundry, ironing, service washes, shirt service, stain removal, alterations and shoe repairs. We also specialise in wedding dress cleaning and preservation, curtains, duvets and household textiles, and bulk laundry contracts for hotels, Airbnbs and care homes.' },
  { q: 'Do you offer collection and delivery?', a: "Yes. We offer free collection and delivery across London. Simply book a pickup online, by phone or via WhatsApp and we'll collect your items, clean them to the highest standard, and deliver them back to your door." },
  { q: 'How much does a service wash cost?', a: 'Our service washes start from £26 depending on load size and requirements. We offer competitive rates for regular customers and discounted pricing for bulk and business orders. Contact us for a tailored quote.' },
  { q: 'How long does dry cleaning take?', a: 'Most dry cleaning and laundry orders are ready within 24 hours. For urgent needs, we offer same-day and next-day express service. Wedding dresses and specialist items may require additional time.' },
  { q: 'Do you work with hotels and businesses?', a: 'Yes. We provide reliable laundry and dry cleaning services for hotels, Airbnbs, care homes and other businesses. We currently partner with Hilton, Shangri-La, Park Plaza, Hampton by Hilton, Somerset House and LSBU. We can create tailored contracts to suit your needs.' },
  { q: 'What is your satisfaction guarantee?', a: "If you're not 100% happy with any item we've cleaned, we will re-clean it for free. No questions asked, no time limit. We stand behind every garment we touch." },
  { q: 'Where are you located in London?', a: 'We are located at 221 Waterloo Road, London SE1 8XH, opposite Lambeth North Station and a two-minute walk from Waterloo Station. We also offer free collection and delivery across all London postcodes.' },
  { q: 'Do you offer same-day dry cleaning?', a: "Yes. We offer same-day and next-day express services for urgent items. Most standard orders are ready within 24 hours. Please mention your deadline when booking and we'll do our best to accommodate you." },
  { q: 'Can you clean my wedding dress?', a: "Absolutely. We specialise in wedding dress cleaning, restoration and preservation. We've handled thousands of wedding gowns over 15 years, from delicate lace to heavily beaded designs. Each dress is individually assessed and cleaned by hand." },
  { q: 'Are your cleaning products eco-friendly?', a: 'Yes. We use biodegradable detergents and eco-friendly solvents that are gentle on fabrics and the environment. Our energy-efficient machines reduce power consumption and our water conservation systems minimise waste throughout the cleaning process.' },
];

const HOTELS = [
  { name: 'Hilton London', type: 'Waterloo Hotel Group' },
  { name: 'Shangri-La', type: 'The Shard, London Bridge' },
  { name: 'Park Plaza', type: 'Westminster & County Hall' },
  { name: 'Hampton by Hilton', type: 'Waterloo' },
  { name: 'Somerset House', type: 'Arts & Culture Venue, Strand' },
  { name: 'Airbnb Hosts', type: 'London-wide Host Partners' },
  { name: 'LSBU', type: 'London South Bank University' },
  { name: 'Your Business?', type: '', cta: true },
];

const SERVICES = SERVICE_DETAILS.map((service, index) => ({
  num: String(index + 1).padStart(2, '0'),
  title: service.title,
  desc: service.p1,
}));

const REVIEWS = [
  { q: "Absolutely outstanding service! I brought in my favourite jeans covered in stubborn stains — grass and even paint. These guys worked magic. The stains are completely gone and the jeans look brand new.", name: 'Margarita P.', initial: 'M' },
  { q: 'Amazing service. They handled my silk dress and winter coat with real care. Collection was discreet, everything came back perfectly pressed and beautifully fresh.', name: 'Anastasia K.', initial: 'A' },
  { q: 'We used Kings & Queens during our London stay. Shirts and suits were cleaned quickly, delivered to the hotel on time, and packed beautifully. Highly recommend.', name: 'Dmitri S.', initial: 'D' },
];

const AREAS = [
  'Waterloo','Lambeth','Southwark','Westminster','London Bridge','Elephant & Castle',
  'Kennington','Vauxhall','Bermondsey','Borough','Pimlico','Victoria',
  'Brixton','Clapham','Battersea','Chelsea','Fulham','Canary Wharf',
  'City of London','Shoreditch','Mayfair','Kensington','Notting Hill','Camden',
  'Islington','All London Postcodes',
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service') || '';
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const curRef = useRef<HTMLDivElement>(null);
  const curORef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal
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
    document.querySelectorAll('.ct-reveal').forEach((el) => io.observe(el));

    // Custom cursor
    const cur = curRef.current;
    const curO = curORef.current;
    let cx = 0, cy = 0, ox = 0, oy = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; }
    };

    const lerp = () => {
      ox += (cx - ox) * 0.12;
      oy += (cy - oy) * 0.12;
      if (curO) { curO.style.left = ox + 'px'; curO.style.top = oy + 'px'; }
      animId = requestAnimationFrame(lerp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(lerp);

    const hoverEls = document.querySelectorAll('.contact-page a,.contact-page button,.ct-card,.ct-faq-q,.ct-hotel-card,.ct-rev-card,.ct-svc-card');
    const addH = () => curO?.classList.add('hover');
    const rmH = () => curO?.classList.remove('hover');
    hoverEls.forEach((el) => { el.addEventListener('mouseenter', addH); el.addEventListener('mouseleave', rmH); });

    if (window.location.hash) {
      setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      io.disconnect();
      hoverEls.forEach((el) => { el.removeEventListener('mouseenter', addH); el.removeEventListener('mouseleave', rmH); });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToBook = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="contact-page">
      <div className="ct-cur" ref={curRef}></div>
      <div className="ct-cur-o" ref={curORef}></div>

      {/* NAV */}
      <nav className={`ct-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/">
          <img
            src="/knqlogo.svg"
            alt="Kings & Queens"
            className="ct-nav-logo"
          />
        </Link>
        <div className="ct-nav-r">
          <ul className="ct-nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/private-clients">Private Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/#reviews">Reviews</Link></li>
            <li><a href="#" className="active">Contact</a></li>
            <li><a href="tel:02071124884" className="ct-nav-tel">020 7112 4884</a></li>
          </ul>
          <a href="#book" className="ct-nav-cta" onClick={scrollToBook}>Book Collection</a>
          <div
            className={`ct-burger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Glass Slide Menu */}
      <div className={`ct-slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`ct-slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="ct-slide-top">
          <img src="/knqlogo.svg" alt="Kings & Queens" style={{ height: '32px', width: 'auto', filter: 'brightness(1.1)' }} />
          <div className="ct-slide-close" onClick={() => setMobileMenuOpen(false)}><span></span><span></span></div>
        </div>
        <div className="ct-slide-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.05s' }}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.1s' }}>Services</Link>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.15s' }}>Private Clients</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.2s' }}>About</Link>
          <Link to="/#reviews" onClick={() => setMobileMenuOpen(false)} style={{ transitionDelay: '.25s' }}>Reviews</Link>
          <a href="#" style={{ color: 'var(--gold)', transitionDelay: '.3s' }} onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
        <div className="ct-slide-bottom">
          <a href="tel:02071124884" className="ct-slide-tel">020 7112 4884</a>
          <a href="https://wa.me/447512244796" target="_blank" className="ct-slide-wa">WhatsApp Us</a>
          <a href="#book" className="ct-slide-cta" onClick={scrollToBook}>Book Collection <span className="ct-arr">&rarr;</span></a>
        </div>
      </div>

      {/* PAGE HERO */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <div className="ct-crumbs" style={{ opacity: 0, animation: 'ct-slideUp .8s var(--ease) .1s forwards' }}>
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--gold)' }}>Contact</span>
          </div>
          <h1 className="ct-title" style={{ opacity: 0, animation: 'ct-slideUp 1s var(--ease) .2s forwards' }}>
            Contact London's most trusted <em>dry cleaner.</em>
          </h1>
          <p className="ct-desc" style={{ opacity: 0, animation: 'ct-slideUp .9s var(--ease) .4s forwards' }}>
            Book a free collection and delivery, request a quote for hotel or commercial laundry,
            or visit us at 221 Waterloo Road, London SE1. Over 15 years serving 130,000+ customers
            with a 4.9-star Google rating.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="ct-trust">
        <div className="ct-ts ct-reveal"><div className="ct-ts-v">5,433</div><div className="ct-ts-l">Five-Star Google Reviews</div></div>
        <div className="ct-ts ct-reveal ct-d1"><div className="ct-ts-v">130,000+</div><div className="ct-ts-l">Customers Served</div></div>
        <div className="ct-ts ct-reveal ct-d2"><div className="ct-ts-v">15+ Years</div><div className="ct-ts-l">Established in London</div></div>
        <div className="ct-ts ct-reveal ct-d3"><div className="ct-ts-v">24hr</div><div className="ct-ts-l">Turnaround Guaranteed</div></div>
      </div>

      {/* CONTACT MAIN */}
      <section className="ct-main">
        {/* LEFT — INFO */}
        <div>
          <div className="ct-info ct-reveal">
            <div className="ct-info-lbl">Visit Us</div>
            <p className="ct-info-val">
              <strong>Kings &amp; Queens Dry Cleaning &amp; Laundrette</strong><br />
              221 Waterloo Road<br />
              London SE1 8XH<br /><br />
              Located opposite Lambeth North Station,<br />
              a short walk from Waterloo.
            </p>
          </div>

          <div className="ct-cards ct-reveal">
            <div className="ct-card">
              <div className="ct-card-icon">I</div>
              <h3 className="ct-card-t">Phone</h3>
              <p className="ct-card-v"><a href="tel:02071124884">020 7112 4884</a></p>
            </div>
            <div className="ct-card">
              <div className="ct-card-icon">II</div>
              <h3 className="ct-card-t">WhatsApp</h3>
              <p className="ct-card-v"><a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer">+44 7512 244796</a></p>
            </div>
            <div className="ct-card">
              <div className="ct-card-icon">III</div>
              <h3 className="ct-card-t">Email</h3>
              <p className="ct-card-v"><a href="mailto:kingsandqueens.dcl@gmail.com">kingsandqueens.dcl<br />@gmail.com</a></p>
            </div>
            <div className="ct-card">
              <div className="ct-card-icon">IV</div>
              <h3 className="ct-card-t">Hours</h3>
              <p className="ct-card-v">Mon – Sat: 8am – 8pm<br />Sun: 10am – 5pm</p>
            </div>
          </div>

          <a href="https://wa.me/447512244796" className="ct-wa ct-reveal" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Message Us on WhatsApp
          </a>

          <div className="ct-info ct-reveal" style={{ marginTop: '4rem' }}>
            <div className="ct-info-lbl">For Businesses</div>
            <p className="ct-info-val">
              We provide tailored laundry and dry cleaning contracts for hotels, Airbnb hosts, care
              homes and other businesses. Consistent quality, reliable daily turnaround, competitive
              rates.
              <a href="mailto:kingsandqueens.dcl@gmail.com" style={{ color: 'var(--gold)', display: 'block', marginTop: '.8rem' }}>
                Enquire about a business partnership &rarr;
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="ct-form-wrap ct-reveal" id="book">
          <h3 className="ct-form-t">Book a Collection</h3>
          <p className="ct-form-sub">Fill in your details and we'll arrange a free collection at a time that suits you.</p>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="ct-form-row">
                <div className="ct-field"><label>First Name</label><input type="text" placeholder="John" required /></div>
                <div className="ct-field"><label>Last Name</label><input type="text" placeholder="Smith" required /></div>
              </div>
              <div className="ct-form-row">
                <div className="ct-field"><label>Phone Number</label><input type="tel" placeholder="+44 7XXX XXX XXX" required /></div>
                <div className="ct-field"><label>Email Address</label><input type="email" placeholder="john@example.com" required /></div>
              </div>
              <div className="ct-field">
                <label>Service Required</label>
                <select defaultValue={requestedService}>
                  <option value="" disabled>Select a service</option>
                  <option>Dry Cleaning</option>
                  <option>Shirt Service</option>
                  <option>Laundry &amp; Service Wash</option>
                  <option>Wedding Dress</option>
                  <option>Shoe Cleaning &amp; Repair</option>
                  <option>Alterations</option>
                  <option>Curtains &amp; Household</option>
                  <option>Hotel &amp; Business Contract</option>
                  <option>Private Clients Programme</option>
                </select>
              </div>
              <div className="ct-form-row">
                <div className="ct-field"><label>Preferred Date</label><input type="date" /></div>
                <div className="ct-field">
                  <label>Preferred Time</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a time</option>
                    <option>Morning (8am – 12pm)</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 8pm)</option>
                  </select>
                </div>
              </div>
              <div className="ct-field">
                <label>Your Address</label>
                <input type="text" placeholder="Collection address in London" />
              </div>
              <div className="ct-field">
                <label>Additional Notes</label>
                <textarea placeholder="Tell us about your items, any special requirements, stains to treat..."></textarea>
              </div>
              <button type="submit" className="ct-btn ct-btn-p" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Booking Request <span className="ct-arr">&rarr;</span>
              </button>
              <p className="ct-form-note">
                We'll confirm your booking within 1 hour during business hours. Free collection across London.
                No payment required until items are collected.
              </p>
            </form>
          ) : (
            <div className="ct-form-success">
              <div className="ct-form-success-icon">&#10003;</div>
              <h3>Booking Request Received</h3>
              <p>
                Thank you. We'll confirm your collection within 1 hour during business hours.
                If you need anything urgently, call us on{' '}
                <a href="tel:02071124884" style={{ color: 'var(--gold)' }}>020 7112 4884</a> or{' '}
                <a href="https://wa.me/447512244796" style={{ color: 'var(--gold)' }} target="_blank" rel="noopener noreferrer">WhatsApp us</a>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* MAP */}
      <div className="ct-map-section">
        <div className="ct-map-wrap">
          <div className="ct-map-overlay ct-reveal">
            <h3>Find Us</h3>
            <p>221 Waterloo Road<br />London SE1 8XH</p>
            <p>Opposite Lambeth North Station.<br />2-minute walk from Waterloo.</p>
            <a href="https://maps.google.com/?q=221+Waterloo+Road+London+SE1+8XH" target="_blank" rel="noopener noreferrer">
              Open in Google Maps &rarr;
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.8!2d-0.1098!3d51.4990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b5e0b2c8d1%3A0x4b6b0f29f8c5c0!2s221%20Waterloo%20Rd%2C%20London%20SE1%208XH!5e0!3m2!1sen!2suk!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kings & Queens Location"
          ></iframe>
        </div>
      </div>

      {/* FAQ */}
      <section className="ct-faq">
        <div className="ct-faq-top">
          <div className="ct-label ct-reveal">Common Questions</div>
          <h2 className="ct-sh ct-reveal ct-d1">Everything you need <em>to know.</em></h2>
        </div>
        <div className="ct-faq-list">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className={`ct-faq-item ct-reveal${openFaq === i ? ' open' : ''}`}>
              <div className="ct-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <h3>{item.q}</h3>
                <div className="ct-faq-icon">+</div>
              </div>
              <div className="ct-faq-a"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* HOTEL PARTNERS */}
      <section className="ct-hotels">
        <div className="ct-hotels-top">
          <div>
            <div className="ct-label ct-reveal">Hotel &amp; Commercial Laundry London</div>
            <h2 className="ct-sh ct-reveal ct-d1">Trusted by London's finest <em>hotels.</em></h2>
          </div>
          <p className="ct-hotels-desc ct-reveal ct-d2">
            We provide bespoke laundry and dry cleaning contracts for hotels, Airbnb hosts, serviced
            apartments, care homes and businesses across London. Daily collection, reliable turnaround,
            competitive commercial rates.
          </p>
        </div>
        <div className="ct-hotels-grid">
          {HOTELS.map((h, i) => (
            <div key={h.name} className={`ct-hotel-card ct-reveal${i % 4 !== 0 ? ` ct-d${i % 4}` : ''}`}>
              <div className="ct-hotel-name">{h.name}</div>
              <div className="ct-hotel-type">
                {h.cta ? (
                  <a href="mailto:kingsandqueens.dcl@gmail.com" style={{ color: 'var(--gold)' }}>Get a Quote &rarr;</a>
                ) : h.type}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MINI REVIEWS */}
      <section className="ct-reviews">
        <div className="ct-rev-top">
          <div>
            <div className="ct-label ct-reveal">What Our Customers Say</div>
            <h2 className="ct-sh ct-reveal ct-d1">4.9 stars across 5,433 <em>reviews.</em></h2>
          </div>
          <Link to="/#reviews" className="ct-btn ct-btn-s ct-reveal" style={{ padding: '.8rem 1.8rem' }}>
            Read All Reviews <span className="ct-arr">&rarr;</span>
          </Link>
        </div>
        <div className="ct-rev-grid">
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={`ct-rev-card ct-reveal${i > 0 ? ` ct-d${i}` : ''}`}>
              <div>
                <div className="ct-rev-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="ct-rev-q">{r.q}</p>
              </div>
              <div className="ct-rev-foot">
                <div className="ct-rev-av">{r.initial}</div>
                <div>
                  <div className="ct-rev-name">{r.name}</div>
                  <div className="ct-rev-src">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="ct-svc">
        <div className="ct-svc-top">
          <div>
            <div className="ct-label ct-reveal">Our Dry Cleaning &amp; Laundry Services</div>
            <h2 className="ct-sh ct-reveal ct-d1">Everything your wardrobe <em>needs.</em></h2>
          </div>
          <p className="ct-hotels-desc ct-reveal ct-d2">
            Professional garment care from everyday laundry to luxury restoration. Free collection
            and delivery across London with 24-hour turnaround.
          </p>
        </div>
        <div className="ct-svc-grid">
          {SERVICES.map((s, i) => (
            <div key={s.num} className={`ct-svc-card ct-reveal${i % 4 !== 0 ? ` ct-d${i % 4}` : ''}`}>
              <div className="ct-svc-num">{s.num}</div>
              <h3 className="ct-svc-t">{s.title}</h3>
              <p className="ct-svc-d">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS SERVED */}
      <div className="ct-areas">
        <div className="ct-areas-inner ct-reveal">
          <h2 className="ct-areas-t">Free collection &amp; delivery across <em>London</em></h2>
          <div className="ct-areas-list">
            {AREAS.map((area, i) => (
              <span key={area}>
                <span>{area}</span>
                {i < AREAS.length - 1 && <span className="ct-areas-sep"> &middot; </span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="ct-cta">
        <div className="ct-cta-in">
          <h2 className="ct-cta-h">Prefer to talk? We're just a call away.</h2>
          <p className="ct-cta-sub">020 7112 4884 — Mon to Sat, 8am to 8pm.</p>
          <a href="tel:02071124884" className="ct-btn ct-btn-d">Call Us Now <span className="ct-arr">&rarr;</span></a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ct-ft">
        <div className="ct-ft-g">
          <div>
            <div className="ct-ft-brand">
              <img
                src="/knqlogo.svg"
                alt="Kings & Queens"
                style={{ height: '34px', width: 'auto', filter: 'brightness(1.1)' }}
              />
            </div>
            <p className="ct-ft-desc">
              Premium dry cleaning and laundrette in the heart of Waterloo, London. Trusted for over 15 years.
            </p>
          </div>
          <div className="ct-ft-col">
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
          <div className="ct-ft-col">
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
          <div className="ct-ft-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:02071124884">020 7112 4884</a></li>
              <li><a href="https://wa.me/447512244796" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:kingsandqueens.dcl@gmail.com">Email</a></li>
              <li><a href="#">221 Waterloo Rd, SE1</a></li>
            </ul>
          </div>
        </div>
        <div className="ct-ft-btm">
          <div className="ct-ft-cp">&copy; 2025 Kings &amp; Queens Dry Cleaning &amp; Laundrette</div>
          <div className="ct-ft-lgl">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Claims</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
