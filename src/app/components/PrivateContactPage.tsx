import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import {
  Car,
  Check,
  Clock3,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ReceiptText,
  ShieldCheck,
  Shirt,
  Timer,
} from 'lucide-react';
import '../../styles/services.css';

type ContactKey = 'simba' | 'basit';

type ContactProfile = {
  name: string;
  initial: string;
  role: string;
  specialism: string;
  phone: string;
  tel: string;
  whatsapp: string;
  email: string;
  vcard: string;
  welcome: string;
  introduction: string;
  signoff: string;
  support: Array<{
    title: string;
    text: string;
  }>;
};

const CONTACT_PROFILES: Record<ContactKey, ContactProfile> = {
  simba: {
    name: 'Simba',
    initial: 'S',
    role: 'Private Clients Desk',
    specialism: 'Principal Accounts & Priority Care',
    phone: '+44 7512 244796',
    tel: '+447512244796',
    whatsapp: '447512244796',
    email: 'simba@knqdcl.co.uk',
    vcard: '/contacts/simba.vcf',
    welcome: 'Welcome to your direct private care channel.',
    introduction:
      'I am your direct contact for principal accounts, collection coordination and time-sensitive wardrobe care. Share your requirements with me and I will coordinate the right care, timing and return with the Kings & Queens team.',
    signoff:
      'For a new account, an upcoming collection or an urgent garment request, contact me directly and I will guide the next step.',
    support: [
      {
        title: 'Principal Accounts',
        text: 'A clear point of contact for private households, principals and their representatives.',
      },
      {
        title: 'Collection Planning',
        text: 'Coordination of discreet collection and delivery around your preferred schedule.',
      },
      {
        title: 'Priority Requests',
        text: 'Direct handling of deadlines, urgent garments and time-sensitive wardrobe requirements.',
      },
      {
        title: 'Order Updates',
        text: 'Straightforward communication from collection through care and final return.',
      },
    ],
  },
  basit: {
    name: 'Basit',
    initial: 'B',
    role: 'Private Clients Desk',
    specialism: 'Concierge Requests & Client Support',
    phone: '+44 7503 344983',
    tel: '+447503344983',
    whatsapp: '447503344983',
    email: 'basit@knqdcl.co.uk',
    vcard: '/contacts/basit.vcf',
    welcome: 'A personal point of contact for every request.',
    introduction:
      'I am your direct contact for private account enquiries, concierge requests and ongoing client support. Tell me what your household or wardrobe requires and I will coordinate the details with the Kings & Queens team.',
    signoff:
      'Whether you are arranging your first collection or managing regular garment care, contact me directly for a clear and discreet response.',
    support: [
      {
        title: 'Private Enquiries',
        text: 'A direct introduction to the programme, services and account arrangements available.',
      },
      {
        title: 'Concierge Scheduling',
        text: 'Collection and delivery planning built around your household or representative.',
      },
      {
        title: 'Wardrobe Support',
        text: 'Coordination for everyday garments, couture pieces and household textiles.',
      },
      {
        title: 'Account Assistance',
        text: 'Ongoing support for requests, updates, invoicing questions and future bookings.',
      },
    ],
  },
};

const PRIVATE_SERVICE = [
  'Dry cleaning and specialist garment care',
  'Laundry, shirt service and pressing',
  'Couture, occasionwear and delicate fabrics',
  'Alterations and garment repairs',
  'Household linen, duvets and curtains',
  'Scheduled collection and delivery across London',
];

const SERVICE_STANDARDS = [
  {
    title: 'Discreet Handling',
    text: 'Careful communication and considered handling for private residences and high-value wardrobes.',
    Icon: ShieldCheck,
  },
  {
    title: 'Collection & Delivery',
    text: 'Flexible London collection and delivery coordinated through your direct contact.',
    Icon: Car,
  },
  {
    title: 'Priority Turnaround',
    text: 'Most standard orders are completed within 24 hours, with urgent requests assessed directly.',
    Icon: Timer,
  },
  {
    title: 'Account Support',
    text: 'Itemised billing and clear support for households, representatives and regular accounts.',
    Icon: ReceiptText,
  },
];

