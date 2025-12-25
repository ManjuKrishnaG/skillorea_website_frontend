import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/WhyChoose.css";

import icon1 from "../../assets/images/whychooseicon1.png";
import icon2 from "../../assets/images/whychooseicon2.png";
import icon3 from "../../assets/images/whychooseicon3.png";

const WhyChooseSection = () => {
  return (
    <section className="why-choose-section">
      {/* Centered Heading */}
      <h2 className="why-choose-title" style={{ marginTop: "60px" }}>
        <span>WHY CHOOSE</span> <span className="highlight"> SKILLOREA?</span>
      </h2>

      {/* Cards Row */}
      <div className="container d-flex justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon1} alt="Live Classes" className="feature-icon" />
              <h4 className="feature-title">Personalized Support</h4>
              <ul className="feature-list">
                <li> Provide AI learning buddies.</li>
                <li> Give personalized guidance.</li>
                <li> Adapt to each child&apos;s needs.</li>
                <li> Offer expert online help.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon2} alt="Flexible Timing" className="feature-icon" />
              <h4 className="feature-title">All-Around Growth</h4>
              <ul className="feature-list">
                <li>Develop diverse skills.</li>
                <li>Nurture wellness activities.</li>
                <li>Focus on the whole child.</li>
                <li>Build a foundation for life.</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <img src={icon3} alt="Other Benefits" className="feature-icon" />
              <h4 className="feature-title">Real-World Preparation </h4>
              <ul className="feature-list" >
                <li>Guide innovative projects.</li>
                <li>Build teamwork skills.</li>
                <li>Offer practical experience.</li>
                <li>Prepare for future success.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
