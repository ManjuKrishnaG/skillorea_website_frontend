import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Table, Navbar, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logotm.png";
import dashboardIcon from "../../../assets/images/adminimages/icon5.png";
import blogIcon from "../../../assets/images/adminimages/icon2.png";
import testimonialsIcon from "../../../assets/images/adminimages/icon3.png";
import userContactIcon from "../../../assets/images/adminimages/icon4.png";
import enquiryicon from "../../../assets/images/adminimages/enqicon.png";
import profileImage from "../../../assets/images/adminimages/profileicon.png";
import blogsIcon from "../../../assets/images/adminimages/dashboardicon1.png";
import reviewsIcon from "../../../assets/images/adminimages/dashboardicon2.png";
import usersIcon from "../../../assets/images/adminimages/dashboardicon3.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CareersIcon from "../../../assets/images/adminimages/icon6.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApplicationIcon from "../../../assets/images/adminimages/icon7.png";
import { Collapse } from "react-bootstrap";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import ourTeamIcon from "../../../assets/images/adminimages/ourteam.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const [blogsCount, setBlogsCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const [openOurTeam, setOpenOurTeam] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // const response = await axios.get("http://localhost:5000/api/contacts");
      const response = await axios.get(`${API_BASE_URL}/contacts`);
      setContacts(response.data.contacts.slice(0, 5));
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/usercontacts") // Replace with your actual API endpoint
      .get(`${API_BASE_URL}/usercontacts`)
      .then((response) => {
        setContacts(response.data.slice(0, 5)); // Show only first 5 contacts
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const blogsResponse = await axios.get(`${API_BASE_URL}/blogs/count`);
        console.log("Blogs API Response:", blogsResponse.data); // ✅ Log response
        setBlogsCount(blogsResponse.data.count); // ✅ Ensure correct state update

        const reviewsResponse = await axios.get(
          `${API_BASE_URL}/testimonials/count`
        );
        console.log("Reviews API Response:", reviewsResponse.data);
        setReviewsCount(reviewsResponse.data.count);

        const usersResponse = await axios.get(`${API_BASE_URL}/count`);
        console.log("Users API Response:", usersResponse.data);
        setUsersCount(usersResponse.data.count);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
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
    <div className="d-flex w-100 vh-100">
      {/* Sidebar */}
      <div className="bg-light p-3 vh-100" style={{ width: "250px" }}>
        <div className="text-center my-4">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "200px", marginBottom: "20px" }}
          />
        </div>
        <Nav className="flex-column">
          <Nav.Link
            href="#"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="/blog"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={blogIcon}
              alt="Blog"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            Blog
          </Nav.Link>
          <Nav.Link
            href="/AdminCareers"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={CareersIcon}
              alt="Careers"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            Careers
          </Nav.Link>
          <Nav.Link
            href="/JobApplication"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={ApplicationIcon}
              alt="Applications"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            Job Applications
          </Nav.Link>
          <Nav.Link
            href="/testimonials"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={testimonialsIcon}
              alt="Testimonials"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            Testimonials
          </Nav.Link>
          <Nav.Link
            href="/usercontact"
            className="text-dark d-flex align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <img
              src={userContactIcon}
              alt="User Contact"
              className="me-2"
              width="20"
              height="20"
            />{" "}
            User Contact
          </Nav.Link>
          <div
            onClick={() => setOpenEnquiry(!openEnquiry)}
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
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column w-100">
        <ToastContainer />

        {/* <Navbar className="justify-content-end px-4">
          <img src={profileImage} alt="Profile" width="60" height="40" className="rounded-circle" />
        </Navbar> */}

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

        <Container fluid className="p-4 flex-grow-1">
          {/* Stats Cards */}
          <Row className="mb-4">
            <Col md={4} sm={12}>
              <Card
                className="text-center p-3"
                style={{ backgroundColor: "#EFF4FF" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ justifyContent: "center" }}
                >
                  <img
                    src={blogsIcon}
                    alt="Blogs"
                    className="me-2"
                    width="60"
                    height="70"
                  />
                  <div>
                    <h5 className="dashtext" style={{ marginTop: "10px" }}>
                      No. of Blogs
                    </h5>
                    {/* <h2>08</h2> */}
                    <h3>{blogsCount}</h3>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card
                className="text-center p-3"
                style={{ backgroundColor: "#EFF4FF" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ justifyContent: "center" }}
                >
                  <img
                    src={reviewsIcon}
                    alt="Reviews"
                    className="me-2"
                    width="60"
                    height="70"
                  />
                  <div>
                    <h5 className="dashtext" style={{ marginTop: "10px" }}>
                      No. of Reviews
                    </h5>
                    {/* <h2>08</h2> */}
                    <h3>{reviewsCount}</h3>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card
                className="text-center p-3"
                style={{ backgroundColor: "#EFF4FF" }}
              >
                <div
                  className="d-flex align-items-center"
                  style={{ justifyContent: "center" }}
                >
                  <img
                    src={usersIcon}
                    alt="Users"
                    className="me-2"
                    width="60"
                    height="70"
                  />
                  <div>
                    <h5 className="dashtext" style={{ marginTop: "10px" }}>
                      No. of Users
                    </h5>
                    {/* <h2>40</h2> */}
                    <h3>{usersCount}</h3>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* User Contact Table */}
          <h5 className="mt-5 mb-4 d-flex justify-content-between align-items-center">
            <span>User Contact Details</span>
            <Link to="/usercontact" className="text-primary">
              View All
            </Link>
          </h5>
          <div className="p-3 rounded" style={{ backgroundColor: "#EFF4FF" }}>
            <Table
              responsive
              className="border-0"
              style={{ borderCollapse: "collapse", backgroundColor: "#EFF4FF" }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#EFF4FF",
                    borderBottom: "2px solid #ccc",
                  }}
                >
                  <th>S.no</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email-ID</th>
                  <th>Mobile Number</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact, index) => (
                    <tr key={contact._id}>
                      <td>{index + 1}</td>
                      <td>{contact.firstName}</td>
                      <td>{contact.lastName}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone}</td>
                      <td>
                        {contact.message.split(" ").slice(0, 4).join(" ")}...
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      No contacts available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
