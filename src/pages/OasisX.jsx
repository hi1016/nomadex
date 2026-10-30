import { ContextIcon } from "../components/Icons.jsx";
import { StoreDownloads } from "../components/Platforms.jsx";
import { ProductCrumbs, ProductLegalSection } from "../components/Product.jsx";
import { PLAY_URL, productById } from "../products.js";
import { pathFor } from "../routes.js";

const PRODUCT = productById("oasisx");

const STATS = [
  ["50+", "Server locations"],
  ["256-bit", "Encryption"],
  ["0", "Logs kept"],
  ["24/7", "Support"],
];

const HIGHLIGHTS = [
  ["bolt", "High speed", "Optimized global servers for smooth streaming and gaming."],
  ["shield", "Military-grade security", "Encrypt your connection and keep your data safe."],
  ["globe", "Global access", "Unblock websites and access content worldwide."],
  ["lock", "No-logs policy", "Your privacy comes first. We don't track or store your activity."],
];

const EXTRAS = [
  ["power", "Kill switch", "Instantly cuts your internet if the VPN drops, so your real IP is never accidentally exposed."],
  ["refresh", "Auto-reconnect", "Seamlessly reconnects after network interruptions without any action from you."],
  ["pulse", "Smart server selection", "Automatically connects you to the fastest available server based on your location and current load."],
  ["globe", "Bypass geo-restrictions", "Access content from any country. Bypass censorship and unlock the open internet."],
  ["wifi", "Public Wi-Fi protection", "Automatically secures your connection on public hotspots: airports, cafes, hotels."],
  ["bolt", "Unlimited bandwidth", "No throttling, no data caps. Stream, browse, and download without restrictions."],
];

const ENCRYPTION = [
  ["AES-256-GCM cipher.", "The gold standard in symmetric encryption, wrapping every byte you send or receive."],
  ["OpenVPN & IKEv2 protocols.", "Industry-proven tunneling protocols, automatically selected based on your network conditions."],
  ["Perfect forward secrecy.", "New encryption keys for every session. Even if one session were compromised, all others remain safe."],
  ["DNS leak protection.", "All DNS queries are routed through the encrypted tunnel. Your ISP never sees what sites you visit."],
];

const NO_LOGS = [
  "No browsing history",
  "No connection timestamps",
  "No IP addresses stored",
  "No DNS queries logged",
  "No bandwidth usage tracked",
  "No personal data sold",
];

const PLANS = [
  { id: "free", name: "Free", price: "$0", period: "forever", badge: "", text: "Everything you need to stay private online. No credit card, no expiry.", cta: "Download free" },
  { id: "pro", name: "Pro", price: "$3.99", period: "per month", badge: "Most popular", text: "Unlock the full OasisX-Glide experience: faster speeds, more servers, and priority support.", cta: "Get Pro", featured: true },
  { id: "annual", name: "Pro Annual", price: "$29.99", period: "per year", badge: "Best value", text: "Everything in Pro at a 37% discount. Lock in your privacy for the whole year.", cta: "Get Annual" },
];

const TESTIMONIALS = [
  ["Super fast and reliable! I can access all my favorite content without any issues.", "James T."],
  ["Easy to use and very secure. OasisX-Glide is now my go-to VPN.", "Sophia L."],
  ["Amazing speeds and global coverage. Perfect for streaming and remote work.", "Michael R."],
];

const FAQ = [
  ["Is OasisX-Glide VPN really free forever?", "Yes. The Free plan is genuinely free with no time limit, no credit card required, and no hidden fees. Core privacy features including AES-256 encryption, the no-log policy, kill switch, and DNS leak protection are included at no cost."],
  ["What's the difference between Pro monthly and annual?", "Both plans include identical features. The annual plan saves you 37% compared to paying monthly."],
  ["Can I cancel my Pro subscription anytime?", "Yes. You can cancel at any time through the Google Play Store. You'll keep Pro access until the end of your current billing period."],
  ["How many devices can I use simultaneously?", "The Free plan supports 1 device at a time. Pro plans support up to 5 simultaneous connections."],
  ["Do you offer refunds?", "Refunds are handled through the Google Play Store's standard refund policy. If you're unsatisfied within the eligible window, you can request a refund directly through Google Play."],
];

