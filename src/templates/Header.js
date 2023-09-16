import logo from "../static/images/logos/Local Buzz-logos_transparent.png";

export default function Header() {

  return (
    <div className="sub-container">
      <div className="block-container">
        <header className="header-container">
          <a href="#"><img src={logo} alt="Local Buzz" className="logo"></img></a>
          <div class="nav-bar">
            <a href="#" class="nav active">
              Home
            </a>
            <a href="#" class="nav">
              Search
            </a>
            <a href="#" class="nav">
              Following
            </a>
            <a href="#" class="nav header-button">
              For business
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
