import { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/styles/Enquiryform.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // if (!formData.name.trim()) {
    //   newErrors.name = "Name is required";
    // } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
    //   newErrors.name = "Name must not contain Numbers or special characters";
    // }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must not contain numbers or special characters";
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (
    //   !/^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/.test(
    //     formData.email
    //   )
    // ) {
    //   newErrors.email = "Invalid email format";
    // }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required`";
    // } else if (/[A-Z]/.test(formData.email)) {
    //   newErrors.email = "Email must be in lowercase";
    // } else if (
    //   !/^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/.test(
    //     formData.email
    //   )
    // ) {
    //   newErrors.email = "Invalid email format";
    // } else if (
    //   !/^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|zoho\.com)$/.test(
    //     formData.email
    //   )
    // ) {
    //   newErrors.email = "Please enter a valid email domain (e.g., gmail.com)";
    // }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      // } else if (/[A-Z]/.test(formData.email)) {
      //   newErrors.email = "Email must be in lowercase";
    } else if (!/^[a-z0-9]/.test(formData.email)) {
      // newErrors.email = "Email should not start with a special character";
      newErrors.email = "Invalid Email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email format";
    } else if (
      !/^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|zoho\.com)$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email domain (e.g., gmail.com)";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid Phone number ";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Valid if no errors
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "email" ? value.toLowerCase() : value;

    setFormData({ ...formData, [name]: updatedValue });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Start loading

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/enquiries/enquiry",
  //     );
  //     formData

  //     if (response.data.success) {
  //       setSuccessMessage("Enquiry submitted successfully!");
  //       setErrorMessage("");
  //       setFormData({ name: "", email: "", mobile: "", message: "" });
  //     } else {
  //       setErrorMessage("Submission failed. Try again.");
  //       setSuccessMessage("");
  //     }
  //   } catch (error) {
  //     console.error("Submission failed:", error);
  //     setErrorMessage("Something went wrong. Please try again.");
  //     setSuccessMessage("");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop if validations fail
    }

    setIsSubmitting(true); // Start loading

    try {
      const response = await axios.post(
        // "http://localhost:5000/api/enquiries/enquiry",
        `${API_BASE_URL}/enquiries/enquiry`,
        formData // ✅ Correctly pass formData here
      );

      // if (response.data.success) {
      //   setSuccessMessage("Enquiry submitted successfully!");
      //   setErrorMessage("");
      //   setFormData({ name: "", email: "", mobile: "", message: "" });
      // } else {
      //   setErrorMessage("Submission failed. Try again.");
      //   setSuccessMessage("");
      // }
      if (response.data.success) {
        setShowPopup(false); // force re-trigger
        setSuccessMessage(""); // clear old value
        setTimeout(() => {
          setSuccessMessage("Enquiry submitted successfully!");
          setShowPopup(true);
        }, 10); // short delay to re-trigger useEffect
        setErrorMessage("");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setShowPopup(false);
        setErrorMessage("Submission failed. Try again.");
        setSuccessMessage("");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <section className="enquiry-section py-3">
      <div className="container">
        <div className="row align-items-center enquiry-content">
          {/* ✅ Left Side - Text Content */}
          <div className="col-lg-7 order-lg-1 order-1">
            <h2 className=" fw-bold enq-heading" style={{ fontSize: "20px" }}>
              Get quick care by Skillorea doctors!
            </h2>
            <p className="enq-text-muted mt-3">
              Doctors are available 24/7. They can answer all your questions.
              Get quick solutions for your medical issues. Face any concern with
              confidence. Expert dietitians are also available for consultation.
              They can help with your nutrition needs. Easily book your online
              call with a professional. Choose a time that works best for you.
            </p>
            <p className="enq-text-muted mt-3">
              Find the right doctor for your specific needs. We help you connect
              quickly. Consult from your home. No travel is needed for your
              appointment. Your privacy is ensured. All conversations are
              confidential. Receive clear medical advice. Understand your next
              steps clearly. Access a wide range of medical specialties. Get the
              expertise you need. Consult top doctors for any issue. Receive
              expert care every time.
            </p>
            <p className="enq-text-muted mt-3">
              If a consultation is needed, please fill out the form to schedule
              your consultation.
            </p>
          </div>

          {/* ✅ Right Side - Enquiry Form */}
          <div className="col-lg-5 order-lg-2 order-2">
            <div className="p-4 rounded shadow bg-white">
              <h4 className="fw-bold mb-3" style={{ fontSize: "20px" }}>
                Enquiry
              </h4>

              {showPopup && (
                <div
                  className={`popup-message ${
                    successMessage ? "success" : "error"
                  }`}
                >
                  {successMessage || errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger" style={{ marginTop: "10px" }}>
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="E-mail Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger" style={{ marginTop: "10px" }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">+91</span>
                  <input
                    type="tel"
                    name="mobile"
                    className="mobileno form-control"
                    placeholder="Phone Number"
                    value={formData.mobile}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, ""); // remove non-digits
                      if (onlyDigits.length <= 10) {
                        setFormData({ ...formData, mobile: onlyDigits });
                        setErrors((prev) => ({ ...prev, mobile: "" }));
                      }
                    }}
                    maxLength="10"
                  />
                </div>
                {errors.mobile && (
                  <div
                    className="text-danger"
                    style={{ marginTop: "-10px", marginBottom: "10px" }}
                  >
                    {errors.mobile}
                  </div>
                )}

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    style={{ marginTop: "20px" }}
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger" style={{ marginTop: "10px" }}>
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* {successMessage && (
                  <div className="text-success">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="text-danger">{errorMessage}</div>
                )} */}

                <button
                  type="submit"
                  className="enquire-btn btn btn-warning fw-bold  px-4 py-2 mt-3"
                  style={{ fontSize: "16px" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Enquire Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
