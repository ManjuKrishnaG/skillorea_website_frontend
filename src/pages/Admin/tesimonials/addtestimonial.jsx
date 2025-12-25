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
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useRef } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddTestimonials = () => {
  const [testimonial, setTestimonial] = useState({
    fullName: "",
    review: "",
    image: null,
  });

  const [errors, setErrors] = useState({ fullName: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTestimonial({ ...testimonial, [name]: value });
  // };

  const handleReset = () => {
    setTestimonial({
      fullName: "",
      review: "",
      image: null,
    });
    setErrors({});
    setMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";

    // Validation for fullName (no numbers or special characters allowed)
    // if (name === "fullName" && !/^[A-Za-z\s]*$/.test(value)) {
    //   errorMsg = "No numbers or special characters allowed";
    // }

    if (name === "fullName") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        errorMsg = "No numbers or special characters allowed.";
      } else if (value.length > 50) {
        errorMsg = "Full Name cannot exceed 50 characters.";
      }
    }

    // if (name === "review") {
    //   if (!/^[A-Za-z\s,.!?']*$/.test(value)) {
    //     errorMsg = "Review should not contain numbers or special characters.";
    //   } else if (value.length > 200) {
    //     errorMsg = "Review cannot exceed 200 characters.";
    //   }
    // }

    if (name === "review") {
      if (!/^[A-Za-z\s,.!?']*$/.test(value)) {
        errorMsg = "Review should not contain numbers or special characters.";
      } else if (value.length > 200) {
        errorMsg = "Review cannot exceed 200 characters.";
      }
    }

    setErrors({ ...errors, [name]: errorMsg });
    if (!errorMsg) {
      setTestimonial({ ...testimonial, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    setTestimonial({ ...testimonial, image: e.target.files[0] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   if (errors.fullName) {
  //     setMessage("Please fix the errors before submitting.");
  //     setLoading(false);
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("fullName", testimonial.fullName);
  //   formData.append("review", testimonial.review);
  //   formData.append("image", testimonial.image);

  //   try {
  //     const response = await fetch(`${API_BASE_URL}/testimonials/add`, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       setMessage("Testimonial added successfully!");
  //       setTestimonial({ fullName: "", review: "", image: null });
  //     } else {
  //       setMessage(result.message || "Failed to add testimonial.");
  //     }
  //   } catch (error) {
  //     setMessage("Error adding testimonial.");
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validation for required fields
    let newErrors = {};

    if (!testimonial.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!testimonial.review.trim()) {
      newErrors.review = "Review is required.";
    }
    if (!testimonial.image) {
      newErrors.image = "Image is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // setMessage("Please fill all required fields.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("fullName", testimonial.fullName);
    formData.append("review", testimonial.review);
    formData.append("image", testimonial.image);

    try {
      const response = await fetch(`${API_BASE_URL}/testimonials/add`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        // setMessage("Testimonial added successfully!");
        toast.success("Testimonial added successfully!");
        setTestimonial({ fullName: "", review: "", image: null });
        setErrors({}); // Clear errors after successful submission
      } else {
        // setMessage(result.message || "Failed to add testimonial.");
        toast.error(result.message || "Failed to add testimonial.");
      }
    } catch (error) {
      // setMessage("Error adding testimonial.");
      toast.error("Error adding testimonial.");
      console.error("Error:", error);
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
    <Container
      fluid
      className="admin-testimonials-container d-flex w-100 vh-100"
    >
      <ToastContainer />
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

        {/* Main Content */}
        <Col
          md={10}
          className="main-content flex-grow-1 d-flex flex-column align-items-start"
        >
          <ToastContainer />

          <div className="header w-100 d-flex justify-content-between align-items-center p-3">
            <h2 className="mb-0">Add Testimonials</h2>
            <Navbar className="justify-content-end px-4 mt-6">
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
            {/* <img
              src={profileImage}
              alt="Profile"
              className="profile-img"
              width="60"
              height="40"
            /> */}
          </div>

          <div
            className="form-container p-4 shadow-sm rounded bg-white ms-3"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="imageUpload" className="mb-3">
                <Form.Label>+ Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                />
              </Form.Group>

              <Form.Group controlId="fullName" className="mb-3">
                {/* <Form.Label>Full Name *</Form.Label> */}
                <Form.Label>
                  Full Name{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="fullName"
                  value={testimonial.fullName}
                  onChange={handleChange}
                  maxLength={50}
                  // required
                />
                {errors.fullName && (
                  <p className="text-danger">{errors.fullName}</p>
                )}
              </Form.Group>

              <Form.Group controlId="review" className="mb-3">
                {/* <Form.Label>Review *</Form.Label> */}
                <Form.Label>
                  Review{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type Here"
                  name="review"
                  value={testimonial.review}
                  onChange={handleChange}
                  maxLength={200}
                  // required
                />
                {errors.review && (
                  <p className="text-danger">{errors.review}</p>
                )}
              </Form.Group>

              {message && <p className="text-success">{message}</p>}

              <div className="form-buttons text-end">
                <Button
                  type="submit"
                  className="custom-button"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
                {/* <Button type="reset" variant="secondary" className="ms-2">
                  Reset
                </Button> */}
                <Button
                  type="button"
                  variant="secondary"
                  className="ms-2"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTestimonials;
