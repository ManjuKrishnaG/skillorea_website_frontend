import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Icons for Expand/Collapse
import "../../assets/styles/Faq.css";

const faqs = [
  {
    id: 1,
    question: "What is Skillorea?",
    answer:
      "Skillorea is an interactive learning platform offering tailored study plans and resources for efficient exam preparation.",
  },
  {
    id: 2,
    question: "How does Skillorea help with exams?",
    answer:
      "It provides organized study plans, practice materials, expert guidance, and time management strategies for exam success.",
  },
  {
    id: 3,
    question: "Can I access Skillorea on multiple devices?",
    answer:
      "Yes, Skillorea is accessible across multiple devices for flexible learning.",
  },
  {
    id: 4,
    question: "Are the study materials updated regularly?",
    answer:
      "Yes, Skillorea updates its materials to align with current exam patterns and syllabi.",
  },
  {
    id: 5,
    question: "Does Skillorea offer support for all subjects?",
    answer:
      "Yes, Skillorea covers a wide range of subjects to cater to various academic needs..",
  },
  {
    id: 6,
    question: "Is Skillorea suitable for competitive exams?",
    answer:
      "Yes, it provides resources tailored to both government and competitive exams for effective preparation.",
  },
  // { id: 3, question: "Lorem ipsum dolor sit amet consectetur. Sagittis id." },
  // { id: 4, question: "Lorem ipsum dolor sit amet consectetur. Sagittis id." },
  // { id: 5, question: "Lorem ipsum dolor sit amet consectetur. Sagittis id." },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section text-center py-5">
      <div className="container">
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="col-lg-10 col-md-12">
            {/* Heading */}
            <h2 className="text-center faq-heading mb-4">
              <span className="dark-text">FAQ</span>
            </h2>

            {/* FAQ List */}
            <div className="faq-list">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item border rounded mb-2 p-3 ${
                    openFAQ === faq.id ? "expanded" : "collapsed"
                  }`}
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span className="fw-bold">{`0${faq.id}`}</span>
                    <span className="flex-grow-1 px-3">{faq.question}</span>
                    {/* <button className="btn btn-dark rounded-circle">
                      {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
                    </button> */}

                    <button
                      className="btn rounded-circle"
                      style={{
                        backgroundColor: "#170645",
                        borderColor: "#170645",
                        color: "white",
                      }}
                    >
                      {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                  {/* Answer Section */}
                  {openFAQ === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
