// import "../../assets/styles/WhyStudySmart.css"; // Add this file for styling

// import bookImage from "../../assets/images/books.png";
// import bulbImage from "../../assets/images/bulb.png";
// import degreeImage from "../../assets/images/degree.png";
// import clockImage from "../../assets/images/clock.png";
// import systemImage from "../../assets/images/system.png";

// const WhyStudySmart = () => {
//   return (
//     <section className="study-smart-section">
//       {/* Heading */}
//       <h2 className="study-smart-title">
//         {/* <span className="highlight"></span>  */}
//         <span>WHY</span> <span className="highlight">STUDY SMART?</span>
//       </h2>

//       {/* Content Section with Images */}
//       <div className="container">
//         <div className="row justify-content-center">
//           {/* Each Column Contains an Image + Text */}
//           <div className="col-4 col-md-2 text-center">
//             <img src={bookImage} alt="Book" className="study-smart-img" />
//             <p>Learn Smarter, Not Harder</p>
//           </div>

//           <div className="col-4 col-md-2 text-center">
//             <img src={bulbImage} alt="Bulb" className="study-smart-img" />
//             <p>Smart Learning, Brighter Future</p>
//           </div>

//           <div className="col-4 col-md-2 text-center">
//             <img src={degreeImage} alt="Degree" className="study-smart-img" />
//             <p>Personalized Learning, Maximum Growth</p>
//           </div>

//           <div className="col-4 col-md-2 text-center">
//             <img src={clockImage} alt="Clock" className="study-smart-img" />
//             <p>Save Time, Boosts Results</p>
//           </div>

//           <div className="col-4 col-md-2 text-center">
//             <img src={systemImage} alt="System" className="study-smart-img" />
//             <p>Engage Actively, Understand Deeply</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyStudySmart;

import { useEffect, useRef } from "react";
import "../../assets/styles/WhyStudySmart.css"; // Import the CSS file

import bg1 from "../../assets/images/card1.png";
import bg2 from "../../assets/images/card2.png";
import bg3 from "../../assets/images/card3.png";
import bg4 from "../../assets/images/card4.png";
import bg5 from "../../assets/images/card5.png";
import icon1 from "../../assets/images/whyi2.png";
import icon2 from "../../assets/images/whyi1.png";
import icon3 from "../../assets/images/whyi5.png";
import icon4 from "../../assets/images/whyi3.png";
import icon5 from "../../assets/images/whyi4.png";

const cardData = [
  {
    image: icon1,
    background: bg1,
    text: "Meaningful Impact, Future Learners",
  },
  {
    image: icon2,
    background: bg2,
    text: "Innovative Tools, AI Education ",
  },
  {
    image: icon3,
    background: bg3,
    text: "Collaborative Team, Supportive Culture ",
  },
  {
    image: icon4,
    background: bg4,
    text: "Personal Growth, Career Advancement ",
  },
  {
    image: icon5,
    background: bg5,
    text: "Flexible Work, Student Success",
  },
];

const WhyStudySmart = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let clone = carousel.innerHTML;
    carousel.innerHTML += clone; // Duplicate items for infinite effect
  }, []);

  return (
    <section className="study-smart-section">
      {/* Centered Heading */}
      <h2 className="study-smart-title">
        <span>WHY</span> <span className="highlight">SKILLOREA</span>
      </h2>

      {/* Auto-Scrolling Carousel */}
      <div className="carousel-container">
        <div className="carousel-track" ref={carouselRef}>
          {cardData.concat(cardData).map((card, index) => (
            <div
              className="carousel-card"
              key={index}
              style={{ backgroundImage: `url(${card.background})` }}
            >
              <img src={card.image} alt="icon" className="carousel-icon" />
              <p className="carousel-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudySmart;
