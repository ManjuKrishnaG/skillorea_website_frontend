import "../assets/styles/termsandconditions.css";

const TermsAndConditions = () => {
  return (
    <section className="terms-conditions-wrapper">
      <div className="terms-conditions-content">
        <h2 className="terms-heading">Terms and Conditions</h2>

        {/* Policy Text Content */}
        <div className="terms-text-box">
          <h3>Introduction</h3>

          <p className="terms-text">
            SKILLOREA, operated by BR ACADEMY PRIVATE LIMITED under KOVAI TECH
            INDIA GROUP, is committed to protecting your privacy. This policy
            governs your use of the SKILLOREA Learning App, www.skillorea.com,
            and related services. We strive to maintain the highest standards of
            security and user privacy while providing excellent educational
            services.
          </p>

          <h3>Information Collection and Use</h3>

          <ul>
            <li>
              Personal details including name, age, email, location, and phone
              number which are essential for creating and maintaining your
              account and providing personalized services
            </li>
            <li>
              Transaction information related to any purchases or financial
              activities conducted through our platform
            </li>
            <li>
              Support-related communications to help us better assist you with
              any issues or queries
            </li>
            <li>
              Camera and microphone access may be required for certain classroom
              experiences to ensure interactive learning
            </li>
            <li>
              All sessions are recorded for quality assurance and training
              purposes
            </li>
          </ul>

          <h3>Automatically Collected Information</h3>

          <h4 className="terms-subheading">
            Our system automatically collects:
          </h4>

          <ul>
            <li>
              Device information including device ID, IP address, and operating
              system
            </li>
            <li>
              Usage patterns to understand how our services are being utilized
            </li>
            <li>Browser information for optimization</li>
            <li>Payment processing data for secure transactions</li>
          </ul>

          <h4 className="terms-subheading">Data Usage and Sharing</h4>

          <ul>
            <li>
              Service Improvement: Constant analysis of user interaction helps
              us enhance our platform
            </li>
            <li>
              Content Personalization: Your learning patterns help us tailor
              content to your needs
            </li>
            <li>
              Pattern Analysis: We study learning behaviors to optimize our
              teaching methods
            </li>
            <li>
              Communication: Important updates and relevant information are
              shared as needed
            </li>
          </ul>

          <h3>Information Sharing Guidelines</h3>
          <h5 className="terms-subheading">We may share information:</h5>

          <ul>
            <li>For legal compliance purposes</li>
            <li>To protect our rights and interests</li>
            <li>With trusted service providers who assist in operations</li>
            <li>For behavioral analysis to improve services</li>
            <li>With company subsidiaries and affiliates as needed</li>
          </ul>

          <h3>Security and Data Storage</h3>
          <h5 className="terms-subheading">
            Our commitment to security is demonstrated through:
          </h5>
          <p className="terms-text">
            Our platform implements comprehensive security measures to protect
            user data. All communications are secured using industry-standard
            protocols, and we perform regular security updates to maintain data
            integrity. We retain user data for a minimum of three years after
            account deactivation to comply with regulatory requirements and
            ensure service continuity.
          </p>

          <h3>User Rights and Consent</h3>
          <h5 className="terms-subheading">We may share information:</h5>

          <ul>
            <li>For legal compliance purposes</li>
            <li>To protect our rights and interests</li>
            <li>With trusted service providers who assist in operations</li>
            <li>For behavioral analysis to improve services</li>
            <li>With company subsidiaries and affiliates as needed</li>
          </ul>

          <p>
            For users under 18, parental consent is mandatory for account
            creation and platform use.
          </p>
          <h3>Terms of Use</h3>
          {/* <p>Intellectual Property Rights:</p> */}
          <h5 className="terms-subheading">Intellectual Property Rights</h5>
          <p className="terms-text">
            All content available on SKILLOREA is proprietary and protected by
            copyright laws. Users are granted a limited personal, non-commercial
            use license. Any reproduction or distribution without explicit
            permission is prohibited.
          </p>

          <h5 className="terms-subheading">Prohibited Activities</h5>
          <p>The following activities are strictly forbidden:</p>

          <ul>
            <li>Unauthorized commercial use of platform content</li>
            <li>Posting or sharing harmful or illegal content</li>
            <li>Interfering with service operations</li>
            <li>Data harvesting or unauthorized data collection</li>
            <li>Attempting unauthorized access to platform systems</li>
          </ul>

          <h3>Student Financial Access and Controls</h3>
          {/* <p>Parental Authorization Framework</p> */}

          <p>
            All financial activities involving students are governed by strict
            protocols:
          </p>

          <h5 className="terms-subheading">
            Parental Authorization Requirements:
          </h5>

          <ul>
            <li>
              All financial transactions require explicit parental authorization
            </li>
            <li>
              Students under 18 must maintain linked parent/guardian accounts
            </li>
            <li>Complete compliance with RBI guidelines on minor accounts</li>
            <li>Adherence to Banking Regulation Act provisions</li>
          </ul>

          <h5 className="terms-subheading">Transaction Limitations:</h5>

          <ul>
            <li>One cash withdrawal permitted per calendar month</li>

            <li>Maximum withdrawal amounts subject to parental limits</li>
            <li>
              Full transaction history visibility to both student and parent
            </li>
            <li>No overdraft facilities</li>
            <li>Special authorization required for additional transactions</li>
          </ul>

          <h5 className="terms-subheading">Account Security Measures</h5>
          <p>We maintain robust security through:</p>

          <ul>
            <li>Mandatory two-factor authentication for all transactions</li>
            <li>Separate login credentials for student and parent accounts</li>
            <li>Automated SMS/email notifications for all transactions</li>
            <li>24-hour cooling period for account setting changes</li>
          </ul>

          <h5 className="terms-subheading">Parental Control Features</h5>
          <p>Parents are provided with comprehensive control options:</p>

          <ul>
            <li>Custom transaction limit settings</li>
            <li>Account freeze/unfreeze capabilities</li>
            <li>Real-time transaction notifications</li>
            <li>Complete access control</li>
          </ul>

          <h3>Legal Framework and Compliance</h3>
          <p>Our operations comply with:</p>

          <ul>
            <li>RBI Circular DBOD.No.Leg.BC.55/09.07.005/2005-06</li>
            <li>Know Your Customer (KYC) norms for minors</li>
            <li>Prevention of Money Laundering Act, 2002</li>
            <li>Information Technology Act, 2000</li>
            <li>Indian Contract Act, 1872</li>
            <li>Guardian and Wards Act, 1890</li>
            <li>Digital Payment Security Controls</li>
          </ul>

          <h3>Data Protection and Privacy</h3>
          <p>We implement:</p>
          <ul>
            <li>Enhanced protection protocols for minors financial data</li>
            <li>Compliance with Personal Data Protection Bill</li>
            <li>Regular security audits</li>
            <li>Secure storage of all authorization records</li>
          </ul>

          <h3>Contact Information</h3>

          <ul>
            <li>Grievance Officer: Kumar Periasamy P</li>
            <li>
              Location: 53-2, Second Floor, MKP Colony Main St, Ganapathy,
              Coimbatore, Tamil Nadu-641006
            </li>
            <li>Email: support@skillorea.com</li>
            <li>Contact: +91 979 019 1717</li>
          </ul>

          <h3>Changes and Governing Law</h3>

          <p className="terms-text">
            We reserve the right to modify these terms at any time. Continued
            use of the platform implies acceptance of any changes. All terms are
            governed by Indian law, and disputes are subject to Indian
            jurisdiction
          </p>

          <p className="terms-text">
            By using SKILLOREA services, users acknowledge and agree to all
            terms and conditions, including special provisions for student
            financial access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
