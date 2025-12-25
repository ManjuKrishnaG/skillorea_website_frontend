import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  // Form,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaEdit, FaPlus, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../../../assets/styles/Admin/adminblog.css";
import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminCareers = () => {
  const location = useLocation();
  const [careers, setCareers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const careersPerPage = 10;
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // const [showDetailsModal, setShowDetailsModal] = useState(false);
  // const indexOfLastCareer = currentPage * careersPerPage;
  // const indexOfFirstCareer = indexOfLastCareer - careersPerPage;
  // const currentCareers = careers.slice(indexOfFirstCareer, indexOfLastCareer);
  const [totalPages, setTotalPages] = useState(1);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        // const response = await fetch(
        //   `http://localhost:5000/api/careers/all?page=${currentPage}&limit=${careersPerPage}`
        // );
        const response = await fetch(
          `${API_BASE_URL}/careers/all?page=${currentPage}&limit=${careersPerPage}`
        );
        const data = await response.json();
        if (data.success) {
          setCareers(data.jobs);
          setTotalPages(data.totalPages); // Make sure to store total pages
        } else {
          console.error("Failed to fetch careers");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCareers();
  }, [currentPage]);

  // const nextPage = () =>
  //   currentPage < totalPages && setCurrentPage(currentPage + 1);
  // const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleShowDeleteModal = (career) => {
    setDeleteId(career._id);
    setSelectedCareer(career);
    setShowDeleteModal(true);
  };

  // const handleDelete = async () => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:5000/api/careers/${deleteId}`
  //     );
  //     if (response.data.success) {
  //       setCareers(careers.filter((career) => career._id !== deleteId));
  //       setShowDeleteModal(false);
  //     } else {
  //       console.error("Failed to delete career");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleDelete = async () => {
    try {
      if (!deleteId) return;

      const response = await axios.delete(
        `${API_BASE_URL}/careers/${deleteId}`
      );

      if (response.data.success) {
        // Update the careers state to remove the deleted career
        setCareers((prevCareers) =>
          prevCareers.filter((career) => career._id !== deleteId)
        );

        // Close the delete confirmation modal
        setShowDeleteModal(false);
      } else {
        console.error("Failed to delete career");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleShowDetailsModal = (career) => {
    setSelectedCareer(career);
    setShowDetailsModal(true);
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
            <img src={logo} alt="Logo" className="img-fluid" />
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
                location.pathname === "/AdminCareers" ? "active" : ""
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
          <div className="header">
            {/* <img
              src={profileImage}
              alt="Profile"
              className="profile-img"
              width="60"
              height="40"
            /> */}
            <h2 style={{ marginTop: "-30px" }}>Career Opportunities</h2>
            <Button variant="primary" className="add-testimonial-btn">
              <Link
                to="/AddCareers"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaPlus /> Add Careers
              </Link>
            </Button>
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((career, index) => (
                <tr key={career._id}>
                  <td>{(currentPage - 1) * careersPerPage + index + 1}</td>
                  <td>{career.jobTitle}</td>
                  <td>{career.location}</td>
                  <td>{career.jobType.join(", ")}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleShowDetailsModal(career)}
                    >
                      <FaEye />
                    </Button>

                    <Button
                      variant="outline-warning"
                      size="sm"
                      className="me-2"
                      style={{ marginLeft: "10px" }}
                      as={Link}
                      to={`/EditCareers/${career._id}`}
                    >
                      <FaEdit />
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => handleShowDeleteModal(career)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="pagination-controls d-flex justify-content-end mt-3">
            <Button
              variant="outline-secondary"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </Button>
            <span className="mx-3">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline-secondary"
              onClick={() =>
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              disabled={currentPage >= totalPages}
            >
              Next &raquo;
            </Button>
          </div>

          <Modal
            show={showDetailsModal}
            onHide={() => setShowDetailsModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Career Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedCareer && (
                <div>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Job Title:</strong>{" "}
                    {selectedCareer.jobTitle}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Location:</strong>{" "}
                    {selectedCareer.location}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Job Type:</strong>{" "}
                    {selectedCareer.jobType.join(", ")}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Date Posted:</strong>{" "}
                    {selectedCareer.datePosted}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Experience:</strong>{" "}
                    {selectedCareer.experience}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Working Hours:</strong>{" "}
                    {selectedCareer.workingHoursStart} -{" "}
                    {selectedCareer.workingHoursEnd}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Working Days:</strong>{" "}
                    {selectedCareer.workingDays}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Vacancy:</strong>{" "}
                    {selectedCareer.vacancy}
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>Salary:</strong>{" "}
                    {selectedCareer.salary}
                  </p>

                  {/* Display Job Description as Bullet Points */}
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>
                      Job Description:
                    </strong>
                  </p>
                  <ul style={{ fontSize: "16px" }}>
                    {selectedCareer.jobDescription
                      .split("\n")
                      .map((point, index) => {
                        let cleanPoint = point.replace(/^[•-]\s*/, "").trim(); // Remove existing bullets
                        return cleanPoint ? (
                          <li key={index}>{cleanPoint}</li>
                        ) : null;
                      })}
                  </ul>

                  {/* Display Perks & Benefits as Bullet Points */}
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>
                      Perks & Benefits:
                    </strong>
                  </p>
                  <ul style={{ fontSize: "16px" }}>
                    {selectedCareer.benefits.split("\n").map((point, index) => {
                      let cleanPoint = point.replace(/^[•-]\s*/, "").trim(); // Remove existing bullets
                      return cleanPoint ? (
                        <li key={index}>{cleanPoint}</li>
                      ) : null;
                    })}
                  </ul>

                  {/* Display Application Process as Bullet Points */}
                  <p style={{ fontSize: "16px" }}>
                    <strong style={{ color: "#170645" }}>
                      The Application Process:
                    </strong>
                  </p>
                  <ul style={{ fontSize: "16px" }}>
                    {selectedCareer.applicationProcess
                      .split("\n")
                      .map((point, index) => {
                        let cleanPoint = point.replace(/^[•-]\s*/, "").trim(); // Remove existing bullets
                        return cleanPoint ? (
                          <li key={index}>{cleanPoint}</li>
                        ) : null;
                      })}
                  </ul>
                </div>
              )}
            </Modal.Body>
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
              Are you sure you want to delete this job posting{" "}
              {selectedCareer && <strong>{selectedCareer.jobTitle}</strong>}?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </Button>
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

export default AdminCareers;
