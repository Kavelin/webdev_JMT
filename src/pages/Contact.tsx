import { type FormEvent, useState } from "react";

import bg from "../assets/backgrounds/bg-contact.svg";
import bubbles from "../assets/backgrounds/bg-contact-bubbles.svg";
import SocialRow from "../components/SocialRow";
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
    <section className="contact">
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

      <SocialRow />

      <div className="contact__bubbles" aria-hidden="true">
        <img src={bubbles} alt="" />
      </div>

      <div className="contact__bg" aria-hidden="true">
        <img src={bg} alt="" />
      </div>
    </section>
  );
}
