import logo from "../static/images/logos/Local Buzz-logos_transparent.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sub-container">
      <div className="block-container" style={{ padding: "0 0" }}>
        <header className="header-container">
          <Link to="/">
            <img src={logo} alt="Local Buzz" className="logo"></img>
          </Link>
          <div className="nav-bar">
            <Link to="/" className="nav active">
              Home
            </Link>
            <Link to="/contact" className="nav">
              Contact Us
            </Link>
            <Link to="/about" className="nav">
              About Us
            </Link>
            <Link to="/search" className="nav">
              Search
            </Link>
            <Link to="/" className="nav">
              Following
            </Link>
            <Link to="/" className="nav header-button">
              For business
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
