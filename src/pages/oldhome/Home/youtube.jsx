import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/youtube.css";
import youtubeThumbnail from "../../assets/images/youtube.png";
import dottedImage from "../../assets/images/dots.png";

const YoutubeSection = () => {
  return (
    <section className="youtube-section text-center ">
      <h2 className="youtube-heading">
        <span> HERE IS A SNEAK </span>
        <span className="highlight">PEEK INTO THE FUTURE</span>
      </h2>

      <div className="d-flex justify-content-center position-relative">
        {/* Left Dotted Image */}
        <img
          src={dottedImage}
          alt="Dotted Decoration"
          className="dotted-image dotted-left d-none d-md-block"
        />
        <div className="video-container position-relative">
          <img
            src={youtubeThumbnail} // Use imported image here
            alt="YouTube Thumbnail"
            className="img-fluid"
          />
          <a
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="play-button position-absolute top-50 start-50 translate-middle"
          >
            {/* <img
              src="https://img.icons8.com/color/96/youtube-play.png"
              alt="Play Button"
            /> */}
          </a>
        </div>
        {/* Right Dotted Image */}
        <img
          src={dottedImage}
          alt="Dotted Decoration"
          className="dotted-image dotted-right d-none d-md-block"
        />
      </div>
      {/* <p className="mt-3">
        Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
      </p> */}
    </section>
  );
};

export default YoutubeSection;
