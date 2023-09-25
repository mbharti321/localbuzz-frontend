import React from "react";
import heroImg from "../../../static/images/hero-image.webp";
import "./CallToAction.css";

function CallToAction() {
  return (
    <div className="sub-container green-background">
      <div className="block-container green-background">
        <section className="cta">
          <div className="cta-content">
            <h2>Ready to find the perfect business?</h2>
            <p>Search and discover a wide range of businesses in your area.</p>
            <form>
              <input
                className="search-input-field"
                placeholder="Company or category"
                name="query"
                type="search"
                data-home-search-input="true"
                value=""
              />
              <div className="cta-button">
                <button>Search</button>
              </div>
            </form>
          </div>
          <div>
            <img src={heroImg} alt="Local Buzz"></img>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CallToAction;