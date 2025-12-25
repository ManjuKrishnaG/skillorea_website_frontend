import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Nav,
  Modal,
  Navbar,
} from "react-bootstrap";
import { FaPlus, FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../../../../assets/styles/Admin/adminteammembers.css";
import logo from "../../../../assets/images/logotm.png";
import profileImage from "../../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../../assets/images/adminimages/icon4.png";
import CareersIcon from "../../../../assets/images/adminimages/icon6.png";
import ApplicationIcon from "../../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../../assets/images/adminimages/enqicon.png";
import ourTeamIcon from "../../../../assets/images/adminimages/ourteam.png";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminTeamMembers = () => {
  const location = useLocation();
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [teamMembers]);

  const handleView = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const confirmDelete = (member) => {
    setMemberToDelete(member);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!memberToDelete) return;
    try {
      await axios.delete(
        // `http://localhost:5000/api/team-members/${memberToDelete._id}`
        `${API_BASE_URL}/team-members/${memberToDelete._id}`
      );
      setTeamMembers((prev) =>
        prev.filter((member) => member._id !== memberToDelete._id)
      );
      setShowDeleteModal(false);
      setMemberToDelete(null);
    } catch (error) {
      console.error("Error deleting member:", error);
    }
  };

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/api/team-members"
          `${API_BASE_URL}/team-members`
        );
        console.log("Fetched members:", response.data);
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    fetchTeamMembers();
  }, []);

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
          <div className="header">
            <h2 style={{ marginTop: "-30px" }}>Team Members</h2>
            <Button variant="primary" className="add-blog-btn">
              <Link
                to="/ourteam/addmember"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaPlus /> Add Team Members
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

          <Table striped bordered hover responsive className="blog-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Image</th>
                <th>Full Name</th>
                <th>Designation</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {teamMembers.map((member, index) => ( */}
              {currentMembers.map((member, index) => (
                <tr key={member._id}>
                  {/* <td>{index + 1}</td> */}
                  <td>{indexOfFirstItem + index + 1}</td>

                  <td>
                    <img
                      // src={`http://localhost:5000/uploads/${member.image}`}
                      // src={`${API_BASE_URL}/uploads/${member.image}`}
                      src={member.imageUrl}
                      alt={member.fullName}
                      width="50"
                      height="50"
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{member.name}</td>
                  <td>{member.designation}</td>
                  <td>{member.category?.name || "N/A"}</td>

                  <td>
                    {member.description.split(" ").slice(0, 4).join(" ")}...
                  </td>
                  <td className="actions">
                    <div className="action-buttons">
                      {/* <Button variant="outline-primary" size="sm">
                        <FaEye />
                      </Button> */}
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleView(member)}
                      >
                        <FaEye />
                      </Button>

                      <Link to={`/ourteam/editmember/${member._id}`}>
                        <Button variant="outline-warning" size="sm">
                          <FaEdit />
                        </Button>
                      </Link>
                      {/* <Button variant="outline-danger" size="sm">
                        <FaTrashAlt />
                      </Button> */}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => confirmDelete(member)}
                      >
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="7" className="text-center">
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="me-2"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                      Previous
                    </Button>
                    <span className="align-self-center mx-2">
                      Page {currentPage} of{" "}
                      {Math.ceil(teamMembers.length / itemsPerPage)}
                    </span>
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled={
                        currentPage ===
                        Math.ceil(teamMembers.length / itemsPerPage)
                      }
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                      Next
                    </Button>
                  </div>
                </td>
              </tr>
            </tfoot>

            {/* <tbody>
              <tr>
                <td></td>

                
                <td></td>

                
                <td></td>

                <td></td>
                <td></td>

                
                <td></td>

                
                <td className="actions">
                  <div className="action-buttons">
                    <Button variant="outline-primary" size="sm">
                      <FaEye />
                    </Button>
                    <Link to="/ourteam/editmember">
                      <Button variant="outline-warning" size="sm">
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button variant="outline-danger" size="sm">
                      <FaTrashAlt />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody> */}
          </Table>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Team Member Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedMember && (
                <div className="p-3">
                  <Row>
                    <Col md={4} className="text-center">
                      <img
                        // src={`http://localhost:5000/uploads/${selectedMember.image}`}
                        // src={`${API_BASE_URL}/uploads/${selectedMember.image}`}
                        src={selectedMember.imageUrl}
                        alt={selectedMember.name}
                        style={{
                          width: "100%",
                          maxWidth: "150px",
                          borderRadius: "10px",
                        }}
                      />
                    </Col>
                    <Col md={8}>
                      <h5>Name: {selectedMember.name}</h5>
                      <p>
                        <strong>Designation:</strong>{" "}
                        {selectedMember.designation}
                      </p>
                      <p>
                        <strong>Category:</strong>{" "}
                        {selectedMember.category?.name || "N/A"}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {selectedMember.description}
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
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
              Are you sure you want to delete{" "}
              {memberToDelete && <strong>{memberToDelete.name}</strong>}?
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
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminTeamMembers;
