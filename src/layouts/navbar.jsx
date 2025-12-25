import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import Logo from "../assets/images/logotm.png";
import "../assets/styles/navbar.css";
import "../assets/styles/SplashScreen.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [showSplash, setShowSplash] = useState(false);

  // Handle window resize
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
      if (window.innerWidth >= 992) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // cleanup on unmount
    };
  }, [isOpen]);

  // const navItems = [
  //   "Home",
  //   "About",
  //   "Wellness",
  //   "Shop",
  //   "On Call",
  //   "Careers",
  //   "Pricing",
  //   "Contact",
  // ];

  // const navItems = {
  //   Home: "/",
  //   About: "/about",
  //   Wellness: "/wellness",
  //   Shop: "/shop",
  //   "On Call": "/oncall",
  //   Careers: "/careers",
  //   Pricing: "/pricing",
  //   Contact: "/contact",
  // };

  const navItems = {
    Home: "/",
    About: "/about-us",
    // "Our Team": "/ourteam",
    "Our Team": "/our-team",
    Products: {
      "Wellness and Sports": "/wellness-sports",
      "Doctor on call": "/doctor-on-call",
      Shop: "/online-shopping",
      "Upcoming Features": "upcoming-features",
    },
    Career: "/careers",
    Pricing: "/pricing",
    Contact: "/contact-us",
  };

  const handleLoginClick = () => {
    setShowSplash(true); // Show GIF
    setTimeout(() => {
      window.location.href = "https://www.skillorea.ktig.info/"; // Redirect after 3 seconds
    }, 2000);
  };

  return (
    <>
      {/* Show Splash Screen if active */}
      {showSplash && (
        <div className="splash-screen">
          <img
            // src="/SS_Gif.gif"
            src="/Skillorea_web_gif.gif"
            alt="Splash Animation"
            className="splash-gif"
            style={{ width: "100%" }}
          />
        </div>
      )}

      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>

          {/* Navigation Links (Large Screens) */}
          <div
            className={`navbar-links ${isSmallScreen ? "d-none" : "d-flex"}`}
          >
            <ul className="navbar-nav custom-nav-links">
              {Object.entries(navItems).map(
                ([label, pathOrDropdown], index) => {
                  if (typeof pathOrDropdown === "string") {
                    return (
                      <li className="nav-item" key={index}>
                        <Link
                          className={`nav-link ${
                            location.pathname === pathOrDropdown
                              ? "active-link"
                              : ""
                          }`}
                          to={pathOrDropdown}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li className="nav-item dropdown" key={index}>
                        <span
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          role="button"
                        >
                          {label}
                        </span>
                        <ul
                          className="dropdown-menu"
                          style={{ fontSize: "14px" }}
                        >
                          {Object.entries(pathOrDropdown).map(
                            ([sublabel, subpath], subIndex) => (
                              <li key={subIndex}>
                                <Link className="dropdown-item" to={subpath}>
                                  {sublabel}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    );
                  }
                }
              )}
            </ul>
          </div>

          {/* Login Button (Large Screens) */}
          {!isSmallScreen && (
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
            // <button
            //   className="login-btn"
            //   onClick="https://skillorea.test.ktig.info/"
            // >
            //   Login
            // </button>

            // <a href="https://skillorea.test.ktig.info/" className="login-btn">
            //   Login
            // </a>
          )}

          {/* Toggle Button for Small Screens */}
          {isSmallScreen && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}
        </div>

        {/* Small Screen Dropdown Menu */}
        {isSmallScreen && (
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <ul className="navbar-nav custom-nav-links">
              {Object.entries(navItems).map(
                ([label, pathOrDropdown], index) => {
                  if (typeof pathOrDropdown === "string") {
                    return (
                      <li className="nav-item" key={index}>
                        <Link
                          className={`nav-link ${
                            location.pathname === pathOrDropdown
                              ? "active-link"
                              : ""
                          }`}
                          to={pathOrDropdown}
                          onClick={() => setIsOpen(false)}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li className="nav-item dropdown" key={index}>
                        <span
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          role="button"
                        >
                          {label}
                        </span>
                        <ul className="dropdown-menu">
                          {Object.entries(pathOrDropdown).map(
                            ([sublabel, subpath], subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  className="dropdown-item"
                                  to={subpath}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sublabel}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    );
                  }
                }
              )}
            </ul>

            {/* Login Button in Small Screen Menu */}
            <div className="text-center mt-2">
              {/* <button className="custom-login-btn" onClick={handleLoginClick}>
                LOGIN
              </button> */}
              <button
                className="custom-login-btn"
                onClick="https://www.skillorea.ktig.info/"
              >
                LOGIN
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
