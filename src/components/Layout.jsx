import { useEffect, useRef, useState } from "react";
import { Logo } from "./Icons.jsx";
import { pathFor } from "../routes.js";
import { PRODUCTS, PRODUCT_PAGES } from "../products.js";

const NAV_BEFORE = [
  ["home", "Home"],
  ["about", "About"],
];

const NAV_AFTER = [
  ["technology", "Technology"],
  ["vision", "Our Vision"],
  ["partners", "Partnerships"],
  ["contact", "Contact"],
];

function NavLink({ id, page, className, children }) {
  const current = page === id;
  const classes = [className, current && "active"].filter(Boolean).join(" ") || undefined;
  return (
    <a href={pathFor(id)} className={classes} aria-current={current ? "page" : undefined}>
      {children}
    </a>
  );
}

function ProductsMenu({ page }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [page]);

  useEffect(() => {
    if (!open) return undefined;
    function onPointerDown(event) {
      if (!root.current?.contains(event.target)) setOpen(false);
    }
    function onKeyDown(event) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={root} className={`dropdown${open ? " open" : ""}`}>
      <button
        ref={toggle}
        type="button"
        className={`dropdown-toggle${PRODUCT_PAGES.has(page) ? " active" : ""}`}
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Products
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className="dropdown-menu" id="products-menu">
        <NavLink id="products" page={page}>
          <strong>All products</strong>
          <span>The Nomadex product family</span>
        </NavLink>
        {PRODUCTS.map((product) => (
          <NavLink key={product.id} id={product.id} page={page}>
            <strong>{product.name}</strong>
            <span>{product.status}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export function Layout({ page, children }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => (document.documentElement.dataset.theme === "bright" ? "bright" : "dark"));

  useEffect(() => {
    setOpen(false);
  }, [page]);

  function chooseTheme(next) {
    document.documentElement.dataset.theme = next;
    localStorage.setItem("nomadex-theme", next);
    setTheme(next);
  }

  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <Logo />
          <div className="nav-end">
            <nav className={`links${open ? " open" : ""}`} id="site-nav" aria-label="Main navigation">
              {NAV_BEFORE.map(([id, label]) => <NavLink key={id} id={id} page={page}>{label}</NavLink>)}
              <ProductsMenu page={page} />
              {NAV_AFTER.map(([id, label]) => <NavLink key={id} id={id} page={page}>{label}</NavLink>)}
              <NavLink id="download" page={page} className="btn nav-cta">Get the apps</NavLink>
            </nav>
            <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
              ☰
            </button>
            <div className="theme-switch" role="group" aria-label="Color theme">
              <button type="button" className="theme-choice" aria-pressed={theme === "dark"} onClick={() => chooseTheme("dark")}>Dark</button>
              <button type="button" className="theme-choice" aria-pressed={theme === "bright"} onClick={() => chooseTheme("bright")}>Bright</button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="wrap foot">
          <div className="foot-brand">
            <Logo />
            <p>Privacy and connectivity products for people on the move. Explore freely. Stay protected.</p>
            <p>© {new Date().getFullYear()} Nomadex.</p>
          </div>
          <div>
            <h2>Products</h2>
            <a href={pathFor("products")}>All products</a>
            {PRODUCTS.map((product) => <a key={product.id} href={pathFor(product.id)}>{product.name}</a>)}
            <a href={pathFor("download")}>Download</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href={pathFor("about")}>About</a>
            <a href={pathFor("technology")}>Technology</a>
            <a href={pathFor("vision")}>Our vision</a>
            <a href={pathFor("partners")}>Partnerships</a>
            <a href={pathFor("contact")}>Contact</a>
          </div>
          <div>
            <h2>Legal</h2>
            <a href={pathFor("privacy")}>Website privacy</a>
            <a href={pathFor("terms")}>Website terms</a>
            {PRODUCTS.map((product) => (
              <a key={product.id} href={pathFor(product.privacy)}>{product.name} privacy & terms</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
