import { useState, useEffect } from "react";
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
import { FaPlus, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../../../assets/styles/Admin/admintestimonial.css";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import { toast, ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_IMAGE_URL = API_BASE_URL.replace("/api", "");

const TestimonialsAdmin = () => {
  const location = useLocation();
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 5;
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:5000/api/testimonials"
        `${API_BASE_URL}/testimonials`
      );
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  // const handleDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this testimonial?")) {
  //     try {
  //       // await axios.delete(`http://localhost:5000/api/testimonials/${id}`);
  //       await axios.delete(`${API_BASE_URL}/testimonials/${id}`);
  //       setTestimonials(
  //         testimonials.filter((testimonial) => testimonial._id !== id)
  //       ); // Update UI
  //       alert("Testimonial deleted successfully!");
  //     } catch (error) {
  //       console.error("Error deleting testimonial:", error);
  //       alert("Failed to delete testimonial.");
  //     }
  //   }
  // };

  const handleDelete = async () => {
    try {
      if (!deleteId) return;

      const response = await axios.delete(
        `${API_BASE_URL}/testimonials/${deleteId}`
      );

      if (response.data.message === "Testimonial deleted successfully!") {
        setTestimonials((prevTestimonials) =>
          prevTestimonials.filter((testimonial) => testimonial._id !== deleteId)
        );

        setShowDeleteModal(false); // Close modal
        toast.success("Testimonial deleted successfully!", {
          position: "top-right",
        });
      } else {
        toast.error("Failed to delete testimonial.", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      toast.error("An error occurred while deleting.", {
        position: "top-right",
      });
    }
  };

  const handleView = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
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
            <h2>Testimonials</h2>
            <Button variant="primary" className="add-testimonial-btn">
              <Link
                to="/addtestimonials"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaPlus /> Add Testimonials
              </Link>
            </Button>
          </div>

          {/* <div className="table-controls">
            <InputGroup className="search-bar">
              <Form.Control type="text" placeholder="Search" />
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
              <Button variant="outline-secondary">
                <FaFilter />
              </Button>
            </InputGroup>
          </div> */}

          <Table
            striped
            bordered
            hover
            responsive
            className="testimonial-table"
          >
            <thead>
              <tr>
                <th>S.no</th>
                <th>Image</th>
                <th>Full Name</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {testimonials.map((testimonial, index) => ( */}
              {currentTestimonials.map((testimonial, index) => (
                <tr key={testimonial._id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{(currentPage - 1) * testimonialsPerPage + index + 1}</td>
                  {/* <td><img src={`/uploads/${testimonial.image}`} alt="Testimonial" className="testimonial-img" /></td> */}
                  <td>
                    <img
                      // src={`http://localhost:5000/uploads/${testimonial.image}`}
                      src={`${BASE_IMAGE_URL}/uploads/${testimonial.image}`}
                      alt="Testimonial"
                      className="testimonial-img"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{testimonial.fullName}</td>
                  {/* <td>{testimonial.review}</td> */}
                  <td>{testimonial.shortReview}</td>

                  <td className="actions">
                    {/* <Button variant="outline-primary" size="sm">
                      <FaEye />
                    </Button> */}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleView(testimonial)}
                    >
                      <FaEye />
                    </Button>

                    {/* <Link to={`/edittestimonials/${testimonial.id}`}>
                      <Button variant="outline-warning" size="sm">
                        <FaEdit />
                      </Button>
                    </Link> */}
                    <Link to={`/edittestimonials/${testimonial._id}`}>
                      <Button variant="outline-warning" size="sm">
                        <FaEdit />
                      </Button>
                    </Link>

                    {/* <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleShowModal(testimonial)}
                    >
                      <FaTrashAlt />
                    </Button> */}

                    {/* <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(testimonial._id)}
                    >
                      <FaTrashAlt />
                    </Button> */}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        setDeleteId(testimonial._id);
                        setShowDeleteModal(true);
                      }}
                    >
                      <FaTrashAlt />
                      {/* FontAwesome Trash Icon */}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pagination-controls d-flex justify-content-end mt-3">
            <Button
              variant="outline-secondary"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </Button>
            <span className="mx-3">
              {" "}
              Page {currentPage} of {totalPages}{" "}
            </span>
            <Button
              variant="outline-secondary"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </Button>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="text-center">
          <h5>Are you sure you want to delete this testimonial?</h5>
          {selectedTestimonial && (
            <p>
              <strong>{selectedTestimonial.name}</strong>
            </p>
          )}
          <Button
            style={{
              backgroundColor: "#170645",
              borderColor: "#170645",
              width: "100px",
            }}
            onClick={handleDelete}
            className="me-2"
          >
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Testimonial Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTestimonial && (
            <>
              <p>
                <strong>Full Name:</strong> {selectedTestimonial.fullName}
              </p>
              <p>
                <strong>Review:</strong> {selectedTestimonial.fullReview}
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
            onClick={() => setShowModal(false)}
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
        <Modal.Body>
          Are you sure you want to delete this testimonial?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TestimonialsAdmin;
