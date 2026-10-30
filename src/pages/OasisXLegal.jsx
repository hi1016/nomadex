import { ProductLegalHead } from "../components/Product.jsx";
import { PLAY_URL, productById } from "../products.js";
import { pathFor } from "../routes.js";

const PRODUCT = productById("oasisx");

export function OasisXPrivacyPage() {
  return (
    <section id="oasisxPrivacy" className="page active">
      <ProductLegalHead product={PRODUCT} kind="privacy" title="Privacy Policy" intro="How OasisX-Glide VPN handles your information, and what it never records." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026.</p>
          <p>This policy covers the OasisX-Glide VPN apps and service, a Nomadex product. Other Nomadex products have their own policies, and the <a className="text-link" href={pathFor("privacy")}>website privacy policy</a> covers this site.</p>
          <p className="note">Draft for review: confirm every statement below against how the service actually operates, and have counsel review it before publishing.</p>

          <h2>1. Our no-logs commitment</h2>
          <p>OasisX-Glide VPN follows a strict no-logs policy. We do not record, store, or sell any data about your online activity. Specifically, we keep:</p>
          <ul>
            <li>No browsing history</li>
            <li>No connection timestamps</li>
            <li>No IP addresses</li>
            <li>No DNS queries</li>
            <li>No bandwidth usage records</li>
          </ul>
          <p>All DNS queries are routed through the encrypted tunnel, and traffic is protected with AES-256 encryption.</p>

          <h2>2. Information we do handle</h2>
          <ul>
            <li><strong>Account details.</strong> If you create an account to use OasisX-Glide on more than one device, we keep the email address you sign up with.</li>
            <li><strong>Subscription status.</strong> Purchases are processed by Google Play. We receive confirmation of your plan (Free, Pro, or Pro Annual) and its renewal status, not your payment card details.</li>
            <li><strong>Device limits.</strong> To enforce simultaneous connection limits (1 device on Free, 5 on Pro), the service counts active sessions without logging what those sessions do.</li>
            <li><strong>Crash diagnostics.</strong> Anonymous crash and performance reports that do not describe your online activity.</li>
          </ul>

          <h2>3. How information is used</h2>
          <ul>
            <li>To provide the service, manage your plan, and apply device limits.</li>
            <li>To keep servers stable, plan capacity, and fix crashes.</li>
            <li>To answer support requests you send us.</li>
          </ul>
          <p>We never use this information to build a profile of your browsing, and we never sell personal data.</p>

          <h2>4. Third parties</h2>
          <p>Google Play handles purchases, refunds, and subscription billing under Google’s own privacy policy. Crash reporting tools, if used, receive only anonymous technical data.</p>

          <h2>5. Data retention and security</h2>
          <p>Account and subscription information is kept while your account is active and deleted on request or after the account is closed, unless the law requires otherwise. We use reasonable technical and organizational safeguards, but no system is perfectly secure.</p>

          <h2>6. Your rights</h2>
          <p>You can ask to access, correct, or delete the information we hold about you. Use the <a className="text-link" href={pathFor("contact")}>contact page</a> and choose “Privacy request”.</p>

          <h2>7. Changes</h2>
          <p>We will post any changes to this policy here and update the date above.</p>
        </div>
      </div>
    </section>
  );
}

export function OasisXTermsPage() {
  return (
    <section id="oasisxTerms" className="page active">
      <ProductLegalHead product={PRODUCT} kind="terms" title="Terms of Service" intro="The rules for using OasisX-Glide VPN, including plans, billing, and acceptable use." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026.</p>
          <p>These terms govern your use of the OasisX-Glide VPN apps and service, a Nomadex product. By installing or using OasisX-Glide VPN, you agree to these terms. The <a className="text-link" href={pathFor("terms")}>website terms</a> cover this site.</p>
          <p className="note">Draft for review: have counsel review these terms before publishing.</p>

          <h2>1. The service</h2>
          <p>OasisX-Glide VPN provides an encrypted connection between your device and our servers. Features, server locations, and speeds can vary by plan, location, and network conditions.</p>

          <h2>2. Plans and billing</h2>
          <ul>
            <li><strong>Free.</strong> Core protection at no cost, with no time limit and no credit card, for 1 device at a time.</li>
            <li><strong>Pro ($3.99 per month) and Pro Annual ($29.99 per year).</strong> Additional servers and features, up to 5 simultaneous connections, and priority email support.</li>
          </ul>
          <p>Paid plans are sold through the <a className="text-link" href={PLAY_URL} target="_blank" rel="noopener noreferrer">Google Play Store</a> and renew automatically until cancelled. You can cancel at any time in Google Play, and you keep Pro access until the end of the current billing period. Refunds follow Google Play’s refund policy. Prices may change with notice.</p>

          <h2>3. License</h2>
          <p>Nomadex grants you a limited, non-exclusive, non-transferable license to use the OasisX-Glide apps for personal use. You may not copy, modify, resell, or reverse engineer the apps except where the law allows.</p>

          <h2>4. Acceptable use</h2>
          <p>Use the service in line with the law that applies to you. You must not use OasisX-Glide VPN to:</p>
          <ul>
            <li>Send spam or carry out fraud.</li>
            <li>Share or distribute unlawful content.</li>
            <li>Infringe someone else’s intellectual property.</li>
            <li>Attack, scan, or gain unauthorized access to networks or systems.</li>
            <li>Overload or disrupt the service or other users.</li>
          </ul>
          <p>We may suspend or terminate access that breaks these rules. Because we keep no activity logs, enforcement relies on technical abuse signals such as excessive load, not on monitoring what you do.</p>

          <h2>5. Privacy</h2>
          <p>The <a className="text-link" href={pathFor("oasisxPrivacy")}>OasisX-Glide VPN privacy policy</a> explains what we collect and what we never record.</p>

          <h2>6. Disclaimers and liability</h2>
          <p>The service is provided as it is and as it is available. A VPN improves privacy but cannot make you anonymous or protect against every threat. Features such as the kill switch and auto-reconnect reduce, but cannot eliminate, the chance of exposure if a connection drops. To the extent the law allows, Nomadex is not liable for indirect or consequential losses arising from use of the service.</p>

          <h2>7. Changes and termination</h2>
          <p>We may update these terms or the service. We will post changes here and update the date above. You can stop using the service at any time by uninstalling the app and cancelling any subscription in Google Play.</p>

          <h2>8. Contact</h2>
          <p>Questions about these terms can be sent through the <a className="text-link" href={pathFor("contact")}>contact page</a>, choosing “OasisX-Glide VPN”.</p>
        </div>
      </div>
    </section>
  );
}
