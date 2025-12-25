import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Nav,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Import cross icon
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditTestimonials = () => {
  const { id } = useParams(); // Get testimonial ID from URL
  // const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState({
    fullName: "",
    review: "",
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/testimonials/${id}`);
        setTestimonial(response.data);
      } catch (error) {
        console.error("Error fetching testimonial:", error);
      }
    };

    fetchTestimonial();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
  };

  const handleImageUpload = (e) => {
    setTestimonial({ ...testimonial, image: e.target.files[0] });
  };

  const handleImageDelete = () => {
    setTestimonial({ ...testimonial, image: null }); // Remove image from state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", testimonial.fullName);
    formData.append("review", testimonial.review);

    if (testimonial.image instanceof File) {
      formData.append("image", testimonial.image);
    } else {
      formData.append("image", ""); // Ensure backend knows the image is removed
    }

    try {
      await axios.put(`${API_BASE_URL}/testimonials/${id}`, formData);
      // setSuccessMessage("Testimonial updated successfully!");
      toast.success("Testimonial updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      toast.error("Error updating testimonial!");
      console.error("Error updating testimonial:", error);
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
    <Container
      fluid
      className="admin-edit-testimonials-container d-flex w-100 vh-100"
    >
      <Row className="flex-grow-1">
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
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                <img src={blogIcon} alt="Blog" className="sidebar-icon" /> Blog
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/careers" ? "active" : ""
              }`}
            >
              <Link to="/AdminCareers" className="nav-link">
                <img src={CareersIcon} alt="Careers" className="sidebar-icon" />{" "}
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
            <li className="nav-item">
              <Link to="/testimonials" className="nav-link active">
                <img
                  src={testimonialsIcon}
                  alt="Testimonials"
                  className="sidebar-icon"
                />{" "}
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/usercontact" className="nav-link">
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
                  style={{ marginLeft: "20px" }}
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

        <Col
          md={10}
          className="main-content d-flex flex-column align-items-start"
          style={{ overflowY: "auto", height: "100vh" }}
        >
          <ToastContainer />

          <div className="edit-header w-100 d-flex justify-content-between align-items-center p-3">
            <h2 className="mb-0">Edit Testimonial</h2>
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
          </div>

          <div
            className="edit-form-container p-4 shadow-sm rounded bg-white ms-3"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            {successMessage && (
              <Alert
                variant="success"
                onClose={() => setSuccessMessage("")}
                dismissible
              >
                {successMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="imageUpload" className="mb-3">
                <Form.Label>+ Upload New Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />

                {testimonial.image && (
                  <div className="mt-2 d-flex align-items-center">
                    <span className="me-2">
                      {testimonial.image instanceof File
                        ? testimonial.image.name
                        : testimonial.image}
                    </span>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={handleImageDelete}
                    >
                      <FaTimes />
                    </Button>
                  </div>
                )}
              </Form.Group>

              <Form.Group controlId="fullName" className="mb-3">
                <Form.Label>
                  Full Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="fullName"
                  value={testimonial.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="review" className="mb-3">
                <Form.Label>
                  Review <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type Here"
                  name="review"
                  value={testimonial.review}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="edit-form-buttons text-end">
                {/* <Button type="submit" className="edit-custom-button">
                  Update
                </Button> */}
                <Button
                  type="submit"
                  className="edit-custom-button"
                  style={{
                    backgroundColor: "#170645",
                    borderColor: "#170645",
                    color: "white",
                  }}
                >
                  Update
                </Button>

                {/* <Button type="reset" variant="secondary" className="ms-2">
                  Reset
                </Button> */}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditTestimonials;
