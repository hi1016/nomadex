import { PlaceCarousel } from "../components/PlaceCarousel.jsx";
import { ContextIcon } from "../components/Icons.jsx";
import { PlatformList } from "../components/Platforms.jsx";
import { ProductCardHeader } from "../components/Product.jsx";
import { PRODUCTS } from "../products.js";
import { pathFor } from "../routes.js";

export function HomePage() {
  return (
    <section id="home" className="page active">
      <div className="hero">
        <div className="hero-bg" aria-hidden="true">
          <svg className="tunnel" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
            <path className="tunnel-path" d="M-40 640 C 240 520, 360 160, 640 250 S 980 590, 1260 230 1520 90" />
            <path className="tunnel-path tunnel-path-2" d="M-60 720 C 280 600, 430 250, 720 340 S 1060 660, 1340 310" />
            <circle className="hop" cx="250" cy="470" r="4" />
            <circle className="hop" cx="640" cy="250" r="4" />
            <circle className="hop" cx="980" cy="470" r="4" />
            <circle className="hop" cx="1260" cy="230" r="5" />
            <circle className="packet" r="5">
              <animateMotion dur="9s" repeatCount="indefinite" path="M-40 640 C 240 520, 360 160, 640 250 S 980 590, 1260 230 1520 90" />
            </circle>
            <circle className="packet packet-2" r="3.5">
              <animateMotion dur="13s" begin="-4s" repeatCount="indefinite" path="M-60 720 C 280 600, 430 250, 720 340 S 1060 660, 1340 310" />
            </circle>
          </svg>
          <div className="guard">
            <span className="ring" />
            <span className="ring ring-2" />
            <svg className="shield-svg" viewBox="0 0 64 72">
              <path d="M32 4 56 14 v22 c0 16-10 26-24 32 C18 62 8 52 8 36 V14 Z" />
              <rect x="26" y="30" width="12" height="10" rx="1.5" />
              <path d="M28 30 v-4 a4 4 0 0 1 8 0 v4" />
            </svg>
          </div>
          <svg className="lock-svg" viewBox="0 0 48 48">
            <rect x="10" y="20" width="28" height="20" rx="3" />
            <path d="M16 20 v-6 a8 8 0 0 1 16 0 v6" />
          </svg>
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Privacy & connectivity products</div>
              <h1>
                <span className="story-explore">Explore <em>freely.</em></span>
                <span className="story-protect">Stay protected.</span>
              </h1>
              <p className="lead">Nomadex builds a growing family of privacy-focused connectivity products for people and businesses on the move, from Nomadex Shield to OasisX-Glide VPN.</p>
              <ul className="checks">
                <li><span><strong>A product family.</strong> Multiple apps, each built for a different way people connect, all held to the same privacy standards.</span></li>
                <li><span><strong>Privacy by intention.</strong> Responsible data practices and thoughtful design sit at the center of every product.</span></li>
                <li><span><strong>Simple by design.</strong> Security that stays understandable for people with different technical backgrounds.</span></li>
                <li><span><strong>Clear policies.</strong> Every product publishes its own privacy policy and terms of service.</span></li>
              </ul>
            </div>
            <div className="brand-showcase scene-frame">
              <img className="drift" src="/assets/nomadex-devices.webp" alt="A laptop and a phone running a Nomadex app, with the connection switched on." />
            </div>
          </div>
          <div className="actions">
            <a className="btn" href={pathFor("products")}>Explore our products</a>
            <a className="btn alt" href={pathFor("download")}>Get the apps</a>
          </div>
          <p className="reassure">Privacy software for everyday life. Clear by design. Built around real use.</p>
          <PlatformList className="platform-row" label="Surfaces in the product direction" />
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <p className="band-label">Designed for life in motion</p>
          <ul className="chips">
            <li><ContextIcon name="move" /> Travel</li>
            <li><ContextIcon name="laptop" /> Remote work</li>
            <li><ContextIcon name="wifi" /> Public networks</li>
            <li><ContextIcon name="globe" /> Global access</li>
            <li><ContextIcon name="home" /> Shared homes</li>
            <li><ContextIcon name="privacy" /> Everyday browsing</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <div className="eyebrow">Our products</div>
          <h2>Choose the protection that fits.</h2>
          <p className="sectionintro">Each Nomadex product is built for a different need, with its own plans, platforms, privacy policy, and terms.</p>
          <div className="fit product-cards">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="card fit-card product-card">
                <ProductCardHeader product={product} />
                <p>{product.tagline}</p>
                <ul>
                  {product.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <a className="btn" href={pathFor(product.id)}>Explore {product.name}</a>
              </article>
            ))}
          </div>
          <div className="actions">
            <a className="btn alt" href={pathFor("products")}>Compare all products</a>
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap">
          <h2 className="center">Why Nomadex?</h2>
          <div className="reasons">
            <article>
              <div className="symbol"><ContextIcon name="privacy" /></div>
              <h3>Explore privately</h3>
              <p>Products focused on private connectivity and careful handling of user data.</p>
              <a className="btn alt slim" href={pathFor("products")}>See products</a>
            </article>
            <article>
              <div className="symbol"><ContextIcon name="shield" /></div>
              <h3>Browse with confidence</h3>
              <p>Protection that stays present in the background, so security feels like part of the connection.</p>
              <a className="btn alt slim" href={pathFor("technology")}>How it works</a>
            </article>
            <article>
              <div className="symbol"><ContextIcon name="network" /></div>
              <h3>A connection you can trust</h3>
              <p>Shared engineering priorities across products: performance, reliability, and changing networks.</p>
              <a className="btn alt slim" href={pathFor("technology")}>See the engineering</a>
            </article>
            <article>
              <div className="symbol"><ContextIcon name="simple" /></div>
              <h3>Simple enough to keep</h3>
              <p>Privacy tools should be approachable, so protection can stay on for ordinary days, not only expert ones.</p>
              <a className="btn alt slim" href={pathFor("about")}>Our approach</a>
            </article>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Performance with purpose</div>
            <h2>Protection should feel light.</h2>
            <p className="sectionintro">Across our products, privacy and connection quality live together: secure experiences that stay fast on ordinary networks, ordinary devices, and ordinary days.</p>
            <a className="btn" href={pathFor("technology")}>See the technical direction →</a>
          </div>
          <div className="visual scene-frame">
            <img className="blend" src="/assets/nomadex-perf-light.webp" alt="A light cyan shield traveling on a fast, uncluttered connection." />
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Where people connect</div>
            <h2>Privacy for the places you actually are.</h2>
            <p className="sectionintro">Nomadex products are built for the shifting networks of a mobile life: homes, airports, hotels, cafés, and every connection in between.</p>
            <a className="text-link" href={pathFor("products")}>Find the right product →</a>
          </div>
          <PlaceCarousel />
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2 className="center">Where to go next</h2>
          <div className="paths">
            <article className="card path">
              <div className="symbol"><ContextIcon name="layout" /></div>
              <h3>The products</h3>
              <p>Compare Nomadex Shield and OasisX-Glide VPN, and find the one that fits.</p>
              <a className="btn alt" href={pathFor("products")}>Explore products</a>
            </article>
            <article className="card path featured">
              <span className="pill">Start here</span>
              <div className="symbol"><ContextIcon name="compass" /></div>
              <h3>The company</h3>
              <p>Who we are, what we believe, and how we build a growing family of privacy products.</p>
              <a className="btn" href={pathFor("about")}>About Nomadex</a>
            </article>
            <article className="card path">
              <div className="symbol"><ContextIcon name="message" /></div>
              <h3>A conversation</h3>
              <p>Ask about any product, or talk with us about a partnership.</p>
              <a className="btn alt" href={pathFor("contact")}>Contact Nomadex</a>
            </article>
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap cta promise-card">
          <span className="story-status"><i aria-hidden="true" /> Our promise</span>
          <h2>
            <span className="story-explore">Wherever you <em>connect,</em></span>
            <span className="story-protect">make privacy part of the journey.</span>
          </h2>
          <p>Explore freely. Stay protected.</p>
          <a href={pathFor("about")} className="btn">About Nomadex →</a>
        </div>
      </div>
    </section>
  );
}
