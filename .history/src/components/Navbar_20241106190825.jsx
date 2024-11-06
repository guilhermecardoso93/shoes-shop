import { MapPin } from "lucide-react";
import logo from "../assets/logo.svg";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <img src={logo} alt="" />
        <ul>
          <li>Menu</li>
          <li>Rewards</li>
          <li>Gift Card</li>
        </ul>
      </div>
      <div className="navbar-items-right">
        <div className="find-icon">
          <MapPin  />
          <p >Find a Store</p>
        </div>

        <div className="buttons">
          <button className="btn-sign">Sign In</button>
          <button className="btn-join">Join Now</button>
        </div>
      </div>
    </div>
  );
}
