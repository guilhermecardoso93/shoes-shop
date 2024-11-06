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
    </div>
  );
}
