import React from "react";

export default function Contact() {
  return (
    <div className="p-content p-page">
      <div className="p-connect">
        <div className="connect-header" id="contact">
          Contact
        </div>
        <form className="p-form">
          <div className="p-form-info">
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
          <input className="p-input" placeholder="Subject" maxLength={50} />
          <textarea className="p-input" placeholder="Message" />
          <button type="submit" className="p-form-submit">
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
}
