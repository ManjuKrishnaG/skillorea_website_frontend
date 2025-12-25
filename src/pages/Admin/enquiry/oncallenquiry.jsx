import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Nav, Button, Navbar } from "react-bootstrap";
import { FaEye, FaTrashAlt } from "react-icons/fa";

// import { FaSearch, FaFilter, FaEye, FaTrashAlt } from "react-icons/fa";

import axios from "axios";

import logo from "../../../assets/images/logotm.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";
import { Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OncallEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);

  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState(1);
  // const enquiriesPerPage = 5; // or 10 based on your preference

  const [totalPages, setTotalPages] = useState(1); // ✅ now it can be updated
  const limit = 10; // or whatever number of enquiries you want per page

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/oncall-enquiries/${deleteId}`
      );
      if (response.data.success) {
        setEnquiries(enquiries.filter((e) => e._id !== deleteId));
        setShowDeleteModal(false);
      } else {
        console.error("Failed to delete enquiry");
      }
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  const handleShowDeleteModal = (enquiry) => {
    setDeleteId(enquiry._id);
    setSelectedEnquiry(enquiry);
    setShowDeleteModal(true);
  };

  const handleShowDetailsModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setShowDetailsModal(true);
  };

  // useEffect(() => {
  //   const fetchEnquiries = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${API_BASE_URL}/enquiries?page=${currentPage}&limit=${enquiriesPerPage}`
  //       );
  //       console.log("Fetched Enquiries Response:", res.data);
  //       console.log("Enquiries Array:", res.data.enquiries);

  //       if (res.data.success) {
  //         setEnquiries(res.data.enquiries); // assuming your API gives a paginated slice here
  //         setTotalPages(res.data.totalPages); // optional if your backend sends totalPages
  //       }
  //     } catch (error) {
  //       console.error("Error fetching enquiries:", error);
  //     }
  //   };

  //   fetchEnquiries();
  // }, [currentPage]);

  // useEffect(() => {
  //   const fetchEnquiries = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${API_BASE_URL}/enquiries/?page=${currentPage}&limit=${limit}`
  //       );
  //       const data = res.data;
  //       console.log("✅ API Response:", data);
  //       if (Array.isArray(data.enquiries) && data.enquiries.length > 0) {
  //         setEnquiries(data.enquiries);
  //       } else {
  //         console.warn("⚠️ No enquiries found in response.");
  //         setEnquiries([]);
  //       }
  //     } catch (error) {
  //       console.error("❌ Error fetching enquiries:", error);
  //     }
  //   };

  //   fetchEnquiries();
  // }, [currentPage]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        // const res = await axios.get(
        //   `${API_BASE_URL}/oncall-enquiries/?page=${currentPage}&limit=${limit}`
        // );
        const res = await axios.get(
          // `http://localhost:5000/api/oncall-enquiries/?page=${currentPage}&limit=${limit}`
          `${API_BASE_URL}/oncall-enquiries/?page=${currentPage}&limit=${limit}`
        );

        const data = res.data;
        console.log("✅ API Response:", data);

        // if (Array.isArray(data.enquiries)) {
        //   setEnquiries(data.enquiries);
        //   const count = data.totalCount || data.count || 0;
        //   // setTotalPages(Math.ceil(count / limit));
        //   setTotalPages(Math.max(Math.ceil(count / limit), 1));
        // } else {
        //   console.warn("⚠️ No enquiries found in response.");
        //   setEnquiries([]);
        //   setTotalPages(1);
        // }
        if (Array.isArray(data.data)) {
          setEnquiries(data.data);
          const count = data.total || 0;
          setTotalPages(Math.max(Math.ceil(count / limit), 1));
        } else {
          console.warn("⚠️ No enquiries found in response.");
          setEnquiries([]);
          setTotalPages(1);
        }
      } catch (error) {
        console.error("❌ Error fetching enquiries:", error);
      }
    };

    fetchEnquiries();
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
              <Link to="/usercontact" className="nav-link">
                <img
                  src={userContactIcon}
                  alt="User Contact"
                  className="sidebar-icon"
                />{" "}
                User Contact
              </Link>
              <div
                onClick={() => setOpenEnquiry(!openEnquiry)}
                className="d-flex justify-content-between align-items-center text-dark"
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "20px", marginTop: "20px" }}
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
            <h2 style={{marginTop: "-40px"}}> Oncall Enquiry Section</h2>
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
                <th> Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry, index) => (
                <tr key={enquiry._id}>
                  {/* <td>{(currentPage - 1) * limit + index + 1}</td> */}
                  <td>{Math.max((currentPage - 1) * limit + index + 1, 1)}</td>

                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phone}</td>
                  <td>{enquiry.message}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm me-2"
                      onClick={() => handleShowDetailsModal(enquiry)}
                    >
                      <FaEye />
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleShowDeleteModal(enquiry)}
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
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
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
              <Modal.Title>Enquiry Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedEnquiry && (
                <div>
                  <p>
                    <strong>Full Name:</strong> {selectedEnquiry.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedEnquiry.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedEnquiry.phone}
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedEnquiry.message}
                  </p>
                  {/* Add more fields if needed */}
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

          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this enquiry from{" "}
              {selectedEnquiry && <strong>{selectedEnquiry.name}</strong>}?
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

export default OncallEnquiry;
