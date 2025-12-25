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
import axios from "axios";
import "../../../assets/styles/Admin/addblog.css";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
// import logo from "../../../assets/images/adminimages/logodark.png";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    fullContent: "",
    author: "",
    date: "",
    image: null,
  });

  const [errors, setErrors] = useState({ title: "", author: "", content: "" });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBlog({ ...blog, [name]: value });
  // };

  const handleReset = () => {
    setBlog({
      title: "",
      content: "",
      fullContent: "",
      author: "",
      date: "",
      image: null,
    });
    setErrors({ title: "", author: "", content: "" });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";

    if (name === "title" || name === "author") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        errorMsg = "No numbers or special characters allowed";
      }
    }

    if (name === "content") {
      if (value.length > 250) {
        errorMsg = "Content cannot exceed 250 characters";
      }
    }

    setErrors({ ...errors, [name]: errorMsg });
    setBlog({ ...blog, [name]: errorMsg ? blog[name] : value });
  };

  // const handleImageUpload = (e) => {
  //   setBlog({ ...blog, image: e.target.files[0] });
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlog({ ...blog, image: file });
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleRemoveImage = () => {
    setBlog({ ...blog, image: null });
    setImagePreview(null);
    // Reset the file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   const formData = new FormData();
  //   formData.append("title", blog.title);
  //   formData.append("author", blog.author);
  //   formData.append("content", blog.content);
  //   formData.append("fullContent", blog.fullContent);
  //   formData.append("date", blog.date);
  //   formData.append("image", blog.image);

  //   try {

  //     await axios.post(`${API_BASE_URL}/blogs/addblog`, formData);
  //     toast.success("Blog added successfully!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     setBlog({
  //       title: "",
  //       content: "",
  //       fullContent: "",
  //       author: "",
  //       date: "",
  //       image: null,
  //     });

  //     setImagePreview(null);

  //     if (fileInputRef.current) {
  //       fileInputRef.current.value = "";
  //     }
  //   } catch (error) {

  //     toast.error("Error adding blog!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //     });
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("author", blog.author);
    formData.append("content", blog.content);
    formData.append("fullContent", blog.fullContent);
    formData.append("date", blog.date);
    formData.append("image", blog.image);

    try {
      await axios.post(`${API_BASE_URL}/blogs/addblog`, formData);

      toast.success("Blog added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setBlog({
        title: "",
        content: "",
        fullContent: "",
        author: "",
        date: "",
        image: null,
      });

      setImagePreview(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // ✅ Redirect after delay to let toast display
      setTimeout(() => {
        navigate("/blog"); // 🔁 Change this to your desired route
      }, 3000);
    } catch (error) {
      toast.error("Error adding blog!", {
        position: "top-right",
        autoClose: 3000,
      });
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
    <Container fluid className="admin-blog-container d-flex w-100 vh-100">
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
              <Link to="/blog" className="nav-link active">
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
              <Link to="/testimonials" className="nav-link">
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
          {/* <div className="header d-flex justify-content-between align-items-center">
            <h2>Add Blog</h2>
            <img
              src={profileImage}
              alt="Profile"
              className="profile-img"
              width="60"
              height="40"
            />
          </div> */}
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

          <div className="add-blog-wrapper">
            <ToastContainer />
            <Form
              className="add-blog-form"
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px" }}
            >
              <Form.Group controlId="imageUpload" className="mb-3">
                <Form.Label>+ Upload Blog Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                />
              </Form.Group>

              {imagePreview && (
                <div className="image-preview-container mt-3">
                  <img
                    src={imagePreview}
                    alt="Uploaded Preview"
                    className="uploaded-image"
                    style={{
                      maxWidth: "150px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="remove-image-btn"
                  >
                    ✖
                  </button>
                </div>
              )}

              {/* <Form.Group controlId="title" className="mb-3">
                <Form.Label>Title *</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" name="title" value={blog.title} onChange={handleChange} required />
              </Form.Group> */}

              <Form.Group controlId="title" className="mb-3">
                <Form.Label>
                  Title{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  name="title"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
                {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
              </Form.Group>

              {/* <Form.Group controlId="author" className="mb-3">
                <Form.Label>Author *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Author"
                  name="author"
                  value={blog.author}
                  onChange={handleChange}
                  required
                />
              </Form.Group> */}

              <Form.Group controlId="author" className="mb-3">
                <Form.Label>
                  Author{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Author"
                  name="author"
                  value={blog.author}
                  onChange={handleChange}
                  required
                />
                {errors.author && (
                  <p style={{ color: "red" }}>{errors.author}</p>
                )}
              </Form.Group>

              <Form.Group controlId="content" className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type Here"
                  name="content"
                  value={blog.content}
                  onChange={handleChange}
                />
                {errors.content && (
                  <p style={{ color: "red" }}>{errors.content}</p>
                )}
              </Form.Group>

              <Form.Group controlId="fullContent" className="mb-3">
                <Form.Label>Full Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type Here"
                  name="fullContent"
                  value={blog.fullContent}
                  onChange={handleChange}
                />
                {blog.content.length > 250 && (
                  <p className="text-danger">
                    Content should be at most 250 characters long
                  </p>
                )}
              </Form.Group>

              {/* <Form.Group controlId="date" className="mb-3">
                <Form.Label>Date *</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={blog.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group> */}

              <Form.Group controlId="date" className="mb-3">
                <Form.Label>
                  Date{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={blog.date}
                  onChange={handleChange}
                  required
                />
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

export default AddBlog;
