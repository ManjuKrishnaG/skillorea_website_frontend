import { FaArrowLeft, FaTrashAlt, FaSyncAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/images/bag91.png";

const ShoppingCart = () => {
  return (
    <div className="container py-4">
      {/* 🟦 First Row - Cart and Summary (70/30) */}
      <div className="row mb-5">
        {/* Left - Cart (70%) */}
        <div className="col-lg-8">
          <button
            className="btn btn-link p-0 mb-3"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft /> Back
          </button>
          <h3 className="fw-bold mb-4">Shopping Cart</h3>

          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="d-flex mb-3 p-3 border rounded align-items-center"
            >
              <img
                src={image1}
                alt="Product"
                className="me-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">
                  MSI MEG Trident X 10SD-102AU Intel i7...
                </h6>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="fw-bold">$4,349.00</span>
                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      min="1"
                      className="form-control form-control-sm me-2"
                      style={{ width: "60px" }}
                      defaultValue={1}
                    />
                    <span className="fw-bold">$13,047.00</span>
                    <FaSyncAlt className="text-primary ms-3" role="button" />
                    <FaTrashAlt className="text-danger ms-3" role="button" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-3 flex-wrap gap-2">
            <button className="btn btn-outline-secondary">
              Continue Shopping
            </button>
            <div>
              <button className="btn btn-outline-danger me-2">
                Clear Shopping Cart
              </button>
              <button className="btn btn-primary">Update Shopping Cart</button>
            </div>
          </div>
        </div>

        {/* Right - Summary (30%) */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="bg-light p-4 rounded">
            <h5 className="fw-bold mb-3">Summary</h5>
            <p className="small mb-2">Estimate Shipping and Tax</p>
            <input
              type="text"
              placeholder="Enter your destination"
              className="form-control form-control-sm mb-3"
            />
            <p className="small mb-1">Apply Discount Code</p>
            <input
              type="text"
              placeholder="Enter code"
              className="form-control form-control-sm mb-3"
            />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$13,047.00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>$21.00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax</span>
              <span>$1.91</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>GST (10%)</span>
              <span>$1.91</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Order Total</span>
              <span>$13,068.00</span>
            </div>

            <button className="btn btn-success w-100 mt-3">
              Proceed to Checkout
            </button>
            <button className="btn btn-warning w-100 mt-2">
              Check out with PayPal
            </button>
            <button className="btn btn-outline-secondary w-100 mt-2">
              Check Out with Multiple Addresses
            </button>
          </div>
        </div>
        <div className="shopcart-bottom row" style={{marginTop: "40px"}}>
        <div className="col-12">
          <div className="bg-light py-5 px-3 rounded text-center">
            <div className="row">
              <div className="col-md-4 mb-4">
                <i className="bi bi-shield-check fs-1 text-success"></i>
                <h6 className="mt-2">Product Support</h6>
                <p className="text-muted small">
                  Up to 3 years on-site warranty available for your peace of
                  mind.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <i className="bi bi-person-circle fs-1 text-success"></i>
                <h6 className="mt-2">Personal Account</h6>
                <p className="text-muted small">
                  With big discounts, free delivery and a dedicated support
                  specialist.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <i className="bi bi-tag fs-1 text-success"></i>
                <h6 className="mt-2">Amazing Savings</h6>
                <p className="text-muted small">
                  Up to 70% off new products, you can be sure of the best price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      
    </div>
    

    
  );
};

export default ShoppingCart;
