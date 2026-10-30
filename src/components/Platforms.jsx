import { OsIcon } from "./Icons.jsx";

const SURFACES = [
  ["windows", "Windows"],
  ["apple", "Mac"],
  ["ios", "iOS"],
  ["android", "Android"],
  ["linux", "Linux"],
];

export function PlatformList({ className, label }) {
  return (
    <ul className={className} aria-label={label}>
      {SURFACES.map(([icon, name]) => (
        <li key={name}><OsIcon name={icon} /> {name}</li>
      ))}
    </ul>
  );
}

export function detectPlatform() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  if (/android/i.test(ua)) return "android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Mac/i.test(platform) || /Macintosh/i.test(ua)) return "mac";
  if (/Win/i.test(platform) || /Windows/i.test(ua)) return "windows";
  if (/Linux/i.test(platform)) return "linux";
  return "";
}

export function StoreDownloads({ platforms, here, className = "download-grid" }) {
  return (
    <div className={className}>
      {platforms.map((item) => (
        <article key={item.id} className={`card download-card${here === item.id ? " yours" : ""}`}>
          {here === item.id ? <p className="download-badge">This device</p> : null}
          <OsIcon name={item.icon} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.url ? (
            <a className="btn" href={item.url} target="_blank" rel="noopener noreferrer">Download for {item.title}</a>
          ) : (
            <span className="btn alt soon" aria-disabled="true">Coming soon</span>
          )}
        </article>
      ))}
    </div>
  );
}
