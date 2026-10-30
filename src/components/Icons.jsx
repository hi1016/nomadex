export function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-sprite" aria-hidden="true">
      <symbol id="icon-windows" viewBox="0 0 24 24">
        <path fill="currentColor" d="M1.2 4.4 10.4 3.1v8.3H1.2V4.4zm10.6-1.5L22.8 1.2v10.2H11.8V2.9zM1.2 12.6h9.2v8.5L1.2 19.7v-7.1zm10.6 0h11v10.4l-11-1.6v-8.8z" />
      </symbol>
      <symbol id="icon-apple" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16.2 12.5c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.7-1.5 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.4zM14.4 6.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
      </symbol>
      <symbol id="icon-ios" viewBox="0 0 24 24">
        <rect x="7" y="2.2" width="10" height="19.6" rx="2.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.2 4.7h3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="12" cy="18.5" r="0.85" fill="currentColor" />
      </symbol>
      <symbol id="icon-android" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.15 7.55 5.7 5.05a.5.5 0 0 1 .87-.5l1.5 2.55A6.3 6.3 0 0 1 12 6.2c1.45 0 2.78.48 3.85 1.3l1.5-2.55a.5.5 0 1 1 .87.5l-1.45 2.5A5.7 5.7 0 0 1 18.2 12v4.7a1 1 0 0 1-1 1h-.55v2.35a1.15 1.15 0 0 1-2.3 0V17.7h-3.7v2.35a1.15 1.15 0 0 1-2.3 0V17.7H7a1 1 0 0 1-1-1V12c0-1.7.62-3.25 1.65-4.45z" />
        <circle cx="9.15" cy="10.15" r="0.85" fill="#071421" />
        <circle cx="14.85" cy="10.15" r="0.85" fill="#071421" />
      </symbol>
      <symbol id="icon-linux" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.7 6.3c.2-2.2 1.6-4 3.3-4s3.1 1.8 3.3 4c1.7.7 2.9 2.3 2.9 4.2 0 1.1-.4 2.1-1 2.9.4.8.6 1.6.6 2.5 0 2-1.7 3.5-3.9 3.5-.6 0-1.2-.1-1.7-.4-.5.3-1.1.4-1.8.4-2.2 0-3.9-1.5-3.9-3.5 0-.9.2-1.7.6-2.5-.6-.8-1-1.8-1-2.9 0-1.9 1.2-3.5 2.9-4.2z" />
        <ellipse cx="12" cy="15.6" rx="2.35" ry="3.15" fill="#071421" />
        <circle cx="10.55" cy="7.15" r="0.62" fill="#edf7fc" />
        <circle cx="13.45" cy="7.15" r="0.62" fill="#edf7fc" />
        <circle cx="10.7" cy="7.2" r="0.28" fill="#071421" />
        <circle cx="13.6" cy="7.2" r="0.28" fill="#071421" />
        <ellipse cx="12" cy="8.25" rx="0.62" ry="0.4" fill="#edf7fc" />
        <path fill="currentColor" d="M6.1 12.4c-.9.5-1.4 1.3-1.3 2.1.2 1.1 1.4 1.6 2.4 1.1.2-.7.5-1.3.9-1.8-.7-.4-1.3-.9-2-1.4zm11.8 0c-.7.5-1.3 1-2 1.4.4.5.7 1.1.9 1.8 1 .5 2.2 0 2.4-1.1.1-.8-.4-1.6-1.3-2.1zM9.3 19.6c.2.7.8 1.2 1.5 1.2.4 0 .7-.2.7-.6 0-.5-.6-.8-1.3-.8-.4 0-.8.1-.9.2zm5.4 0c-.1-.1-.5-.2-.9-.2-.7 0-1.3.3-1.3.8 0 .4.3.6.7.6.7 0 1.3-.5 1.5-1.2z" />
      </symbol>
    </svg>
  );
}

