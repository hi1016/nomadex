import { ContextIcon } from "../components/Icons.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { pathFor } from "../routes.js";

export function VisionPage() {
  return (
    <section id="vision" className="page active">
      <PageHead
        eyebrow="Our vision"
        title="Beyond a single product. Toward a more private digital future."
        intro="Nomadex Shield and OasisX-Glide VPN are the first members of a growing family of approachable privacy and connectivity products."
        image="/assets/nomadex-vision.webp"
        alt="A path of light branching toward the horizon, each branch ending at a glowing shield."
      />
      <div className="section">
        <div className="wrap split">
          <div>
            <h2>One mission. More products.</h2>
            <p className="sectionintro">Our ambition is to build a portfolio that helps people and businesses navigate a connected world with more confidence and control.</p>
            <p>We grow into adjacent privacy and connectivity tools where they genuinely improve the experience, and we let real user needs decide which product comes next.</p>
          </div>
          <div className="visual story-card vision-card">
            <div className="story-quote">
              <span className="story-status"><i aria-hidden="true" /> Open connection</span>
              <p className="quote">
                <span className="story-explore">Freedom to <em>explore.</em></span>
                <span className="story-protect">Confidence to connect.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section light">
        <div className="wrap">
          <h2>Our long-term priorities</h2>
          <div className="grid">
            <div className="card">
              <div className="symbol"><ContextIcon name="shield" /></div>
              <h3>Build trust</h3>
              <p>Earn confidence through clear communication, published policies, and responsible decisions in every product.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="layout" /></div>
              <h3>Make privacy accessible</h3>
              <p>Reduce the effort required to understand and use privacy technology, on every platform we support.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="grow" /></div>
              <h3>Grow the portfolio thoughtfully</h3>
              <p>Add products and capabilities only when they deliver real value to users and partners.</p>
            </div>
          </div>
          <div className="actions">
            <a className="btn" href={pathFor("products")}>See our products</a>
            <a className="btn alt" href={pathFor("contact")}>Talk about what comes next</a>
          </div>
        </div>
      </div>
    </section>
  );
}
