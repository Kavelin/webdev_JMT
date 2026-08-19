import { type FormEvent, useState, useRef, useEffect } from "react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const loadTimeRef = useRef(Date.now());

  useEffect(() => {
    loadTimeRef.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Spam Protection: Quietly exit if honeypot was filled out
    if (honeypot) {
      setStatus("sent");
      setForm(INITIAL);
      return;
    }

    // Spam Protection: Reject submissions completed under 3 seconds
    const timeSpent = (Date.now() - loadTimeRef.current) / 1000;
    if (timeSpent < 3) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + import.meta.env.VITE_EMAIL_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Voice Acting Inquiry from ${form.name}`,
          _captcha: "true",
          _honey: honeypot,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm(INITIAL);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
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

        {/* Hidden Honeypot Field for Spam Protection */}
        <div
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            height: 0,
            width: 0,
            zIndex: -1,
          }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <button
          className="contact__submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "idle" && "Submit"}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Thanks! ✓"}
          {status === "error" && "Error! Try Again"}
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