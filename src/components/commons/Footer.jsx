import { Link } from "react-router-dom";
import FooterLogo from "../../assets/footer_logo.png";
import { NavLinks } from "./Navbar";

const Footer = () => {
  return (
    <footer>
      <div className="foot-logo">
        <img src={FooterLogo} alt="footer_logo" />
      </div>
      <div className="foot-nav">
        <nav>{<NavLinks />}</nav>
        <nav>
          <ul>
            <Link>
              <li>Facebook</li>
            </Link>
            <Link>
              <li>Twitter</li>
            </Link>
            <Link>
              <li>Instagram</li>
            </Link>
            <Link>
              <li>ShareChat</li>
            </Link>
          </ul>
        </nav>
        <nav>
          <ul>
            <Link>
              <li>Bangalore</li>
            </Link>
            <Link>
              <li>Hydrabad</li>
            </Link>
            <Link>
              <li>Mumbai</li>
            </Link>
            <Link>
              <li>Delhi</li>
            </Link>
            <Link>
              <li>Kolkata</li>
            </Link>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
