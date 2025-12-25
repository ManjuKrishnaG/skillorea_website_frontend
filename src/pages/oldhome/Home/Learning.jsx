import "bootstrap/dist/css/bootstrap.min.css";

// Import images from your assets folder
import activity1 from "../../assets/images/learn1.png";
import activity2 from "../../assets/images/learn2.png";
import activity3 from "../../assets/images/learn3.png";
import activity4 from "../../assets/images/learn4.png";
import activity5 from "../../assets/images/learn5.png";

const activities = [
  { id: 1, title: "Edutainment ", image: activity1 },
  { id: 2, title: "Quizzer ", image: activity2 },
  { id: 3, title: "Infographics ", image: activity3 },
  { id: 4, title: "Workshops ", image: activity4 },
  { id: 5, title: "PointSystem ", image: activity5 },
];

const LearningActivities = () => {
  return (
    <section className="learning-section ">
      <h2
        className="text-center learning-heading"
        style={{ marginBottom: "20px", marginTop: "50px", fontSize: "20px" }}
      >
        <span
          className="light-text"
          style={{ color: "#20CB01", marginRight: "10px" , fontWeight:"bold"}}
        >
          SUPER-FUN & INTERACTIVE
        </span>

        <span className="dark-text">
          LEARNING ACTIVITIES
        </span>
      </h2>
      {/* Heading */}
      {/* <h2 className="fw-bold">
        <span className="text-warning">SUPER-FUN & INTERACTIVE</span>{" "}
        <span className="text-primary">LEARNING ACTIVITIES</span>
      </h2> */}

      {/* Activity Cards */}
      <div className="container">
        {/* <div className="container-fluid"> */}
        <div className="row d-flex justify-content-center text-center mt-4">
          {activities.map((activity) => (
            // <div key={activity.id} className="col-md-2 col-sm-4 col-6 mb-4">
            //   <div className="card shadow border-0">
            //     <img
            //       src={activity.image}
            //       className="card-img-top rounded"
            //       alt="Activity"
            //     />
            //     <div className="card-body text-center">
            //       <p className="card-text fw-bold">{activity.title}</p>
            //     </div>
            //   </div>
            // </div>
            <div
              key={activity.id}
              className="col-md-2 col-sm-4 col-6 mb-4 d-flex"
            >
              <div className="card shadow border-0 w-100">
                <img
                  src={activity.image}
                  className="card-img-top rounded"
                  alt="Activity"
                />
                <div className="card-body text-center d-flex flex-column">
                  <p className="card-text">{activity.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningActivities;
