import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Nav,
  Modal,
  Navbar,
  // Form,
} from "react-bootstrap";
// import { FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
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
import { FaEye, FaTrashAlt } from "react-icons/fa";
import downloadIcon from "../../../assets/images/cv.png"; // adjust path as needed
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const JobApplication = () => {
  const location = useLocation();
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAppToDelete, setSelectedAppToDelete] = useState(null);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const navigate = useNavigate();

  const handleOpenDeleteModal = (application) => {
    setSelectedAppToDelete(application);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedAppToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDeleteApplication = async () => {
    if (!selectedAppToDelete) return;

    try {
      const response = await fetch(
        `${API_BASE_URL}/careers/job-applications/${selectedAppToDelete._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setApplications(
          applications.filter((app) => app._id !== selectedAppToDelete._id)
        );
        setShowDeleteModal(false);
      } else {
        alert("Failed to delete application.");
      }
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const handleShowDetailsModal = (app) => {
    setSelectedApplication(app);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setSelectedApplication(null);
    setShowDetailsModal(false);
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        console.log("Fetching job applications..."); // Debug log
        const response = await fetch(
          `${API_BASE_URL}/careers/job-applications?page=${currentPage}&limit=10`
        );
        const data = await response.json();
        console.log("API Response:", data); // Log API response

        if (data.success) {
          setApplications(data.applications); // ✅ Update state correctly
          setTotalPages(data.totalPages);
        } else {
          console.error("Failed to fetch applications");
        }
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchApplications();
  }, [currentPage]);

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
            <h2 style={{ marginTop: "-30px" }}>Job Applications</h2>
          </div>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th> Name</th>
                {/* <th>Last Name</th> */}
                <th>Email</th>
                {/* <th>Phone</th> */}
                <th>Job Title</th>
                <th>Experience</th>
                {/* <th>Message</th> */}
                <th>Resume</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((app, index) => (
                  <tr key={app._id}>
                    <td>{(currentPage - 1) * 10 + index + 1}</td>{" "}
                    {/* Serial No. Calculation */}
                    <td>{app.firstName}</td>
                    {/* <td>{app.lastName}</td> */}
                    <td>{app.email}</td>
                    {/* <td>{app.phone}</td> */}
                    <td>{app.jobTitle}</td>
                    <td>{app.experience} years</td>
                    {/* <td>{app.message}</td> */}
                    <td>
                      {/* <a
                        href={`${API_BASE_URL}${app.resume}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a> */}
                      {/* <a
                        href={`${API_BASE_URL.replace("/api", "")}${
                          app.resume
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a> */}
                      <a
                        href={`${API_BASE_URL.replace("/api", "")}${
                          app.resume
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download // <-- triggers download
                      >
                        <img
                          src={downloadIcon}
                          alt="Download Resume"
                          style={{
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                            // marginLeft: "40px",
                          }}
                        />
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleShowDetailsModal(app)}
                      >
                        <FaEye />
                      </Button>
                      {/* <Button
                        variant="outline-danger"
                        size="sm"
                        className="ms-2"
                        // onClick={() => handleShowDeleteModal(career)}
                        // onClick={() => handleDeleteApplication(app._id)}
                      >
                        <FaTrashAlt />
                      </Button> */}

                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="ms-2"
                        onClick={() => handleOpenDeleteModal(app)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No applications found.</td>
                </tr>
              )}
            </tbody>
          </Table>

          <Modal
            show={showDetailsModal}
            onHide={handleCloseDetailsModal}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Application Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedApplication && (
                <div>
                  <p>
                    <strong>Name:</strong> {selectedApplication.firstName}{" "}
                    {selectedApplication.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedApplication.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedApplication.phone}
                  </p>
                  <p>
                    <strong>Job Title:</strong> {selectedApplication.jobTitle}
                  </p>
                  <p>
                    <strong>Experience:</strong>{" "}
                    {selectedApplication.experience} years
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedApplication.message}
                  </p>
                  <p>
                    <strong>Resume:</strong>
                    <a
                      href={`${API_BASE_URL.replace("/api", "")}${
                        selectedApplication.resume
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </p>
                </div>
              )}
            </Modal.Body>
          </Modal>

          <Modal
            show={showDeleteModal}
            onHide={handleCloseDeleteModal}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete the application for{" "}
              <strong>
                {selectedAppToDelete?.firstName} {selectedAppToDelete?.lastName}
              </strong>
              ?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDeleteModal}>
                No
              </Button>
              <Button variant="danger" onClick={handleDeleteApplication}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>

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
        </Col>
      </Row>
    </Container>
  );
};

export default JobApplication;