const CONTEXT_ICONS = {
  privacy: (
    <>
      <path d="M2.8 12S6.2 6.2 12 6.2 21.2 12 21.2 12 17.8 17.8 12 17.8 2.8 12 2.8 12z" />
      <circle cx="12" cy="12" r="2.3" />
      <path d="M5 5l14 14" />
    </>
  ),
  shield: <path d="M12 3.2 19 6v5.2c0 4.2-2.8 7-7 8.6-4.2-1.6-7-4.4-7-8.6V6l7-2.8z" />,
  network: (
    <>
      <circle cx="6.2" cy="8" r="2.1" />
      <circle cx="17.8" cy="8" r="2.1" />
      <circle cx="12" cy="16.8" r="2.1" />
      <path d="M8.1 9.1 10.5 15M15.9 9.1 13.5 15M8.3 8h7.4" />
    </>
  ),
  simple: (
    <>
      <rect x="3" y="7.2" width="18" height="9.6" rx="4.8" />
      <circle cx="15.4" cy="12" r="2.3" fill="currentColor" stroke="none" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="2.8" />
      <path d="M5.6 19.2c1.1-2.8 3.3-4.2 6.4-4.2s5.3 1.4 6.4 4.2" />
    </>
  ),
  people: (
    <>
      <circle cx="8.2" cy="9" r="2.2" />
      <circle cx="15.8" cy="9" r="2.2" />
      <path d="M3.6 18.4c.7-2.2 2.2-3.4 4.1-3.4 1.2 0 2.2.5 2.9 1.3M10.2 18.4c.6-2.2 2.1-3.4 4-3.4 1.9 0 3.4 1.2 4.2 3.4" />
    </>
  ),
  message: (
    <>
      <path d="M5 6.2h14A1.6 1.6 0 0 1 20.6 7.8v6.6a1.6 1.6 0 0 1-1.6 1.6H9.2L5.4 19v-3H5A1.6 1.6 0 0 1 3.4 14.4V7.8A1.6 1.6 0 0 1 5 6.2z" />
      <path d="M7.4 10.2h9.2M7.4 13h6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 7V4.2M14 7V4.2M10 19.8V17M14 19.8V17M7 10H4.2M7 14H4.2M19.8 10H17M19.8 14H17" />
    </>
  ),
  pulse: <path d="M3 12h3.6l2.1-5 3.8 10 2.2-5H21" />,
  grow: (
    <>
      <path d="M12 20V9.5" />
      <path d="M12 14.2C9.2 14.2 7 12 7 9.2 10 9.2 12 11.4 12 14.2zM12 12.4c2.8 0 5-2.2 5-5-3 0-5 2.2-5 5z" />
    </>
  ),
  move: (
    <>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.8" />
    </>
  ),
  laptop: (
    <>
      <rect x="5" y="4.6" width="14" height="10" rx="1.4" />
      <path d="M3.4 18.4h17.2" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.2 12 4.6l8 6.6V20H4v-8.8z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m14.7 9.3-1.3 4.1-4.1 1.3 1.3-4.1 4.1-1.3z" />
    </>
  ),
  partners: (
    <>
      <circle cx="8" cy="8.6" r="2.3" />
      <circle cx="16" cy="8.6" r="2.3" />
      <path d="M3.8 18.2c.8-2.3 2.3-3.5 4.2-3.5 1.3 0 2.4.6 3.1 1.5.7-.9 1.8-1.5 3.1-1.5 1.9 0 3.4 1.2 4.2 3.5" />
    </>
  ),
  layout: (
    <>
      <rect x="3.6" y="4.4" width="16.8" height="15.2" rx="2" />
      <path d="M3.6 9h16.8M9 9v10.6" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.5 12a7.5 7.5 0 1 1-2-5.2" />
      <path d="M19.5 4.6V9H15" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="4" width="16" height="6" rx="1.4" />
      <rect x="4" y="14" width="16" height="6" rx="1.4" />
      <path d="M7.2 7h.1M7.2 17h.1" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 10.2a9.2 9.2 0 0 1 14 0" />
      <path d="M8 13.4a5.2 5.2 0 0 1 8 0" />
      <circle cx="12" cy="17" r="1.05" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.6" width="14" height="9.4" rx="2" />
      <path d="M8.2 10.6V7.8a3.8 3.8 0 0 1 7.6 0v2.8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.6 12h16.8M12 3.6c2.3 2.4 3.4 5.2 3.4 8.4s-1.1 6-3.4 8.4c-2.3-2.4-3.4-5.2-3.4-8.4s1.1-6 3.4-8.4z" />
    </>
  ),
  bolt: <path d="M13.2 3 5.6 13.4h5.6L10.8 21l7.6-10.4h-5.6L13.2 3z" />,
  power: (
    <>
      <path d="M12 3.4v8" />
      <path d="M7.2 6.6a7 7 0 1 0 9.6 0" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11M7.6 10.8 12 15.2l4.4-4.4" />
      <path d="M4.6 19.4h14.8" />
    </>
  ),
};

export function ContextIcon({ name }) {
  const icon = CONTEXT_ICONS[name];
  if (!icon) return null;
  return (
    <svg className="context-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {icon}
    </svg>
  );
}

export function OsIcon({ name }) {
  return (
    <svg className="os-icon" aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="/" className="brand">
      <img className="brand-image brand-for-dark" src="/assets/nomadex-logo.webp" alt="Nomadex — Explore freely. Stay protected." />
      <img className="brand-image brand-for-bright" src="/assets/nomadex-logo-bright.webp" alt="" />
    </a>
  );
}
