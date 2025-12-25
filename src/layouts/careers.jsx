import careersImage from "../assets/images/careerheroimg.png"; // Replace with actual image path
import backgroundImage from "../assets/images/pricingbg1.jpg";
import { Helmet } from "react-helmet";
import iconCollaboration from "../assets/images/caicon1.png"; // Replace with actual icon paths
import iconTrust from "../assets/images/caicon2.png";
import iconTransparency from "../assets/images/caicon3.png";
import teamImage from "../assets/images/List.png";
// import teamImage2 from "../assets/images/careerimage2.png";
// import teamImage3 from "../assets/images/careerimage3.png";
// import teamImage4 from "../assets/images/careerimage4.png";
import "../assets/styles/careers.css";
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Careers = () => {
  const [jobs, setJobs] = useState([]); // State to store careers data
  const [loading, setLoading] = useState(true); // Track loading state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          // "http://localhost:5000/api/careers/all?page=1&limit=5"
          `${API_BASE_URL}/careers/all?page=1&limit=5`
        );
        if (response.data.success) {
          setJobs(response.data.jobs);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchJobs();
  }, []);

  return (
    <div
      className="careers-container container-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Careers Section */}
      <div className="text-center py-5">
        <h2 className="values-title">
          <span className="highlight">CAREERS</span>
        </h2>
      </div>
      <Helmet>
        <title>Careers at Skillorea | Best Online Education Platfrom</title>
        <meta
          name="description"
          content="Skillorea Careers in Coimbatore empower you to truly transform education with AI by building impactful student solutions."
        />
        <meta name="keywords" content="Careers, Job Openings" />
        <link rel="canonical" href="https://www.skillorea.com/careers" />
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="careers-image-container text-center">
            <img
              src={careersImage}
              alt="Careers"
              className="career-img-fluid rounded shadow"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Our Values Section */}
      <div className="text-center our-values-section">
        <h2 className="values-title" style={{ marginTop: "30px" }}>
          <span>OUR</span> <span className="highlight">VALUES</span>
        </h2>
        <p className="text-muted">
          Join us to upgrade education by developing AI tools that improve and
          customize each student&apos;s learning experience.
        </p>
      </div>
      <div className="container text-center value-content-section">
        <div className="row justify-content-center">
          {/* Collaboration */}
          <div className="col-md-4 text-center p-3">
            <img
              src={iconCollaboration}
              alt="Collaboration"
              className="mb-3 img-fluid"
              style={{ maxWidth: "60px" }}
            />
            <h5 className="fw-bold">Empowerment</h5>
            <p className="text-muted">
              Skillorea wants every student to feel skillful. Thats why we build
              AI tools that help them learn on their own and believe in
              themselves. Join us to make learning easier and more powerful for
              everyone.
            </p>
          </div>
          {/* Trust */}
          <div className="col-md-4 text-center p-3">
            <img
              src={iconTrust}
              alt="Trust"
              className="mb-3 img-fluid"
              style={{ maxWidth: "60px" }}
            />
            <h5 className="fw-bold">Collaboration</h5>
            <p className="text-muted">
              We believe great ideas come from working together. At Skillorea,
              you will team up with teachers and tech experts to build learning
              tools that really help kids. Your voice matters here.
            </p>
          </div>
          {/* Transparency */}
          <div className="col-md-4 text-center p-3">
            <img
              src={iconTransparency}
              alt="Transparency"
              className="mb-3 img-fluid"
              style={{ maxWidth: "60px" }}
            />
            <h5 className="fw-bold">Innovation</h5>
            <p className="text-muted">
              We are continually seeking new ways to improve learning. Join us
              to create smart, AI-powered tools that make education fun and
              accessible. Our goal is to transform the way that kids learn.
            </p>
          </div>
        </div>
      </div>
      {/* Who We Are Section */}
      {/* <div className="container who-we-are-section text-center">
        <h2 className="values-title">
          <span className="highlight">WHO</span> <span>WE ARE</span>
        </h2>
        <p className="text-muted">
          We are equal parts left and right-brained. And we are generally
          likable. We wont bore you with more adjectives. See for yourself.
        </p>
        </div> */}
      <div className="text-center who-we-are-section">
        <h2 className="values-title">
          <span>WHO</span> <span className="highlight">WE ARE</span>
        </h2>
        <p className="text-muted">
          &quot;Built for Students. Powered by AI. Driven by Dreams&quot;
        </p>
      </div>
      <div className="who-we-are-image text-center">
        <img
          src={teamImage} // Replace with your new single image
          alt="Who We Are"
          className="img-fluid"
          style={{
            maxWidth: "40%",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "transparent !important",
          }}
        />
      </div>
      {/* <div className="who-we-are-grid">
        <div className="row justify-content-center">
          <div className="col-md-5 p-2">
            <img
              src={teamImage1}
              alt="Team 1"
              className="grid-item img-fluid"
            />
          </div> */}
      {/* <div className="col-md-5 p-2">
            <img
              src={teamImage2}
              alt="Team 2"
              className="grid-item img-fluid"
            />
          </div>
          <div className="col-md-5 p-2">
            <img
              src={teamImage3}
              alt="Team 3"
              className="grid-item img-fluid"
            />
          </div>
          <div className="col-md-5 p-2">
            <img
              src={teamImage4}
              alt="Team 4"
              className="grid-item img-fluid"
            />
          </div> */}
      {/* </div>
      </div> */}
      {/* Careers Section */}
      <div className="careers-section mt-5">
        <h2 className=" values-title text-center">
          <span>HOW TO JOIN </span> <span className="highlight">OUR TEAM</span>
        </h2>
        <p className="text-center text-muted">
          Find your role. Fuel the future.
          <br />
          Join Skillorea and be part of a team, building smart tools that
          empower students to learn, grow, and succeed.
        </p>
      </div>
      {/* Search & Filter */}
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {/* <select className="form-select w-auto">
          <option>All locations</option>
          <option>Remote</option>
          <option>On-site</option>
        </select> */}
        <div className="input-group search-bar">
          <input
            type="text"
            className="search-text form-control"
            placeholder="Search Positions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
          <button className="customsearchbutton">Search</button>
        </div>
      </div>
      <div className="job-list">
        {loading ? (
          <p className="text-center">Loading job listings...</p>
        ) : // ) : jobs.length === 0 ? (
        filteredJobs.length === 0 ? (
          <p className="text-center text-danger">
            No current listings match your search.
          </p>
        ) : (
          // jobs.map((job) => (
          filteredJobs.map((job) => (
            <Link
              to={`/careers/${job._id}`} // ✅ Fixed route path
              key={job._id} // Use job._id as key instead of index
              className="job-item p-3 text-decoration-none d-block"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="job-title" style={{ color: "#170645" }}>
                    {job.jobTitle}
                  </h5>
                  <p className="text-muted">{job.experience} Experience</p>
                </div>
                <span className="arrow">➤</span>
              </div>
            </Link>
          ))
        )}
      </div>
      {/* How to Apply Section */}
      {/* <div className="container">
        {" "}
        
        <div className="apply-section text-center mt-5">
          <h2 className="values-title">
            <span>HOW TO</span> <span className="highlight">APPLY</span>
          </h2>
          <p className="text-muted">
            The open positions on our website will help you identify which job
            match your experience and interests to help education through
            impact.
          </p>

          <div className="row mt-4">
            {[
              { step: "STEP 1", title: "Find Job" },
              { step: "STEP 2", title: "Submit CV" },
              { step: "STEP 3", title: "Interview" },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="step-card p-4">
                  <span className="step-badge">{item.step}</span>
                  <h5 className="fw-bold mt-2">{item.title}</h5>
                  <p className="text-muted">
                    The open positions on our website will help you identify
                    which job match your experience and interests to help
                    education through impact.
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "} */}
      {/* Closing container */}

      {/* How to Apply Section */}
      <div className="container">
        <div className="apply-section text-center mt-6 mb-5">
          <h2 className="values-title">
            <span>HOW TO</span> <span className="highlight">APPLY</span>
          </h2>
          <p className="text-muted">
            Your success awaits, apply and start today.
          </p>

          <div className="row mt-4">
            {[
              {
                step: "STEP 1",
                title: "Find Job",
                content:
                  "The open positions on our website will help you identify which job match your experience and interests to help education through impact. ",
              },
              {
                step: "STEP 2",
                title: "Submit CV",
                content:
                  "Send your CV to our team while explaining both your qualifications and your enthusiasm regarding joining our effort to empower educational learners.",
              },
              {
                step: "STEP 3",
                title: "Interview",
                content:
                  "An interview invitation will then follow if you are chosen to further review your overall compatibility with our team members and organization values. ",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="step-card p-4">
                  <span className="step-badge">{item.step}</span>
                  <h5 className="fw-bold mt-2">{item.title}</h5>
                  <p className="text-muted">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
