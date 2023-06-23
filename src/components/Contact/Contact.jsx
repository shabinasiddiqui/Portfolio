import React, { useState } from "react";
import "./Contact.css";
import client from "../../sanity";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const success_message = document.querySelector(".success-message");
      success_message.classList.remove("display-success-message");
      const data = {
        _type: "contact",
        fullname: fullName,
        email: email,
        mobilenumber: mobileNumber,
        emailsubject: emailSubject,
        emailbody: message,
      };
      const response = await client.create(data);
      console.log("Data sent to Sanity:", response);
      success_message.classList.add("display-success-message");
      setFullName("");
      setEmail("");
      setMobileNumber("");
      setEmailSubject("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error sending data to Sanity:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Reach out to <span>Me!</span>
        </h2>
        <div className="success-message">
          <h4>Your details have been submitted successfully!!!</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              required
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn"
            disabled={isSubmitting}
          />
        </form>
      </section>
    </>
  );
}

export default Contact;
