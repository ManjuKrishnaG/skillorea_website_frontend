import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Collapse,
  Navbar,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import profileImage from "../../../../assets/images/adminimages/profileicon.png";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import "../../../../assets/styles/Admin/addteammember.css";
import logo from "../../../../assets/images/logotm.png";
import dashboardIcon from "../../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../../assets/images/adminimages/icon4.png";
import CareersIcon from "../../../../assets/images/adminimages/icon6.png";
import ApplicationIcon from "../../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../../assets/images/adminimages/enqicon.png";
import ourTeamIcon from "../../../../assets/images/adminimages/ourteam.png";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditTeamMember = () => {
  const { id } = useParams();

  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const [errors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/team-members/${id}`);
        setFullName(data.name);
        setDesignation(data.designation);
        setCategory(data.category);
        setDescription(data.description);
        setPreview(data.imageUrl);
      } catch (error) {
        console.error("Error fetching team member details:", error);
        toast.error("Failed to load team member details");
      }
    };

    fetchTeamMember();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("designation", designation);
    formData.append("category", category);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.put(`${API_BASE_URL}/team-members/${id}`, formData);
      toast.success("Team member updated successfully!");
      // navigate("/ourteam/adminteammmembers");
      setTimeout(() => {
        navigate("/ourteam/adminteammmembers");
      }, 1500);
    } catch (error) {
      console.error("Error fetching team member details:", error);
      toast.error("Failed to load team member details");
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
              className="img-fluid mb-5"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link href="/admin/login/dashboard" className="nav-link">
                <img src={dashboardIcon} className="sidebar-icon" /> Dashboard
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/blog" className="nav-link">
                <img src={blogIcon} className="sidebar-icon" /> Blog
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/AdminCareers" className="nav-link">
                <img src={CareersIcon} className="sidebar-icon" /> Careers
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/JobApplication" className="nav-link">
                <img src={ApplicationIcon} className="sidebar-icon" /> Job
                Applications
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/testimonials" className="nav-link">
                <img src={testimonialsIcon} className="sidebar-icon" />{" "}
                Testimonials
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/user-contact" className="nav-link">
                <img src={userContactIcon} className="sidebar-icon" /> User
                Contact
              </Nav.Link>
            </li>
            <li>
              <div
                onClick={() => setOpenEnquiry(!openEnquiry)}
                className="d-flex justify-content-between align-items-center text-dark"
                style={{ margin: "10px 0", cursor: "pointer" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "20px" }}
                >
                  <img
                    src={enquiryicon}
                    width="20"
                    height="20"
                    className="me-2"
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
                <div className="ps-4">
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
                style={{ margin: "10px 0", cursor: "pointer" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "20px" }}
                >
                  <img
                    src={ourTeamIcon}
                    width="20"
                    height="20"
                    className="me-2"
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
                <div className="ps-4">
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
          <h4> Edit Team Member</h4>
          <br />
          <div className="add-blog-wrapper">
            <Form
              className="add-blog-form"
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px" }}
            >
              <Form.Group controlId="imageUpload" className="mb-3">
                <Form.Label>+ Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
                {errors.image && (
                  <div className="text-danger mt-1">{errors.image}</div>
                )}
                {preview && (
                  <div
                    style={{
                      marginTop: "10px",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src={preview}
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
                        setPreview(null);
                        setImage(null);
                        if (fileInputRef.current)
                          fileInputRef.current.value = null;
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
              {/* {preview && (
                <div className="image-preview-container mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    className="uploaded-image"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              )} */}
              <Form.Group controlId="fullName" className="mb-3">
                <Form.Label>
                  Full Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  // required
                />
                {errors.fullname && (
                  <div className="text-danger mt-1">{errors.fullname}</div>
                )}
              </Form.Group>

              <Form.Group controlId="designation" className="mb-3">
                <Form.Label>
                  Designation <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  // required
                />
                {errors.designation && (
                  <div className="text-danger mt-1">{errors.designation}</div>
                )}
              </Form.Group>

              <Form.Group controlId="category" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {errors.category && (
                  <div className="text-danger mt-1">{errors.category}</div>
                )}
              </Form.Group>

              <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && (
                  <div className="text-danger mt-1">{errors.description}</div>
                )}
              </Form.Group>

              <div className="form-buttons text-end">
                <Button type="submit" className="custom-button">
                  Update
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  className="ms-2"
                  onClick={() => window.location.reload()}
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

export default EditTeamMember;
