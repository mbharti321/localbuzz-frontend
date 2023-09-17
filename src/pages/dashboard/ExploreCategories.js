import React from "react";
import heroImg from "../../static/images/hero-image.webp";
import icons from "../../static/images/logos/Local Buzz-logos_transparent.png";

// var icon = "hello";

function ExploreCategories() {
  return (
    <div className="sub-container white-background">
      <div className="block-container">
        <section className="explore-categories">
          {/* \title row */}
          <div className="explore-title-row">
            <h2>Explore Categories</h2>
            <form>
              <div className="cta-button">
                <button>View all</button>
              </div>
            </form>
          </div>

          <div className="categories-container">
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank holllll</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={icons} alt="icon"></img>
              <p>Bank</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExploreCategories;
