import { useState, useEffect } from "react";
import "../../assets/styles/Contact.css";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import dottedImg from "../../assets/images/dots.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "cogniitec.com",
  ];

  useEffect(() => {
    if (statusMessage) {
      setShowPopup(true); // Show the popup when status message is set
      setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
    }
  }, [statusMessage]);

  // Regular expressions for validation
  const nameRegex = /^[A-Za-z]+$/; // Only alphabets
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/;
  const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number validation (10 digits, starts with 6-9)
  // const messageRegex = /^[A-Za-z\s]+$/;

  // Handle input changes
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: "" });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers
      if (!/^\d*$/.test(value)) return;

      // Prevent the first digit from being 0-5
      if (value.length === 1 && /^[0-5]$/.test(value)) {
        return; // Ignore input if first digit is 0-5
      }

      // Limit input to 10 digits
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }

    const domain = email.split("@")[1];
    if (!validEmailDomains.includes(domain)) {
      return `Invalid email domain. Allowed: ${validEmailDomains.join(", ")}`;
    }

    return "";
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    // Field validations
    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = "First name is required";
    // } else if (!nameRegex.test(formData.firstName)) {
    //   newErrors.firstName =
    //     "Only alphabets are allowed (No spaces, numbers, or special characters)";
    // }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters long";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName =
        "Only alphabets are allowed (No spaces, numbers, or special characters)";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName =
        "Only alphabets are allowed (No spaces, numbers, or special characters)";
    }

    // Email validation
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email =
        "Invalid email format (Allowed: .com, .in, .net, .org, etc.)";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid phone number (Must be 10 digits)";

    // Message validation

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message cannot be empty";
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters long";
    // } else if (!messageRegex.test(formData.message.trim())) {
    //   newErrors.message = "Message should contain only alphabets and spaces";
    // }

    // If there are errors, update state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // setStatusMessage("Please fill in all required fields correctly.");
      // setShowPopup(true);
      return;
    }

    setIsSubmitting(true); // Set button to "Sending..." state

    try {
      // const response = await fetch("http://localhost:5000/api/contact", {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // try {
      //     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(formData),
      //    });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }); // Reset form
        setErrors({});
      } else {
        setStatusMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset button state after request finishes
    }
  };

  return (
    <section className="contact-section">
      <Helmet>
        <title>Contact Us - Skillorea | Support Team | </title>
        <meta
          name="description"
          content="Contact Skillorea to reach out for support, questions, or inquiries. Email us, call us, or visit our office in Coimbatore. We're here to help you."
        />
        <meta name="keywords" content="Contact us, Support team" />
        <link rel="canonical" href="https://www.skillorea.com/contact-us" />
      </Helmet>
      <img src={dottedImg} alt="Dotted Design" className="dotted-left" />
      <img src={dottedImg} alt="Dotted Design" className="dotted-right" />

      <h2 className="contact-heading">
        <span> CONTACT</span>
        <span className="highlight">US</span>
      </h2>

      <div className="contact-container">
        <div className="contact-text">
          <h3>Get in Touch with Us! </h3>
          <p>
            For inquiries, feedback, or suggestions, please complete the form
            below. We will be in touch with you shortly.
          </p>
          {/* <p>
            <FaMapMarkerAlt className="icon" /> 53-2, Second Floor, MKP Colony
            Main St, Ganapathy, Coimbatore, Tamil Nadu-641006.
          </p> */}
          <p className="contact-address">
            <FaMapMarkerAlt className="icon" style={{ marginRight: "10px" }} />
            <span>53-2, Second Floor,</span> <br />
            <span>MKP Colony Main St,</span> <br />
            <span>Ganapathy, </span>
            <br />
            Coimbatore, <br />
            Tamil Nadu - 641006.
          </p>

          {/* <p className="contact-line">
            <FaPhoneAlt className="contact-icon" /> +91 99 40 50 60 90
          </p> */}

          <p className="contact-line">
            <FaPhoneAlt
              className="contact-icon"
              style={{ marginRight: "10px" }}
            />{" "}
            <a
              href="tel:+919940506090"
              style={{
                color: "#20CB01",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              +91 99 40 50 60 90
            </a>
          </p>

          {/* <p className="mail-line">
            <FaEnvelope className="mail-icon" /> info@skillorea.com
          </p> */}

          <p className="mail-line">
            <FaEnvelope className="mail-icon" />{" "}
            <a
              href="mailto:info@skillorea.com"
              style={{
                color: "#20CB01",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              info@skillorea.com
            </a>
          </p>
        </div>

        <div className="contact-form">
          {showPopup && (
            <div className="popup">
              <p>{statusMessage}</p>
            </div>
          )}
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="mb-3 phone-wrapper">
              <div className="phone-container">
                <span className="phone-prefix">+91</span>
                <input
                  type="text"
                  name="phone"
                  className="form-control phone-input"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                />
              </div>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your message..."
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="contact-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
