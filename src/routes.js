export const PATHS = {
  home: "/",
  about: "/about",
  products: "/products",
  shield: "/shield",
  shieldPrivacy: "/shield/privacy",
  shieldTerms: "/shield/terms",
  oasisx: "/oasisx",
  oasisxPrivacy: "/oasisx/privacy",
  oasisxTerms: "/oasisx/terms",
  download: "/download",
  technology: "/technology",
  vision: "/vision",
  partners: "/partners",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

const PAGE_BY_PATH = new Map(Object.entries(PATHS).map(([id, path]) => [path, id]));
PAGE_BY_PATH.set("/index.html", "home");
PAGE_BY_PATH.set("/home", "home");

function normalize(pathname) {
  const path = pathname || "/";
  return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
}

export function pathFor(id) {
  return PATHS[id] ?? "/";
}

export function pageFromPath(pathname) {
  try {
    return PAGE_BY_PATH.get(normalize(decodeURI(pathname))) ?? null;
  } catch {
    return null;
  }
}

function pageFromHash(hash) {
  const id = (hash || "").replace(/^#\/?/, "").split(/[?#]/)[0];
  return Object.hasOwn(PATHS, id) ? id : null;
}

export function pageFromLocation(loc = window.location) {
  const page = pageFromPath(loc.pathname);
  if (page === "home") return pageFromHash(loc.hash) ?? "home";
  return page ?? "home";
}
