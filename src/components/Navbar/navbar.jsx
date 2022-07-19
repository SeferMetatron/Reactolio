import "./navbar.css";
import logo from "./logoipsum-logo-12.svg";
const Navbar = () => {
  return (
    <div className="main-header">
      <div className="main-navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#" className="nav-link">
              About me
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-link">
              Queries
            </a>
          </li>
        </ul>

        <button className="nav-button">Ping me</button>
      </div>
    </div>
  );
};
export default Navbar;
