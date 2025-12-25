import "../../assets/styles/CharacterSection.css"; // Add this file for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Replace with actual image paths)
import character1 from "../../assets/images/vir1.png";
import character2 from "../../assets/images/vir2.png";
import character3 from "../../assets/images/vir3.png";
import character4 from "../../assets/images/vir4.png";
import tryusImg from "../../assets/images/tryus.png";

const characters = [
  { img: character1, text: "Smart Learning, Big Results! " },
  { img: character2, text: "Power Up Your Learning! " },
  { img: character3, text: "Explore, Learn, Succeed Smartly! " },
  { img: character4, text: "Future Tech, Smarter Studying! " },
];

const CharacterSection = () => {
  return (
    <section className="character-section">
      <h2 className="text-center charsection-heading">
        <span className="lights-text">VIRTUAL ASSISTANCE WITH YOUR </span>
        <span className="dark-text">FAVORITE PERSON,</span>
        <br />
        <span className="dark-text">
          CHARACTER, OR INSPIRATIONAL LEADER.
        </span>
      </h2>

      <div className="container">
        <div className="row justify-content-center">
          {characters.map((char, index) => (
            <div
              key={index}
              className="col-6 col-md-3 text-center character-card"
            >
              <div className="character-box">
                <img
                  src={char.img}
                  alt={`Character ${index + 1}`}
                  className="character-img"
                />
                <div className="text-box">
                  <p>{char.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button Below character Section */}
      <div className="character-btn-container">
        <a href="your-target-link" target="_blank" rel="noopener noreferrer">
          <img src={tryusImg} alt="Get Started" className="character-btn-img" />
        </a>
      </div>

      {/* Navigation buttons */}
      {/* <div className="carousel-controls">
        <button className="carousel-btn">&lt;</button>
        <button className="carousel-btn">&gt;</button>
      </div> */}
    </section>
  );
};

export default CharacterSection;
