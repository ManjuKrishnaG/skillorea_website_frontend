import { useState } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../../../assets/styles/Admin/addteammember.css";
import dashboardIcon from "../../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../../assets/images/adminimages/icon4.png";
// import logo from "../../../assets/images/adminimages/logodark.png";
import logo from "../../../../assets/images/logotm.png";
// import profileImage from "../../../assets/images/adminimages/profileicon.png";
import CareersIcon from "../../../../assets/images/adminimages/icon6.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ApplicationIcon from "../../../../assets/images/adminimages/icon7.png";
import enquiryicon from "../../../../assets/images/adminimages/enqicon.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../../assets/images/adminimages/ourteam.png";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const EditCategory = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);

  return (
    <Container fluid className="admin-blog-container d-flex w-100 vh-100">
      <Row className="flex-grow-1">
        {/* Sidebar */}
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

        {/* Main Content */}
        <Col md={10} className="main-content flex-grow-1">
          <h3 style={{ marginTop: "100px", marginBottom: "30px" }}>
            Add Category
          </h3>

          <div className="add-blog-wrapper">
            <ToastContainer />
            <Form className="add-blog-form" style={{ maxWidth: "600px" }}>
              <Form.Group controlId="title" className="mb-3">
                <Form.Label>
                  Category{" "}
                  <span className="text-danger" style={{ fontSize: "1.2rem" }}>
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  name="title"
                  required
                />
              </Form.Group>

              <div className="form-buttons text-end">
                <Button type="submit" className="custom-button">
                  Submit
                </Button>
                <Button type="reset" variant="secondary" className="ms-2">
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

export default EditCategory;
