import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
// import {
//   Container,
//   Row,
//   Col,
//   Table,
//   Button,
//   Form,
//   InputGroup,
//   Modal,
// } from "react-bootstrap";
import { FaPlus, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
// import {
//   FaPlus,
//   FaSearch,
//   FaFilter,
//   FaEye,
//   FaEdit,
//   FaTrashAlt,
// } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../assets/styles/Admin/adminblog.css";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
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
console.log(API_BASE_URL);

const BASE_IMAGE_URL = API_BASE_URL.replace("/api", "");

const BlogAdmin = () => {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const blogsPerPage = 5;
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/blogs/all?page=${currentPage}&limit=${blogsPerPage}`
        const response = await axios.get(
          `${API_BASE_URL}/blogs/all?page=${currentPage}&limit=${blogsPerPage}`
        );
        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  const handleShowDeleteModal = (blog) => {
    setDeleteId(blog._id);
    setSelectedBlog(blog); // Store the entire blog object
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      // await axios.delete(`http://localhost:5000/api/blogs/${deleteId}`);
      await axios.delete(`${API_BASE_URL}/blogs/${deleteId}`);
      setBlogs(blogs.filter((blog) => blog._id !== deleteId));
      setShowDeleteModal(false);
      toast.success("Blog deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete the blog.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleShowViewModal = async (id) => {
    try {
      // const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
      const response = await axios.get(`${API_BASE_URL}/blogs/${id}`);

      setSelectedBlog(response.data.blog);
      setShowViewModal(true);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  // Handle Pagination
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
            <li
              className={`nav-item ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <Link to="/admin/login/dashboard" className="nav-link">
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  className="sidebar-icon"
                />{" "}
                Dashboard
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
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
            <li
              className={`nav-item ${
                location.pathname === "/testimonials" ? "active" : ""
              }`}
            >
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
                  style={{
                    marginLeft: "20px",
                    color: "black",
                    marginTop: "10px",
                  }}
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
          <div className="header" style={{ marginTop: "10px" }}>
            <h2>Blogs</h2>
            <Button variant="primary" className="add-blog-btn">
              <Link
                to="/admin/addblog"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaPlus /> Add Blog
              </Link>
            </Button>
          </div>

          <Table striped bordered hover responsive className="blog-table">
            <thead>
              <tr>
                {/* <th>
                  <Form.Check />
                </th> */}
                <th>S.no</th>
                <th>Image</th>
                <th>Title</th>
                <th>Date</th>
                <th>Author</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id}>
                  {/* <td>
                    <Form.Check />
                  </td> */}
                  <td>{(currentPage - 1) * blogsPerPage + index + 1}</td>

                  {/* Fix image display */}
                  <td>
                    <img
                      // src={`http://localhost:5000/${blog.image.replace(
                      //   /\\/g,
                      //   "/"
                      // )}`}

                      // src={`${API_BASE_URL}/${blog.image.replace(/\\/g, "/")}`}
                      src={`${BASE_IMAGE_URL}/${blog.image.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt="Blog"
                      className="blog-img"
                      style={{
                        width: "100px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </td>

                  {/* Show only first 4 words for title */}
                  <td>{blog.title.split(" ").slice(0, 4).join(" ")}...</td>

                  <td>{blog.date}</td>
                  <td>{blog.author}</td>

                  {/* Show only first 4 words for content */}
                  <td>{blog.content.split(" ").slice(0, 4).join(" ")}...</td>

                  {/* Fix actions alignment */}
                  <td className="actions">
                    <div className="action-buttons">
                      {/* <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => alert(blog.content)} 
                      >
                        <FaEye />
                      </Button> */}
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleShowViewModal(blog._id)}
                      >
                        <FaEye />
                      </Button>
                      <Link to={`/editblog/${blog._id}`}>
                        <Button variant="outline-warning" size="sm">
                          <FaEdit />
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleShowDeleteModal(blog)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Controls */}
          <div className="pagination-controls d-flex justify-content-end mt-3">
            <Button
              variant="outline-secondary"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {/* <span className="page-number">
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span> */}
            <span className="mx-3">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline-secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>

          {/* View Blog Modal */}
          <Modal
            show={showViewModal}
            onHide={() => setShowViewModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>View Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedBlog && (
                <>
                  <h4>{selectedBlog.title}</h4>
                  <p style={{ fontSize: "14px" }}>
                    <strong>Author:</strong> {selectedBlog.author}
                  </p>
                  {/* <p style={{ fontSize: "14px" }}>
                    <strong>Date:</strong> {selectedBlog.date}
                  </p> */}
                  <p style={{ fontSize: "14px" }}>
                    <strong>Date:</strong>{" "}
                    {new Date(selectedBlog.date).toISOString().split("T")[0]}
                  </p>

                  <img
                    src={`${BASE_IMAGE_URL}/${selectedBlog.image.replace(
                      /\\/g,
                      "/"
                    )}`}
                    // src={`http://localhost:5000/${selectedBlog.image.replace(
                    //   /\\/g,
                    //   "/"
                    // )}`}
                    alt="Blog"
                    style={{
                      width: "40%",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                  <p style={{ fontSize: "14px", marginTop: "20px" }}>
                    <strong>Content:</strong> {selectedBlog.fullContent}
                  </p>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                style={{
                  backgroundColor: "#170645",
                  borderColor: "#170645",
                  width: "100px",
                }}
                onClick={() => setShowViewModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>Are you sure you want to delete this blog?</Modal.Body> */}
            <Modal.Body>
              {selectedBlog ? (
                <>
                  Are you sure you want to delete this blog?
                  <strong> {`"${selectedBlog.title}"`}</strong>
                </>
              ) : (
                "Are you sure you want to delete this blog?"
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </Button>
              {/* <Button
                style={{
                  backgroundColor: "#170645",
                  borderColor: "#170645",
                  width: "100px",
                }}
                onClick={handleDelete}
              >
                Yes
              </Button> */}
              <Button variant="danger" onClick={handleDelete}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogAdmin;
