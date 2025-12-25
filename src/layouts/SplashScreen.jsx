import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect after 4 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src="/SS_Gif.gif" alt="Splash Animation" className="splash-gif" />
    </div>
  );
};

export default SplashScreen;
