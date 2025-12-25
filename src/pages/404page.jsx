import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorImage from "../assets/images/404.png"; // Replace with your image path
import "../assets/styles/404.css";
const NotFoundPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "black",
        backgroundImage: `url(${errorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // Set relative positioning for container
      }}
    >
      <Container className="text-center text-white">
        {/* Fixed button at the bottom of the screen */}
        <Link to="/" className="btn custom-btn">
          Go Home
        </Link>
      </Container>
    </div>
  );
};

export default NotFoundPage;
