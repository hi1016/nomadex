import { ProductLegalHead } from "../components/Product.jsx";
import { productById } from "../products.js";
import { pathFor } from "../routes.js";

const PRODUCT = productById("shield");

export function ShieldPrivacyPage() {
  return (
    <section id="shieldPrivacy" className="page active">
      <ProductLegalHead product={PRODUCT} kind="privacy" title="Privacy Policy" intro="How Nomadex Shield is designed to handle information." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026.</p>
          <p>This policy covers Nomadex Shield, a privacy-focused VPN in development by Nomadex. Shield is not yet a live service and does not carry anyone’s traffic. This page describes the limits we intend to keep when it launches. Other Nomadex products have their own policies, and the <a className="text-link" href={pathFor("privacy")}>website privacy policy</a> covers this site.</p>
          <p>Have this policy reviewed by counsel before a commercial launch. It describes intended practice, not a no-logs service that is already operating.</p>

          <h2>1. Information Shield will not collect</h2>
          <p>Shield is being designed so that it does not record:</p>
          <ul>
            <li>Browsing history or the addresses of sites you visit</li>
            <li>DNS queries</li>
            <li>The content of your traffic</li>
            <li>Activity logs that describe what you do online</li>
          </ul>

          <h2>2. Limited technical information</h2>
          <p>If Shield needs a small amount of technical information to stay reliable, it would be limited to details such as:</p>
          <ul>
            <li>Device type and operating system</li>
            <li>App version and language or region setting</li>
            <li>Connection timestamps and aggregated transfer amounts</li>
            <li>Diagnostic or crash information that does not describe what someone did online</li>
          </ul>
          <p>Any collection like that will be described on this page before the product is offered. The aim is technical data that cannot be tied back to a person’s browsing.</p>

          <h2>3. How information is used</h2>
          <ul>
            <li>To keep the connection stable, watch capacity, and fix crashes.</li>
            <li>Not to build a record of websites, searches, or other online activity.</li>
            <li>Not to sell or share with advertisers.</li>
          </ul>

          <h2>4. Third parties</h2>
          <p>Shield may use a crash or performance tool. If it does, that tool should receive only anonymous technical data, under a written limit on how the data may be used. Nomadex does not sell personal information.</p>

          <h2>5. Data security</h2>
          <p>Nomadex will use reasonable administrative and technical safeguards for the limited information it actually holds. No transmission over the internet is perfectly secure, and this policy does not promise absolute security.</p>

          <h2>6. Your rights</h2>
          <p>Depending on where you live, you may be able to ask for access to information Nomadex holds about you, ask for a correction, or ask for it to be deleted. Use the <a className="text-link" href={pathFor("contact")}>contact page</a> and choose “Privacy request”.</p>

          <h2>7. Changes</h2>
          <p>We will update this policy before Shield launches and whenever its practices change. The date above marks the current version.</p>
        </div>
      </div>
    </section>
  );
}

export function ShieldTermsPage() {
  return (
    <section id="shieldTerms" className="page active">
      <ProductLegalHead product={PRODUCT} kind="terms" title="Terms of Service" intro="The rules that will apply to using Nomadex Shield." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026.</p>
          <p>These terms cover Nomadex Shield, a privacy-focused VPN in development by Nomadex. Shield is not a live service yet, and there is nothing to subscribe to. These terms describe how the service will be offered when it launches. The <a className="text-link" href={pathFor("terms")}>website terms</a> cover this site.</p>

          <h2>1. License</h2>
          <p>When Shield is available, Nomadex will grant you a limited, non-exclusive, non-transferable license to use the app for its ordinary purpose. Copying, modifying, or reverse engineering the software is not allowed except where the law says otherwise.</p>

          <h2>2. Acceptable use</h2>
          <p>Use Shield in line with the law that applies to you. You must not use it to:</p>
          <ul>
            <li>Send spam or unauthorized messages.</li>
            <li>Share or distribute unlawful content.</li>
            <li>Infringe someone else’s intellectual property.</li>
            <li>Attempt to gain unauthorized access to networks, devices, or systems.</li>
            <li>Harm, disrupt, or overload the service or other users.</li>
          </ul>
          <p>Breaking these rules can lead to suspension or termination of access.</p>

          <h2>3. Privacy</h2>
          <p>The <a className="text-link" href={pathFor("shieldPrivacy")}>Nomadex Shield privacy policy</a> explains what the product is designed to collect and not collect.</p>

          <h2>4. Disclaimers</h2>
          <p>Shield will be provided as it is and as it is available. Network conditions, third-party services, and other outside factors can affect performance. Nomadex is not responsible for losses that come from interruptions, connectivity trouble, or the content of other websites.</p>

          <h2>5. Availability</h2>
          <p>Nomadex will try to keep the service reachable, but it may be unavailable because of maintenance, updates, capacity, or events outside our control.</p>

          <h2>6. Changes</h2>
          <p>Nomadex may update these terms as the product changes. The date above marks the current version. Continuing to use Shield after a change means you accept the updated terms.</p>

          <h2>7. Contact</h2>
          <p>Questions about these terms can be sent through the <a className="text-link" href={pathFor("contact")}>contact page</a>.</p>
        </div>
      </div>
    </section>
  );
}
