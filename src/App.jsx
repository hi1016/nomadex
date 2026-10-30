import { useEffect, useLayoutEffect, useState } from "react";
import { IconSprite } from "./components/Icons.jsx";
import { Layout } from "./components/Layout.jsx";
import { pageFromLocation, pageFromPath, pathFor } from "./routes.js";
import { HomePage } from "./pages/Home.jsx";
import { AboutPage } from "./pages/About.jsx";
import { ProductsPage } from "./pages/Products.jsx";
import { ShieldPage } from "./pages/Shield.jsx";
import { ShieldPrivacyPage, ShieldTermsPage } from "./pages/ShieldLegal.jsx";
import { OasisXPage } from "./pages/OasisX.jsx";
import { OasisXPrivacyPage, OasisXTermsPage } from "./pages/OasisXLegal.jsx";
import { DownloadPage } from "./pages/Download.jsx";
import { TechnologyPage } from "./pages/Technology.jsx";
import { VisionPage } from "./pages/Vision.jsx";
import { PartnersPage } from "./pages/Partners.jsx";
import { ContactPage } from "./pages/Contact.jsx";
import { PrivacyPage } from "./pages/Privacy.jsx";
import { TermsPage } from "./pages/Terms.jsx";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  products: ProductsPage,
  shield: ShieldPage,
  shieldPrivacy: ShieldPrivacyPage,
  shieldTerms: ShieldTermsPage,
  oasisx: OasisXPage,
  oasisxPrivacy: OasisXPrivacyPage,
  oasisxTerms: OasisXTermsPage,
  download: DownloadPage,
  technology: TechnologyPage,
  vision: VisionPage,
  partners: PartnersPage,
  contact: ContactPage,
  privacy: PrivacyPage,
  terms: TermsPage,
};

const TITLES = {
  home: "Nomadex",
  products: "Products | Nomadex",
  shield: "Nomadex Shield",
  shieldPrivacy: "Nomadex Shield Privacy Policy",
  shieldTerms: "Nomadex Shield Terms of Service",
  oasisx: "OasisX-Glide VPN",
  oasisxPrivacy: "OasisX-Glide VPN Privacy Policy",
  oasisxTerms: "OasisX-Glide VPN Terms of Service",
  download: "Download Nomadex Apps",
  privacy: "Website Privacy Policy | Nomadex",
  terms: "Website Terms | Nomadex",
};

function goTo(id, replace) {
  const next = PAGES[id] ? id : "home";
  const path = pathFor(next);
  if (location.pathname !== path || location.search || location.hash) {
    history[replace ? "replaceState" : "pushState"]({ page: next }, "", path);
  }
  return next;
}

export default function App() {
  const [page, setPage] = useState(() => pageFromLocation());

  useLayoutEffect(() => {
    setPage(goTo(pageFromLocation(), true));
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    function show(id) {
      setPage(id);
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      const id = pageFromPath(url.pathname);
      if (!id) return;
      event.preventDefault();
      show(goTo(id, false));
    }

    function onPop() {
      show(pageFromPath(location.pathname) ?? "home");
    }

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  useEffect(() => {
    const name = TITLES[page] ?? `${page[0].toUpperCase()}${page.slice(1)} | Nomadex`;
    document.title = `${name} | Explore Freely. Stay Protected.`;
  }, [page]);

  useLayoutEffect(() => {
    const root = document.getElementById(page);
    if (!root) return undefined;
    const items = [...root.querySelectorAll(".section, .band")];
    items.forEach((item) => item.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    const frame = requestAnimationFrame(() => items.forEach((item) => observer.observe(item)));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [page]);

  const Page = PAGES[page];

  return (
    <>
      <IconSprite />
      <Layout page={page}>
        <Page />
      </Layout>
    </>
  );
}
