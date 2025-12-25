import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../../assets/styles/Admin/addblog.css";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditBlog = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
    fullContent: "",
    date: "",
    image: null,
  });

  // useEffect(() => {
  //   const fetchBlogData = async () => {
  //     try {
  //       // const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
  //       const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
  //       if (!response.ok) throw new Error("Failed to fetch blog data");
  //       const data = await response.json();
  //       console.log("Fetched Blog Data:", data);
  //       setBlog({
  //         title: data.title,
  //         author: data.author,
  //         content: data.content,
  //         fullContent: data.fullContent,
  //         date: data.date.split("T")[0],
  //         image: data.image,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching blog:", error);
  //     }
  //   };
  //   fetchBlogData();
  // }, [id]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog data");
        const data = await response.json();
        console.log("Fetched Blog Data:", data);

        const blogData = data.blog; // ✅ FIXED

        setBlog({
          title: blogData.title,
          author: blogData.author,
          content: blogData.content,
          fullContent: blogData.fullContent,
          date: blogData.date ? blogData.date.split("T")[0] : "",
          image: blogData.image,
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlogData();
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setBlog({ ...blog, image: e.target.files[0] });
  };

  const handleImageRemove = () => {
    setBlog({ ...blog, image: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("author", blog.author);
    formData.append("content", blog.content);
    formData.append("fullContent", blog.fullContent);
    formData.append("date", blog.date);

    if (blog.image instanceof File) {
      formData.append("image", blog.image);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: "PUT",
        body: formData,
      });

      // const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      //   method: "PUT",
      //   body: formData,
      // });
      if (!response.ok) throw new Error("Failed to update blog");
      // alert("Blog updated successfully!");
      // navigate("/blog");
      toast.success("Blog updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate("/blog");
      }, 3000);
    } catch (error) {
      console.error("Error updating blog:", error);
      // alert("Error updating blog");
      toast.error("Error updating blog.", {
        position: "top-right",
        autoClose: 3000,
      });
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
                    <Nav.Link
                      href="/ourteam/category"
                      className="text-dark mb-2"
                    >
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
            </li>
          </ul>
        </Col>

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
          <div
            className="header d-flex justify-content-between align-items-center"
            style={{ marginTop: "-20px" }}
          >
            <h2>Edit Blog</h2>
          </div>
          <div className="add-blog-wrapper">
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
                  disabled={blog.image !== null}
                />

                {blog.image && typeof blog.image === "string" ? (
                  <p className="mt-2">
                    <span>Current Image: {blog.image.split("/").pop()}</span>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ms-2"
                      onClick={handleImageRemove}
                    >
                      ✖
                    </button>
                  </p>
                ) : blog.image instanceof File ? (
                  <p className="mt-2">
                    <span>New Image: {blog.image.name}</span>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ms-2"
                      onClick={handleImageRemove}
                    >
                      ✖
                    </button>
                  </p>
                ) : null}
              </Form.Group>

              <Form.Group controlId="title" className="mb-3">
                <Form.Label>
                  Title <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={blog.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="author" className="mb-3">
                <Form.Label>
                  Author Author <span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={blog.author}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="content" className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="content"
                  value={blog.content}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="fullContent" className="mb-3">
                <Form.Label>Full Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="fullContent"
                  value={blog.fullContent}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="date" className="mb-3">
                <Form.Label>
                  Date Author <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={blog.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="form-buttons text-end">
                <Button type="submit" className="custom-button">
                  Update
                </Button>
                <Button
                  variant="secondary"
                  className="ms-2"
                  onClick={() => navigate("/blog")}
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

export default EditBlog;
