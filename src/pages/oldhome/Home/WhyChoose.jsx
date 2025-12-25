import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/WhyChoose.css";

import icon1 from "../../assets/images/whychooseicon1.png";
import icon2 from "../../assets/images/whychooseicon2.png";
import icon3 from "../../assets/images/whychooseicon3.png";

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      {/* Centered Heading */}
      <h2 className="why-choose-title">
        <span>WHY CHOOSE</span> <span className="highlight"> SKILLOREA?</span>
      </h2>

      {/* Cards Row */}
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon1} alt="Live Classes" className="feature-icon" />
              <h4 className="feature-title">Innovative Culture </h4>
              <ul className="feature-list">
                <li> Pioneer AI education solutions.</li>
                <li> Shape the future of learning.</li>
                <li> Drive tech-forward advancements.</li>
                <li> Embrace creativity in development.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon2} alt="Flexible Timing" className="feature-icon" />
              <h4 className="feature-title">Collaborative Environment</h4>
              <ul className="feature-list">
                <li> Team with expert educators.</li>
                <li> Share and build ideas together.</li>
                <li> Support student-focused projects.</li>
                <li> Value diverse perspectives daily.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon3} alt="Other Benefits" className="feature-icon" />
              <h4 className="feature-title">Career Growth </h4>
              <ul className="feature-list">
                <li> Advance skills in AI and ed-tech.</li>
                <li>Lead impactful projects.</li>
                <li> Experience professional growth.</li>
                <li> Contribute to global learning access.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
