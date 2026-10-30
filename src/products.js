export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.optimalcoders.oasisx";

export const PRODUCTS = [
  {
    id: "shield",
    name: "Nomadex Shield",
    icon: "shield",
    logo: "/assets/shield/shield-emblem.webp",
    status: "In development",
    tagline: "Privacy-focused connectivity for everyday journeys.",
    summary: "Our VPN direction for simple, private connectivity: a clear connection state, plain controls, and protection designed to travel with you.",
    points: ["Private connectivity, by design", "Controls meant to stay understandable", "Planned for Windows, Mac, iOS, Android, and Linux"],
    privacy: "shieldPrivacy",
    terms: "shieldTerms",
    downloadNote: "Nomadex Shield is in development, so there is no installer or store listing yet.",
    platforms: [
      { id: "windows", icon: "windows", title: "Windows", text: "Desktop app for Windows PCs." },
      { id: "mac", icon: "apple", title: "Mac", text: "Desktop app for Mac." },
      { id: "ios", icon: "ios", title: "iPhone & iPad", text: "App for iPhone and iPad." },
      { id: "android", icon: "android", title: "Android", text: "App for Android phones and tablets." },
      { id: "linux", icon: "linux", title: "Linux", text: "Desktop app for Linux." },
    ],
  },
  {
    id: "oasisx",
    name: "OasisX-Glide VPN",
    icon: "globe",
    logo: "/assets/oasisx/oasisx-emblem.webp",
    status: "Available on Android",
    tagline: "Fast, secure, and private access to the open internet.",
    summary: "A free VPN with AES-256 encryption, a strict no-logs policy, and 50+ server locations, with Pro plans for power users.",
    points: ["AES-256 encryption and kill switch", "Free forever, with Pro upgrades", "50+ server locations worldwide"],
    privacy: "oasisxPrivacy",
    terms: "oasisxTerms",
    downloadNote: "Available now on Android. Other platforms are coming soon.",
    platforms: [
      { id: "windows", icon: "windows", title: "Windows", text: "Desktop app for Windows 10 or later.", url: null },
      { id: "mac", icon: "apple", title: "Mac", text: "Desktop app for macOS 12 Monterey or later.", url: null },
      { id: "ios", icon: "ios", title: "iPhone & iPad", text: "App for iOS 15 or later.", url: null },
      { id: "android", icon: "android", title: "Android", text: "App for Android 8.0 or later. Free on Google Play.", url: PLAY_URL },
    ],
  },
];

export const PRODUCT_PAGES = new Set(["products", ...PRODUCTS.flatMap((p) => [p.id, p.privacy, p.terms])]);

export function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}
