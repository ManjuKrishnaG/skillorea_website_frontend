import "../assets/styles/refundpolicy.css"; // Custom CSS for styling
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  return (
    <section className="refund-policy-wrapper">
      <Helmet>
        <title>Refund Policy | Skillorea | Best Education Platforms</title>
        <meta
          name="description"
          content="The Skillorea Refund Policy gives you clear guidelines for cancellations, returns, eligibility, process, payment, subscription, and contact."
        />
        <meta name="keywords" content="Skillorea Refund Policy" />
      </Helmet>
      <div className="refund-policy-content">
        <h2 className="refund-heading">Refund Policy</h2>

        {/* Policy Text Content */}
        <div className="refund-text-box">
          {/* <h4 className="refund-subheading">
            Learn, Earn, and Unlock Your Rewards!
          </h4> */}

          <p className="refund-text">
            Skillorea has developed its refund policy to be simple and fair. We
            aim to support your continuous learning journey effectively. We
            understand that transparent policies build trust with our users.
          </p>

          <p className="refund-text">
            If there was a technical error causing a payment problem, we will
            give you a direct refund. Our process is set up to address any such
            technical discrepancies promptly and accurately, ensuring a smooth
            resolution. For assistance, please email:{" "}
            <a href="mailto:support@skillorea.com">support@skillorea.com</a>{" "}
          </p>

          <p className="refund-text">
            Skillorea focuses on your growth and providing satisfaction. We
            offer clear answers to any problems related to payment. The process
            of managing your funds at Skillorea is made with attention, so your
            experience is always enjoyable and reliable. Check our{" "}
            <a href="/termsandconditions" className="hover-underline">
              Terms & Conditions
            </a>{" "}
            for the whole explanation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
