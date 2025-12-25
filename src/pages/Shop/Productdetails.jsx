import { FaStar, FaArrowLeft } from "react-icons/fa";
import mainImage from "../../assets/images/bag91.png";
import img1 from "../../assets/images/bag9.1.png";
import img2 from "../../assets/images/bag9.2.png";
import img3 from "../../assets/images/bag9.3.png";

import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/shopping-cart");
  };
  return (
    <section className="product-details py-5 mt-5">
      <div className="container">
        {/* ✅ ROW 1: Thumbnails | Main Image | Product Info */}
        <div className="row g-4 align-items-start flex-wrap mb-5 ">
          {/* Thumbnails + Back */}
          <div className="col-12 col-md-2 d-flex flex-column align-items-center">
            <button
              className="btn btn-light mb-3 w-100"
              onClick={() => navigate("/shopdetails")}
            >
              <FaArrowLeft /> Back
            </button>
            <img
              src={img1}
              alt="Side 1"
              className="img-thumbnail mb-2 side-img-large"
            />
            <img
              src={img2}
              alt="Side 2"
              className="img-thumbnail mb-2 side-img-large"
            />
            <img
              src={img3}
              alt="Side 3"
              className="img-thumbnail side-img-large"
            />
          </div>

          {/* Main Image */}
          <div className="col-12 col-md-5">
            <img
              src={mainImage}
              alt="Product"
              className="img-fluid rounded w-100 main-img"
            />
          </div>

          {/* Product Info */}
          <div className="col-12 col-md-5">
            <h2>School Bag</h2>
            <div className="d-flex align-items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-warning me-1" />
              ))}
              <span className="ms-2">4.5/5</span>
            </div>
            <h4 className="text-dark fw-bold">Rs.1000.00</h4>
            <p className="text-danger fw-bold">-40%</p>

            <div className="mb-3">
              <strong>Colors:</strong>{" "}
              <span className="d-inline-block color-circle bg-dark"></span>
              <span className="d-inline-block color-circle bg-primary"></span>
              <span className="d-inline-block color-circle bg-danger"></span>
              <span className="d-inline-block color-circle bg-warning"></span>
            </div>

            <div className="d-flex gap-3 flex-wrap">
              {/* <button className="btn btn-primary">ADD TO CART</button>
              <button className="btn btn-dark">BUY NOW</button> */}
              <button className="btn btn-primary" onClick={goToCart}>
                ADD TO CART
              </button>
              <button className="btn btn-dark ms-2" onClick={goToCart}>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ ROW 2: Description/Tabs */}
      <div className="container">
        <div className="col-12">
          <ul
            className="nav nav-tabs"
            id="productTabs"
            role="tablist"
            style={{ border: "none", fontWeight: "bold" }}
          >
            {["Description", "Specifications", "Ratings & Reviews", "FAQ"].map(
              (label, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    style={{ border: "none" }}
                    data-bs-toggle="tab"
                    data-bs-target={`#tab${index}`}
                  >
                    {label}
                  </button>
                </li>
              )
            )}
          </ul>

          <div className="tab-content p-3" id="productTabsContent">
            {[...Array(4)].map((_, index) => (
              <div
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={`tab${index}`}
                key={index}
              >
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur. Elementum consectetur
                  purus dolor eget orci mus.Lorem ipsum dolor sit amet
                  consectetur. Elementum consectetur purus dolor eget orci
                  mus.Lorem ipsum dolor sit amet consectetur. Elementum
                  consectetur purus dolor eget orci mus.Lorem ipsum dolor sit
                  amet consectetur. Elementum consectetur purus dolor eget orci
                  mus.Lorem ipsum dolor sit amet consectetur. Elementum
                  consectetur purus dolor eget orci mus.Lorem ipsum dolor sit
                  amet consectetur. Elementum consectetur purus dolor eget orci
                  mus.Lorem ipsum dolor sit amet consectetur. Elementum
                  consectetur purus dolor eget orci mus.Lorem ipsum dolor sit
                  amet consectetur. Elementum consectetur purus dolor eget orci
                  mus.Lorem ipsum dolor sit amet consectetur. Elementum
                  consectetur purus dolor eget orci mus.Lorem ipsum dolor sit
                  amet consectetur. Elementum consectetur purus dolor eget orci
                  mus.Lorem ipsum dolor sit amet consectetur. Elementum
                  consectetur purus dolor eget orci mus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
