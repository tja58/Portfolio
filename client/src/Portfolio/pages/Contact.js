import React from "react";
import { sendContact } from "../../store/actions";

export default function Contact() {
  function contactSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value.toLowerCase(),
      subject: e.target[2].value,
      msg: e.target[3].value,
    };

    sendContact(data);
  }

  return (
    <div className="p-content p-page">
      <div className="p-connect">
        <div className="connect-header" id="contact">
          Contact
        </div>
        <form className="p-form" onSubmit={contactSubmit}>
          <div className="p-form-info">
            <input placeholder="Name" name="name" />
            <input placeholder="Email" name="email" />
          </div>
          <input
            className="p-input"
            placeholder="Subject"
            maxLength={50}
            name="subject"
          />
          <textarea className="p-input" placeholder="Message" name="message" />
          <button type="submit" className="p-form-submit">
            <span>Send Message</span>{" "}
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
