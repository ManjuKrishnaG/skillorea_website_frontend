import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/Blog.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_IMAGE_URL = API_BASE_URL.replace("/api", "");

// Function to chunk array dynamically based on screen size
const chunkArray = (array, size) => {
  return array.reduce(
    (acc, _, index) =>
      index % size === 0 ? [...acc, array.slice(index, index + size)] : acc,
    []
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Blogs from Backend
    const fetchBlogs = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/api/blogs/all");
        // const response = await axios.get(`${API_BASE_URL}/blogs/all`);
        const response = await axios.get(
          `${API_BASE_URL}/blogs/all?page=1&limit=10`
        );

        console.log("Fetched Blogs:", response.data.blogs); // Debugging
        setBlogs(response.data.blogs); // Adjust based on API response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const updateChunks = () => {
      const screenWidth = window.innerWidth;
      const itemsPerSlide = screenWidth < 768 ? 1 : 3; // 1 blog for mobile, 3 for larger screens
      setChunks(chunkArray(blogs, itemsPerSlide));
    };

    updateChunks();
    window.addEventListener("resize", updateChunks);

    return () => window.removeEventListener("resize", updateChunks);
  }, [blogs]); // Re-run when blogs update

  return (
    <section className="blog-section">
      <h2 className="blog-heading">
        <span className="highlight">BLOGS</span>
      </h2>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="container">
          <div
            id="blogCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
          >
            <div className="carousel-inner">
              {chunks.map((chunk, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row justify-content-center">
                    {chunk.map((blog) => (
                      // <div key={blog._id} className="col-md-4 col-10">
                      <div
                        key={blog._id}
                        className="col-md-4 col-sm-6 col-12 d-flex justify-content-center"
                      >
                        <div className="blog-card">
                          <img
                            // src={`http://localhost:5000/${blog.image}`}
                            src={`${BASE_IMAGE_URL}/${blog.image}`}
                            className="img-fluid rounded"
                            alt={blog.title}
                          />
                          <div className="blog-content">
                            <h5 className="fw-bold">{blog.title}</h5>
                            {/* <p>{blog.content}</p> */}
                            <p>
                              {blog.content.length > 100
                                ? blog.content.substring(0, 100) + "..."
                                : blog.content}
                            </p>

                            <a href={`/blog/${blog._id}`} className="blog-link">
                              View Post
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#blogCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#blogCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
