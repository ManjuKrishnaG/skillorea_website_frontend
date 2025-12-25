import cabImage from "../../assets/images/cab.png";
import "../../assets/styles/cab.css";

const CabFacility = () => {
  return (
    <section className="cab-section py-5">
      <div className="container position-relative">
        <div
          className="cab-wrapper text-white rounded-5 px-5 py-4 d-flex flex-lg-row flex-column align-items-center position-relative"
          style={{
            backgroundColor: "#070759",
            zIndex: 1,
          }}
        >
          {/* Image */}
          <div className="cab-img">
            <img
              src={cabImage}
              alt="Cab"
              className="img-fluid animate-car"
            />
          </div>

          {/* Text */}
          <div className="cab-text text-center text-lg-start ms-lg-auto">
            <h5 className="fw-bold mb-2" style={{textAlign: "center"}}>Cab Facility For Sports Activities</h5>
            <p className="mb-0" style={{ fontSize: "14px" ,textAlign: "center"}}>
              We understand your concerns. Skillorea offers a safe cab facility
              with individual attention. We provide safe, individual attention,
              even with your busy schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabFacility;
