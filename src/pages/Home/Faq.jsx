// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import "../../assets/styles/Faq.css";

// const faqs = [
//   {
//     id: 1,
//     question: "What is Skillorea?",
//     answer:
//       "Skillorea is an interactive learning platform offering tailored study plans and resources for efficient exam preparation.",
//   },
//   {
//     id: 2,
//     question: "How does Skillorea help with exams?",
//     answer:
//       "It provides organized study plans, practice materials, expert guidance, and time management strategies for exam success.",
//   },
//   {
//     id: 3,
//     question: "Can I access Skillorea on multiple devices?",
//     answer:
//       "Yes, Skillorea is accessible across multiple devices for flexible learning.",
//   },
//   {
//     id: 4,
//     question: "Are the study materials updated regularly?",
//     answer:
//       "Yes, Skillorea updates its materials to align with current exam patterns and syllabi.",
//   },
//   {
//     id: 5,
//     question: "Does Skillorea offer support for all subjects?",
//     answer:
//       "Yes, Skillorea covers a wide range of subjects to cater to various academic needs..",
//   },
//   {
//     id: 6,
//     question: "Is Skillorea suitable for competitive exams?",
//     answer:
//       "Yes, it provides resources tailored to both government and competitive exams for effective preparation.",
//   },

// ];

// const FAQSection = () => {
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const toggleFAQ = (id) => {
//     setOpenFAQ(openFAQ === id ? null : id);
//   };

//   return (
//     <section className="faq-section text-center py-5">
//       <div className="container">
//         <div className="row justify-content-center" style={{ width: "100%" }}>
//           <div className="col-lg-10 col-md-12">

//             <h2 className="text-center faq-heading mb-4">
//               <span className="dark-text">FAQ</span>
//             </h2>

//             <div className="faq-list">
//               {faqs.map((faq) => (
//                 <div
//                   key={faq.id}
//                   className={`faq-item border rounded mb-2 p-3 ${
//                     openFAQ === faq.id ? "expanded" : "collapsed"
//                   }`}
//                 >
//                   <div
//                     className="d-flex align-items-center justify-content-between"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => toggleFAQ(faq.id)}
//                   >
//                     <span className="fw-bold">{`0${faq.id}`}</span>
//                     <span className="flex-grow-1 px-3">{faq.question}</span>

//                     <button
//                       className="btn rounded-circle"
//                       style={{
//                         backgroundColor: "#170645",
//                         borderColor: "#170645",
//                         color: "white",
//                       }}
//                     >
//                       {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
//                     </button>
//                   </div>

//                   {openFAQ === faq.id && (
//                     <div className="faq-answer">
//                       <p>{faq.answer}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../assets/styles/Faq.css";

const faqs = [
  {
    id: 1,
    question: "What is Skillorea, and how does it make learning fun?",
    answer:
      "Skillorea is a learning app that makes education exciting! We use fun AI characters, interactive games, and personalized activities so kids love to learn.",
  },
  {
    id: 2,
    question: "How does Skillorea help my child develop skills?",
    answer:
      "We offer diverse skill development. Your child can learn academic subjects, gain life skills, and even work on real-world projects.",
  },
  {
    id: 3,
    question: "Does Skillorea support my child's overall well-being?",
    answer:
      "Yes! Skillorea has wellness programs for physical and mental health, including sports, arts, and mindfulness activities.",
  },
  {
    id: 4,
    question: "Can I get medical help through the Skillorea app?",
    answer:
      "Yes, our free Doctors on Call service lets you consult with qualified doctors online 24/7 for quick health advice.",
  },
  {
    id: 5,
    question: "How does Skillorea use AI in learning?",
    answer:
      "Skillorea uses AI to personalize lessons, adapt to your child's pace, and provide engaging AI learning companions for support.",
  },
  {
    id: 6,
    question: "Is Skillorea safe, and how can I track my child's progress?",
    answer:
      "Yes, safety is our priority. Parents have full control, and you can track your child's detailed progress reports easily within the app.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section text-center py-5">
      <div className="faq-wrapper">
        <div className="faq-inner">
          <div className="container">
            {/* <div className="custom-container"> */}

            <div
              className="row justify-content-center"
              style={{ width: "100%", marginTop: "60px" }}
            >
              <div className="col-lg-10 col-md-12">
                <h2 className="text-center faq-heading mb-4">
                  <span className="dark-text">FAQ</span>
                </h2>
                {/* <h2 className="text-center faq-heading mb-4">
          <span className="dark-text">FAQ’S</span>
        </h2> */}

                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="row">
                      {faqs.map((faq) => (
                        <div key={faq.id} className="col-md-6 mb-3">
                          <div
                            className={`faq-item border rounded p-3 ${
                              openFAQ === faq.id ? "expanded" : "collapsed"
                            }`}
                          >
                            <div
                              className="d-flex align-items-center justify-content-between"
                              style={{ cursor: "pointer" }}
                              onClick={() => toggleFAQ(faq.id)}
                            >
                              {/* <span className="fw-bold">{`0${faq.id}`}</span> */}
                              <button
                                className="btn rounded-circle"
                                // style={{
                                //   backgroundColor: "#170645",
                                //   borderColor: "#170645",
                                //   color: "white",
                                // }}
                              >
                                {openFAQ === faq.id ? <FaMinus /> : <FaPlus />}
                              </button>
                              <span className="flex-grow-1 px-3 text-start">
                                {faq.question}
                              </span>
                            </div>

                            {openFAQ === faq.id && (
                              <div className="faq-answer text-start mt-2">
                                <p>{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
