import { useMemo } from "react";
import { PageHead } from "../components/PageHead.jsx";
import { StoreDownloads, detectPlatform } from "../components/Platforms.jsx";
import { productById } from "../products.js";
import { pathFor } from "../routes.js";

const ORDER = ["oasisx", "shield"];

function ProductDownloads({ product, here, light }) {
  return (
    <div className={light ? "section light" : "section"}>
      <div className="wrap">
        <div className="eyebrow">{product.status}</div>
        <h2 className="download-product">
          <img className="product-logo" src={product.logo} alt="" width="48" height="48" />
          {product.name}
        </h2>
        <p className="sectionintro">{product.tagline}</p>
        <StoreDownloads platforms={product.platforms} here={here} />
        <p className="note spaced">
          {product.downloadNote}{" "}
          <a className="text-link" href={pathFor(product.id)}>About {product.name}</a> · <a className="text-link" href={pathFor(product.privacy)}>Privacy</a> · <a className="text-link" href={pathFor(product.terms)}>Terms</a>
        </p>
      </div>
    </div>
  );
}

export function DownloadPage() {
  const here = useMemo(detectPlatform, []);

  return (
    <section id="download" className="page active">
      <PageHead
        eyebrow="Get the apps"
        title="Download Nomadex products."
        intro="Choose a product and the device you use. Availability differs by product and platform."
        image="/assets/nomadex-download.webp"
        alt="A laptop, a tablet, and a phone, each receiving a download that shows a shield on screen."
      />
      {ORDER.map(productById).map((product, index) => (
        <ProductDownloads key={product.id} product={product} here={here} light={index % 2 === 1} />
      ))}
    </section>
  );
}
