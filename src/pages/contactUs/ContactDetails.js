import emailIcon from "../../static/images/icons/icons8-email-50.png";
import callIcon from "../../static/images/icons/icons8-call-50.png";
import addressIcon from "../../static/images/icons/icons8-address-50.png";

const detailCards = [
  {
    id: 1,
    icon: addressIcon,
    title: "Address",
    details: [
      "#150, LocalBuzz,",
      "Golchakkar, Noida sector 52,",
      "Uttar Pradesh, 201301",
    ],
  },
  {
    id: 2,
    icon: emailIcon,
    title: "Email",
    details: ["localbuzz@gmail.com"],
  },
  {
    id: 3,
    icon: callIcon,
    title: "Call",
    details: ["+91 87459 28801"],
  },
];

export default function ContactDetails() {
  return (
    <div className="sub-container green-background">
      <div className="block-container ">
        <div className="contact-details">
        {/* map all the details */}
          {detailCards.map((card) => (
            <div key={card.id} className="detail-card">
              <div className="icon">
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <div className="detail-card-value">
                <h2>{card.title}</h2>
                {card.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
