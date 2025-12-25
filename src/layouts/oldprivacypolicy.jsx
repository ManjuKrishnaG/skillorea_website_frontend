import "../assets/styles/termsandconditions.css";

const PrivacyPolicy = () => {
  return (
    <section className="terms-conditions-wrapper">
      <div className="terms-conditions-content">
        <h2 className="terms-heading">Privacy Policy</h2>

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
          <h3>Access and Availability</h3>
          <p className="terms-text">
            Skillorea is available to students in grades 6-12. We strive to
            maintain 99.9% uptime, but access may be occasionally unavailable
            due to scheduled maintenance or technical issues. We will provide
            advance notice whenever possible.
          </p>
          <p className="terms-text">
            Parents or legal guardians must provide consent for students under
            13 years of age in accordance with the Childrens Online Privacy
            Protection Act (COPPA).
          </p>

          <h3>Service Interruptions</h3>
          <ul>
            <li>Scheduled maintenance and updates</li>
            <li>Unexpected technical difficulties</li>
            <li>Security incidents requiring immediate attention</li>
            <li>Third-party service provider outages</li>
          </ul>

          <h3>Device Compatibility</h3>
          <ul>
            <li>iOS devices running iOS 14.0 or higher</li>
            <li>Android devices running Android 8.0 or higher</li>
            <li>
              Web browsers including Chrome, Firefox, Safari, and Edge (two most
              recent versions)
            </li>
          </ul>

          <h3>Updates and Changes</h3>
          <h4 className="terms-subheading">App Updates</h4>
          <ul>
            <li>Automatic: Minor updates install when connected to Wi-Fi</li>
            <li>Manual: Major updates require approval via the app store</li>
            <li>Critical: Security updates may be pushed immediately</li>
          </ul>

          <h4 className="terms-subheading">Feature Modifications</h4>
          <p className="terms-text">
            We reserve the right to modify, add, or remove features. At least 30
            days notice will be provided before significant changes.
          </p>

          <h3>Ethical Conduct</h3>
          <ul>
            <li>Not share account credentials with others</li>
            <li>Not use the app to cheat on assignments</li>
            <li>Not upload inappropriate content</li>
            <li>Not attempt to hack the app</li>
          </ul>

          <h3>Respectful Interaction</h3>
          <ul>
            <li>Use respectful language</li>
            <li>Refrain from cyberbullying</li>
            <li>Respect intellectual property rights</li>
            <li>Report inappropriate behavior</li>
          </ul>

          <h3>Data Collection and Privacy</h3>
          <ul>
            <li>Account information (name, grade level, school)</li>
            <li>Device information (type, operating system)</li>
            <li>Usage data (features used, time spent, study patterns)</li>
          </ul>

          <h3>How We Use Your Data</h3>
          <ul>
            <li>To personalize your learning experience</li>
            <li>To track academic progress</li>
            <li>To improve app functionality</li>
          </ul>

          <h3>Data Sharing</h3>
          <ul>
            <li>With schools and teachers (for enrolled students)</li>
            <li>With parents/guardians (for minors)</li>
            <li>
              With service providers (bound by confidentiality agreements)
            </li>
          </ul>

          <h3>Data Security</h3>
          <p className="terms-text">
            We implement industry-standard encryption and security audits to
            protect student information.
          </p>

          <h3>Data Retention</h3>
          <ul>
            <li>Active accounts: Data retained during account activity</li>
            <li>
              Inactive accounts: Data retained for 24 months after last login
            </li>
            <li>Deleted accounts: Personal data deleted within 90 days</li>
          </ul>

          <h3>Changes to Privacy Policy</h3>
          <p className="terms-text">
            We may update this Privacy Policy. Users will be notified of
            significant changes via email or in-app notifications.
          </p>

          <h3>Contact Information</h3>
          <ul>
            <li>Email: privacy@skillorea.com</li>
            <li>Support: support@skillorea.com</li>
            <li>
              Mail: Skillorea, Inc., [53-2, Second Floor, MKP Colony Main St,
              Ganapathy, Coimbatore, Tamil Nadu-641006]
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
