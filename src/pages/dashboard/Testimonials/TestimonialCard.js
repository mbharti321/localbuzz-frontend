import React from "react";
// {
//   name: "Manish",
//   title: "Software Engineer",
//   imageSrc: user1,
//   rating: 3,
//   testimonial:
//     "Local buzz is one of the best place to list your business. It do all the background stuff and makes you business more visible.",
// }
function TestimonialCard(props) {
  const customer = props.testimonials;
  // console.log("customer", customer);
  return (
    <div className="testimonial-card">
      <div className="testimonial-img">
        <img src={customer.imageSrc} alt={customer.title}></img>
      </div>
      <div className="testimonial-body">
        <div className="customer-testimonial">
          <p className="quotes">“</p>
         <p> {customer.testimonial}</p>
        </div>
        <div className="footer">
          <div>
            <p className="customer-name">
              {customer.name},
              <span className="customer-title">{customer.title}</span>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
