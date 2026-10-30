import { PageHead } from "../components/PageHead.jsx";
import { PRODUCTS } from "../products.js";
import { pathFor } from "../routes.js";

export function TermsPage() {
  return (
    <section id="terms" className="page active">
      <PageHead title="Website Terms of Use" intro="The rules for using the Nomadex website. Each Nomadex product has its own terms of service." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026. <a className="text-link" href={pathFor("privacy")}>View the website privacy policy</a></p>
          <p>These terms cover the Nomadex company website. By using the site, you agree to them. Using a Nomadex product is governed by that product’s own terms:</p>
          <ul>
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <a className="text-link" href={pathFor(product.terms)}>{product.name} terms of service</a>
              </li>
            ))}
          </ul>

          <h2>1. Acceptable use</h2>
          <p>Use the site in line with the law that applies to you. You must not:</p>
          <ul>
            <li>Send unsolicited or unauthorized messages through the site.</li>
            <li>Share or distribute unlawful content.</li>
            <li>Infringe someone else’s intellectual property.</li>
            <li>Attempt to gain unauthorized access to networks, devices, or systems.</li>
            <li>Harm, disrupt, or interfere with the site or other visitors.</li>
          </ul>
          <p>Breaking these rules can mean a temporary or lasting block from the site.</p>

          <h2>2. Content and trademarks</h2>
          <p>The Nomadex name, product names, logos, and site content belong to Nomadex. You may not reuse them without permission, except for fair reference to our products.</p>

          <h2>3. Privacy</h2>
          <p>The <a className="text-link" href={pathFor("privacy")}>website privacy policy</a> explains what this site handles.</p>

          <h2>4. Disclaimers</h2>
          <p>The site is provided as it is and as it is available. Nomadex does not warrant fitness for a particular purpose, reliability, or uninterrupted access. Links away from this site, including to app stores, are for convenience. Nomadex is not responsible for those sites’ content or practices.</p>

          <h2>5. Availability</h2>
          <p>Nomadex will try to keep the site reachable. It may still be unavailable because of maintenance, updates, capacity, or events outside our control.</p>

          <h2>6. Changes to these terms</h2>
          <p>Nomadex may update these terms. The date at the top of this page marks the current version. Continuing to use the site after a change is published means you accept the updated terms.</p>

          <h2>7. Contact</h2>
          <p>Questions about these terms can be sent through the <a className="text-link" href={pathFor("contact")}>contact page</a>.</p>
        </div>
      </div>
    </section>
  );
}
