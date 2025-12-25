import { useState, useEffect } from "react";
import teamBg from "../../assets/images/teambg.png";
import dots from "../../assets/images/teamdots.png";
import "../../assets/styles/ourteam.css";
import teamImg from "../../assets/images/teamimg1.png";
import bgCardImage from "../../assets/images/teambgcard.png";
import PropTypes from "prop-types";

const ceoMember = [
  {
    name: "RAJKUMAR NANJAN",
    role: "CEO",
    image: teamImg,
  },
];

const developmentTeam = [
  {
    name: "DHINESH B",
    role: "IT Head",
    description: "Head of IT Department. Leading many projects",
    image: teamImg,
  },
  {
    name: "KAALEESWARAN J",
    role: "Team Lead",
    image: teamImg,
  },
  {
    name: "SOWBARNIKA Y",
    role: "Frontend Developer",
    image: teamImg,
  },
  {
    name: "VIGNESHWARAN M",
    role: "Backend Developer",
    image: teamImg,
  },
  {
    name: "MANJU KRISHNA G",
    role: "Backend Developer",
    image: teamImg,
  },
  {
    name: "HARIHARAN P",
    role: "Full stack Developer",
    image: teamImg,
  },
  {
    name: "RENJITH KRISHNA A",
    role: "Full stack Developer",
    image: teamImg,
  },
  {
    name: "YOGESHWARAN SA",
    role: "Mern Stack Developer",
    image: teamImg,
  },
  {
    name: "REKHA MURTHY M",
    role: "Full stack Developer",
    image: teamImg,
  },
  {
    name: "REKHA SURESH S",
    role: "Senior IOS Developer",
    image: teamImg,
  },
  {
    name: "VIJAYARAGHAVAN M",
    role: "Andriod Developer",
    image: teamImg,
  },
  {
    name: "SATHISHKUMAR G",
    role: "Mobile App Developer",
    image: teamImg,
  },
  {
    name: "VAIRAMOORTHY M",
    role: "Devops Engineer",
    image: teamImg,
  },
  {
    name: "VISHNU M",
    role: "Junior Devops Engineer",
    image: teamImg,
  },
  {
    name: "SRIMAN DA",
    role: "AI Engineer",
    image: teamImg,
  },
  {
    name: "BALA SARAVANAN M",
    role: "Data Scientist",
    image: teamImg,
  },
  {
    name: "SHILPA",
    role: "AI Developer",
    image: teamImg,
  },
  {
    name: "PRATHAP M",
    role: "3D Artist",
    image: teamImg,
  },
  {
    name: "UMA DEVI ",
    role: "3 D Artist",
    image: teamImg,
  },

  {
    name: "JOTHIPRIYA N",
    role: "Manual Tester",
    image: teamImg,
  },
  {
    name: "POOVARASAN R",
    role: "UI/UX Designer",
    image: teamImg,
  },
  {
    name: "ANUSHA SHELINA L",
    role: "UI/UX Designer",
    image: teamImg,
  },
];

// const designingTeam = [
//   {
//     name: "POOVARASAN R",
//     role: "UI/UX Designer",
//     image: teamImg,
//   },
//   {
//     name: "ANUSHA SHELINA L",
//     role: "UI/UX Designer",
//     image: teamImg,
//   },
// ];

const academicTeam = [
  {
    name: "POORNIMA A ",
    role: "Academic Cordinator ",
    image: teamImg,
  },
  {
    name: "MOHAMAD YASSER ARAFAT MU",
    role: "Manager",
    image: teamImg,
  },
  {
    name: "ANJALI PB",
    role: "Asst Manager",
    image: teamImg,
  },

  {
    name: "KOWSALYA G",
    role: "Science Faculty",
    image: teamImg,
  },
  {
    name: "RAMYA D",
    role: "Maths Faculty",
    image: teamImg,
  },
  {
    name: "KIRTHIKA RAMACHANDRAN",
    role: "ICT Faculty",
    image: teamImg,
  },
  {
    name: "SNEHA RAMU",
    role: "Tamil Faculty ",
    image: teamImg,
  },
  {
    name: "MRUDUL CJ",
    role: "Content Writer ",
    image: teamImg,
  },
];

