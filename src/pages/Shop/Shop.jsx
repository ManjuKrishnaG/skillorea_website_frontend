import "../../assets/styles/Shop.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import bannerImage from "../../assets/images/shopbannerimg.png"; // Importing banner image
import freeDeliveryImage from "../../assets/images/freedelivery.png"; // Importing feature images
import bestOffersImage from "../../assets/images/bestoffers.png";
import incredibleProductsImage from "../../assets/images/incredible.png";

import penPencilImage from "../../assets/images/penandpencil.png";
import bagsImage from "../../assets/images/bag.png";
import colorsImage from "../../assets/images/colors.png";
import accessoriesImage from "../../assets/images/accessories.png";
import notesImage from "../../assets/images/notes.png";
import othersImage from "../../assets/images/shopothers.png";

import product1 from "../../assets/images/newbag1.png"; // Replace with actual image paths
import product2 from "../../assets/images/newbook1.png";
import product3 from "../../assets/images/newpencil1.png";
import product4 from "../../assets/images/newslate1.png";

import promoImage from "../../assets/images/shopbannerimage.png";

import brandImg1 from "../../assets/images/brand11.png"; // Replace with your image paths
import brandImg2 from "../../assets/images/brand12.png";
import brandImg3 from "../../assets/images/brand13.png";

import bannerBg from "../../assets/images/shopbanner2.png";

import iconExchange from "../../assets/images/exchange.png"; // Replace with your image paths
import iconHandpicked from "../../assets/images/handpicked.png";
import iconQuality from "../../assets/images/quality.png";

