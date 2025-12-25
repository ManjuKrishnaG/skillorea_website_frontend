import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
import bag1 from "../../assets/images/bag11.png";
import bag2 from "../../assets/images/bag12.png";
import bag3 from "../../assets/images/bag13.png";
import bag4 from "../../assets/images/bag14.png";
import bag5 from "../../assets/images/bag15.png";
import bag6 from "../../assets/images/bag16.png";
import bag7 from "../../assets/images/bag17.png";
import bag8 from "../../assets/images/bag18.png";

// Sample product data
const ShopDetails = () => {
  const products = [
    {
      name: "School bag",
      price: 580,
      original: 650,
      rating: 4,
      image: bag1,
    },
    {
      name: "School bag",
      price: 600,
      original: 700,
      rating: 4,
      image: bag2,
    },
    {
      name: "School bag",
      price: 490,
      original: 550,
      rating: 4,
      image: bag3,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag4,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4,
      image: bag5,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag6,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4,
      image: bag7,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag8,
    },
    {
      name: "School bag",
      price: 580,
      original: 650,
      rating: 4,
      image: bag1,
    },
    {
      name: "School bag",
      price: 600,
      original: 700,
      rating: 4,
      image: bag2,
    },
    {
      name: "School bag",
      price: 490,
      original: 550,
      rating: 4,
      image: bag3,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag4,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4,
      image: bag5,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag6,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4,
      image: bag7,
    },
    {
      name: "School bag",
      price: 550,
      original: 600,
      rating: 4.5,
      image: bag8,
    },
  ];

  // export default function ShopDetails() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="container-fluid py-4 px-2 px-md-3">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 ps-3">
            <h6 className="fw-semibold mb-3">Product Brand</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="brand1" />
              <label className="form-check-label" htmlFor="brand1">
                Skybags
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="brand2" />
              <label className="form-check-label" htmlFor="brand2">
                American Tourister
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="brand3" />
              <label className="form-check-label" htmlFor="brand3">
                Wildcraft
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="brand4" />
              <label className="form-check-label" htmlFor="brand4">
                Safari
              </label>
            </div>

            <br />

            <h6 className="fw-semibold mb-3">Discount Offer</h6>
            {["10", "20", "30", "40", "50"].map((offer, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`discount${i}`}
                />
                <label className="form-check-label" htmlFor={`discount${i}`}>
                  {offer}% and above
                </label>
              </div>
            ))}

            <br />

            <h6 className="fw-semibold mb-3">Rating Item</h6>
            {["4", "3", "2", "1"].map((rating, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`rating${i}`}
                />
                <label className="form-check-label" htmlFor={`rating${i}`}>
                  {rating} ★ & above
                </label>
              </div>
            ))}

            <br />

            <h6 className="fw-semibold mb-3">Luggage Volume</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="volume1"
              />
              <label className="form-check-label" htmlFor="volume1">
                Small (12-24L)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="volume2"
              />
              <label className="form-check-label" htmlFor="volume2">
                Medium (25-44L)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="volume3"
              />
              <label className="form-check-label" htmlFor="volume3">
                Large (45L+)
              </label>
            </div>

            <br />

            <h6 className="fw-semibold mb-3">Bag Material</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="material1"
              />
              <label className="form-check-label" htmlFor="material1">
                Polyester
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="material2"
              />
              <label className="form-check-label" htmlFor="material2">
                Nylon
              </label>
            </div>

            <br />

            <h6 className="fw-semibold mb-3">Price Filter</h6>
            {[
              "Under ₹500",
              "₹500 - ₹1000",
              "₹1000 - ₹1500",
              "₹1500 - ₹2000",
              "₹2000+",
            ].map((price, i) => (
              <div className="form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`price${i}`}
                />
                <label className="form-check-label" htmlFor={`price${i}`}>
                  {price}
                </label>
              </div>
            ))}

            <br />

            <h6 className="fw-semibold mb-3">Filter by Color</h6>
            {["Green", "Pink", "Black", "Blue"].map((color, i) => (
              <div className="form-check form-check" key={i}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="color"
                  id={`color${i}`}
                />
                <label className="form-check-label" htmlFor={`color${i}`}>
                  {color}
                </label>
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="col-md-9 pe-md-2 ps-md-2">
            {/* Search + Icons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Results</h5>
              <div className="d-flex align-items-center gap-3">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "250px" }}
                  placeholder="Search products..."
                />
                <FaHeart
                  size={20}
                  className="text-danger cursor-pointer"
                  title="Wishlist"
                />
                <FaShoppingCart
                  size={20}
                  className="text-primary cursor-pointer"
                  title="Cart"
                />
              </div>
            </div>

            <div className="row">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-3 mb-4 d-flex flex-column align-items-center"
                >
                  {/* <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid mb-2"
                    style={{
                      width: "100%",
                      maxHeight: "180px",
                      objectFit: "contain",
                    }}
                  /> */}
                  <Link to={`/productdetails`}>
                    {/* <Link to={`/product/${item.id}`}> */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid mb-2"
                      style={{
                        width: "100%",
                        maxHeight: "240px",
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  {/* Product name and rating in one line */}
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <span className="small">{item.name}</span>
                    <span className="small text-warning">
                      {"⭐".repeat(Math.floor(item.rating))}
                      {item.rating % 1 ? "☆" : ""}
                    </span>
                  </div>

                  {/* Price and button in one line */}
                  <div className="d-flex justify-content-between align-items-center px-1 mt-1">
                    <span className="text-primary fw-semibold small">
                      ₹{item.price}
                      <span className="text-muted text-decoration-line-through ms-1">
                        ₹{item.original}
                      </span>
                    </span>
                    {/* <button className="btn btn-sm btn-outline-primary">
                      Add to Bag
                    </button> */}
                    <button className="add-to-bag">Add to Bag</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopDetails;