const salesTeam = [
  {
    name: "MANICKAVEL E",
    role: "Chief Marketing Officer",
    image: teamImg,
  },
  {
    name: "RAMYA SUNDAR",
    role: "Chief Development Officer",
    image: teamImg,
  },
  {
    name: "VINOTH M",
    role: "Senior Marketing Manager",
    image: teamImg,
  },
  {
    name: "SEEMA B",
    role: "Business Development  Manager",
    image: teamImg,
  },

  {
    name: "SRIANUJ K R ",
    role: "Sales Manager ",
    image: teamImg,
  },
];

const operationsTeam = [
  {
    name: "THIAGARAJAN M",
    role: "CFO",
    image: teamImg,
  },
  {
    name: "RAJESH M",
    role: "Branch Operation Manager",
    image: teamImg,
  },
  {
    name: "VIMALAKANNAN N",
    role: "Accounts & HR Manager",
    image: teamImg,
  },
  {
    name: "GAUTHAM A",
    role: "Accounts Executive",
    image: teamImg,
  },
  {
    name: "RAMESH A",
    role: "Deputy Administration Officer",
    image: teamImg,
  },
  {
    name: "SEKAR B",
    role: "Branch Manager",
    image: teamImg,
  },
  {
    name: "VASUKI A",
    role: "Teller",
    image: teamImg,
  },
  {
    name: "VIVEKA S ",
    role: "Accountant",
    image: teamImg,
  },
  {
    name: "REVATHI N",
    role: "Assistant Manager",
    image: teamImg,
  },
  {
    name: "VINITHA I",
    role: "Teller",
    image: teamImg,
  },
];

const empowermentMember = [
  {
    name: "KUMAR PERIASAMY P",
    role: "Grievance Officer",
    image: teamImg,
  },
  // ...more ops members
];

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
  const visibleTeam = showAll || !isMobile ? team : team.slice(0, 3);

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
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="position-absolute text-center p-2"
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
                }}
              >
                <h6
                  className="mb-1 fw-bold"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  {member.name}
                </h6>

                <p style={{ fontSize: "12px", marginBottom: "2px" }}>
                  {member.role}
                </p>
              </div>
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
  const [showAllDev, setShowAllDev] = useState(false);
  // const [showAllDesign, setShowAllDesign] = useState(false);
  const [showAllAcademic, setShowAllAcademic] = useState(false);
  const [showAllSales, setShowAllSales] = useState(false);
  const [showAllOps, setShowAllOps] = useState(false);

  return (
    <>
      {/* Header */}
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
              The Team That Makes It Happen
            </h2>
            <p
              className="mb-0 text-white-50"
              style={{ maxWidth: "600px", margin: "auto" }}
            >
              Dedicated members, expert skills, real results
            </p>
          </div>
        </div>
      </section>

      {/* Empowerment Team */}
      <div className="container text-center">
        <div className="d-block">
          <h2 className="ourteam-heading">
            <span> OUR</span>
            <span className="highlight">TEAMS</span>
          </h2>
          <p className="text-muted mb-2" style={{ marginTop: "-20px" }}>
            Meet our team of highly skilled Members
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
          {ceoMember.map((member, idx) => (
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
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="position-absolute text-center p-2"
                style={{
                  left: "50%",
                  bottom: "10px",
                  transform: "translateX(-50%)",
                  backgroundImage: `url(${bgCardImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  width: "80%",
                  color: "#fff",
                }}
              >
                <h6
                  className="mb-1 fw-bold"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  {member.name}
                </h6>
                <p style={{ fontSize: "10px", marginBottom: "-1px" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IT Teams Sections */}
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
          {empowermentMember.map((member, idx) => (
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
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="position-absolute text-center p-2"
                style={{
                  left: "50%",
                  bottom: "10px",
                  transform: "translateX(-50%)",
                  backgroundImage: `url(${bgCardImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  width: "80%",
                  color: "#fff",
                }}
              >
                <h6
                  className="mb-1 fw-bold"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  {member.name}
                </h6>
                {/* <small>{member.role}</small> */}
                <p style={{ fontSize: "10px", marginBottom: "5px" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
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
