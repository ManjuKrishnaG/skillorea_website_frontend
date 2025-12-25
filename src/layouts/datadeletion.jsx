import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import deletionImage from "../assets/images/datadeletion.png";
import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import "../assets/styles/datadeletion.css";

const DataDeletionPage = () => {
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowToast(true);
      setEmail("");
    }
  };

  return (
    <Container className="data-deletion-wrapper d-flex flex-column gap-5">
      {/* Title Section */}
      <div className="text-center mb-4 mt-5">
        {/* <h2 className="fw-bold text-success">
          DATA DELETION <span className="text-dark">REQUEST</span>
        </h2> */}
        <h2 className="data-title">
          <span>DATA DELETION </span>
          <span className="highlight">REQUEST</span>
        </h2>
        <p className="text-muted">
          Skillorea
          <br />
          by BNR Cogniitec Private Limited
        </p>
      </div>

      {/* Privacy Section */}
      <card className="section">
        <Card.Body>
          <h5 className="text-success">
            <i className="bi bi-shield-check me-2"></i> Your Privacy Matters at
            Skillorea
          </h5>
          <p className="text-muted">
            At SkillOrea, we prioritize your privacy and data security. If you
            wish to delete your account, we make the process transparent and
            simple.
          </p>
        </Card.Body>
      </card>

      {/* Request Deletion Section */}
      <card className="section">
        <Card.Body>
          <h5 className="text-success text-center">
            <i className="bi bi-envelope-check me-2"></i> Request Account
            Deletion
          </h5>
          <p className="text-center">
            Enter your registered email to delete your account:
          </p>
          {/* <Form className="d-flex flex-column flex-md-row gap-3 mt-3">
            <Form.Control type="email" placeholder="Enter your email" />
            <Button variant="dark">Submit</Button>
          </Form> */}
          {/* <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <Form className="d-flex flex-column flex-md-row gap-3 mt-3 justify-content-center">
              <Form.Control type="email" placeholder="Enter your email" />
              <Button variant="dark">Submit</Button>
            </Form>
          </div> */}
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <Form
              onSubmit={handleSubmit}
              className="d-flex flex-column flex-md-row gap-3 mt-3 justify-content-center"
            >
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" style={{ backgroundColor: "#070759" }}>
                Submit
              </Button>
            </Form>
          </div>

          <ToastContainer position="bottom-end" className="p-3">
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              delay={3000}
              autohide
              bg="success"
            >
              {/* <Toast.Header closeButton>
            
          </Toast.Header> */}
              <Toast.Body className="text-white">
                Your account will be deleted in 30 days.
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </Card.Body>
      </card>

      {/* Dual Column Row: Data Deleted & Retention Policy */}
      <Card className="section">
        <Card.Body>
          <Row className="section gx-4">
            {/* Column 1 */}
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="text-success">
                <i className="bi bi-info-circle me-2"></i> What Data Will Be
                Deleted?
              </h5>
              <p>
                When your account is deleted, the following data will be
                permanently erased:
              </p>
              <ul className="mb-0">
                <li>Personal profile information (name, email, age, etc.)</li>
                <li> Learning progress and customized study plans</li>
                <li> Reward points and engagement statistics</li>
                <li> Interaction history with AI assistants and content</li>
                <li> Preferences and settings across the platform</li>
                {/* <li>✓ Preferences and settings across the platform</li> */}
              </ul>
            </Col>

            {/* Column 2 */}
            <Col md={6}>
              <h5 className="text-success">
                <i className="bi bi-clock-history me-2"></i> Data Retention
                Policy
              </h5>
              {/* <h5 className="data-title">
                  
                  <span>Data Retention</span>{" "}
                  <span className="highlight"> Policy</span>
                </h5> */}
              <ul>
                <li>
                  Once you request account deletion, your account will remain
                  active for 7 days.
                </li>
                <li>
                  During these 7 days, you can cancel the deletion request at
                  any time and reactivate your account immediately.
                </li>

                <li>
                  After 7 days, your account will become inactive, and you will
                  no longer be able to log in.
                </li>
                <li>
                  After 30 days from the deletion request, your account and all
                  associated data will be permanently deleted and cannot be
                  recovered.
                </li>
              </ul>
              <div className="alert alert-warning" style={{ fontSize: "14px" }}>
                After this period, your data is permanently removed from our
                systems.
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Need Help Section - like top layout */}
      <card className="section">
        <Card.Body>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <h5 className="text-success">
                <i className="bi bi-question-circle me-2"></i> Need Help?
              </h5>
              <p>If you have any concerns or questions, please contact us:</p>
              <Button style={{ backgroundColor: "#070759" }}>
                support@skillorea.com
              </Button>
            </Col>
            <Col md={6}>
              <img src={deletionImage} alt="Help" className="img-fluid" />
            </Col>
          </Row>
        </Card.Body>
      </card>
    </Container>
  );
};

export default DataDeletionPage;
