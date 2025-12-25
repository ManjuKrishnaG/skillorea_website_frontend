import underConstructionImg from "../assets/images/underconstruction.png"; // use your actual path

const UnderConstruction = () => {
  return (
    <div className="under-construction-container d-flex justify-content-center align-items-center text-center" style={{ height: "100vh",
  backgroundColor: "#fff",
  padding: "20px"}}>
      <div>
        <img
          src={underConstructionImg}
          alt="Under Construction"
          className="img-fluid mb-4"
          style={{ maxWidth: "400px" }}
        />
        <h5 className="fw-bold text-uppercase mb-2">
          This Page is Under Construction
        </h5>
        <p className="text-muted">Please comeback later</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
