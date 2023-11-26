import React from "react";
import StarRating from "../../../utilsComponents/StarRatings/StartRating";
// {
//   title: "Max Green Bazaar",
//   category: "Supermarket",
//   rating: "5",
//   imageSrc: fitness_icon,
//   location: "Bengaluru",
//   description: "Max Green Bazaar is one of the best for daily needs shopping",
// }
function FeaturedBusinessCard(props) {
  const business = props.featuredBusiness;
  // console.log("business", business);
  return (
    <div className="featured-business-card">
      <div className="header">
        <img src={business.imageSrc} alt={business.title}></img>
        <div className="header-details">
          <h5 className="business-title">{business.title}</h5>
          <div className="row2">
            <h5 className="business-category">{business.category}</h5>
            <h5 className="business-location">📍{business.location}</h5>
          </div>
          <div className="row3">
            <StarRating rating={business.rating} />
          </div>
        </div>
      </div>organise 
      <p className="business-description">{business.description}</p>
      <div className="see-more">
        <a href="#">
          <span>See more</span> <span className="arrow">🠆</span>
        </a>
      </div>

      {/* 
      <div className="featured-business-card">
        <div className="card-image">
          <img src={business.imageSrc} alt={business.title} />
        </div>
        <div className="card-details">
          <h3 className="business-title">{business.title}</h3>
          <p className="business-category">{business.category}</p>
          <div className="rating">
            <span className="star">&#9733;</span>
            <span className="rating-value">{business.rating}</span>
          </div>
          <p className="business-location">{business.location}</p>
          <p className="business-description">{business.description}</p>
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedBusinessCard;

// import React from "react";

// const FeaturedBusinessCard = (props) => {
//   const business = props.business;
//   return (
//     <div className="featured-business-card">
//       <div className="card-image">
//         <img src={business.imageSrc} alt={business.title} />
//       </div>
//       <div className="card-details">
//         <h3 className="business-title">{business.title}</h3>
//         <p className="business-category">{business.category}</p>
//         <div className="rating">
//           <span className="star">&#9733;</span>
//           <span className="rating-value">{business.rating}</span>
//         </div>
//         <p className="business-location">{business.location}</p>
//         <p className="business-description">{business.description}</p>
//       </div>
//     </div>
//   );
// };

// export default FeaturedBusinessCard;
