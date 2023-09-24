import logo from "../static/images/logos/Local Buzz-logos_transparent.png";

export default function Header() {

  return (
    <div className="sub-container">
      <div className="block-container" style={{padding:"0 0"}}>
        <header className="header-container">
          <a href="#"><img src={logo} alt="Local Buzz" className="logo"></img></a>
          <div className="nav-bar">
            <a href="#" className="nav active">
              Home
            </a>
            <a href="#" className="nav">
              Search
            </a>
            <a href="#" className="nav">
              Following
            </a>
            <a href="#" className="nav header-button">
              For business
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
