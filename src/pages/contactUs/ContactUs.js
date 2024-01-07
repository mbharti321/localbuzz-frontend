import Layout from "../../templates/Layout";
import "./ContactUs.css";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactUs() {
  return (
    <Layout>
      {/* Header part */}
      <div className="sub-container ContactUsHeader">
        <div className="block-container">
          <div>
            <h1>Contact Us</h1>
            <p>Wanna connect? Discover the ways to get in touch with us!</p>
          </div>
        </div>
      </div>
      {/* ContactForm */}
      <ContactForm></ContactForm>

      {/* Contact details*/}
      <ContactDetails></ContactDetails>
    </Layout>
  );
}
