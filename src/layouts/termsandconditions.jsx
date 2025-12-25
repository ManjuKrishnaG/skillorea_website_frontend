import "../assets/styles/termsandconditions.css";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <section className="terms-conditions-wrapper">
      <Helmet>
        <title>
          Terms & Conditions | Skillorea | Wellness & Sports | Skills
        </title>
        <meta
          name="description"
          content="Skillorea Terms & Conditions: Understand our legal terms, user agreements & policies for using app/website. Data protection included."
        />
        <meta name="keywords" content="Skillorea Terms & Conditions" />
      </Helmet>
      <div className="terms-conditions-content">
        <h2 className="terms-heading">Terms and Conditions</h2>

        {/* Policy Text Content */}
        <div className="terms-text-box">
          <h3>Introduction</h3>

          <p className="terms-text">
            SKILLOREA, operated by BR Academy Private Limited under the Kovai
            Tech India Group, offers educational services. We provide online
            classes, skill development, and wellness programs. Our platform
            includes doctor-on-call services. This policy governs your use of
            the SKILLOREA Learning App, www.skillorea.com, and related services.
            We ensure high standards of security and privacy for all users.
          </p>

          <h3>Information Collection and Use</h3>
          <p className="terms-text">
            We collect personal details for your account. This includes name,
            age, email address, location, and phone number. Transaction data
            means all the purchases that have taken place on our platform. Your
            support requests are managed more effectively with the help of
            communication. Online classes become interactive because of access
            to the camera and microphone. The recordings from each session are
            saved to check for any possible problems. A doctor-on-call and
            wellness service will need your consent before handling your health
            data.
          </p>

          <h3>Automatically Collected Information</h3>

          <p className="terms-text">
            Our system gathers device information automatically. This includes
            device ID, IP address, and operating system. Usage patterns help us
            improve our services. Browser data ensures platform optimization.
            Payment data secures your transactions.
          </p>

          <h3>Data Usage and Sharing</h3>
          <p className="terms-text">
            We analyse data to improve our platform. The way you learn helps to
            customize the educational material you get. By looking at data,
            wellness and skill development classes can adapt their classes for
            students. Such services depend on health information for holding
            consultations. We ensure our parents are updated about what is
            necessary.
          </p>

          <h3>Information Sharing Guidelines</h3>

          <p className="terms-text">
            We share data for legal compliance. We protect our rights and
            interests. Trusted providers assist with operations. Behavioural
            analysis improves our services. Company subsidiaries may access
            data. Doctor-on-call partners receive necessary data with consent.
          </p>

          <h3>Security and Data Storage</h3>

          <p className="terms-text">
            We use industry-standard security measures. All communications are
            encrypted for safety. Regular updates maintain data integrity. We
            retain data for three years after account deactivation. This
            complies with regulations and ensures service continuity.
          </p>

          <h3>User Rights and Consent</h3>
          <p className="terms-text">
            Users under 18 need parental consent. You can access, update, or
            delete your data. Contact{" "}
            <a href="mailto:support@skillorea.com">support@skillorea.com</a> for
            requests. Withdraw consent anytime, subject to legal obligations.
            Health data for the doctor on call requires explicit consent.
          </p>

          <h3>Terms of Use</h3>
          {/* <p>Intellectual Property Rights:</p> */}
          <h5 className="terms-subheading">Intellectual Property Rights</h5>
          <p className="terms-text">
            Copyright laws protect SKILLOREA content. This includes online
            classes, wellness, and skill development materials. Users get a
            limited, non-commercial use license. Unauthorized reproduction or
            distribution is prohibited.
          </p>

          <h5 className="terms-subheading">Prohibited Activities</h5>
          <p>These actions are not allowed:</p>

          <ul>
            <li>Unauthorized use of platform content.</li>
            <li>Sharing harmful or illegal content.</li>
            <li>Interfering with services.</li>
            <li>Harvesting data without permission.</li>
            <li>Attempting unauthorized system access.</li>
          </ul>

          <h3>User-Generated Content</h3>
          <p className="terms-text">
            Users may upload content in classes or wellness sessions. You grant
            SKILLOREA a license to use or remove it. Inappropriate content will
            be removed. Accounts may be suspended for violations.
          </p>

          <h3>Service Availability</h3>
          <p className="terms-text">
            We aim for uninterrupted services. Online classes, doctor-on-call,
            may face downtime. We are not liable for temporary interruptions.
            Wellness and skill development classes follow a schedule.
          </p>

          <h3>Online Classes and Teachers</h3>
          <p className="terms-text">
            Online classes are led by our qualified teachers. Sessions are
            interactive and recorded. Teachers provide personalized support.
            Users must follow class guidelines. Skillorea ensures teacher
            quality and training.
          </p>

          <h3>Doctor-on-Call and Wellness Services</h3>
          <p className="terms-text">
            Doctor-on-call provides health consultations with consent. Wellness
            classes promote mental and physical health. Health data is securely
            handled. Users must provide accurate health information. Skillorea
            is not liable for medical outcomes.
          </p>

          <h3>Skill Development Classes</h3>
          <p className="terms-text">
            Skill development classes improve user abilities. Topics cover
            various professional skills. Classes are led by experts. Users must
            engage respectfully. Content is for personal use only.
          </p>

          <h3>Student Financial Access and Controls</h3>
          {/* <p>Parental Authorization Framework</p> */}

          <p>Financial activities for students are strictly managed:</p>

          <h5 className="terms-subheading">
            Parental Authorization Requirements:
          </h5>

          <p className="terms-text">
            Transactions need parental approval. Students under 18 are linked to
            parent accounts. We comply with RBI guidelines for minors. Banking
            Regulation Act provisions are followed.
          </p>

          <h5 className="terms-subheading">Transaction Limitations:</h5>

          <p className="terms-text">
            One cash withdrawal is allowed per month. Parental limits apply to
            withdrawal amounts. The transaction history is visible to parents.
            No overdraft facilities are offered. Extra transactions need special
            authorization.
          </p>

          <h5 className="terms-subheading">Account Security Measures</h5>
          <p className="terms-text">
            Two-factor authentication is mandatory. Students and parents have
            separate logins. SMS/email notifications track transactions. Account
            changes have a 2 to 3 business days.
          </p>

          <h5 className="terms-subheading">Parental Control Features</h5>
          <p className="terms-text">
            Parents can set transaction limits. They can freeze or unfreeze
            accounts. Real-time notifications keep parents informed. Full access
            control is provided.
          </p>

          <h3>Refund and Cancellation Policy</h3>
          <p className="terms-text">
            <strong>Refund Policy:</strong>Course purchases are refundable
            within 7 business days. Contact{" "}
            <a href="mailto:support@skillorea.com">support@skillorea.com</a> for
            requests.
          </p>
          <p className="terms-text">
            <strong>Cancellation Policy:</strong>Subscriptions can be cancelled
            anytime. No charges apply post-cancellation. Access continues until
            the billing cycle ends.
          </p>

          <h3>Legal Framework and Compliance</h3>
          <p>We comply with:</p>

          <ul>
            <li>RBI Circular DBOD.No.Leg.BC.55/09.07.005/2005-06.</li>
            <li>Know Your Customer (KYC) norms for minors.</li>
            <li>Prevention of Money Laundering Act, 2002.</li>
            <li>Information Technology Act, 2000.</li>
            <li>Indian Contract Act, 1872.</li>
            <li>Guardian and Wards Act, 1890.</li>
          </ul>

          <h3>Digital Payment Security Controls</h3>
          <p className="terms-text">
            We ensure secure payment processing. All transactions follow RBI
            guidelines. Regular audits maintain payment security.
          </p>

          <h3>Data Protection and Privacy</h3>
          <p className="terms-text">
            Minors’ financial and health data are protected. We comply with the
            Personal Data Protection Bill. Regular security audits are
            conducted. Authorization records are securely stored.
          </p>

          <h3>Third-Party Links</h3>
          <p className="terms-text">
            SKILLOREA may link to third-party sites. We are not responsible for
            their content. Use them at your own risk
          </p>

          <h3>Limitation of Liability</h3>
          <p className="terms-text">
            SKILLOREA is not liable for indirect damages. This includes data
            loss or service interruptions. Liability is limited to the amount
            paid.
          </p>

          <h3>Dispute Resolution</h3>
          <p className="terms-text">
            Disputes are resolved through arbitration in Coimbatore. Arbitration
            follows the Arbitration and Conciliation Act, 1996. Indian law
            governs all proceedings.
          </p>

          <h3>Contact Information</h3>

          <ul>
            <li>Grievance Officer: Kumar Periasamy P</li>
            <li>
              Location: 53-2, Second Floor, MKP Colony Main St, Ganapathy,
              Coimbatore, Tamil Nadu-641006
            </li>
            <li>
              Email:{" "}
              <a href="mailto:support@skillorea.com">support@skillorea.com</a>
            </li>
            <li>Contact: +91 97 90 19 17 17</li>
          </ul>

          <h3>Changes and Governing Law</h3>

          <p className="terms-text">
            We may modify these terms anytime. Continued use implies acceptance
            of changes. Terms are governed by Indian law. Disputes fall under
            Indian jurisdiction.
          </p>

          <p className="terms-text">
            By using SKILLOREA, you agree to all terms, including special
            provisions for students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
