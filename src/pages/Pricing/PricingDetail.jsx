import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../../assets/styles/Paymentdetails.css";
import cardIcon from "../../assets/images/creditcard.png";
import upiIcon from "../../assets/images/upi.png";
import qrIcon from "../../assets/images/Qr Code.png";
import { useState } from "react";

const PricingDetails = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    //   <Container fluid className="p-4">
    <Container className="py-5 mt-5">
      <Row className="g-4">
        {/* Billing & Payment Section */}
        <Col lg={6}>
          <Card className="p-4 shadow-sm border-0">
            <h5 className="bg-light p-2 rounded">Billing Address</h5>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="building">
                <Form.Label>Building / Society</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>

              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3" controlId="zip">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <h5 className="payment-header p-2 rounded">Payment Method</h5>
              <div className="payment-options">
                {/* <div className="payment-card"> */}
                <div
                  className={`payment-card-wrapper ${
                    selectedPayment === "card" ? "active" : ""
                  }`}
                >
                  <div
                    className="payment-card d-flex align-items-center gap-2"
                    // onClick={() => setSelectedPayment("card")}
                    onClick={() =>
                      setSelectedPayment((prev) =>
                        prev === "card" ? null : "card"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={cardIcon} alt="card" height="24" width="24" />
                    <span>Debit card / Credit Card</span>
                  </div>
                </div>
                {/* </div> */}
                {selectedPayment === "card" && (
                  <div className="payment-details mt-3">
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="0000 0000 0000 0000"
                      />
                    </Form.Group>

                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="validUpto">
                          <Form.Label>Valid UPTO</Form.Label>
                          <Form.Control type="text" placeholder="MM / YY" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="cvv">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control type="text" placeholder="000" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                )}

                {/* <div className="payment-card"> */}
                <div
                  className={`payment-card-wrapper ${
                    selectedPayment === "upi" ? "active" : ""
                  }`}
                >
                  <div
                    className="payment-card d-flex align-items-center gap-2"
                    onClick={() =>
                      setSelectedPayment((prev) =>
                        prev === "upi" ? null : "upi"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={upiIcon} alt="upi" height="20" width="26" />
                    <span>UPI Id</span>
                  </div>
                </div>
                {/* </div> */}

                {selectedPayment === "upi" && (
                  <div className="mt-4">
                    <Form.Group className="upi-section mb-3" controlId="upiId">
                      <Form.Label>UPI Id</Form.Label>
                      <Form.Control type="text" placeholder="yourname@bank" />
                    </Form.Group>
                  </div>
                )}

                {/* <div className="payment-card"> */}
                <div
                  className={`payment-card-wrapper ${
                    selectedPayment === "qr" ? "active" : ""
                  }`}
                >
                  <div
                    className="payment-card d-flex align-items-center gap-2"
                    onClick={() =>
                      setSelectedPayment((prev) =>
                        prev === "qr" ? null : "qr"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <img src={qrIcon} alt="qr" height="24" width="24" />
                    <span>QR Code</span>
                  </div>
                </div>
                {selectedPayment === "qr" && (
                  <div className="mt-4 text-center">
                    <img
                      src={qrIcon}
                      alt="QR"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <p>Scan this QR to complete your payment</p>
                  </div>
                )}
              </div>
              {/* </div> */}

              <Button className="w-100 mt-2" variant="dark">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Order Summary Section */}
        <Col lg={6}>
          <Card className="p-4 shadow-sm border-0 mb-4">
            <h5 className="bg-light p-2 rounded">Order Summary</h5>
            <div className="d-flex justify-content-between my-3">
              <span>Skillorea Hub</span>
              <strong>₹1,20,000</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total</strong>
              <strong>₹1,20,000</strong>
            </div>
          </Card>

          <p>
            Please carefully review your selected subscription plan and total
            amount before proceeding. By clicking &quot;Subscribe&quot; or
            completing your payment, you agree to Skillorea’s Terms & Conditions
            and Privacy Policy. Your subscription will be activated immediately
            upon successful payment, granting you instant access to all features
            across our programs. Rest assured, all transactions are secure and
            encrypted for your safety. Need help? Contact us at
            support@skillorea.com or via our live chat.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Cancellation Policy: </span>
            Refunds are available within 7 days of purchase, subject to our
            Refund Policy.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingDetails;
