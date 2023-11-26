import React from "react";

function CategoryCard(props) {
  return (
    <div className="category-card">
      <img src={props.iconSrc} alt={props.categoryName}></img>
      <p>{props.categoryName}</p>
    </div>
  );
}

export default CategoryCard;
