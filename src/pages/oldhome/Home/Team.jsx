import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/Team.css";

// Import the outline image
import outlineImg from "../../assets/images/testimonialoutline.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_IMAGE_URL = API_BASE_URL.replace("/api", "");

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/testimonials`);
        setTeamMembers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="team-section text-center">
      {/* Heading */}
      <h2 className="text-center team-heading">
        <span className="teamlight-text">TEAM </span>{" "}
        <span className="dark-text">SKILLOREA</span>
      </h2>

      {/* Show Loading while fetching data */}
      {loading ? (
        <p>Loading team members...</p>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            {!isMobile ? (
              <div className="col-md-10">
                {" "}
                {/* Adjust column width */}
                <div className="row justify-content-center mt-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member._id}
                      className="col-md-4 col-sm-6 col-12 mb-4"
                    >
                      <div className="card border-0 text-center p-3">
                        <div className="team-img-container position-relative">
                          <img
                            src={outlineImg}
                            alt="Outline"
                            className="team-outline-img"
                          />
                          <img
                            src={`${BASE_IMAGE_URL}/uploads/${member.image}`}
                            className="team-profile-img"
                            alt={member.fullName}
                            style={{
                              width: "200px",
                              height: "290px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="fw-bold">{member.fullName}</h5>
                          <p className="text-muted">{member.fullReview}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="col-md-8">
                <div
                  id="teamCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="4000"
                >
                  <div className="carousel-inner">
                    {teamMembers.map((member, index) => (
                      <div
                        key={member._id}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="d-flex justify-content-center">
                          <div className="card border-0 text-center p-3">
                            <div className="team-img-container position-relative">
                              <img
                                src={outlineImg}
                                alt="Outline"
                                className="team-outline-img"
                              />
                              <img
                                src={`${BASE_IMAGE_URL}/uploads/${member.image}`}
                                className="team-profile-img"
                                alt={member.fullName}
                                style={{
                                  width: "200px",
                                  height: "290px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="fw-bold">{member.fullName}</h5>
                              <p className="text-muted">{member.shortReview}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#teamCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#teamCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
