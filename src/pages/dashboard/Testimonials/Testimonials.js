import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
import user1 from "../../../static/images/avatars/manish.jpg";
import user2 from "../../../static/images/avatars/manish2.png";

const testimonialsData = [
  {
    name: "Manish",
    title: "Software Engineer",
    imageSrc: user1,
    rating: 3,
    testimonial:
      "Local buzz is one of the best place to list your business. It do all the background stuff and makes you business more visible.",
  },
  {
    name: "Manish2",
    title: "Software",
    imageSrc: user2,
    rating: 3,
    testimonial:
      "Local Buzz works wonders! It takes care of the details, putting your business in the spotlight for maximum visibility. A game-changer!",
  },
  {
    name: "Ranjeet",
    title: "SEO Engineer",
    imageSrc: user2,
    rating: 3,
    testimonial:
      "Local Buzz is a gem! It effortlessly manages the backend, putting your business front and center. A must for boosting visibility and making waves!",
  },
];

// Testimonials
function Testimonials() {
  return (
    <div className="sub-container white-background">
      <div className="block-container">
        <section className="testimonial">
          <div className="testimonial-text">
            <h2>What our customers say</h2>
            <p className="testimonial-description">
              Customers speak louder than words. See what others are saying
              about their experience with us.
            </p>
            <p>Dive into the voices of satisfaction.</p>
          </div>
          <div className="testimonial-container">
            {/* Load all category cards */}
            {testimonialsData.map((testimonials, index) => {
              return (
                <TestimonialCard key={index} testimonials={testimonials} />
              );
            })}
          </div>
          <form>
            <div className="view-all">
              <button>View all</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
