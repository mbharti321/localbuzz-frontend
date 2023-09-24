import React from "react";
import CategoryCard from "./CategoriesCard";
import categoriesData from "./categoriesData";

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
            {/* Load all category cards */}
            {categoriesData.map((category, index) => (
              <CategoryCard
                index={index}
                categoryName={category.title}
                iconSrc={category.iconSrc}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExploreCategories;
