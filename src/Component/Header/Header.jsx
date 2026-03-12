import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Priyanka</h1>
      </div>

      <nav>
        <ul>
          <li><HashLink smooth to="/#home">Home</HashLink></li>
          <li><HashLink smooth to="/#about">About</HashLink></li>
          <li><HashLink smooth to="/#skills">Skills</HashLink></li>
          <li><HashLink smooth to="/#contact">Contact</HashLink></li>
        
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;