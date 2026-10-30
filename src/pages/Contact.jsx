import { useState } from "react";
import { PageHead } from "../components/PageHead.jsx";
import { PRODUCTS } from "../products.js";

export function ContactPage() {
  const [status, setStatus] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    setStatus("Preview only: your message has not been sent. Connect this form to your email or backend before launch.");
  }

  return (
    <section id="contact" className="page active">
      <PageHead
        eyebrow="Contact"
        title="Let's connect."
        intro="Have a question about Nomadex, one of our products, or a potential collaboration? We'd like to hear from you."
        image="/assets/nomadex-contact.webp"
        alt="A message envelope and a chat bubble joined by a protected path with a shield on it."
      />
      <div className="section">
        <div className="wrap split">
          <div>
            <h2>Start a conversation.</h2>
            <p className="sectionintro">Pick a topic so your message reaches the right product team. The website preview does not yet connect to a live inbox or backend.</p>
            <p className="note">Before launch, configure a real contact destination for the company and for each product.</p>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>
              Topic
              <select name="topic" defaultValue="general">
                <option value="general">General question about Nomadex</option>
                {PRODUCTS.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
                <option value="partnership">Partnerships & business</option>
                <option value="privacy">Privacy request</option>
              </select>
            </label>
            <label>Message<textarea name="message" required placeholder="How can we help?" /></label>
            <button type="submit" className="btn">Prepare message</button>
            <p className="note" role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
