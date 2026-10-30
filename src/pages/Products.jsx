import { ContextIcon } from "../components/Icons.jsx";
import { PageHead } from "../components/PageHead.jsx";
import { ProductCardHeader } from "../components/Product.jsx";
import { PRODUCTS } from "../products.js";
import { pathFor } from "../routes.js";

export function ProductsPage() {
  return (
    <section id="products" className="page active">
      <PageHead
        eyebrow="Our products"
        title="One company. A growing family of privacy products."
        intro="Nomadex builds connectivity and privacy software for people and businesses on the move. Each product has its own focus, its own plans, and its own privacy policy and terms."
        image="/assets/nomadex-products-family.webp"
        alt="A row of glowing shields on connected platforms, with new shields forming in the background."
      />

      <div className="section">
        <div className="wrap">
          <div className="fit product-cards">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="card fit-card product-card">
                <ProductCardHeader product={product} />
                <p>{product.summary}</p>
                <ul>
                  {product.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="actions product-actions">
                  <a className="btn" href={pathFor(product.id)}>Explore {product.name}</a>
                  <a className="btn alt" href={pathFor("download")}>Download</a>
                </div>
                <p className="product-legal-links">
                  <a className="text-link" href={pathFor(product.privacy)}>Privacy policy</a>
                  <a className="text-link" href={pathFor(product.terms)}>Terms of service</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section light">
        <div className="wrap split">
          <div>
            <div className="eyebrow">What's next</div>
            <h2>More products on the way.</h2>
            <p className="sectionintro">We grow the portfolio where we see real user needs in privacy and connectivity. Partners can help shape what comes next.</p>
            <div className="actions">
              <a className="btn" href={pathFor("vision")}>Read our vision</a>
              <a className="btn alt" href={pathFor("partners")}>Partner with us</a>
            </div>
          </div>
          <aside className="learn">
            <h3>Learn more about</h3>
            <a href={pathFor("about")}><ContextIcon name="compass" /> The company</a>
            <a href={pathFor("technology")}><ContextIcon name="chip" /> Our technology</a>
            <a href={pathFor("download")}><ContextIcon name="download" /> Downloads</a>
            <a href={pathFor("contact")}><ContextIcon name="message" /> Talk to us</a>
          </aside>
        </div>
      </div>
    </section>
  );
}
