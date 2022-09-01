import React, { useState } from "react";
const FORM_ENDPOINT = "";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contactBackground">
      <h2 className="contactTitle">Contact Me!</h2>
      <form
        className="contactForm"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="contactInput">
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div className="contactInput">
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="contactInput">
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </div>
  );
}
