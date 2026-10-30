import { ContextIcon } from "../components/Icons.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { pathFor } from "../routes.js";

export function TechnologyPage() {
  return (
    <section id="technology" className="page active">
      <PageHead
        eyebrow="Technology"
        title="Thoughtful engineering for connected lives."
        intro="Every Nomadex product shares the same engineering priorities: security, reliability, usability, and responsible privacy practices."
        image="/assets/nomadex-technology.webp"
        alt="Devices sending an encrypted tunnel of light through padlock, key, and shield layers to a row of servers."
      />
      <div className="section">
        <div className="wrap">
          <h2>Shared across our products</h2>
          <div className="grid">
            <div className="card">
              <div className="symbol"><ContextIcon name="shield" /></div>
              <h3>Security-minded architecture</h3>
              <p>Designing systems with security considerations integrated from the beginning.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="pulse" /></div>
              <h3>Network performance</h3>
              <p>Architectures that balance connection quality with protection and usability.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="privacy" /></div>
              <h3>Privacy-conscious decisions</h3>
              <p>Clear data-handling practices and minimized unnecessary collection, documented per product.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="layout" /></div>
              <h3>Accessible design</h3>
              <p>Interfaces that make complex network concepts easier to navigate.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="refresh" /></div>
              <h3>Continuous improvement</h3>
              <p>Iterating through testing, measurement, and feedback as each product evolves.</p>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="message" /></div>
              <h3>Trust through clarity</h3>
              <p>Communicating product behavior, limitations, and policies in plain language.</p>
            </div>
          </div>
          <div className="actions">
            <a className="btn" href={pathFor("products")}>See it in our products</a>
            <a className="btn alt" href={pathFor("contact")}>Ask about our approach</a>
          </div>
        </div>
      </div>
    </section>
  );
}
