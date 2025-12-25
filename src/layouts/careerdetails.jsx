import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import careersImage from "../assets/images/careerheroimg.png";
import backgroundImage from "../assets/images/pricingbg1.jpg";
import "../assets/styles/careers.css";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Careerdetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:5000/api/careers/${id}`
          `${API_BASE_URL}/careers/${id}`
        );
        if (response.data.success) {
          setJob(response.data.job);
        } else {
          toast.error("Failed to load job details.");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        toast.error("Error loading job details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    message: "",
    resume: null, // For file uploads
  });

  const [errors, setErrors] = useState({});

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (
  //     !formData.firstName ||
  //     !formData.lastName ||
  //     !formData.email ||
  //     !formData.phone ||
  //     !formData.experience ||
  //     !formData.resume
  //   ) {
  //     toast.error("Please fill in all required fields.");
  //     return;
  //   }

  //   const formDataToSend = new FormData();
  //   Object.keys(formData).forEach((key) =>
  //     formDataToSend.append(key, formData[key])
  //   );

  //   try {
  //     const response = await axios.post(
  //       // "http://localhost:5000/api/careers/apply",
  //       `${API_BASE_URL}/careers/apply`,
  //       formDataToSend,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     if (response.data.success) {
  //       toast.success("Application submitted successfully!");
  //       setShowModal(false);
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phoneNumber: "",
  //         experience: "",
  //         message: "",
  //         resume: null,
  //       });
  //     } else {
  //       toast.error("Something went wrong. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting application:", error);
  //     toast.error("Failed to submit application.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First name should only contain letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last name should only contain letters";
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (/[A-Z]/.test(formData.email)) {
    //   newErrors.email = "Email must be in lowercase";
    // } else if (!emailRegex.test(formData.email)) {
    //   newErrors.email = "Invalid email format";
    // }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (/[A-Z]/.test(formData.email)) {
      newErrors.email = "Email must be in lowercase";
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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = "Message is required";
    // } else if (formData.message.length < 10) {
    //   newErrors.message = "Message must be at least 10 characters";
    // }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    // If errors exist, show them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // toast.error("Please fill in all required fields.");
      return;
    }

    // No errors, continue with form submission
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) =>
      formDataToSend.append(key, formData[key])
    );

    try {
      const response = await axios.post(
        `${API_BASE_URL}/careers/apply`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        toast.success("Application submitted successfully!");
        setShowModal(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          message: "",
          resume: null,
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application.");
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      jobTitle: "",
      experience: "",
      message: "",
      resume: null,
    });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    setShowModal(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  if (loading) return <p className="text-center">Loading job details...</p>;
  if (!job) return <p className="text-center">Job not found.</p>;

  // const validateForm = () => {
  //   const newErrors = {};
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
  //   const phoneRegex = /^[6-9]\d{9}$/;
  //   const nameRegex = /^[A-Za-z\s]+$/;

  //   if (!formData.firstName.trim()) {
  //     newErrors.firstName = "First name is required";
  //   } else if (!nameRegex.test(formData.firstName)) {
  //     newErrors.firstName = "Only letters allowed";
  //   }

  //   if (!formData.lastName.trim()) {
  //     newErrors.lastName = "Last name is required";
  //   } else if (!nameRegex.test(formData.lastName)) {
  //     newErrors.lastName = "Only letters allowed";
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = "Email is required";
  //   } else if (/[A-Z]/.test(formData.email)) {
  //     newErrors.email = "Email must be in lowercase";
  //   } else if (!emailRegex.test(formData.email)) {
  //     newErrors.email = "Invalid email format";
  //   }

  //   if (!formData.phone.trim()) {
  //     newErrors.phone = "Phone number is required";
  //   } else if (!phoneRegex.test(formData.phone)) {
  //     newErrors.phone = "Invalid phone number";
  //   }

  //   if (!formData.jobTitle.trim()) {
  //     newErrors.jobTitle = "Job title is required";
  //   }

  //   if (!formData.experience) {
  //     newErrors.experience = "Experience is required";
  //   }

  //   if (formData.message && formData.message.length < 10) {
  //     newErrors.message = "Message should be at least 10 characters";
  //   }

  //   if (!formData.resume) {
  //     newErrors.resume = "Resume file is required";
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  return (
    <div
      className="careers-container container-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Job Title */}
      <div className="text-center py-5">
        <h2 className="values-title">
          <span className="highlight">{job.jobTitle}</span>
        </h2>
      </div>

      {/* Job Details */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="careers-image-container text-center">
            <img
              src={careersImage}
              alt="Careers"
              className="img-fluid rounded shadow w-100"
            />
          </div>
        </div>
      </div>

      <div
        className="row justify-content-center mt-4"
        style={{
          marginBottom: "40px",
        }}
      >
        <div className="col-md-8">
          <div className="row">
            {/* Job Details - Left Side */}
            <div className="col-md-8">
              <h2
                className="fw-bold "
                style={{
                  color: "#170645",
                  marginTop: "10px",
                  marginBottom: "40px",
                }}
              >
                {job.jobTitle}
              </h2>

              <section className="mb-4">
                <h5
                  className="fw-bold"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                  Job Description
                </h5>
                <>
                  <style>{`
    .green-bullets li::marker {
      color: #20CB01; /* Green bullet color */
    }
  `}</style>

                  <ul
                    className="text-muted green-bullets"
                    style={{ listStyleType: "disc" }}
                  >
                    {job.jobDescription.split("\n").map((point, index) => {
                      let cleanPoint = point.replace(/^[•-]\s*/, "").trim();
                      return cleanPoint ? (
                        <li key={index} style={{ color: "#170645" }}>
                          {cleanPoint}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </>
              </section>

              <section className="mb-4">
                <h5
                  className="fw-bold"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                  Salary
                </h5>
                <p className="text-muted">{job.salary}</p>
              </section>

              <section className="mb-4">
                <h5
                  className="fw-bold"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                  Perks & Benefits
                </h5>
                <>
                  <style>{`
    .green-bullets li::marker {
      color: #20CB01; /* Green bullet color */
    }
  `}</style>

                  <ul className="text-muted green-bullets">
                    {job.benefits.split("\n").map((point, index) => {
                      let cleanPoint = point.replace(/^[•-]\s*/, "").trim();
                      return cleanPoint ? (
                        <li key={index} style={{ color: "#170645" }}>
                          {cleanPoint}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </>
              </section>

              <section className="mb-4">
                <h5
                  className="fw-bold"
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                >
                  Application Process
                </h5>
                <>
                  <style>{`
    .green-bullets li::marker {
      color: #20CB01; /* Green bullet color */
    }
  `}</style>

                  <ul className="text-muted green-bullets">
                    {job.applicationProcess.split("\n").map((point, index) => {
                      let cleanPoint = point.replace(/^[•-]\s*/, "").trim();
                      return cleanPoint ? (
                        <li key={index} style={{ color: "#170645" }}>
                          {cleanPoint}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </>
              </section>

              {/* <div className="d-flex justify-content-center">
                <button
                  className="btn w-50"
                  style={{
                    backgroundColor: "#170645",
                    color: "#fff",
                    marginBottom: "50px",
                    marginTop: "20px",
                    padding: "12px",
                  }}
                  onClick={() => setShowModal(true)}
                >
                  Apply Now
                </button>
              </div> */}
            </div>

            {/* Job Summary - Right Side */}
            {/* <div className="col-md-4">
              <div
                className="p-4 rounded shadow"
                style={{ backgroundColor: "#1E5AFA1A",padding: "30px",  
                  minHeight: "450px" }}
              >
                <button
                  className="btn w-40"
                  style={{ backgroundColor: "#170645", color: "#fff", marginBottom: "10px", marginTop: "30px" }}
                >
                  Apply Now
                </button>
                <h5 className="fw-bold mt-3">Job Summary</h5>
                <ul className="list-unstyled text-muted" style={{ display: "grid", gap: "12px" }}>
                
                  <li>
                    <strong>📍 Location:</strong> {job.location}
                  </li>
                  <li>
                    <strong>💼 Job Type:</strong> {job.jobType}
                  </li>
                  <li>
                    <strong>📅 Date Posted:</strong>{" "}
                    {new Date(job.createdAt).toDateString()}
                  </li>
                  <li>
                    <strong>🛠 Experience:</strong> {job.experience} 
                  </li>
                  <li>
                    <strong>💰 Salary:</strong> {job.salary}
                  </li>
                </ul>
              </div>
            </div> */}
            {/* Job Summary - Right Side */}
            <div className="col-md-4">
              <div
                className="apply-right-section p-4 rounded shadow"
                style={{
                  backgroundColor: "#1E5AFA1A",
                  padding: "30px",
                  minHeight: "400px",
                  width: "250px",
                }}
              >
                <button
                  className="btn w-100"
                  style={{
                    backgroundColor: "#F48616",
                    color: "#fff",
                    marginBottom: "20px",
                    marginTop: "10px",
                    padding: "12px",
                  }}
                  onClick={() => setShowModal(true)}
                >
                  Apply Now
                </button>

                {/* Modal for Apply now Job Application Form */}
                <Modal
                  show={showModal}
                  onHide={() => handleClose(false)}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Apply for {job.jobTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group>
                            {/* <Form.Label>First Name*</Form.Label> */}
                            <Form.Label>
                              First Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          {errors.firstName && (
                            <div className="text-danger">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <Form.Group>
                            <Form.Label>
                              Last Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          {errors.lastName && (
                            <div className="text-danger">{errors.lastName}</div>
                          )}
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <Form.Group>
                            <Form.Label>
                              Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          {errors.email && (
                            <div className="text-danger">{errors.email}</div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <Form.Group>
                            <Form.Label>
                              Phone Number{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          {errors.phone && (
                            <div className="text-danger">{errors.phone}</div>
                          )}
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <Form.Group>
                            <Form.Label>
                              Job Title <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="jobTitle"
                              placeholder="Job Title"
                              value={formData.jobTitle}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          {errors.jobTitle && (
                            <div className="text-danger">{errors.jobTitle}</div>
                          )}
                        </div>

                        <div className="col-md-6">
                          <Form.Group>
                            <Form.Label>
                              Experience <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Select
                              name="experience"
                              value={formData.experience}
                              onChange={handleChange}
                            >
                              <option value="">Select Experience</option>
                              <option value="0-1 years">0-1 years</option>
                              <option value="1-3 years">1-3 years</option>
                              <option value="3+ years">3+ years</option>
                            </Form.Select>
                          </Form.Group>
                          {errors.experience && (
                            <div className="text-danger">
                              {errors.experience}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-3">
                        <Form.Group>
                          <Form.Label>Your Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            name="message"
                            rows={3}
                            placeholder="Your message..."
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* {errors.message && (
                          <div className="text-danger">{errors.message}</div>
                        )} */}
                      </div>

                      <div className="mt-3">
                        <Form.Group>
                          <Form.Label>
                            Upload Resume <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </Form.Group>
                        {errors.resume && (
                          <div className="text-danger">{errors.resume}</div>
                        )}
                      </div>

                      <div className="text-center mt-4">
                        <Button
                          type="submit"
                          style={{
                            backgroundColor: "#170645",
                            padding: "12px",
                            width: "100%",
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
                <ToastContainer />

                <h5 className="fw-bold mt-3">Job Summary</h5>

                <ul
                  className="list-unstyled text-muted"
                  style={{ display: "grid", gap: "12px" }}
                >
                  <li>
                    <FaMapMarkerAlt
                      className="me-2"
                      style={{ color: "#F48616" }}
                    />
                    <strong>Location:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.location}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaBriefcase
                      className="me-2"
                      style={{ color: "#F48616" }}
                    />
                    <strong>Job Type:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.jobType}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaCalendarAlt
                      className="me-2"
                      style={{ color: "#F48616" }}
                    />
                    <strong>Date Posted:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {new Date(job.createdAt).toDateString()}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaClock className="me-2" style={{ color: "#F48616" }} />
                    <strong>Experience:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.experience}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaClock className="me-2" style={{ color: "#F48616" }} />
                    <strong>Working Hours:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.workingHoursStart} - {job.workingHoursEnd}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaClock className="me-2" style={{ color: "#F48616" }} />
                    <strong>Working Days:</strong>
                    <div>
                      {" "}
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.workingDays}
                      </span>
                    </div>
                  </li>
                  <li>
                    <FaUsers className="me-2" style={{ color: "#F48616" }} />
                    <strong>Vacancy:</strong>
                    <div>
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "#fff",
                          marginLeft: "20px",
                        }}
                      >
                        {job.vacancy}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerdetails;
