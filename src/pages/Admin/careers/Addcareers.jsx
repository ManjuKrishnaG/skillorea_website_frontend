import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import careersIcon from "../../../assets/images/adminimages/icon4.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddCareers = () => {
  // const location = useLocation();
  const [jobData, setJobData] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    datePosted: "",
    experience: "",
    workingHoursStart: "",
    workingHoursEnd: "",
    workingDays: "",
    vacancy: "",
    jobDescription: "",
    salary: "",
    benefits: "",
    applicationProcess: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  const experienceOptions = [
    "0-1 Year",
    "1-2 Years",
    "2-3 Years",
    "3-5 Years",
    "5+ Years",
  ];

  const jobTypes = ["Full-Time", "Part-Time", "Internship", "Remote"];

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setJobData({ ...jobData, [name]: value });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = "";

    // Validation for specific fields
    // if (name === "jobTitle") {
    //   // Allow only alphabets and spaces
    //   if (!/^[A-Za-z\s]*$/.test(value)) return;
    //   errorMessage = "Only alphabets and spaces are allowed";
    // }

    if (name === "jobTitle" && !/^[A-Za-z\s]*$/.test(value)) {
      errorMessage = "Only alphabets and spaces are allowed";
    }

    if (name === "workingDays" && !/^\d*$/.test(value)) {
      errorMessage = "Only Numbers are allowed";
    }

    if (name === "vacancy" && !/^\d*$/.test(value)) {
      errorMessage = "Only Numbers are allowed";
    }

    if (!value.trim()) {
      errorMessage = "This field is required";
    }

    // Fields that require bullets
    const bulletFields = ["jobDescription", "benefits", "applicationProcess"];

    // Ensure the first bullet is always there for these fields
    if (bulletFields.includes(name) && !value.startsWith("• ")) {
      setJobData({ ...jobData, [name]: "• " + value });
    } else {
      setJobData({ ...jobData, [name]: value });
    }
    // Remove error message when user starts typing
    // setErrors({ ...errors, [name]: "" });
    setErrors({ ...errors, [name]: errorMessage });
  };

  const handleKeyDown = (e) => {
    const { name } = e.target;
    const bulletFields = ["jobDescription", "benefits", "applicationProcess"];

    if (bulletFields.includes(name) && e.key === "Enter") {
      e.preventDefault(); // Prevent default new line behavior

      setJobData((prevState) => ({
        ...prevState,
        [name]: prevState[name] + "\n• ",
      }));
    }
  };

  // const handleJobTypeChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setJobData({ ...jobData, jobType: [...jobData.jobType, value] });
  //   } else {
  //     setJobData({
  //       ...jobData,
  //       jobType: jobData.jobType.filter((type) => type !== value),
  //     });
  //   }
  // };

  const handleJobTypeChange = (e) => {
    const { value, checked } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      jobType: checked
        ? [...prevState.jobType, value]
        : prevState.jobType.filter((type) => type !== value),
    }));
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!jobData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }
    if (!jobData.location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!jobData.jobType.length) {
      newErrors.jobType = "Please select at least one job type";
    }
    if (!jobData.datePosted) {
      newErrors.datePosted = "Date posted is required";
    }
    if (!jobData.experience) {
      newErrors.experience = "Please select experience";
    }
    if (!jobData.workingHoursStart) {
      newErrors.workingHoursStart = "Start time is required";
    }
    if (!jobData.workingHoursEnd) {
      newErrors.workingHoursEnd = "End time is required";
    }
    if (!jobData.workingDays.trim()) {
      newErrors.workingDays = "Working days are required";
    }
    if (!jobData.vacancy.trim()) {
      newErrors.vacancy = "Vacancy is required";
    }
    if (!jobData.jobDescription.trim()) {
      newErrors.jobDescription = "Job description is required";
    }
    if (!jobData.salary.trim()) {
      newErrors.salary = "Salary is required";
    }
    if (!jobData.benefits.trim()) {
      newErrors.benefits = "Benefits are required";
    }
    if (!jobData.applicationProcess.trim()) {
      newErrors.applicationProcess = "Application process is required";
    }

    Object.keys(jobData).forEach((key) => {
      if (
        !jobData[key] ||
        (Array.isArray(jobData[key]) && jobData[key].length === 0)
      ) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/careers/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();
      if (data.success) {
        // setMessage("Job vacancy added successfully!");
        toast.success("Job vacancy added successfully!");
        setTimeout(() => {
          navigate("/AdminCareers"); // ⬅️ Redirect after short delay
        }, 3500);
        setJobData({
          jobTitle: "",
          location: "",
          jobType: [],
          datePosted: "",
          experience: "",
          workingHoursStart: "",
          workingHoursEnd: "",
          workingDays: "",
          vacancy: "",
          jobDescription: "",
          salary: "",
          benefits: "",
          applicationProcess: "",
        });
        setErrors({});
      } else {
        // toast.error("Failed to add job vacancy.");
        const customMessage =
          data.message === "This job posting is already added."
            ? "This job posting is already added"
            : "Failed to add job vacancy.";
        toast.error(customMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      // setMessage("Error adding job vacancy.");
      toast.error("Error adding job vacancy.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    localStorage.removeItem("adminAuth"); // Ensure complete logout
    toast.success("Logged out successfully!", { autoClose: 2000 }); // Show toast message

    setTimeout(() => {
      navigate("/admin/login"); // Redirect to login page
    }, 2000); // Delay for 2 seconds to let user see message
  };

  return (
    <Container fluid className="admin-container d-flex w-100 vh-100">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <Col md={2} className="sidebar">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "200px", marginBottom: "50px" }}
            />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin/login/dashboard" className="nav-link">
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  className="sidebar-icon"
                />{" "}
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                <img src={blogIcon} alt="Blog" className="sidebar-icon" /> Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminCareers" className="nav-link active">
                <img src={careersIcon} alt="Careers" className="sidebar-icon" />{" "}
                Careers
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/applications" ? "active" : ""
              }`}
            >
              <Link to="/JobApplication" className="nav-link">
                <img
                  src={ApplicationIcon}
                  alt="Applications"
                  className="sidebar-icon"
                />{" "}
                Job Applications
              </Link>
            </li>
            {/* <li
              className={`nav-item ${
                location.pathname === "/applications" ? "active" : ""
              }`}
            >
              <Link to="/JobApplication" className="nav-link">
                <img
                  src={CareersIcon}
                  alt="Applications"
                  className="sidebar-icon"
                />{" "}
                Job Applications
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/testimonials" className="nav-link">
                <img
                  src={testimonialsIcon}
                  alt="Testimonials"
                  className="sidebar-icon"
                />{" "}
                Testimonials
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/user-contact" ? "active" : ""
              }`}
            >
              <Link to="/user-contact" className="nav-link">
                <img
                  src={userContactIcon}
                  alt="User Contact"
                  className="sidebar-icon"
                />{" "}
                User Contact
              </Link>
            </li>
            <li>
              <div
                onClick={() => setOpenEnquiry(!openEnquiry)}
                className="d-flex justify-content-between align-items-center text-dark"
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "20px", marginTop: "10px" }}
                >
                  <img
                    src={enquiryicon}
                    alt="Enquiry"
                    className="me-2"
                    width="20"
                    height="20"
                  />
                  Enquiry
                </div>
                <span>
                  {openEnquiry ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </span>
              </div>

              <Collapse in={openEnquiry}>
                <div id="enquiry-submenu" className="ps-4">
                  <Nav.Link href="/enquiry/home" className="text-dark mb-2">
                    Home Enquiry
                  </Nav.Link>
                  <Nav.Link href="/enquiry/wellness" className="text-dark mb-2">
                    Wellness Enquiry
                  </Nav.Link>
                  <Nav.Link href="/enquiry/oncall" className="text-dark mb-2">
                    Oncall Enquiry
                  </Nav.Link>
                </div>
              </Collapse>
            </li>
            <li>
              <div
                onClick={() => setOpenOurTeam(!openOurTeam)}
                className="d-flex justify-content-between align-items-center text-dark"
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "20px" }}
                >
                  <img
                    src={ourTeamIcon} // Replace this with your actual icon
                    alt="Our Team"
                    className="me-2"
                    width="20"
                    height="20"
                  />
                  Our Team
                </div>
                <span>
                  {openOurTeam ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </span>
              </div>

              <Collapse in={openOurTeam}>
                <div id="ourteam-submenu" className="ps-4">
                  <Nav.Link href="/ourteam/category" className="text-dark mb-2">
                    Category
                  </Nav.Link>
                  <Nav.Link
                    href="/ourteam/adminteammmembers"
                    className="text-dark mb-2"
                  >
                    Team Member
                  </Nav.Link>
                </div>
              </Collapse>
            </li>
          </ul>
        </Col>

        {/* Main Content */}
        <Col md={10} className="main-content flex-grow-1">
          <ToastContainer />
          <Navbar className="justify-content-end px-4">
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="border-0 bg-transparent"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  width="60"
                  height="40"
                  className="rounded-circle"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout} className="text-danger">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar>
          <div className="header" style={{ marginTop: "-20px" }}>
            <h2>Add Job</h2>
          </div>

          <div
            className="form-container mx-auto p-4 shadow-lg rounded"
            style={{ width: "60%" }}
          >
            <Form onSubmit={handleSubmit}>
              {/* Job Title */}
              <Form.Group controlId="jobTitle" className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  name="jobTitle"
                  value={jobData.jobTitle}
                  onChange={handleChange}
                />
                {errors.jobTitle && (
                  <p className="text-danger">{errors.jobTitle}</p>
                )}
              </Form.Group>

              {/* Right Side Form Details */}
              <h5>Right Side Form Details</h5>

              <Row>
                <Col md={12}>
                  <Form.Group controlId="location" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={jobData.location}
                      onChange={handleChange}
                    />
                    {errors.location && (
                      <p className="text-danger">{errors.location}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="jobType" className="mb-3">
                    <Form.Label>Job Type</Form.Label>
                    <div>
                      {jobTypes.map((type, index) => (
                        <Form.Check
                          key={index}
                          inline
                          label={type}
                          value={type}
                          checked={jobData.jobType.includes(type)}
                          onChange={handleJobTypeChange}
                        />
                      ))}
                    </div>
                  </Form.Group>
                  {errors.jobType && (
                    <p className="text-danger">{errors.jobType}</p>
                  )}
                </Col>

                <Col md={12}>
                  <Form.Group controlId="datePosted" className="mb-3">
                    <Form.Label>Date Posted</Form.Label>
                    <Form.Control
                      type="date"
                      name="datePosted"
                      value={jobData.datePosted}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.datePosted && (
                    <p className="text-danger">{errors.datePosted}</p>
                  )}
                </Col>

                <Col md={12}>
                  <Form.Group controlId="experience" className="mb-3">
                    <Form.Label>Experience</Form.Label>
                    <Form.Select
                      name="experience"
                      value={jobData.experience}
                      onChange={handleChange}
                    >
                      <option value="">Select Experience</option>
                      {experienceOptions.map((exp, index) => (
                        <option key={index} value={exp}>
                          {exp}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.experience && (
                      <p className="text-danger">{errors.experience}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="workingHoursStart" className="mb-3">
                    <Form.Label>Working Hours (Start)</Form.Label>
                    <Form.Control
                      type="time"
                      name="workingHoursStart"
                      value={jobData.workingHoursStart}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.workingHoursStart && (
                    <p className="text-danger">{errors.workingHoursStart}</p>
                  )}
                </Col>

                <Col md={6}>
                  <Form.Group controlId="workingHoursEnd" className="mb-3">
                    <Form.Label>Working Hours (End)</Form.Label>
                    <Form.Control
                      type="time"
                      name="workingHoursEnd"
                      value={jobData.workingHoursEnd}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {errors.workingHoursEnd && (
                    <p className="text-danger">{errors.workingHoursEnd}</p>
                  )}
                </Col>

                <Col md={12}>
                  <Form.Group controlId="workingDays" className="mb-3">
                    <Form.Label>Working Days</Form.Label>
                    <Form.Control
                      type="text"
                      name="workingDays"
                      value={jobData.workingDays}
                      onChange={handleChange}
                    />
                    {errors.workingDays && (
                      <p className="text-danger">{errors.workingDays}</p>
                    )}
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="vacancy" className="mb-3">
                    <Form.Label>Vacancy</Form.Label>
                    <Form.Control
                      type="text"
                      name="vacancy"
                      value={jobData.vacancy}
                      onChange={handleChange}
                    />
                    {errors.vacancy && (
                      <p className="text-danger">{errors.vacancy}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Left Side Form Details */}
              <h5>Left Side Form Details</h5>

              <Form.Group controlId="jobDescription" className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="jobDescription"
                  value={jobData.jobDescription}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.jobDescription && (
                  <p className="text-danger">{errors.jobDescription}</p>
                )}
              </Form.Group>

              <Form.Group controlId="salary" className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="text"
                  name="salary"
                  value={jobData.salary}
                  onChange={handleChange}
                />
                {errors.salary && (
                  <p className="text-danger">{errors.salary}</p>
                )}
              </Form.Group>

              <Form.Group controlId="benefits" className="mb-3">
                <Form.Label>Perks & Benefits</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="benefits"
                  value={jobData.benefits}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.benefits && (
                  <p className="text-danger">{errors.benefits}</p>
                )}
              </Form.Group>

              <Form.Group controlId="applicationProcess" className="mb-3">
                <Form.Label>The Application Process</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="applicationProcess"
                  value={jobData.applicationProcess}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {errors.applicationProcess && (
                  <p className="text-danger">{errors.applicationProcess}</p>
                )}
              </Form.Group>

              {message && <p className="text-success">{message}</p>}

              {/* <Button type="submit" className="me-2">
                Submit
              </Button> */}
              {/* <Button
                type="submit"
                className="custom-button"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

              <Button variant="secondary">Reset</Button> */}
              <div className="form-buttons text-end">
                <Button
                  type="submit"
                  className="custom-button me-3"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>

                {/* <Button variant="danger">Cancel</Button> */}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCareers;
