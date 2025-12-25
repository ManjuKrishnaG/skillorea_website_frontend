import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Nav,
  Navbar,
  Modal,
} from "react-bootstrap";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
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

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AdminCategory = () => {
  const location = useLocation();
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // const handleDelete = async (id) => {
  //   if (!window.confirm("Are you sure you want to delete this category?"))
  //     return;

  //   try {
  //     await axios.delete(
  //       `${import.meta.env.VITE_API_BASE_URL}/categories/${id}`
  //     );
  //     setCategories(categories.filter((cat) => cat._id !== id));
  //   } catch (err) {
  //     console.error(
  //       "Failed to delete category",
  //       err.response?.data || err.message
  //     );
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/categories/${id}`
      );
      setCategories(categories.filter((cat) => cat._id !== id));
      toast.success("Category deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete category.");
      console.error("Delete error:", err.response?.data || err.message);
    } finally {
      setShowConfirm(false);
      setCategoryToDelete(null);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const res = await axios.get("/categories");
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/categories`
        );

        setCategories(res.data);
      } catch (err) {
        console.error("Failed to fetch categories", err);
        setCategories([]);
      }
    };

    fetchCategories();
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
                  {/* <Nav.Link href="/ourteam/category" className="text-dark mb-2">
                    Category
                  </Nav.Link> */}
                  <Link
                    to="/ourteam/category"
                    className="nav-link text-dark mb-2"
                  >
                    Category
                  </Link>

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

          <Modal
            show={showConfirm}
            onHide={() => setShowConfirm(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this category?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                No
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(categoryToDelete)}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>

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
            <h2 style={{ marginTop: "-50px" }}>Category</h2>
            <Button variant="primary" className="add-blog-btn">
              <Link
                to="/ourteam/addcategory"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaPlus /> Add Category
              </Link>
            </Button>
          </div>

          <Table striped bordered hover responsive className="blog-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td></td>

                
                <td></td>

                
                <td className="actions">
                  <div className="action-buttons">
                    <Link to="/ourteam/editcategory">
                      <Button variant="outline-warning" size="sm">
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button variant="outline-danger" size="sm">
                      <FaTrashAlt />
                    </Button>
                  </div>
                </td>
              </tr> */}

              {categories.map((cat, index) => (
                <tr key={cat._id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td className="actions">
                    <div className="action-buttons">
                      {/* <Link to={`/ourteam/editcategory/${cat._id}`}>
                        <Button variant="outline-warning" size="sm">
                          <FaEdit />
                        </Button>
                      </Link> */}

                      <Button
                        variant="outline-danger"
                        size="sm"
                        // onClick={() => handleDelete(cat._id)}
                        onClick={() => {
                          setCategoryToDelete(cat._id);
                          setShowConfirm(true);
                        }}
                      >
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCategory;
