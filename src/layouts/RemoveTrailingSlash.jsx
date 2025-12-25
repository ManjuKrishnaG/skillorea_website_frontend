import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname !== "/" && pathname.endsWith("/")) {
      navigate(pathname.slice(0, -1) + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null; // render nothing
};

export default RemoveTrailingSlash;
