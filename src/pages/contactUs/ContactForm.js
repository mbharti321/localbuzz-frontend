export default function ContactForm() {
  return (
    <div>
      {/* Contact form */}
      <div className="sub-container white-background">
        <div className="block-container ">
          <div className="contact-container">
            <div className="contact-form">
              <form>
                <h2>Contact Us Now</h2>
                <label htmlFor="name">
                  Name:<span className="impStar">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />

                <label htmlFor="email">
                  Email:<span className="impStar">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />

                <label htmlFor="phone">
                  Phone number:<span className="impStar">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 9000000000"
                  required
                />

                <label htmlFor="message">
                  Message:<span className="impStar">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi there, I'm interested in..."
                  required
                ></textarea>

                <button type="submit">Send message</button>
              </form>
              <div className="contact-image">
                <img
                  src="https://i.postimg.cc/65DK67jz/3d-casual-life-man-chatting-remotely-with-female-colleague.png"
                  alt="Contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
