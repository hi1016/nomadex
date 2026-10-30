import { ContextIcon } from "../components/Icons.jsx";
import { ProductCrumbs, ProductLegalSection } from "../components/Product.jsx";
import { productById } from "../products.js";
import { pathFor } from "../routes.js";

const PRODUCT = productById("shield");

const SCREENS = [
  ["shield-screen-connected.webp", 288, "The Nomadex Shield home screen, connected to New York with download and upload speeds and a Protected status.", "Connect in one tap", "A single power button, with the location, speed, and protection status in plain view."],
  ["shield-screen-locations.webp", 290, "The Nomadex Shield server list, with countries, location counts, signal strength, and favorites.", "Pick a location", "Search countries and cities, filter for streaming or gaming, and save favorites."],
  ["shield-screen-settings.webp", 286, "Nomadex Shield settings, including auto connect, kill switch, protocol, split tunneling, and DNS.", "Stay in control", "Auto connect, kill switch, protocol, split tunneling, and DNS, each in one place."],
];

export function ShieldPage() {
  return (
    <section id="shield" className="page active">
      <div className="pagehead">
        <div className="wrap">
          <ProductCrumbs product={PRODUCT} />
          <div className="product-hero-grid">
            <div>
              <span className="pill">{PRODUCT.status}</span>
              <h1 className="product-title">
                <img src={PRODUCT.logo} alt="" width="112" height="112" />
                {PRODUCT.name}
              </h1>
              <p>Your connection. Your privacy. Your shield. A VPN experience for people who value simple, privacy-focused connectivity.</p>
              <div className="actions">
                <a className="btn" href={pathFor("download")}>Download status</a>
                <a className="btn alt" href={pathFor("contact")}>Ask about Nomadex Shield</a>
              </div>
            </div>
            <img className="product-hero-image" src="/assets/shield/shield-showcase.webp" alt="Nomadex Shield on a phone and a laptop, connected to New York, with a global server network, platform icons for Windows, macOS, iOS, Android, and Linux, and feature badges." width="1200" height="800" fetchPriority="high" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="wrap">
          <div className="eyebrow">App design</div>
          <h2>Privacy that travels with you.</h2>
          <p className="sectionintro">Whether you're at home, working remotely, or on the move, Nomadex Shield is being designed to make private connectivity straightforward and approachable.</p>
          <div className="shield-screens">
            {SCREENS.map(([file, width, alt, title, text]) => (
              <figure key={file}>
                <img src={`/assets/shield/${file}`} alt={alt} width={width} height="608" loading="lazy" />
                <figcaption>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="note spaced">Design previews. Screens, features, and figures may change before release.</p>
        </div>
      </div>
      <div className="section light">
        <div className="wrap">
          <h2>What we're designing for</h2>
          <div className="grid">
            <div className="card">
              <div className="symbol"><ContextIcon name="network" /></div>
              <h3>Private connectivity</h3>
              <p>A product direction focused on protecting network traffic and handling user data responsibly.</p>
              <a className="btn alt slim" href={pathFor("technology")}>See the engineering</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="simple" /></div>
              <h3>Easy everyday use</h3>
              <p>A clean interface that helps users understand and manage their connection.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Ask about Shield</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="pulse" /></div>
              <h3>Dependable experience</h3>
              <p>Engineering priorities that consider performance, reliability, and changing network conditions.</p>
              <a className="btn alt slim" href={pathFor("technology")}>Performance direction</a>
            </div>
          </div>
          <p className="note spaced">Product features, supported platforms, availability, and privacy practices will be published when verified. This page does not claim a live product release.</p>
        </div>
      </div>
      <div className="section">
        <div className="wrap">
          <div className="eyebrow">Part of the Nomadex family</div>
          <h2>Need protection today?</h2>
          <p className="sectionintro">While Shield is in development, OasisX-Glide VPN is available now on Android, free forever with Pro upgrades.</p>
          <div className="actions">
            <a className="btn" href={pathFor("oasisx")}>Explore OasisX-Glide VPN</a>
            <a className="btn alt" href={pathFor("products")}>All products</a>
          </div>
        </div>
      </div>
      <ProductLegalSection product={PRODUCT} />
    </section>
  );
}
