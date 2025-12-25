import { useEffect, useState } from "react";
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

import "../../../../assets/styles/Admin/addteammember.css";
import dashboardIcon from "../../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../../assets/images/adminimages/icon4.png";
// import logo from "../../../assets/images/adminimages/logodark.png";
import logo from "../../../../assets/images/logotm.png";
import profileImage from "../../../../assets/images/adminimages/profileicon.png";
import CareersIcon from "../../../../assets/images/adminimages/icon6.png";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import ApplicationIcon from "../../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../../assets/images/adminimages/ourteam.png";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddTeamMember = () => {
  const fileInputRef = useRef(null);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const [categories, setCategories] = useState([]);
  // const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    category: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/categories");
        const res = await axios.get(`${API_BASE_URL}/categories`
);
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     image: e.target.files[0],
  //   }));
  // };
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(file);
  //     setImagePreview(URL.createObjectURL(file)); // generate preview URL
  //   }
  // };

  const handleReset = () => {
    setFormData({
      name: "",
      designation: "",
      category: "",
      description: "",
      image: null,
    });
    setImagePreview(null);
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, image: file }));
      setImagePreview(URL.createObjectURL(file)); // preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.designation.trim())
      newErrors.designation = "Designation is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.image) newErrors.image = "Image is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        // "http://localhost:5000/api/team-members",
        `${API_BASE_URL}/team-members`,

        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Team member added:", response.data);
      // alert("Team member added successfully!");
      toast.success("Team member added successfully!");
      // setErrors({});
      // Optionally redirect or reset
    } catch (error) {
      toast.error("Error adding testimonial.");
      console.error("Error adding team member:", error);
      // alert("Failed to add team member.");
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

          <div className="add-blog-wrapper">
            <ToastContainer />
            <h4> Add Team Member</h4>
            <br />
            <Form
              className="add-member-form"
              style={{ maxWidth: "600px" }}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="imageUpload" className="mb-3">
                <Form.Label>+ Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {errors.image && (
                  <div className="text-danger mt-1">{errors.image}</div>
                )}
                {imagePreview && (
                  <div
                    style={{
                      marginTop: "10px",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        maxWidth: "100px",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData((prev) => ({ ...prev, image: null }));
                        if (fileInputRef.current)
                          fileInputRef.current.value = null; // clear file input
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        background: "transparent",
                        border: "none",
                        color: "red",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                    >
                      ✖
                    </button>
                  </div>
                )}
              </Form.Group>

              <Form.Group controlId="title" className="mb-3">
                <Form.Label>
                  Full Name{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  // required
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="text-danger mt-1">{errors.name}</div>
                )}
              </Form.Group>

              <Form.Group controlId="author" className="mb-3">
                <Form.Label>
                  Designation{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Designation"
                  name="designation"
                  // required
                  value={formData.designation}
                  onChange={handleChange}
                />
                {errors.designation && (
                  <div className="text-danger mt-1">{errors.designation}</div>
                )}
              </Form.Group>

              <Form.Group controlId="category" className="mb-3">
                <Form.Label>Category</Form.Label>
                {/* <Form.Select name="category" required>
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </Form.Select> */}
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  // required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </Form.Select>
                {errors.category && (
                  <div className="text-danger mt-1">{errors.category}</div>
                )}
              </Form.Group>

              <Form.Group controlId="fullContent" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type Here"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <div className="text-danger mt-1">{errors.description}</div>
                )}
              </Form.Group>

              <div className="form-buttons text-end">
                <Button type="submit" className="custom-button">
                  Submit
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

export default AddTeamMember;
