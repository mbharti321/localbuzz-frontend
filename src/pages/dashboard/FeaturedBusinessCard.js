import React from "react";
// {
//   title: "Max Green Bazaar",
//   category: "Supermarket",
//   rating: "5",
//   imageSrc: fitness_icon,
//   location: "Bengaluru",
//   description: "Max Green Bazaar is one of the best for daily needs shopping",
// }
function FeaturedBusinessCard(props) {
  const featuredBusiness = props.featuredBusiness;
  const business = featuredBusiness;
  // console.log("featuredBusiness", featuredBusiness);
  return (
    <div className="featured-business-card">
      <div className="header">
        <img src={featuredBusiness.imageSrc} alt={featuredBusiness.title}></img>
        <h5>{featuredBusiness.title}</h5>
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
//   const business = props.featuredBusiness;
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
