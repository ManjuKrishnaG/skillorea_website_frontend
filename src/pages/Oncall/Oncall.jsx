import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../../assets/styles/Oncall.css";
import bannerBg from "../../assets/images/oncallbanner.png"; // Background Image
import doctorImage from "../../assets/images/docimg.png"; // Right Side Image
import emergencyIcon from "../../assets/images/emergency.png";
import consultingIcon from "../../assets/images/oncallicon2.png";
import availabilityIcon from "../../assets/images/24icon.png";
import familyDoctor from "../../assets/images/family-doctor.png";
import nurseChild from "../../assets/images/nurse-child.png";
import bloodTest from "../../assets/images/blood-test.png";

// Import Images
import doctor1 from "../../assets/images/doctor1.png";
import doctor2 from "../../assets/images/doctor1.png";
import doctor3 from "../../assets/images/doctor1.png";
import doctor4 from "../../assets/images/doctor1.png";
// Import Icon Images
import searchIcon from "../../assets/images/doc1.png";
import profileIcon from "../../assets/images/doc2.png";
import calendarIcon from "../../assets/images/doc3.png";
import solutionIcon from "../../assets/images/doc4.png";
import starIcon from "../../assets/images/docstar.png";

import backgroundImage from "../../assets/images/docbg.png";

import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Import Icons
// import { FaSearch, FaClipboardCheck, FaCalendarAlt, FaUserMd } from "react-icons/fa";

const steps = [
  {
    icon: searchIcon,
    title: "Connect to Doctor",
    description:
      "Connect instantly for medical help. Talk to a doctor through our app for any health worries.",
    image: doctor1,
  },
  {
    icon: profileIcon,
    title: "Schedule Appointment",
    description:
      "Select your preferred time to book an appointment. Easily schedule your consultation instantly online. ",
    image: doctor2,
  },
  {
    icon: calendarIcon,
    title: "Consult and Get Care",
    description:
      "Connect with an expert, get medical advice. Receive the right treatment for your health needs.",
    image: doctor3,
  },
  {
    icon: solutionIcon,
    title: "Dietitian Service",
    description:
      "Access specialized nutrition guidance. Get expert advice for all your dietary needs. ",
    image: doctor4,
  },
];

