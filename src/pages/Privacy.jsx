import { PageHead } from "../components/PageHead.jsx";
import { PRODUCTS } from "../products.js";
import { pathFor } from "../routes.js";

export function PrivacyPage() {
  return (
    <section id="privacy" className="page active">
      <PageHead title="Website Privacy Policy" intro="How Nomadex handles information on this website. Each Nomadex product has its own privacy policy." />
      <div className="section">
        <div className="wrap legal">
          <p className="updated">Last updated October 30, 2026. <a className="text-link" href={pathFor("terms")}>View the website terms</a></p>
          <p>Nomadex treats privacy as part of every product, not an afterthought. This policy covers the Nomadex company website only. When you use a Nomadex product, that product’s own policy applies:</p>
          <ul>
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <a className="text-link" href={pathFor(product.privacy)}>{product.name} privacy policy</a>
              </li>
            ))}
          </ul>
          <p>Have these pages reviewed by counsel before relying on them commercially.</p>

          <h2>1. Information this website handles</h2>
          <p>This website is a static site. It does not carry VPN traffic, so it does not collect browsing history, DNS queries, traffic content, or connection logs.</p>
          <p>The contact form asks for a name, an email address, a topic, and a message so a visitor can draft a note. In this preview those fields stay in the browser. Submitting the form does not send them to an inbox or a server.</p>
          <p>The site uses Google’s tag (gtag.js) to measure advertising performance. Google may receive standard technical information such as your browser type and the pages you visit on this site, under Google’s own privacy policy.</p>

          <h2>2. How information is used</h2>
          <ul>
            <li>To read a message someone chooses to send, once a real contact destination exists.</li>
            <li>To understand how visitors find and use the website.</li>
            <li>Not to build a record of websites, searches, or other online activity outside this site.</li>
          </ul>

          <h2>3. Data security</h2>
          <p>Nomadex uses reasonable administrative and technical safeguards for the limited information it holds. No transmission over the internet is perfectly secure, and this policy does not promise absolute security.</p>

          <h2>4. Third parties</h2>
          <p>Nomadex does not sell personal information. Apart from the measurement tag described above, this website does not pass visitor information to advertising or analytics partners.</p>

          <h2>5. Your rights</h2>
          <p>Depending on where you live, you may be able to ask for access to information Nomadex holds about you, ask for a correction, or ask for it to be deleted. Use the <a className="text-link" href={pathFor("contact")}>contact page</a> and choose “Privacy request” once a real inbox is connected.</p>

          <h2>6. Changes to this policy</h2>
          <p>Nomadex may update this policy when the site or the law changes. The current version stays on this page, with the date above.</p>

          <h2>7. Contact</h2>
          <p>Questions about privacy can be sent through the <a className="text-link" href={pathFor("contact")}>contact page</a>. A published email address will be added when one is ready to receive messages.</p>
        </div>
      </div>
    </section>
  );
}
