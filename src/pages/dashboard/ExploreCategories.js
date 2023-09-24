import React from "react";
import bank_icon from "../../static/images/icons/bank-building.png";
import insurance_icon from "../../static/images/icons/umbrella.png";
import car_icon from "../../static/images/icons/car.png";
import fitness_icon from "../../static/images/icons/fitness.png";
import dumbbell_icon from "../../static/images/icons/dumbbell.png";
import furniture_icon from "../../static/images/icons/sofa.png";
import jewelry_icon from "../../static/images/icons/jewelry.png";
import pet_icon from "../../static/images/icons/cat-footprint.png";
import electronics_icon from "../../static/images/icons/electronics.png";
import energy_icon from "../../static/images/icons/energy.png";
import real_estate_icon from "../../static/images/icons/real-estate.png";
import clothing_icon from "../../static/images/icons/clothing.png";
import travel_insurance_icon from "../../static/images/icons/travel-plane.png";

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
              <img src={bank_icon} alt="icon"></img>
              <p>Bank</p>
            </div>
            <div className="category-card">
              <img src={car_icon} alt="icon"></img>
              <p>Car Dealer</p>
            </div>
            <div className="category-card">
              <img src={furniture_icon} alt="icon"></img>
              <p>Furniture Store</p>
            </div>
            <div className="category-card">
              <img src={jewelry_icon} alt="icon"></img>
              <p>Jewelry Store</p>
            </div>
            <div className="category-card">
              <img src={travel_insurance_icon} alt="icon"></img>
              <p>Travel Insurance Company</p>
            </div>
            <div className="category-card">
              <img src={clothing_icon} alt="icon"></img>
              <p>Clothing Store</p>
            </div>
            <div className="category-card">
              <img src={electronics_icon} alt="icon"></img>
              <p>Electronics & Technology</p>
            </div>
            <div className="category-card">
              <img src={fitness_icon} alt="icon"></img>
              <p>Fitness and Nutrition</p>
            </div>
            <div className="category-card">
              <img src={dumbbell_icon} alt="icon"></img>
              <p>Gym</p>
            </div>
            <div className="category-card">
              <img src={pet_icon} alt="icon"></img>
              <p>Pet Store</p>
            </div>
            <div className="category-card">
              <img src={energy_icon} alt="icon"></img>
              <p>Energy Supplier</p>
            </div>
            <div className="category-card">
              <img src={real_estate_icon} alt="icon"></img>
              <p>Real Estate Agents</p>
            </div>
            <div className="category-card">
              <img src={insurance_icon} alt="icon"></img>
              <p>Insurance Agency</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExploreCategories;
