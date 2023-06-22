// import React, { useState } from "react";
// import axios from "axios";
// import "./Contact.css";

// function Contact() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [emailSubject, setEmailSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // const [submitMessage, setSubmitMessage] = useState("");
//   // const [insertedContact, setInsertedContact] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     axios
//       .post("http://localhost:3001/api/contact", {
//         fullName,
//         email,
//         mobileNumber,
//         emailSubject,
//         message,
//       })
//       .then((response) => {
//         // setSubmitMessage(response.data.message);
//         setIsSubmitting(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         // setSubmitMessage("An error occurred while submitting the form.");
//         setIsSubmitting(false);
//       });
//   };

//   return (
//     <>
//       <section className="contact" id="contact">
//         <h2 className="heading">
//           Reach out to <span>Me!</span>
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="number"
//               placeholder="Mobile Number"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Email Subject"
//               value={emailSubject}
//               onChange={(e) => setEmailSubject(e.target.value)}
//             />
//           </div>
//           <textarea
//             name=""
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Your Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//           <input
//             type="submit"
//             value="Send Message"
//             className="btn"
//             disabled={isSubmitting}
//           />
//         </form>
//       </section>
//     </>
//   );
// }

// export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Reach out to <span>Me!</span>
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="mobileNumber"
              placeholder="Mobile Number"
              required
            />
            <input
              type="text"
              name="emailSubject"
              placeholder="Email Subject"
              required
            />
          </div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
}

export default Contact;
