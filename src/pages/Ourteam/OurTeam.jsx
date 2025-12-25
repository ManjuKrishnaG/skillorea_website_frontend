import { useState, useEffect } from "react";
import teamBg from "../../assets/images/teambg.png";
import { Helmet } from "react-helmet";
import dots from "../../assets/images/teamdots.png";
import "../../assets/styles/ourteam.css";
// import teamImg from "../../assets/images/teamimg1.png";
import bgCardImage from "../../assets/images/teambgcard.png";
import PropTypes from "prop-types";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const STATIC_BASE_URL = API_BASE_URL.replace("/api", "");

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const TeamGrid = ({ title, team, showAll, toggleShowAll }) => {
  const isMobile = useIsMobile();
  const visibleTeam = showAll || !isMobile ? team : team.slice(0, 2);
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  return (
    <section className="team-grid py-5 bg-white text-center">
      <div className="container text-center">
        <div className="d-block">
          <h5
            className="highlight text-center"
            style={{
              color: "#070759",
              fontWeight: "bold",
              marginBottom: "20px",
              marginTop: "-30px",
            }}
          >
            {title}
          </h5>
        </div>
      </div>
      {/* team members */}
      <div className="container">
        <div
          className="teammemberimages"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px 24px",
          }}
        >
          {visibleTeam.map((member, idx) => (
            <div key={`${title}-${idx}`} className="position-relative">
              <div
                style={{
                  height: "260px",
                  // width: "200px",
                  width: "100%",
                  maxWidth: "200px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  // src={member.image}
                  // src={`http://localhost:5000/uploads/${member.image}`}
                  // src={`${API_BASE_URL}/uploads/${member.image}`}
                  src={`${STATIC_BASE_URL}/uploads/${member.image}`}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                // className="position-absolute text-center p-2"
                className={`position-absolute text-center p-2 transition-card ${
                  hoveredMemberId === member._id ? "fade-out" : "fade-in"
                }`}
                style={{
                  left: "50%",
                  bottom: "10px",
                  transform: "translateX(-50%)",
                  backgroundImage: `url(${bgCardImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  width: "80%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  color: "#fff",
                  zIndex: 2,
                  cursor: "pointer",
                  transition: "opacity 0.3s ease, visibility 0.3s ease",
                }}
                onMouseEnter={() => setHoveredMemberId(member._id)}
                onMouseLeave={() => setHoveredMemberId(null)}
              >
                <h6
                  className=" mb-1 fw-bold"
                  style={{
                    fontSize: "12px",
                    marginTop: "5px",
                    lineHeight: "1.2",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {member.name}
                </h6>

                <p
                  style={{
                    fontSize: "8px",
                    marginBottom: "2px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {member.designation}
                </p>
              </div>
              {/* Hover Card */}
              {hoveredMemberId === member._id && (
                <div
                  className="position-absolute text-start p-3"
                  style={{
                    left: "50%",
                    bottom: "60px",
                    // bottom: "10px",
                    transform: "translateX(-50%)",
                    // background: "rgba(0, 0, 0, 0.85)",
                    background: "white",
                    // color: "#fff",
                    color: "black",
                    borderRadius: "12px",
                    width: "90%",
                    // height: "80%",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    zIndex: 3,
                    fontSize: "10px",
                  }}
                >
                  <h5 className="fw-bold mb-1" style={{ fontSize: "12px" }}>
                    {member.name}
                  </h5>
                  <p className="mb-1" style={{ fontSize: "12px" }}>
                    {member.designation}
                  </p>
                  <p style={{ fontSize: "10px" }}>{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {!showAll && isMobile && (
        <div className="mt-4 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleShowAll(true);
            }}
            style={{
              color: "#007bff",
              textDecoration: "underline",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            View More
          </a>
        </div>
      )}
    </section>
  );
};

const OurTeam = () => {
  const [developmentTeam, setDevelopmentTeam] = useState([]);
  const [showAllDev, setShowAllDev] = useState(false);
  // const [designingTeam, setDesigningTeam] = useState([]);
  // const [showAllDesign, setShowAllDesign] = useState(false);
  const [academicTeam, setAcademicTeam] = useState([]);
  const [showAllAcademic, setShowAllAcademic] = useState(false);
  const [salesTeam, setSalesTeam] = useState([]);
  const [showAllSales, setShowAllSales] = useState(false);
  const [operationsTeam, setOperationsTeam] = useState([]);
  const [showAllOps, setShowAllOps] = useState(false);
  const [ceoTeam, setCeoTeam] = useState([]);
  const [empowermentTeam, setEmpowermentTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");

        const res = await axios.get(`${API_BASE_URL}/team-members`);
        // Filter based on category name
        const devTeam = res.data.filter(
          (member) => member.category?.name === "Developer"
        );
        setDevelopmentTeam(devTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchTeam();

    // const fetchdesigningTeam = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:5000/api/team-members");

    //     const desTeam = res.data.filter(
    //       (member) => member.category?.name === "Designer"
    //     );
    //     setDesigningTeam(desTeam);
    //   } catch (err) {
    //     console.error("Error fetching team members", err);
    //   }
    // };

    // fetchdesigningTeam();

    const fetchacademicTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");
        const res = await axios.get(`${API_BASE_URL}/team-members`);
        // Filter based on category name
        const acaTeam = res.data.filter(
          (member) => member.category?.name === "Academic"
        );
        setAcademicTeam(acaTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchacademicTeam();

    const fetchsalesTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");
        const res = await axios.get(`${API_BASE_URL}/team-members`);
        // Filter based on category name
        const salesTeam = res.data.filter(
          (member) => member.category?.name === "Sales & Marketing"
        );
        setSalesTeam(salesTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchsalesTeam();

    const fetchoperationsTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");
        const res = await axios.get(`${API_BASE_URL}/team-members`);

        // Filter based on category name
        const operationsTeam = res.data.filter(
          (member) => member.category?.name === "Operations"
        );
        setOperationsTeam(operationsTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchoperationsTeam();

    const fetchceoTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");
        const res = await axios.get(`${API_BASE_URL}/team-members`);
        // Filter based on category name
        const ceoTeam = res.data.filter(
          (member) => member.category?.name === "CEO"
        );
        setCeoTeam(ceoTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchceoTeam();

    const fetchempowermentTeam = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/team-members");
        const res = await axios.get(`${API_BASE_URL}/team-members`);
        // Filter based on category name
        const empowermentTeam = res.data.filter(
          (member) => member.category?.name === "Empowerment Team"
        );
        setEmpowermentTeam(empowermentTeam);
      } catch (err) {
        console.error("Error fetching team members", err);
      }
    };

    fetchempowermentTeam();
  }, []);

  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  return (
    <>
      <Helmet>
        <title>Our Team - Skillorea | Best Online Education Platform</title>
        <meta
          name="description"
          content="Skillorea, the best online educational app in Coimbatore, is powered by a dedicated team ensuring student learning, complete development, and future success."
        />
        <meta
          name="keywords"
          content="Skillorea, Online Education App, Learning App"
        />
        <link rel="canonical" href="https://www.skillorea.com/our-team" />
      </Helmet>
      {/* Header */}
      <div className="ourteampage container-fluid">
        <section className="our-team-section py-5">
          <div className="container text-center">
            <div
              className="team-card text-white p-5 rounded-4 mx-auto"
              style={{
                backgroundImage: `url(${teamBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                marginTop: "40px",
                width: "100%",
              }}
            >
              <img
                src={dots}
                alt="dots"
                className="position-absolute team-dot"
                style={{
                  top: "50%",
                  left: 0,
                  transform: "translateY(-50%)",
                  height: "70px",
                  marginLeft: "-25px",
                  zIndex: 1,
                }}
              />
              <img
                src={dots}
                alt="dots"
                className="position-absolute team-dot"
                style={{
                  top: "50%",
                  right: 0,
                  transform: "translateY(-50%)",
                  height: "70px",
                  marginRight: "-25px",
                  zIndex: 1,
                }}
              />
              {/* <div className="d-inline-block px-3 py-1 mb-3 bg-light text-primary rounded-pill small fw-semibold">
              Our Team!
            </div> */}
              <div
                className="d-inline-block px-3 py-1 mb-3 bg-light text-primary rounded-pill small fw-semibold mx-auto"
                style={{ maxWidth: "120px", zIndex: 1 }}
              >
                Our Team!
              </div>

              <h2 className="fw-bold mb-3 position-relative">
                Meet the Skillorea Visionaries
              </h2>
              <p
                className="mb-0 text-white-50"
                style={{ maxWidth: "600px", margin: "auto" }}
              >
                Dedicated members, expert skills, real results.
              </p>
            </div>
          </div>
        </section>

        {/* Ceo Team section*/}
        <div className="container text-center">
          <div className="d-block">
            <h2 className="ourteam-heading">
              <span className="minds"> THE MINDS</span>
              <span className="highlight">BEHIND SKILLOREA</span>
            </h2>
            <p className="text-muted mb-2" style={{ marginTop: "-20px" }}>
              Experience the brilliant minds driving Skillorea&apos;s mission
            </p>
            <h5
              className="highlight"
              style={{
                color: "#070759",
                fontWeight: "bold",
                marginBottom: "-30px",
              }}
            >
              CEO
            </h5>
          </div>
        </div>

        <div className="container text-center mt-5">
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 mb-5">
            {ceoTeam.map((member, idx) => (
              <div
                key={idx}
                className="position-relative"
                style={{ width: "200px" }}
              >
                <div
                  style={{
                    height: "260px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    // src={member.image}
                    // src={`http://localhost:5000/uploads/${member.image}`}
                    // src={`${API_BASE_URL}/uploads/${member.image}`}
                    src={`${STATIC_BASE_URL}/uploads/${member.image}`}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  // className="position-absolute text-center p-2"
                  className={`position-absolute text-center p-2 transition-card ${
                    hoveredMemberId === member._id ? "fade-out" : "fade-in"
                  }`}
                  style={{
                    left: "50%",
                    bottom: "10px",
                    transform: "translateX(-50%)",
                    backgroundImage: `url(${bgCardImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    width: "80%",
                    color: "#fff",
                    zIndex: 2,
                    cursor: "pointer",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredMemberId(member._id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                >
                  <h6
                    className="mb-1 fw-bold ceosection"
                    style={{ fontSize: "12px", marginTop: "5px" }}
                  >
                    {member.name}
                  </h6>
                  <p style={{ fontSize: "10px", marginBottom: "-1px" }}>
                    {member.designation}
                  </p>
                </div>
                {/* Hover Card */}
                {hoveredMemberId === member._id && (
                  <div
                    className="position-absolute text-start p-3"
                    style={{
                      left: "50%",
                      bottom: "60px",
                      transform: "translateX(-50%)",
                      // background: "rgba(0, 0, 0, 0.85)",
                      background: "white",
                      color: "black",
                      borderRadius: "12px",
                      width: "90%",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      zIndex: 3,
                    }}
                  >
                    <h5 className="fw-bold mb-1" style={{ fontSize: "12px" }}>
                      {member.name}
                    </h5>
                    <p className="mb-1" style={{ fontSize: "12px" }}>
                      {member.designation}
                    </p>
                    <p style={{ fontSize: "10px" }}>{member.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IT Teams Sections */}
        {/* <TeamGrid
        title="Development"
        team={developmentTeam}
        showAll={showAllDev}
        toggleShowAll={setShowAllDev}
      /> */}
        <TeamGrid
          title="Development"
          team={developmentTeam}
          showAll={showAllDev}
          toggleShowAll={setShowAllDev}
        />
        {/* <TeamGrid
        title="Designing"
        team={designingTeam}
        showAll={showAllDesign}
        toggleShowAll={setShowAllDesign}
      /> */}
        <TeamGrid
          title="Academic"
          team={academicTeam}
          showAll={showAllAcademic}
          toggleShowAll={setShowAllAcademic}
        />
        <TeamGrid
          title="Sales & Marketing"
          team={salesTeam}
          showAll={showAllSales}
          toggleShowAll={setShowAllSales}
        />
        <TeamGrid
          title="Operations"
          team={operationsTeam}
          showAll={showAllOps}
          toggleShowAll={setShowAllOps}
        />
        <div className="container text-center">
          <div className="d-block">
            <h2 className="ourteam-heading" style={{ marginBottom: "-30px" }}>
              <span> OUR</span>
              <span className="highlight">EMPANELMENT TEAM</span>
            </h2>
          </div>
        </div>
        <div className="container text-center mt-5">
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-4 mb-5">
            {empowermentTeam.map((member, idx) => (
              <div
                key={idx}
                className="position-relative"
                style={{ width: "200px" }}
              >
                <div
                  style={{
                    height: "260px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    // src={member.image}
                    // src={`${API_BASE_URL}/uploads/${member.image}`}
                    src={`${STATIC_BASE_URL}/uploads/${member.image}`}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className={`position-absolute text-center p-2 transition-card ${
                    hoveredMemberId === member._id ? "fade-out" : "fade-in"
                  }`}
                  style={{
                    left: "50%",
                    bottom: "10px",
                    transform: "translateX(-50%)",
                    backgroundImage: `url(${bgCardImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    width: "80%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    color: "#fff",
                    zIndex: 2,
                    cursor: "pointer",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    /** Add these */
                    height: "60px", // or any fixed height
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  onMouseEnter={() => setHoveredMemberId(member._id)}
                  onMouseLeave={() => setHoveredMemberId(null)}
                >
                  <h6
                    className="mb-1 fw-bold empanelmentsection"
                    style={{ fontSize: "12px", marginTop: "5px" }}
                  >
                    {member.name}
                  </h6>
                  {/* <small>{member.role}</small> */}
                  <p
                    className="empanelmentpara"
                    style={{ fontSize: "10px", marginBottom: "5px" }}
                  >
                    {member.designation}
                  </p>
                </div>
                {/* Hover Card */}
                {hoveredMemberId === member._id && (
                  <div
                    className="position-absolute text-start p-3"
                    style={{
                      left: "50%",
                      bottom: "60px",
                      transform: "translateX(-50%)",
                      // background: "rgba(0, 0, 0, 0.85)",
                      background: "white",
                      color: "black",
                      borderRadius: "12px",
                      width: "90%",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      zIndex: 3,
                    }}
                  >
                    <h5 className="fw-bold mb-1" style={{ fontSize: "12px" }}>
                      {member.name}
                    </h5>
                    <p className="mb-1" style={{ fontSize: "12px" }}>
                      {member.designation}
                    </p>
                    <p style={{ fontSize: "10px" }}>{member.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
TeamGrid.propTypes = {
  title: PropTypes.string.isRequired,
  team: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAll: PropTypes.bool.isRequired,
  toggleShowAll: PropTypes.func.isRequired,
};

export default OurTeam;
