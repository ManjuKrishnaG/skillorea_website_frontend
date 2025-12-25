import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import wellnessBg from "../../assets/images/wellness bg.png"; // Background image
import rightImage from "../../assets/images/wellnessbannerimg.png"; // Image on the right
import "../../assets/styles/wellness.css"; // CSS for styling
import bookNowImage from "../../assets/images/wellnessbooknoworangebtn.png";

import indoorGames from "../../assets/images/indoor.png";
import outdoorGames from "../../assets/images/outdoor.png";
import martialArts from "../../assets/images/martial.png";
import dance from "../../assets/images/dance.png";
import music from "../../assets/images/music.png";
import others from "../../assets/images/others.png";
import { Carousel } from "react-bootstrap";

import whyBookImage from "../../assets/images/wellnessphone.png";

import searchIcon from "../../assets/images/map.gif";
import bookIcon from "../../assets/images/calendar.gif";
import playIcon from "../../assets/images/ball.gif";

import bookImage from "../../assets/images/purpleimage.png";

import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Wellness = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    console.log("Book Now button clicked!");
  };

  const categories = [
    indoorGames,
    outdoorGames,
    martialArts,
    dance,
    music,
    others,
  ];

  const steps = [
    {
      icon: searchIcon,
      title: "Search",
      description:
        "Find your favorite wellness games and activities. Discover the customized options matching to your child's interests and needs. Find a perfect fit for their growth.",
    },
    {
      icon: bookIcon,
      title: "Book",
      description:
        "Book for your child's wellness experience. Students can reserve spots in enriching educational classes. Invest in your child's balanced development today.",
    },
    {
      icon: playIcon,
      title: "Play",
      description:
        "Children can discover wellness learning through interactive gameplay activities. Your child's development of important capabilities and lifelong well-being.",
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

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

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailFormatRegex =
      /^[^\s@]+@[^\s@]+\.(com|in|net|org|co\.in|edu|gov|info|biz|io)$/;
    const allowedEmailDomainsRegex =
      /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com|zoho\.com)$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      // } else if (formData.email !== formData.email.toLowerCase()) {
      //   newErrors.email = "Email should be in lowercase";
    } else if (!/^[a-z0-9]/.test(formData.email)) {
      // newErrors.email = "Email should not start with a special character";
      newErrors.email = "Invalid Email";
    } else if (!emailFormatRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (!allowedEmailDomainsRegex.test(formData.email)) {
      newErrors.email = "Only specific domains allowed (e.g., gmail.com)";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Phone number is required";
    } else if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Invalid phone number format";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ Valid if no errors
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/wellness-enquiries",
  //       formData
  //     );

  //     if (res.status === 200 || res.status === 201) {
  //       setStatusMessage("Message sent successfully!");
  //       setFormData({ name: "", email: "", mobile: "", message: "" });
  //     } else {
  //       setStatusMessage("Failed to send message. Try again.");
  //     }
  //   } catch (err) {
  //     console.error("Submission error:", err);
  //     setStatusMessage("Something went wrong. Please try again.");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Simple field validation
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.mobile ||
  //     !formData.message
  //   ) {
  //     setStatusMessage("All fields are required.");
  //     return;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setStatusMessage("Please enter a valid email address.");
  //     return;
  //   }

  //   // Mobile validation (10 digit number)
  //   const mobileRegex = /^[0-9]{10}$/;
  //   if (!mobileRegex.test(formData.mobile)) {
  //     setStatusMessage("Please enter a valid 10-digit mobile number.");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/wellness-enquiries",
  //       formData
  //     );

  //     if (res.status === 200 || res.status === 201) {
  //       setStatusMessage("Message sent successfully!");
  //       setFormData({ name: "", email: "", mobile: "", message: "" });
  //     } else {
  //       setStatusMessage("Failed to send message. Try again.");
  //     }
  //   } catch (err) {
  //     console.error("Submission error:", err);
  //     setStatusMessage("Something went wrong. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        // "http://localhost:5000/api/wellness-enquiries",
        `${API_BASE_URL}/wellness-enquiries`,
        formData
      );

      if (res.status === 200 || res.status === 201) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  useEffect(() => {
    if (statusMessage) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // hide after 3 seconds
    }
  }, [statusMessage]);

  return (
    <>
      <Helmet>
        <title>Wellness – Online Health & Well‑Being Classes | Skillorea</title>
        <meta
          name="description"
          content="Skillorea, the best online learning app in Coimbatore. Engaging wellness & sports programs for complete physical, mental growth, lifelong well-being."
        />
        <meta name="keywords" content="Wellness & Sports App, Wellness App" />
        <link
          rel="canonical"
          href="https://www.skillorea.com/wellness-sports"
        />
      </Helmet>
      {/* Banner Section */}
      <section
        className="wellness-section"
        style={{ backgroundImage: `url(${wellnessBg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Image (Visible only on small screens) */}
            <div className="col-12 text-center d-md-none">
              <img
                src={rightImage}
                alt="Wellness"
                className="img-fluid top-image"
              />
            </div>

            {/* Left Side: Text */}
            <div className="col-lg-6 col-md-12 col-12 text-content text-white">
              <h2 className="fw-bold" style={{ fontSize: "28px" }}>
                Active fun, expert guidance, and a lifetime wellness
              </h2>
              <p>
                Skillorea ensures your child&apos;s wellness. we build balanced
                and successful futures, through games and activities.
              </p>
              <p>Let us start wellness together, with expert guidance.</p>
              <img
                src={bookNowImage}
                alt="Book Now"
                className="img-button"
                onClick={handleClick}
              />
            </div>

            {/* Right Side Image (Hidden on Small Screens) */}
            <div className="col-lg-6 col-md-12 col-10 text-center d-none d-md-block">
              <img
                src={rightImage}
                alt="Wellness"
                className="img-fluid right-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section (Below the Banner) */}
      <section className="py-5 text-center">
        {/* <h2 className="fw-bold mb-4 center-heading">
    ✨ Explore Skillorea's Wellness Hub
  </h2> */}
        <h2 className="study-smart-title">
          <span>EXPLORE</span>{" "}
          <span className="highlight">SKILLOREA&apos;S WELLNESS HUB</span>
        </h2>

        <div className="container">
          <div className="row justify-content-center gx-3 gy-4">
            {" "}
            {/* ✅ Add gutter spacing */}
            {categories.map((imgSrc, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6">
                <div className="category-card">
                  <img
                    src={imgSrc}
                    alt={`Category ${index + 1}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-book-section py-3" ref={ref}>
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content (Appears First) */}
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <motion.h2
                className="why-book-heading fw-bold"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* <span className="green-text">WHY WELLNESS</span>{" "}
                <span className="blue-text"> WITH US</span> */}
                <h2 className="study-smart-title">
                  <span>WHY WELLNESS</span>{" "}
                  <span className="highlight">WITH US</span>
                </h2>
              </motion.h2>

              {/* Image (Visible ONLY on small screens, below heading) */}
              <div className="d-lg-none d-block text-center my-3">
                <motion.img
                  src={whyBookImage}
                  alt="Why Book With Us"
                  className="img-fluid why-book-img"
                  width="300px"
                  height="300px"
                  initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 100 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1, rotate: 0, y: 0 } : {}
                  }
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                  }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                style={{ marginTop: "-25px" }}
              >
                Invest in your child&apos;s balanced growth. Skillorea&apos;s
                wellness activities build physical and mental strength. Early
                engagement builds a strong foundation for lifelong success and
                happiness.
              </motion.p>

              <motion.button
                className="btn btn-warning px-4 py-2 fw-bold"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                style={{ marginTop: "15px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                Book Now
              </motion.button>
            </div>

            {/* Image (Visible ONLY on large screens) */}
            <div className="col-lg-6 col-12 text-center d-lg-block d-none">
              <motion.img
                src={whyBookImage}
                alt="Why Book With Us"
                className="img-fluid why-book-img"
                width="400px"
                height="400px"
                initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 100 }}
                animate={
                  isInView ? { opacity: 1, scale: 1, rotate: 0, y: 0 } : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="search-book-play py-5">
        <div className="container">
          <div className="row justify-content-center">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="wellnessstep-card text-center p-4">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="step-icon mb-3"
                    style={{ borderRadius: "10px" }}
                  />
                  <h4 className="fw-bold">{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="book-now-section py-5">
        <div className="container">
          <div className="row align-items-center rounded-card">
            
            <div className="col-lg-6 text-center">
              <img
                src={bookImage}
                alt="Book Now"
                className="img-fluid book-now-img"
              />
            </div>

            
            <div className="col-lg-6">
              <h2 className="fw-bold">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed eget diam eu
                ultrices lacus volutpat. At sem tincidunt vitae morbi sem
                iaculis.
              </p>
              <button className="btn booknowbtn px-4 py-2">Book Now</button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="book-now-section py-3">
        <div className="container">
          <div className="row align-items-center rounded-card d-flex flex-column-reverse flex-lg-row">
            {/* Right Side: Text + Button */}
            <div className="col-lg-6 text-center text-lg-start ms-lg-5">
              <h2 className="fw-bold" style={{ fontSize: "20px" }}>
                Wellness activities, diverse and fun.
              </h2>
              <p>
                Level up learning with Skillorea! Fun games, cool AI friends,
                and a smarter way to learn and shine.
              </p>
              <button className="btn booknowbtn px-4 py-2 mb-4 mb-lg-0">
                Book Now
              </button>
              {/* Added mb-4 for space on small screens */}
            </div>

            {/* Left Side: Image (Appears below text on small screens) */}
            <div className="col-lg-5 text-center">
              <img
                src={bookImage}
                alt="Book Now"
                className="img-fluid book-now-img"
              />
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
                style={{ fontSize: "20px", paddingTop: "60px" }}
              >
                Start lifelong wellness with Skillorea!
              </h2>
              <p
                className="enq-text text-muted mt-3"
                style={{ marginTop: "30px" }}
              >
                The wellness programs at Skillorea activate children and keep
                them actively involved. Our educational complex provides various
                sports and games which develop physical fitness together with
                coordination abilities. The physical activities provide double
                benefits because they increase physical skills while helping
                children learn vital life skills including cooperation and
                self-discipline and sustained effort.
              </p>
              <p
                className="enq-text text-muted mt-3"
                style={{ marginTop: "30px" }}
              >
                Skillorea advocates that children who stay active also stay
                healthy thus our purpose is to create active environments so
                students can symbolize physical well-being. Our organization
                gives children simple access to medical consultations through
                online doctors to receive both medical guidance and support. The
                wellness pathway at Skillorea helps children establish balanced
                development of their physical state along with mental state to
                achieve success in every aspect of their existence.
                {/* <strong> Morbi id amet condimentum justo.</strong> */}
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
                {/* {showPopup && (
                  <div className="popup">
                    <p>{statusMessage}</p>
                  </div>
                )} */}

                {showPopup && (
                  <div className="popup-message">{statusMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="E-mail Address"
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  {/* <div className="mb-3">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div> */}
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      className="mobileno form-control"
                      placeholder="Phone Number"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.mobile && (
                    <div className="text-danger" style={{ marginTop: "-10px" }}>
                      {errors.mobile}
                    </div>
                  )}

                  <div className="mb-3">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      style={{ marginTop: "20px" }}
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <div className="text-danger">{errors.message}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning fw-bold enquire-btn px-4 py-2 mt-3"
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

        {/* {showPopup && <div className="popup-message">{statusMessage}</div>} */}
      </section>

      <section className="review-section py-5">
        <h2
          className="study-smart-title text-center mb-4"
          style={{ marginTop: "20px" }}
        >
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
          {/* Desktop view (grid) */}
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

          {/* Mobile view (carousel) */}
          <div className="d-md-none">
            <Carousel indicators={false} interval={5000}>
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-card text-center px-3 py-4">
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
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wellness;
