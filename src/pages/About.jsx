import { ContextIcon } from "../components/Icons.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { pathFor } from "../routes.js";

export function AboutPage() {
  return (
    <section id="about" className="page active">
      <PageHead
        eyebrow="About us"
        title="Technology built around freedom and trust."
        intro="Nomadex is a technology company building a portfolio of privacy-focused connectivity products for people and businesses."
        image="/assets/nomadex-about.webp"
        alt="A glowing compass above a world map, with a protected route crossing the continents."
      />
      <div className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Our story</div>
            <h2>Inspired by movement. Grounded in protection.</h2>
            <p className="sectionintro">The Nomadex name draws from the spirit of the nomad: curious, independent, and free to explore. We believe privacy should accompany every digital journey.</p>
            <p>That idea has grown into a family of products. Each one is built for a different way people connect, and each follows the same principle: create technology that respects people, supports connection, and reduces unnecessary complexity.</p>
          </div>
          <div className="visual story-card">
            <div className="story-quote">
              <span className="story-status"><i aria-hidden="true" /> Protected route</span>
              <p className="quote">
                <span className="story-explore">Explore <em>freely.</em></span>
                <span className="story-protect">Stay protected.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section light">
        <div className="wrap">
          <h2>Our principles</h2>
          <div className="grid">
            <div className="card">
              <div className="symbol"><ContextIcon name="privacy" /></div>
              <h3>Respect for privacy</h3>
              <p>Consider user data carefully in every product, and communicate practices clearly in each product's own policy.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="shield" /></div>
              <h3>Practical security</h3>
              <p>Approach every product with protection and responsible engineering in mind.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="person" /></div>
              <h3>Human simplicity</h3>
              <p>Make privacy tools approachable for people with different technical backgrounds.</p>
            </div>
          </div>
          <div className="actions">
            <a className="btn" href={pathFor("products")}>See all products</a>
            <a className="btn alt" href={pathFor("vision")}>Our vision</a>
          </div>
        </div>
      </div>
    </section>
  );
}