import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const ShopSection = () => {
  const brandData = [
    { image: brandImg1 },
    { image: brandImg2 },
    { image: brandImg3 },
  ];

  const features = [
    {
      icon: iconExchange,
      title: "Easy Exchange",
    },
    {
      icon: iconHandpicked,
      title: "100% Handpicked",
    },
    {
      icon: iconQuality,
      title: "Assured Quality",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ryan",
      review:
        "Since my child began participating in Skillorea sports, he has experienced remarkable improvements in his energy as well as coordination skills. Active living combined with health and happiness brings joy to his life. It's been fantastic. The Skillorea van service is also incredibly helpful for our busy schedule.",
    },
    {
      name: "David Zen",
      review:
        "My daughter has learned how to deal with stress and grow confident through the wellness classes conducted by  Skillorea. Participation in the Skillorea sports program made her person stronger and clearer on goals while teaching resilience. I am extremely thankful for the wonderful support system.",
    },
    {
      name: "Maria Rodger",
      review:
        "Skillorea delivers a complete wellness experience. Through Skillorea my children establish their physical abilities as well as mental strength and social competencies. Such investment constitutes an excellent opportunity for children to expand their potential while enhancing their general sense of well-being.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Pen & Pencil", image: penPencilImage },
    { name: "Bags", image: bagsImage },
    { name: "Colors", image: colorsImage },
    { name: "Accessories", image: accessoriesImage },
    { name: "Notes", image: notesImage },
    { name: "Others", image: othersImage },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Optional if you want to trigger something manually
    // Not necessary since filter happens automatically
  };

  return (
    <>
      <Helmet>
        <title>
          Best Deal of the Day | Online Shop with Skillorea | Buy now
        </title>
        <meta
          name="description"
          content="The Skillorea app offers an online shopping platform for educational resources. Buy books, study guides, learning tools, materials, and school supplies."
        />
        <meta
          name="keywords"
          content="Skillorea app ,Online shopping ,Educational resources, School supplies"
        />
        <link
          rel="canonical"
          href="https://www.skillorea.com/online-shopping"
        />
      </Helmet>
      <section className="shop-section d-flex flex-column align-items-center">
        {/* Banner Section */}
        <div className="banner-container">
          <img src={bannerImage} alt="Shop Banner" className="banner-img" />
        </div>

        {/* Feature Images Overlapping the Banner */}
        <div className="feature-container">
          <div className="feature-box">
            <img
              src={freeDeliveryImage}
              alt="Free Delivery"
              className="feature-img"
            />
          </div>
          <div className="feature-box">
            <img
              src={bestOffersImage}
              alt="Best Offers"
              className="feature-img"
            />
          </div>
          <div className="feature-box">
            <img
              src={incredibleProductsImage}
              alt="Incredible Products"
              className="feature-img"
            />
          </div>
        </div>
      </section>

      <section className="products-section">
        {/* Heading and Search Row */}
        <div className="heading-search-wrapper d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
          {/* <h2 className="heading-text text-center mb-3 mb-md-0 me-md-4">
            Buy Our Products
          </h2> */}
          <h2
            className="products-section-title heading-text text-center mb-3 mb-md-0 me-md-4"
            style={{ fontSize: "20px" }}
          >
            <span>BUY</span> <span className="highlight">OUR PRODUCTS</span>
          </h2>
          <div className="search-icons d-flex align-items-center justify-content-center">
            <input
              type="text"
              className="form-control me-2 search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <i
              className="bi bi-search search-icon me-3"
              onClick={handleSearch}
            ></i>
            <i className="bi bi-heart wishlist-icon me-3"></i>
            <i className="bi bi-cart cart-icon"></i>
          </div>
        </div>

        {/* Products */}
        {/* <div className="products-container">
          <div className="product">
            <img src={penPencilImage} alt="Pen & Pencil" />
            <p>Pen & Pencil</p>
          </div>
          <div className="product">
            <img src={bagsImage} alt="Bags" />
            <p>Bags</p>
          </div>
          <div className="product">
            <img src={colorsImage} alt="Colors" />
            <p>Colors</p>
          </div>
          <div className="product">
            <img src={accessoriesImage} alt="Accessories" />
            <p>Accessories</p>
          </div>
          <div className="product">
            <img src={notesImage} alt="Notes" />
            <p>Notes</p>
          </div>
          <div className="product">
            <img src={othersImage} alt="Others" />
            <p>Others</p>
          </div>
        </div> */}

        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </section>

      <section className="new-arrivals-section">
        {/* <h2 className="text-center mb-4" style={{ fontSize: "24px" }}>
          New Arrivals
        </h2> */}
        <h2 className="arivals-title">
          <span>NEW</span> <span className="highlight">ARRIVALS</span>
        </h2>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {[product1, product2, product3, product4].map((product, index) => (
            <div key={index} className="product-box text-center">
              <img
                src={product}
                alt="Product"
                className="product-img"
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/shopdetails")}
              />
              <div className="name-rating d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="product-name">School Bag</span>
                <span className="rating">⭐⭐⭐⭐☆</span>
              </div>
              <div className="price-cart d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="price">
                  ₹580 <span className="original-price">₹650</span>
                </span>
                <button
                  className="add-to-bag"
                  onClick={() => (window.location.href = "/shopdetails")}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="view-all text-center">View All</p> */}
        <p
          className="view-all text-center"
          onClick={() => (window.location.href = "/shopdetails")}
          style={{ cursor: "pointer" }}
        >
          View All
        </p>
      </section>

      <section className="promo-banner-wrapper d-flex justify-content-center">
        <div className="promo-banner d-flex align-items-center">
          <div className="row w-100 align-items-center">
            {/* Left Text Section */}
            <div className="col-12 col-md-6 text-section">
              <p className="small-text">Best Deal Online on Stationery</p>
              <h2 className="main-heading">SMART USABLE...</h2>
              <p className="discount-text">UP TO 80% OFF</p>
              <button className="btn shop-btn mt-3">Shop Now</button>
            </div>

            {/* Right Image Section */}
            <div className="col-12 col-md-6 d-flex justify-content-end image-section">
              <img
                src={promoImage}
                alt="Stationery Promo"
                className="promo-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals-section">
        {/* <h2 className="text-center mb-4">Trending Products</h2> */}
        <h2 className="study-smart-title">
          <span>TRENDING</span> <span className="highlight">PRODUCTS</span>
        </h2>
        <div className="container d-flex flex-wrap justify-content-center gap-4 mb-5">
          {[product1, product2, product3, product4].map((product, index) => (
            <div key={index} className="product-box text-center">
              <img src={product} alt="Product" className="product-img" />
              <div className="name-rating d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="product-name">School Bag</span>
                <span className="rating">⭐⭐⭐⭐☆</span>
              </div>
              <div className="price-cart d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="price">
                  ₹580 <span className="original-price">₹650</span>
                </span>
                <button className="add-to-bag">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {[product1, product2, product3, product4].map((product, index) => (
            <div key={index} className="product-box text-center">
              <img src={product} alt="Product" className="product-img" />
              <div className="name-rating d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="product-name">School Bag</span>
                <span className="rating">⭐⭐⭐⭐☆</span>
              </div>
              <div className="price-cart d-flex justify-content-between align-items-center mt-2 px-2">
                <span className="price">
                  ₹580 <span className="original-price">₹650</span>
                </span>
                <button className="add-to-bag">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="brand-offers-section py-5">
        <div className="container">
          <h4 className="mb-4 fw-bold">Brand Offers</h4>
          <div className="row g-4">
            {brandData.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div className="brand-card text-center">
                  <img
                    src={item.image}
                    alt="Brand"
                    className="img-fluid brand-img"
                  />
                  <div className="brand-info mt-3">
                    <h5 className="brand-name mb-1">{item.title}</h5>
                    <p className="brand-offer text-warning">{item.offer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="brand-offers-section py-5">
        {/* <h2 className="text-center mb-4">Brand Offers</h2> */}
        <h2 className="brand-offers-title text-center mb-4">
          <span>BRAND</span> <span className="highlight">OFFERS</span>
        </h2>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {brandData.map((item, index) => (
            <div key={index} className="brand-box text-center">
              <img src={item.image} alt="Brand" className="brand-img" />
              <div className="brand-name-offer mt-3">
                <h5 className="brand-title mb-1">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section
        className="features-section py-5"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-white text-center">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-4 mb-4 mb-sm-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-3"
                  style={{ width: "50px", height: "50px" }}
                />
                <h6 className="fw-semibold">{feature.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section
        className="features-section py-5"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center gap-5 text-white text-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
                <h6 className="fw-semibold">{feature.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="review-section py-5">
        <h2
          className="study-smart-title text-center mb-4"
          style={{ marginTop: "30px" }}
        >
          <span className="review" style={{ color: "#070759" }}>
            OUR HAPPY
          </span>{" "}
          <span className="highlight" style={{ color: "#20CB01" }}>
            CUSTOMERS
          </span>
        </h2>

        {/* ✅ Review Cards */}
        <div className="container">
          <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-10 mb-4">
                <div className="testimonial-card text-center">
                  {/* ⭐ Star Rating */}
                  <div className="d-flex justify-content-center mb-2 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* 🟢 User Info */}
                  <h5 className="fw-bold">
                    {testimonial.name}{" "}
                    <BsCheckCircleFill className="text-success" />
                  </h5>

                  {/* 📝 Review Text */}
                  <p className="text-muted">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopSection;
