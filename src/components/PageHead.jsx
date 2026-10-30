export function PageHead({ eyebrow, title, intro, image, alt }) {
  const text = (
    <div>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  );

  return (
    <div className="pagehead">
      <div className="wrap">
        {image ? (
          <div className="product-hero-grid">
            {text}
            <img className="pagehead-art blend" src={image} alt={alt} width="1152" height="864" fetchPriority="high" />
          </div>
        ) : (
          text
        )}
      </div>
    </div>
  );
}
