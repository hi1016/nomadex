import { ContextIcon } from "../components/Icons.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { pathFor } from "../routes.js";

export function PartnersPage() {
  return (
    <section id="partners" className="page active">
      <PageHead
        eyebrow="Partnerships"
        title="Building better connections, together."
        intro="We work with teams who share our interest in privacy, networking, and responsible innovation, across our whole product portfolio."
        image="/assets/nomadex-partners.webp"
        alt="Two server networks reaching toward each other and meeting in a handshake around a shield."
      />
      <div className="section">
        <div className="wrap">
          <h2>Where we can collaborate</h2>
          <div className="grid">
            <div className="card">
              <div className="symbol"><ContextIcon name="server" /></div>
              <h3>Infrastructure</h3>
              <p>Network infrastructure, server capacity, performance, and operational reliability for our products.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Talk infrastructure</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="download" /></div>
              <h3>Distribution</h3>
              <p>Bundling, reselling, or offering Nomadex products such as OasisX-Glide VPN to your customers.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Talk distribution</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="chip" /></div>
              <h3>Technology</h3>
              <p>Builders working on privacy, connectivity, and user-centered software.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Talk technology</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="people" /></div>
              <h3>Teams & business</h3>
              <p>Private connectivity for distributed teams and businesses with people on the move.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Talk business</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="partners" /></div>
              <h3>Business development</h3>
              <p>Partnerships aligned with accessible, trustworthy digital experiences.</p>
              <a className="btn alt slim" href={pathFor("contact")}>Talk partnership</a>
            </div>
            <div className="card">
              <div className="symbol"><ContextIcon name="layout" /></div>
              <h3>Our products</h3>
              <p>See what Nomadex builds today before we talk.</p>
              <a className="btn alt slim" href={pathFor("products")}>Explore products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
