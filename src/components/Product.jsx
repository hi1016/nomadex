import { ContextIcon } from "./Icons.jsx";
import { pathFor } from "../routes.js";

export function ProductMark({ product }) {
  if (product.logo) return <img className="product-logo" src={product.logo} alt="" width="48" height="48" />;
  return <div className="symbol"><ContextIcon name={product.icon} /></div>;
}

export function ProductCardHeader({ product }) {
  return (
    <>
      <div className="product-card-top">
        <ProductMark product={product} />
        <span className="pill">{product.status}</span>
      </div>
      <h3>{product.name}</h3>
    </>
  );
}

export function ProductCrumbs({ product, current }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <a href={pathFor("products")}>Products</a>
      <span aria-hidden="true">/</span>
      {current ? (
        <>
          <a href={pathFor(product.id)}>{product.name}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{current}</span>
        </>
      ) : (
        <span aria-current="page">{product.name}</span>
      )}
    </nav>
  );
}

export function ProductLegalHead({ product, kind, title, intro }) {
  return (
    <div className="pagehead">
      <div className="wrap">
        <ProductCrumbs product={product} current={title} />
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="legal-tabs">
          <a className={kind === "privacy" ? "active" : undefined} href={pathFor(product.privacy)}>Privacy policy</a>
          <a className={kind === "terms" ? "active" : undefined} href={pathFor(product.terms)}>Terms of service</a>
          <a href={pathFor(product.id)}>Back to {product.name}</a>
        </div>
      </div>
    </div>
  );
}

export function ProductLegalSection({ product }) {
  return (
    <div className="section light">
      <div className="wrap">
        <div className="eyebrow">Terms & privacy</div>
        <h2>{product.name} policies.</h2>
        <p className="sectionintro">Each Nomadex product has its own privacy policy and terms of service, written for how that product works.</p>
        <div className="fit">
          <article className="card">
            <div className="symbol"><ContextIcon name="privacy" /></div>
            <h3>Privacy policy</h3>
            <p>What {product.name} collects, what it never collects, and the choices you have.</p>
            <a className="btn alt slim" href={pathFor(product.privacy)}>Read the privacy policy</a>
          </article>
          <article className="card">
            <div className="symbol"><ContextIcon name="message" /></div>
            <h3>Terms of service</h3>
            <p>The rules for using {product.name}, including acceptable use, plans, and disclaimers.</p>
            <a className="btn alt slim" href={pathFor(product.terms)}>Read the terms</a>
          </article>
        </div>
      </div>
    </div>
  );
}