const testimonials = [
  {
    name: "Sarah Ryan",
    review:
      "Since my child began participating in Skillorea sports, he has experienced remarkable improvements in his energy as well as coordination skills. Active living combined with health and happiness brings joy to his life. It's been fantastic. The Skillorea van service is also incredibly helpful for our busy schedule.",
  },
  {
    name: "David Zen",
    review:
      "My daughter has learned how to deal with stress and grow confident through the wellness classes conducted by  Skillorea. Participation in the Skillorea sports program made her person stronger and clearer on goals while teaching resilience. I am extremely thankful for the wonderful support system.",
  },
  {
    name: "Maria Rodger",
    review:
      "Skillorea delivers a complete wellness experience. Through Skillorea my children establish their physical abilities as well as mental strength and social competencies. Such investment constitutes an excellent opportunity for children to expand their potential while enhancing their general sense of well-being.",
  },
];
const OnCallBanner = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "email" ? value.toLowerCase() : value;

    setFormData({ ...formData, [name]: updatedValue });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    // const emailRegex =
    //   /^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/;
    const formatEmailRegex =
      /^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/i;
    const allowedDomainRegex =
      /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|zoho\.com)$/i;
    // const hasUpperCase = /[A-Z]/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets and spaces";
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (!emailRegex.test(formData.email)) {
    //   newErrors.email = "Invalid email format";
    // }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      // } else if (hasUpperCase.test(formData.email)) {
      //   newErrors.email = "Email must be in lowercase";
    } else if (!/^[a-z0-9]/.test(formData.email)) {
      // newErrors.email = "Email should not start with a special character";
      newErrors.email = "Invalid Email";
    } else if (!formatEmailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (!allowedDomainRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email domain (e.g., gmail.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid Phone Number";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    // if (formData.message.trim() && formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters if provided";
    // }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Run validation before submitting
    if (!validate()) {
      return; // Stop if validation fails
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/oncall-enquiries/oncall-enquiry`,
        formData
      );

      console.log("Backend response:", response.data);
      setStatusMessage("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setStatusMessage("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (statusMessage) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  }, [statusMessage]);

  return (
    <>
      <Helmet>
        <title>
          Doctor On Call With Skillorea | Skillorea Doctor | Wellness
        </title>
        <meta
          name="description"
          content="Skillorea Doctor On Call,24/7 online access to trusted doctors. Get quick solutions, diet help & complete wellness support for your child."
        />
        <meta
          name="keywords"
          content="Skillorea,Doctors,Online access,Wellness"
        />
        <link rel="canonical" href="https://www.skillorea.com/doctor-on-call" />
      </Helmet>
      {/* ✅ Banner Section */}
      <section
        className="oncall-banner position-relative d-flex align-items-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side: Text and Icons */}
            <div className="col-lg-6 col-md-8 col-12">
              <div>
                <h2 className="fw-bold text-white" style={{ fontSize: "28px" }}>
                  Your doctor, just a Call Away!!
                </h2>
                <p className="text-white">
                  Get medical help quickly with Skillorea doctor on call.
                  Consult with a doctor, anytime you need help.
                </p>
                <p className="text-white">
                  Skillorea Doctor on Call gives you:
                </p>

                {/* Icons Section */}
                <div className="d-flex justify-content-between mt-3">
                  <div className="text-center">
                    <img
                      src={emergencyIcon}
                      alt="Emergency"
                      className="icon-img"
                    />
                    <p className="text-white fw-bold">Emergency</p>
                  </div>
                  <div className="text-center">
                    <img
                      src={availabilityIcon}
                      alt="24/7"
                      className="icon-img"
                    />
                    <p className="text-white fw-bold">24/7</p>
                  </div>
                  <div className="text-center">
                    <img
                      src={consultingIcon}
                      alt="Consulting"
                      className="icon-img"
                    />
                    <p className="text-white fw-bold">Consulting</p>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="btn btn-warning fw-bold px-4 py-2 mt-3"
                  style={{ fontSize: "16px" }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <img
          src={doctorImage}
          alt="Doctor"
          className="doctor-img img-fluid d-none d-md-block"
        />
      </section>

      {/* ✅ Why Book With Us Section */}
      <section className="py-5 text-center">
        {/* ✅ Heading */}
        <h2 className="fw-bold mb-4" style={{ fontSize: "20px" }}>
          <span style={{ color: "#20CB01" }}>WHY BOOK </span>
          <span style={{ color: "#070759" }}>WITH US</span>
        </h2>

        <div className="container">
          <div className="row align-items-center flex-column flex-lg-row">
            {/* ✅ Left Side: Images (on top in small screens) */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="row g-3 justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  <img
                    src={familyDoctor}
                    alt="Family Doctor"
                    className="img-fluid rounded large-img"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center gap-2">
                  <img
                    src={nurseChild}
                    alt="Nurse and Child"
                    className="img-fluid rounded small-img"
                  />
                  <img
                    src={bloodTest}
                    alt="Blood Test"
                    className="img-fluid rounded small-img"
                  />
                </div>
              </div>
            </div>

            {/* ✅ Right Side: Text (below on mobile) */}
            <div
              className="col-lg-6 text-start"
              style={{ marginLeft: "-60px" }}
            >
              <p className="oncall-book">
                Skillorea Doctors on Call service is all about getting you quick
                access to medical help whenever your child needs it. You can
                easily connect with to doctor through a call using our app. This
                means you can get advice right away for any health worries,
                which saves you time and reduces stress.
              </p>
              <p className="oncall-book">
                We all know that health problems can come up at any hour.
                That&apos;s why our service is here 24/7. We will connect you to
                a doctor if you have a medical need, and you will get a quick
                solution. You can also get a dietitian service for nutrition
                advice.
              </p>
              <p className="oncall-book">
                Discover how Doctors on Call benefits you !!
              </p>
              {/* <button
                className="enqbtn btn-warning fw-bold px-4 py-2 mt-3"
                style={{ fontSize: "16px" }}
              >
                Enquire now
              </button> */}
              {/* <button
                className="enqbtn btn-warning fw-bold px-4 py-2 mt-3 d-block mx-auto mx-md-0"
                style={{ fontSize: "16px" }}
              >
                Enquire now
              </button> */}
              {/* <button
                className="enqbtn btn-warning fw-bold px-4 py-2 mt-3 d-block mx-auto mx-lg-0"
                style={{ fontSize: "16px" }}
              >
                Enquire now
              </button> */}
              <div className="enquire-wrapper">
                <button
                  className="enquirebtn btn-warning center-enquire-btn fw-bold px-4 py-2 mt-3"
                  style={{ fontSize: "16px" }}
                >
                  Enquire now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section d-flex align-items-center justify-content-center py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 position-relative timeline-wrapper">
              {/* ✅ Timeline Vertical Line */}
              <div className="timeline-line"></div>

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="row align-items-center justify-content-center timeline-item"
                >
                  {/* ✅ Text Left, Image Right for Odd Steps */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-lg-5 col-md-6 text-md-end text-center">
                        <div className="timeline-content text-center p-3">
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="timeline-icon mb-2"
                          />
                          <h4
                            className="fw-bold mt-2"
                            style={{ fontSize: "20px" }}
                          >
                            {step.title}
                          </h4>
                          <p className="text-muted">{step.description}</p>
                        </div>
                      </div>
                      {/* ✅ Star Icon Instead of Number */}
                      <div className="col-md-1 text-center position-relative">
                        <img
                          src={starIcon}
                          alt="Star"
                          className="timeline-star"
                        />
                      </div>
                      <div className="col-lg-5 col-md-6 text-center">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="img-fluid rounded shadow"
                        />
                      </div>
                    </>
                  ) : (
                    /* ✅ Image Left, Text Right for Even Steps */
                    <>
                      <div className="col-lg-5 col-md-6 text-center">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="img-fluid rounded shadow"
                        />
                      </div>
                      {/* ✅ Star Icon Instead of Number */}
                      <div className="col-md-1 text-center position-relative">
                        <img
                          src={starIcon}
                          alt="Star"
                          className="timeline-star"
                        />
                      </div>
                      <div className="col-lg-5 col-md-6 text-md-start text-center">
                        <div className="timeline-content text-center p-3">
                          <img
                            src={step.icon}
                            alt={step.title}
                            className="timeline-icon mb-2"
                          />
                          <h4
                            className="fw-bold mt-2"
                            style={{ fontSize: "20px" }}
                          >
                            {step.title}
                          </h4>
                          <p className="text-muted">{step.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="stats-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "200px", // ✅ Ensures the section has enough height
          display: "flex",
        }}
      >
        <div className="doc-ban container d-flex flex-column align-items-center justify-content-center">
          <div className="row w-100 justify-content-center">
            {/* ✅ Stat 1 */}
            <div className=" col-md-4 d-flex flex-column align-items-center">
              <h2 className="fw-bold text-white">100%</h2>
              <p className="text-white">Support</p>
            </div>

            {/* ✅ Stat 2 */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h2 className="fw-bold text-white">24/7</h2>
              <p className="text-white">Access</p>
            </div>

            {/* ✅ Stat 3 */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h2 className="fw-bold text-white">50+</h2>
              <p className="text-white">Doctors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="enquiry-section py-5 ">
        <div className="container">
          <div className="row align-items-center enquiry-content">
            {/* ✅ Left Side - Text Content */}
            <div className="col-lg-7 order-lg-1 order-1">
              {" "}
              {/* Text first on large screens, second on small screens */}
              <h2
                className="fw-bold"
                style={{ fontSize: "20px", paddingTop: "50px" }}
              >
                Get quick care by Skillorea doctors!
              </h2>
              <p
                className="doc-enq-text text-muted mt-3"
                style={{ marginTop: "30px" }}
              >
                Doctors are available 24/7. They can answer all your questions.
                Get quick solutions for your medical issues. Consultation with
                expert dietitians is also possible. They will be able to assist
                with your nutrition requirements. Simple booking of a call with
                us.
              </p>
              <p
                className="doc-enq-text text-muted mt-3"
                style={{ marginTop: "30px" }}
              >
                We help you connect with a doctor for your specific needs.
                Consult from your home. No travel is needed. Your privacy is
                ensured. All conversations are confidential. Receive clear
                medical advice. Understand your next steps clearly. Access a
                wide range of medical specialties. Get the expertise you need.
                Consult top doctors for any issue. Receive expert care every
                time.
              </p>
              <p
                className="doc-enq-text text-muted mt-3"
                style={{ marginTop: "30px" }}
              >
                If a consultation is needed, please fill out the form to
                schedule your consultation.
              </p>
            </div>

            {/* ✅ Right Side - Enquiry Form */}
            <div className="col-lg-5 order-lg-2 order-2">
              {" "}
              {/* Form second on large screens, first on small screens */}
              <div className="p-4 rounded shadow bg-white">
                <h4 className="fw-bold mb-3" style={{ fontSize: "20px" }}>
                  Enquiry
                </h4>
                {showPopup && (
                  <div className="popup">
                    <p>{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="E-mail Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  {/* <div className="mb-3">
                    <label>Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && (
                      <div className="text-danger">{errors.phone}</div>
                    )}
                  </div> */}
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      className="mobileno form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && (
                    <div className="text-danger" style={{ marginTop: "-10px" }}>
                      {errors.phone}
                    </div>
                  )}
                  <div className="mb-3" style={{ marginTop: "20px" }}>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <div className="text-danger">{errors.message}</div>
                    )}
                  </div>
                  {/* <button
                    type="submit"
                    className="btn btn-warning fw-bold w-100"
                  >
                    Submit Enquiry
                  </button> */}
                  <button
                    className="btn btn-warning fw-bold px-4 py-2 mt-3"
                    style={{ fontSize: "16px" }}
                    onClick={handleSubmit}
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

      <section className="review-section py-5">
        <h2 className="study-smart-title text-center mb-4">
          <span className="review" style={{ color: "#070759" }}>
            OUR HAPPY
          </span>{" "}
          <span className="highlight" style={{ color: "#20CB01" }}>
            CUSTOMERS
          </span>
        </h2>

        {/* ✅ Review Cards */}
        <div className="container">
          {/* <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-4">
                <div className="testimonial-card text-center">
                  
                  <div className="d-flex justify-content-center mb-2 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  
                  <h5 className="fw-bold">
                    {testimonial.name}{" "}
                    <BsCheckCircleFill className="text-success" />
                  </h5>

                  
                  <p className="text-muted">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div> */}
          {/* Carousel for small screens */}
          <div className="d-md-none">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="testimonial-card text-center mx-3">
                      <div className="d-flex justify-content-center mb-2 text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <h5 className="fw-bold">
                        {testimonial.name}{" "}
                        <BsCheckCircleFill className="text-success" />
                      </h5>
                      <p className="text-muted">{testimonial.review}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>

          {/* Grid for medium and large screens */}
          <div className="d-none d-md-block">
            <div className="row justify-content-center">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-4">
                  <div className="testimonial-card text-center">
                    <div className="d-flex justify-content-center mb-2 text-warning">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <h5 className="fw-bold">
                      {testimonial.name}{" "}
                      <BsCheckCircleFill className="text-success" />
                    </h5>
                    <p className="text-muted">{testimonial.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnCallBanner;
