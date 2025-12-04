import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "navedabrar80@gmail.com";
    const subject = `Portfolio inquiry from ${name || "Anonymous"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact">
      <div className="container-left">
        <h1>
          <span>Let&#39;s Work</span>
        </h1>
        <h2>
          <span>together</span>
        </h2>
        <div className="contact-info">
          <div>
            <h3>Email:</h3>
            <h2>navedabrar80@gmail.com</h2>
          </div>
          <div>
            <h3>Address:</h3>
            <h2>Dhaka, Bangladesh</h2>
          </div>
          <div>
            <h3>Phone:</h3>
            <h2>+8801746614283</h2>
          </div>
        </div>
      </div>
      <form
        className="container-right"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
