import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditCareers = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/careers/${id}`);
        const job = response.data.job;
        setFormData({
          ...job,
          datePosted: job.datePosted?.substring(0, 10), // format date for input
        });
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    fetchJobDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "jobType") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Submitting edited job:", formData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(
  //       `${API_BASE_URL}/careers/${id}`,
  //       formData
  //     );
  //     if (response.data.success) {
  //       alert("Job updated successfully!");

  //     }
  //   } catch (error) {
  //     console.error("Error updating job:", error);
  //     alert("Failed to update job. Please try again.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${API_BASE_URL}/careers/${id}`,
        formData
      );

      if (response.data.success) {
        toast.success("Job updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          navigate("/AdminCareers"); // ✅ redirect after toast
        }, 3000);
      } else {
        toast.error("Failed to update job.");
      }
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Server error while updating job.");
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
          <div className="header">
            {/* <img
              src={profileImage}
              alt="Profile"
              className="profile-img"
              width="60"
              height="40"
            /> */}
            <h2 style={{ marginTop: "-30px" }}>Edit Job</h2>
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
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <h5>Right Side Form Details</h5>

              <Row>
                <Col md={12}>
                  <Form.Group controlId="location" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="jobType" className="mb-3">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select
                      name="jobType"
                      multiple
                      value={formData.jobType}
                      onChange={handleChange}
                      required
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Contract">Contract</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="datePosted" className="mb-3">
                    <Form.Label>Date Posted</Form.Label>
                    <Form.Control
                      type="date"
                      name="datePosted"
                      value={formData.datePosted}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="experience" className="mb-3">
                    <Form.Label>Experience</Form.Label>
                    <Form.Select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      {/* <option value="">Select Experience</option>
                      <option value="Fresher">Fresher</option> */}
                      <option value="0-1 Years">0-1 Years</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="2-3 Years">2-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="workingHoursStart" className="mb-3">
                    <Form.Label>Working Hours (Start)</Form.Label>
                    <Form.Control
                      type="time"
                      name="workingHoursStart"
                      value={formData.workingHoursStart}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="workingHoursEnd" className="mb-3">
                    <Form.Label>Working Hours (End)</Form.Label>
                    <Form.Control
                      type="time"
                      name="workingHoursEnd"
                      value={formData.workingHoursEnd}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="workingDays" className="mb-3">
                    <Form.Label>Working Days</Form.Label>
                    <Form.Control
                      type="text"
                      name="workingDays"
                      value={formData.workingDays}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group controlId="vacancy" className="mb-3">
                    <Form.Label>Vacancy</Form.Label>
                    <Form.Control
                      type="text"
                      name="vacancy"
                      value={formData.vacancy}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h5>Left Side Form Details</h5>

              <Form.Group controlId="jobDescription" className="mb-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="salary" className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="benefits" className="mb-3">
                <Form.Label>Perks & Benefits</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="applicationProcess" className="mb-3">
                <Form.Label>The Application Process</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="applicationProcess"
                  value={formData.applicationProcess}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="form-buttons text-end">
                <Button type="submit" className="custom-button me-3">
                  Update
                </Button>
                <Button
                  variant="secondary"
                  className="ms-2"
                  onClick={() => navigate("/AdminCareers")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditCareers;
