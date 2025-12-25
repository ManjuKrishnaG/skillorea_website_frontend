import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/Admin/adminlogin.css";
import adminlogin from "../../../assets/images/adminimages/adminlogin.png";
import logo from "../../../assets/images/logowhitetm.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ userId: "", password: "" });
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // const handleLogin = (e) => {
  //   e.preventDefault();

  // Dummy authentication (replace with real API call)
  //   if (credentials.userId === "admin" && credentials.password === "password") {
  //     localStorage.setItem("isAdminAuthenticated", "true");
  //     navigate("/admin/dashboard");
  //   } else {
  //     setError("Invalid User ID or Password");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("🔼 Sending Credentials:", credentials); // Debugging Log

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();
      console.log("🔽 Login Response:", data); // Debugging Log

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("adminAuth", "true"); //Add this line to mark admin as authenticated
        navigate("/admin/login/dashboard");
      } else {
        setError(data.message);
      }
    } catch (err) {
      // Changed 'error' to 'err'
      console.error("Login error:", err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card d-flex flex-column flex-md-row">
        {/* Left Side - Image */}
        <div className="login-image d-none d-md-block">
          <img src={logo} alt="Study Smart" className="img-fluid" />
          <img src={adminlogin} alt="Study Smart" className="img-fluid" />
        </div>

        {/* Right Side - Form */}
        <div className="login-form p-4">
          <h2 className="adminlogin text-center fw-bold">Welcome Back</h2>
          <p className="text-center">Login</p>

          <form onSubmit={handleLogin}>
            {/* User ID Field */}
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User ID"
                name="userId"
                value={credentials.userId}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                  ></i>
                </button>
              </div>
            </div>

            {/* Show error if credentials are wrong */}
            {error && <p className="text-danger text-center">{error}</p>}

            {/* Login Button */}
            <button type="submit" className="adminloginbutton w-100">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
