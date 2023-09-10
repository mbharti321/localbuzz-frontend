import logo from '../static/logos/Local Buzz-logos_transparent.png';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt='Local Buzz' className='logo'></img>
      <h1>Welcome to My React Website</h1>
    </header>
  );
}