function PlayLink({ className = "btn", children }) {
  return (
    <a className={className} href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function OasisXPage() {
  return (
    <section id="oasisx" className="page active">
      <div className="pagehead oasis-hero">
        <div className="wrap">
          <ProductCrumbs product={PRODUCT} />
          <div className="product-hero-grid">
            <div>
              <span className="pill">A Nomadex product</span>
              <h1 className="oasis-logo-title">
                <img src="/assets/oasisx/oasisx-logo-horizontal.webp" alt="OasisX-Glide VPN" width="720" height="240" />
              </h1>
              <div className="eyebrow">Fast · Secure · Anywhere</div>
              <p className="oasis-tagline">Browse freely. <span>Stay protected.</span></p>
              <p>OasisX-Glide VPN gives you fast, secure, and private access to the open internet. Enjoy global content, protect your data, and browse without limits.</p>
              <div className="actions">
                <PlayLink>Download free on Google Play</PlayLink>
                <a className="btn alt" href={pathFor("contact")}>Ask about OasisX-Glide</a>
              </div>
            </div>
            <img className="product-hero-image" src="/assets/oasisx/oasisx-hero-devices.webp" alt="OasisX-Glide VPN on a laptop and phones, showing a connected status, speed stats, and a security shield." width="1200" height="800" fetchPriority="high" />
          </div>
          <ul className="oasis-stats">
            {STATS.map(([value, label]) => (
              <li key={label}><strong>{value}</strong><span>{label}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <div className="reasons oasis-highlights">
            {HIGHLIGHTS.map(([icon, title, text]) => (
              <article key={title}>
                <div className="symbol"><ContextIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">One tap to a</div>
            <h2>Safer internet.</h2>
            <p className="sectionintro">Connect instantly to high-speed servers around the world. Enjoy a private, secure, and unrestricted online experience with just one tap.</p>
            <ol className="steps">
              <li><strong>Download.</strong><span>Install the app on your device.</span></li>
              <li><strong>Connect.</strong><span>Choose a server and tap to connect.</span></li>
              <li><strong>Browse freely.</strong><span>Enjoy secure and open internet access.</span></li>
            </ol>
          </div>
          <img className="oasis-art" src="/assets/oasisx/oasisx-app-onetap.webp" alt="The OasisX-Glide VPN app on a phone, showing Connected status with a neon glow." width="900" height="822" loading="lazy" />
        </div>
      </div>

      <div className="section light">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Global servers</div>
            <h2>Explore the world.</h2>
            <p className="sectionintro">Connect to 100+ high-speed servers in 50+ countries. Access global content, bypass restrictions, and enjoy unlimited possibilities.</p>
            <p className="oasis-price"><strong>152.4</strong> <span>Mbps download speeds on optimized servers</span></p>
          </div>
          <img className="oasis-art" src="/assets/oasisx/oasisx-world-map.webp" alt="A glowing world map showing the OasisX-Glide global server network." width="1200" height="800" loading="lazy" />
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <div className="eyebrow">Features</div>
          <h2>Every detail covered.</h2>
          <p className="sectionintro">Every feature in OasisX-Glide VPN was engineered with one goal: make your digital life private, fast, and effortlessly secure.</p>
          <div className="grid">
            {EXTRAS.map(([icon, title, text]) => (
              <div key={title} className="card">
                <div className="symbol"><ContextIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Encryption</div>
            <h2>Military-grade protection.</h2>
            <ul className="checks">
              {ENCRYPTION.map(([title, text]) => (
                <li key={title}><span><strong>{title}</strong> {text}</span></li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="eyebrow"><ContextIcon name="privacy" /> Privacy</div>
            <h3>Zero logs. Zero compromises.</h3>
            <p>A strict no-log policy. We don't record, store, or sell any data about your online activity.</p>
            <ul className="checks">
              {NO_LOGS.map((item) => (
                <li key={item}><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h2>Privacy shouldn't cost a fortune.</h2>
          <p className="sectionintro">OasisX-Glide VPN is free, and always will be. Upgrade to Pro for the full arsenal.</p>
          <div className="paths">
            {PLANS.map((plan) => (
              <article key={plan.id} className={`card path${plan.featured ? " featured" : ""}`}>
                {plan.badge ? <p className="download-badge">{plan.badge}</p> : null}
                <h3>{plan.name}</h3>
                <p className="oasis-price"><strong>{plan.price}</strong> <span>{plan.period}</span></p>
                <p>{plan.text}</p>
                <PlayLink className={plan.featured ? "btn" : "btn alt"}>{plan.cta}</PlayLink>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap">
          <div className="eyebrow">Works on</div>
          <h2>All your devices.</h2>
          <p className="sectionintro">Protect your privacy across all platforms with a single account, with the same AES-256 encryption and kill switch everywhere.</p>
          <StoreDownloads platforms={PRODUCT.platforms} className="download-grid oasis-platforms" />
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2 className="center">What our users say.</h2>
          <div className="grid">
            {TESTIMONIALS.map(([quote, name]) => (
              <figure key={name} className="card oasis-quote">
                <div className="oasis-stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>"{quote}"</blockquote>
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap legal">
          <h2>Frequently asked questions</h2>
          {FAQ.map(([question, answer]) => (
            <details key={question} className="oasis-faq">
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <div className="cta oasis-cta">
            <div className="eyebrow">OasisX-Glide VPN</div>
            <h2>Ready to browse freely?</h2>
            <p>Join thousands of users who trust OasisX-Glide VPN for a faster, safer, and more open internet.</p>
            <div className="actions oasis-cta-actions">
              <PlayLink>Download free on Google Play</PlayLink>
              <a className="btn alt" href={pathFor("products")}>Other Nomadex products</a>
            </div>
          </div>
        </div>
      </div>

      <ProductLegalSection product={PRODUCT} />
    </section>
  );
}
