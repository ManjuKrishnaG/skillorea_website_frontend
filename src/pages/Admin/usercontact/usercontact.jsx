import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,

  // InputGroup,
  Modal,
  Nav,
  Navbar,
} from "react-bootstrap";
// import { FaSearch, FaFilter, FaEye, FaTrashAlt } from "react-icons/fa";
import { FaEye, FaTrashAlt } from "react-icons/fa";
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
import { toast, ToastContainer } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserContact = () => {
  const location = useLocation();
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10; // Show 10 contacts per page
  const [selectedContact, setSelectedContact] = useState(null);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // const response = await fetch("http://localhost:5000/api/contacts");
        const response = await fetch(`${API_BASE_URL}/contacts`);
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging log
        if (data.success) {
          setContacts(data.contacts);
        } else {
          console.error("Failed to fetch contacts");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchContacts();
  }, []);

  // Calculate the current contacts to display
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  // Handle pagination navigation
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

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

  const handleShowDeleteModal = (contact) => {
    setDeleteId(contact._id);
    setSelectedContact(contact);
    setShowDeleteModal(true);
  };

  // Handle delete contact
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        // `http://localhost:5000/api/contact/${deleteId}`
        `${API_BASE_URL}/contact/${deleteId}`
      );
      if (response.data.success) {
        setContacts(contacts.filter((contact) => contact._id !== deleteId));
        setShowDeleteModal(false);
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleShowDetailsModal = (contact) => {
    setSelectedContact(contact);
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
                location.pathname === "/usercontact" ? "active" : ""
              }`}
            >
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
            <h2>User Contact Information</h2>
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

          <Table striped bordered hover responsive className="blog-table">
            <thead>
              <tr>
                {/* <th>
                  <Form.Check />
                </th> */}
                <th>S.no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact, index) => (
                <tr key={contact._id}>
                  {/* <td>
                    <Form.Check />
                  </td> */}
                  <td>{indexOfFirstContact + index + 1}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.shortMessage}</td>
                  <td className="actions">
                    {/* <Button variant="outline-primary" size="sm">
                      <FaEye />
                    </Button> */}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleShowDetailsModal(contact)}
                    >
                      <FaEye />
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleShowDeleteModal(contact)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Controls */}
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

          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this contact{" "}
              {selectedContact && (
                <strong>
                  {selectedContact.firstName} {selectedContact.lastName}
                </strong>
              )}
              ?
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </Button>
              <Button
                // style={{
                //   backgroundColor: "#170645",
                //   borderColor: "#170645",
                //   width: "100px",
                // }}
                variant="danger"
                onClick={handleDelete}
              >
                Yes
              </Button>
            </Modal.Footer>
            {/* <Modal.Footer>
              <Button variant="secondary" onClick={setShowDeleteModal(false)}>
                No
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Yes
              </Button>
            </Modal.Footer> */}
          </Modal>

          {/* User Contact Details Modal */}
          <Modal
            show={showDetailsModal}
            onHide={() => setShowDetailsModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>User Contact Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {selectedContact && (
                <div className="contact-details">
                  <p>
                    <strong>First Name:</strong> {selectedContact.firstName}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {selectedContact.lastName}
                  </p>
                  <p>
                    <strong>Email-ID:</strong> {selectedContact.email}
                  </p>
                  <p>
                    <strong>Mobile Number:</strong> {selectedContact.phone}
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedContact.fullMessage}
                  </p>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button
                style={{
                  backgroundColor: "#170645",
                  borderColor: "#170645",
                  width: "100px",
                }}
                onClick={() => setShowDetailsModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default UserContact;