export default function PrivateContactPage({ contactKey }: { contactKey: ContactKey }) {
  const contact = CONTACT_PROFILES[contactKey];
  const otherKey: ContactKey = contactKey === 'simba' ? 'basit' : 'simba';
  const other = CONTACT_PROFILES[otherKey];
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const curRef = useRef<HTMLDivElement>(null);
  const curORef = useRef<HTMLDivElement>(null);
  const whatsappMessage = encodeURIComponent(
    `Hello ${contact.name}, I would like to discuss private garment care with Kings & Queens.`
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => setNavScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.sv-reveal').forEach((element) => io.observe(element));

    const cur = curRef.current;
    const curO = curORef.current;
    let cx = 0;
    let cy = 0;
    let ox = 0;
    let oy = 0;
    let animationId: number;
    const handleMouseMove = (event: MouseEvent) => {
      cx = event.clientX;
      cy = event.clientY;
      if (cur) {
        cur.style.left = `${cx}px`;
        cur.style.top = `${cy}px`;
      }
    };
    const followCursor = () => {
      ox += (cx - ox) * 0.12;
      oy += (cy - oy) * 0.12;
      if (curO) {
        curO.style.left = `${ox}px`;
        curO.style.top = `${oy}px`;
      }
      animationId = requestAnimationFrame(followCursor);
    };
    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      io.disconnect();
    };
  }, [contactKey]);

  return (
    <div className="services-page private-contact-page">
      <div className="sv-cur" ref={curRef}></div>
      <div className="sv-cur-o" ref={curORef}></div>

      <nav className={`sv-nav ${navScrolled ? 's' : ''}`}>
        <Link to="/"><img src="/knqlogo.svg" alt="Kings & Queens" className="sv-nav-logo" /></Link>
        <div className="sv-nav-r">
          <ul className="sv-nav-links">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/private-clients" className="active">Private Clients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <a href={`tel:${contact.tel}`} className="sv-nav-cta">Call {contact.name}</a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className={`sv-burger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`sv-slide-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`sv-slide-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sv-slide-top">
          <img src="/knqlogo.svg" alt="Kings & Queens" />
          <button type="button" aria-label="Close navigation menu" className="sv-slide-close" onClick={() => setMobileMenuOpen(false)}>
            <span></span><span></span>
          </button>
        </div>
        <div className="sv-slide-links">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/private-clients" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--gold)' }}>Private Clients</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
        <div className="sv-slide-bottom">
          <a href={`tel:${contact.tel}`} className="sv-slide-tel">{contact.phone}</a>
          <a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="sv-slide-wa">
            WhatsApp {contact.name}
          </a>
        </div>
      </div>

      <header className="pc-profile-hero">
        <div className="pc-profile-shell">
          <div className="pc-profile-copy">
            <div className="sv-crumbs sv-reveal">
              <Link to="/">Home</Link><span className="sep">/</span>
              <Link to="/private-clients">Private Clients</Link><span className="sep">/</span>
              <span className="pc-current">{contact.name}</span>
            </div>
            <div className="sv-label sv-reveal">A Personal Introduction</div>
            <p className="pc-welcome sv-reveal">{contact.welcome}</p>
            <h1 className="sv-title sv-reveal">I am <em>{contact.name}.</em></h1>
            <p className="pc-specialism sv-reveal">{contact.specialism}</p>
            <p className="sv-private-lede sv-reveal">{contact.introduction}</p>
            <div className="sv-detail-ctas sv-reveal">
              <a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn-p">
                <MessageCircle size={17} /> WhatsApp {contact.name}
              </a>
              <a href={`tel:${contact.tel}`} className="sv-btn sv-btn-s">
                <PhoneCall size={17} /> Call Directly
              </a>
            </div>
          </div>

          <aside className="pc-identity-card sv-reveal" aria-label={`${contact.name} contact details`}>
            <div className="pc-identity-top">
              <img src="/knqlogo.svg" alt="Kings & Queens emblem" />
              <span>Private Client Contact</span>
            </div>
            <div className="pc-monogram" aria-hidden="true">{contact.initial}</div>
            <div className="pc-identity-name">
              <p>{contact.role}</p>
              <h2>{contact.name}</h2>
            </div>
            <div className="pc-identity-lines">
              <a href={`tel:${contact.tel}`}><PhoneCall size={16} /><span>{contact.phone}</span></a>
              <a href={`mailto:${contact.email}`}><Mail size={16} /><span>{contact.email}</span></a>
            </div>
            <a href={contact.vcard} download className="pc-save-contact">
              <Download size={16} /> Save {contact.name} to Contacts
            </a>
          </aside>
        </div>
      </header>

      <section className="pc-direct-strip" aria-label="Direct contact options">
        <a href={`tel:${contact.tel}`}><PhoneCall size={18} /><span><small>Direct Call</small>{contact.phone}</span></a>
        <a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /><span><small>WhatsApp</small>Message {contact.name}</span>
        </a>
        <a href={`mailto:${contact.email}`}><Mail size={18} /><span><small>Email</small>{contact.email}</span></a>
      </section>

      <section className="pc-assistance">
        <div className="sv-pricing-top">
          <div>
            <div className="sv-label sv-reveal">How I Can Assist</div>
            <h2 className="sv-sh sv-reveal">One direct contact from enquiry to <em>return.</em></h2>
          </div>
          <p className="sv-pricing-desc sv-reveal">{contact.signoff}</p>
        </div>
        <div className="pc-assistance-grid">
          {contact.support.map((item, index) => (
            <article className="pc-assistance-item sv-reveal" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pc-service-overview">
        <div className="pc-service-inner">
          <div className="pc-service-copy sv-reveal">
            <div className="sv-label">Your Private Service</div>
            <h2 className="sv-sh">Complete garment care, <em>personally coordinated.</em></h2>
            <p>
              Kings & Queens supports private clients, households and their representatives with everyday laundry,
              specialist garment care and reliable collection and delivery throughout London.
            </p>
          </div>
          <div className="pc-service-list sv-reveal">
            {PRIVATE_SERVICE.map((service) => (
              <div key={service}><Check size={16} /><span>{service}</span></div>
            ))}
          </div>
        </div>
        <div className="pc-standards-grid">
          {SERVICE_STANDARDS.map(({ title, text, Icon }) => (
            <article className="pc-standard sv-reveal" key={title}>
              <Icon size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pc-process">
        <div className="pc-process-heading sv-reveal">
          <div className="sv-label">Arranging Your Service</div>
          <h2 className="sv-sh">Three clear steps.</h2>
        </div>
        <div className="pc-process-grid">
          <article className="sv-reveal">
            <MessageCircle size={22} />
            <span>01</span>
            <h3>Contact {contact.name}</h3>
            <p>Call, WhatsApp or email with your request, preferred collection date and postcode.</p>
          </article>
          <article className="sv-reveal">
            <Shirt size={22} />
            <span>02</span>
            <h3>Share Your Requirements</h3>
            <p>Mention garment types, specialist care notes, access details and any required deadline.</p>
          </article>
          <article className="sv-reveal">
            <Car size={22} />
            <span>03</span>
            <h3>Collection Confirmed</h3>
            <p>Your collection, care and return details are coordinated and confirmed directly with you.</p>
          </article>
        </div>
      </section>

      <section className="pc-information">
        <div className="pc-information-inner">
          <div className="pc-information-heading sv-reveal">
            <div className="sv-label">Essential Information</div>
            <h2 className="sv-sh">Everything you need to <em>reach us.</em></h2>
            <p>Your personal contact remains the fastest route for private-client requests.</p>
          </div>
          <div className="pc-information-list sv-reveal">
            <div><PhoneCall size={19} /><span><small>{contact.name}, direct</small><a href={`tel:${contact.tel}`}>{contact.phone}</a></span></div>
            <div><PhoneCall size={19} /><span><small>Main desk</small><a href="tel:02076604800">020 7660 4800</a></span></div>
            <div><MapPin size={19} /><span><small>Store</small>221 Waterloo Road, London SE1 8XH</span></div>
            <div><Clock3 size={19} /><span><small>Opening hours</small>Mon-Sat 8am-8pm &middot; Sun 10am-5pm</span></div>
          </div>
        </div>
      </section>

      <section className="pc-other-contact">
        <div className="pc-other-inner sv-reveal">
          <div>
            <span>Alternative Private Desk Contact</span>
            <h2>{other.name}</h2>
            <p>{other.specialism}</p>
          </div>
          <Link to={`/private-clients/${otherKey}`} className="sv-btn sv-btn-s">
            View {other.name}'s Details <span className="sv-arr">&rarr;</span>
          </Link>
        </div>
      </section>

      <div className="sv-cta">
        <div className="sv-cta-in">
          <h2 className="sv-cta-h">Speak directly with {contact.name}.</h2>
          <p className="sv-cta-sub">Private enquiries, collection arrangements and wardrobe-care support.</p>
          <div className="sv-cta-btns">
            <a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="sv-btn sv-btn-d">
              WhatsApp {contact.name}
            </a>
            <a href={`tel:${contact.tel}`} className="sv-btn sv-btn-d pc-cta-secondary">Call {contact.phone}</a>
          </div>
        </div>
      </div>

      <footer className="sv-ft">
        <div className="sv-ft-g">
          <div>
            <img src="/knqlogo.svg" alt="Kings & Queens" className="pc-footer-logo" />
            <p className="sv-ft-desc">Premium dry cleaning and private garment care in Waterloo, London. Trusted for over 15 years.</p>
          </div>
          <div className="sv-ft-col">
            <h4>Private Clients</h4>
            <ul>
              <li><Link to="/private-clients">Programme Overview</Link></li>
              <li><Link to="/private-clients/simba">Contact Simba</Link></li>
              <li><Link to="/private-clients/basit">Contact Basit</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>{contact.name}, Direct</h4>
            <ul>
              <li><a href={`tel:${contact.tel}`}>{contact.phone}</a></li>
              <li><a href={`https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={contact.vcard} download>Save Contact</a></li>
            </ul>
          </div>
          <div className="sv-ft-col">
            <h4>Kings & Queens</h4>
            <ul>
              <li><a href="tel:02076604800">020 7660 4800</a></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/contact">Contact & Collection</Link></li>
              <li>221 Waterloo Rd, SE1 8XH</li>
            </ul>
          </div>
        </div>
        <div className="sv-ft-btm">
          <div className="sv-ft-cp">&copy; 2026 Kings &amp; Queens Dry Cleaning &amp; Laundrette</div>
        </div>
      </footer>
    </div>
  );
}
