import { useEffect, useState } from "react";

const PLACES = [
  ["nomadex-place-home.webp", "A house drawn in cybersecurity lines, with a shield and a protected path to the door.", "Home"],
  ["nomadex-place-airport.webp", "An airport terminal and control tower drawn in cybersecurity lines, with a protected route along the runway.", "Airports"],
  ["nomadex-place-hotel.webp", "A hotel drawn in cybersecurity lines, with a shield at the entrance.", "Hotels"],
  ["nomadex-place-cafe.webp", "A café and its tables drawn in cybersecurity lines, with a shield over one table.", "Cafés"],
  ["nomadex-place-cowork.webp", "An office of desks drawn in cybersecurity lines, with one workstation on a protected route.", "Coworking"],
  ["nomadex-place-wifi.webp", "A public lobby drawn in cybersecurity lines, with a protected path through overlapping signals.", "Shared Wi-Fi"],
  ["nomadex-place-commute.webp", "A train and station drawn in cybersecurity lines, with a shield riding the route.", "Commutes"],
  ["nomadex-place-city.webp", "A city of towers drawn in cybersecurity lines, with a protected route through the grid.", "New cities"],
];

export function PlaceCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduce || paused) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % PLACES.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  function show(next) {
    setIndex((next + PLACES.length) % PLACES.length);
  }

  function onKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
  }

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Places Nomadex products are designed for"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
    >
      <div className="carousel-frame">
        <button type="button" className="carousel-arrow prev" aria-label="Previous place" onClick={() => show(index - 1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 6 8 12 l6 6" /></svg>
        </button>
        <div className="carousel-viewport">
          <div className="carousel-track" style={{ transform: `translateX(${-index * 100}%)` }}>
            {PLACES.map(([file, alt, caption], i) => (
              <figure className="carousel-slide" key={caption} aria-hidden={i !== index} aria-labelledby={`place-tab-${i}`}>
                <img src={`/assets/${file}`} alt={alt} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button type="button" className="carousel-arrow next" aria-label="Next place" onClick={() => show(index + 1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6 l6 6 -6 6" /></svg>
        </button>
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Choose a place">
        {PLACES.map(([, , caption], i) => (
          <button
            key={caption}
            type="button"
            role="tab"
            id={`place-tab-${i}`}
            aria-selected={i === index}
            tabIndex={i === index ? 0 : -1}
            onClick={() => show(i)}
          >
            {caption}
          </button>
        ))}
      </div>
    </div>
  );
}
