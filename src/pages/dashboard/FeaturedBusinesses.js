import React from "react";
import FeaturedBusinessCard from "./FeaturedBusinessCard";
import "./FeaturedBusinesses.css";
import maxGreenBazaar from "../../static/images/business/max-green-bazaar.jpg";

const featuredBusinessesData = [
  {
    title: "Max Green Bazaar",
    category: "Supermarket",
    rating: "5",
    imageSrc: maxGreenBazaar,
    location: "Bengaluru",
    description: "Max Green Bazaar is one of the best for daily needs shopping",
  },
];
function FeaturedBusinesses() {
  return (
    <div className="sub-container yellow-background">
      <div className="block-container">
        <section className="featured-business">
          <div className="featured-business-text">
            <h2>Featured Businesses</h2>
            <p className="featured-business-description">
              Highlight a selection of featured businesses on the main page to
              showcase popular or recommended listings.
            </p>
            <p>
              These can be businesses with high ratings, recent additions, or
              premium listings.
            </p>
          </div>
          <div className="featured-business-container">
            {/* Load all category cards */}
            {featuredBusinessesData.map((featuredBusiness, index) => {
              return (
                <FeaturedBusinessCard
                  key={index}
                  featuredBusiness={featuredBusiness}
                />
              );
            })}
          </div>
          <form>
            <div className="button">
              <button>View all</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default FeaturedBusinesses;
