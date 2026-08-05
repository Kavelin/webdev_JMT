import { type FormEvent, useState } from "react";
import "./Contact.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Open the user's mail client with their message prefilled. Replace
    // with a proper backend integration (Formspree / Resend / etc.) when ready.
    const subject = encodeURIComponent(
      `Voice Acting Inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`,
    );
    window.location.href = `mailto:hello@jm-torres.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <main className="contact">
      <form className="contact__card" onSubmit={onSubmit}>
        <h2 className="contact__title">Let&rsquo;s Get In Touch!</h2>

        <div className="contact__field">
          <label className="contact__field-label" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            className="contact__input"
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="contact__field">
          <label className="contact__field-label" htmlFor="contact-email">
            E-mail
          </label>
          <input
            id="contact-email"
            className="contact__input"
            type="email"
            placeholder="john.doe123@gmail.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="contact__field">
          <label className="contact__field-label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            className="contact__textarea"
            placeholder="Write your humble request here."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button className="contact__submit" type="submit">
          {status === "idle" && "Submit"}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Thanks! ✓"}
        </button>
      </form>

      {/* Figma reference: scattered bubbles behind the contact card.
          Reproduced as soft circles so the design intent survives. */}
      <div className="contact__bubbles" aria-hidden="true">
        <svg viewBox="0 0 1440 1080" preserveAspectRatio="none">
          <circle cx="240" cy="380" r="120" fill="rgba(255,255,255,0.4)" />
          <circle cx="370" cy="300" r="80" fill="rgba(255,255,255,0.5)" />
          <circle cx="320" cy="600" r="60" fill="rgba(255,255,255,0.55)" />
          <circle cx="1200" cy="280" r="120" fill="rgba(255,255,255,0.4)" />
          <circle cx="1240" cy="480" r="80" fill="rgba(255,255,255,0.5)" />
          <circle cx="1300" cy="400" r="60" fill="rgba(255,255,255,0.55)" />
        </svg>
      </div>
    </main>
  );
}
