import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bannerImage from "../../assets/contact-us-banner.webp";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [activeCard, setActiveCard] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Success:", result.text);
        setIsLoading(false);
        setSuccessMessage(
          "Thank you for contacting us, we will be in touch shortly."
        );
        console.log("EmailJS Response:", result); // Log success response

        e.target.reset(); // Reset form fields
      })
      .catch((error) => {
        console.error("Error:", error); // Log error details
        setIsLoading(false);
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error); // Log any errors
      });
  };

  // Function to set only one card as active
  const toggleCard = (cardIndex) => {
    setActiveCard((prev) => (prev === cardIndex ? null : cardIndex)); // Toggle the same card or set a new active card
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section
        className="contact-banner-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="contact-banner-overlay">
          <h1>Have any questions or need support? We're here to help!</h1>
        </div>
      </section>

      {/* Contact Information Cards */}
      <div className="contact-info-cards">
        <div
          className={`contact-card ${activeCard === 0 ? "active" : ""}`}
          onClick={() => {
            toggleCard(0);
            window.open(
              "https://www.google.com/maps/search/?api=1&query=554+PHC+Kasaragod+671121+Kerala",
              "_blank"
            );
          }}
        >
          <i className="fas fa-map-marker-alt"></i>
          <h4>Location</h4>
          <p>554, PHC, Kasaragod, 671121, Kerala</p>
        </div>

        <div
          className={`contact-card ${activeCard === 1 ? "active" : ""}`}
          onClick={() => toggleCard(1)}
        >
          <div>
            <i className="fas fa-clock"></i>
            <h4>Work Hours</h4>
            <p>Monday to Friday: 8 am – 5 pm</p>
          </div>
        </div>

        <div
          className={`contact-card ${activeCard === 2 ? "active" : ""}`}
          onClick={() => {
            toggleCard(2);
            window.open("mailto:info@tekz.ai");
          }}
        >
          <i className="fas fa-envelope"></i>
          <h4>Email Address</h4>
          <p>tekzaiaws@gmail.com</p>
        </div>

        <div
          className={`contact-card ${activeCard === 3 ? "active" : ""}`}
          onClick={() => {
            toggleCard(3);
            window.open("tel:+919400480459");
          }}
        >
          <i className="fas fa-phone-alt"></i>
          <h4>Phone Numbers</h4>
          <p>+91-9400480459</p>
        </div>
      </div>

      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you. Fill out the form below to get in touch
          with us.
        </p>
      </div>

      {/* Contact Form Section */}
      <section className="contact-container">
        <div className="contact-form">
          {/* Loader and Success Message */}
          {isLoading && <div className="loading-message">Submitting...</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Send Enquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
