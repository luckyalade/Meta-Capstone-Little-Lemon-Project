import Logo from "../../assets/images/Logo .svg";
import NavigationStyle from "../Navigation/NavigationStyle.css";

const Navigation = () => {
  return (
    <div style={NavigationStyle}>
      <nav>
        <div>
          <img src={Logo} alt="" height="45x" />
        </div>
        <ul className="link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/menu">Reservations</a>
          </li>
          <li>
            <a href="/onlineOrders">Online Order</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
