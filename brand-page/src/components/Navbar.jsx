
import './Navbar.css'

const Navbar = () => {
  return(
    <div className="navbar">
    <nav>
      <div className="logo">
      <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <div className="links">
        <a href="#" className="nav-link">
          Menu
        </a>
        <a href="#" className="nav-link">
          Location
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>

      <button className="loginBtn">Login</button>
    </nav>
  </div>
  )
};

export default Navbar;

