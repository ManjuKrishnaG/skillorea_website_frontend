import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";

import Navbar from "./layouts/navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./layouts/footer";
import AdminLogin from "./pages/Admin/login/adminlogin";
import Dashboard from "./pages/Admin/dashboard/dashboard";
import NotFoundPage from "./pages/404page";
import BlogAdmin from "./pages/Admin/blog/adminblog";
import AddBlog from "./pages/Admin/blog/addblog";
import EditBlog from "./pages/Admin/blog/editblog";
import RefundPolicy from "./layouts/refundpolicy";
import TermsAndConditions from "./layouts/termsandconditions";
import TestimonialsAdmin from "./pages/Admin/tesimonials/admintestimonial";
import AddTestimonials from "./pages/Admin/tesimonials/addtestimonial";
import EditTestimonials from "./pages/Admin/tesimonials/edittestimonial";
import PrivacyPolicy from "./layouts/privacypolicy";
import Careers from "./layouts/careers";
import Careerdetails from "./layouts/careerdetails";
import UserContact from "./pages/Admin/usercontact/usercontact";
import HomeEnquiry from "./pages/Admin/enquiry/homeenquiry";
import WellnessEnquiry from "./pages/Admin/enquiry/wellnessenquiry";
import OncallEnquiry from "./pages/Admin/enquiry/oncallenquiry";
import Chatbot from "./layouts/chatbot";
import { useEffect } from "react";
// import chatbotIcon from "./assets/images/chatbot.png";
// import SplashScreen from "./layouts/SplashScreen";
import AdminCareers from "./pages/Admin/careers/AdminCareers";
import AddCareers from "./pages/Admin/careers/Addcareers";
import EditCareers from "./pages/Admin/careers/Editcareers";
import JobApplication from "./pages/Admin/careers/Jobapplication";
import Wellness from "./pages/Wellness/Wellness";
import OnCallBanner from "./pages/Oncall/Oncall";
import ShopSection from "./pages/Shop/Shop";
import ShopDetails from "./pages/Shop/Shopdetails";
import ProductDetails from "./pages/Shop/Productdetails";
import UpcomingFeatures from "./pages/UpcomingFeatures/Upcomingfeatures";
import RemoveTrailingSlash from "./layouts/RemoveTrailingSlash";
import OurTeam from "./pages/Ourteam/OurTeam";
import AdminTeamMembers from "./pages/Admin/ourteam/teammembers/adminteammembers";
import AddTeamMember from "./pages/Admin/ourteam/teammembers/addteammember";
import EditTeamMember from "./pages/Admin/ourteam/teammembers/editteammembers";
import AdminCategory from "./pages/Admin/ourteam/category/admincategory";
import AddCategory from "./pages/Admin/ourteam/category/addcategory";
import EditCategory from "./pages/Admin/ourteam/category/editcategory";
import DataDeletion from "./layouts/datadeletion";
import PricingDetails from "./pages/Pricing/PricingDetail";

import ProtectedRoute from "./ProtectedRoute"; // Import the new component

const App = () => {
  const location = useLocation(); // Get current route

  // Define routes where Navbar/Footer should NOT appear
  const adminRoutes = ["/admin/login", "/admin/login/dashboard"];

  // Get the list of defined routes
  const validRoutes = [
    // "/home",
    "/",
    "/about",
    "/contact",
    "/pricing",
    "/careers",
    "/wellness",
    "/oncall",
    "/shop",
    "/shopdetails",
    "/productdetails",
    "/upcomingfeatures",
    "/pricingdetails",
    "/ourteam",
    "/admin/login",
    "/admin/login/dashboard",
    "/refundpolicy",
    "/termsandconditions",
    "/privacypolicy",
  ];

  // Check if the current route is a valid route
  // const isValidRoute = validRoutes.includes(location.pathname);
  const isValidRoute =
    validRoutes.includes(location.pathname) ||
    matchPath("/careers/:id", location.pathname);

  // Chatbot State
  // const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    // 🔹 Ensure no horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <RemoveTrailingSlash />
      <ScrollToTop />
      <Chatbot />
      {/* Show Navbar and Footer only if the current route is valid and not admin routes */}
      {!adminRoutes.includes(location.pathname) && isValidRoute && <Navbar />}

      <Routes>
        {/* <Route path="/" element={<SplashScreen />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="/careers" element={<Careers />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<Careerdetails />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/oncall" element={<OnCallBanner />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/upcomingfeatures" element={<UpcomingFeatures />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/datadeletion" element={<DataDeletion />} />
        <Route path="/pricingdetails" element={<PricingDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/login/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path="/blog"
          element={<ProtectedRoute element={<BlogAdmin />} />}
        />
        <Route
          path="/admin/addblog"
          element={<ProtectedRoute element={<AddBlog />} />}
        />
        {/* <Route
          path="/careers/:id"
          element={<ProtectedRoute element={<Careerdetails />} />}
        /> */}

        <Route
          path="/testimonials"
          element={<ProtectedRoute element={<TestimonialsAdmin />} />}
        />
        <Route
          path="/addtestimonials"
          element={<ProtectedRoute element={<AddTestimonials />} />}
        />
        <Route
          path="/edittestimonials/:id"
          element={<ProtectedRoute element={<EditTestimonials />} />}
        />
        <Route
          path="/editblog/:id"
          element={<ProtectedRoute element={<EditBlog />} />}
        />
        <Route
          path="/usercontact"
          element={<ProtectedRoute element={<UserContact />} />}
        />
        <Route
          path="/AdminCareers"
          element={<ProtectedRoute element={<AdminCareers />} />}
        />
        <Route
          path="/JobApplication"
          element={<ProtectedRoute element={<JobApplication />} />}
        />
        <Route
          path="/AddCareers"
          element={<ProtectedRoute element={<AddCareers />} />}
        />
        <Route
          path="/EditCareers/:id"
          element={<ProtectedRoute element={<EditCareers />} />}
        />
        <Route
          path="/enquiry/home"
          element={<ProtectedRoute element={<HomeEnquiry />} />}
        />

        <Route
          path="/enquiry/wellness"
          element={<ProtectedRoute element={<WellnessEnquiry />} />}
        />

        <Route
          path="/enquiry/oncall"
          element={<ProtectedRoute element={<OncallEnquiry />} />}
        />

        <Route
          path="/ourteam/adminteammmembers"
          element={<ProtectedRoute element={<AdminTeamMembers />} />}
        />

        <Route
          path="/ourteam/addmember"
          element={<ProtectedRoute element={<AddTeamMember />} />}
        />

        <Route
          path="/ourteam/editmember/:id"
          element={<ProtectedRoute element={<EditTeamMember />} />}
        />

        <Route
          path="/ourteam/category"
          element={<ProtectedRoute element={<AdminCategory />} />}
        />

        <Route
          path="/ourteam/addcategory"
          element={<ProtectedRoute element={<AddCategory />} />}
        />

        <Route
          path="/ourteam/editcategory"
          element={<ProtectedRoute element={<EditCategory />} />}
        />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Show Footer only if the current route is valid and not admin routes */}
      {!adminRoutes.includes(location.pathname) && isValidRoute && <Footer />}
      {/* Chatbot Icon */}

      {/* <div className="chatbot-icon" onClick={() => setIsChatbotOpen(true)}>
        <img
          src={chatbotIcon}
          alt="Chatbot"
          style={{ width: "60px", height: "60px" }}
        />
      </div> */}

      {/* Chatbot Box */}
      {/* {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />} */}
    </>
  );
};
``;

export default App;
