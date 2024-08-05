import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Aptitude Test 
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
